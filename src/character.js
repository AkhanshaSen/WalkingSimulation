import * as THREE from 'three';
import { createToonMaterial, createOutlinedMesh, PALETTE } from './materials.js';

export class InputManager {
  constructor(canvas) {
    this.keys = {};
    this.move = { x: 0, z: 0 };
    this.cameraAngle = 0;
    this.cameraPitch = 0.25;
    this.cameraDistance = 7;
    this.isDragging = false;
    this.lastPointer = { x: 0, y: 0 };

    window.addEventListener('keydown', (e) => {
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
    });
    window.addEventListener('pointerup', () => {
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

    canvas.addEventListener('touchend', () => {
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
}

export function createCharacter(options = {}) {
  const group = new THREE.Group();
  const shirtColor = options.shirtColor ?? PALETTE.shirt;
  const backpackColor = options.backpackColor ?? PALETTE.backpack;

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
    createToonMaterial(PALETTE.hair),
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

  group.userData.legs = group.children.filter(
    (c) => c.geometry?.type === 'CylinderGeometry' && c.position.y < 0.3,
  );
  group.userData.walkPhase = 0;

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
    this.pathT = 0.05;
    this.raycaster = new THREE.Raycaster();
  }

  update(input, dt, groundMeshes) {
    const speed = input.isRunning ? this.runSpeed : this.walkSpeed;
    const camForward = new THREE.Vector3(Math.sin(input.cameraAngle), 0, Math.cos(input.cameraAngle));
    const camRight = new THREE.Vector3(Math.cos(input.cameraAngle), 0, -Math.sin(input.cameraAngle));

    const moveDir = new THREE.Vector3()
      .addScaledVector(camRight, input.move.x)
      .addScaledVector(camForward, -input.move.z);

    if (moveDir.lengthSq() > 0.001) {
      moveDir.normalize();
      this.velocity.copy(moveDir.multiplyScalar(speed));
      this.facing = Math.atan2(moveDir.x, moveDir.z);
    } else {
      this.velocity.multiplyScalar(0.85);
    }

    this.mesh.position.x += this.velocity.x * dt;
    this.mesh.position.z += this.velocity.z * dt;

    const groundY = this._sampleGround(this.mesh.position, groundMeshes);
    this.mesh.position.y = groundY;

    this.mesh.rotation.y = THREE.MathUtils.lerp(this.mesh.rotation.y, this.facing, 0.15);

    const moveSpeed = this.velocity.length();
    animateCharacter(this.mesh, moveSpeed, dt);

    this.pathT = this.path.getClosestPointT(this.mesh.position);
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

export class NPC {
  constructor(scene, path, startT, speed = 1.2) {
    this.path = path;
    this.t = startT;
    this.speed = speed;
    this.direction = 1;
    this.mesh = createCharacter({ shirtColor: 0xe8e0d0, backpackColor: 0xe85050 });
    scene.add(this.mesh);
  }

  update(dt) {
    this.t += (this.speed * dt * this.direction) / this.path.getLength();
    if (this.t > 0.95) {
      this.t = 0.95;
      this.direction = -1;
    } else if (this.t < 0.15) {
      this.t = 0.15;
      this.direction = 1;
    }

    const pos = this.path.getPointAt(this.t);
    const tangent = this.path.getTangentAt(this.t);
    this.mesh.position.copy(pos);
    this.mesh.position.y += 0.02;
    this.mesh.rotation.y = Math.atan2(tangent.x, tangent.z);
    animateCharacter(this.mesh, this.speed, dt);
  }
}
