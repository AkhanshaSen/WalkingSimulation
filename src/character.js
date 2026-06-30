import * as THREE from 'three';
import { createToonMaterial, createOutlinedMesh, PALETTE } from './materials.js';
import { setupNpcRoutine, updateNpcRoutine } from './npcRoutines.js';
import { followPlayer, moveToward } from './entities/FollowerBehavior.js';

export class InputManager {
  constructor(canvas) {
    this.keys = {};
    this.move = { x: 0, z: 0 };
    this.cameraAngle = 0;
    this.cameraPitch = 0.25;
    this.cameraDistance = 7;
    this.isDragging = false;
    this.lastPointer = { x: 0, y: 0 };
    this.justPressed = new Set();
    this.interactRequested = false;
    this.dialogueOpen = false;
    this.tap = null;
    this.pointerStart = null;
    this.touchStart = null;

    window.addEventListener('keydown', (e) => {
      if (!this.keys[e.code]) this.justPressed.add(e.code);
      this.keys[e.code] = true;
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) {
        e.preventDefault();
      }
    });
    window.addEventListener('keyup', (e) => {
      this.keys[e.code] = false;
    });

    canvas.addEventListener('pointerdown', (e) => {
      this.isDragging = true;
      this.lastPointer = { x: e.clientX, y: e.clientY };
      this.pointerStart = { x: e.clientX, y: e.clientY, id: e.pointerId };
    });
    window.addEventListener('pointerup', (e) => {
      if (this.pointerStart?.id === e.pointerId) {
        const dx = e.clientX - this.pointerStart.x;
        const dy = e.clientY - this.pointerStart.y;
        if (Math.hypot(dx, dy) < 12) {
          this.tap = { x: e.clientX, y: e.clientY };
        }
        this.pointerStart = null;
      }
      this.isDragging = false;
    });
    window.addEventListener('pointermove', (e) => {
      if (!this.isDragging) return;
      const dx = e.clientX - this.lastPointer.x;
      const dy = e.clientY - this.lastPointer.y;
      this.cameraAngle -= dx * 0.005;
      this.cameraPitch = THREE.MathUtils.clamp(this.cameraPitch + dy * 0.003, 0.1, 0.6);
      this.lastPointer = { x: e.clientX, y: e.clientY };
    });

    canvas.addEventListener('wheel', (e) => {
      this.cameraDistance = THREE.MathUtils.clamp(this.cameraDistance + e.deltaY * 0.01, 4, 14);
    }, { passive: true });

    this._setupTouch(canvas);
  }

  _setupTouch(canvas) {
    const joystick = { active: false, origin: { x: 0, y: 0 }, current: { x: 0, y: 0 } };

    canvas.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        const t = e.touches[0];
        this.touchStart = { x: t.clientX, y: t.clientY };
        if (t.clientX < window.innerWidth * 0.4) {
          joystick.active = true;
          joystick.origin = { x: t.clientX, y: t.clientY };
          joystick.current = { x: t.clientX, y: t.clientY };
        } else {
          this.isDragging = true;
          this.lastPointer = { x: t.clientX, y: t.clientY };
        }
      }
    }, { passive: true });

    canvas.addEventListener('touchmove', (e) => {
      if (joystick.active && e.touches.length >= 1) {
        const t = e.touches[0];
        if (t.clientX < window.innerWidth * 0.5) {
          joystick.current = { x: t.clientX, y: t.clientY };
        }
      }
      if (this.isDragging && e.touches.length >= 1) {
        const t = e.touches[e.touches.length - 1];
        const dx = t.clientX - this.lastPointer.x;
        const dy = t.clientY - this.lastPointer.y;
        this.cameraAngle -= dx * 0.005;
        this.cameraPitch = THREE.MathUtils.clamp(this.cameraPitch + dy * 0.003, 0.1, 0.6);
        this.lastPointer = { x: t.clientX, y: t.clientY };
      }
    }, { passive: true });

    canvas.addEventListener('touchend', (e) => {
      const t = e.changedTouches[0];
      if (t && this.touchStart) {
        const dx = t.clientX - this.touchStart.x;
        const dy = t.clientY - this.touchStart.y;
        if (Math.hypot(dx, dy) < 14) {
          this.tap = { x: t.clientX, y: t.clientY };
        }
      }
      this.touchStart = null;
      joystick.active = false;
      this.isDragging = false;
    });

    this.joystick = joystick;
  }

  update() {
    let x = 0;
    let z = 0;

    if (this.keys['KeyW'] || this.keys['ArrowUp']) z -= 1;
    if (this.keys['KeyS'] || this.keys['ArrowDown']) z += 1;
    if (this.keys['KeyA'] || this.keys['ArrowLeft']) x -= 1;
    if (this.keys['KeyD'] || this.keys['ArrowRight']) x += 1;

    if (this.joystick?.active) {
      const dx = this.joystick.current.x - this.joystick.origin.x;
      const dy = this.joystick.current.y - this.joystick.origin.y;
      const len = Math.hypot(dx, dy);
      if (len > 8) {
        x = dx / len;
        z = dy / len;
      }
    }

    const len = Math.hypot(x, z);
    if (len > 0) {
      x /= len;
      z /= len;
    }

    this.move = { x, z };
    this.isRunning = this.keys['ShiftLeft'] || this.keys['ShiftRight'];
  }

  requestInteract() {
    this.interactRequested = true;
  }

  consumeInteractRequest() {
    if (this.interactRequested) {
      this.interactRequested = false;
      return true;
    }
    return false;
  }

  consumeKey(code) {
    if (this.justPressed.has(code)) {
      this.justPressed.delete(code);
      return true;
    }
    return false;
  }

  consumeTap() {
    const tap = this.tap;
    this.tap = null;
    return tap;
  }

  endFrame() {
    this.justPressed.clear();
  }
}

export function createCharacter(options = {}) {
  const group = new THREE.Group();
  const shirtColor = options.shirtColor ?? PALETTE.shirt;
  const backpackColor = options.backpackColor ?? PALETTE.backpack;
  const hairColor = options.hairColor ?? PALETTE.hair;

  const body = createOutlinedMesh(
    new THREE.CylinderGeometry(0.22, 0.26, 0.55, 8),
    createToonMaterial(shirtColor),
  );
  body.position.y = 0.85;
  group.add(body);

  const skirt = createOutlinedMesh(
    new THREE.CylinderGeometry(0.3, 0.35, 0.35, 8),
    createToonMaterial(PALETTE.pants),
  );
  skirt.position.y = 0.45;
  group.add(skirt);

  const head = createOutlinedMesh(
    new THREE.SphereGeometry(0.22, 10, 8),
    createToonMaterial(PALETTE.skin),
  );
  head.position.y = 1.35;
  group.add(head);

  const hair = createOutlinedMesh(
    new THREE.SphereGeometry(0.24, 10, 8, 0, Math.PI * 2, 0, Math.PI * 0.55),
    createToonMaterial(hairColor),
  );
  hair.position.y = 1.42;
  hair.scale.set(1, 0.8, 1);
  group.add(hair);

  const backpack = createOutlinedMesh(
    new THREE.BoxGeometry(0.35, 0.4, 0.15),
    createToonMaterial(backpackColor),
  );
  backpack.position.set(0, 0.95, -0.22);
  group.add(backpack);

  const legGeo = new THREE.CylinderGeometry(0.07, 0.08, 0.35, 6);
  [-0.12, 0.12].forEach((x) => {
    const leg = createOutlinedMesh(legGeo, createToonMaterial(PALETTE.pants));
    leg.position.set(x, 0.18, 0);
    group.add(leg);

    const shoe = createOutlinedMesh(
      new THREE.BoxGeometry(0.12, 0.06, 0.18),
      createToonMaterial(0xf0f0f0),
    );
    shoe.position.set(x, 0.03, 0.03);
    group.add(shoe);
  });

  group.userData.face = createFaceParts(group);
  group.userData.legs = group.children.filter(
    (c) => c.geometry?.type === 'CylinderGeometry' && c.position.y < 0.3,
  );
  group.userData.walkPhase = 0;

  if (options.nameTag) {
    group.add(createNameTag(options.nameTag, options.nameTagJa));
  }

  return group;
}

function createFaceParts(group) {
  const eyeMat = createToonMaterial(0x222222);
  const mouthMat = createToonMaterial(0xd09090);

  const leftEye = new THREE.Mesh(new THREE.SphereGeometry(0.028, 6, 6), eyeMat);
  leftEye.position.set(-0.065, 1.38, 0.19);
  group.add(leftEye);

  const rightEye = new THREE.Mesh(new THREE.SphereGeometry(0.028, 6, 6), eyeMat);
  rightEye.position.set(0.065, 1.38, 0.19);
  group.add(rightEye);

  const mouth = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.015, 0.02), mouthMat);
  mouth.position.set(0, 1.29, 0.2);
  group.add(mouth);

  const blushMat = createToonMaterial(0xf0a0a0);
  const blushL = new THREE.Mesh(new THREE.CircleGeometry(0.04, 8), blushMat);
  blushL.position.set(-0.12, 1.32, 0.17);
  blushL.rotation.y = 0.3;
  blushL.visible = false;
  group.add(blushL);

  const blushR = new THREE.Mesh(new THREE.CircleGeometry(0.04, 8), blushMat);
  blushR.position.set(0.12, 1.32, 0.17);
  blushR.rotation.y = -0.3;
  blushR.visible = false;
  group.add(blushR);

  return {
    leftEye,
    rightEye,
    mouth,
    blushL,
    blushR,
    baseMouthY: 1.29,
    baseEyeY: 1.38,
  };
}

export function setExpression(group, expression) {
  const face = group.userData.face;
  if (!face) return;

  const { leftEye, rightEye, mouth, blushL, blushR, baseMouthY, baseEyeY } = face;

  leftEye.scale.set(1, 1, 1);
  rightEye.scale.set(1, 1, 1);
  leftEye.position.set(-0.065, baseEyeY, 0.19);
  rightEye.position.set(0.065, baseEyeY, 0.19);
  mouth.scale.set(1, 1, 1);
  mouth.position.set(0, baseMouthY, 0.2);
  blushL.visible = false;
  blushR.visible = false;

  switch (expression) {
    case 'happy':
      leftEye.scale.y = 0.45;
      rightEye.scale.y = 0.45;
      mouth.scale.set(1.4, 2.5, 1);
      break;
    case 'surprised':
      leftEye.scale.set(1.35, 1.35, 1);
      rightEye.scale.set(1.35, 1.35, 1);
      mouth.scale.set(0.7, 3, 1);
      mouth.position.y = baseMouthY - 0.01;
      break;
    case 'thinking':
      leftEye.position.set(-0.04, baseEyeY + 0.02, 0.19);
      rightEye.position.set(0.08, baseEyeY + 0.02, 0.19);
      mouth.scale.set(0.8, 0.8, 1);
      break;
    case 'shy':
      leftEye.position.set(-0.065, baseEyeY - 0.025, 0.19);
      rightEye.position.set(0.065, baseEyeY - 0.025, 0.19);
      leftEye.scale.y = 0.7;
      rightEye.scale.y = 0.7;
      mouth.scale.set(0.6, 1, 1);
      blushL.visible = true;
      blushR.visible = true;
      break;
    default:
      break;
  }
}

function createNameTag(name, nameJa) {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'rgba(255,255,255,0.92)';
  ctx.fillRect(8, 8, 240, 48);
  ctx.fillStyle = '#2a4a4a';
  ctx.font = 'bold 18px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(nameJa || name, 128, 28);
  ctx.fillStyle = '#666';
  ctx.font = '13px sans-serif';
  ctx.fillText(name || '', 128, 48);

  const texture = new THREE.CanvasTexture(canvas);
  const material = new THREE.SpriteMaterial({ map: texture, transparent: true });
  const sprite = new THREE.Sprite(material);
  sprite.position.y = 1.85;
  sprite.scale.set(1.5, 0.38, 1);

  const hitMaterial = new THREE.SpriteMaterial({
    transparent: true,
    opacity: 0,
    depthWrite: false,
  });
  const hitArea = new THREE.Sprite(hitMaterial);
  hitArea.position.y = 1.85;
  hitArea.scale.set(2.2, 0.75, 1);
  hitArea.userData.isNameTagHit = true;

  const group = new THREE.Group();
  group.add(sprite);
  group.add(hitArea);
  group.userData.isNameTag = true;
  return group;
}

export function animateCharacter(character, speed, dt) {
  if (speed < 0.1) {
    character.userData.legs?.forEach((leg, i) => {
      leg.rotation.x = THREE.MathUtils.lerp(leg.rotation.x, 0, 0.1);
    });
    return;
  }

  character.userData.walkPhase += dt * speed * 8;
  character.userData.legs?.forEach((leg, i) => {
    leg.rotation.x = Math.sin(character.userData.walkPhase + i * Math.PI) * 0.4 * Math.min(speed / 3, 1.5);
  });
}

export const MAX_DIST_FROM_PATH = 9.5;
export const MAP_BOUNDS = { minX: -42, maxX: 50, minZ: -108, maxZ: 22 };

export class Player {
  constructor(scene, path) {
    this.path = path;
    this.mesh = createCharacter();
    this.mesh.position.copy(path.getPointAt(0.05));
    scene.add(this.mesh);

    this.velocity = new THREE.Vector3();
    this.facing = 0;
    this.walkSpeed = 3.2;
    this.runSpeed = 6.5;
    this.baseRunSpeed = 6.5;
    this.speedBoostTimer = 0;
    this.pathT = 0.05;
    this.raycaster = new THREE.Raycaster();
    this.restTimer = 0;
    this.restPos = null;
  }

  applySpeedBoost(amount, duration) {
    this.runSpeed = this.baseRunSpeed + amount;
    this.speedBoostTimer = duration;
  }

  update(input, dt, groundMeshes) {
    if (this.speedBoostTimer > 0) {
      this.speedBoostTimer -= dt;
      if (this.speedBoostTimer <= 0) {
        this.runSpeed = this.baseRunSpeed;
      }
    }

    if (input.dialogueOpen || this.restTimer > 0) {
      this.velocity.set(0, 0, 0);
      if (this.restTimer > 0) {
        this.restTimer -= dt;
        if (this.restPos) {
          this.mesh.position.lerp(this.restPos, 0.08);
          this.mesh.position.y = 0.01;
        }
      }
    } else {
      const speed = input.isRunning ? this.runSpeed : this.walkSpeed;
      const camForward = new THREE.Vector3(Math.sin(input.cameraAngle), 0, Math.cos(input.cameraAngle));
      const camRight = new THREE.Vector3(Math.cos(input.cameraAngle), 0, -Math.sin(input.cameraAngle));

      const moveDir = new THREE.Vector3()
        .addScaledVector(camRight, input.move.x)
        .addScaledVector(camForward, input.move.z);

      if (moveDir.lengthSq() > 0.001) {
        moveDir.normalize();
        this.velocity.copy(moveDir.multiplyScalar(speed));
        this.facing = Math.atan2(moveDir.x, moveDir.z);
      } else {
        this.velocity.multiplyScalar(0.85);
      }
    }

    this.mesh.position.x += this.velocity.x * dt;
    this.mesh.position.z += this.velocity.z * dt;

    this._clampToWalkableArea();

    const groundY = this._sampleGround(this.mesh.position, groundMeshes);
    this.mesh.position.y = groundY;

    this.mesh.rotation.y = THREE.MathUtils.lerp(this.mesh.rotation.y, this.facing, 0.15);

    const moveSpeed = this.velocity.length();
    animateCharacter(this.mesh, moveSpeed, dt);

    this.pathT = this.path.getClosestPointT?.(this.mesh.position) ?? 0;
  }

  rest(duration, nearPos) {
    this.restTimer = duration;
    this.restPos = nearPos?.clone();
    this.velocity.set(0, 0, 0);
  }

  _clampToWalkableArea() {
    const pos = this.mesh.position;

    if (this.path?.getClosestPointT) {
      this.pathT = this.path.getClosestPointT(pos);
      const nearest = this.path.getPointAt(this.pathT);
      const dx = pos.x - nearest.x;
      const dz = pos.z - nearest.z;
      const dist = Math.hypot(dx, dz);
      if (dist > MAX_DIST_FROM_PATH) {
        const scale = MAX_DIST_FROM_PATH / dist;
        pos.x = nearest.x + dx * scale;
        pos.z = nearest.z + dz * scale;
      }
    }

    pos.x = THREE.MathUtils.clamp(pos.x, MAP_BOUNDS.minX, MAP_BOUNDS.maxX);
    pos.z = THREE.MathUtils.clamp(pos.z, MAP_BOUNDS.minZ, MAP_BOUNDS.maxZ);
  }

  _sampleGround(pos, groundMeshes) {
    this.raycaster.set(new THREE.Vector3(pos.x, 20, pos.z), new THREE.Vector3(0, -1, 0));
    const hits = this.raycaster.intersectObjects(groundMeshes, false);
    return hits.length > 0 ? hits[0].point.y : 0;
  }

  get position() {
    return this.mesh.position;
  }
}

function createAlertBubble() {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#f0c040';
  ctx.beginPath();
  ctx.arc(32, 36, 22, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#1a1a1a';
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.fillStyle = '#1a1a1a';
  ctx.font = 'bold 28px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('!', 32, 44);

  const texture = new THREE.CanvasTexture(canvas);
  const sprite = new THREE.Sprite(
    new THREE.SpriteMaterial({ map: texture, transparent: true }),
  );
  sprite.position.y = 2.15;
  sprite.scale.set(0.45, 0.45, 1);
  sprite.visible = false;
  return sprite;
}

function createWaveBubble() {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.arc(32, 36, 22, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#3a8a8a';
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.font = '28px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('👋', 32, 44);

  const texture = new THREE.CanvasTexture(canvas);
  const sprite = new THREE.Sprite(
    new THREE.SpriteMaterial({ map: texture, transparent: true }),
  );
  sprite.position.y = 2.15;
  sprite.scale.set(0.5, 0.5, 1);
  sprite.visible = false;
  return sprite;
}

export class NPC {
  constructor(scene, path, profile) {
    this.type = 'npc';
    this.path = path;
    this.profile = profile;
    this.t = profile.startT;
    this.isTalking = false;
    this.playerNearby = false;
    this.talkCount = 0;
    this.friendship = 0;
    this.ignoreUntil = 0;
    this.idlePhase = Math.random() * Math.PI * 2;
    this.state = 'idle';
    this.isCompanion = false;
    this.homePos = new THREE.Vector3();
    this.walkSpeed = 2.8;
    this.followSpeed = 3.4;

    this.mesh = createCharacter({
      shirtColor: profile.shirtColor,
      backpackColor: profile.backpackColor,
      hairColor: profile.hairColor,
      nameTag: profile.name,
      nameTagJa: profile.nameJa,
    });

    this.alertBubble = createAlertBubble();
    this.waveBubble = createWaveBubble();
    this.mesh.add(this.alertBubble);
    this.mesh.add(this.waveBubble);

    scene.add(this.mesh);
    setExpression(this.mesh, profile.defaultExpression);
    this._placeOnPath();
    this.homePos.copy(this.mesh.position);
    this.homeFacing = this.mesh.rotation.y;
    setupNpcRoutine(this);
    this.nameTag = this.mesh.children.find((c) => c.userData?.isNameTag) ?? null;
    if (this.nameTag) {
      this.nameTag.userData.interactable = this;
      this.nameTag.userData.interactNpc = this;
      this.nameTag.children.forEach((child) => {
        child.userData.interactable = this;
        child.userData.interactNpc = this;
      });
    }
    this.mesh.userData.interactable = this;
  }

  getHitTargets() {
    const targets = [];
    if (this.nameTag) targets.push(this.nameTag);
    return targets;
  }

  canInteract(playerPos) {
    return this.distanceTo(playerPos) < 9;
  }

  interact(context) {
    this.clearIgnore();
    this.stopApproaching();
    context.dialogue?.showApproach(this, { initiated: false });
  }

  _placeOnPath() {
    const pos = this.path.getPointAt(this.t);
    const tangent = this.path.getTangentAt(this.t);
    this.mesh.position.copy(pos);
    this.mesh.position.y += 0.02;
    this.mesh.rotation.y = Math.atan2(tangent.x, tangent.z);
  }

  distanceTo(point) {
    const dx = this.mesh.position.x - point.x;
    const dz = this.mesh.position.z - point.z;
    return Math.hypot(dx, dz);
  }

  isIgnored() {
    return Date.now() < this.ignoreUntil;
  }

  ignoreFor(seconds) {
    this.ignoreUntil = Date.now() + seconds * 1000;
    this.alertBubble.visible = false;
    this.stopApproaching();
  }

  clearIgnore() {
    this.ignoreUntil = 0;
  }

  hasMetBefore() {
    return this.talkCount > 0;
  }

  markMet() {
    this.talkCount += 1;
  }

  addFriendship() {
    this.friendship += 1;
  }

  setExpression(expression) {
    setExpression(this.mesh, expression);
  }

  onApproach(initiated = false) {
    this.alertBubble.visible = !initiated;
    this.waveBubble.visible = initiated;
    setExpression(this.mesh, initiated ? 'happy' : 'happy');
  }

  clearApproachBubbles() {
    this.alertBubble.visible = false;
    this.waveBubble.visible = false;
  }

  startApproaching() {
    if (this.state === 'following' || this.isCompanion) return;
    this.state = 'approaching';
    this.waveBubble.visible = true;
    setExpression(this.mesh, 'happy');
  }

  stopApproaching() {
    if (this.state === 'approaching') this.state = 'idle';
    this.waveBubble.visible = false;
  }

  startFollowing() {
    this.state = 'following';
    this.isCompanion = true;
    this.clearApproachBubbles();
    setExpression(this.mesh, 'happy');
  }

  stopFollowing(returnHome = false) {
    this.state = 'idle';
    this.isCompanion = false;
    this.clearApproachBubbles();
    setExpression(this.mesh, this.profile.defaultExpression);
    if (returnHome) {
      this.mesh.position.copy(this.homePos);
      setupNpcRoutine(this);
    }
  }

  setPlayerNearby(nearby, playerPos) {
    this.playerNearby = nearby && !this.isCompanion;
    if (nearby && playerPos && !this.isTalking && !this.isCompanion) {
      this.facePoint(playerPos);
    }
    if (!this.isTalking && !this.isCompanion && this.state !== 'approaching') {
      this.alertBubble.visible = nearby;
    }
  }

  startConversation() {
    this.isTalking = true;
    this.clearApproachBubbles();
    if (this.state === 'approaching') this.state = 'idle';
  }

  endConversation() {
    this.isTalking = false;
    if (!this.isCompanion) {
      setExpression(this.mesh, this.profile.defaultExpression);
    }
  }

  facePoint(point) {
    const dx = point.x - this.mesh.position.x;
    const dz = point.z - this.mesh.position.z;
    if (Math.hypot(dx, dz) > 0.01) {
      this.mesh.rotation.y = Math.atan2(dx, dz);
    }
  }

  _moveToward(target, dt, speed, stopDist = 1.4) {
    return moveToward(this.mesh, target, dt, speed, stopDist, (s, d) => animateCharacter(this.mesh, s, d));
  }

  update(dt, playerPos = null, playerFacing = 0) {
    if (this.isTalking) {
      animateCharacter(this.mesh, 0, dt);
      if (playerPos) this.facePoint(playerPos);
      return;
    }

    if (this.state === 'following' && playerPos) {
      followPlayer(
        this.mesh,
        playerPos,
        playerFacing,
        dt,
        this.followSpeed,
        1.4,
        1.2,
        (s, d) => animateCharacter(this.mesh, s, d),
      );
      this.mesh.position.y = 0.02 + Math.sin(this.idlePhase) * 0.008;
      this.idlePhase += dt * 2;
      return;
    }

    if (this.state === 'approaching' && playerPos) {
      const reached = this._moveToward(playerPos, dt, this.walkSpeed, 2.2);
      this.waveBubble.visible = true;
      if (reached) setExpression(this.mesh, 'happy');
      return;
    }

    if (this.playerNearby) {
      animateCharacter(this.mesh, 0, dt);
      if (playerPos) this.facePoint(playerPos);
      return;
    }

    updateNpcRoutine(this, dt);
  }
}
