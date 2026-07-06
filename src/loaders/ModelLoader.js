import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { clone as cloneSkeleton } from 'three/examples/jsm/utils/SkeletonUtils.js';
import { MODEL_CATALOG } from '../data/modelCatalog.js';

function resolveModelUrl(filename) {
  const base = import.meta.env.BASE_URL ?? '/';
  return `${base}models/cc0/${filename}`;
}

function enhanceMeshMaterials(object) {
  object.traverse((child) => {
    if (!child.isMesh) return;
    child.castShadow = true;
    child.receiveShadow = true;
    child.frustumCulled = true;

    const mats = Array.isArray(child.material) ? child.material : [child.material];
    for (const mat of mats) {
      if (!mat) continue;
      if (mat.map) {
        mat.map.anisotropy = 12;
        mat.map.colorSpace = THREE.SRGBColorSpace;
      }
      if (mat.emissiveMap) mat.emissiveMap.colorSpace = THREE.SRGBColorSpace;
      if ('roughness' in mat) mat.roughness = Math.min(mat.roughness ?? 0.72, 0.92);
      if ('metalness' in mat) mat.metalness = Math.min(mat.metalness ?? 0, 0.12);
      mat.needsUpdate = true;
    }
  });
}

/** Mesh-only bounds — ignores stray empty nodes that inflate the bbox. */
export function computeMeshBounds(object) {
  const box = new THREE.Box3();
  let found = false;
  object.updateMatrixWorld(true);
  object.traverse((child) => {
    if (!child.isMesh || !child.geometry) return;
    const geom = child.geometry;
    if (!geom.boundingBox) geom.computeBoundingBox();
    const meshBox = geom.boundingBox.clone();
    meshBox.applyMatrix4(child.matrixWorld);
    if (found) box.union(meshBox);
    else { box.copy(meshBox); found = true; }
  });
  return found ? box : new THREE.Box3().setFromObject(object);
}

export function snapToGround(object, y = 0) {
  const box = computeMeshBounds(object);
  object.position.y += y - box.min.y;
  return object;
}

function normalizeModel(object, { targetHeight, maxFootprint, maxHeight }) {
  object.updateMatrixWorld(true);
  let box = computeMeshBounds(object);
  let size = box.getSize(new THREE.Vector3());

  if (targetHeight && size.y > 0.0001) {
    const scale = targetHeight / size.y;
    object.scale.multiplyScalar(scale);
    object.updateMatrixWorld(true);
    box = computeMeshBounds(object);
    size = box.getSize(new THREE.Vector3());
  }

  const footprint = Math.max(size.x, size.z);
  if (maxFootprint && footprint > maxFootprint) {
    const scale = maxFootprint / footprint;
    object.scale.multiplyScalar(scale);
    object.updateMatrixWorld(true);
    box = computeMeshBounds(object);
    size = box.getSize(new THREE.Vector3());
  }

  if (maxHeight && size.y > maxHeight) {
    object.scale.multiplyScalar(maxHeight / size.y);
    object.updateMatrixWorld(true);
    box = computeMeshBounds(object);
  }

  object.position.y -= box.min.y;
  object.updateMatrixWorld(true);
  return object;
}

function buildActionMap(mixer, animations) {
  const actions = {};
  for (const clip of animations) {
    const action = mixer.clipAction(clip);
    action.clampWhenFinished = true;
    actions[clip.name.toLowerCase()] = action;
  }
  return actions;
}

export class ModelLoader {
  constructor() {
    this.loader = new GLTFLoader();
    this.templates = new Map();
    this.characterTemplates = new Map();
    this.failed = new Map();
    this.loadedKeys = [];
  }

  has(key) {
    return (this.templates.has(key) || this.characterTemplates.has(key)) && !this.failed.has(key);
  }

  getLoadReport() {
    return {
      loaded: [...this.loadedKeys],
      failed: Object.fromEntries(this.failed),
      total: this.loadedKeys.length + this.failed.size,
    };
  }

  async loadAll(catalog = MODEL_CATALOG, onProgress) {
    const entries = Object.entries(catalog);
    let loaded = 0;
    const resourcePath = resolveModelUrl('');

    await Promise.all(
      entries.map(async ([key, def]) => {
        const url = resolveModelUrl(def.file);
        try {
          this.loader.setResourcePath(resourcePath);
          const gltf = await this.loader.loadAsync(url);
          const root = gltf.scene;
          enhanceMeshMaterials(root);
          normalizeModel(root, {
            targetHeight: def.targetHeight,
            maxFootprint: def.maxFootprint,
            maxHeight: def.maxHeight,
          });
          root.traverse((c) => { c.userData.modelKey = key; });

          if (def.rigged) {
            this.characterTemplates.set(key, {
              scene: root,
              animations: gltf.animations ?? [],
            });
          } else {
            this.templates.set(key, root);
          }
          this.loadedKeys.push(key);
        } catch (error) {
          const msg = error?.message ?? String(error);
          console.warn(`ModelLoader: failed "${key}" from ${url}: ${msg}`);
          this.failed.set(key, { file: def.file, url, error: msg });
        } finally {
          loaded += 1;
          onProgress?.(`Loading 3D models… (${loaded}/${entries.length})`);
        }
      }),
    );

    if (this.failed.size > 0) {
      console.warn('ModelLoader report:', this.getLoadReport());
    }
  }

  createCharacterInstance(key, options = {}) {
    const template = this.characterTemplates.get(key);
    if (!template || this.failed.has(key)) return null;

    const def = MODEL_CATALOG[key] ?? {};
    const { rotationY = 0 } = options;

    const model = cloneSkeleton(template.scene);
    model.traverse((child) => {
      if (!child.isMesh || !child.material) return;
      if (Array.isArray(child.material)) {
        child.material = child.material.map((m) => m.clone());
      } else {
        child.material = child.material.clone();
      }
    });

    const mixer = new THREE.AnimationMixer(model);
    const actions = buildActionMap(mixer, template.animations);

    const wrapper = new THREE.Group();
    if (rotationY) model.rotation.y = rotationY;
    wrapper.add(model);

    wrapper.userData.isRiggedCharacter = true;
    wrapper.userData.mixer = mixer;
    wrapper.userData.actions = actions;
    wrapper.userData.currentAnim = null;
    wrapper.userData.legs = null;
    wrapper.userData.arms = null;
    wrapper.userData.walkPhase = 0;
    wrapper.userData.sitBlend = 0;
    wrapper.userData.modelKey = key;
    wrapper.userData.dynamic = true;

    this._playCharacterAnim(wrapper, 'idle', 0);

    return wrapper;
  }

  _playCharacterAnim(character, animName, fade = 0.2) {
    const actions = character.userData.actions;
    const next = actions?.[animName];
    if (!next) return;

    const prevName = character.userData.currentAnim;
    const prev = prevName ? actions[prevName] : null;

    next.reset();
    next.setEffectiveWeight(1);
    next.setLoop(
      ['sit', 'static'].includes(animName) ? THREE.LoopOnce : THREE.LoopRepeat,
      ['sit', 'static'].includes(animName) ? 1 : Infinity,
    );
    next.play();

    if (prev && prev !== next && fade > 0) {
      prev.crossFadeTo(next, fade, false);
    } else if (prev && prev !== next) {
      prev.stop();
    }

    character.userData.currentAnim = animName;
  }

  updateCharacterAnimation(character, speed, dt) {
    if (!character?.userData?.isRiggedCharacter) return;
    character.userData.mixer?.update(dt);

    const isSitting = character.userData.isSitting;
    const isJumping = character.userData.isJumping;
    let target = 'idle';
    if (isJumping) target = 'jump';
    else if (isSitting) target = 'sit';
    else if (speed > 4.5) target = 'sprint';
    else if (speed > 0.15) target = 'walk';

    if (character.userData.currentAnim !== target) {
      this._playCharacterAnim(character, target, 0.18);
    }
  }

  playCharacterEmote(character, emoteName, duration = 1.2) {
    if (!character?.userData?.isRiggedCharacter) return;
    const actions = character.userData.actions;
    const emote = actions?.[emoteName];
    if (!emote) return;

    const resume = character.userData.isSitting ? 'sit' : 'idle';
    this._playCharacterAnim(character, emoteName, 0.12);

    clearTimeout(character.userData._emoteTimer);
    character.userData._emoteTimer = setTimeout(() => {
      if (character.userData.currentAnim === emoteName) {
        this._playCharacterAnim(character, resume, 0.2);
      }
    }, duration * 1000);
  }

  createInstance(key, options = {}) {
    const template = this.templates.get(key);
    if (!template || this.failed.has(key)) return null;

    const def = MODEL_CATALOG[key] ?? {};
    const {
      targetHeight = def.targetHeight,
      maxFootprint = def.maxFootprint,
      maxHeight = def.maxHeight,
      scale = 1,
      tint = null,
      tintStrength = 0.28,
      rotationY = 0,
    } = options;

    const instance = template.clone(true);
    instance.scale.set(1, 1, 1);
    instance.position.set(0, 0, 0);
    instance.rotation.set(0, 0, 0);

    instance.traverse((child) => {
      if (!child.isMesh || !child.material) return;
      if (Array.isArray(child.material)) {
        child.material = child.material.map((m) => m.clone());
      } else {
        child.material = child.material.clone();
      }
      if (tint != null) {
        const mats = Array.isArray(child.material) ? child.material : [child.material];
        for (const mat of mats) {
          if (mat.color) mat.color.lerp(new THREE.Color(tint), tintStrength);
        }
      }
    });

    if (scale !== 1) instance.scale.multiplyScalar(scale);

    normalizeModel(instance, { targetHeight, maxFootprint, maxHeight });
    if (rotationY) instance.rotation.y = rotationY;

    instance.userData.modelKey = key;
    instance.userData.isLoadedModel = true;
    return instance;
  }
}
