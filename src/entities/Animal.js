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

// Maximum wander radius around homePos (world units). Keeps animals away from buildings.
const WANDER_RADIUS  = 1.8;
const WANDER_SPEED   = 0.7;
const GROUND_Y       = 0.02;

export class Animal {
  constructor(scene, path, definition) {
    this.type = 'animal';
    this.path = path;
    this.definition = definition;
    this.affinity = 0;
    this.isPetCompanion = false;
    this.state = 'idle';
    this.idlePhase = Math.random() * Math.PI * 2;
    this.walkPhase = 0;
    this.scaredTimer = 0;
    this.followSpeed = 3.0;
    this.range = 5;

    // Wander state — random target within WANDER_RADIUS of homePos
    this.wanderAngle  = Math.random() * Math.PI * 2;
    this.wanderTimer  = Math.random() * 3;
    this.isMoving     = false;

    this.mesh = createAnimalMesh(definition.species);
    this.mesh.scale.setScalar(3.5);
    const label = createNameLabel(definition.emoji, definition.name, definition.species);
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
    // ── heart particles ────────────────────────────────────────────────────
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

    // ── scared shake ───────────────────────────────────────────────────────
    if (this.scaredTimer > 0) {
      this.scaredTimer -= dt;
      this.idlePhase += dt * 8;
      this.mesh.position.x = this.homePos.x + Math.sin(this.idlePhase * 3) * 0.15;
      this.mesh.position.y = GROUND_Y;
      if (this.scaredTimer <= 0) this.state = this.isPetCompanion ? 'following' : 'idle';
      return;
    }

    // ── following player ───────────────────────────────────────────────────
    if (this.state === 'following' && playerPos) {
      const moved = followPlayer(
        this.mesh,
        playerPos,
        playerFacing,
        dt,
        this.followSpeed,
        2.5,   // offset behind player
        1.0,   // stop distance
        null,
      );

      // Ground-lock — no floating
      this.mesh.position.y = GROUND_Y;

      // Walking bounce (abs-sin gives a footfall rhythm)
      if (!moved) {
        this.walkPhase += dt * this.followSpeed * 4;
        const bounce = Math.abs(Math.sin(this.walkPhase)) * 0.05;
        this.mesh.position.y = GROUND_Y + bounce;
      }

      // Tail wag while following
      this._animateTail(dt, 6.0);
      return;
    }

    // ── idle: gentle wander within WANDER_RADIUS of homePos ───────────────
    this.wanderTimer -= dt;
    if (this.wanderTimer <= 0) {
      // Pick a new direction; bias back toward home if we've drifted
      const dxH = this.homePos.x - this.mesh.position.x;
      const dzH = this.homePos.z - this.mesh.position.z;
      const distHome = Math.hypot(dxH, dzH);
      if (distHome > WANDER_RADIUS * 0.75) {
        // Head back toward home
        this.wanderAngle = Math.atan2(dxH, dzH);
      } else {
        this.wanderAngle += (Math.random() - 0.5) * 2.0;
      }
      this.wanderTimer = 2 + Math.random() * 3;
    }

    const tx = this.homePos.x + Math.sin(this.wanderAngle) * WANDER_RADIUS;
    const tz = this.homePos.z + Math.cos(this.wanderAngle) * WANDER_RADIUS;
    const dx = tx - this.mesh.position.x;
    const dz = tz - this.mesh.position.z;
    const dist = Math.hypot(dx, dz);

    if (dist > 0.25) {
      const step = Math.min(WANDER_SPEED * dt, dist);
      this.mesh.position.x += (dx / dist) * step;
      this.mesh.position.z += (dz / dist) * step;
      this.mesh.rotation.y = Math.atan2(dx, dz);
      this.walkPhase += dt * WANDER_SPEED * 4;
      this.mesh.position.y = GROUND_Y + Math.abs(Math.sin(this.walkPhase)) * 0.035;
      this.isMoving = true;
    } else {
      // Stopped — gentle head-bob and face player if nearby
      this.idlePhase += dt * 1.8;
      this.mesh.position.y = GROUND_Y + Math.sin(this.idlePhase) * 0.008;
      this.isMoving = false;
      if (playerPos && this.distanceTo(playerPos) < 6) {
        const dpx = playerPos.x - this.mesh.position.x;
        const dpz = playerPos.z - this.mesh.position.z;
        if (Math.hypot(dpx, dpz) > 0.1) {
          this.mesh.rotation.y = Math.atan2(dpx, dpz);
        }
      }
    }

    // Tail wags at idle speed
    this._animateTail(dt, this.isMoving ? 4.5 : 2.5);
  }

  /** Animate the tail stored in mesh.userData.tail */
  _animateTail(dt, speed = 3.0) {
    const tail = this.mesh.userData?.tail;
    if (!tail) return;
    this.idlePhase += dt * speed;
    if (tail.userData.baseRotZ === undefined) tail.userData.baseRotZ = tail.rotation.z;
    tail.rotation.z = tail.userData.baseRotZ + Math.sin(this.idlePhase) * 0.35;
  }
}
