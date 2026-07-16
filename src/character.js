import * as THREE from 'three';
import { createToonMaterial, createOutlinedMesh, PALETTE } from './materials.js';
import { setupNpcRoutine, updateNpcRoutine } from './npcRoutines.js';
import { followPlayer, moveToward } from './entities/FollowerBehavior.js';
import { attachAccessory } from './accessories.js';

let _characterLoader = null;

export function setCharacterModelLoader(loader) {
  _characterLoader = loader;
}

export class InputManager {
  constructor(canvas) {
    this.keys = {};
    this.move = { x: 0, z: 0 };
    this.cameraAngle = 0;
    this.cameraPitch = 0.38;
    this.cameraDistance = 4.5;
    this.isDragging = false;
    this.lastPointer = { x: 0, y: 0 };
    this.justPressed = new Set();
    this.interactRequested = false;
    this.dialogueOpen = false;
    this.outfitOpen = false;
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
      this.cameraPitch = THREE.MathUtils.clamp(this.cameraPitch + dy * 0.003, 0.30, 0.55);
      this.lastPointer = { x: e.clientX, y: e.clientY };
    });

    canvas.addEventListener('wheel', (e) => {
      this.cameraDistance = THREE.MathUtils.clamp(this.cameraDistance + e.deltaY * 0.01, 3.5, 10);
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
        this.cameraPitch = THREE.MathUtils.clamp(this.cameraPitch + dy * 0.003, 0.30, 0.55);
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

function createBlobShadow(radius = 0.38) {
  const shadow = new THREE.Mesh(
    new THREE.CircleGeometry(radius, 16),
    new THREE.MeshBasicMaterial({
      color: 0x1a1a18,
      transparent: true,
      opacity: 0.28,
      depthWrite: false,
    }),
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.02;
  shadow.userData.isBlobShadow = true;
  return shadow;
}

export function createCharacter(options = {}) {
  const modelKey = options.modelKey ?? 'character_female_a';
  const rigged = _characterLoader?.createCharacterInstance(modelKey, {
    tint: options.tint ?? null,
    tintStrength: options.tintStrength ?? 0.22,
  });
  if (rigged) {
    if (options.nameTag) {
      const tag = createNameTag(options.nameTag, options.nameTagJa);
      tag.position.y = 2.45;
      rigged.add(tag);
    }
    rigged.add(createBlobShadow());
    return rigged;
  }

  const group = new THREE.Group();
  const shirtColor = options.shirtColor ?? PALETTE.shirt;
  const backpackColor = options.backpackColor ?? PALETTE.backpack;
  const hairColor = options.hairColor ?? PALETTE.hair;

  const body = createOutlinedMesh(
    new THREE.CylinderGeometry(0.20, 0.24, 0.72, 8),
    createToonMaterial(shirtColor),
  );
  body.position.y = 1.05;
  group.add(body);

  const skirt = createOutlinedMesh(
    new THREE.CylinderGeometry(0.26, 0.30, 0.28, 8),
    createToonMaterial(PALETTE.pants),
  );
  skirt.position.y = 0.58;
  group.add(skirt);

  const head = createOutlinedMesh(
    new THREE.SphereGeometry(0.17, 10, 8),
    createToonMaterial(PALETTE.skin),
  );
  head.position.y = 1.58;
  group.add(head);

  const hair = createOutlinedMesh(
    new THREE.SphereGeometry(0.19, 10, 8, 0, Math.PI * 2, 0, Math.PI * 0.55),
    createToonMaterial(hairColor),
  );
  hair.position.y = 1.64;
  hair.scale.set(1, 0.82, 1);
  group.add(hair);

  const backpack = createOutlinedMesh(
    new THREE.BoxGeometry(0.30, 0.38, 0.14),
    createToonMaterial(backpackColor),
  );
  backpack.position.set(0, 1.12, -0.20);
  group.add(backpack);

  const legGeo = new THREE.CylinderGeometry(0.065, 0.075, 0.52, 6);
  const legGroups = [];
  [-0.11, 0.11].forEach((x) => {
    const legGroup = new THREE.Group();
    legGroup.position.set(x, 0.28, 0);

    const leg = createOutlinedMesh(legGeo, createToonMaterial(PALETTE.pants));
    legGroup.add(leg);

    const shoe = createOutlinedMesh(
      new THREE.BoxGeometry(0.11, 0.06, 0.20),
      createToonMaterial(0xf0f0f0),
    );
    shoe.position.set(0, -0.22, 0.04);
    legGroup.add(shoe);

    group.add(legGroup);
    legGroups.push(legGroup);
  });

  const armGeo = new THREE.CylinderGeometry(0.044, 0.048, 0.42, 6);
  const armGroups = [];
  [-0.26, 0.26].forEach((x) => {
    const armGroup = new THREE.Group();
    armGroup.position.set(x, 1.18, 0);
    armGroup.rotation.z = x > 0 ? -0.15 : 0.15;

    const arm = createOutlinedMesh(armGeo, createToonMaterial(shirtColor));
    armGroup.add(arm);

    const hand = createOutlinedMesh(
      new THREE.SphereGeometry(0.048, 6, 4),
      createToonMaterial(PALETTE.skin),
    );
    hand.position.y = -0.24;
    armGroup.add(hand);

    group.add(armGroup);
    armGroups.push(armGroup);
  });

  group.userData.face = createFaceParts(group);
  group.userData.legs = legGroups;
  group.userData.arms = armGroups;
  group.userData.walkPhase = 0;
  group.userData.sitBlend = 0;

  if (options.nameTag) {
    group.add(createNameTag(options.nameTag, options.nameTagJa));
  }

  group.add(createBlobShadow());
  return group;
}

function createFaceParts(group) {
  const whiteMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const irisMat  = new THREE.MeshBasicMaterial({ color: 0x1a3a7a });
  const pupilMat = new THREE.MeshBasicMaterial({ color: 0x111122 });
  const hlMat    = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const mouthMat = createToonMaterial(0xd09090);
  const noseMat  = new THREE.MeshBasicMaterial({ color: 0xd09878 });

  // White sclera
  const leftSclera  = new THREE.Mesh(new THREE.CircleGeometry(0.032, 10), whiteMat);
  const rightSclera = new THREE.Mesh(new THREE.CircleGeometry(0.032, 10), whiteMat);
  leftSclera.position.set(-0.065, 1.58, 0.195);
  rightSclera.position.set(0.065, 1.58, 0.195);
  group.add(leftSclera, rightSclera);

  // Iris
  const leftIris  = new THREE.Mesh(new THREE.CircleGeometry(0.022, 10), irisMat);
  const rightIris = new THREE.Mesh(new THREE.CircleGeometry(0.022, 10), irisMat);
  leftIris.position.set(-0.065, 1.58, 0.196);
  rightIris.position.set(0.065, 1.58, 0.196);
  group.add(leftIris, rightIris);

  // Pupils
  const leftEye  = new THREE.Mesh(new THREE.CircleGeometry(0.014, 8), pupilMat);
  const rightEye = new THREE.Mesh(new THREE.CircleGeometry(0.014, 8), pupilMat);
  leftEye.position.set(-0.065, 1.58, 0.197);
  rightEye.position.set(0.065, 1.58, 0.197);
  group.add(leftEye, rightEye);

  // Highlights
  const hlL = new THREE.Mesh(new THREE.CircleGeometry(0.006, 6), hlMat);
  const hlR = new THREE.Mesh(new THREE.CircleGeometry(0.006, 6), hlMat);
  hlL.position.set(-0.056, 1.59, 0.198);
  hlR.position.set(0.074, 1.59, 0.198);
  group.add(hlL, hlR);

  // Nose
  const nose = new THREE.Mesh(new THREE.SphereGeometry(0.013, 6, 5), noseMat);
  nose.scale.set(1.2, 0.75, 0.6);
  nose.position.set(0, 1.51, 0.205);
  group.add(nose);

  // Mouth
  const mouth = new THREE.Mesh(new THREE.BoxGeometry(0.055, 0.013, 0.015), mouthMat);
  mouth.position.set(0, 1.475, 0.2);
  group.add(mouth);

  // Blush
  const blushMat = new THREE.MeshBasicMaterial({ color: 0xf0a0a8, transparent: true, opacity: 0.65 });
  const blushL = new THREE.Mesh(new THREE.CircleGeometry(0.04, 10), blushMat);
  blushL.position.set(-0.115, 1.515, 0.175);
  blushL.rotation.y = 0.28;
  blushL.visible = false;
  group.add(blushL);

  const blushR = new THREE.Mesh(new THREE.CircleGeometry(0.04, 10), blushMat);
  blushR.position.set(0.115, 1.515, 0.175);
  blushR.rotation.y = -0.28;
  blushR.visible = false;
  group.add(blushR);

  return {
    leftEye,  // pupil — used for expression scaling
    rightEye,
    mouth,
    blushL,
    blushR,
    baseMouthY: 1.475,
    baseEyeY:   1.58,
    // also keep refs to sclera for expression changes
    _leftSclera: leftSclera,
    _rightSclera: rightSclera,
    _leftIris: leftIris,
    _rightIris: rightIris,
  };
}

export function setExpression(group, expression) {
  if (group.userData?.isRiggedCharacter) {
    if (expression === 'happy') {
      _characterLoader?.playCharacterEmote(group, 'emote-yes');
    } else if (expression === 'shy' || expression === 'thinking') {
      _characterLoader?.playCharacterEmote(group, 'emote-no');
    }
    return;
  }

  const face = group.userData.face;
  if (!face) return;

  const {
    leftEye, rightEye, mouth, blushL, blushR,
    baseMouthY, baseEyeY,
    _leftSclera, _rightSclera, _leftIris, _rightIris,
  } = face;

  // Reset all layers
  for (const m of [leftEye, rightEye, _leftSclera, _rightSclera, _leftIris, _rightIris]) {
    if (m) m.scale.set(1, 1, 1);
  }
  leftEye.position.set(-0.065, baseEyeY, 0.197);
  rightEye.position.set(0.065, baseEyeY, 0.197);
  if (_leftSclera)  _leftSclera.position.set(-0.065, baseEyeY, 0.195);
  if (_rightSclera) _rightSclera.position.set(0.065,  baseEyeY, 0.195);
  if (_leftIris)    _leftIris.position.set(-0.065, baseEyeY, 0.196);
  if (_rightIris)   _rightIris.position.set(0.065,  baseEyeY, 0.196);
  mouth.scale.set(1, 1, 1);
  mouth.position.set(0, baseMouthY, 0.2);
  blushL.visible = false;
  blushR.visible = false;

  // Helper — squish all eye layers
  const squishEyes = (sx, sy) => {
    for (const m of [leftEye, rightEye, _leftSclera, _rightSclera, _leftIris, _rightIris]) {
      if (m) m.scale.set(sx, sy, 1);
    }
  };

  switch (expression) {
    case 'happy':
      squishEyes(1, 0.38);   // crescent happy eyes
      mouth.scale.set(1.5, 2.4, 1);
      break;
    case 'surprised':
      squishEyes(1.3, 1.3);
      mouth.scale.set(0.75, 2.8, 1);
      mouth.position.y = baseMouthY - 0.012;
      break;
    case 'thinking':
      leftEye.position.set(-0.04, baseEyeY + 0.02, 0.197);
      rightEye.position.set(0.08, baseEyeY + 0.02, 0.197);
      if (_leftIris)  _leftIris.position.set(-0.04, baseEyeY + 0.02, 0.196);
      if (_rightIris) _rightIris.position.set(0.08,  baseEyeY + 0.02, 0.196);
      mouth.scale.set(0.75, 0.75, 1);
      break;
    case 'shy':
      squishEyes(1, 0.65);
      mouth.scale.set(0.55, 1, 1);
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

  // Dark pill — no white to glow under any tone mapping
  const r = 14;
  ctx.fillStyle = 'rgba(18,26,34,0.82)';
  ctx.strokeStyle = 'rgba(120,200,200,0.7)';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(r + 6, 6); ctx.lineTo(250 - r, 6);
  ctx.quadraticCurveTo(250, 6, 250, 6 + r);
  ctx.lineTo(250, 58 - r);
  ctx.quadraticCurveTo(250, 58, 250 - r, 58);
  ctx.lineTo(r + 6, 58);
  ctx.quadraticCurveTo(6, 58, 6, 58 - r);
  ctx.lineTo(6, 6 + r);
  ctx.quadraticCurveTo(6, 6, r + 6, 6);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#e8f4f4';
  ctx.font = 'bold 18px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(nameJa || name, 128, 28);
  ctx.fillStyle = '#90b8b8';
  ctx.font = '13px sans-serif';
  ctx.fillText(name || '', 128, 48);

  const texture = new THREE.CanvasTexture(canvas);
  const material = new THREE.SpriteMaterial({ map: texture, transparent: true });
  const sprite = new THREE.Sprite(material);
  sprite.position.y = 2.45;
  sprite.scale.set(1.2, 0.32, 1);

  const hitMaterial = new THREE.SpriteMaterial({
    transparent: true,
    opacity: 0,
    depthWrite: false,
  });
  const hitArea = new THREE.Sprite(hitMaterial);
  hitArea.position.y = 2.45;
  hitArea.scale.set(1.8, 0.65, 1);
  hitArea.userData.isNameTagHit = true;

  const group = new THREE.Group();
  group.add(sprite);
  group.add(hitArea);
  group.userData.isNameTag = true;
  return group;
}

export function animateCharacter(character, speed, dt) {
  const ud = character.userData;

  if (ud.isRiggedCharacter) {
    _characterLoader?.updateCharacterAnimation(character, speed, dt);
    return;
  }

  // Sitting blend — lerp toward sit or stand
  const sitTarget = ud.isSitting ? 1 : 0;
  ud.sitBlend = THREE.MathUtils.lerp(ud.sitBlend ?? 0, sitTarget, 0.1);
  _applySitBlend(character, ud.sitBlend);

  if (ud.isSitting) return; // no walk while sitting

  if (speed < 0.1) {
    ud.legs?.forEach((leg) => {
      leg.rotation.x = THREE.MathUtils.lerp(leg.rotation.x, 0, 0.12);
    });
    ud.arms?.forEach((arm) => {
      arm.rotation.x = THREE.MathUtils.lerp(arm.rotation.x, 0, 0.12);
    });
    return;
  }

  ud.walkPhase += dt * speed * 7.5;
  const amp = Math.min(speed / 3, 1.5);
  ud.legs?.forEach((leg, i) => {
    leg.rotation.x = Math.sin(ud.walkPhase + i * Math.PI) * 0.42 * amp;
  });
  // Arms swing opposite to legs
  ud.arms?.forEach((arm, i) => {
    arm.rotation.x = Math.sin(ud.walkPhase + i * Math.PI + Math.PI) * 0.28 * amp;
  });
}

function _applySitBlend(character, t) {
  if (t < 0.001) return;
  const children = character.children;

  // Find torso (tallest cylinder above y 0.7)
  const torso = children.find(
    (c) => c.geometry?.type === 'CylinderGeometry' && c.position.y > 0.7,
  );
  if (torso) torso.position.y = THREE.MathUtils.lerp(0.85, 0.62, t);

  // Leg groups — bend forward
  character.userData.legs?.forEach((leg, i) => {
    const targetX = i === 0 ? -0.9 : 0.9;
    leg.rotation.x = THREE.MathUtils.lerp(0, targetX, t);
    leg.position.z = THREE.MathUtils.lerp(0, 0.18, t);
  });

  // Arms — rest on knees
  character.userData.arms?.forEach((arm) => {
    arm.rotation.x = THREE.MathUtils.lerp(0, 0.6, t);
  });
}

export const MAX_DIST_FROM_PATH = 12;
export const MAP_BOUNDS = { minX: -75, maxX: 75, minZ: -145, maxZ: 28 };

export class Player {
  constructor(scene, path) {
    this.scene = scene;
    this.path = path;
    this.outfit = { modelKey: 'character_female_a', tint: null, scale: 1 };
    this.mesh = createCharacter({ modelKey: this.outfit.modelKey });
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
    this.restSitY = 0.01;
    this.verticalVelocity = 0;
    this.isGrounded = true;
    this.colliderWorld = null;
    this.walkableCurves = null;
  }

  applySpeedBoost(amount, duration) {
    this.runSpeed = this.baseRunSpeed + amount;
    this.speedBoostTimer = duration;
  }

  setOutfit({ modelKey, tint, tintStrength, scale = 1 }) {
    const pos = this.mesh.position.clone();
    const rotY = this.mesh.rotation.y;
    const wasSitting = this.mesh.userData.isSitting;
    const wasJumping = this.mesh.userData.isJumping;
    // Preserve current headgear so it survives a skin swap.
    const prevAccessoryId = this.mesh.userData.accessoryId ?? 'none';

    this.scene.remove(this.mesh);
    this.mesh = createCharacter({
      modelKey: modelKey ?? this.outfit.modelKey,
      tint: tint !== undefined ? tint : this.outfit.tint,
      tintStrength: tintStrength ?? this.outfit.tintStrength ?? 0.22,
    });
    if (scale !== 1) this.mesh.scale.setScalar(scale);
    this.mesh.position.copy(pos);
    this.mesh.rotation.y = rotY;
    this.mesh.userData.isSitting = wasSitting;
    this.mesh.userData.isJumping = wasJumping;
    this.mesh.traverse((c) => { c.userData.dynamic = true; });
    this.scene.add(this.mesh);

    // Re-apply headgear on the fresh mesh.
    if (prevAccessoryId && prevAccessoryId !== 'none') {
      attachAccessory(this.mesh, prevAccessoryId);
    }

    this.outfit = {
      modelKey: modelKey ?? this.outfit.modelKey,
      tint: tint !== undefined ? tint : this.outfit.tint,
      tintStrength: tintStrength ?? this.outfit.tintStrength ?? 0.22,
      scale,
    };
  }

  update(input, dt, groundMeshes) {
    if (this.speedBoostTimer > 0) {
      this.speedBoostTimer -= dt;
      if (this.speedBoostTimer <= 0) {
        this.runSpeed = this.baseRunSpeed;
      }
    }

    if (input.dialogueOpen || this.restTimer > 0 || input.outfitOpen) {
      this.velocity.set(0, 0, 0);
      if (this.restTimer > 0) {
        this.restTimer -= dt;
        this.mesh.userData.isSitting = true;
        if (this.restPos) {
          this.mesh.position.lerp(this.restPos, 0.08);
          this.mesh.position.y = this.restSitY;
        }
        if (this.restTimer <= 0) {
          this.mesh.userData.isSitting = false;
        }
      }
    } else {
      if (input.consumeKey('Space') && this.isGrounded) {
        this.verticalVelocity = 5.8;
        this.isGrounded = false;
        this.mesh.userData.isJumping = true;
      }

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

    if (this.colliderWorld) {
      this.colliderWorld.resolve(this.mesh.position, 0.45);
    }

    this._clampToWalkableArea();

    const groundY = this._sampleGround(this.mesh.position, groundMeshes);

    if (!this.isGrounded || this.verticalVelocity > 0) {
      this.verticalVelocity -= 16 * dt;
      this.mesh.position.y += this.verticalVelocity * dt;
      if (this.mesh.position.y <= groundY) {
        this.mesh.position.y = groundY;
        this.verticalVelocity = 0;
        this.isGrounded = true;
        this.mesh.userData.isJumping = false;
      }
    } else {
      this.mesh.position.y = groundY;
    }

    this.mesh.rotation.y = THREE.MathUtils.lerp(this.mesh.rotation.y, this.facing, 0.15);

    const moveSpeed = this.velocity.length();
    animateCharacter(this.mesh, moveSpeed, dt);

    this.pathT = this.path.getClosestPointT?.(this.mesh.position) ?? 0;
  }

  rest(duration, nearPos, options = {}) {
    this.restTimer = duration;
    this.restPos = nearPos?.clone();
    this.restSitY = options.sitY ?? 0.01;
    if (options.facing != null) this.mesh.rotation.y = options.facing;
    this.velocity.set(0, 0, 0);
  }

  _clampToWalkableArea() {
    const pos = this.mesh.position;
    const curves = (this.walkableCurves?.length > 0) ? this.walkableCurves : [this.path];

    let bestDist = Infinity;
    let bestNearest = null;
    let bestT = 0;

    for (const curve of curves) {
      if (!curve?.getPointAt) continue;
      for (let i = 0; i <= 80; i++) {
        const t = i / 80;
        const p = curve.getPointAt(t);
        const d = Math.hypot(pos.x - p.x, pos.z - p.z);
        if (d < bestDist) {
          bestDist = d;
          bestNearest = p;
          bestT = t;
        }
      }
    }

    if (bestNearest) {
      this.pathT = bestT;
      if (bestDist > MAX_DIST_FROM_PATH) {
        const scale = MAX_DIST_FROM_PATH / bestDist;
        pos.x = bestNearest.x + (pos.x - bestNearest.x) * scale;
        pos.z = bestNearest.z + (pos.z - bestNearest.z) * scale;
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

function drawSpeechBubbleCanvas(text, mode = 'speech') {
  const upper = (text ?? '').toUpperCase();
  const isEllipsis = mode === 'ellipsis';
  const fontSize = isEllipsis ? 22 : 13;
  const maxWidth = 220;
  const lineHeight = isEllipsis ? 28 : 18;
  const padX = 14;
  const padY = 10;

  const measure = document.createElement('canvas').getContext('2d');
  measure.font = `bold ${fontSize}px "Noto Sans JP", sans-serif`;

  const lines = [];
  if (isEllipsis) {
    lines.push('...');
  } else {
    const words = upper.split(/\s+/);
    let line = '';
    for (const word of words) {
      const test = line ? `${line} ${word}` : word;
      if (measure.measureText(test).width > maxWidth && line) {
        lines.push(line);
        line = word;
      } else {
        line = test;
      }
    }
    if (line) lines.push(line);
    if (lines.length === 0) lines.push('');
  }

  const w = Math.max(
    80,
    ...lines.map((l) => measure.measureText(l).width + padX * 2),
  );
  const h = lines.length * lineHeight + padY * 2 + 8;

  const canvas = document.createElement('canvas');
  canvas.width = Math.ceil(w);
  canvas.height = Math.ceil(h);
  const ctx = canvas.getContext('2d');

  const r = 10;
  ctx.fillStyle = '#ffffff';
  ctx.strokeStyle = '#1a1a1a';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(r, 0);
  ctx.lineTo(w - r, 0);
  ctx.quadraticCurveTo(w, 0, w, r);
  ctx.lineTo(w, h - r - 8);
  ctx.quadraticCurveTo(w, h - 8, w - r, h - 8);
  ctx.lineTo(w * 0.55, h - 8);
  ctx.lineTo(w * 0.5, h);
  ctx.lineTo(w * 0.45, h - 8);
  ctx.lineTo(r, h - 8);
  ctx.quadraticCurveTo(0, h - 8, 0, h - r - 8);
  ctx.lineTo(0, r);
  ctx.quadraticCurveTo(0, 0, r, 0);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  if (isEllipsis) {
    ctx.fillStyle = '#50a850';
    for (let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.arc(w / 2 - 14 + i * 14, h / 2 - 2, 4, 0, Math.PI * 2);
      ctx.fill();
    }
  } else {
    ctx.fillStyle = '#1a1a1a';
    ctx.font = `bold ${fontSize}px "Noto Sans JP", sans-serif`;
    ctx.textAlign = 'center';
    lines.forEach((line, i) => {
      ctx.fillText(line, w / 2, padY + lineHeight * (i + 0.75));
    });
  }

  return { canvas, w, h };
}

function createSpeechBubble() {
  const sprite = new THREE.Sprite(
    new THREE.SpriteMaterial({ transparent: true, depthTest: true }),
  );
  sprite.position.y = 2.75;
  sprite.visible = false;
  sprite.userData.mode = 'speech';

  sprite.userData.setText = (text, mode = 'speech') => {
    sprite.userData.mode = mode;
    if (!text && mode !== 'ellipsis') {
      sprite.visible = false;
      return;
    }
    const { canvas, w, h } = drawSpeechBubbleCanvas(text, mode);
    if (sprite.material.map) sprite.material.map.dispose();
    sprite.material.map = new THREE.CanvasTexture(canvas);
    sprite.material.map.colorSpace = THREE.SRGBColorSpace;
    sprite.material.needsUpdate = true;
    const aspect = w / h;
    const height = mode === 'ellipsis' ? 0.38 : Math.min(0.95, 0.22 + linesEstimate(text) * 0.12);
    sprite.scale.set(height * aspect, height, 1);
    sprite.visible = true;
  };

  sprite.userData.hide = () => {
    sprite.visible = false;
  };

  return sprite;
}

function linesEstimate(text) {
  return Math.max(1, Math.ceil((text?.length ?? 0) / 28));
}

function createInteractPrompt() {
  const canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 24;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#ffffff';
  ctx.strokeStyle = '#1a1a1a';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(16, 20);
  ctx.lineTo(4, 6);
  ctx.lineTo(28, 6);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  const texture = new THREE.CanvasTexture(canvas);
  const sprite = new THREE.Sprite(
    new THREE.SpriteMaterial({ map: texture, transparent: true }),
  );
  sprite.position.y = 2.25;
  sprite.scale.set(0.28, 0.22, 1);
  sprite.visible = false;
  return sprite;
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
  sprite.position.y = 2.25;
  sprite.scale.set(0.45, 0.45, 1);
  sprite.visible = false;
  return sprite;
}

function createWaveBubble() {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'rgba(18,40,40,0.85)';
  ctx.beginPath();
  ctx.arc(32, 36, 22, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#5ababa';
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.font = '28px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('👋', 32, 44);

  const texture = new THREE.CanvasTexture(canvas);
  const sprite = new THREE.Sprite(
    new THREE.SpriteMaterial({ map: texture, transparent: true }),
  );
  sprite.position.y = 2.25;
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
      modelKey: profile.characterModel ?? 'character_male_a',
      shirtColor: profile.shirtColor,
      backpackColor: profile.backpackColor,
      hairColor: profile.hairColor,
      nameTag: profile.name,
      nameTagJa: profile.nameJa,
    });

    this.alertBubble = createAlertBubble();
    this.waveBubble = createWaveBubble();
    this.speechBubble = createSpeechBubble();
    this.interactPrompt = createInteractPrompt();
    this.mesh.add(this.alertBubble);
    this.mesh.add(this.waveBubble);
    this.mesh.add(this.speechBubble);
    this.mesh.add(this.interactPrompt);

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

  showSpeechText(text) {
    this.speechBubble.userData.setText(text, 'speech');
    this.interactPrompt.visible = false;
  }

  showEllipsisBubble() {
    this.speechBubble.userData.setText('', 'ellipsis');
  }

  hideSpeechBubble() {
    this.speechBubble.userData.hide();
  }

  showInteractPrompt() {
    if (!this.isTalking && !this.isIgnored()) {
      this.interactPrompt.visible = true;
    }
  }

  hideInteractPrompt() {
    this.interactPrompt.visible = false;
  }

  onApproach(initiated = false) {
    this.alertBubble.visible = !initiated;
    this.waveBubble.visible = initiated;
    this.hideInteractPrompt();
    if (!initiated) this.showEllipsisBubble();
    setExpression(this.mesh, initiated ? 'happy' : 'happy');
  }

  clearApproachBubbles() {
    this.alertBubble.visible = false;
    this.waveBubble.visible = false;
    if (!this.isTalking) this.hideSpeechBubble();
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
      this.alertBubble.visible = false;
      if (nearby && !this.isIgnored()) {
        this.showInteractPrompt();
        if (this.profile.routine === 'sit' || this.mesh.userData.isSitting) {
          this.showEllipsisBubble();
        }
      } else {
        this.hideInteractPrompt();
        if (!this.isTalking) this.hideSpeechBubble();
      }
    }
  }

  startConversation() {
    this.isTalking = true;
    this.clearApproachBubbles();
    this.hideInteractPrompt();
    if (this.state === 'approaching') this.state = 'idle';
  }

  endConversation() {
    this.isTalking = false;
    this.hideSpeechBubble();
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
