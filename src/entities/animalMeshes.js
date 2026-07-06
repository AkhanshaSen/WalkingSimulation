import * as THREE from 'three';
import { createToonMaterial, createOutlinedMesh } from '../materials.js';

let _modelLoader = null;

export function setAnimalModelLoader(loader) {
  _modelLoader = loader;
}

const SPECIES_MODEL = {
  // Warm orange tabby cat
  cat:    { key: 'animal_cat',    tint: 0xf07828, tintStrength: 0.55 },
  // Classic shiba golden-brown
  shiba:  { key: 'animal_dog',    tint: 0xe89040, tintStrength: 0.50 },
  // Soft lavender / lilac bunny
  rabbit: { key: 'animal_bunny',  tint: 0xd0a8e8, tintStrength: 0.45 },
  // Vivid fox: burnt orange
  fox:    { key: 'animal_fox',    tint: 0xe05510, tintStrength: 0.60 },
  // Bright canary-yellow duck
  duck:   { key: 'animal_duck',   tint: 0xf8d020, tintStrength: 0.60 },
  // Rosy pink pig
  pig:    { key: 'animal_pig',    tint: 0xf090b8, tintStrength: 0.55 },
  // Tropical teal-and-green parrot
  parrot: { key: 'animal_parrot', tint: 0x18c888, tintStrength: 0.55 },
};

// ─── reusable hit volume ──────────────────────────────────────────────────────
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

// ─── face helpers ─────────────────────────────────────────────────────────────
/**
 * Adds a pair of cartoon eyes (dark iris + white specular dot) to group.
 * cx/cy/cz = centre of face surface; spread = half-distance between eyes in Z.
 */
function addEyes(group, { cx, cy, cz = 0, spread = 0.042, size = 0.02, pupilColor = 0x111122, irisColor = 0x3060a8 } = {}) {
  const puMat  = new THREE.MeshBasicMaterial({ color: pupilColor });
  const irisMat = new THREE.MeshBasicMaterial({ color: irisColor });
  const hlMat  = new THREE.MeshBasicMaterial({ color: 0xffffff });

  [-spread, spread].forEach((dz) => {
    // Iris (slightly bigger, coloured)
    const iris = new THREE.Mesh(new THREE.CircleGeometry(size * 1.15, 8), irisMat);
    iris.position.set(cx + 0.001, cy, cz + dz);
    iris.rotation.y = -Math.PI / 2;
    group.add(iris);

    // Pupil
    const pupil = new THREE.Mesh(new THREE.CircleGeometry(size * 0.72, 8), puMat);
    pupil.position.set(cx + 0.002, cy, cz + dz);
    pupil.rotation.y = -Math.PI / 2;
    group.add(pupil);

    // Specular highlight
    const hl = new THREE.Mesh(new THREE.CircleGeometry(size * 0.3, 6), hlMat);
    hl.position.set(cx + 0.003, cy + size * 0.45, cz + dz + size * 0.3);
    hl.rotation.y = -Math.PI / 2;
    group.add(hl);
  });
}

/** Small rounded nose spot */
function addNose(group, cx, cy, cz, color = 0xdd6680, size = 0.013) {
  const mat = new THREE.MeshBasicMaterial({ color });
  const nose = new THREE.Mesh(new THREE.SphereGeometry(size, 7, 5), mat);
  nose.scale.set(1.3, 0.85, 0.8);
  nose.position.set(cx, cy, cz);
  group.add(nose);
}

/** Two small corner dots to imply a cat/animal smile */
function addSmile(group, cx, cy, cz, scale = 1.0) {
  const mat = new THREE.MeshBasicMaterial({ color: 0x1a0808 });
  [[-0.022 * scale, -0.006 * scale], [0.022 * scale, -0.006 * scale]].forEach(([dz, dy]) => {
    const dot = new THREE.Mesh(new THREE.SphereGeometry(0.007 * scale, 5, 4), mat);
    dot.position.set(cx, cy + dy, cz + dz);
    group.add(dot);
  });
}

/** Whisker: a thin flat box extending sideways */
function addWhiskers(group, cx, cy, cz, count = 3) {
  const mat = new THREE.MeshBasicMaterial({ color: 0x888888, transparent: true, opacity: 0.7 });
  for (let i = 0; i < count; i++) {
    const yOff = (i - 1) * 0.012;
    [-1, 1].forEach((side) => {
      const w = new THREE.Mesh(new THREE.BoxGeometry(0.075, 0.003, 0.003), mat);
      w.position.set(cx, cy + yOff, cz + side * 0.015);
      w.rotation.y = side * 0.15;
      group.add(w);
    });
  }
}

/** Small inner-ear fill cone */
function addInnerEar(group, px, py, pz, color = 0xffaabb) {
  const ear = new THREE.Mesh(
    new THREE.ConeGeometry(0.016, 0.038, 3),
    new THREE.MeshBasicMaterial({ color }),
  );
  ear.position.set(px, py, pz);
  group.add(ear);
}

/** Rounded paw stub (flattened sphere) */
function addPaw(group, x, y, z, color, r = 0.032) {
  const paw = createOutlinedMesh(new THREE.SphereGeometry(r, 7, 5), createToonMaterial(color));
  paw.scale.set(1.1, 0.55, 0.95);
  paw.position.set(x, y, z);
  group.add(paw);
}

/** Short leg cylinder + paw */
function addLeg(group, x, y, z, color, length = 0.07, pawColor = null) {
  const leg = createOutlinedMesh(
    new THREE.CylinderGeometry(0.025, 0.028, length, 6),
    createToonMaterial(color),
  );
  leg.position.set(x, y + length / 2, z);
  group.add(leg);
  addPaw(group, x, y, z, pawColor ?? color);
}

// ─── Cat ──────────────────────────────────────────────────────────────────────
export function createCatMesh(color = 0xf0a040) {
  const group = new THREE.Group();
  const mat = createToonMaterial(color);
  const creamMat = createToonMaterial(0xfff0e0);

  // Body
  const body = createOutlinedMesh(new THREE.SphereGeometry(0.13, 10, 8), mat);
  body.scale.set(1.25, 0.78, 1.05);
  body.position.y = 0.14;
  group.add(body);

  // Belly cream patch
  const belly = new THREE.Mesh(new THREE.SphereGeometry(0.075, 8, 6), creamMat);
  belly.scale.set(0.85, 0.6, 0.6);
  belly.position.set(0.09, 0.14, 0);
  group.add(belly);

  // Head
  const head = createOutlinedMesh(new THREE.SphereGeometry(0.1, 10, 8), mat);
  head.position.set(0.16, 0.215, 0);
  group.add(head);

  // Ears (outer)
  [[-0.038, 0.038], [0.038, 0.038]].forEach(([dz, dy]) => {
    const ear = createOutlinedMesh(new THREE.ConeGeometry(0.033, 0.068, 3), mat);
    ear.position.set(0.2, 0.315 + dy * 0.2, dz);
    ear.rotation.x = dz < 0 ? -0.1 : 0.1;
    group.add(ear);
    addInnerEar(group, 0.201, 0.318 + dy * 0.2, dz, 0xff99bb);
  });

  // Face  — head centre at (0.16, 0.215). Face direction = +x.  Surface ≈ x=0.255
  const fx = 0.255, fy = 0.22, fz = 0;
  addEyes(group, { cx: fx, cy: fy + 0.008, cz: fz, spread: 0.038, size: 0.021, irisColor: 0x2a9060 });
  addNose(group, fx + 0.003, fy - 0.022, fz, 0xee7799, 0.014);
  addSmile(group, fx + 0.001, fy - 0.038, fz, 0.9);
  addWhiskers(group, fx - 0.01, fy - 0.02, fz, 3);

  // Tail with fluffier tip
  const tail = createOutlinedMesh(new THREE.CylinderGeometry(0.018, 0.03, 0.24, 6), mat);
  tail.position.set(-0.16, 0.18, 0);
  tail.rotation.z = 0.75;
  group.userData.tail = tail;
  group.add(tail);

  const tailTip = createOutlinedMesh(new THREE.SphereGeometry(0.032, 7, 5), creamMat);
  tailTip.position.set(-0.265, 0.285, 0);
  group.add(tailTip);

  // Legs
  const legColor = color;
  [[-0.055, 0], [0.055, 0], [-0.04, 0.09], [0.04, 0.09]].forEach(([dz, dx]) => {
    addLeg(group, 0.07 + dx, 0.02, dz, legColor, 0.065);
  });

  addHitArea(group, { x: 1.3, y: 0.75, z: 1.3 });
  return group;
}

// ─── Shiba Inu ────────────────────────────────────────────────────────────────
export function createShibaMesh() {
  const group = new THREE.Group();
  const mat   = createToonMaterial(0xe8a050);
  const cream = createToonMaterial(0xfff0d0);

  // Body
  const body = createOutlinedMesh(new THREE.SphereGeometry(0.15, 10, 8), mat);
  body.scale.set(1.32, 0.88, 1.1);
  body.position.y = 0.15;
  group.add(body);

  // Chest cream patch
  const chest = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 6), cream);
  chest.scale.set(0.75, 0.7, 0.55);
  chest.position.set(0.11, 0.17, 0);
  group.add(chest);

  // Head
  const head = createOutlinedMesh(new THREE.SphereGeometry(0.12, 10, 8), mat);
  head.position.set(0.18, 0.24, 0);
  group.add(head);

  // Ears (pricked-up triangle ears)
  [[-0.048, 0], [0.048, 0]].forEach(([dz]) => {
    const ear = createOutlinedMesh(new THREE.ConeGeometry(0.034, 0.075, 3), mat);
    ear.position.set(0.22, 0.35, dz);
    ear.rotation.x = dz < 0 ? -0.15 : 0.15;
    group.add(ear);
    addInnerEar(group, 0.221, 0.352, dz, 0xffccaa);
  });

  // Snout muzzle
  const snout = createOutlinedMesh(new THREE.SphereGeometry(0.055, 8, 6), cream);
  snout.scale.set(1.0, 0.75, 0.85);
  snout.position.set(0.295, 0.22, 0);
  group.add(snout);

  const fx = 0.35, fy = 0.255;
  addEyes(group, { cx: fx - 0.04, cy: fy, cz: 0, spread: 0.046, size: 0.024, irisColor: 0x5a3010 });
  addNose(group, 0.346, 0.22, 0, 0x1a1a1a, 0.018);
  addSmile(group, 0.34, 0.202, 0, 1.1);

  // Curled fluffy tail
  const tail = createOutlinedMesh(new THREE.TorusGeometry(0.075, 0.025, 6, 10, Math.PI * 1.4), mat);
  tail.position.set(-0.14, 0.32, 0);
  tail.rotation.set(0.4, 0, 1.6);
  group.userData.tail = tail;
  group.add(tail);

  // Legs
  [[-0.065, 0], [0.065, 0], [-0.05, 0.1], [0.05, 0.1]].forEach(([dz, dx]) => {
    addLeg(group, 0.08 + dx, 0.02, dz, 0xe8a050, 0.08, 0xe8a050);
  });

  addHitArea(group, { x: 1.45, y: 0.8, z: 1.45 });
  return group;
}

// ─── Rabbit ───────────────────────────────────────────────────────────────────
export function createRabbitMesh() {
  const group = new THREE.Group();
  const mat  = createToonMaterial(0xf5f5f5);
  const pink = createToonMaterial(0xffccdd);

  // Body
  const body = createOutlinedMesh(new THREE.SphereGeometry(0.11, 10, 8), mat);
  body.scale.set(1.1, 1.05, 1.0);
  body.position.y = 0.12;
  group.add(body);

  // Head (rounder than cat)
  const head = createOutlinedMesh(new THREE.SphereGeometry(0.1, 10, 8), mat);
  head.position.set(0.12, 0.23, 0);
  group.add(head);

  // Long ears
  [[-0.036, 0], [0.036, 0]].forEach(([dz]) => {
    const earOuter = createOutlinedMesh(new THREE.CylinderGeometry(0.022, 0.026, 0.18, 8), mat);
    earOuter.position.set(0.11, 0.42, dz);
    group.add(earOuter);
    // Rounded ear tip
    const earTip = createOutlinedMesh(new THREE.SphereGeometry(0.022, 7, 5), mat);
    earTip.position.set(0.11, 0.51, dz);
    group.add(earTip);
    // Pink inner ear
    const earInner = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.014, 0.14, 6), createToonMaterial(0xffbbcc));
    earInner.position.set(0.112, 0.42, dz);
    group.add(earInner);
  });

  const fx = 0.215, fy = 0.24;
  // Big cute eyes (slightly larger for rabbit)
  addEyes(group, { cx: fx, cy: fy + 0.005, cz: 0, spread: 0.036, size: 0.026, irisColor: 0xcc3344, pupilColor: 0x440011 });
  addNose(group, fx + 0.005, fy - 0.018, 0, 0xffaacc, 0.013);
  addSmile(group, fx, fy - 0.032, 0, 0.85);

  // Cotton tail
  const tail = createOutlinedMesh(new THREE.SphereGeometry(0.038, 8, 6), mat);
  tail.position.set(-0.12, 0.16, 0);
  group.add(tail);
  group.userData.tail = tail;

  // Legs (longer back legs)
  [[-0.04, 0], [0.04, 0]].forEach(([dz]) => {
    addLeg(group, 0.05, 0.02, dz, 0xf5f5f5, 0.07);
  });
  // Back legs slightly bigger
  [[-0.045, -0.06], [0.045, -0.06]].forEach(([dz, dx]) => {
    addLeg(group, dx, 0.02, dz, 0xf5f5f5, 0.085, 0xf5f5f5);
  });

  addHitArea(group, { x: 1.05, y: 0.7, z: 1.05 });
  return group;
}

// ─── Fox ──────────────────────────────────────────────────────────────────────
export function createFoxMesh() {
  const group = new THREE.Group();
  const mat   = createToonMaterial(0xe87040);
  const white = createToonMaterial(0xf5f0e8);
  const dark  = createToonMaterial(0x2a1a10);

  // Body
  const body = createOutlinedMesh(new THREE.SphereGeometry(0.12, 10, 8), mat);
  body.scale.set(1.22, 0.8, 1.05);
  body.position.y = 0.13;
  group.add(body);

  // Chest white blaze
  const chest = new THREE.Mesh(new THREE.SphereGeometry(0.065, 8, 6), white);
  chest.scale.set(0.7, 0.7, 0.5);
  chest.position.set(0.1, 0.14, 0);
  group.add(chest);

  // Head
  const head = createOutlinedMesh(new THREE.SphereGeometry(0.1, 10, 8), mat);
  head.position.set(0.15, 0.2, 0);
  group.add(head);

  // Slightly pointy fox ears
  [[-0.04, 0], [0.04, 0]].forEach(([dz]) => {
    const ear = createOutlinedMesh(new THREE.ConeGeometry(0.03, 0.072, 3), mat);
    ear.position.set(0.19, 0.32, dz);
    ear.rotation.x = dz < 0 ? -0.2 : 0.2;
    group.add(ear);
    addInnerEar(group, 0.191, 0.322, dz, 0xffaaaa);
  });

  // White snout blaze
  const snoutWhite = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 6), white);
  snoutWhite.scale.set(1.1, 0.7, 0.75);
  snoutWhite.position.set(0.245, 0.195, 0);
  group.add(snoutWhite);

  const fx = 0.248, fy = 0.205;
  addEyes(group, { cx: fx - 0.025, cy: fy + 0.01, cz: 0, spread: 0.04, size: 0.022, irisColor: 0xd08830, pupilColor: 0x1a0800 });
  addNose(group, 0.255, fy - 0.015, 0, 0x1a1a1a, 0.016);
  addSmile(group, 0.252, fy - 0.03, 0, 0.9);

  // Paws — dark lower legs
  [[-0.05, 0], [0.05, 0]].forEach(([dz]) => {
    addLeg(group, 0.07, 0.02, dz, 0xe87040, 0.065, 0x2a1a10);
  });
  [[-0.04, -0.06], [0.04, -0.06]].forEach(([dz, dx]) => {
    addLeg(group, dx, 0.02, dz, 0xe87040, 0.065, 0x2a1a10);
  });

  // Big fluffy tail
  const tailBase = createOutlinedMesh(new THREE.CylinderGeometry(0.04, 0.055, 0.22, 7), mat);
  tailBase.position.set(-0.14, 0.15, 0);
  tailBase.rotation.z = 1.0;
  group.userData.tail = tailBase;
  group.add(tailBase);

  const tailTip = createOutlinedMesh(new THREE.SphereGeometry(0.06, 8, 6), white);
  tailTip.position.set(-0.26, 0.23, 0);
  group.add(tailTip);

  addHitArea(group, { x: 1.3, y: 0.75, z: 1.3 });
  return group;
}

// ─── Duck ─────────────────────────────────────────────────────────────────────
export function createDuckMesh() {
  const group = new THREE.Group();
  const mat    = createToonMaterial(0xf0e050);
  const orange = createToonMaterial(0xf07820);

  // Body (plump)
  const body = createOutlinedMesh(new THREE.SphereGeometry(0.12, 10, 8), mat);
  body.scale.set(1.22, 0.95, 1.12);
  body.position.y = 0.13;
  group.add(body);

  // Wing bumps on sides
  [-1, 1].forEach((side) => {
    const wing = createOutlinedMesh(new THREE.SphereGeometry(0.065, 8, 6), mat);
    wing.scale.set(0.75, 0.55, 0.4);
    wing.position.set(-0.03, 0.17, side * 0.13);
    group.add(wing);
  });

  // Head
  const head = createOutlinedMesh(new THREE.SphereGeometry(0.085, 10, 8), mat);
  head.position.set(0.155, 0.23, 0);
  group.add(head);

  // Bill (flattened — two planes)
  const bill = createOutlinedMesh(new THREE.BoxGeometry(0.075, 0.022, 0.06), orange);
  bill.position.set(0.238, 0.225, 0);
  group.add(bill);
  const billLower = createOutlinedMesh(new THREE.BoxGeometry(0.065, 0.016, 0.054), orange);
  billLower.position.set(0.238, 0.208, 0);
  group.add(billLower);

  // Eyes (round + cute, slightly higher for duck)
  const fx = 0.235, fy = 0.25;
  addEyes(group, { cx: fx - 0.022, cy: fy, cz: 0, spread: 0.036, size: 0.02, irisColor: 0x1a3a1a, pupilColor: 0x111111 });

  // Tail feathers
  const tail = createOutlinedMesh(new THREE.ConeGeometry(0.04, 0.07, 4), mat);
  tail.position.set(-0.155, 0.21, 0);
  tail.rotation.z = -Math.PI / 2 + 0.4;
  group.userData.tail = tail;
  group.add(tail);

  // Orange webbed feet
  [[-0.04, 0], [0.04, 0]].forEach(([dz]) => {
    const foot = createOutlinedMesh(new THREE.BoxGeometry(0.065, 0.014, 0.05), orange);
    foot.position.set(0.06, 0.015, dz);
    group.add(foot);
  });

  addHitArea(group, { x: 1.2, y: 0.7, z: 1.2 });
  return group;
}

// ─── dispatch ─────────────────────────────────────────────────────────────────
const MESH_BUILDERS = {
  cat:    createCatMesh,
  shiba:  createShibaMesh,
  rabbit: createRabbitMesh,
  fox:    createFoxMesh,
  duck:   createDuckMesh,
  pig:    createCatMesh,
  parrot: createDuckMesh,
};

/**
 * Each species builder places the head at local +X.
 * Game code uses rotation.y = Math.atan2(dx, dz), which makes the +Z axis face
 * the movement direction.  We wrap the inner model in a pivot and rotate it
 * -90° around Y so the head (inner +X) aligns with the wrapper's +Z (forward).
 * Kenney GLB models face -Z, so we flip them 180° instead.
 */
export function createAnimalMesh(species, color) {
  const spec = SPECIES_MODEL[species];
  if (spec) {
    const model = _modelLoader?.createInstance(spec.key, {
      tint: spec.tint ?? null,
      tintStrength: spec.tintStrength ?? 0,
    });
    if (model) {
      model.rotation.y = Math.PI;
      const wrapper = new THREE.Group();
      wrapper.add(model);
      wrapper.userData.isLoadedModel = true;
      return wrapper;
    }
  }

  const builder = MESH_BUILDERS[species] ?? createCatMesh;
  const inner   = builder(color);

  // Rotate so inner +X (head direction) → wrapper +Z (forward direction)
  inner.rotation.y = -Math.PI / 2;

  const wrapper = new THREE.Group();
  wrapper.add(inner);
  // Forward runtime references so Animal.js can access them via this.mesh
  wrapper.userData.tail = inner.userData.tail;

  return wrapper;
}

// ─── Name label (improved: rounded pill, coloured) ───────────────────────────
const SPECIES_LABEL_COLORS = {
  cat:   { bg: 'rgba(40,18,28,0.82)', border: '#d06888', text: '#f8d0dc' },
  shiba: { bg: 'rgba(40,28,10,0.82)', border: '#c88040', text: '#f8ddb0' },
  rabbit:{ bg: 'rgba(30,18,40,0.82)', border: '#aa70c8', text: '#e8c8f8' },
  fox:   { bg: 'rgba(42,20,10,0.82)', border: '#d06030', text: '#f8ccb0' },
  duck:  { bg: 'rgba(34,30,10,0.82)', border: '#c8a820', text: '#f0e890' },
  pig:   { bg: 'rgba(40,18,28,0.82)', border: '#e080a0', text: '#f8d0e0' },
  parrot:{ bg: 'rgba(18,34,28,0.82)', border: '#40b880', text: '#c8f8e0' },
};

export function createNameLabel(emoji, name, species = 'cat') {
  const W = 160, H = 46;
  const canvas = document.createElement('canvas');
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext('2d');

  const col = SPECIES_LABEL_COLORS[species] ?? { bg: 'rgba(18,26,34,0.82)', border: '#5ababa', text: '#e8f4f4' };
  const r = 12;

  // Dark pill — no white to glow
  ctx.fillStyle = col.bg;
  ctx.strokeStyle = col.border;
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(r, 2); ctx.lineTo(W - r, 2);
  ctx.quadraticCurveTo(W - 2, 2, W - 2, r);
  ctx.lineTo(W - 2, H - r);
  ctx.quadraticCurveTo(W - 2, H - 2, W - r, H - 2);
  ctx.lineTo(r, H - 2);
  ctx.quadraticCurveTo(2, H - 2, 2, H - r);
  ctx.lineTo(2, r);
  ctx.quadraticCurveTo(2, 2, r, 2);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = col.text;
  ctx.font = 'bold 15px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(`${emoji} ${name}`, W / 2, H / 2);

  const tex = new THREE.CanvasTexture(canvas);
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true }));
  sprite.position.y = 0.6;
  sprite.scale.set(1.1, 0.32, 1);
  return sprite;
}
