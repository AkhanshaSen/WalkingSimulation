import * as THREE from 'three';
import {
  createToonMaterial, createOutlinedMesh, createSoftOutlinedMesh, createFastMesh,
  createGrassTexture, createSoilTexture, createMulchTexture,
  createVendingDisplayTexture, createWaterMaterial, PALETTE, nextFrame,
} from './materials.js';
import { snapToGround } from './loaders/ModelLoader.js';
import { ColliderWorld } from './collision.js';
import { TREE_LAYOUT } from './data/streetMap.js';
import { PERF } from './performance.js';

let _modelLoader = null;

function setTownModelLoader(loader) {
  _modelLoader = loader;
}

function withModel(key, targetHeight, fallback, options = {}) {
  const instance = _modelLoader?.createInstance(key, { targetHeight, ...options });
  return instance ?? fallback();
}

function findFirstMesh(object) {
  let found = null;
  object.traverse((child) => {
    if (!found && child.isMesh) found = child;
  });
  return found;
}

/** Distance bands from main path centre (character walk line). */
const ROAD_HALF = 1.75;
const SIDEWALK_OUTER = ROAD_HALF + 0.75 + 0.15 + 0.75; // road + gap + sidewalk half ≈ 3.4 m
const SIDWALK_PROP_OFFSET = 2.85;
const SHOP_OFFSET = 6.6;
const LANDMARK_NEAR_OFFSET = 5.0;
const LANDMARK_DEEP_OFFSET = 7.4;
const TREE_OFFSET = 13.5;

const TREE_VARIANTS = {
  cherry: { glb: 'tree_cherry', height: 4.8, tint: 0xf0a0b8, tintStrength: 0.55, isCherry: true },
  sakura: { glb: 'tree_cherry', height: 5.15, tint: 0xffc8d8, tintStrength: 0.42, isCherry: true },
  blush: { glb: 'tree_cherry', height: 4.95, tint: 0xffa0c0, tintStrength: 0.58, isCherry: true },
  normal: { glb: 'tree_normal', height: 5.5, tint: null, tintStrength: 0.28 },
  maple: { glb: 'tree_normal', height: 5.05, tint: 0xc87830, tintStrength: 0.4 },
  lime: { glb: 'tree_normal', height: 5.75, tint: 0x88b848, tintStrength: 0.34 },
  forest: { glb: 'tree_normal', height: 6.05, tint: 0x3a6848, tintStrength: 0.46 },
  golden: { glb: 'tree_normal', height: 5.35, tint: 0xc0a840, tintStrength: 0.36 },
  pine: { glb: 'tree_normal', height: 6.35, tint: 0x2a5838, tintStrength: 0.52 },
};

function treeScaleFromSeed(seed = 0) {
  const x = Math.sin(seed * 127.1) * 43758.5453;
  return 0.9 + (x - Math.floor(x)) * 0.22;
}

function placeAlongPath(group, path, t, side, offset, y = 0, face = 'street') {
  const pos = path.getPointAt(t);
  const tangent = path.getTangentAt(t).normalize();
  const perp = new THREE.Vector3(-tangent.z, 0, tangent.x).multiplyScalar(side);
  group.position.copy(pos).add(perp.multiplyScalar(offset));
  group.position.y = y;

  if (face === 'street') {
    group.lookAt(pos.x, group.position.y, pos.z);
  } else if (face === 'gate') {
    group.lookAt(pos.x, group.position.y, pos.z);
    group.rotateY(Math.PI / 2);
  } else if (face === 'path') {
    group.lookAt(group.position.x + tangent.x, group.position.y, group.position.z + tangent.z);
  }

  snapGroupToGround(group, y);
  return group;
}

/** Snap a group so its lowest mesh bottom sits on y. */
function snapGroupToGround(group, y = 0) {
  if (group.userData?.isLoadedModel) {
    snapToGround(group, y);
    return group;
  }
  group.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(group);
  if (Number.isFinite(box.min.y)) {
    group.position.y += y - box.min.y;
  }
  return group;
}

function isTooClose(pos, placed, minDist = 4) {
  for (const p of placed) {
    if (Math.hypot(pos.x - p.x, pos.z - p.z) < minDist) return true;
  }
  return false;
}

/** Register a solid for later spacing checks. */
function registerSolid(list, position, radius = 3) {
  const p = position.clone();
  p.userData = { radius };
  list.push(p);
}

function isTooCloseSolid(pos, placed, radius = 1) {
  for (const p of placed) {
    const minDist = (p.userData?.radius ?? 1) + radius;
    if (Math.hypot(pos.x - p.x, pos.z - p.z) < minDist) return true;
  }
  return false;
}

/** Try primary placement, then nudge along path / outward before giving up. */
function tryPlaceWithClearance(group, path, t, side, offset, placed, radius, face = 'street', tangentShift = 0) {
  const attempts = [];
  for (const dt of [0, 0.03, -0.03, 0.06, -0.06, 0.09, -0.09, 0.12, -0.12]) {
    for (const dOff of [0, 0.35, 0.7]) {
      attempts.push({ t: t + dt, offset: offset + dOff });
    }
  }
  for (const { t: tryT, offset: tryOffset } of attempts) {
    const clampedT = THREE.MathUtils.clamp(tryT, 0.02, 0.98);
    if (tryOffset < SIDWALK_PROP_OFFSET - 0.2) continue;
    placeAlongPath(group, path, clampedT, side, tryOffset, 0, face);
    if (tangentShift) {
      const tangent = path.getTangentAt(clampedT).normalize();
      group.position.x += tangent.x * tangentShift;
      group.position.z += tangent.z * tangentShift;
      snapGroupToGround(group);
    }
    if (!isTooCloseSolid(group.position, placed, radius)) {
      return { t: clampedT, offset: tryOffset };
    }
  }
  return null;
}

function measureSolidRadius(group, fallback = 1) {
  group.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(group);
  const size = box.getSize(new THREE.Vector3());
  if (!Number.isFinite(size.x) || !Number.isFinite(size.z)) return fallback;
  return Math.max(Math.hypot(size.x, size.z) * 0.5, fallback);
}

function measureBoxHalfExtents(group, fallbackW = 1, fallbackD = 1) {
  group.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(group);
  const size = box.getSize(new THREE.Vector3());
  if (!Number.isFinite(size.x) || !Number.isFinite(size.z)) {
    return { halfW: fallbackW, halfD: fallbackD };
  }
  return {
    halfW: Math.max(size.x, size.z) * 0.5,
    halfD: Math.min(size.x, size.z) * 0.5,
  };
}

/** Seamless ribbon mesh along the path — no gaps on curves. */
function createPathRibbon(path, halfWidth, y, material, lateralOffset = 0, divisions = 180) {
  const points = path.getSpacedPoints(divisions);
  const positions = [];
  const indices = [];

  for (let i = 0; i < points.length; i++) {
    const t = i / (points.length - 1);
    const p = points[i];
    const tangent = path.getTangentAt(t).normalize();
    const perp = new THREE.Vector3(-tangent.z, 0, tangent.x);
    const center = p.clone().add(perp.clone().multiplyScalar(lateralOffset));
    const left = center.clone().add(perp.clone().multiplyScalar(-halfWidth));
    const right = center.clone().add(perp.clone().multiplyScalar(halfWidth));
    positions.push(left.x, y, left.z, right.x, y, right.z);
  }

  for (let i = 0; i < points.length - 1; i++) {
    const a = i * 2;
    const b = a + 1;
    const c = a + 2;
    const d = a + 3;
    indices.push(a, b, c, b, d, c);
  }

  const geom = new THREE.BufferGeometry();
  geom.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geom.setIndex(indices);
  geom.computeVertexNormals();

  const mesh = new THREE.Mesh(geom, material);
  mesh.receiveShadow = true;
  return mesh;
}

function createBuilding(width, depth, height, wallColor, roofColor, style = 'house', options = {}) {
  const group = new THREE.Group();
  const wallMat  = createToonMaterial(wallColor);
  const roofMat  = createToonMaterial(roofColor);
  const faceZ    = depth / 2;  // front-face Z offset

  // ── main walls ──────────────────────────────────────────────────────────────
  const walls = createSoftOutlinedMesh(new THREE.BoxGeometry(width, height, depth), wallMat);
  walls.position.y = height / 2;
  group.add(walls);

  // Ground-floor band (slightly darker)
  const bandH = Math.min(1.4, height * 0.35);
  const band = createSoftOutlinedMesh(
    new THREE.BoxGeometry(width + 0.02, bandH, depth + 0.02),
    createToonMaterial(new THREE.Color(wallColor).offsetHSL(0, 0, -0.08).getHex()),
  );
  band.position.y = bandH / 2;
  group.add(band);

  // Horizontal floor-separation strips
  const floors = style === 'apartment' ? Math.max(2, Math.round(height / 1.6)) : 1;
  for (let f = 1; f < floors; f++) {
    const strip = createSoftOutlinedMesh(
      new THREE.BoxGeometry(width + 0.06, 0.1, depth + 0.06),
      createToonMaterial(new THREE.Color(roofColor).offsetHSL(0, 0, 0.1).getHex()),
    );
    strip.position.y = (height / floors) * f;
    group.add(strip);
  }

  // ── windows ─────────────────────────────────────────────────────────────────
  const winGlass = createToonMaterial(0xb8e0f0);
  const winFrame = createToonMaterial(new THREE.Color(wallColor).offsetHSL(0, 0, -0.15).getHex());
  const winW = 0.52, winH = 0.58;
  const winCount = Math.max(1, Math.floor(width / 1.3));
  const winSpacing = width / (winCount + 1);

  const floorHeights = [];
  for (let f = 0; f < floors; f++) {
    const flH = height / floors;
    floorHeights.push(bandH + (f === 0 ? flH * 0.6 : (height / floors) * f + flH * 0.55));
  }

  floorHeights.forEach((wy, fi) => {
    if (fi === 0 && style === 'shop') return;  // ground floor handled separately for shops
    for (let wi = 0; wi < winCount; wi++) {
      const wx = -width / 2 + winSpacing * (wi + 1);
      // Frame
      const frame = new THREE.Mesh(
        new THREE.BoxGeometry(winW + 0.1, winH + 0.1, 0.06),
        winFrame,
      );
      frame.position.set(wx, wy, faceZ + 0.02);
      group.add(frame);
      // Glass
      const glass = new THREE.Mesh(new THREE.PlaneGeometry(winW, winH), winGlass);
      glass.position.set(wx, wy, faceZ + 0.06);
      group.add(glass);
      // Sill ledge
      const sill = new THREE.Mesh(
        new THREE.BoxGeometry(winW + 0.14, 0.07, 0.14),
        createToonMaterial(0xd0c8b8),
      );
      sill.position.set(wx, wy - winH / 2 - 0.02, faceZ + 0.08);
      group.add(sill);
    }
  });

  // ── style-specific front facade ─────────────────────────────────────────────
  if (style === 'shop') {
    // Large display window
    const dispFrame = createSoftOutlinedMesh(
      new THREE.BoxGeometry(width * 0.65, bandH - 0.15, 0.08),
      winFrame,
    );
    dispFrame.position.set(0, bandH * 0.5 + 0.08, faceZ + 0.03);
    group.add(dispFrame);
    const disp = new THREE.Mesh(
      new THREE.PlaneGeometry(width * 0.6, bandH - 0.22),
      createToonMaterial(0x90d0e8),
    );
    disp.position.set(0, bandH * 0.5 + 0.08, faceZ + 0.07);
    group.add(disp);

    // Door
    const doorFrame = createSoftOutlinedMesh(
      new THREE.BoxGeometry(0.82, 1.55, 0.07),
      createToonMaterial(0x5a4030),
    );
    doorFrame.position.set(width * 0.28, 0.78, faceZ + 0.03);
    group.add(doorFrame);
    const doorGlass = new THREE.Mesh(
      new THREE.PlaneGeometry(0.55, 1.1),
      createToonMaterial(0x80c8e8),
    );
    doorGlass.position.set(width * 0.28, 0.9, faceZ + 0.07);
    group.add(doorGlass);

    // Awning with stripes
    const awningColors = [PALETTE.awningRed, PALETTE.awningBlue, 0x508050, 0xc09030];
    const awningColor  = options.awningColor ?? awningColors[Math.floor(wallColor) % awningColors.length];
    const awning = createSoftOutlinedMesh(
      new THREE.BoxGeometry(width + 0.5, 0.08, 1.3),
      createToonMaterial(awningColor),
    );
    awning.position.set(0, height * 0.72, faceZ + 0.6);
    group.add(awning);
    // Stripe
    for (let s = 0; s < 3; s++) {
      const stripe = new THREE.Mesh(
        new THREE.BoxGeometry((width + 0.4) / 6, 0.06, 1.25),
        createToonMaterial(0xffffff),
      );
      stripe.position.set(-width / 3 + s * (width / 3), height * 0.72, faceZ + 0.6);
      group.add(stripe);
    }

    // Under-awning fringe
    const fringe = new THREE.Mesh(
      new THREE.BoxGeometry(width + 0.5, 0.18, 0.06),
      createToonMaterial(awningColor),
    );
    fringe.position.set(0, height * 0.72 - 0.09, faceZ + 1.22);
    group.add(fringe);
  }

  if (style === 'house') {
    // Door
    const door = createSoftOutlinedMesh(
      new THREE.BoxGeometry(0.75, 1.45, 0.08),
      createToonMaterial(0x5a4030),
    );
    door.position.set(-width * 0.2, 0.73, faceZ + 0.03);
    group.add(door);
    const doorKnob = new THREE.Mesh(
      new THREE.SphereGeometry(0.05, 5, 4),
      createToonMaterial(0xc8a840),
    );
    doorKnob.position.set(-width * 0.2 + 0.26, 0.72, faceZ + 0.09);
    group.add(doorKnob);

    // Nameplate beside door
    const plate = createSoftOutlinedMesh(
      new THREE.BoxGeometry(0.3, 0.14, 0.04),
      createToonMaterial(0xf0e8c0),
    );
    plate.position.set(-width * 0.2 - 0.52, 1.1, faceZ + 0.04);
    group.add(plate);
  }

  if (style === 'apartment') {
    // Central entrance
    const entryArch = createSoftOutlinedMesh(
      new THREE.BoxGeometry(1.4, 2.0, 0.1),
      createToonMaterial(new THREE.Color(wallColor).offsetHSL(0, 0, -0.12).getHex()),
    );
    entryArch.position.set(0, 1.0, faceZ + 0.04);
    group.add(entryArch);
    const entryGlass = new THREE.Mesh(
      new THREE.PlaneGeometry(0.9, 1.6),
      createToonMaterial(0x80c0e0),
    );
    entryGlass.position.set(0, 1.0, faceZ + 0.1);
    group.add(entryGlass);

    // Balconies per floor
    for (let f = 1; f < floors; f++) {
      const by = (height / floors) * f + 0.18;
      const balcony = createSoftOutlinedMesh(
        new THREE.BoxGeometry(width * 0.45, 0.09, 0.65),
        createToonMaterial(0x909090),
      );
      balcony.position.set(width * 0.22, by, faceZ + 0.36);
      group.add(balcony);
      const rail = createSoftOutlinedMesh(
        new THREE.BoxGeometry(width * 0.45, 0.32, 0.05),
        createToonMaterial(0x707070),
      );
      rail.position.set(width * 0.22, by + 0.2, faceZ + 0.67);
      group.add(rail);
    }

    // A/C units on side wall
    [height * 0.35, height * 0.65].forEach((ay) => {
      const ac = createSoftOutlinedMesh(
        new THREE.BoxGeometry(0.35, 0.2, 0.25),
        createToonMaterial(0xc8c8c0),
      );
      ac.position.set(width / 2 + 0.1, ay, 0);
      group.add(ac);
    });
  }

  // ── roof ────────────────────────────────────────────────────────────────────
  if (style === 'shrine') {
    const r1 = createOutlinedMesh(new THREE.BoxGeometry(width + 0.5, 0.12, depth + 0.5), roofMat);
    r1.position.y = height + 0.06;
    group.add(r1);
    const r2 = createOutlinedMesh(new THREE.ConeGeometry(width * 0.58, 1.0, 4), roofMat);
    r2.position.y = height + 0.6;
    r2.rotation.y = Math.PI / 4;
    group.add(r2);
  } else {
    // Parapet
    const parapet = createSoftOutlinedMesh(
      new THREE.BoxGeometry(width + 0.3, 0.22, depth + 0.3),
      roofMat,
    );
    parapet.position.y = height + 0.11;
    group.add(parapet);

    // Roof lip (slightly taller outer edge)
    const lip = createSoftOutlinedMesh(
      new THREE.BoxGeometry(width + 0.5, 0.1, depth + 0.5),
      createToonMaterial(new THREE.Color(roofColor).offsetHSL(0, 0, -0.07).getHex()),
    );
    lip.position.y = height + 0.05;
    group.add(lip);

    // Rooftop water tank (on taller buildings)
    if (height > 3.2 && style !== 'shop') {
      const tank = createOutlinedMesh(
        new THREE.CylinderGeometry(0.22, 0.24, 0.5, 7),
        createToonMaterial(0x8a8a8a),
      );
      tank.position.set(width * 0.3, height + 0.45, 0);
      group.add(tank);
      const tankRoof = createOutlinedMesh(
        new THREE.ConeGeometry(0.28, 0.2, 7),
        createToonMaterial(0x6a6a6a),
      );
      tankRoof.position.set(width * 0.3, height + 0.8, 0);
      group.add(tankRoof);
    }
  }

  return group;
}

function createTorii() {
  const group = new THREE.Group();
  const red = createToonMaterial(0xc03030, { emissive: 0x601010, emissiveIntensity: 0.12 });
  const postGeo = new THREE.CylinderGeometry(0.12, 0.14, 2.8, 6);
  const glowMeshes = [];

  [-1.1, 1.1].forEach((x) => {
    const post = createOutlinedMesh(postGeo, red);
    post.position.set(x, 1.4, 0);
    group.add(post);
    glowMeshes.push(post);
  });

  const lintel = createOutlinedMesh(new THREE.BoxGeometry(2.8, 0.18, 0.18), red);
  lintel.position.y = 2.55;
  group.add(lintel);
  glowMeshes.push(lintel);

  const topLintel = createOutlinedMesh(new THREE.BoxGeometry(3.0, 0.12, 0.22), red);
  topLintel.position.y = 2.85;
  group.add(topLintel);
  glowMeshes.push(topLintel);

  const plaque = createOutlinedMesh(
    new THREE.BoxGeometry(0.5, 0.25, 0.06),
    createToonMaterial(0x1a1a1a),
  );
  plaque.position.set(0, 2.35, 0.12);
  group.add(plaque);

  [-0.55, 0.55].forEach((x) => {
    const chochin = createOutlinedMesh(
      new THREE.SphereGeometry(0.11, 8, 6),
      createToonMaterial(0xfff0c8, { emissive: 0xff9020, emissiveIntensity: 0.35 }),
    );
    chochin.position.set(x, 2.32, 0.1);
    group.add(chochin);
    glowMeshes.push(chochin);
    addLandmarkGlowOrb(group, x, 2.32, 0.12, 0xffd090, 0.1);
  });

  glowMeshes.forEach((mesh) => registerLandmarkGlowMesh(group, mesh, 0xff5818));
  addLandmarkLight(group, 0, 2.55, 0.35, 0xffb060, 22);
  addLandmarkLight(group, 0, 1.2, 0.85, 0xffc878, 16);
  addLandmarkLight(group, -1.1, 0.6, 0.55, 0xffc070, 14);
  addLandmarkLight(group, 1.1, 0.6, 0.55, 0xffc070, 14);
  addLandmarkGlowOrb(group, 0, 2.58, 0.18, 0xffc888, 0.16);

  return group;
}

function createLantern() {
  const model = _modelLoader?.createInstance('street_lamp', { targetHeight: 3.2 });
  const group = new THREE.Group();

  if (model) {
    group.add(model);
    const glowMeshes = collectLanternGlowMeshes(model);
    group.userData.lanternMeshes = glowMeshes;
    group.userData.lanternMesh = glowMeshes[0] ?? findFirstMesh(model);
  } else {
    const post = createOutlinedMesh(
      new THREE.CylinderGeometry(0.05, 0.07, 2.35, 8),
      createToonMaterial(PALETTE.metal),
    );
    post.position.y = 1.18;
    group.add(post);

    const arm = createOutlinedMesh(
      new THREE.BoxGeometry(0.32, 0.05, 0.05),
      createToonMaterial(PALETTE.metal),
    );
    arm.position.set(0.12, 2.38, 0);
    group.add(arm);

    const housing = createOutlinedMesh(
      new THREE.CylinderGeometry(0.14, 0.18, 0.32, 8),
      createToonMaterial(0x2a3038),
    );
    housing.position.y = 2.52;
    group.add(housing);

    const paper = createOutlinedMesh(
      new THREE.CylinderGeometry(0.16, 0.2, 0.28, 8, 1, true),
      createToonMaterial(0xfff0c8, { emissive: 0xffd080, emissiveIntensity: 0.35 }),
    );
    paper.position.y = 2.52;
    group.add(paper);
    group.userData.lanternMesh = paper;
  }

  const lampLight = new THREE.PointLight(0xffd898, 0, 22, 1.35);
  lampLight.position.set(0, 2.65, 0.15);
  group.add(lampLight);
  group.userData.streetLampLight = lampLight;

  const glowOrb = new THREE.Mesh(
    new THREE.SphereGeometry(0.14, 8, 8),
    new THREE.MeshBasicMaterial({ color: 0xffe8a8, transparent: true, opacity: 0 }),
  );
  glowOrb.position.copy(lampLight.position);
  group.add(glowOrb);
  group.userData.lampGlowOrb = glowOrb;

  return group;
}

function prepareGlowMaterial(material, warm = 0xffd080) {
  if (!material) return;
  if (!material.emissive) material.emissive = new THREE.Color(warm);
  else if (material.emissive.getHex() === 0x000000) material.emissive.setHex(warm);
  if (material.emissiveIntensity == null || material.emissiveIntensity <= 0) {
    material.emissiveIntensity = 0.22;
  }
}

function addLandmarkLight(group, x, y, z, color = 0xffc878, distance = 18) {
  const pl = new THREE.PointLight(color, 0, distance, 1.35);
  pl.position.set(x, y, z);
  group.add(pl);
  if (!group.userData.landmarkLights) group.userData.landmarkLights = [];
  group.userData.landmarkLights.push(pl);
  return pl;
}

function addLandmarkGlowOrb(group, x, y, z, color = 0xffe8a8, size = 0.12) {
  const orb = new THREE.Mesh(
    new THREE.SphereGeometry(size, 8, 8),
    new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0 }),
  );
  orb.position.set(x, y, z);
  group.add(orb);
  if (!group.userData.landmarkGlowOrbs) group.userData.landmarkGlowOrbs = [];
  group.userData.landmarkGlowOrbs.push(orb);
  return orb;
}

function registerLandmarkGlowMesh(group, mesh, warm = 0xff9040) {
  if (!mesh?.material) return;
  prepareGlowMaterial(mesh.material, warm);
  if (!group.userData.landmarkGlowMeshes) group.userData.landmarkGlowMeshes = [];
  group.userData.landmarkGlowMeshes.push(mesh);
}

function createMiniShrineLantern() {
  const group = new THREE.Group();
  const post = createOutlinedMesh(
    new THREE.CylinderGeometry(0.035, 0.045, 0.42, 6),
    createToonMaterial(PALETTE.metal),
  );
  post.position.y = 0.21;
  group.add(post);

  const shade = createOutlinedMesh(
    new THREE.BoxGeometry(0.14, 0.18, 0.14),
    createToonMaterial(0xfff0c8, { emissive: 0xffa040, emissiveIntensity: 0.35 }),
  );
  shade.position.y = 0.52;
  group.add(shade);

  const pl = new THREE.PointLight(0xffc878, 0, 16, 1.45);
  pl.position.set(0, 0.55, 0.08);
  group.add(pl);
  group.userData.landmarkLight = pl;
  group.userData.landmarkGlowMesh = shade;

  const orb = new THREE.Mesh(
    new THREE.SphereGeometry(0.1, 8, 8),
    new THREE.MeshBasicMaterial({ color: 0xffe0a0, transparent: true, opacity: 0 }),
  );
  orb.position.copy(pl.position);
  group.add(orb);
  group.userData.landmarkGlowOrb = orb;

  return group;
}

function collectLanternGlowMeshes(object) {
  const meshes = [];
  object.traverse((child) => {
    if (!child.isMesh || child.userData.isOutline) return;
    const n = child.name.toLowerCase();
    if (/lamp|light|lantern|glass|paper|shade|emiss|bulb|glow|lantern/.test(n)) {
      meshes.push(child);
    }
  });
  if (meshes.length === 0) {
    const fallback = findLanternGlowMesh(object);
    if (fallback) meshes.push(fallback);
  }
  meshes.forEach((mesh) => prepareGlowMaterial(mesh.material));
  return meshes;
}

function findLanternGlowMesh(object) {
  let best = null;
  let bestY = -Infinity;
  object.traverse((child) => {
    if (!child.isMesh || child.userData.isOutline) return;
    const y = child.position.y;
    if (y > bestY) {
      bestY = y;
      best = child;
    }
  });
  return best;
}

function createStreetLampPost() {
  return createLantern();
}

function createVendingMachine(color = PALETTE.vending) {
  const group = withModel('vending', 2.05, () => {
    const root = new THREE.Group();
    const bodyColor = color;
    const trimColor = new THREE.Color(bodyColor).offsetHSL(0, 0, -0.14).getHex();
    const topColor = new THREE.Color(bodyColor).offsetHSL(0, 0, 0.1).getHex();
    const panelColor = 0x2a3238;

    const base = createSoftOutlinedMesh(
      new THREE.BoxGeometry(1.02, 0.14, 0.82),
      createToonMaterial(trimColor, { roughness: 0.92 }),
    );
    base.position.y = 0.07;
    root.add(base);

    const body = createSoftOutlinedMesh(
      new THREE.BoxGeometry(0.96, 1.78, 0.76),
      createToonMaterial(bodyColor, { roughness: 0.78 }),
    );
    body.position.y = 1.03;
    root.add(body);

    const sidePanel = createSoftOutlinedMesh(
      new THREE.BoxGeometry(0.06, 1.5, 0.68),
      createToonMaterial(panelColor, { roughness: 0.88 }),
    );
    sidePanel.position.set(-0.48, 1.02, 0);
    root.add(sidePanel);

    const topCap = createSoftOutlinedMesh(
      new THREE.BoxGeometry(1.0, 0.12, 0.8),
      createToonMaterial(topColor, { roughness: 0.68 }),
    );
    topCap.position.y = 1.96;
    root.add(topCap);

    const awning = createSoftOutlinedMesh(
      new THREE.BoxGeometry(1.08, 0.07, 0.28),
      createToonMaterial(topColor, { roughness: 0.6 }),
    );
    awning.position.set(0, 2.06, 0.42);
    awning.rotation.x = -0.14;
    root.add(awning);

    const displayTex = createVendingDisplayTexture(color);
    const glass = new THREE.Mesh(
      new THREE.PlaneGeometry(0.72, 1.22),
      createToonMaterial(0xffffff, {
        map: displayTex,
        emissive: 0x4098b8,
        emissiveIntensity: 0.55,
      }),
    );
    glass.position.set(0, 1.08, 0.395);
    root.add(glass);

    const frame = createSoftOutlinedMesh(
      new THREE.BoxGeometry(0.8, 1.28, 0.05),
      createToonMaterial(panelColor, { roughness: 0.85 }),
    );
    frame.position.set(0, 1.08, 0.375);
    root.add(frame);

    const brandStrip = createSoftOutlinedMesh(
      new THREE.BoxGeometry(0.72, 0.1, 0.04),
      createToonMaterial(0xf0f4f8, { roughness: 0.4 }),
    );
    brandStrip.position.set(0, 1.72, 0.395);
    root.add(brandStrip);

    const coinPanel = createSoftOutlinedMesh(
      new THREE.BoxGeometry(0.2, 0.32, 0.06),
      createToonMaterial(0x788898, { roughness: 0.5 }),
    );
    coinPanel.position.set(0.36, 0.58, 0.395);
    root.add(coinPanel);

    const slot = createSoftOutlinedMesh(
      new THREE.BoxGeometry(0.12, 0.05, 0.07),
      createToonMaterial(0x101418, { roughness: 0.95 }),
    );
    slot.position.set(0.36, 0.66, 0.41);
    root.add(slot);

    const dispense = createSoftOutlinedMesh(
      new THREE.BoxGeometry(0.32, 0.16, 0.24),
      createToonMaterial(0x141a20, { roughness: 0.92 }),
    );
    dispense.position.set(0, 0.3, 0.4);
    root.add(dispense);

    const dripTray = createSoftOutlinedMesh(
      new THREE.BoxGeometry(0.36, 0.04, 0.28),
      createToonMaterial(0x1a2028, { roughness: 0.9 }),
    );
    dripTray.position.set(0, 0.2, 0.4);
    root.add(dripTray);

    return root;
  }, { tint: color, tintStrength: 0.22, scale: 1.05 });

  decorateVendingMachine(group, color);
  return group;
}

function decorateVendingMachine(group, color) {
  const isLoaded = group.userData.isLoadedModel;

  if (isLoaded && !group.userData.vendingDisplay) {
    const displayTex = createVendingDisplayTexture(color);
    const panel = new THREE.Mesh(
      new THREE.PlaneGeometry(0.7, 1.08),
      createToonMaterial(0xffffff, {
        map: displayTex,
        emissive: 0x4098b8,
        emissiveIntensity: 0.55,
        transparent: true,
        opacity: 0.96,
        depthWrite: false,
      }),
    );
    panel.position.set(0, 1.05, 0.42);
    group.add(panel);
    group.userData.vendingDisplay = panel;
    group.userData.vendingGlow = panel;
  } else if (!group.userData.vendingGlow) {
    const glow = new THREE.Mesh(
      new THREE.PlaneGeometry(0.62, 1.0),
      createToonMaterial(0x90d0e8, {
        emissive: 0x4098b8,
        emissiveIntensity: 0.55,
        transparent: true,
        opacity: 0.62,
        depthWrite: false,
      }),
    );
    glow.position.set(0, 1.08, 0.4);
    group.add(glow);
    group.userData.vendingGlow = glow;
  }

  const lightColor = new THREE.Color(color).lerp(new THREE.Color(0xfff0d0), 0.45);
  const displayLight = new THREE.PointLight(lightColor, 0, 14, 1.8);
  displayLight.position.set(0, 1.55, 0.65);
  group.add(displayLight);
  group.userData.vendingLight = displayLight;

  const spillLight = new THREE.PointLight(0xffe8c8, 0, 8, 2);
  spillLight.position.set(0, 0.35, 0.55);
  group.add(spillLight);
  group.userData.vendingSpillLight = spillLight;
  group.userData.vendingColor = color;
}

function createMailbox() {
  const group = new THREE.Group();
  const post = createOutlinedMesh(
    new THREE.CylinderGeometry(0.06, 0.08, 1.2, 6),
    createToonMaterial(PALETTE.metal),
  );
  post.position.y = 0.6;
  group.add(post);

  const box = createOutlinedMesh(
    new THREE.BoxGeometry(0.35, 0.3, 0.25),
    createToonMaterial(PALETTE.orange),
  );
  box.position.y = 1.25;
  group.add(box);

  const roof = createOutlinedMesh(new THREE.ConeGeometry(0.28, 0.2, 4), createToonMaterial(PALETTE.orange));
  roof.position.y = 1.5;
  roof.rotation.y = Math.PI / 4;
  group.add(roof);
  return group;
}

function createTrafficMirror() {
  const group = new THREE.Group();
  const pole = createOutlinedMesh(
    new THREE.CylinderGeometry(0.05, 0.06, 2.5, 6),
    createToonMaterial(PALETTE.orange),
  );
  pole.position.y = 1.25;
  group.add(pole);

  const mirror = createOutlinedMesh(new THREE.CircleGeometry(0.45, 16), createToonMaterial(0xd0e8e8));
  mirror.position.set(0, 2.6, 0);
  mirror.rotation.x = -0.3;
  group.add(mirror);

  const frame = createOutlinedMesh(
    new THREE.TorusGeometry(0.45, 0.04, 6, 16),
    createToonMaterial(PALETTE.orange),
  );
  frame.position.set(0, 2.6, -0.02);
  frame.rotation.x = -0.3;
  group.add(frame);
  return group;
}

function createTrafficCone() {
  const cone = createOutlinedMesh(new THREE.ConeGeometry(0.15, 0.4, 8), createToonMaterial(PALETTE.cone));
  cone.position.y = 0.2;
  return cone;
}

function createInfoKiosk() {
  const group = new THREE.Group();
  const body = createOutlinedMesh(
    new THREE.BoxGeometry(0.8, 1.4, 0.5),
    createToonMaterial(PALETTE.sign),
  );
  body.position.y = 0.7;
  group.add(body);

  const board = createOutlinedMesh(
    new THREE.BoxGeometry(0.65, 0.9, 0.05),
    createToonMaterial(0xf0f0e8),
  );
  board.position.set(0, 0.85, 0.26);
  group.add(board);

  for (let i = 0; i < 5; i++) {
    const line = new THREE.Mesh(
      new THREE.BoxGeometry(0.45, 0.03, 0.01),
      createToonMaterial(0x888888),
    );
    line.position.set(0, 0.55 + i * 0.14, 0.29);
    group.add(line);
  }
  return group;
}

function createCatenaryWire(start, end, sag = 0.25) {
  const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
  mid.y -= sag;
  const curve = new THREE.QuadraticBezierCurve3(
    start.clone(),
    mid,
    end.clone(),
  );
  const tube = new THREE.TubeGeometry(curve, 10, 0.015, 4, false);
  const wire = createOutlinedMesh(tube, createToonMaterial(0x1a1a1a), 1.02);
  wire.raycast = () => {};
  return wire;
}

function createBusStopSignTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#f5f5f0';
  ctx.fillRect(0, 0, 128, 64);
  ctx.strokeStyle = '#1a1a1a';
  ctx.lineWidth = 3;
  ctx.strokeRect(2, 2, 124, 60);
  ctx.fillStyle = '#1a1a1a';
  ctx.font = 'bold 18px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('バス停', 64, 26);
  ctx.font = '11px sans-serif';
  ctx.fillText('BUS STOP', 64, 46);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function createBusStop() {
  const group = new THREE.Group();
  const orange = 0xef6b2a;

  const pole = createOutlinedMesh(
    new THREE.CylinderGeometry(0.05, 0.06, 3.2, 6),
    createToonMaterial(orange),
  );
  pole.position.y = 1.6;
  group.add(pole);

  const disc = createOutlinedMesh(
    new THREE.CircleGeometry(0.42, 16),
    createToonMaterial(orange),
  );
  disc.position.set(0, 3.15, 0.02);
  group.add(disc);

  const frame = createOutlinedMesh(
    new THREE.TorusGeometry(0.42, 0.04, 6, 16),
    createToonMaterial(0x1a1a1a),
  );
  frame.position.set(0, 3.15, 0.01);
  group.add(frame);

  const board = createOutlinedMesh(
    new THREE.BoxGeometry(0.55, 0.32, 0.04),
    createToonMaterial(0xf5f5f0, { map: createBusStopSignTexture() }),
  );
  board.position.set(0, 2.55, 0.08);
  group.add(board);

  return group;
}

function createDirectionalSign(direction = 'right') {
  const group = new THREE.Group();
  const post = createOutlinedMesh(
    new THREE.CylinderGeometry(0.05, 0.06, 1.8, 6),
    createToonMaterial(0x8a7060),
  );
  post.position.y = 0.9;
  group.add(post);

  const panel = createOutlinedMesh(
    new THREE.BoxGeometry(0.9, 0.7, 0.06),
    createToonMaterial(0xf0a030),
  );
  panel.position.y = 1.75;
  group.add(panel);

  const shape = new THREE.Shape();
  if (direction === 'right') {
    shape.moveTo(-0.22, 0.14);
    shape.lineTo(0.08, 0.14);
    shape.lineTo(0.08, 0.24);
    shape.lineTo(0.32, 0);
    shape.lineTo(0.08, -0.24);
    shape.lineTo(0.08, -0.14);
    shape.lineTo(-0.22, -0.14);
    shape.closePath();
  } else {
    shape.moveTo(0.22, 0.14);
    shape.lineTo(-0.08, 0.14);
    shape.lineTo(-0.08, 0.24);
    shape.lineTo(-0.32, 0);
    shape.lineTo(-0.08, -0.24);
    shape.lineTo(-0.08, -0.14);
    shape.lineTo(0.22, -0.14);
    shape.closePath();
  }

  const arrow = createOutlinedMesh(
    new THREE.ShapeGeometry(shape),
    createToonMaterial(0x1a1a1a),
  );
  arrow.position.set(0, 1.75, 0.04);
  group.add(arrow);

  return group;
}

function createInfoBoardTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#3a9090';
  ctx.fillRect(0, 0, 128, 256);
  ctx.fillStyle = '#e8f4f4';
  ctx.font = 'bold 14px sans-serif';
  ctx.textAlign = 'center';
  const lines = ['町の案内', 'Community', 'お知らせ', 'Notice', '案内図'];
  lines.forEach((line, i) => {
    ctx.fillText(line, 64, 36 + i * 38);
  });
  ctx.strokeStyle = 'rgba(255,255,255,0.35)';
  ctx.lineWidth = 1;
  for (let i = 1; i < lines.length; i++) {
    ctx.beginPath();
    ctx.moveTo(16, 20 + i * 38);
    ctx.lineTo(112, 20 + i * 38);
    ctx.stroke();
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function createTallInfoBoard() {
  const group = new THREE.Group();
  const post = createOutlinedMesh(
    new THREE.CylinderGeometry(0.06, 0.08, 1.4, 6),
    createToonMaterial(0x6a7a78),
  );
  post.position.y = 0.7;
  group.add(post);

  const board = createOutlinedMesh(
    new THREE.BoxGeometry(1.2, 2.2, 0.1),
    createToonMaterial(0x3a9090, { map: createInfoBoardTexture() }),
  );
  board.position.y = 2.5;
  group.add(board);

  return group;
}

function createTrashCan() {
  const group = new THREE.Group();
  const body = createOutlinedMesh(
    new THREE.CylinderGeometry(0.18, 0.18, 0.55, 8),
    createToonMaterial(0x2a6060),
  );
  body.position.y = 0.275;
  group.add(body);

  const lid = createOutlinedMesh(
    new THREE.CylinderGeometry(0.21, 0.21, 0.04, 8),
    createToonMaterial(0x1e4848),
  );
  lid.position.y = 0.57;
  group.add(lid);

  return group;
}

function createUtilityPole() {
  const group = new THREE.Group();
  const poleMat = createToonMaterial(0x6a5a4a);
  const pole = createOutlinedMesh(
    new THREE.CylinderGeometry(0.07, 0.09, 4.5, 6),
    poleMat,
  );
  pole.position.y = 2.25;
  group.add(pole);

  const crossbar = createOutlinedMesh(
    new THREE.BoxGeometry(1.2, 0.06, 0.06),
    poleMat,
  );
  crossbar.position.y = 4.0;
  group.add(crossbar);

  const sign = createOutlinedMesh(
    new THREE.CircleGeometry(0.22, 12),
    createToonMaterial(0x3080c0),
  );
  sign.position.set(0, 3.2, 0.12);
  group.add(sign);

  const wireY = 4.0;
  const wireOffsets = [-0.55, 0, 0.55];
  wireOffsets.forEach((xOff) => {
    const wire = createCatenaryWire(
      new THREE.Vector3(xOff - 0.35, wireY, 0),
      new THREE.Vector3(xOff + 0.35, wireY, 0),
      0.18,
    );
    group.add(wire);
  });

  group.userData.wireAnchor = new THREE.Vector3(0, wireY, 0);
  return group;
}

function createUtilityWireSpan(startWorld, endWorld) {
  const group = new THREE.Group();
  const start = startWorld.clone();
  const end = endWorld.clone();
  const sag = Math.min(0.45, Math.max(0.2, start.distanceTo(end) * 0.04));
  [-0.12, 0, 0.12].forEach((offset) => {
    const perp = new THREE.Vector3().subVectors(end, start).normalize();
    const lateral = new THREE.Vector3(-perp.z, 0, perp.x).multiplyScalar(offset);
    const wire = createCatenaryWire(
      start.clone().add(lateral),
      end.clone().add(lateral),
      sag,
    );
    group.add(wire);
  });
  group.raycast = () => {};
  return group;
}

function createBicycle() {
  const group = new THREE.Group();
  const frameMat = createToonMaterial(0x4080c0);
  const wheelMat = createToonMaterial(0x222222);

  const wheelGeo = new THREE.TorusGeometry(0.28, 0.03, 6, 12);
  [-0.45, 0.45].forEach((x) => {
    const wheel = createOutlinedMesh(wheelGeo, wheelMat);
    wheel.rotation.y = Math.PI / 2;
    wheel.position.set(x, 0.28, 0);
    group.add(wheel);
  });

  const bar = createOutlinedMesh(new THREE.BoxGeometry(0.9, 0.04, 0.04), frameMat);
  bar.position.set(0, 0.55, 0);
  bar.rotation.z = 0.15;
  group.add(bar);

  const seat = createOutlinedMesh(new THREE.BoxGeometry(0.15, 0.06, 0.2), createToonMaterial(0x1a1a1a));
  seat.position.set(-0.15, 0.65, 0);
  group.add(seat);

  return group;
}

function createBollard() {
  const bollard = createOutlinedMesh(
    new THREE.CylinderGeometry(0.08, 0.1, 0.55, 6),
    createToonMaterial(0xf0c030),
  );
  bollard.position.y = 0.28;
  return bollard;
}

function createPottedPlant() {
  const group = new THREE.Group();
  const pot = createOutlinedMesh(
    new THREE.CylinderGeometry(0.15, 0.12, 0.25, 6),
    createToonMaterial(0x8a5030),
  );
  pot.position.y = 0.13;
  group.add(pot);

  const leaves = createSoftOutlinedMesh(
    new THREE.SphereGeometry(0.22, 8, 6),
    createToonMaterial(0x4a9a4a),
  );
  leaves.position.y = 0.38;
  leaves.scale.set(1.1, 0.9, 1.1);
  group.add(leaves);

  const puff = createSoftOutlinedMesh(
    new THREE.SphereGeometry(0.14, 8, 6),
    createToonMaterial(0x5aaa5a),
  );
  puff.position.set(0.1, 0.44, 0.06);
  group.add(puff);

  return group;
}

function createGardenBush(size = 0.5) {
  const group = new THREE.Group();
  const greens = [0x4a8a52, 0x5a9a5a, 0x3a7a48];
  const puffs = [
    [0, 0.55, 0, 0.36],
    [-0.2, 0.42, 0.12, 0.24],
    [0.18, 0.44, -0.1, 0.26],
    [0.02, 0.68, 0.06, 0.2],
  ];
  puffs.forEach(([x, y, z, r], i) => {
    const puff = createSoftOutlinedMesh(
      new THREE.SphereGeometry(r * size, 8, 6),
      createToonMaterial(greens[i % greens.length]),
    );
    puff.position.set(x * size, y * size, z * size);
    puff.scale.set(1.08, 0.82, 1.08);
    group.add(puff);
  });
  return group;
}

function createGardenRock(size = 0.28) {
  const group = new THREE.Group();
  const rock = createSoftOutlinedMesh(
    new THREE.DodecahedronGeometry(size, 0),
    createToonMaterial(0x8a8880),
  );
  rock.position.y = size * 0.55;
  rock.rotation.set(0.18, 0.4, 0.12);
  group.add(rock);
  const pebble = createSoftOutlinedMesh(
    new THREE.DodecahedronGeometry(size * 0.45, 0),
    createToonMaterial(0x9a9590),
  );
  pebble.position.set(size * 0.7, size * 0.22, size * 0.35);
  pebble.rotation.set(-0.2, 1.1, 0.15);
  group.add(pebble);
  return group;
}

function createGardenDecoration(size = 0.32) {
  const group = new THREE.Group();
  const stone = createToonMaterial(0x9a9088);
  const base = createSoftOutlinedMesh(
    new THREE.BoxGeometry(size * 0.9, size * 0.35, size * 0.9),
    stone,
  );
  base.position.y = size * 0.18;
  group.add(base);
  const post = createSoftOutlinedMesh(
    new THREE.BoxGeometry(size * 0.42, size * 0.95, size * 0.42),
    stone,
  );
  post.position.y = size * 0.82;
  group.add(post);
  const cap = createSoftOutlinedMesh(
    new THREE.BoxGeometry(size * 1.05, size * 0.22, size * 1.05),
    stone,
  );
  cap.position.y = size * 1.35;
  group.add(cap);
  const window = createSoftOutlinedMesh(
    new THREE.BoxGeometry(size * 0.55, size * 0.42, size * 0.55),
    createToonMaterial(0xf0e8d0, { emissive: 0xffe0a0, emissiveIntensity: 0.18 }),
  );
  window.position.y = size * 0.88;
  group.add(window);
  return group;
}

function createGardenFenceSegment(size = 0.5) {
  const group = new THREE.Group();
  const wood = createToonMaterial(0x8a7060);
  const rail = createSoftOutlinedMesh(
    new THREE.BoxGeometry(size * 1.7, size * 0.84, size * 0.14),
    wood,
  );
  rail.position.y = size * 0.42;
  group.add(rail);
  [-0.64, 0.64].forEach((x) => {
    const post = createSoftOutlinedMesh(
      new THREE.BoxGeometry(size * 0.12, size * 0.96, size * 0.12),
      wood,
    );
    post.position.set(x * size, size * 0.48, 0);
    group.add(post);
  });
  return group;
}

function createProceduralCherryTree(variant = 'cherry', scaleMul = 1, rotationY = null) {
  const palette = {
    cherry: { main: 0xf090a8, light: 0xf8b0c8, accent: 0xffc8dc },
    sakura: { main: 0xffb8d0, light: 0xffd0e4, accent: 0xffe8f2 },
    blush: { main: 0xff78a8, light: 0xff98bc, accent: 0xffb8d0 },
  };
  const c = palette[variant] ?? palette.cherry;

  const tree = new THREE.Group();
  tree.rotation.y = rotationY ?? Math.random() * Math.PI * 2;

  const trunk = createFastMesh(
    new THREE.CylinderGeometry(0.11, 0.15, 1.05, 6),
    createToonMaterial(0x6a5040),
  );
  trunk.position.y = 0.52;
  tree.add(trunk);

  const puffs = [
    [0, 1.42, 0, 0.74, c.main],
    [-0.44, 1.26, 0.16, 0.54, c.light],
    [0.42, 1.3, -0.18, 0.56, c.main],
    [0.1, 1.74, 0.12, 0.46, c.accent],
    [-0.3, 1.56, -0.24, 0.42, c.light],
    [0.36, 1.52, 0.3, 0.4, c.accent],
    [0, 1.12, 0.34, 0.36, c.main],
  ];
  puffs.forEach(([x, y, z, s, col]) => {
    const puff = createFastMesh(new THREE.SphereGeometry(s, 8, 6), createToonMaterial(col));
    puff.position.set(x, y, z);
    tree.add(puff);
  });

  tree.scale.setScalar(2.05 * scaleMul);
  tree.userData.isCherry = true;
  tree.userData.treeVariant = variant;
  tree.userData.isProceduralTree = true;
  return tree;
}

function createTree(variant = 'normal', options = {}) {
  const preset = TREE_VARIANTS[variant] ?? TREE_VARIANTS.normal;
  const scaleMul = options.scale ?? 1;

  // Kenney tree_cherry GLB is still green — use procedural blossom canopies for pink variants.
  if (preset.isCherry) {
    return createProceduralCherryTree(variant, scaleMul, options.rotationY);
  }

  const model = _modelLoader?.createInstance(preset.glb, {
    targetHeight: preset.height * scaleMul,
    tint: preset.tint,
    tintStrength: preset.tintStrength,
    rotationY: options.rotationY ?? Math.random() * Math.PI * 2,
  });
  if (model) {
    model.userData.treeVariant = variant;
    return model;
  }

  const tree = new THREE.Group();
  const trunk = createSoftOutlinedMesh(
    new THREE.CylinderGeometry(0.1, 0.14, 1.0, 6),
    createToonMaterial(0x6a5040),
  );
  trunk.position.y = 0.5;
  tree.add(trunk);

  if (variant === 'pine') {
    [0.65, 0.48, 0.32].forEach((r, i) => {
      const layer = createSoftOutlinedMesh(
        new THREE.ConeGeometry(r, 0.55, 6),
        createToonMaterial(0x3a7a4a),
      );
      layer.position.y = 1.0 + i * 0.42;
      tree.add(layer);
    });
  } else {
    const leaf = preset.tint ?? (0x5a9a5a + Math.floor(Math.random() * 0x050505));
    [[0, 1.35, 0, 0.55], [-0.28, 1.2, 0.2, 0.4], [0.3, 1.25, -0.18, 0.42], [0, 1.55, 0.1, 0.35]].forEach(
      ([x, y, z, s]) => {
        const foliage = createSoftOutlinedMesh(
          new THREE.SphereGeometry(s, 8, 6),
          createToonMaterial(typeof leaf === 'number' ? leaf : 0x5a9a5a),
        );
        foliage.position.set(x, y, z);
        tree.add(foliage);
      },
    );
  }

  const fallbackScale = (variant === 'pine' ? 2.3 : 2.1) * scaleMul;
  tree.scale.setScalar(fallbackScale);
  tree.userData.treeVariant = variant;
  return tree;
}

function createBambooCluster() {
  const group = new THREE.Group();
  const mat = createToonMaterial(0x5a9a5a);
  for (let i = 0; i < 5; i++) {
    const h = 1.5 + Math.random() * 1.2;
    const stalk = createOutlinedMesh(new THREE.CylinderGeometry(0.04, 0.05, h, 6), mat);
    stalk.position.set((Math.random() - 0.5) * 0.6, h / 2, (Math.random() - 0.5) * 0.6);
    group.add(stalk);
  }
  return group;
}

function createPainterlyCloudTexture(seed = 0) {
  const size = 128;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, size, size);

  const rng = (n) => {
    const x = Math.sin(seed * 127.1 + n * 311.7) * 43758.5453;
    return x - Math.floor(x);
  };

  const blobs = 4 + Math.floor(rng(0) * 3);
  for (let b = 0; b < blobs; b++) {
    const cx = size * (0.25 + rng(b + 1) * 0.5);
    const cy = size * (0.3 + rng(b + 2) * 0.4);
    const rx = size * (0.32 + rng(b + 3) * 0.22);
    const ry = size * (0.08 + rng(b + 4) * 0.08);
    const alpha = 0.55 + rng(b + 5) * 0.35;

    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(rng(b + 6) * Math.PI);
    ctx.beginPath();
    ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
    ctx.fill();
    ctx.restore();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function createCloud(x, y, z, scale) {
  const seed = x * 0.17 + y * 0.31 + z * 0.09;
  const texture = createPainterlyCloudTexture(seed);
  const sprite = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: texture,
      transparent: true,
      depthWrite: false,
      opacity: 0.88,
    }),
  );
  const aspect = 2.4 + (seed % 1.2);
  const height = scale * 1.2;
  sprite.scale.set(height * aspect, height, 1);
  sprite.position.set(x, y, z);
  sprite.userData.driftSpeed = 0.15 + (seed % 0.2);
  sprite.userData.driftPhase = seed * Math.PI;
  sprite.userData.dynamic = true;
  return sprite;
}


/** Scatter instanced meshes with a placement callback. */
function scatterInstanced(scene, geometry, material, count, placeFn, scaleRange = [0.8, 1.2]) {
  const mesh = new THREE.InstancedMesh(geometry, material, count);
  const dummy = new THREE.Object3D();
  let placed = 0;
  for (let attempt = 0; attempt < count * 4 && placed < count; attempt++) {
    const pos = placeFn();
    if (!pos) continue;
    dummy.position.copy(pos);
    dummy.rotation.y = Math.random() * Math.PI * 2;
    const s = scaleRange[0] + Math.random() * (scaleRange[1] - scaleRange[0]);
    dummy.scale.setScalar(s);
    dummy.updateMatrix();
    mesh.setMatrixAt(placed++, dummy.matrix);
  }
  mesh.count = placed;
  mesh.instanceMatrix.needsUpdate = true;
  scene.add(mesh);
  return mesh;
}

/** Stone stairway up to a raised platform with the shrine hall on top. */
function createElevatedShrine() {
  const group = new THREE.Group();
  const stepCount = 5;
  const stepRise = 0.13;
  const stepRun = 0.34;
  const stepWidth = 2.6;
  const stoneMat = createToonMaterial(0x9a9a92);
  const railMat = createToonMaterial(0x7a7068);
  const platformMat = createToonMaterial(0x848480);

  // Flanking walls along the stair run (+Z faces the street)
  for (const xSign of [-1, 1]) {
    const wall = createSoftOutlinedMesh(
      new THREE.BoxGeometry(0.16, stepCount * stepRise + 0.55, stepCount * stepRun + 1.0),
      railMat,
    );
    wall.position.set(
      xSign * (stepWidth * 0.5 + 0.1),
      (stepCount * stepRise) * 0.48 + 0.08,
      0.05,
    );
    group.add(wall);
  }

  for (let i = 0; i < stepCount; i++) {
    const stairs = withModel('shrine_stairs', 0.32, () => {
      const w = stepWidth - i * 0.05;
      return createOutlinedMesh(new THREE.BoxGeometry(w, stepRise, stepRun), stoneMat);
    });
    stairs.position.set(0, stepRise * 0.5 + i * stepRise, 1.05 - i * stepRun);
    group.add(stairs);
  }

  const platformY = stepCount * stepRise;
  const platform = createSoftOutlinedMesh(
    new THREE.BoxGeometry(3.5, 0.3, 3.1),
    platformMat,
  );
  platform.position.set(0, platformY + 0.15, -0.9);
  group.add(platform);

  const backWall = createSoftOutlinedMesh(
    new THREE.BoxGeometry(3.6, 0.5, 0.22),
    railMat,
  );
  backWall.position.set(0, platformY + 0.38, -2.25);
  group.add(backWall);

  const shrineHall = withModel('shrine', 2.4, () => {
    const inner = new THREE.Group();
    const base = createOutlinedMesh(new THREE.BoxGeometry(2.1, 0.22, 1.7), platformMat);
    base.position.y = 0.11;
    inner.add(base);
    const building = createBuilding(1.65, 1.4, 1.45, 0xf0e8d8, 0x3a3a3a, 'shrine');
    building.position.set(0, 0, -0.15);
    inner.add(building);
    return inner;
  });
  shrineHall.position.set(0, platformY + 0.3, -1.05);
  group.add(shrineHall);
  collectLanternGlowMeshes(shrineHall).forEach((mesh) => registerLandmarkGlowMesh(group, mesh, 0xffc060));
  shrineHall.traverse((child) => {
    if (!child.isMesh || child.userData.isOutline) return;
    const n = child.name.toLowerCase();
    if (/window|door|light|lantern|paper|screen|lamp|emiss/.test(n)) {
      registerLandmarkGlowMesh(group, child, 0xffc060);
    }
  });

  [-1.05, 1.05].forEach((x) => {
    const lantern = createMiniShrineLantern();
    lantern.position.set(x, platformY, 0.35);
    group.add(lantern);
  });

  addLandmarkLight(group, 0, platformY + 1.55, -0.15, 0xffd8a0, 20);
  addLandmarkLight(group, 0, platformY + 0.85, 0.75, 0xffc878, 16);
  addLandmarkLight(group, -1.05, platformY + 0.7, 0.45, 0xffc070, 14);
  addLandmarkLight(group, 1.05, platformY + 0.7, 0.45, 0xffc070, 14);
  addLandmarkLight(group, 0, platformY + 0.45, 1.05, 0xffe8b8, 18);
  addLandmarkGlowOrb(group, 0, platformY + 1.5, -0.35, 0xffe8c0, 0.18);

  return group;
}

function seededRandom(seed) {
  let s = seed % 2147483646 || 1;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function addGardenModel(group, key, x, z, targetHeight, rotY = 0, scale = 1) {
  const size = targetHeight * scale;
  let prop = null;
  if (key === 'bush') prop = createGardenBush(size);
  else if (key === 'rock') prop = createGardenRock(size);
  else if (key === 'decoration') prop = createGardenDecoration(size);
  else if (key === 'fence_low') prop = createGardenFenceSegment(size);
  if (!prop) return;
  prop.position.set(x, 0, z);
  prop.rotation.y = rotY;
  group.add(prop);
}

function addGardenFlower(group, x, z, color, scale = 1) {
  const stemH = 0.26 * scale;
  const stem = createOutlinedMesh(
    new THREE.CylinderGeometry(0.012 * scale, 0.018 * scale, stemH, 5),
    createToonMaterial(0x3a6a3a),
  );
  stem.position.set(x, stemH * 0.5 + 0.1, z);
  group.add(stem);

  const head = createOutlinedMesh(
    new THREE.SphereGeometry(0.055 * scale, 7, 5),
    createToonMaterial(color),
  );
  head.position.set(x, 0.1 + stemH + 0.04 * scale, z);
  group.add(head);

  for (let i = 0; i < 5; i++) {
    const angle = (i / 5) * Math.PI * 2;
    const petal = createOutlinedMesh(
      new THREE.SphereGeometry(0.028 * scale, 6, 4),
      createToonMaterial(color),
    );
    petal.position.set(
      x + Math.cos(angle) * 0.05 * scale,
      0.1 + stemH + 0.038 * scale,
      z + Math.sin(angle) * 0.05 * scale,
    );
    petal.scale.set(1.2, 0.45, 1.2);
    group.add(petal);
  }
}

function addGardenBedBase(group, width, depth, surface = 'soil') {
  const grassTex = createGrassTexture();
  const apron = new THREE.Mesh(
    new THREE.PlaneGeometry(width + 0.8, depth + 0.8),
    createToonMaterial(PALETTE.meadow, { map: grassTex }),
  );
  apron.rotation.x = -Math.PI / 2;
  apron.position.y = 0.004;
  apron.receiveShadow = true;
  group.add(apron);

  const frameMat = createToonMaterial(0x7a6050);
  const frameH = 0.14;
  const frameT = 0.07;
  [
    [0, -depth / 2 - frameT / 2, width + frameT * 2, frameT],
    [0, depth / 2 + frameT / 2, width + frameT * 2, frameT],
    [-width / 2 - frameT / 2, 0, frameT, depth],
    [width / 2 + frameT / 2, 0, frameT, depth],
  ].forEach(([x, z, w, d]) => {
    const rail = createSoftOutlinedMesh(new THREE.BoxGeometry(w, frameH, d), frameMat);
    rail.position.set(x, frameH * 0.5, z);
    group.add(rail);
  });

  const bedTex = surface === 'mulch' ? createMulchTexture() : createSoilTexture();
  const bedColor = surface === 'mulch' ? 0x5a4030 : 0x6a5040;
  const bed = new THREE.Mesh(
    new THREE.BoxGeometry(width, 0.07, depth),
    createToonMaterial(bedColor, { map: bedTex }),
  );
  bed.position.y = 0.11;
  bed.receiveShadow = true;
  group.add(bed);
}

function createGarden(variant = 'flower', seed = 1) {
  const rand = seededRandom(seed);
  const group = new THREE.Group();
  const flowerColors = [0xf06080, 0xf0c040, 0xf8f4f0, 0xe080c0, 0xff9070, 0xf0a0d0];

  if (variant === 'flower') {
    const w = 2.6;
    const d = 1.9;
    addGardenBedBase(group, w, d, 'soil');

    const count = 10 + Math.floor(rand() * 4);
    for (let i = 0; i < count; i++) {
      const x = (rand() - 0.5) * (w - 0.5);
      const z = (rand() - 0.5) * (d - 0.4);
      addGardenFlower(group, x, z, flowerColors[Math.floor(rand() * flowerColors.length)], 0.85 + rand() * 0.35);
    }

    addGardenModel(group, 'bush', -w * 0.38, -d * 0.32, 0.55, rand() * Math.PI * 2, 0.9 + rand() * 0.2);
    addGardenModel(group, 'bush', w * 0.36, -d * 0.28, 0.48, rand() * Math.PI * 2, 0.85 + rand() * 0.15);
    addGardenModel(group, 'rock', w * 0.3, d * 0.25, 0.28, rand() * Math.PI, 0.8 + rand() * 0.4);
    addGardenModel(group, 'decoration', -w * 0.32, d * 0.22, 0.32, rand() * Math.PI * 2);

    for (let i = -1; i <= 1; i++) {
      addGardenModel(group, 'fence_low', i * 0.85, d / 2 + 0.18, 0.52, Math.PI, 0.95);
    }
  } else if (variant === 'shrub') {
    const w = 2.4;
    const d = 2.0;
    addGardenBedBase(group, w, d, 'mulch');

    const bushSpots = [
      [-0.55, -0.35, 0.62], [0.5, -0.4, 0.58], [0, 0.15, 0.72], [-0.15, 0.45, 0.52],
    ];
    bushSpots.forEach(([x, z, h], i) => {
      addGardenModel(group, 'bush', x, z, h, rand() * Math.PI * 2 + i, 0.9 + rand() * 0.25);
    });

    addGardenModel(group, 'rock', 0.65, 0.42, 0.24, rand() * Math.PI, 0.7);
    addGardenModel(group, 'fence_low', -0.9, d / 2 + 0.16, 0.5, Math.PI);
    addGardenModel(group, 'fence_low', 0.9, d / 2 + 0.16, 0.5, Math.PI);
  } else if (variant === 'rock') {
    const w = 2.2;
    const d = 1.8;
    addGardenBedBase(group, w, d, 'mulch');

    for (let i = 0; i < 4; i++) {
      const x = (rand() - 0.5) * (w - 0.6);
      const z = (rand() - 0.5) * (d - 0.5);
      addGardenModel(group, 'rock', x, z, 0.22 + rand() * 0.18, rand() * Math.PI * 2, 0.7 + rand() * 0.55);
    }

    addGardenModel(group, 'bush', -w * 0.35, d * 0.28, 0.42, rand() * Math.PI * 2);
    addGardenModel(group, 'bush', w * 0.32, -d * 0.2, 0.38, rand() * Math.PI * 2, 0.88);
    addGardenFlower(group, -0.2, 0.1, 0xf0f0f0, 0.75);
    addGardenFlower(group, 0.25, -0.15, 0xf0c040, 0.7);
  } else {
    // corner — mixed bed tucked against the path edge
    const w = 2.3;
    const d = 2.1;
    addGardenBedBase(group, w, d, 'soil');

    for (let i = 0; i < 7; i++) {
      const x = -w * 0.35 + rand() * w * 0.7;
      const z = -d * 0.35 + rand() * d * 0.65;
      addGardenFlower(group, x, z, flowerColors[Math.floor(rand() * flowerColors.length)], 0.8 + rand() * 0.25);
    }

    addGardenModel(group, 'bush', w * 0.34, 0.1, 0.58, rand() * Math.PI * 2);
    addGardenModel(group, 'bush', -w * 0.34, -d * 0.2, 0.5, rand() * Math.PI * 2, 0.92);
    addGardenModel(group, 'decoration', 0, d * 0.28, 0.3, rand() * Math.PI * 2);
    addGardenModel(group, 'fence_low', 0, d / 2 + 0.16, 0.5, Math.PI);
    addGardenModel(group, 'fence_low', w / 2 + 0.14, 0.2, 0.48, -Math.PI / 2);
  }

  return group;
}

function createShopSign(labelJa, labelEn, boardColor = 0xc84040, mountHeight = 3.6) {
  const group = new THREE.Group();
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 80;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#fffef8';
  ctx.fillRect(4, 4, 248, 72);
  ctx.fillStyle = '#2a4a4a';
  ctx.font = 'bold 22px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(labelJa, 128, 32);
  ctx.fillStyle = '#666';
  ctx.font = '14px sans-serif';
  ctx.fillText(labelEn, 128, 56);
  const tex = new THREE.CanvasTexture(canvas);
  const sign = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true }));
  sign.scale.set(2.0, 0.6, 1);
  sign.position.y = mountHeight + 0.55;
  group.add(sign);

  const board = createOutlinedMesh(new THREE.BoxGeometry(2.0, 0.75, 0.08), createToonMaterial(boardColor));
  board.position.y = mountHeight;
  group.add(board);
  return group;
}

function createPathBuilding(modelKey, targetHeight, w, d, h, wall, roof, style) {
  const group = new THREE.Group();
  const mesh = withModel(
    modelKey,
    targetHeight,
    () => createBuilding(w, d, h, wall, roof, style),
    { maxHeight: targetHeight * 1.15 },
  );
  if (mesh.userData?.isLoadedModel) {
    mesh.rotation.y = 0;
  }
  group.add(mesh);
  return group;
}

function createModelShop(targetHeight, labelJa, labelEn, signColor, signDepth = 2.0, wallColor = 0xe8e0d0, roofColor = 0x6a5040, w = 3.2, d = 3.0, goodsType = 'crates', windowLabel = 'OPEN', windowEmoji = '🛍️') {
  return createStorefront({
    targetHeight, labelJa, labelEn, signColor, signDepth,
    awningColor: signColor, wallColor, roofColor, w, d, goodsType, windowLabel, windowEmoji,
  });
}

function createPlayerHome() {
  const group = new THREE.Group();
  const h = 3.25;
  const w = 3.6;
  const d = 3.1;
  const wall = 0xf2ebe3;
  const roof = 0x8a6848;

  const house = createPathBuilding('building_b', h, w, d, h, wall, roof, 'house');
  group.add(house);

  const faceZ = d / 2;
  const sign = createShopSign('我が家', 'My Home', 0x8a7060, h * 0.76);
  sign.position.set(0.15, 0, faceZ + 0.42);
  group.add(sign);

  const winMat = createToonMaterial(0xfff4dc, { emissive: 0xffc878, emissiveIntensity: 0.48 });
  const homeWindows = [];
  [[0.62, 1.38], [-0.48, 1.38], [0.62, 2.05]].forEach(([x, y]) => {
    const win = new THREE.Mesh(new THREE.PlaneGeometry(0.52, 0.58), winMat);
    win.position.set(x, y, faceZ + 0.08);
    group.add(win);
    homeWindows.push(win);
  });

  const doorLight = new THREE.PointLight(0xffe0b0, 0, 14, 1.5);
  doorLight.position.set(0, 1.05, faceZ + 0.55);
  group.add(doorLight);

  attachShopNightLights(group, {
    signColor: 0xc8a878,
    faceZ,
    h,
    w,
    windowOverlay: homeWindows[0],
    signBoard: sign.children.find((c) => c.isMesh && !c.userData?.isOutline) ?? null,
  });

  if (!group.userData.landmarkLights) group.userData.landmarkLights = [];
  group.userData.landmarkLights.push(doorLight);
  group.userData.placementRadius = 3.2;
  return group;
}

/** Canvas texture for shop display windows */
function createShopWindowTexture(goodsLabel = 'OPEN', goodsEmoji = '🛍️', bgColor = '#283038') {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, 128, 128);
  ctx.fillStyle = 'rgba(255,255,255,0.15)';
  ctx.fillRect(8, 8, 112, 112);
  ctx.font = '48px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(goodsEmoji, 64, 58);
  ctx.fillStyle = '#f0f0f0';
  ctx.font = 'bold 14px sans-serif';
  ctx.fillText(goodsLabel, 64, 100);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function attachShopNightLights(group, { signColor, faceZ, h, w, windowOverlay, signBoard }) {
  const warm = new THREE.Color(signColor);
  const lights = [];

  const windowLight = new THREE.PointLight(warm, 0, 12, 1.8);
  windowLight.position.set(0, h * 0.38, faceZ + 0.85);
  group.add(windowLight);
  lights.push(windowLight);

  const signLight = new THREE.PointLight(0xfff4dc, 0, 9, 1.6);
  signLight.position.set(0, h * 0.88, faceZ + 0.95);
  group.add(signLight);
  lights.push(signLight);

  const porchLight = new THREE.PointLight(0xffe8c0, 0, 7, 2);
  porchLight.position.set(0, 2.4, faceZ + 0.55);
  group.add(porchLight);
  lights.push(porchLight);

  group.userData.shopLights = lights;
  group.userData.shopWindowMaterials = [];
  if (windowOverlay?.material) group.userData.shopWindowMaterials.push(windowOverlay.material);
  if (signBoard?.material) group.userData.shopWindowMaterials.push(signBoard.material);
  return lights;
}

/**
 * Procedural storefront: full shop building + sign + display + goods.
 * Kenney shop_a–d GLBs are narrow facade props (~0.5 m), not full buildings.
 */
function createStorefront({
  targetHeight = 2.8,
  labelJa = '店',
  labelEn = 'Shop',
  signColor = 0xc04040,
  signDepth = 2.0,
  awningColor = 0xc04040,
  wallColor = 0xe8e0d0,
  roofColor = 0x6a5040,
  windowLabel = 'OPEN',
  windowEmoji = '🛍️',
  goodsType = 'crates',
  w = 3.2,
  d = 3.0,
} = {}) {
  const group = new THREE.Group();
  const h = targetHeight;
  const faceZ = d / 2;

  const building = createBuilding(w, d, h, wallColor, roofColor, 'shop', { awningColor });
  group.add(building);

  // Lit display window overlay (goods visible from the street)
  const bandH = Math.min(1.4, h * 0.35);
  const winTex = createShopWindowTexture(windowLabel, windowEmoji);
  const winMat = createToonMaterial(0x8898a8, { map: winTex, emissive: 0x557080, emissiveIntensity: 0.5 });
  const windowOverlay = new THREE.Mesh(new THREE.PlaneGeometry(w * 0.55, bandH - 0.22), winMat);
  windowOverlay.position.set(0, bandH * 0.5 + 0.08, faceZ + 0.1);
  group.add(windowOverlay);

  // Hanging sign above the awning
  const sign = createShopSign(labelJa, labelEn, signColor, h * 0.82);
  sign.position.set(0, 0, faceZ + 0.75);
  group.add(sign);
  const signBoard = sign.children.find((c) => c.isMesh && !c.userData?.isOutline) ?? null;

  attachShopNightLights(group, { signColor, faceZ, h, w, windowOverlay, signBoard });

  // Street-facing porch pad
  const porch = createSoftOutlinedMesh(
    new THREE.BoxGeometry(w + 0.5, 0.08, 1.1),
    createToonMaterial(0xb0a898),
  );
  porch.position.set(0, 0.04, faceZ + 0.72);
  group.add(porch);

  // Goods out front
  if (goodsType === 'crates') {
    [-1.0, 1.0].forEach((x) => {
      const crate = createOutlinedMesh(new THREE.BoxGeometry(0.55, 0.38, 0.42), createToonMaterial(0x806040));
      crate.position.set(x, 0.19, faceZ + 0.92);
      group.add(crate);
      const goods = createOutlinedMesh(
        new THREE.BoxGeometry(0.35, 0.22, 0.28),
        createToonMaterial(0xf0a040),
      );
      goods.position.set(x, 0.42, faceZ + 0.92);
      group.add(goods);
    });
  } else if (goodsType === 'flowers') {
    [-0.85, 0.85].forEach((x) => {
      const bucket = createOutlinedMesh(new THREE.CylinderGeometry(0.22, 0.2, 0.38, 8), createToonMaterial(0x607080));
      bucket.position.set(x, 0.19, faceZ + 0.9);
      group.add(bucket);
      const flowers = createOutlinedMesh(new THREE.SphereGeometry(0.24, 8, 6), createToonMaterial(0xe08090));
      flowers.position.set(x, 0.44, faceZ + 0.9);
      group.add(flowers);
    });
  } else if (goodsType === 'bread') {
    const basket = createOutlinedMesh(new THREE.CylinderGeometry(0.28, 0.24, 0.22, 8), createToonMaterial(0x806040));
    basket.position.set(-0.9, 0.11, faceZ + 0.9);
    group.add(basket);
    const loaf = createOutlinedMesh(new THREE.BoxGeometry(0.32, 0.14, 0.16), createToonMaterial(0xe8c878));
    loaf.position.set(-0.9, 0.28, faceZ + 0.9);
    group.add(loaf);
    const crate = createOutlinedMesh(new THREE.BoxGeometry(0.5, 0.35, 0.4), createToonMaterial(0x806040));
    crate.position.set(0.9, 0.18, faceZ + 0.92);
    group.add(crate);
    const loaf2 = createOutlinedMesh(new THREE.BoxGeometry(0.28, 0.12, 0.14), createToonMaterial(0xd8b868));
    loaf2.position.set(0.9, 0.38, faceZ + 0.92);
    group.add(loaf2);
  } else if (goodsType === 'sweets') {
    [-0.85, 0.85].forEach((x) => {
      const tray = createOutlinedMesh(new THREE.BoxGeometry(0.42, 0.08, 0.32), createToonMaterial(0x806050));
      tray.position.set(x, 0.12, faceZ + 0.9);
      group.add(tray);
      [[-0.08, 0xf0a0b0], [0, 0xffffff], [0.08, 0xf0c0a0]].forEach(([dx, col]) => {
        const dango = createOutlinedMesh(new THREE.SphereGeometry(0.09, 8, 6), createToonMaterial(col));
        dango.position.set(x + dx, 0.24, faceZ + 0.9);
        group.add(dango);
      });
    });
  } else if (goodsType === 'tea') {
    [-0.75, 0.75].forEach((x) => {
      const cup = createOutlinedMesh(new THREE.CylinderGeometry(0.14, 0.11, 0.22, 8), createToonMaterial(0xf0ece4));
      cup.position.set(x, 0.15, faceZ + 0.9);
      group.add(cup);
      const tea = createOutlinedMesh(new THREE.CylinderGeometry(0.11, 0.11, 0.04, 8), createToonMaterial(0x508050));
      tea.position.set(x, 0.24, faceZ + 0.9);
      group.add(tea);
    });
  }

  return group;
}

/** Junction signpost with canvas label */
function createJunctionSignpost(labelJa, labelEn, color = 0x5a8a6a) {
  const group = new THREE.Group();
  const post = createOutlinedMesh(new THREE.CylinderGeometry(0.06, 0.08, 2.2, 6), createToonMaterial(0x8a7060));
  post.position.y = 1.1;
  group.add(post);

  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 96;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = `#${new THREE.Color(color).getHexString()}`;
  ctx.fillRect(0, 0, 256, 96);
  ctx.strokeStyle = '#f0f0f0';
  ctx.lineWidth = 4;
  ctx.strokeRect(4, 4, 248, 88);
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 22px "Noto Sans JP", sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(labelJa, 128, 38);
  ctx.font = '14px sans-serif';
  ctx.fillText(labelEn, 128, 68);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  const board = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.5, 0.06), createToonMaterial(0xffffff, { map: tex }));
  board.position.y = 2.0;
  group.add(board);
  return group;
}

function createNamedShop(w, d, h, wall, roof, style, labelJa, labelEn, signColor) {
  const group = new THREE.Group();
  const building = createBuilding(w, d, h, wall, roof, style);
  group.add(building);
  const sign = createShopSign(labelJa, labelEn, signColor, h * 0.85);
  sign.position.set(0, 0, d / 2 + 0.6);
  group.add(sign);
  return group;
}

function createStripedAwningTexture(baseColor, stripeColor = 0xffffff) {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  const base = `#${new THREE.Color(baseColor).getHexString()}`;
  const stripe = `#${new THREE.Color(stripeColor).getHexString()}`;
  for (let x = 0; x < 128; x += 16) {
    ctx.fillStyle = (x / 16) % 2 === 0 ? base : stripe;
    ctx.fillRect(x, 0, 16, 64);
  }
  ctx.fillStyle = 'rgba(0,0,0,0.08)';
  ctx.fillRect(0, 56, 128, 8);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = THREE.RepeatWrapping;
  tex.repeat.set(2, 1);
  return tex;
}

function createMarketStall({ awningColor = 0xe85050, stripeColor = 0xffffff, goods = 'produce' } = {}) {
  const group = new THREE.Group();
  const wood = 0xc8b098;
  const darkWood = 0x806050;

  const counter = createSoftOutlinedMesh(
    new THREE.BoxGeometry(1.45, 0.88, 0.92),
    createToonMaterial(wood, { roughness: 0.88 }),
  );
  counter.position.y = 0.44;
  group.add(counter);

  const skirt = createSoftOutlinedMesh(
    new THREE.BoxGeometry(1.48, 0.12, 0.94),
    createToonMaterial(darkWood, { roughness: 0.9 }),
  );
  skirt.position.y = 0.06;
  group.add(skirt);

  const back = createSoftOutlinedMesh(
    new THREE.BoxGeometry(1.45, 1.05, 0.07),
    createToonMaterial(darkWood, { roughness: 0.85 }),
  );
  back.position.set(0, 0.98, -0.42);
  group.add(back);

  [-0.62, 0.62].forEach((x) => {
    const post = createOutlinedMesh(
      new THREE.CylinderGeometry(0.035, 0.045, 1.45, 6),
      createToonMaterial(darkWood),
    );
    post.position.set(x, 1.28, 0.08);
    group.add(post);
  });

  const awningTex = createStripedAwningTexture(awningColor, stripeColor);
  const fabric = createSoftOutlinedMesh(
    new THREE.BoxGeometry(1.62, 0.035, 1.05),
    createToonMaterial(0xffffff, { map: awningTex, roughness: 0.72 }),
  );
  fabric.position.set(0, 1.68, 0.28);
  fabric.rotation.x = -0.24;
  group.add(fabric);

  const valance = createSoftOutlinedMesh(
    new THREE.BoxGeometry(1.62, 0.16, 0.04),
    createToonMaterial(awningColor, { roughness: 0.75 }),
  );
  valance.position.set(0, 1.58, 0.78);
  valance.rotation.x = -0.24;
  group.add(valance);

  if (goods === 'produce') {
    const crate = createOutlinedMesh(new THREE.BoxGeometry(0.55, 0.28, 0.42), createToonMaterial(darkWood));
    crate.position.set(-0.28, 0.96, 0.05);
    group.add(crate);
    [[-0.28, 0xc04040], [-0.1, 0xf0a030], [0.12, 0x80c060], [0.32, 0xf0d040]].forEach(([x, c], i) => {
      const item = createOutlinedMesh(
        new THREE.SphereGeometry(i % 2 === 0 ? 0.11 : 0.09, 8, 6),
        createToonMaterial(c),
      );
      item.position.set(x, 1.12 + (i % 2) * 0.04, 0.08 + (i % 3) * 0.06);
      group.add(item);
    });
    const basket = createOutlinedMesh(new THREE.CylinderGeometry(0.22, 0.18, 0.18, 8), createToonMaterial(0xa08060));
    basket.position.set(0.38, 0.97, 0.02);
    group.add(basket);
  } else if (goods === 'bread') {
    const cloth = createSoftOutlinedMesh(
      new THREE.PlaneGeometry(0.95, 0.55),
      createToonMaterial(0xf5ece0, { roughness: 0.95, side: THREE.DoubleSide }),
    );
    cloth.rotation.x = -Math.PI / 2;
    cloth.position.set(0, 0.895, 0.02);
    group.add(cloth);
    [-0.28, 0, 0.3].forEach((x, i) => {
      const loaf = createSoftOutlinedMesh(
        new THREE.BoxGeometry(i === 2 ? 0.22 : 0.34, 0.12, 0.16),
        createToonMaterial(i === 2 ? 0xf0d878 : 0xe8c060, { roughness: 0.7 }),
      );
      loaf.position.set(x, 0.98, 0.04);
      loaf.rotation.y = (i - 1) * 0.25;
      group.add(loaf);
    });
  } else if (goods === 'fish') {
    const ice = createSoftOutlinedMesh(
      new THREE.BoxGeometry(1.05, 0.08, 0.55),
      createToonMaterial(0xd8eef8, { roughness: 0.35, metalness: 0.05 }),
    );
    ice.position.set(0, 0.92, 0.02);
    group.add(ice);
    [-0.25, 0.18].forEach((x, i) => {
      const fish = createSoftOutlinedMesh(
        new THREE.BoxGeometry(0.42, 0.1, 0.16),
        createToonMaterial(i === 0 ? 0xb0c0d0 : 0x90a8b8, { roughness: 0.55 }),
      );
      fish.position.set(x, 1.02, 0.04);
      fish.rotation.y = i === 0 ? 0.15 : -0.2;
      group.add(fish);
    });
    const lemon = createOutlinedMesh(new THREE.SphereGeometry(0.07, 8, 6), createToonMaterial(0xf0e040));
    lemon.position.set(0.42, 0.99, 0.08);
    group.add(lemon);
  } else if (goods === 'flowers') {
    [-0.32, 0.32].forEach((x, i) => {
      const pot = createOutlinedMesh(new THREE.CylinderGeometry(0.16, 0.13, 0.2, 8), createToonMaterial(0x708090));
      pot.position.set(x, 0.98, 0.02);
      group.add(pot);
      const bloom = createOutlinedMesh(
        new THREE.SphereGeometry(0.2, 8, 6),
        createToonMaterial(i === 0 ? 0xf08090 : 0xf0c050),
      );
      bloom.position.set(x, 1.18, 0.02);
      bloom.scale.set(1, 0.75, 1);
      group.add(bloom);
    });
  }

  const tagCanvas = document.createElement('canvas');
  tagCanvas.width = 96;
  tagCanvas.height = 48;
  const tagCtx = tagCanvas.getContext('2d');
  tagCtx.fillStyle = '#2a2420';
  tagCtx.fillRect(0, 0, 96, 48);
  tagCtx.fillStyle = '#f8f0e0';
  tagCtx.font = 'bold 14px sans-serif';
  tagCtx.textAlign = 'center';
  tagCtx.fillText(
    { produce: '野菜', bread: 'パン', fish: '鮮魚', flowers: '花' }[goods] ?? '出店',
    48,
    30,
  );
  const tagTex = new THREE.CanvasTexture(tagCanvas);
  tagTex.colorSpace = THREE.SRGBColorSpace;
  const tag = createOutlinedMesh(
    new THREE.PlaneGeometry(0.32, 0.16),
    createToonMaterial(0xffffff, { map: tagTex }),
  );
  tag.position.set(0, 1.22, -0.38);
  group.add(tag);

  return group;
}

function createMarketEntranceSign(labelJa, labelEn, boardColor = 0xe85050) {
  const group = new THREE.Group();
  const post = createOutlinedMesh(
    new THREE.CylinderGeometry(0.05, 0.07, 1.55, 6),
    createToonMaterial(0x706050),
  );
  post.position.y = 0.78;
  group.add(post);

  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 96;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = `#${new THREE.Color(boardColor).getHexString()}`;
  ctx.fillRect(0, 0, 256, 96);
  ctx.strokeStyle = '#fff8f0';
  ctx.lineWidth = 5;
  ctx.strokeRect(6, 6, 244, 84);
  ctx.fillStyle = '#fffef8';
  ctx.font = 'bold 28px "Noto Sans JP", sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(labelJa, 128, 42);
  ctx.font = '16px sans-serif';
  ctx.fillText(labelEn, 128, 72);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;

  const board = createSoftOutlinedMesh(
    new THREE.BoxGeometry(1.35, 0.52, 0.06),
    createToonMaterial(0xffffff, { map: tex }),
  );
  board.position.y = 1.48;
  group.add(board);
  return group;
}

function createMarketStalls() {
  const group = new THREE.Group();

  const pad = createSoftOutlinedMesh(
    new THREE.BoxGeometry(9.2, 0.07, 3.8),
    createToonMaterial(0xaca498, { roughness: 0.92 }),
  );
  pad.position.set(0, 0.035, -0.15);
  group.add(pad);

  const curb = createSoftOutlinedMesh(
    new THREE.BoxGeometry(9.4, 0.1, 0.14),
    createToonMaterial(0x989088),
  );
  curb.position.set(0, 0.05, 1.72);
  group.add(curb);

  const stalls = [
    { x: -2.85, goods: 'produce', awning: 0xe85050, stripe: 0xfff0f0 },
    { x: -0.95, goods: 'bread', awning: 0xf0a030, stripe: 0xfff8e8 },
    { x: 0.95, goods: 'fish', awning: 0x4080a0, stripe: 0xe8f4f8 },
    { x: 2.85, goods: 'flowers', awning: 0xe08090, stripe: 0xfff0f4 },
  ];

  stalls.forEach(({ x, goods, awning, stripe }) => {
    const stall = createMarketStall({ awningColor: awning, stripeColor: stripe, goods });
    stall.position.set(x, 0, -0.05);
    group.add(stall);
  });

  const sign = createMarketEntranceSign('朝市', 'Morning Market', 0xe85050);
  sign.position.set(0, 0, 1.55);
  group.add(sign);

  [-2.85, -0.95, 0.95, 2.85].forEach((x) => {
    const ropePost = createOutlinedMesh(
      new THREE.CylinderGeometry(0.025, 0.03, 0.55, 5),
      createToonMaterial(0x706050),
    );
    ropePost.position.set(x, 1.95, 0.55);
    group.add(ropePost);
  });
  const bunting = createSoftOutlinedMesh(
    new THREE.BoxGeometry(6.2, 0.02, 0.02),
    createToonMaterial(0xf0e8d8),
  );
  bunting.position.set(0, 2.18, 0.55);
  group.add(bunting);

  const marketLights = [];
  stalls.forEach(({ x, awning }) => {
    const stallLight = new THREE.PointLight(new THREE.Color(awning).lerp(new THREE.Color(0xfff0d0), 0.5), 0, 11, 1.6);
    stallLight.position.set(x, 1.65, 0.85);
    group.add(stallLight);
    marketLights.push(stallLight);
  });
  group.userData.shopLights = marketLights;
  // Tight collider on stall counters only — leave the street-facing apron walkable.
  group.userData.collider = { halfW: 4.05, halfD: 0.78, offsetZ: -0.92 };
  group.userData.placementRadius = 3.6;

  return group;
}

function createParkGazebo() {
  const group = new THREE.Group();
  const floor = createOutlinedMesh(new THREE.CylinderGeometry(1.8, 1.8, 0.1, 8), createToonMaterial(0x989080));
  floor.position.y = 0.05;
  group.add(floor);
  const roof = createOutlinedMesh(new THREE.ConeGeometry(2.2, 1.2, 6), createToonMaterial(0x5a8a6a));
  roof.position.y = 2.8;
  group.add(roof);
  for (let i = 0; i < 6; i++) {
    const angle = (i / 6) * Math.PI * 2;
    const post = createOutlinedMesh(new THREE.CylinderGeometry(0.08, 0.08, 2.6, 6), createToonMaterial(0xf0e8d8));
    post.position.set(Math.sin(angle) * 1.5, 1.3, Math.cos(angle) * 1.5);
    group.add(post);
  }
  const sign = createShopSign('小さな公園', 'Town Park', 0x5a8a6a);
  sign.position.set(0, 0, 2.5);
  sign.scale.setScalar(0.85);
  group.add(sign);

  const fountain = _modelLoader?.createInstance('fountain', { targetHeight: 1.2, scale: 0.85 });
  if (fountain) {
    fountain.position.set(0, 0, -0.2);
    group.add(fountain);
  }

  return group;
}

function createCafePatio() {
  const group = new THREE.Group();
  const cafe = createModelShop(3.0, '喫茶 木漏れ', 'Komorebi Cafe', 0x6a5040, 1.8, 0xf0e8d8, 0x5a4030);
  group.add(cafe);
  [-0.8, 0.8].forEach((x) => {
    const table = createOutlinedMesh(new THREE.CylinderGeometry(0.35, 0.35, 0.06, 8), createToonMaterial(0x806040));
    table.position.set(x, 0.45, 2.2);
    group.add(table);
  });
  return group;
}

function createFishMarket() {
  const group = new THREE.Group();
  const shop = createModelShop(2.8, '魚屋 水樹', 'Mizuki Fish', 0x4080a0, 1.7, 0xe0e8f0, 0x406080);
  group.add(shop);
  for (let i = 0; i < 3; i++) {
    const crate = createOutlinedMesh(new THREE.BoxGeometry(0.6, 0.4, 0.5), createToonMaterial(0x806040));
    crate.position.set(-1 + i * 1, 0.2, 1.2);
    group.add(crate);
  }
  return group;
}

export class Town {
  constructor(scene, modelLoader = null) {
    this.scene = scene;
    this.modelLoader = modelLoader;
    setTownModelLoader(modelLoader);
    this.groundMeshes = [];
    this.animatedClouds = [];
    this.lanterns = [];
    this.streetLampLights = [];
    this.lampGlowOrbs = [];
    this.shopLights = [];
    this.shopWindowMaterials = [];
    this.vendingMachines = [];
    this._nightBlend = 0;
    this.waterMeshes = [];
    this.interactableSpawns = [];
    this.colliders = new ColliderWorld();
    this.riverCurve = null;
    this.sidePaths = {};
    this.walkableCurves = [];
    this._butterflies = null;
    this._fireflies = null;
    this._instancedDummy = new THREE.Object3D();
    this.path = this._createPath();
    this.walkableCurves = [this.path];
  }

  getPathForId(pathId) {
    if (!pathId || pathId === 'main') return this.path;
    return this.sidePaths[pathId] ?? this.path;
  }

  getWalkableCurves() {
    return this.walkableCurves;
  }

  _addBankCollider(x, z, halfW, halfD, rotY = 0) {
    this.colliders.addBox(x, z, halfW, halfD, rotY);
  }

  _addBoxCollider(x, z, halfW, halfD, rotY = 0) {
    this.colliders.addBox(x, z, halfW, halfD, rotY);
  }

  _addCircleCollider(x, z, radius) {
    this.colliders.addCircle(x, z, radius);
  }

  _addGroupCollider(group, halfW, halfD) {
    this._addBoxCollider(group.position.x, group.position.z, halfW, halfD, group.rotation.y);
  }

  /** Box collider aligned to a placed group; optional userData.collider tightens / offsets the hit area. */
  _addPlacedGroupCollider(group, fallbackHalfW = 1, fallbackHalfD = 1) {
    const custom = group.userData?.collider;
    let halfW = fallbackHalfW;
    let halfD = fallbackHalfD;
    let cx = group.position.x;
    let cz = group.position.z;

    if (custom) {
      halfW = custom.halfW ?? halfW;
      halfD = custom.halfD ?? halfD;
      const ox = custom.offsetX ?? 0;
      const oz = custom.offsetZ ?? 0;
      if (ox !== 0 || oz !== 0) {
        const offset = new THREE.Vector3(ox, 0, oz);
        offset.applyAxisAngle(new THREE.Vector3(0, 1, 0), group.rotation.y);
        cx += offset.x;
        cz += offset.z;
      }
    } else {
      const measured = measureBoxHalfExtents(group, fallbackHalfW, fallbackHalfD);
      halfW = measured.halfW;
      halfD = measured.halfD;
    }

    this._addBoxCollider(cx, cz, halfW, halfD, group.rotation.y);
  }

  _recordSpawn(propId, position, rotationY = 0) {
    this.interactableSpawns.push({
      propId,
      position: position.clone(),
      rotationY,
    });
  }

  _registerShopLights(root) {
    root.traverse((obj) => {
      if (obj.userData?.shopLights?.length) {
        this.shopLights.push(...obj.userData.shopLights);
      }
      if (obj.userData?.shopWindowMaterials?.length) {
        this.shopWindowMaterials.push(...obj.userData.shopWindowMaterials);
      }
    });
  }

  _registerLandmarkLighting(root) {
    if (root.userData.landmarkLights?.length) {
      this.streetLampLights.push(...root.userData.landmarkLights);
    }
    if (root.userData.landmarkGlowMeshes?.length) {
      this.lanterns.push(...root.userData.landmarkGlowMeshes);
    }
    if (root.userData.landmarkGlowOrbs?.length) {
      this.lampGlowOrbs.push(...root.userData.landmarkGlowOrbs);
    }
    root.traverse((obj) => {
      if (obj.userData?.landmarkLight) {
        this.streetLampLights.push(obj.userData.landmarkLight);
      }
      if (obj.userData?.landmarkGlowMesh) {
        this.lanterns.push(obj.userData.landmarkGlowMesh);
      }
      if (obj.userData?.landmarkGlowOrb) {
        this.lampGlowOrbs.push(obj.userData.landmarkGlowOrb);
      }
    });
  }

  _createStreetLamps() {
    const lampSpots = [];
    for (let i = 0; i < 22; i++) {
      lampSpots.push({
        t: 0.04 + i * 0.043,
        side: i % 2 === 0 ? -1 : 1,
      });
    }

    lampSpots.forEach(({ t, side }) => {
      const lamp = createStreetLampPost();
      const solidR = 0.45;
      const placement = tryPlaceWithClearance(
        lamp, this.path, t, side, SIDWALK_PROP_OFFSET + 0.35, this._placedPositions, solidR, 'street',
      );
      if (!placement) return;

      this.scene.add(lamp);
      this._addCircleCollider(lamp.position.x, lamp.position.z, 0.35);
      registerSolid(this._placedPositions, lamp.position, 0.5);

      if (lamp.userData.streetLampLight) {
        this.streetLampLights.push(lamp.userData.streetLampLight);
      }
      if (lamp.userData.lampGlowOrb) {
        this.lampGlowOrbs.push(lamp.userData.lampGlowOrb);
      }
      if (lamp.userData.lanternMeshes?.length) {
        this.lanterns.push(...lamp.userData.lanternMeshes);
      } else if (lamp.userData.lanternMesh) {
        prepareGlowMaterial(lamp.userData.lanternMesh.material);
        this.lanterns.push(lamp.userData.lanternMesh);
      }
    });
  }

  async build(onProgress) {
    onProgress?.('Building sky…');
    this._createSky();
    await nextFrame();

    onProgress?.('Laying streets…');
    this._placedPositions = [];
    this._createGround();
    this._createRoad();
    await nextFrame();

    onProgress?.('Placing buildings…');
    this._createLandmarks();
    this._createShopsAndPlaces();
    this._createGardens();
    await nextFrame();

    onProgress?.('Adding details…');
    this._createProps();
    this._createStreetFurniture();
    this._createStreetLamps();
    this._createVegetation();
    this._createEnvironmentDetails();
    this._createClouds();
    this._createLighting();
    onProgress?.('Ready');
  }

  update(elapsed) {
    const dt = Math.min(elapsed - (this._lastElapsed ?? elapsed), 0.05);
    this._lastElapsed = elapsed;

    this.animatedClouds.forEach((cloud) => {
      cloud.position.x += Math.sin(elapsed * cloud.userData.driftSpeed + cloud.userData.driftPhase) * 0.003;
    });

    this.lanterns.forEach((lantern, i) => {
      if (!lantern?.material?.color) return;
      const pulse = 0.75 + Math.sin(elapsed * 2 + i) * 0.25;
      if (!lantern.userData.baseColor) {
        lantern.userData.baseColor = lantern.material.color.clone();
      }
      lantern.material.color.copy(lantern.userData.baseColor).multiplyScalar(pulse);
    });

    const night = this._nightBlend ?? 0;
    this.lampGlowOrbs.forEach((orb, i) => {
      if (!orb?.material) return;
      const pulse = 0.82 + Math.sin(elapsed * 2.4 + i) * 0.18;
      orb.material.opacity = night * 0.72 * pulse;
      orb.scale.setScalar(0.85 + night * 0.35 * pulse);
    });

    this.vendingMachines.forEach((vm, i) => {
      const pulse = 0.88 + Math.sin(elapsed * 1.6 + i * 1.3) * 0.12;
      const night = this._nightBlend ?? 0;
      if (vm.userData.vendingLight) {
        vm.userData.vendingLight.intensity = (0.12 + night * 1.15) * pulse;
      }
      if (vm.userData.vendingSpillLight) {
        vm.userData.vendingSpillLight.intensity = (0.08 + night * 0.55) * pulse;
      }
      const glow = vm.userData.vendingGlow;
      if (glow?.material?.emissiveIntensity != null) {
        glow.material.emissiveIntensity = 0.25 + night * 0.45 + pulse * 0.12;
      }
    });

    this.waterMeshes.forEach((water, i) => {
      if (!water?.material?.color) return;
      const wave = 0.92 + Math.sin(elapsed * 0.8 + i * 2.1) * 0.08;
      water.material.color.setHex(0x97c5dd);
      water.material.color.multiplyScalar(wave);
      water.material.opacity = 0.78 + Math.sin(elapsed * 1.1 + i) * 0.06;
      const wmap = water.material.userData?.waterMap ?? water.material.map;
      if (wmap) {
        wmap.offset.x = elapsed * 0.02;
        wmap.offset.y = elapsed * 0.015 + i * 0.1;
      }
    });

    // Instanced cherry petals
    if (this._petalMesh && this._petalData) {
      const dummy = this._instancedDummy;
      this._petalData.forEach((p, i) => {
        p.x += (p.vx + Math.sin(elapsed * 0.7 + p.z) * 0.12) * dt;
        p.y += p.vy * dt;
        p.z += (p.vz + Math.cos(elapsed * 0.5 + p.x) * 0.08) * dt;
        p.spin += p.spinSpeed * dt;
        if (p.y < -0.5) {
          p.y = p.resetY;
          p.x = -8 + Math.random() * 24;
          p.z = -2 + Math.random() * -120;
        }
        dummy.position.set(p.x, p.y, p.z);
        dummy.rotation.set(p.spin * 0.5, p.spin, p.spin * 0.3);
        dummy.updateMatrix();
        this._petalMesh.setMatrixAt(i, dummy.matrix);
      });
      this._petalMesh.instanceMatrix.needsUpdate = true;
    }

    // Butterflies
    if (this._butterflies) {
      const dummy = this._instancedDummy;
      this._butterflyData.forEach((b, i) => {
        b.phase += dt * b.speed;
        b.x += Math.sin(b.phase) * 0.4 * dt;
        b.z += Math.cos(b.phase * 0.7) * 0.3 * dt;
        b.y = b.baseY + Math.sin(b.phase * 2) * 0.15;
        dummy.position.set(b.x, b.y, b.z);
        dummy.rotation.y = b.phase;
        dummy.scale.setScalar(0.6 + Math.sin(b.phase * 3) * 0.15);
        dummy.updateMatrix();
        this._butterflies.setMatrixAt(i, dummy.matrix);
      });
      this._butterflies.instanceMatrix.needsUpdate = true;
    }

    // Fireflies near shrine
    if (this._fireflies) {
      const dummy = this._instancedDummy;
      this._fireflyData.forEach((f, i) => {
        f.phase += dt * f.speed;
        f.x = f.baseX + Math.sin(f.phase) * 1.2;
        f.z = f.baseZ + Math.cos(f.phase * 0.8) * 1.0;
        f.y = f.baseY + Math.sin(f.phase * 1.5) * 0.4;
        dummy.position.set(f.x, f.y, f.z);
        dummy.scale.setScalar(0.04 + Math.sin(elapsed * 3 + i) * 0.02);
        dummy.updateMatrix();
        this._fireflies.setMatrixAt(i, dummy.matrix);
      });
      this._fireflies.instanceMatrix.needsUpdate = true;
    }
  }

  _createPath() {
    const points = [
      new THREE.Vector3(0, 0, 22),
      new THREE.Vector3(-1, 0, 18),
      new THREE.Vector3(0, 0, 14),
      new THREE.Vector3(-2, 0, 10),
      new THREE.Vector3(-3, 0, 6),
      new THREE.Vector3(-2, 0, 2),
      new THREE.Vector3(0, 0, -2),
      new THREE.Vector3(3, 0, -6),
      new THREE.Vector3(5, 0, -10),
      new THREE.Vector3(4, 0, -14),
      new THREE.Vector3(0, 0, -18),
      new THREE.Vector3(-4, 0, -22),
      new THREE.Vector3(-7, 0, -26),
      new THREE.Vector3(-5, 0, -32),
      new THREE.Vector3(-2, 0, -36),
      new THREE.Vector3(3, 0, -40),
      new THREE.Vector3(7, 0, -44),
      new THREE.Vector3(9, 0, -48),
      new THREE.Vector3(7, 0, -52),
      new THREE.Vector3(3, 0, -56),
      new THREE.Vector3(-1, 0, -60),
      new THREE.Vector3(-5, 0, -64),
      new THREE.Vector3(-3, 0, -68),
      new THREE.Vector3(1, 0, -72),
      new THREE.Vector3(6, 0, -76),
      new THREE.Vector3(11, 0, -80),
      new THREE.Vector3(13, 0, -84),
      new THREE.Vector3(11, 0, -88),
      new THREE.Vector3(7, 0, -92),
      new THREE.Vector3(3, 0, -96),
      new THREE.Vector3(0, 0, -102),
      new THREE.Vector3(-3, 0, -108),
      new THREE.Vector3(-6, 0, -114),
      new THREE.Vector3(-4, 0, -120),
      new THREE.Vector3(0, 0, -126),
      new THREE.Vector3(5, 0, -130),
      new THREE.Vector3(10, 0, -134),
      new THREE.Vector3(14, 0, -128),
      new THREE.Vector3(16, 0, -118),
    ];
    return new THREE.CatmullRomCurve3(points, false, 'catmullrom', 0.45);
  }

  _createSky() {
    this.scene.fog = new THREE.Fog(PALETTE.fog, 32, 88);
    this.scene.background = new THREE.Color(PALETTE.sky);

    const skyGeo = new THREE.SphereGeometry(220, 24, 16);
    const skyCanvas = document.createElement('canvas');
    skyCanvas.width = 1; skyCanvas.height = 64;
    const skyCtx = skyCanvas.getContext('2d');
    const grad = skyCtx.createLinearGradient(0, 0, 0, 64);
    grad.addColorStop(0,   '#97c5dd');
    grad.addColorStop(0.35, '#91d3c8');
    grad.addColorStop(0.68, '#cde8e4');
    grad.addColorStop(0.88, '#f0dab2');
    grad.addColorStop(1,   '#e8ddd9');
    skyCtx.fillStyle = grad;
    skyCtx.fillRect(0, 0, 1, 64);
    this.skyCtx = skyCtx;
    const skyTex = new THREE.CanvasTexture(skyCanvas);
    this.skyTex = skyTex;
    const skyMat = new THREE.MeshBasicMaterial({
      map: skyTex,
      side: THREE.BackSide,
    });
    const skyDome = new THREE.Mesh(skyGeo, skyMat);
    skyDome.position.set(0, -10, -55);
    skyDome.userData.dynamic = true;
    this.scene.add(skyDome);

    this._spawnGlobalPetals();
  }

  _spawnGlobalPetals() {
    const count = 24;
    const geo = new THREE.PlaneGeometry(0.12, 0.09);
    const mat = new THREE.MeshBasicMaterial({ color: 0xeda0b9, side: THREE.DoubleSide });
    const mesh = new THREE.InstancedMesh(geo, mat, count);
    mesh.userData.dynamic = true;

    const data = [];
    const dummy = new THREE.Object3D();
    for (let i = 0; i < count; i++) {
      const x = -8 + Math.random() * 24;
      const y = 1.5 + Math.random() * 5;
      const z = -2 + Math.random() * -120;
      data.push({
        x, y, z,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -(0.25 + Math.random() * 0.35),
        vz: (Math.random() - 0.5) * 0.2,
        spin: Math.random() * Math.PI,
        spinSpeed: (Math.random() - 0.5) * 2.5,
        resetY: 4 + Math.random() * 5,
      });
      dummy.position.set(x, y, z);
      dummy.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    }
    mesh.instanceMatrix.needsUpdate = true;
    this.scene.add(mesh);
    this._petalMesh = mesh;
    this._petalData = data;
  }

  _createGround() {
    const grassTex = createGrassTexture();
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(130, 175),
      createToonMaterial(PALETTE.green, { map: grassTex }),
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.set(2, -0.06, -52);
    ground.receiveShadow = true;
    this.scene.add(ground);
    this.groundMeshes.push(ground);
  }

  _createRoad() {
    const roadWidth = 3.5;
    const sidewalkWidth = 1.5;
    const roadHalf = roadWidth / 2;
    const sidewalkHalf = sidewalkWidth / 2;
    const sidewalkOffset = roadHalf + sidewalkHalf + 0.15;

    const road = createPathRibbon(
      this.path, roadHalf, 0.08, createToonMaterial(PALETTE.road), 0, 200,
    );
    this.scene.add(road);
    this.groundMeshes.push(road);

    const sidewalkMat = createToonMaterial(PALETTE.sidewalk);
    const leftWalk = createPathRibbon(this.path, sidewalkHalf, 0.09, sidewalkMat, -sidewalkOffset, 200);
    const rightWalk = createPathRibbon(this.path, sidewalkHalf, 0.09, sidewalkMat, sidewalkOffset, 200);
    this.scene.add(leftWalk, rightWalk);
    this.groundMeshes.push(leftWalk, rightWalk);

    const curbMat = createToonMaterial(PALETTE.curb);
    const leftCurb = createPathRibbon(this.path, 0.06, 0.1, curbMat, -(roadHalf + 0.12), 200);
    const rightCurb = createPathRibbon(this.path, 0.06, 0.1, curbMat, roadHalf + 0.12, 200);
    this.scene.add(leftCurb, rightCurb);

    const lineMat = createToonMaterial(PALETTE.roadLine);
    const edgeHalf = 0.03;
    const leftEdge = createPathRibbon(this.path, edgeHalf, 0.066, lineMat, -(roadHalf - 0.15), 200);
    const rightEdge = createPathRibbon(this.path, edgeHalf, 0.066, lineMat, roadHalf - 0.15, 200);
    this.scene.add(leftEdge, rightEdge);

    const points = this.path.getSpacedPoints(200);
    for (let i = 0; i < points.length - 1; i += 6) {
      const t = i / (points.length - 1);
      const p = points[i];
      const tangent = this.path.getTangentAt(t).normalize();
      const perp = new THREE.Vector3(-tangent.z, 0, tangent.x);
      const center = p.clone().add(perp.clone().multiplyScalar(roadHalf - 0.35));
      const len = p.distanceTo(points[Math.min(i + 3, points.length - 1)]);
      const line = new THREE.Mesh(
        new THREE.BoxGeometry(0.12, 0.015, len * 0.55),
        lineMat,
      );
      line.position.copy(center);
      line.position.y = 0.065;
      line.lookAt(points[Math.min(i + 3, points.length - 1)].x, 0.065, points[Math.min(i + 3, points.length - 1)].z);
      this.scene.add(line);
    }

    for (let i = 7; i < points.length; i += 28) {
      const p = points[i];
      const cover = new THREE.Mesh(
        new THREE.CylinderGeometry(0.25, 0.25, 0.03, 10),
        createToonMaterial(0x505050),
      );
      cover.position.set(p.x, 0.07, p.z);
      this.scene.add(cover);
    }
  }

  _createLandmarks() {
    const landmarkDefs = [
      {
        id: 'home', t: 0.055, side: -1, offset: SHOP_OFFSET,
        halfW: 2.3, halfD: 2.5, spawn: 'home',
        make: () => createPlayerHome(), face: 'street',
      },
      { id: 'torii',  t: 0.34, side: -1, offset: LANDMARK_NEAR_OFFSET, halfW: 1.6, halfD: 0.45, make: () => createTorii(), face: 'street', spawn: 'torii' },
      {
        id: 'shrine', t: 0.66, side: 1, offset: LANDMARK_DEEP_OFFSET,
        halfW: 2.4, halfD: 2.6, spawn: 'shrine',
        make: () => createElevatedShrine(), face: 'street',
      },
      {
        id: 'torii_shrine',
        t: 0.66,
        side: 1,
        offset: LANDMARK_DEEP_OFFSET,
        tangentShift: 2.85,
        halfW: 1.6,
        halfD: 0.45,
        make: () => createTorii(),
        face: 'street',
        spawn: 'torii',
      },
    ];

    landmarkDefs.forEach((def) => {
      const item = def.make();
      const solidR = def.radius ?? measureSolidRadius(item, 2.2);
      const placement = tryPlaceWithClearance(
        item, this.path, def.t, def.side, def.offset, this._placedPositions, solidR, def.face ?? 'street', def.tangentShift ?? 0,
      );
      if (!placement) return;

      if (def.scale) item.scale.setScalar(def.scale);
      if (def.extraRot) item.rotation.y += def.extraRot;

      this.scene.add(item);
      this._registerLandmarkLighting(item);
      this._registerShopLights(item);
      const { halfW, halfD } = measureBoxHalfExtents(item, def.halfW ?? solidR, def.halfD ?? solidR);
      if (def.radius != null) {
        this._addCircleCollider(item.position.x, item.position.z, def.radius);
      } else {
        this._addBoxCollider(item.position.x, item.position.z, halfW, halfD, item.rotation.y);
      }
      registerSolid(this._placedPositions, item.position, solidR);
      if (def.spawn) this._recordSpawn(def.spawn, item.position, item.rotation.y);
    });
  }

  _createShopsAndPlaces() {
    const shops = [
      {
        t: 0.12, side: -1, offset: SHOP_OFFSET, spawn: 'shop_bookshop',
        make: () => createModelShop(3.0, '書店 文房', 'Bunbou Books', 0x8060a0, 1.8, 0xf0ece4, 0x6a5040, 3.2, 2.8, 'crates', 'BOOKS', '📚'),
      },
      {
        t: 0.26, side: 1, offset: SHOP_OFFSET, spawn: 'shop_ramen',
        make: () => createModelShop(2.9, '麺処 山田', 'Yamada Ramen', 0xc04040, 1.7, 0xfff4ec, 0x8a3030, 3.0, 2.8, 'crates', 'RAMEN', '🍜'),
      },
      {
        t: 0.46, side: 1, offset: SHOP_OFFSET, spawn: 'shop_cafe',
        make: () => createCafePatio(),
      },
      {
        t: 0.52, side: -1, offset: SHOP_OFFSET, spawn: 'shop_florist',
        make: () => createModelShop(2.7, '花屋 はな', 'Hana Florist', 0xe08090, 1.6, 0xfaf0f2, 0xc06080, 2.8, 2.6, 'flowers', 'FLOWERS', '🌸'),
      },
      {
        t: 0.58, side: -1, offset: SHOP_OFFSET + 0.5, spawn: 'shop_market',
        make: () => createMarketStalls(),
      },
      {
        t: 0.602, side: 1, offset: SHOP_OFFSET, spawn: 'shop_teahouse',
        make: () => createModelShop(
          2.7, '茶屋 静', 'Shizuka Tea', 0x508060, 1.7,
          0xf4f0e8, 0x4a6848, 3.0, 2.8, 'tea', 'TEA', '🍵',
        ),
      },
      {
        t: 0.628, side: -1, offset: SHOP_OFFSET, spawn: 'shop_bakery',
        make: () => createModelShop(
          2.75, 'パン屋 小麦', 'Komugi Bakery', 0xd09040, 1.7,
          0xfff4ec, 0x8a5030, 3.1, 2.8, 'bread', 'BREAD', '🍞',
        ),
      },
      {
        t: 0.652, side: 1, offset: SHOP_OFFSET - 0.35, spawn: 'shop_konbini',
        make: () => createModelShop(
          2.55, 'コンビニ', 'Mini Mart', 0x4080c0, 1.6,
          0xf0f4f8, 0x3060a0, 3.0, 2.7, 'crates', 'OPEN', '🏪',
        ),
      },
      {
        t: 0.638, side: -1, offset: SHOP_OFFSET + 0.25, spawn: 'shop_sweets',
        make: () => createModelShop(
          2.65, '和菓子 花', 'Hana Sweets', 0xe08090, 1.6,
          0xfaf0f2, 0xc06080, 2.9, 2.6, 'sweets', 'SWEETS', '🍡',
        ),
      },
      {
        t: 0.92, side: -1, offset: SHOP_OFFSET + 0.5, spawn: 'shop_fishmarket',
        make: () => createFishMarket(),
      },
    ];

    shops.forEach((def) => {
      const shop = def.make();
      const solidR = shop.userData?.placementRadius ?? measureSolidRadius(shop, 3.0);
      const placement = tryPlaceWithClearance(
        shop, this.path, def.t, def.side, def.offset, this._placedPositions, solidR,
      );
      if (!placement) return;

      this.scene.add(shop);
      this._registerShopLights(shop);
      this._addPlacedGroupCollider(shop, solidR, solidR * 0.85);
      this._recordSpawn(def.spawn, shop.position, shop.rotation.y);
      registerSolid(this._placedPositions, shop.position, solidR);
    });
  }

  _createGardens() {
    const gardenSpots = [
      { t: 0.11, side: -1, offset: LANDMARK_DEEP_OFFSET + 0.4, variant: 'flower', seed: 11, radius: 1.9 },
      { t: 0.24, side: 1, offset: LANDMARK_NEAR_OFFSET + 0.5, variant: 'shrub', seed: 22, radius: 1.75 },
      { t: 0.37, side: 1, offset: LANDMARK_DEEP_OFFSET, variant: 'corner', seed: 33, radius: 1.7 },
      { t: 0.49, side: -1, offset: LANDMARK_NEAR_OFFSET + 0.6, variant: 'flower', seed: 44, radius: 1.85 },
      { t: 0.63, side: -1, offset: LANDMARK_NEAR_OFFSET, variant: 'rock', seed: 55, radius: 1.65 },
      { t: 0.76, side: 1, offset: LANDMARK_NEAR_OFFSET + 0.3, variant: 'shrub', seed: 66, radius: 1.7 },
      { t: 0.89, side: 1, offset: LANDMARK_DEEP_OFFSET - 0.3, variant: 'flower', seed: 77, radius: 1.8 },
    ];

    gardenSpots.forEach((def) => {
      const garden = createGarden(def.variant, def.seed);
      const solidR = def.radius ?? measureSolidRadius(garden, 1.8);
      const placement = tryPlaceWithClearance(
        garden, this.path, def.t, def.side, def.offset, this._placedPositions, solidR, 'street',
      );
      if (!placement) return;

      this.scene.add(garden);
      this._addCircleCollider(garden.position.x, garden.position.z, solidR * 0.82);
      registerSolid(this._placedPositions, garden.position, solidR);
    });
  }

  _createProps() {
    const propRadii = {
      vending: 0.55, mailbox: 0.4, mirror: 0.5,
      utility: 0.75, busStop: 0.6, dirSign: 0.55,
      infoBoard: 0.75, trashCan: 0.32,
    };

    const props = [
      { t: 0.06, side: -1, type: 'vending', color: PALETTE.vending },
      { t: 0.16, side: 1, type: 'vending', color: 0x4080a0 },
      { t: 0.20, side: 1, type: 'mailbox' },
      { t: 0.30, side: -1, type: 'dirSign' },
      { t: 0.40, side: 1, type: 'mirror' },
      { t: 0.50, side: -1, type: 'trashCan' },
      { t: 0.64, side: 1, type: 'infoBoard' },
      { t: 0.74, side: -1, type: 'utility' },
      { t: 0.80, side: -1, type: 'utility' },
      { t: 0.86, side: 1, type: 'busStop' },
      { t: 0.94, side: -1, type: 'vending', color: 0x508878 },
    ];

    const utilityAnchors = [];

    props.forEach(({ t, side, type, color }) => {
      let prop;
      switch (type) {
        case 'vending':
          prop = createVendingMachine(color);
          break;
        case 'mailbox':
          prop = createMailbox();
          break;
        case 'mirror':
          prop = createTrafficMirror();
          break;
        case 'utility':
          prop = createUtilityPole();
          break;
        case 'busStop':
          prop = createBusStop();
          break;
        case 'dirSign':
          prop = createDirectionalSign('right');
          break;
        case 'infoBoard':
          prop = createTallInfoBoard();
          break;
        case 'trashCan':
          prop = createTrashCan();
          break;
        default:
          return;
      }

      const radius = Math.max(measureSolidRadius(prop, propRadii[type] ?? 0.5), propRadii[type] ?? 0.5);
      const placement = tryPlaceWithClearance(
        prop, this.path, t, side, SIDWALK_PROP_OFFSET, this._placedPositions, radius,
      );
      if (!placement) return;

      this._addCircleCollider(prop.position.x, prop.position.z, radius * 0.85);

      if (type === 'vending') {
        this.vendingMachines.push(prop);
        this._recordSpawn('vending', prop.position, prop.rotation.y);
      }

      if (type === 'utility') {
        const anchor = prop.userData.wireAnchor
          ? prop.localToWorld(prop.userData.wireAnchor.clone())
          : prop.position.clone().add(new THREE.Vector3(0, 4.0, 0));
        utilityAnchors.push(anchor);
      }

      this.scene.add(prop);
      registerSolid(this._placedPositions, prop.position, radius);
    });

    if (utilityAnchors.length >= 2) {
      for (let i = 0; i < utilityAnchors.length - 1; i++) {
        const span = createUtilityWireSpan(utilityAnchors[i], utilityAnchors[i + 1]);
        this.scene.add(span);
      }
    }
  }

  _createStreetFurniture() {
    // Reserved — cafe patio carries its own tables; avoid duplicate sidewalk props.
  }

  _createVegetation() {
    let placed = 0;
    for (const spot of TREE_LAYOUT) {
      if (this._placeStreetTree(spot)) placed += 1;
    }
    if (placed < TREE_LAYOUT.length) {
      console.info(`Town: placed ${placed}/${TREE_LAYOUT.length} street trees (others skipped for clearance).`);
    }
  }

  _placeStreetTree(spot) {
    const side = spot.side === 'L' ? -1 : 1;
    const dist = spot.dist ?? TREE_OFFSET;
    const scale = treeScaleFromSeed(spot.t * 1000 + side * 17);
    const tree = createTree(spot.variant ?? 'normal', { scale });
    const solidR = measureSolidRadius(tree, 1.8);
    const placement = tryPlaceWithClearance(
      tree, this.path, spot.t, side, dist, this._placedPositions, solidR,
    );
    if (!placement) return false;

    this.scene.add(tree);
    this._addCircleCollider(tree.position.x, tree.position.z, Math.min(solidR * 0.55, 1.0));
    registerSolid(this._placedPositions, tree.position, solidR);
    if (spot.cherryTree) {
      this._recordSpawn('cherry_tree', tree.position);
    } else if (spot.shrineTree) {
      this._recordSpawn('shrine_tree', tree.position);
    }
    return true;
  }

  _createEnvironmentDetails() {
    // Fireflies near shrine
    const ffCount = 20;
    const ffGeo = new THREE.SphereGeometry(0.04, 4, 4);
    const ffMat = new THREE.MeshBasicMaterial({ color: 0xc0ff80 });
    this._fireflies = new THREE.InstancedMesh(ffGeo, ffMat, ffCount);
    this._fireflyData = [];
    const shrineT = 0.66;
    const shrinePos = this.path.getPointAt(shrineT);
    for (let i = 0; i < ffCount; i++) {
      this._fireflyData.push({
        baseX: shrinePos.x + (Math.random() - 0.5) * 6,
        baseZ: shrinePos.z + (Math.random() - 0.5) * 6,
        baseY: 0.8 + Math.random() * 2.0,
        x: 0, z: 0, y: 0,
        phase: Math.random() * Math.PI * 2,
        speed: 0.4 + Math.random() * 0.6,
      });
    }
    this._fireflies.userData.dynamic = true;
    this.scene.add(this._fireflies);
  }

  _isNearPath(x, z, minDist) {
    let best = Infinity;
    const curves = this.walkableCurves?.length ? this.walkableCurves : [this.path];
    for (const curve of curves) {
      if (!curve?.getPointAt) continue;
      const samples = curve === this.path ? 80 : 40;
      for (let i = 0; i <= samples; i++) {
        const p = curve.getPointAt(i / samples);
        const d = Math.hypot(x - p.x, z - p.z);
        if (d < best) best = d;
      }
    }
    return best < minDist;
  }

  _isNearRiver(x, z, minDist) {
    if (!this.riverCurve) return false;
    let best = Infinity;
    for (let i = 0; i <= 40; i++) {
      const p = this.riverCurve.getPointAt(i / 40);
      const d = Math.hypot(x - p.x, z - p.z);
      if (d < best) best = d;
    }
    return best < minDist;
  }

  _createClouds() {
    const cloudPositions = [
      [-8, 22, -8, 2.6],
      [10, 24, -18, 2.8],
      [0, 26, -32, 3.0],
      [-12, 23, -48, 2.5],
      [14, 25, -62, 2.7],
      [4, 24, -78, 2.6],
    ];
    cloudPositions.forEach(([x, y, z, s]) => {
      const cloud = createCloud(x, y, z, s);
      this.scene.add(cloud);
      this.animatedClouds.push(cloud);
    });
  }

  _createLighting() {
    const hemi = new THREE.HemisphereLight(0x97c5dd, 0x91d3c8, 1.35);
    this.scene.add(hemi);

    const sun = new THREE.DirectionalLight(0xfff4e8, 0.65);
    sun.position.set(18, 28, 12);
    sun.castShadow = true;
    sun.shadow.mapSize.set(PERF.shadowMapSize, PERF.shadowMapSize);
    sun.shadow.camera.near = 0.5;
    sun.shadow.camera.far = 100;
    sun.shadow.camera.left   = -22;
    sun.shadow.camera.right  = 22;
    sun.shadow.camera.top    = 22;
    sun.shadow.camera.bottom = -22;
    sun.shadow.bias = -0.0004;
    sun.shadow.normalBias = 0.02;
    this.scene.add(sun);
    this.scene.add(sun.target);
    this.sun = sun;

    const fill = new THREE.DirectionalLight(0x97c5dd, 0.5);
    fill.position.set(-14, 12, -8);
    this.scene.add(fill);

    const ambient = new THREE.AmbientLight(0xe8ddd9, 0.45);
    this.scene.add(ambient);

    // Capped decorative point lights (max 6)
    const streetLights = [];
    [[-3, 2.5, -10], [-5, 2.5, -22], [4, 2.5, -34]].forEach(([x, y, z]) => {
      const pl = new THREE.PointLight(0xffc878, 0.28, 12);
      pl.position.set(x, y, z);
      this.scene.add(pl);
      streetLights.push(pl);
    });

    const harborLight = new THREE.PointLight(0x90d0e0, 0.3, 14);
    harborLight.position.set(10, 3, -95);
    this.scene.add(harborLight);
    streetLights.push(harborLight);

    const marketLight = new THREE.PointLight(0xffc878, 0.25, 14);
    marketLight.position.set(6, 3, -48);
    this.scene.add(marketLight);
    streetLights.push(marketLight);

    const shrineLight = new THREE.PointLight(0xc0a0e0, 0.22, 14);
    shrineLight.position.set(-8, 3, -68);
    this.scene.add(shrineLight);

    this.lights = { hemi, sun, fill, ambient, street: streetLights, shrine: shrineLight };
  }

  getInteractableSpawns() {
    return this.interactableSpawns;
  }

  getPath() {
    return this.path;
  }

  getGroundMeshes() {
    return this.groundMeshes;
  }
}
