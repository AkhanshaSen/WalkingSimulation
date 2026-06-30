import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { Town } from './town.js';
import { Player, NPC, InputManager } from './character.js';
import { NPC_PROFILES } from './npcData.js';
import { AMBIENT_NPCS } from './ambientNpcs.js';
import { DialogueManager } from './dialogue.js';
import { InteractionSystem } from './interaction/InteractionSystem.js';
import { InteractableRegistry } from './interaction/InteractableRegistry.js';
import { Minimap } from './minimap.js';
import { Animal } from './entities/Animal.js';
import {
  createBenchProp,
  createTreeProp,
  createShrineProp,
  createShopProp,
  createVendingProp,
} from './entities/WorldProp.js';
import { SHOP_CATALOG } from './data/shopData.js';
import { ANIMAL_DEFINITIONS } from './data/animalData.js';

function closestPointOnPath(path, point, samples = 100) {
  let closestT = 0;
  let minDist = Infinity;
  for (let i = 0; i <= samples; i++) {
    const t = i / samples;
    const p = path.getPointAt(t);
    const dist = p.distanceToSquared(point);
    if (dist < minDist) {
      minDist = dist;
      closestT = t;
    }
  }
  return closestT;
}

const LOCATION_ZONES = [
  { tMax: 0.10, label: '静かな入口 · Town Entrance' },
  { tMax: 0.20, label: '本屋通り · Bookshop Row' },
  { tMax: 0.34, label: '桜通り · Sakura Street' },
  { tMax: 0.46, label: '鳥居坂 · Torii Slope' },
  { tMax: 0.58, label: '朝市 · Morning Market' },
  { tMax: 0.70, label: '神社の参道 · Shrine Approach' },
  { tMax: 0.82, label: '公園 · Town Park' },
  { tMax: 0.93, label: '港の見晴台 · Harbor View' },
  { tMax: 1.0, label: '漁港 · Fishing Port' },
];

export class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.clock = new THREE.Clock();
    this.raycaster = new THREE.Raycaster();
    this.ready = false;

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      powerPreference: 'high-performance',
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.NoToneMapping;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xa8d8d8);
    this.camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      200,
    );

    this.input = new InputManager(canvas);
    this.cameraTarget = new THREE.Vector3();
    this.isMusicPlaying = false;

    // Post-processing: FXAA anti-aliasing only — no bloom (bloom washes out labels)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    this.composer.addPass(new OutputPass());
    // FXAA must come after OutputPass so it reads the final sRGB buffer
    this._fxaaPass = new ShaderPass(FXAAShader);
    this._fxaaPass.material.uniforms.resolution.value.set(
      1 / (window.innerWidth  * Math.min(window.devicePixelRatio, 2)),
      1 / (window.innerHeight * Math.min(window.devicePixelRatio, 2)),
    );
    this.composer.addPass(this._fxaaPass);

    window.addEventListener('resize', () => this._onResize());
  }

  static async create(canvas, onProgress) {
    onProgress?.('Initializing WebGL…');

    let game;
    try {
      game = new Game(canvas);
    } catch (error) {
      throw new Error(`WebGL failed: ${error.message}`);
    }

    try {
      onProgress?.('Building town…');
      game.town = new Town(game.scene);
      await game.town.build(onProgress);

      game.path = game.town.getPath();
      game.path.getClosestPointT = (point) => closestPointOnPath(game.path, point);

      onProgress?.('Spawning characters…');
      game.player = new Player(game.scene, game.path);
      game.npcs = [...NPC_PROFILES, ...AMBIENT_NPCS].map(
        (profile) => new NPC(game.scene, game.path, profile),
      );

      onProgress?.('Spawning animals…');
      game.animals = ANIMAL_DEFINITIONS.map(
        (def) => new Animal(game.scene, game.path, def),
      );

      game.worldProps = [];
      for (const spawn of game.town.getInteractableSpawns()) {
        const { propId, position, rotationY } = spawn;
        if (propId === 'bench') {
          game.worldProps.push(createBenchProp(game.scene, position, rotationY));
        } else if (propId === 'cherry_tree' || propId === 'shrine_tree') {
          game.worldProps.push(createTreeProp(game.scene, position, propId));
        } else if (propId === 'shrine') {
          game.worldProps.push(createShrineProp(game.scene, position, rotationY));
        } else if (propId === 'vending') {
          game.worldProps.push(createVendingProp(game.scene, position, rotationY));
        } else if (propId.startsWith('shop_')) {
          const shopId = propId.slice(5);
          const shopDef = SHOP_CATALOG[shopId];
          if (shopDef) {
            game.worldProps.push(createShopProp(game.scene, position, rotationY, shopId, shopDef.label));
          }
        }
      }

      game.interactables = new InteractableRegistry();
      game.interactables.registerAll(game.npcs, game.animals, game.worldProps);

      game.ready = true;
      return game;
    } catch (error) {
      throw error;
    }
  }

  initInteraction(dialogue, petUI, shopUI) {
    this.dialogue = dialogue;
    this.petUI = petUI;
    this.shopUI = shopUI;
    this.companion = null;
    this.petCompanion = null;
    this.yen = 1000;
    this.locationTag = document.getElementById('location-tag');
    this.petTag = document.getElementById('pet-companion-tag');
    this.petLabel = document.getElementById('pet-companion-label');
    this.petPartBtn = document.getElementById('pet-companion-part');

    dialogue.setGame(this);
    if (shopUI) {
      shopUI.setGame(this);
    }

    this.interaction = new InteractionSystem(
      this.player,
      this.interactables,
      dialogue,
      this,
      petUI,
      shopUI,
    );
    this.interaction.setRewardHandler((reward) => this._handleReward(reward));

    petUI?.setHandlers({
      onAction: (animal, action) => this._handlePetAction(animal, action),
      onInvite: (animal) => this.setPetCompanion(animal),
    });

    this.petPartBtn?.addEventListener('click', () => this.clearPetCompanion());

    this.yenEl = document.getElementById('yen-display');
    this._updateYenHUD();

    const minimapCanvas = document.getElementById('minimap');
    if (minimapCanvas) {
      this.minimap = new Minimap(minimapCanvas, this.path);
      this.minimap.setPlayer(this.player);
      this.minimap.setNpcs(this.npcs);
    }
  }

  spendYen(amount) {
    this.yen = Math.max(0, this.yen - amount);
    this._updateYenHUD();
  }

  earnYen(amount) {
    this.yen += amount;
    this._updateYenHUD();
  }

  _updateYenHUD() {
    if (this.yenEl) this.yenEl.textContent = `💴 ¥${this.yen}`;
  }

  openShop(shopId) {
    if (this.shopUI && shopId) this.shopUI.open(shopId);
  }

  playerRest(duration, position) {
    this.player.rest(duration, position);
  }

  _handlePetAction(animal, action) {
    const result = animal.applyAction(action);
    if (result.message) {
      this.dialogue.showToast(result.message);
    }
    if (result.isFriend && action !== 'shoo') {
      this.dialogue.showToast(`${animal.definition.name} seems to really like you! ♥`);
    }
    return result;
  }

  setCompanion(npc) {
    if (this.companion && this.companion !== npc) {
      this._removeCompanionRing(this.companion);
      this.companion.stopFollowing(true);
    }
    this.companion = npc;
    npc.startFollowing();
    this._addCompanionRing(npc);
    this.dialogue.setCompanionTag(npc);
    this.minimap?.setCompanion(npc);
  }

  clearCompanion() {
    if (this.companion) {
      this._removeCompanionRing(this.companion);
      this.companion.stopFollowing(true);
      this.companion = null;
      this.dialogue.setCompanionTag(null);
      this.minimap?.setCompanion(null);
    }
  }

  _addCompanionRing(npc) {
    if (npc.mesh.userData.companionRing) {
      npc.mesh.userData.companionRing.visible = true;
      return;
    }
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(0.52, 0.045, 6, 24),
      new THREE.MeshBasicMaterial({ color: 0x60e8d8, transparent: true, opacity: 0.82 }),
    );
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 0.06;
    npc.mesh.add(ring);
    npc.mesh.userData.companionRing = ring;
  }

  _removeCompanionRing(npc) {
    const ring = npc.mesh?.userData?.companionRing;
    if (ring) ring.visible = false;
  }

  setPetCompanion(animal) {
    if (this.petCompanion && this.petCompanion !== animal) {
      this.petCompanion.stopFollowing(true);
    }
    this.petCompanion = animal;
    animal.startFollowing();
    this._setPetCompanionTag(animal);
    this.dialogue.showToast(animal.definition.reactions?.friend ?? `${animal.definition.name} is following you!`);
  }

  clearPetCompanion() {
    if (this.petCompanion) {
      this.petCompanion.stopFollowing(true);
      this.petCompanion = null;
      this._setPetCompanionTag(null);
      this.dialogue.showToast('Your pet friend headed home.');
    }
  }

  _setPetCompanionTag(animal) {
    if (!this.petTag) return;
    if (animal) {
      if (this.petLabel) {
        this.petLabel.textContent = `${animal.definition.emoji} ${animal.definition.name} is following`;
      }
      this.petTag.classList.remove('hidden');
    } else {
      this.petTag.classList.add('hidden');
    }
  }

  _handleReward(reward) {
    if (reward.type === 'speedBoost') {
      this.player.applySpeedBoost(reward.amount, reward.duration);
      if (reward.message) this.dialogue?.showToast(reward.message);
    } else if (reward.type === 'companion') {
      this.setCompanion(reward.npc);
    } else if (reward.type === 'dismissCompanion') {
      this.clearCompanion();
    } else if (reward.type === 'journal') {
      this.dialogue?.addJournalEntry?.(reward.title, reward.body, '購入 · Purchase');
    }
  }

  _updateLocationTag() {
    if (!this.locationTag || !this.path) return;
    const t = this.path.getClosestPointT(this.player.position);
    const zone = LOCATION_ZONES.find((z) => t <= z.tMax) ?? LOCATION_ZONES[LOCATION_ZONES.length - 1];
    this.locationTag.textContent = zone.label;
  }

  _onResize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio, 2);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
    this.composer.setSize(w, h);
    if (this._fxaaPass) {
      this._fxaaPass.material.uniforms.resolution.value.set(1 / (w * dpr), 1 / (h * dpr));
    }
  }

  _updateCamera() {
    if (!this.player) return;

    const playerPos = this.player.position;
    const angle = this.input.cameraAngle;
    const pitch = this.input.cameraPitch;
    const dist = this.input.cameraDistance;

    const offset = new THREE.Vector3(
      Math.sin(angle) * Math.cos(pitch) * dist,
      Math.sin(pitch) * dist + 2,
      Math.cos(angle) * Math.cos(pitch) * dist,
    );

    this.cameraTarget.lerp(playerPos.clone().add(new THREE.Vector3(0, 1.2, 0)), 0.1);
    this.camera.position.copy(this.cameraTarget).add(offset);
    this.camera.lookAt(this.cameraTarget);
  }

  update() {
    if (!this.ready) return;

    const dt = Math.min(this.clock.getDelta(), 0.05);
    this.input.update();

    const blocking = this.interaction?.isBlocking() ?? this.dialogue?.isBlocking() ?? this.shopUI?.isOpen() ?? false;
    this.input.dialogueOpen = blocking;

    if (blocking) {
      if (this.dialogue.isOpen()) {
        if (this.input.consumeKey('KeyE') || this.input.consumeKey('Space') || this.input.consumeKey('Enter')) {
          this.dialogue.tryAdvanceFromKey();
        }
      } else if (this.dialogue.approachOpen) {
        if (this.input.consumeKey('KeyE') || this.input.consumeKey('Enter')) {
          this.dialogue._onChatClicked();
        }
        if (this.input.consumeKey('KeyW') && (this.input.keys['AltLeft'] || this.input.keys['AltRight'])) {
          this.dialogue._onWalkClicked();
        }
        if (this.input.consumeKey('KeyX') || this.input.consumeKey('Backspace')) {
          if (this.companion && this.dialogue.npc?.isCompanion) {
            this.dialogue._onPartClicked();
          } else {
            this.dialogue._onIgnoreClicked();
          }
        }
      }
    } else {
      this.interaction?.update(this.input, this.camera, this.canvas);
    }

    this.player.update(this.input, dt, this.town.getGroundMeshes());
    this.npcs.forEach((npc) => npc.update(dt, this.player.position, this.player.facing));

    // Pulse companion ring
    if (this.companion?.mesh?.userData?.companionRing) {
      const ring = this.companion.mesh.userData.companionRing;
      ring.material.opacity = 0.5 + Math.sin(this.clock.elapsedTime * 3) * 0.3;
      ring.rotation.z += dt * 0.8;
    }
    this.animals?.forEach((a) => a.update(dt, this.player.position, this.player.facing));
    this._updateLocationTag();
    this.minimap?.update();
    this.town.update(this.clock.elapsedTime);
    this._updateCamera();
    this.input.endFrame();
  }

  render() {
    this.composer.render();
  }

  start() {
    const loop = () => {
      requestAnimationFrame(loop);
      this.update();
      this.render();
    };
    loop();
  }
}
