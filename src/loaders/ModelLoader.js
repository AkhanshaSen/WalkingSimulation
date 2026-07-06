import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { clone as cloneSkeleton } from 'three/examples/jsm/utils/SkeletonUtils.js';
import { convertMaterialToToon, addOutline } from '../materials.js';
import { MODEL_CATALOG } from '../data/modelCatalog.js';

function resolveModelUrl(filename) {
  const base = import.meta.env.BASE_URL ?? '/';
  return `${base}models/cc0/${filename}`;
}

/** Body-part suffixes that should be kept; everything else is a weapon/accessory. */
// Meshes whose names end with one of these suffixes are kept visible on load.
// Everything else (weapons, accessories) is hidden and may be re-shown selectively.
const BODY_SUFFIXES = [
  '_armleft', '_armright', '_body', '_head', '_legleft', '_legright',
  '_head_hooded',
  '_cape',   // show class capes by default — nice visual flair
];

function isBodyMesh(mesh) {
  const n = mesh.name.toLowerCase();
  return BODY_SUFFIXES.some((s) => n.endsWith(s));
}

function hideAccessories(object) {
  let hasBodyMesh = false;
  object.traverse((child) => {
    if ((child.isMesh || child.isSkinnedMesh) && isBodyMesh(child)) hasBodyMesh = true;
  });
  if (!hasBodyMesh) return; // not a character — leave everything visible
  object.traverse((child) => {
    if (!child.isMesh && !child.isSkinnedMesh) return;
    if (!isBodyMesh(child)) {
      child.visible = false;
    }
  });
}

function enhanceMeshMaterials(object, { outlineScale = 1.055 } = {}) {
  object.traverse((child) => {
    if (!child.isMesh || child.userData.isOutline) return;
    child.castShadow = true;
    child.receiveShadow = true;
    child.frustumCulled = true;

    if (Array.isArray(child.material)) {
      child.material = child.material.map(convertMaterialToToon);
    } else {
      child.material = convertMaterialToToon(child.material);
    }

    if (child.geometry && !child.userData.hasOutline && outlineScale > 1) {
      addOutline(child, outlineScale, 0x0a0a10);
    }
  });
}

/** Mesh-only bounds — ignores stray empty nodes that inflate the bbox. */
export function computeMeshBounds(object) {
  const box = new THREE.Box3();
  let found = false;
  object.updateMatrixWorld(true);
  object.traverse((child) => {
    if (!child.isMesh || !child.geometry || child.visible === false) return;
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

function buildActionMap(mixer, animations) {
  const actions = {};
  for (const clip of animations) {
    const action = mixer.clipAction(clip);
    action.clampWhenFinished = true;
    actions[clip.name.toLowerCase()] = action;
  }

  const aliases = {
    walking_a: 'walk',
    walking_b: 'walk',
    walking_c: 'walk',
    running_a: 'sprint',
    running_b: 'sprint',
    jump_start: 'jump',
    jump_idle: 'jump',
    jump_full_short: 'jump',
    sit_floor_idle: 'sit',
    sit_chair_idle: 'sit',
    unarmed_idle: 'idle',
    cheer: 'emote-yes',
    interact: 'emote-no',
  };
  for (const [from, to] of Object.entries(aliases)) {
    if (actions[from] && !actions[to]) actions[to] = actions[from];
  }
  if (actions.sit_chair_idle) actions.sit = actions.sit_chair_idle;
  else if (actions.sit_floor_idle) actions.sit = actions.sit_floor_idle;

  return actions;
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
          if (def.rigged) hideAccessories(root);
          enhanceMeshMaterials(root, { outlineScale: def.rigged ? 1 : 1.055 });
          normalizeModel(root, {
            targetHeight: def.targetHeight,
            maxFootprint: def.rigged ? null : def.maxFootprint,
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
    const { rotationY = 0, tint = null, tintStrength = 0.22 } = options;

    const model = cloneSkeleton(template.scene);
    model.traverse((child) => {
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
    // Outlines are skipped for rigged characters — they produce oversized black blobs.

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
    if (!next) {
      console.warn(`[Anim] missing clip "${animName}" for`, character.userData.modelKey ?? '?',
        '| available:', Object.keys(actions ?? {}).filter(k => !k.includes('_')).join(' '));
      return;
    }

    const prevName = character.userData.currentAnim;
    const prev = (prevName && prevName !== animName) ? actions[prevName] : null;

    const loopOnce = ['sit', 'static'].includes(animName);
    next.reset();
    next.setEffectiveWeight(1);
    next.setLoop(loopOnce ? THREE.LoopOnce : THREE.LoopRepeat, loopOnce ? 1 : Infinity);
    next.clampWhenFinished = loopOnce;
    next.play();

    if (prev) {
      if (fade > 0) {
        prev.fadeOut(fade);
      } else {
        prev.stop();
      }
    }

    character.userData.currentAnim = animName;
  }

  updateCharacterAnimation(character, speed, dt) {
    if (!character?.userData?.isRiggedCharacter) return;

    const mixer = character.userData.mixer;
    if (!mixer) return;
    mixer.update(dt);

    const isSitting = character.userData.isSitting;
    const isJumping = character.userData.isJumping;
    let target = 'idle';
    if (isJumping) target = 'jump';
    else if (isSitting) target = 'sit';
    else if (speed > 4.5) target = 'sprint';
    else if (speed > 0.15) target = 'walk';

    const actions = character.userData.actions;
    const currentAction = actions?.[character.userData.currentAnim];

    // Switch animation if target changed, OR if current action somehow stopped running.
    if (character.userData.currentAnim !== target ||
        (currentAction && !currentAction.isRunning() && !['sit'].includes(target))) {
      this._playCharacterAnim(character, target, 0.18);
    }

    // Scale walk/sprint playback rate to match movement speed (avoids foot-slide).
    if (target === 'walk' || target === 'sprint') {
      const walkAction = actions?.[target];
      if (walkAction) {
        const baseSpeed = target === 'sprint' ? 6.5 : 3.2;
        walkAction.setEffectiveTimeScale(Math.min(speed / baseSpeed, 2.5));
      }
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
