import * as THREE from 'three';
import { Town } from './town.js';
import { Player, NPC, InputManager } from './character.js';
import { NPC_PROFILES } from './npcData.js';
import { AMBIENT_NPCS } from './ambientNpcs.js';
import { DialogueManager, InteractionSystem } from './dialogue.js';
import { Minimap } from './minimap.js';

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

      game.ready = true;
      return game;
    } catch (error) {
      throw error;
    }
  }

  initInteraction(dialogue) {
    this.dialogue = dialogue;
    this.companion = null;
    this.locationTag = document.getElementById('location-tag');
    dialogue.setGame(this);
    this.interaction = new InteractionSystem(this.player, this.npcs, dialogue, this);
    this.interaction.setRewardHandler((reward) => this._handleReward(reward));

    const minimapCanvas = document.getElementById('minimap');
    if (minimapCanvas) {
      this.minimap = new Minimap(minimapCanvas, this.path);
      this.minimap.setPlayer(this.player);
      this.minimap.setNpcs(this.npcs);
    }
  }

  setCompanion(npc) {
    if (this.companion && this.companion !== npc) {
      this.companion.stopFollowing(true);
    }
    this.companion = npc;
    npc.startFollowing();
    this.dialogue.setCompanionTag(npc);
    this.minimap?.setCompanion(npc);
  }

  clearCompanion() {
    if (this.companion) {
      this.companion.stopFollowing(true);
      this.companion = null;
      this.dialogue.setCompanionTag(null);
      this.minimap?.setCompanion(null);
    }
  }

  _handleReward(reward) {
    if (reward.type === 'speedBoost') {
      this.player.applySpeedBoost(reward.amount, reward.duration);
    } else if (reward.type === 'companion') {
      this.setCompanion(reward.npc);
    } else if (reward.type === 'dismissCompanion') {
      this.clearCompanion();
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
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
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

    const inDialogue = this.dialogue?.isBlocking() ?? false;
    this.input.dialogueOpen = inDialogue;

    if (inDialogue) {
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
    this._updateLocationTag();
    this.minimap?.update();
    this.town.update(this.clock.elapsedTime);
    this._updateCamera();
    this.input.endFrame();
  }

  render() {
    this.renderer.render(this.scene, this.camera);
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
