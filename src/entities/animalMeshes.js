import * as THREE from 'three';
import { createToonMaterial, createOutlinedMesh } from '../materials.js';

function addHitArea(group, scale = { x: 1.2, y: 0.8, z: 1.2 }) {
  const hit = new THREE.Mesh(
    new THREE.BoxGeometry(scale.x, scale.y, scale.z),
    new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false }),
  );
  hit.position.y = scale.y / 2;
  hit.userData.isHitArea = true;
  group.add(hit);
  return hit;
}

export function createCatMesh(color = 0xf0a040) {
  const group = new THREE.Group();
  const mat = createToonMaterial(color);
  const body = createOutlinedMesh(new THREE.SphereGeometry(0.12, 8, 6), mat);
  body.scale.set(1.2, 0.8, 1);
  body.position.y = 0.12;
  group.add(body);
  const head = createOutlinedMesh(new THREE.SphereGeometry(0.09, 8, 6), mat);
  head.position.set(0.14, 0.18, 0);
  group.add(head);
  [[-0.04, 0.28, 0.04], [0.04, 0.28, 0.04]].forEach(([x, y, z]) => {
    const ear = createOutlinedMesh(new THREE.ConeGeometry(0.03, 0.06, 3), mat);
    ear.position.set(x + 0.14, y, z);
    group.add(ear);
  });
  const tail = createOutlinedMesh(new THREE.CylinderGeometry(0.02, 0.03, 0.2, 4), mat);
  tail.position.set(-0.15, 0.15, 0);
  tail.rotation.z = 0.8;
  group.userData.tail = tail;
  addHitArea(group);
  return group;
}

export function createShibaMesh() {
  const group = new THREE.Group();
  const mat = createToonMaterial(0xe8a050);
  const body = createOutlinedMesh(new THREE.SphereGeometry(0.14, 8, 6), mat);
  body.scale.set(1.3, 0.9, 1.1);
  body.position.y = 0.14;
  group.add(body);
  const head = createOutlinedMesh(new THREE.SphereGeometry(0.11, 8, 6), mat);
  head.position.set(0.16, 0.22, 0);
  group.add(head);
  const snout = createOutlinedMesh(new THREE.SphereGeometry(0.05, 6, 4), createToonMaterial(0xf0d0a0));
  snout.position.set(0.24, 0.18, 0);
  group.add(snout);
  const tail = createOutlinedMesh(new THREE.CylinderGeometry(0.025, 0.04, 0.22, 4), mat);
  tail.position.set(-0.12, 0.28, 0);
  tail.rotation.z = -1.2;
  group.userData.tail = tail;
  addHitArea(group, { x: 1.4, y: 0.7, z: 1.4 });
  return group;
}

export function createRabbitMesh() {
  const group = new THREE.Group();
  const mat = createToonMaterial(0xf0f0f0);
  const body = createOutlinedMesh(new THREE.SphereGeometry(0.1, 8, 6), mat);
  body.scale.set(1.1, 0.85, 1);
  body.position.y = 0.1;
  group.add(body);
  const head = createOutlinedMesh(new THREE.SphereGeometry(0.08, 8, 6), mat);
  head.position.set(0.1, 0.16, 0);
  group.add(head);
  [-0.03, 0.03].forEach((x) => {
    const ear = createOutlinedMesh(new THREE.CylinderGeometry(0.02, 0.025, 0.14, 4), mat);
    ear.position.set(x + 0.1, 0.28, 0);
    group.add(ear);
  });
  addHitArea(group, { x: 1.0, y: 0.6, z: 1.0 });
  return group;
}

export function createFoxMesh() {
  const group = new THREE.Group();
  const mat = createToonMaterial(0xe87040);
  const body = createOutlinedMesh(new THREE.SphereGeometry(0.11, 8, 6), mat);
  body.scale.set(1.2, 0.8, 1);
  body.position.y = 0.11;
  group.add(body);
  const head = createOutlinedMesh(new THREE.SphereGeometry(0.09, 8, 6), mat);
  head.position.set(0.13, 0.17, 0);
  group.add(head);
  const tail = createOutlinedMesh(new THREE.ConeGeometry(0.08, 0.25, 6), createToonMaterial(0xf0f0f0));
  tail.position.set(-0.14, 0.12, 0);
  tail.rotation.z = 1.0;
  group.userData.tail = tail;
  addHitArea(group);
  return group;
}

export function createDuckMesh() {
  const group = new THREE.Group();
  const mat = createToonMaterial(0xf0e060);
  const body = createOutlinedMesh(new THREE.SphereGeometry(0.11, 8, 6), mat);
  body.scale.set(1.2, 0.9, 1.1);
  body.position.y = 0.11;
  group.add(body);
  const head = createOutlinedMesh(new THREE.SphereGeometry(0.07, 8, 6), mat);
  head.position.set(0.14, 0.17, 0);
  group.add(head);
  const bill = createOutlinedMesh(new THREE.ConeGeometry(0.04, 0.08, 4), createToonMaterial(0xf0a030));
  bill.position.set(0.2, 0.15, 0);
  bill.rotation.z = Math.PI / 2;
  group.add(bill);
  addHitArea(group);
  return group;
}

const MESH_BUILDERS = {
  cat: createCatMesh,
  shiba: createShibaMesh,
  rabbit: createRabbitMesh,
  fox: createFoxMesh,
  duck: createDuckMesh,
};

export function createAnimalMesh(species, color) {
  const builder = MESH_BUILDERS[species] ?? createCatMesh;
  return builder(color);
}

export function createNameLabel(emoji, name) {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 40;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'rgba(255,255,255,0.9)';
  ctx.fillRect(4, 4, 120, 32);
  ctx.fillStyle = '#2a4a4a';
  ctx.font = 'bold 14px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(`${emoji} ${name}`, 64, 24);
  const tex = new THREE.CanvasTexture(canvas);
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true }));
  sprite.position.y = 0.55;
  sprite.scale.set(0.9, 0.28, 1);
  return sprite;
}
