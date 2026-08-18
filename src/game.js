import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { Town } from './town.js';
import { Player, NPC, InputManager, setCharacterModelLoader, markDynamicSubtree } from './character.js';
import { NPC_PROFILES } from './npcData.js';
import { AMBIENT_NPCS } from './ambientNpcs.js';
import { DialogueManager } from './dialogue.js';
import { InteractionSystem } from './interaction/InteractionSystem.js';
import { InteractableRegistry } from './interaction/InteractableRegistry.js';
import { Minimap } from './minimap.js';
import { ModelLoader } from './loaders/ModelLoader.js';
import { MoodSystem } from './MoodSystem.js';
import { DayNightCycle, computeNightBlend } from './DayNightCycle.js';
import { DayJournal } from './DayJournal.js';
import { QuestSystem } from './QuestSystem.js';
import { setExpression } from './character.js';
import { Animal } from './entities/Animal.js';
import { setAnimalModelLoader } from './entities/animalMeshes.js';
import {
  createTreeProp,
  createShrineProp,
  createToriiProp,
  createHomeProp,
  createShopProp,
  createVendingProp,
} from './entities/WorldProp.js';
import { SHOP_CATALOG } from './data/shopData.js';
import { ANIMAL_DEFINITIONS } from './data/animalData.js';
import { resolveNpcSpawnPositions, applyNpcGroupSeparation } from './npcSeparation.js';
import { MusicManager } from './audio/MusicManager.js';
import { PERF, BOOT_MODEL_KEYS } from './performance.js';

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
  { tMax: 0.08, label: '静かな入口 · Town Entrance' },
  { tMax: 0.16, label: '本屋通り · Bookshop Row' },
  { tMax: 0.28, label: '桜通り · Sakura Street' },
  { tMax: 0.38, label: '鳥居坂 · Torii Slope' },
  { tMax: 0.48, label: '朝市 · Morning Market' },
  { tMax: 0.58, label: '神社の参道 · Shrine Approach' },
  { tMax: 0.68, label: '公園 · Town Park' },
  { tMax: 0.78, label: '港の見晴台 · Harbor View' },
  { tMax: 0.88, label: '漁港 · Fishing Port' },
  { tMax: 0.96, label: '海岸通り · Coastal Path' },
  { tMax: 1.0, label: '岬の灯台 · Cape Outlook' },
];

export class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.clock = new THREE.Clock();
    this.raycaster = new THREE.Raycaster();
    this.ready = false;
    this.perf = PERF;
    this._minimapAccum = 0;

    const dpr = Math.min(window.devicePixelRatio || 1, this.perf.dprMax);
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: false,
      powerPreference: 'high-performance',
    });
    this.renderer.setPixelRatio(dpr);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = this.perf.softShadows
      ? THREE.PCFSoftShadowMap
      : THREE.PCFShadowMap;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.08;

    this.usePostProcessing = this.perf.usePostProcessing;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x91d3c8);
    this.camera = new THREE.PerspectiveCamera(
      42,
      window.innerWidth / window.innerHeight,
      0.1,
      280,
    );

    this.input = new InputManager(canvas);
    this.cameraTarget = new THREE.Vector3();
    this._cameraSmoothed = new THREE.Vector3();
    this._outfitLookY = 1.95;
    this.outfitOpen = false;
    this.music = new MusicManager();

    if (this.usePostProcessing) {
      this.composer = new EffectComposer(this.renderer);
      this.composer.addPass(new RenderPass(this.scene, this.camera));
      this.composer.addPass(new OutputPass());
      this._fxaaPass = new ShaderPass(FXAAShader);
      this._fxaaPass.material.uniforms.resolution.value.set(
        1 / (window.innerWidth * dpr),
        1 / (window.innerHeight * dpr),
      );
      this.composer.addPass(this._fxaaPass);
    }

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
      onProgress?.('Loading essentials…');
      game.modelLoader = new ModelLoader();
      await game.modelLoader.loadKeys(BOOT_MODEL_KEYS, undefined, onProgress);
      setCharacterModelLoader(game.modelLoader);
      setAnimalModelLoader(game.modelLoader);

      game.town = new Town(game.scene, game.modelLoader);
      await game.town.build(onProgress);

      game.path = game.town.getPath();
      game.path.getClosestPointT = (point) => closestPointOnPath(game.path, point);

      onProgress?.('Spawning characters…');
      game.player = new Player(game.scene, game.path);
      game.player.colliderWorld = game.town.colliders;
      game.player.walkableCurves = game.town.getWalkableCurves();
      markDynamicSubtree(game.player.mesh);

      const startTangent = game.path.getTangentAt(0.05);
      game.input.cameraAngle = Math.atan2(-startTangent.x, -startTangent.z);

      game.npcs = NPC_PROFILES.map(
        (profile) => new NPC(game.scene, game.town.getPathForId(profile.pathId), profile),
      );

      if (PERF.deferAmbientContent) {
        game.animals = [];
        game._ambientPending = true;
      } else {
        const ambient = AMBIENT_NPCS.map((profile) => ({ ...profile, isAmbient: true })).map(
          (profile) => new NPC(game.scene, game.town.getPathForId(profile.pathId), profile),
        );
        game.npcs.push(...ambient);
        game.animals = ANIMAL_DEFINITIONS.map(
          (def) => new Animal(game.scene, game.town.getPathForId(def.pathId), def),
        );
        game.animals.forEach((a) => markDynamicSubtree(a.mesh));
        game._ambientPending = false;
      }

      resolveNpcSpawnPositions(game.npcs);
      game.npcs.forEach((npc) => markDynamicSubtree(npc.mesh));

      game.worldProps = [];
      for (const spawn of game.town.getInteractableSpawns()) {
        const { propId, position, rotationY } = spawn;
        if (propId === 'cherry_tree' || propId === 'shrine_tree') {
          game.worldProps.push(createTreeProp(game.scene, position, propId));
        } else if (propId === 'shrine') {
          game.worldProps.push(createShrineProp(game.scene, position, rotationY));
        } else if (propId === 'torii') {
          game.worldProps.push(createToriiProp(game.scene, position, rotationY));
        } else if (propId === 'home') {
          game.worldProps.push(createHomeProp(game.scene, position, rotationY));
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

      // ── GPU performance pass ──────────────────────────────────────────────
      // Shadow culling + static matrix freeze for non-dynamic objects.
      game.scene.traverse((obj) => {
        let node = obj;
        while (node) {
          if (node.userData?.dynamic) return;
          node = node.parent;
        }
        obj.updateMatrix();
        obj.matrixAutoUpdate = false;
        if (obj.isMesh) {
          obj.castShadow = false;
          obj.receiveShadow = false;
        }
      });
      game.town.groundMeshes?.forEach((mesh) => {
        mesh.receiveShadow = true;
      });
      [...game.npcs, ...game.animals].forEach((e) => {
        e.mesh.traverse((c) => { if (c.isMesh) c.castShadow = true; });
      });
      game.player.mesh.traverse((c) => { if (c.isMesh) c.castShadow = true; });

      game.ready = true;
      return game;
    } catch (error) {
      throw error;
    }
  }

  get isMusicPlaying() {
    return this.music?.isPlaying ?? false;
  }

  async toggleMusic() {
    return this.music?.toggle() ?? false;
  }

  initInteraction(dialogue, petUI, shopUI) {
    this.dialogue = dialogue;
    this.petUI = petUI;
    this.shopUI = shopUI;
    this.companion = null;
    this.petCompanion = null;
    this.yen = 1000;
    this.offeringTokens = 5;
    this.dayNight = new DayNightCycle(this, this.town);
    this.dayNight._applyLighting(this.dayNight.hourFloat, computeNightBlend(this.dayNight.hourFloat));
    this.dayNight._updateHUD();
    this.dayNight.bindControls({
      panel: document.getElementById('time-panel'),
      slider: document.getElementById('time-slider'),
      pauseCheckbox: document.getElementById('time-pause'),
      presetButtons: document.querySelectorAll('[data-time-preset]'),
      toggleBtn: document.getElementById('time-display'),
    });

    this.locationTag = document.getElementById('location-tag');
    this.dayJournal = new DayJournal(() => ({
      dayKey: this.dayNight?.dayIndex ?? 1,
      period: this.dayNight?.getPeriod?.() ?? 'morning',
      timeLabel: this.dayNight?.formatTime?.() ?? '',
      zone: this.locationTag?.textContent ?? 'Town',
    }));
    const savedDays = this.dayJournal.getDaysNewestFirst();
    if (savedDays.length > 0) {
      this.dayNight.dayIndex = Math.max(this.dayNight.dayIndex, savedDays[0].key);
    }
    this.dayJournal.onChange = () => dialogue._updateJournalUI();
    dialogue._updateJournalUI();
    this.quests = new QuestSystem(this);
    this.quests._updateHUD();
    this._lastZoneLabel = null;
    this._journalWalkStarted = false;

    this.petTag = document.getElementById('pet-companion-tag');
    this.petLabel = document.getElementById('pet-companion-label');
    this.petPartBtn = document.getElementById('pet-companion-part');

    dialogue.setGame(this);
    // Mood boost whenever a full conversation ends
    dialogue.onConversationEnd = () => {
      this.mood?.boost(9, 'Good chat!');
      this._updateMoodHUD();
    };
    if (shopUI) {
      shopUI.setGame(this);
      // Mood boost on successful purchase (shop calls game.onPurchase)
      shopUI.onPurchase = () => {
        this.mood?.boost(7, 'Treat yourself!');
        this._updateMoodHUD();
      };
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
    this.tokenEl = document.getElementById('token-display');
    this._updateYenHUD();
    this._updateTokenHUD();

    const minimapCanvas = document.getElementById('minimap');
    const minimapWrap = document.getElementById('minimap-wrap');
    if (minimapCanvas) {
      this.minimap = new Minimap(minimapCanvas, this.path, minimapWrap, this.town.getWalkableCurves());
      this.minimap.setPlayer(this.player);
      this.minimap.setNpcs(this.npcs);
      this.minimap.setAnimals(this.animals);
      this.minimap.setWorldProps(this.worldProps);
      // First draw deferred until after GPU warmup (main.js).
    } else {
      console.warn('Minimap: #minimap canvas not found in DOM');
    }

    // Mood system
    this.mood = new MoodSystem();
    this.moodEl     = document.getElementById('mood-display');
    this.moodBar    = document.getElementById('mood-bar-fill');
    this.moodFloat  = document.getElementById('mood-float');
    if (this.moodFloat) this.mood.setFloatContainer(this.moodFloat);
    this._updateMoodHUD();
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

  spendOfferingToken(amount = 1) {
    if (this.offeringTokens < amount) return false;
    this.offeringTokens -= amount;
    this._updateTokenHUD();
    return true;
  }

  _updateTokenHUD() {
    if (this.tokenEl) this.tokenEl.textContent = `🪙 ${this.offeringTokens}`;
  }

  _updateMoodHUD(force = false) {
    if (!this.mood) return;
    const m = this.mood.getMood();
    const hudKey = `${this.mood.getPercent()}:${m.name}:${m.expression ?? ''}`;
    if (!force && hudKey === this._moodHudKey) return;
    this._moodHudKey = hudKey;
    if (this.moodEl) {
      this.moodEl.textContent = `${m.emoji} ${m.name}`;
      this.moodEl.style.borderColor = m.color;
    }
    if (this.moodBar) {
      this.moodBar.style.width = `${this.mood.getPercent()}%`;
      this.moodBar.style.background = m.color;
    }
    // Update player expression to reflect mood
    if (this.player?.mesh && m.expression) {
      setExpression(this.player.mesh, m.expression);
    }
  }

  openShop(shopId) {
    const shop = this.shopUI?.catalog?.[shopId];
    if (shop) this.dayJournal?.logShopVisit(shop);
    if (this.shopUI && shopId) this.shopUI.open(shopId);
  }

  restAtHome() {
    if (!this.dayNight) return;
    const nextDay = this.dayNight.dayIndex + 1;
    this.dayNight.dayIndex = nextDay;
    this.dayNight.clockPaused = false;
    this.dayNight.setTime(8, 15);
    const pauseCheckbox = document.getElementById('time-pause');
    if (pauseCheckbox) pauseCheckbox.checked = false;

    this.offeringTokens = 5;
    this._updateTokenHUD();
    this.mood?.boost(25, 'Well rested!');
    this._updateMoodHUD();
    this.dayJournal?.addLegacyEntry?.(
      'A Good Night\'s Rest',
      `I slept at home and woke on Day ${nextDay}. The town feels fresh in the morning light.`,
      'Home',
    );
    this.dialogue?.showToast?.(`🌅 Day ${nextDay} begins · offering tokens restored`);
  }

  _handlePetAction(animal, action) {
    const result = animal.applyAction(action);
    if (result.message) {
      this.dialogue.showToast(result.message);
    }
    if (result.isFriend && action !== 'shoo') {
      this.dialogue.showToast(`${animal.definition.name} seems to really like you! ♥`);
    }
    // Mood impact from pet interactions
    if (this.mood) {
      if (action === 'pet')  this.mood.boost(10, 'Petted a friend!');
      else if (action === 'sit')  this.mood.boost(7,  'Cozy moment');
      else if (action === 'shoo') this.mood.drain(5);
      this._updateMoodHUD();
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
    this.dialogue._updateDialogueWalkButtons?.();
    if (npc?.profile?.id) {
      this.quests?.notify('companion', { npcId: npc.profile.id });
    }
  }

  clearCompanion() {
    if (this.companion) {
      this._removeCompanionRing(this.companion);
      this.companion.stopFollowing(true);
      this.companion = null;
      this.dialogue.setCompanionTag(null);
      this.minimap?.setCompanion(null);
      this.dialogue._updateDialogueWalkButtons?.();
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
    this.minimap?.setPetCompanion(animal);
    this.mood?.boost(12, `${animal.definition.name} joined!`);
    this._updateMoodHUD();
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
      this.mood?.boost(6, 'Energy boost!');
    } else if (reward.type === 'companion') {
      this.setCompanion(reward.npc);
      this.mood?.boost(14, 'New friend!');
    } else if (reward.type === 'dismissCompanion') {
      this.clearCompanion();
      this.mood?.drain(4);
    } else if (reward.type === 'journal') {
      this.dayJournal?.addLegacyEntry(reward.title, reward.body, 'Purchase');
      this.mood?.boost(8, 'Memory made');
    } else if (reward.type === 'xp') {
      this.quests?.grantXP(reward.amount, reward.message);
    }
  }

  _updateLocationTag() {
    if (!this.locationTag || !this.path) return;
    const t = this.player?.pathT ?? this.path.getClosestPointT(this.player.position);
    const bucket = Math.floor(t * 80);
    if (bucket === this._lastZoneBucket) return;
    this._lastZoneBucket = bucket;
    const zone = LOCATION_ZONES.find((z) => t <= z.tMax) ?? LOCATION_ZONES[LOCATION_ZONES.length - 1];
    this.locationTag.textContent = zone.label;
    if (zone.label !== this._lastZoneLabel) {
      this._lastZoneLabel = zone.label;
      this.dayJournal?.logZoneVisit(zone.label);
      this.quests?.onZoneVisit(zone.label);
    }
  }

  _onResize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, this.perf.dprMax);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setPixelRatio(dpr);
    this.renderer.setSize(w, h);
    if (this.usePostProcessing) {
      this.composer.setSize(w, h);
      if (this._fxaaPass) {
        this._fxaaPass.material.uniforms.resolution.value.set(1 / (w * dpr), 1 / (h * dpr));
      }
    }
    const minimapWrap = document.getElementById('minimap-wrap');
    if (this.minimap?.resize && minimapWrap) {
      this.minimap.resize(minimapWrap.clientWidth);
    }
  }

  _updateCamera() {
    if (!this.player) return;

    const playerPos = this.player.position;
    let angle = this.input.cameraAngle;
    let pitch = this.input.cameraPitch;
    let dist = this.input.cameraDistance;
    let smooth = 0.22;

    if (this.outfitOpen) {
      const frontAngle = this.player.facing;
      angle = THREE.MathUtils.lerp(angle, frontAngle, 0.1);
      pitch = THREE.MathUtils.lerp(pitch, 0.12, 0.1);
      dist = THREE.MathUtils.lerp(dist, 6.1, 0.1);
      this._outfitLookY = THREE.MathUtils.lerp(this._outfitLookY, 1.02, 0.1);
      smooth = 0.14;
      this.input.cameraAngle = angle;
      this.input.cameraPitch = pitch;
      this.input.cameraDistance = dist;
    } else {
      this._outfitLookY = THREE.MathUtils.lerp(this._outfitLookY, 1.95, 0.12);
    }

    const target = playerPos.clone().add(new THREE.Vector3(0, this._outfitLookY, 0));
    this.cameraTarget.lerp(target, smooth);

    const horiz = dist * Math.cos(pitch);
    const offset = new THREE.Vector3(
      Math.sin(angle) * horiz,
      Math.sin(pitch) * dist + dist * 0.06,
      Math.cos(angle) * horiz,
    );

    const desired = this.cameraTarget.clone().add(offset);
    if (this._cameraSmoothed.lengthSq() < 0.001) {
      this._cameraSmoothed.copy(desired);
    } else {
      this._cameraSmoothed.lerp(desired, smooth);
    }
    this.camera.position.copy(this._cameraSmoothed);
    this.camera.lookAt(this.cameraTarget);
  }

  update() {
    if (!this.ready) return;

    const dt = Math.min(this.clock.getDelta(), 0.05);
    this.input.update();

    const blocking = this.interaction?.isBlocking() ?? this.dialogue?.isBlocking() ?? this.shopUI?.isOpen() ?? this.outfitOpen ?? false;
    this.input.dialogueOpen = blocking;
    this.input.outfitOpen = this.outfitOpen;

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
      this.interaction?.update(this.input, this.camera, this.canvas, dt);
    }

    this.player.update(this.input, dt, this.town.getGroundMeshes());

    if (!this._journalWalkStarted && this.player.velocity.length() > 0.15) {
      this.dayJournal?.ensureWalkStarted();
      this._journalWalkStarted = true;
    }

    this.npcs.forEach((npc) => npc.update(dt, this.player.position, this.player.facing));
    applyNpcGroupSeparation(this.npcs, dt);

    // Pulse companion ring
    if (this.companion?.mesh?.userData?.companionRing) {
      const ring = this.companion.mesh.userData.companionRing;
      ring.material.opacity = 0.5 + Math.sin(this.clock.elapsedTime * 3) * 0.3;
      ring.rotation.z += dt * 0.8;
    }
    this.animals?.forEach((a) => a.update(
      dt,
      this.player.position,
      this.player.facing,
      this.player.velocity.length(),
    ));
    this._updateLocationTag();
    if (this.mood) {
      this.mood.update(dt);
      this._updateMoodHUD();
    }
    this._minimapAccum += dt;
    if (this._minimapAccum >= this.perf.minimapUpdateInterval) {
      this._minimapAccum = 0;
      if (this.minimap && this.interactables && this.player) {
        this.minimap.setNearbyInteractables(
          this.interactables.findAllInRange(this.player.position, 20),
        );
      }
      this.minimap?.update(dt);
    }
    this.dayNight?.update(dt);
    this.town.update(this.clock.elapsedTime);

    // Keep shadow frustum on the player; sun position comes from day/night cycle
    if (this.town?.sun && this.player) {
      const pp = this.player.position;
      this.town.sun.target.position.set(pp.x, 0, pp.z);
      this.town.sun.target.updateMatrixWorld();
    }

    this._updateCamera();
    this.input.endFrame();
  }

  warmUpGPU() {
    if (!this.ready) return;
    if (this.town?.sun && this.player) {
      const pp = this.player.position;
      this.town.sun.target.position.set(pp.x, 0, pp.z);
      this.town.sun.target.updateMatrixWorld();
    }
    this._updateCamera();
    this.renderer.compile(this.scene, this.camera);
    const frames = this.perf.warmupFrames ?? 2;
    for (let i = 0; i < frames; i++) {
      this.render();
    }
    this.minimap?.update(0);
  }

  async loadDeferredContent() {
    if (!this.modelLoader || this._deferredLoading) return;
    this._deferredLoading = true;
    try {
      await this.modelLoader.loadRemaining();
      if (this._ambientPending) {
        const ambient = AMBIENT_NPCS.map((profile) => ({ ...profile, isAmbient: true })).map(
          (profile) => new NPC(this.scene, this.town.getPathForId(profile.pathId), profile),
        );
        this.npcs.push(...ambient);
        resolveNpcSpawnPositions(this.npcs);
        ambient.forEach((npc) => {
          markDynamicSubtree(npc.mesh);
          npc.mesh.traverse((c) => { if (c.isMesh) c.castShadow = true; });
        });
        this.interactables.registerAll(ambient);
        this.minimap?.setNpcs(this.npcs);
        this._ambientPending = false;
      }

      if (this.animals.length === 0) {
        this.animals = ANIMAL_DEFINITIONS.map(
          (def) => new Animal(this.scene, this.town.getPathForId(def.pathId), def),
        );
        this.animals.forEach((a) => {
          markDynamicSubtree(a.mesh);
          a.mesh.traverse((c) => { if (c.isMesh) c.castShadow = true; });
        });
        this.interactables.registerAll(this.animals);
        this.minimap?.setAnimals(this.animals);
      }
    } catch (error) {
      console.warn('Deferred content load failed:', error);
    } finally {
      this._deferredLoading = false;
    }
  }

  render() {
    if (this.usePostProcessing) {
      this.composer.render();
    } else {
      this.renderer.render(this.scene, this.camera);
    }
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
