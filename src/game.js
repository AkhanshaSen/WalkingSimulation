import * as THREE from 'three';
import { Town } from './town.js';
import { Player, NPC, InputManager } from './character.js';

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
      120,
    );

    this.input = new InputManager(canvas);
    this.cameraTarget = new THREE.Vector3();
    this.isMusicPlaying = false;

    window.addEventListener('resize', () => this._onResize());
  }

  static async create(canvas, onProgress) {
    const game = new Game(canvas);

    try {
      onProgress?.('Starting renderer…');
      game.town = new Town(game.scene);
      await game.town.build(onProgress);

      game.path = game.town.getPath();
      game.path.getClosestPointT = (point) => closestPointOnPath(game.path, point);

      onProgress?.('Spawning characters…');
      game.player = new Player(game.scene, game.path);
      game.npcs = [
        new NPC(game.scene, game.path, 0.35, 1.0),
        new NPC(game.scene, game.path, 0.65, 1.3),
      ];

      game.ready = true;
      return game;
    } catch (error) {
      game.dispose?.();
      throw error;
    }
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
    this.player.update(this.input, dt, this.town.getGroundMeshes());
    this.npcs.forEach((npc) => npc.update(dt));
    this._updateCamera();
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
