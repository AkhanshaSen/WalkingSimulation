import * as THREE from 'three';
import { FRIEND_THRESHOLD } from '../data/animalData.js';
import { createAnimalMesh, createNameLabel } from './animalMeshes.js';
import { followPlayer } from './FollowerBehavior.js';

let heartTexture = null;
function getHeartTexture() {
  if (heartTexture) return heartTexture;
  const c = document.createElement('canvas');
  c.width = 32; c.height = 32;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#ff4488';
  // Simple heart via two circles + triangle
  ctx.beginPath();
  ctx.arc(10, 11, 8, 0, Math.PI * 2);
  ctx.arc(22, 11, 8, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(2, 15);
  ctx.lineTo(16, 29);
  ctx.lineTo(30, 15);
  ctx.fill();
  heartTexture = new THREE.CanvasTexture(c);
  return heartTexture;
}

export class Animal {
  constructor(scene, path, definition) {
    this.type = 'animal';
    this.path = path;
    this.definition = definition;
    this.affinity = 0;
    this.isPetCompanion = false;
    this.state = 'idle';
    this.idlePhase = Math.random() * Math.PI * 2;
    this.scaredTimer = 0;
    this.followSpeed = 3.0;
    this.range = 5;

    this.mesh = createAnimalMesh(definition.species);
    this.mesh.scale.setScalar(3.5);
    const label = createNameLabel(definition.emoji, definition.name);
    // Compensate scale so the label renders at its intended world size
    label.scale.divideScalar(3.5);
    this.mesh.add(label);
    this.nameLabel = label;

    scene.add(this.mesh);
    this._placeOnPath();
    this.homePos = this.mesh.position.clone();
    this.homeFacing = this.mesh.rotation.y;

    this.heartParticles = [];

    this.mesh.userData.interactable = this;
    this.mesh.traverse((child) => {
      child.userData.interactable = this;
    });
  }

  spawnHearts(count = 4, color = '#ff4488') {
    const tex = getHeartTexture();
    for (let i = 0; i < count; i++) {
      const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, opacity: 1, color });
      const sprite = new THREE.Sprite(mat);
      sprite.scale.set(0.18, 0.18, 1);
      // Position in local space of the (scaled 3.5×) mesh group
      sprite.position.set(
        (Math.random() - 0.5) * 0.25,
        0.35 + Math.random() * 0.1,
        (Math.random() - 0.5) * 0.2,
      );
      sprite.userData.vy = 0.012 + Math.random() * 0.01;
      sprite.userData.vx = (Math.random() - 0.5) * 0.006;
      sprite.userData.life = 1.0;
      this.mesh.add(sprite);
      this.heartParticles.push(sprite);
    }
  }

  _placeOnPath() {
    const pos = this.path.getPointAt(this.definition.startT);
    const tangent = this.path.getTangentAt(this.definition.startT);
    const perp = new THREE.Vector3(-tangent.z, 0, tangent.x).multiplyScalar(this.definition.side ?? 1);
    this.mesh.position.copy(pos).add(perp.multiplyScalar(this.definition.offset ?? 3));
    this.mesh.position.y = 0.02;
    this.mesh.rotation.y = Math.atan2(tangent.x, tangent.z);
  }

  get profile() {
    return this.definition;
  }

  getHitTargets() {
    return [this.mesh];
  }

  distanceTo(point) {
    const dx = this.mesh.position.x - point.x;
    const dz = this.mesh.position.z - point.z;
    return Math.hypot(dx, dz);
  }

  canInteract(playerPos) {
    return this.distanceTo(playerPos) <= this.range;
  }

  interact(context) {
    context.petUI?.show(this);
  }

  addAffinity(amount) {
    this.affinity = Math.max(0, Math.min(100, this.affinity + amount));
    return this.affinity;
  }

  isFriend() {
    return this.affinity >= FRIEND_THRESHOLD;
  }

  getReaction(action) {
    const p = this.definition.personality;
    return this.definition.reactions?.[action]?.[p] ?? this.definition.reactions?.[action] ?? '';
  }

  startFollowing() {
    this.state = 'following';
    this.isPetCompanion = true;
    if (this.nameLabel) this.nameLabel.visible = false;
  }

  stopFollowing(returnHome = true) {
    this.state = 'idle';
    this.isPetCompanion = false;
    if (this.nameLabel) this.nameLabel.visible = true;
    if (returnHome) {
      this.mesh.position.copy(this.homePos);
      this.mesh.rotation.y = this.homeFacing;
    }
  }

  scare(duration = 1.5) {
    this.scaredTimer = duration;
    this.state = 'scared';
  }

  applyAction(action) {
    const def = this.definition;
    let gain = 0;
    if (action === 'pet') gain = def.petGain ?? 5;
    else if (action === 'sit') gain = def.sitGain ?? 8;
    else if (action === 'shoo') gain = -(def.shooLoss ?? 15);

    this.addAffinity(gain);
    if (action === 'shoo') this.scare(2);

    return {
      affinity: this.affinity,
      message: this.getReaction(action),
      isFriend: this.isFriend(),
      friendMessage: this.definition.reactions?.friend,
    };
  }

  update(dt, playerPos = null, playerFacing = 0) {
    // Animate heart particles
    for (let i = this.heartParticles.length - 1; i >= 0; i--) {
      const h = this.heartParticles[i];
      h.userData.life -= dt;
      h.position.y += h.userData.vy;
      h.position.x += h.userData.vx;
      h.material.opacity = Math.max(0, h.userData.life);
      h.scale.setScalar(0.18 * (0.5 + h.userData.life * 0.7));
      if (h.userData.life <= 0) {
        this.mesh.remove(h);
        this.heartParticles.splice(i, 1);
      }
    }

    if (this.scaredTimer > 0) {
      this.scaredTimer -= dt;
      this.idlePhase += dt * 8;
      this.mesh.position.x = this.homePos.x + Math.sin(this.idlePhase * 3) * 0.15;
      if (this.scaredTimer <= 0) this.state = this.isPetCompanion ? 'following' : 'idle';
      return;
    }

    if (this.state === 'following' && playerPos) {
      followPlayer(
        this.mesh,
        playerPos,
        playerFacing,
        dt,
        this.followSpeed,
        2.5,
        1.0,
        () => {},
      );
      this.mesh.position.y = 0.02 + Math.sin(this.idlePhase) * 0.006;
      this.idlePhase += dt * 2;
      return;
    }

    this.idlePhase += dt * 1.8;
    this.mesh.position.y = this.homePos.y + Math.sin(this.idlePhase) * 0.012;

    const tail = this.mesh.userData?.tail;
    if (tail) {
      tail.rotation.z = (tail.userData.baseRot ?? tail.rotation.z) + Math.sin(this.idlePhase * 4) * 0.3;
      if (!tail.userData.baseRot) tail.userData.baseRot = tail.rotation.z;
    }

    if (playerPos && this.distanceTo(playerPos) < 6 && !this.isPetCompanion) {
      const dx = playerPos.x - this.mesh.position.x;
      const dz = playerPos.z - this.mesh.position.z;
      if (Math.hypot(dx, dz) > 0.01) {
        this.mesh.rotation.y = Math.atan2(dx, dz);
      }
    }
  }
}
