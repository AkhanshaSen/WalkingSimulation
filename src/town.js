import * as THREE from 'three';
import { createToonMaterial, createOutlinedMesh, createSoftOutlinedMesh, createGrassTexture, createVendingDisplayTexture, createWaterMaterial, PALETTE, nextFrame } from './materials.js';
import { snapToGround } from './loaders/ModelLoader.js';
import { ColliderWorld } from './collision.js';

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

function placeAlongPath(group, path, t, side, offset, y = 0) {
  const pos = path.getPointAt(t);
  const tangent = path.getTangentAt(t);
  const perp = new THREE.Vector3(-tangent.z, 0, tangent.x).multiplyScalar(side);
  group.position.copy(pos).add(perp.multiplyScalar(offset));
  group.position.y = y;
  group.lookAt(group.position.x + tangent.x, group.position.y, group.position.z + tangent.z);
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

/** Register a solid for later spacing checks. Optional radius stored as userData hint via length of placed list only. */
function registerSolid(list, position, radius = 3) {
  const p = position.clone();
  p.userData = { radius };
  list.push(p);
}

function isTooCloseSolid(pos, placed, defaultRadius = 3) {
  for (const p of placed) {
    const r = (p.userData?.radius ?? defaultRadius) + defaultRadius;
    if (Math.hypot(pos.x - p.x, pos.z - p.z) < r * 0.85) return true;
  }
  return false;
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

/** Build a side-path curve that starts on the main road and branches outward. */
function buildBranchCurve(mainPath, junctionT, side, lateralOffset, branchPoints) {
  const junction = mainPath.getPointAt(junctionT);
  const tangent = mainPath.getTangentAt(junctionT).normalize();
  const perp = new THREE.Vector3(-tangent.z, 0, tangent.x).multiplyScalar(side);
  const edge = junction.clone().add(perp.clone().multiplyScalar(lateralOffset * 0.55));
  const outer = junction.clone().add(perp.clone().multiplyScalar(lateralOffset));
  const pts = [junction, edge, outer, ...branchPoints];
  return new THREE.CatmullRomCurve3(pts, false, 'catmullrom', 0.42);
}

/** Wider side-path surface: cobble road + curbs + centre dots. Returns meshes for groundMeshes. */
function createSidePathStrip(curve, groundMeshes, scene, {
  pathHalf = 1.45,
  y = 0.085,
  divisions = 120,
  closed = false,
} = {}) {
  const cobbleMat = createToonMaterial(PALETTE.road);
  const curbMat = createToonMaterial(PALETTE.curb);
  const lineMat = createToonMaterial(PALETTE.roadLine);

  const road = createPathRibbon(curve, pathHalf, y, cobbleMat, 0, divisions);
  scene.add(road);
  groundMeshes.push(road);

  const curbHalf = 0.14;
  const curbOff = pathHalf + curbHalf + 0.04;
  const leftCurb = createPathRibbon(curve, curbHalf, y + 0.012, curbMat, -curbOff, divisions);
  const rightCurb = createPathRibbon(curve, curbHalf, y + 0.012, curbMat, curbOff, divisions);
  scene.add(leftCurb, rightCurb);

  const pts = curve.getSpacedPoints(divisions);
  for (let i = 4; i < pts.length - 4; i += closed ? 5 : 6) {
    const t = i / (pts.length - 1);
    const p = pts[i];
    const tangent = curve.getTangentAt(t).normalize();
    const dot = new THREE.Mesh(
      new THREE.CylinderGeometry(0.07, 0.07, 0.012, 6),
      lineMat,
    );
    dot.position.set(p.x, y + 0.014, p.z);
    dot.lookAt(p.x + tangent.x, y + 0.014, p.z + tangent.z);
    scene.add(dot);
  }

  return road;
}

/** Fan patch blending the main road edge into a branch direction. */
function createJunctionFan(junction, tangent, perp, side, branchTarget, scene, groundMeshes) {
  const roadHalf = 1.75;
  const pathHalf = 1.45;
  const y = 0.084;
  const cobbleMat = createToonMaterial(PALETTE.road);

  const inner = junction.clone().add(perp.clone().multiplyScalar(side * (roadHalf - 0.2)));
  const outer = junction.clone().add(perp.clone().multiplyScalar(side * (roadHalf + pathHalf + 0.3)));
  const branch = branchTarget.clone().setY(0);

  const positions = [
    inner.x, y, inner.z,
    outer.x, y, outer.z,
    branch.x, y, branch.z,
    junction.x, y, junction.z,
  ];
  const indices = [0, 1, 2, 0, 2, 3];
  const geom = new THREE.BufferGeometry();
  geom.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geom.setIndex(indices);
  geom.computeVertexNormals();
  const fan = new THREE.Mesh(geom, cobbleMat);
  fan.receiveShadow = true;
  scene.add(fan);
  groundMeshes.push(fan);
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
  const red = createToonMaterial(0xc03030);
  const postGeo = new THREE.CylinderGeometry(0.12, 0.14, 2.8, 6);

  [-1.1, 1.1].forEach((x) => {
    const post = createOutlinedMesh(postGeo, red);
    post.position.set(x, 1.4, 0);
    group.add(post);
  });

  const lintel = createOutlinedMesh(new THREE.BoxGeometry(2.8, 0.18, 0.18), red);
  lintel.position.y = 2.55;
  group.add(lintel);

  const topLintel = createOutlinedMesh(new THREE.BoxGeometry(3.0, 0.12, 0.22), red);
  topLintel.position.y = 2.85;
  group.add(topLintel);

  const plaque = createOutlinedMesh(
    new THREE.BoxGeometry(0.5, 0.25, 0.06),
    createToonMaterial(0x1a1a1a),
  );
  plaque.position.set(0, 2.35, 0.12);
  group.add(plaque);

  return group;
}

function createLantern() {
  const model = _modelLoader?.createInstance('street_lamp', { targetHeight: 2.8 });
  if (model) {
    const group = new THREE.Group();
    group.add(model);
    group.userData.lanternMesh = findFirstMesh(model) ?? model;
    return group;
  }

  const group = new THREE.Group();
  const post = createOutlinedMesh(
    new THREE.CylinderGeometry(0.04, 0.05, 1.6, 6),
    createToonMaterial(PALETTE.metal),
  );
  post.position.y = 0.8;
  group.add(post);

  const paper = createOutlinedMesh(
    new THREE.CylinderGeometry(0.18, 0.22, 0.45, 8, 1, true),
    createToonMaterial(0xf06050),
  );
  paper.position.y = 1.75;
  group.add(paper);

  const cap = createOutlinedMesh(
    new THREE.ConeGeometry(0.12, 0.15, 4),
    createToonMaterial(0x333333),
  );
  cap.position.y = 2.05;
  cap.rotation.y = Math.PI / 4;
  group.add(cap);

  group.userData.lanternMesh = paper;
  return group;
}

function createVendingMachine(color = PALETTE.vending) {
  const group = withModel('vending', 1.85, () => {
    const root = new THREE.Group();
    const bodyColor = color;
    const trimColor = new THREE.Color(bodyColor).offsetHSL(0, 0, -0.12).getHex();
    const topColor = new THREE.Color(bodyColor).offsetHSL(0, 0, 0.08).getHex();

    const base = createSoftOutlinedMesh(
      new THREE.BoxGeometry(0.95, 0.12, 0.75),
      createToonMaterial(trimColor, { roughness: 0.9 }),
    );
    base.position.y = 0.06;
    root.add(base);

    const body = createSoftOutlinedMesh(
      new THREE.BoxGeometry(0.9, 1.65, 0.7),
      createToonMaterial(bodyColor, { roughness: 0.75 }),
    );
    body.position.y = 0.95;
    root.add(body);

    const topCap = createSoftOutlinedMesh(
      new THREE.BoxGeometry(0.94, 0.1, 0.74),
      createToonMaterial(topColor, { roughness: 0.7 }),
    );
    topCap.position.y = 1.82;
    root.add(topCap);

    const awning = createSoftOutlinedMesh(
      new THREE.BoxGeometry(1.0, 0.06, 0.22),
      createToonMaterial(topColor, { roughness: 0.65 }),
    );
    awning.position.set(0, 1.9, 0.38);
    awning.rotation.x = -0.12;
    root.add(awning);

    const displayTex = createVendingDisplayTexture(color);
    const glass = new THREE.Mesh(
      new THREE.PlaneGeometry(0.68, 1.15),
      createToonMaterial(0xffffff, {
        map: displayTex,
        emissive: 0x306878,
        emissiveIntensity: 0.35,
      }),
    );
    glass.position.set(0, 1.02, 0.36);
    root.add(glass);

    const frame = createSoftOutlinedMesh(
      new THREE.BoxGeometry(0.76, 1.22, 0.04),
      createToonMaterial(0x2a3038, { roughness: 0.85 }),
    );
    frame.position.set(0, 1.02, 0.34);
    root.add(frame);

    const coinPanel = createSoftOutlinedMesh(
      new THREE.BoxGeometry(0.18, 0.28, 0.05),
      createToonMaterial(0x8898a8, { roughness: 0.55, metalness: 0.2 }),
    );
    coinPanel.position.set(0.34, 0.55, 0.36);
    root.add(coinPanel);

    const slot = createSoftOutlinedMesh(
      new THREE.BoxGeometry(0.1, 0.04, 0.06),
      createToonMaterial(0x1a1a1a, { roughness: 0.95 }),
    );
    slot.position.set(0.34, 0.62, 0.39);
    root.add(slot);

    const dispense = createSoftOutlinedMesh(
      new THREE.BoxGeometry(0.28, 0.14, 0.2),
      createToonMaterial(0x1a2028, { roughness: 0.9 }),
    );
    dispense.position.set(0, 0.28, 0.38);
    root.add(dispense);

    return root;
  }, { tint: color, tintStrength: 0.32 });

  decorateVendingMachine(group, color);
  return group;
}

function decorateVendingMachine(group, color) {
  const isLoaded = group.userData.isLoadedModel;

  if (isLoaded && !group.userData.vendingDisplay) {
    const displayTex = createVendingDisplayTexture(color);
    const panel = new THREE.Mesh(
      new THREE.PlaneGeometry(0.64, 1.0),
      createToonMaterial(0xffffff, {
        map: displayTex,
        emissive: 0x306878,
        emissiveIntensity: 0.42,
        transparent: true,
        opacity: 0.94,
        depthWrite: false,
      }),
    );
    panel.position.set(0, 0.98, 0.4);
    group.add(panel);
    group.userData.vendingDisplay = panel;
    group.userData.vendingGlow = panel;
  } else if (!group.userData.vendingGlow) {
    const glow = new THREE.Mesh(
      new THREE.PlaneGeometry(0.55, 0.9),
      createToonMaterial(0x90d0e8, {
        emissive: 0x4098b8,
        emissiveIntensity: 0.45,
        transparent: true,
        opacity: 0.55,
        depthWrite: false,
      }),
    );
    glow.position.set(0, 1.05, 0.37);
    group.add(glow);
    group.userData.vendingGlow = glow;
  }

  const lightColor = new THREE.Color(color);
  const light = new THREE.PointLight(lightColor, 0.7, 6);
  light.position.set(0, 1.45, 0.5);
  group.add(light);
  group.userData.vendingLight = light;
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

function createBench(variant = 'normal') {
  const key = variant === 'cushion' ? 'bench_cushion' : 'bench';
  return withModel(key, 0.85, () => {
    const group = new THREE.Group();
    const wood = createToonMaterial(0x8a6a4a);
    const leg = createOutlinedMesh(new THREE.BoxGeometry(0.08, 0.35, 0.08), wood);
    [[-0.5, -0.15], [0.5, -0.15], [-0.5, 0.15], [0.5, 0.15]].forEach(([x, z]) => {
      const l = leg.clone();
      l.position.set(x, 0.18, z);
      group.add(l);
    });
    const seat = createOutlinedMesh(new THREE.BoxGeometry(1.2, 0.06, 0.4), wood);
    seat.position.y = 0.38;
    group.add(seat);
    const back = createOutlinedMesh(new THREE.BoxGeometry(1.2, 0.35, 0.06), wood);
    back.position.set(0, 0.6, -0.17);
    group.add(back);
    return group;
  }, { rotationY: Math.PI });
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
  return withModel('bush', 0.75, () => {
  const group = new THREE.Group();
  const pot = createOutlinedMesh(
    new THREE.CylinderGeometry(0.15, 0.12, 0.25, 6),
    createToonMaterial(0x8a5030),
  );
  pot.position.y = 0.13;
  group.add(pot);

  const leaves = createOutlinedMesh(
    new THREE.SphereGeometry(0.22, 8, 6),
    createToonMaterial(0x4a9a4a),
  );
  leaves.position.y = 0.38;
  group.add(leaves);

  return group;
  });
}

function createTree(variant = 'normal') {
  if (variant !== 'pine') {
    const key = variant === 'cherry' ? 'tree_cherry' : 'tree_normal';
    const model = _modelLoader?.createInstance(key, {
      tint: variant === 'cherry' ? 0xf0a0b8 : null,
      tintStrength: variant === 'cherry' ? 0.55 : 0.28,
      rotationY: Math.random() * Math.PI * 2,
    });
    if (model) {
      if (variant === 'cherry') model.userData.isCherry = true;
      return model;
    }
  }

  const tree = new THREE.Group();
  const trunk = createSoftOutlinedMesh(
    new THREE.CylinderGeometry(0.1, 0.14, 1.0, 6),
    createToonMaterial(0x6a5040),
  );
  trunk.position.y = 0.5;
  tree.add(trunk);

  if (variant === 'cherry') {
    const puffs = [
      [0, 1.4, 0, 0.65, 0xf0a0b8],
      [-0.35, 1.25, 0.15, 0.48, 0xf8b8cc],
      [0.35, 1.3, -0.15, 0.5, 0xf0a0c0],
      [0, 1.65, 0.2, 0.42, 0xffc0d0],
    ];
    puffs.forEach(([x, y, z, s, c]) => {
      const puff = createSoftOutlinedMesh(new THREE.SphereGeometry(s, 9, 7), createToonMaterial(c));
      puff.position.set(x, y, z);
      tree.add(puff);
    });
    tree.userData.isCherry = true;
  } else if (variant === 'pine') {
    [0.65, 0.48, 0.32].forEach((r, i) => {
      const layer = createSoftOutlinedMesh(
        new THREE.ConeGeometry(r, 0.55, 6),
        createToonMaterial(0x3a7a4a),
      );
      layer.position.y = 1.0 + i * 0.42;
      tree.add(layer);
    });
  } else {
    [[0, 1.35, 0, 0.55], [-0.28, 1.2, 0.2, 0.4], [0.3, 1.25, -0.18, 0.42], [0, 1.55, 0.1, 0.35]].forEach(
      ([x, y, z, s]) => {
        const foliage = createSoftOutlinedMesh(
          new THREE.SphereGeometry(s, 8, 6),
          createToonMaterial(0x5a9a5a + Math.floor(Math.random() * 0x050505)),
        );
        foliage.position.set(x, y, z);
        tree.add(foliage);
      },
    );
  }

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


function createHarborPier() {
  const group = new THREE.Group();
  const woodMat = createToonMaterial(0x8a7050);
  const railMat = createToonMaterial(0x606050);

  for (let i = 0; i < 6; i++) {
    const plank = createOutlinedMesh(new THREE.BoxGeometry(2.8, 0.12, 1.2), woodMat);
    plank.position.set(0, 0.18 + i * 0.02, -i * 1.1);
    group.add(plank);
  }

  [-1.3, 1.3].forEach((x) => {
    const post = createOutlinedMesh(new THREE.BoxGeometry(0.1, 0.7, 0.1), railMat);
    post.position.set(x, 0.55, -2.5);
    group.add(post);
    const rail = createOutlinedMesh(new THREE.BoxGeometry(0.08, 0.08, 5.5), railMat);
    rail.position.set(x, 0.85, -2.7);
    group.add(rail);
  });

  const lamp = createLantern();
  lamp.position.set(0, 0, -5.8);
  lamp.scale.setScalar(0.85);
  group.add(lamp);

  return group;
}

/**
 * Raised stone-pier footbridge.
 * The deck sits at BRIDGE_DECK_Y above ground; piers descend into the channel;
 * approach ramps connect ground-level to the deck on each side.
 * width  = span across the river (X axis after rotation)
 * length = how far it stretches along the river (Z axis after rotation)
 */
const BRIDGE_DECK_Y = 0.78; // deck top — must clear RIVER_Y + water ribbon height

function createBridge(width = 6.2, length = 4.8) {
  const group = new THREE.Group();
  const plankMat = createToonMaterial(0x9a8070);
  const stoneMat = createToonMaterial(0x808878);
  const railMat  = createToonMaterial(0x6a5848);

  // ── Deck ──────────────────────────────────────────────────────────────────
  const deck = new THREE.Mesh(new THREE.BoxGeometry(width, 0.22, length), plankMat);
  deck.position.y = BRIDGE_DECK_Y;
  deck.castShadow = true;
  deck.receiveShadow = true;
  deck.userData.isWalkableGround = true;
  group.add(deck);

  // Plank lines (thin dark strips on top of deck)
  const stripMat = createToonMaterial(0x7a6858);
  const plankCount = Math.round(length / 0.38);
  for (let i = 0; i < plankCount; i++) {
    const strip = new THREE.Mesh(new THREE.BoxGeometry(width - 0.1, 0.01, 0.06), stripMat);
    strip.position.set(0, BRIDGE_DECK_Y + 0.12, -length / 2 + 0.19 + i * (length / plankCount));
    group.add(strip);
  }

  // ── Stone piers ───────────────────────────────────────────────────────────
  // Four piers, one at each corner, reaching from deck bottom to riverbed
  const pierH = BRIDGE_DECK_Y + 0.9;  // total pier height (goes below ground)
  const pierY = BRIDGE_DECK_Y - pierH / 2;
  [[-width * 0.3, -length * 0.3], [-width * 0.3, length * 0.3],
   [ width * 0.3, -length * 0.3], [ width * 0.3, length * 0.3]].forEach(([px, pz]) => {
    const pier = new THREE.Mesh(new THREE.BoxGeometry(0.48, pierH, 0.48), stoneMat);
    pier.position.set(px, pierY, pz);
    pier.castShadow = true;
    group.add(pier);
    // Pier cap
    const cap = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.12, 0.6), stoneMat);
    cap.position.set(px, BRIDGE_DECK_Y - 0.05, pz);
    group.add(cap);
  });

  // Central arch lintel (visual beam under deck centre)
  const lintel = new THREE.Mesh(new THREE.BoxGeometry(width * 0.62, 0.18, 0.28), stoneMat);
  lintel.position.set(0, BRIDGE_DECK_Y - 0.22, 0);
  group.add(lintel);

  // ── Railings ──────────────────────────────────────────────────────────────
  const postH = 0.70;
  const postY = BRIDGE_DECK_Y + postH / 2;
  const railY = BRIDGE_DECK_Y + postH - 0.08;

  [-length / 2 + 0.12, length / 2 - 0.12].forEach((z) => {
    // Top rail bar
    const rail = new THREE.Mesh(new THREE.BoxGeometry(width - 0.05, 0.10, 0.10), railMat);
    rail.position.set(0, railY, z);
    group.add(rail);
    // Balusters
    const balCount = Math.max(3, Math.round(width / 0.7));
    for (let i = 0; i <= balCount; i++) {
      const bx = -width / 2 + 0.15 + i * ((width - 0.3) / balCount);
      const bal = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.05, postH, 5), railMat);
      bal.position.set(bx, postY, z);
      group.add(bal);
    }
  });

  // ── Approach ramps ────────────────────────────────────────────────────────
  // One ramp on each far side (±Z), sloping from BRIDGE_DECK_Y at the deck
  // edge down to y=0 at the ground, covering ~1.8 m of Z travel.
  const rampLen = 2.2;
  const rampThick = 0.14;
  const rampAngle = -Math.atan2(BRIDGE_DECK_Y, rampLen);

  [-1, 1].forEach((side) => {
    const rampCentreZ = side * (length / 2 + rampLen / 2);
    const rampCentreY = BRIDGE_DECK_Y / 2;
    const ramp = new THREE.Mesh(
      new THREE.BoxGeometry(width - 0.1, rampThick, rampLen),
      plankMat,
    );
    ramp.position.set(0, rampCentreY, rampCentreZ);
    ramp.rotation.x = side * rampAngle;
    ramp.castShadow = true;
    ramp.receiveShadow = true;
    group.add(ramp);

    // Ramp railings
    [-length / 2 + 0.12, length / 2 - 0.12].map((rz) => rz); // not used for ramp; skip for clarity
  });

  group.userData.isBridge = true;
  return group;
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

function createHarborWater() {
  const water = new THREE.Mesh(
    new THREE.PlaneGeometry(28, 22),
    createWaterMaterial(),
  );
  water.rotation.x = -Math.PI / 2;
  water.position.y = -0.08;
  water.userData.isWater = true;
  return water;
}

function createLookoutDeck() {
  const group = new THREE.Group();
  const deck = createOutlinedMesh(new THREE.BoxGeometry(3.5, 0.15, 2.5), createToonMaterial(0x989080));
  deck.position.y = 0.45;
  group.add(deck);

  const bench = createBench();
  bench.position.set(0, 0, 0.3);
  bench.scale.setScalar(0.9);
  group.add(bench);

  const sign = createOutlinedMesh(new THREE.BoxGeometry(1.6, 0.9, 0.08), createToonMaterial(0xf0e8d8));
  sign.position.set(-1.6, 0.95, 0);
  group.add(sign);

  return group;
}

function createStoneSteps(count = 4) {
  return withModel('shrine_stairs', 1.4, () => {
  const group = new THREE.Group();
  const mat = createToonMaterial(0x989890);
  for (let i = 0; i < count; i++) {
    const step = createOutlinedMesh(new THREE.BoxGeometry(1.8 - i * 0.1, 0.12, 0.45), mat);
    step.position.set(0, 0.06 + i * 0.12, -i * 0.4);
    group.add(step);
  }
  return group;
  });
}

function createShrine() {
  return withModel('shrine', 3.2, () => {
  const group = new THREE.Group();
  const base = createOutlinedMesh(new THREE.BoxGeometry(2.2, 0.25, 1.8), createToonMaterial(0x888880));
  base.position.y = 0.12;
  group.add(base);

  const building = createBuilding(1.8, 1.5, 1.6, 0xf0e8d8, 0x3a3a3a, 'shrine');
  building.position.set(0, 0, -0.3);
  group.add(building);

  const torii = createTorii();
  torii.position.set(0, 0, 1.6);
  torii.scale.setScalar(0.75);
  group.add(torii);

  return group;
  });
}

function createGardenPatch() {
  const group = new THREE.Group();
  const soil = new THREE.Mesh(
    new THREE.BoxGeometry(2.5, 0.05, 1.8),
    createToonMaterial(0x6a5040),
  );
  soil.position.y = 0.03;
  group.add(soil);

  for (let i = 0; i < 6; i++) {
    const flower = createOutlinedMesh(
      new THREE.SphereGeometry(0.08, 6, 4),
      createToonMaterial([0xf06080, 0xf0c040, 0xf0f0f0, 0xe080c0][i % 4]),
    );
    flower.position.set((Math.random() - 0.5) * 2, 0.15, (Math.random() - 0.5) * 1.4);
    group.add(flower);
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
    mesh.rotation.y = -Math.PI / 2;
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

/**
 * Procedural storefront: full shop building + sign + display + goods.
 * Kenney shop GLBs are narrow 0.5 m props — not used as the main body.
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
  const winMat = createToonMaterial(0x8898a8, { map: winTex, emissive: 0x334455, emissiveIntensity: 0.45 });
  const windowOverlay = new THREE.Mesh(new THREE.PlaneGeometry(w * 0.55, bandH - 0.22), winMat);
  windowOverlay.position.set(0, bandH * 0.5 + 0.08, faceZ + 0.1);
  group.add(windowOverlay);

  // Hanging sign above the awning
  const sign = createShopSign(labelJa, labelEn, signColor, h * 0.82);
  sign.position.set(0, 0, faceZ + 0.75);
  group.add(sign);

  // Street-facing porch pad
  const porch = createSoftOutlinedMesh(
    new THREE.BoxGeometry(w + 0.9, 0.08, 1.8),
    createToonMaterial(0xb0a898),
  );
  porch.position.set(0, 0.04, faceZ + 1.05);
  group.add(porch);

  // Goods out front
  if (goodsType === 'crates') {
    [-1.0, 1.0].forEach((x) => {
      const crate = createOutlinedMesh(new THREE.BoxGeometry(0.55, 0.38, 0.42), createToonMaterial(0x806040));
      crate.position.set(x, 0.19, faceZ + 1.35);
      group.add(crate);
      const goods = createOutlinedMesh(
        new THREE.BoxGeometry(0.35, 0.22, 0.28),
        createToonMaterial(0xf0a040),
      );
      goods.position.set(x, 0.42, faceZ + 1.35);
      group.add(goods);
    });
  } else if (goodsType === 'flowers') {
    [-0.85, 0.85].forEach((x) => {
      const bucket = createOutlinedMesh(new THREE.CylinderGeometry(0.22, 0.2, 0.38, 8), createToonMaterial(0x607080));
      bucket.position.set(x, 0.19, faceZ + 1.3);
      group.add(bucket);
      const flowers = createOutlinedMesh(new THREE.SphereGeometry(0.24, 8, 6), createToonMaterial(0xe08090));
      flowers.position.set(x, 0.44, faceZ + 1.3);
      group.add(flowers);
    });
  } else if (goodsType === 'bread') {
    const basket = createOutlinedMesh(new THREE.CylinderGeometry(0.28, 0.24, 0.22, 8), createToonMaterial(0x806040));
    basket.position.set(-0.9, 0.11, faceZ + 1.3);
    group.add(basket);
    const loaf = createOutlinedMesh(new THREE.BoxGeometry(0.32, 0.14, 0.16), createToonMaterial(0xe8c878));
    loaf.position.set(-0.9, 0.28, faceZ + 1.3);
    group.add(loaf);
    const crate = createOutlinedMesh(new THREE.BoxGeometry(0.5, 0.35, 0.4), createToonMaterial(0x806040));
    crate.position.set(0.9, 0.18, faceZ + 1.35);
    group.add(crate);
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

function createMarketStalls() {
  const group = new THREE.Group();
  const colors = [0xc04040, 0x4080a0, 0x40a060, 0xf0a030];
  [-3.5, -1.2, 1.2, 3.5].forEach((x, i) => {
    const stall = createOutlinedMesh(new THREE.BoxGeometry(1.6, 0.85, 1.1), createToonMaterial(0xd0c0a0));
    stall.position.set(x, 0.42, 0);
    group.add(stall);
    const awning = withModel('awning', 0.45, () => (
      createOutlinedMesh(new THREE.BoxGeometry(1.8, 0.06, 1.3), createToonMaterial(colors[i]))
    ), { scale: 0.9, tint: colors[i], tintStrength: 0.35 });
    awning.position.set(x, 0.95, 0.25);
    group.add(awning);
    const goods = createOutlinedMesh(
      new THREE.BoxGeometry(0.45, 0.25, 0.35),
      createToonMaterial([0xf0a040, 0xf06060, 0x80c080, 0xf0e060][i]),
    );
    goods.position.set(x, 0.92, 0.1);
    group.add(goods);
  });
  const sign = createShopSign('朝市', 'Morning Market', 0xe85050, 2.2);
  sign.position.set(0, 0, 2.2);
  group.add(sign);
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
    const chair = createBench();
    chair.position.set(x, 0, 2.8);
    chair.scale.setScalar(0.55);
    group.add(chair);
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
    this.vendingMachines = [];
    this.waterMeshes = [];
    this.interactableSpawns = [];
    this.colliders = new ColliderWorld();
    this.riverCurve = null;
    this.sidePaths = {};
    this.walkableCurves = [];
    this._bridgeCenters = [
      { x: -12, z: -14 },
      { x: -14, z: -100 },
    ];
    this._butterflies = null;
    this._fireflies = null;
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

  _placeBridge(x, z, rotY, width = 6.2, length = 4.8) {
    const bridge = createBridge(width, length);
    // Bridge sits at world y=0 — the BRIDGE_DECK_Y offset is baked into createBridge
    bridge.position.set(x, 0, z);
    bridge.rotation.y = rotY;
    this.scene.add(bridge);

    // Register all walkable deck-like meshes
    bridge.traverse((child) => {
      if (child.isMesh && child.userData.isWalkableGround) {
        this.groundMeshes.push(child);
      }
    });

    // Channel cutout: a dark rectangle at river level under the bridge so it
    // reads as "water flowing through", not grass under the deck.
    const RIVER_Y = -0.42;
    const channelMat = createToonMaterial(0x3a5a68);
    // Orient same as bridge
    const channelW = width * 0.90;
    const channelL = length + 3.2; // slightly wider than deck to show beyond rails
    const channel = new THREE.Mesh(new THREE.PlaneGeometry(channelW, channelL), channelMat);
    channel.rotation.x = -Math.PI / 2;
    channel.rotation.z = rotY;
    channel.position.set(x, RIVER_Y + 0.02, z);
    this.scene.add(channel);

    // Narrow water shimmer strip centred in channel
    const waterMat = createWaterMaterial();
    const shimmer = new THREE.Mesh(new THREE.PlaneGeometry(channelW * 0.7, channelL), waterMat);
    shimmer.rotation.x = -Math.PI / 2;
    shimmer.rotation.z = rotY;
    shimmer.position.set(x, RIVER_Y + 0.04, z);
    shimmer.userData.isWater = true;
    this.scene.add(shimmer);
    this.waterMeshes.push(shimmer);

    this._bridgeCenters.push({ x, z });
    return bridge;
  }

  _addBankCollider(x, z, halfW, halfD, rotY = 0) {
    for (const bc of this._bridgeCenters) {
      if (Math.hypot(x - bc.x, z - bc.z) < 3.0) return;
    }
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

  _recordSpawn(propId, position, rotationY = 0) {
    this.interactableSpawns.push({
      propId,
      position: position.clone(),
      rotationY,
    });
  }

  async build(onProgress) {
    onProgress?.('Building sky…');
    this._createSky();
    this._createBackdrop();
    this._createEdgeBackdrop();
    await nextFrame();

    onProgress?.('Laying streets…');
    this._createGround();
    this._createRoad();
    this._createRiver();
    this._createSidePaths();
    await nextFrame();

    onProgress?.('Placing buildings…');
    this._createBuildings();
    this._createLandmarks();
    this._createShopsAndPlaces();
    await nextFrame();

    onProgress?.('Adding details…');
    this._createProps();
    this._createStreetFurniture();
    this._createVegetation();
    this._createSceneryDecor();
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

    this.vendingMachines.forEach((vm, i) => {
      const pulse = 0.82 + Math.sin(elapsed * 1.6 + i * 1.3) * 0.18;
      if (vm.userData.vendingLight) {
        vm.userData.vendingLight.intensity = 0.55 * pulse;
      }
      const glow = vm.userData.vendingGlow;
      if (glow?.material?.emissiveIntensity != null) {
        glow.material.emissiveIntensity = 0.35 + pulse * 0.2;
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
      const dummy = new THREE.Object3D();
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
      const dummy = new THREE.Object3D();
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
      const dummy = new THREE.Object3D();
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
    this.scene.fog = new THREE.Fog(PALETTE.fog, 45, 200);
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
    const skyTex = new THREE.CanvasTexture(skyCanvas);
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
    const count = 80;
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

  _createBackdrop() {
    // Sky + fog only — distant hills handled in _createEdgeBackdrop.
  }

  _createEdgeBackdrop() {
    const mat = createToonMaterial(0x91d3c8, { roughness: 0.95 });
    const hills = [
      [-58, -88, 10, 7], [-48, -115, 12, 8], [52, -92, 11, 7],
      [58, -120, 9, 6], [-55, -135, 13, 8], [48, -138, 10, 7],
      [-62, -60, 8, 5], [60, -65, 9, 6],
    ];
    hills.forEach(([x, z, w, h]) => {
      const hill = new THREE.Mesh(new THREE.CylinderGeometry(w, w * 1.1, h, 6), mat);
      hill.position.set(x, h / 2 - 1.5, z);
      this.scene.add(hill);
    });
  }

  _createGround() {
    const grassTex = createGrassTexture();
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(420, 420),
      createToonMaterial(PALETTE.green, { map: grassTex }),
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.set(2, -0.06, -52);
    ground.receiveShadow = true;
    this.scene.add(ground);
    this.groundMeshes.push(ground);

    const meadow = new THREE.Mesh(
      new THREE.PlaneGeometry(420, 420),
      createToonMaterial(PALETTE.meadow, { map: grassTex }),
    );
    meadow.rotation.x = -Math.PI / 2;
    meadow.position.set(2, -0.055, -52);
    this.scene.add(meadow);

    const patches = [
      [-14, -6, 5, 4, 0x7aaa88],
      [10, -16, 6, 5, 0x82b890],
      [-8, -30, 7, 6, 0x6a9a78],
      [16, -44, 9, 7, 0x7aaa90],
      [20, -58, 12, 9, 0x6a9a78],
      [-12, -52, 6, 5, 0x82b890],
      [10, -74, 14, 10, 0x7ab888],
      [-10, -86, 9, 7, 0x7aaa88],
      [-18, -105, 11, 8, 0x6a9a78],
      [14, -112, 10, 9, 0x82b898],
      [22, -125, 14, 10, 0x6a9888],
      [-6, -128, 8, 7, 0x7aaa88],
      [8, 8, 6, 5, 0x82b890],
      [-10, 4, 5, 4, 0x7aaa80],
    ];
    patches.forEach(([x, z, w, d, color]) => {
      const patch = new THREE.Mesh(
        new THREE.PlaneGeometry(w, d),
        createToonMaterial(color),
      );
      patch.rotation.x = -Math.PI / 2;
      patch.position.set(x, 0.012, z);
      this.scene.add(patch);
    });

    const gravelStrips = [
      [-5, 0.08, -8, 1.2, 8], [6, 0.08, -24, 1.0, 7], [-4, 0.08, -48, 1.2, 9],
      [5, 0.08, -72, 1.0, 8], [-3, 0.08, -96, 1.2, 7],
    ];
    gravelStrips.forEach(([x, y, z, w, d]) => {
      const gravel = new THREE.Mesh(
        new THREE.PlaneGeometry(w, d),
        createToonMaterial(PALETTE.gravel),
      );
      gravel.rotation.x = -Math.PI / 2;
      gravel.position.set(x, y, z);
      this.scene.add(gravel);
    });

    const harborWater = createHarborWater();
    harborWater.position.set(26, -0.1, -92);
    harborWater.scale.set(1.3, 1, 1.2);
    this.scene.add(harborWater);
    this.waterMeshes.push(harborWater);
    const harborWater2 = createHarborWater();
    harborWater2.position.set(18, -0.1, -108);
    harborWater2.scale.set(1.1, 1, 0.9);
    this.scene.add(harborWater2);
    this.waterMeshes.push(harborWater2);
    const harborWater3 = createHarborWater();
    harborWater3.position.set(30, -0.1, -125);
    harborWater3.scale.set(0.9, 1, 0.75);
    this.scene.add(harborWater3);
    this.waterMeshes.push(harborWater3);
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

    for (let i = 7; i < points.length; i += 18) {
      const p = points[i];
      const cover = new THREE.Mesh(
        new THREE.CylinderGeometry(0.25, 0.25, 0.03, 10),
        createToonMaterial(0x505050),
      );
      cover.position.set(p.x, 0.07, p.z);
      this.scene.add(cover);
    }
  }

  _createBuildings() {
    // Sparse houses — leave gaps for shops/landmarks. Offset far enough for Kenney decks.
    const buildingDefs = [
      { t: 0.03, side: 1, modelKey: 'building_d', height: 3.0, w: 3, d: 4, h: 3.5, wall: PALETTE.wall, roof: PALETTE.roof, style: 'house' },
      { t: 0.14, side: 1, modelKey: 'building_b', height: 3.4, w: 3.5, d: 3, h: 4.0, wall: 0xc8d0c0, roof: 0x5a7a6a, style: 'apartment' },
      { t: 0.28, side: -1, modelKey: 'building_a', height: 3.4, w: 4.5, d: 4, h: 4.2, wall: PALETTE.wallDark, roof: PALETTE.roof, style: 'house' },
      { t: 0.35, side: 1, modelKey: 'building_d', height: 3.0, w: 3.5, d: 3.5, h: 3.4, wall: PALETTE.wall, roof: PALETTE.roof, style: 'house' },
      { t: 0.56, side: 1, modelKey: 'building_a', height: 3.2, w: 4, d: 3.5, h: 3.6, wall: 0xf0e8d8, roof: PALETTE.roofDark, style: 'house' },
      { t: 0.68, side: -1, modelKey: 'building_b', height: 3.4, w: 4, d: 3.5, h: 3.6, wall: 0xd0c8b8, roof: PALETTE.roof, style: 'apartment' },
      { t: 0.78, side: 1, modelKey: 'building_d', height: 3.0, w: 3.5, d: 3.2, h: 3.4, wall: 0xd8e0d0, roof: 0x6a8a7a, style: 'house' },
      { t: 0.88, side: 1, modelKey: 'building_c', height: 3.0, w: 3.5, d: 3.2, h: 3.4, wall: 0xc8d0d8, roof: 0x5080a0, style: 'apartment' },
    ];

    this._placedPositions = [];
    buildingDefs.forEach(({ t, side, modelKey, height, w, d, h, wall, roof, style }) => {
      const pos = this.path.getPointAt(t);
      const tangent = this.path.getTangentAt(t);
      const perp = new THREE.Vector3(-tangent.z, 0, tangent.x).multiplyScalar(side);
      const buildingOffset = 8.5;

      const building = createPathBuilding(modelKey, height, w, d, h, wall, roof, style);
      building.position.copy(pos).add(perp.multiplyScalar(buildingOffset));
      building.lookAt(
        building.position.x + tangent.x,
        building.position.y,
        building.position.z + tangent.z,
      );
      snapGroupToGround(building, 0);
      this.scene.add(building);
      this._addBoxCollider(building.position.x, building.position.z, w * 0.55 + 0.5, d * 0.55 + 0.7, building.rotation.y);
      registerSolid(this._placedPositions, building.position, 4.2);
    });
  }

  _createLandmarks() {
    const landmarkDefs = [
      { id: 'shrine',      t: 0.64, side: 1,  offset: 8.0, halfW: 2.2, halfD: 2.0, spawn: 'shrine', make: () => createShrine() },
      { id: 'steps',       t: 0.61, side: 1,  offset: 5.8, halfW: 1.4, halfD: 1.6, make: () => createStoneSteps(5) },
      { id: 'torii',       t: 0.36, side: -1, offset: 5.0, halfW: 1.8, halfD: 0.5, make: () => createTorii() },
      { id: 'garden',      t: 0.19, side: -1, offset: 8.0, radius: 1.5, make: () => createGardenPatch() },
      { id: 'lookout',     t: 0.86, side: -1, offset: 7.5, halfW: 2.0, halfD: 1.5, make: () => createLookoutDeck() },
      { id: 'pier',        t: 0.97, side: 1,  offset: 7.0, halfW: 2.5, halfD: 1.2, make: () => createHarborPier(), extraRot: Math.PI / 6 },
      { id: 'harborTorii', t: 0.91, side: -1, offset: 5.5, halfW: 1.2, halfD: 0.4, make: () => createTorii(), scale: 0.65 },
    ];

    landmarkDefs.forEach((def) => {
      const item = def.make();
      placeAlongPath(item, this.path, def.t, def.side, def.offset);
      if (def.scale) item.scale.setScalar(def.scale);
      if (def.extraRot) item.rotation.y += def.extraRot;
      if (isTooCloseSolid(item.position, this._placedPositions, 2.8)) {
        // Nudge farther from path if jammed
        placeAlongPath(item, this.path, def.t, def.side, def.offset + 2.2);
      }
      this.scene.add(item);
      if (def.radius != null) {
        this._addCircleCollider(item.position.x, item.position.z, def.radius);
      } else {
        this._addBoxCollider(item.position.x, item.position.z, def.halfW, def.halfD, item.rotation.y);
      }
      registerSolid(this._placedPositions, item.position, def.radius ?? 2.5);
      if (def.spawn) this._recordSpawn(def.spawn, item.position, item.rotation.y);
    });
  }

  _createShopsAndPlaces() {
    const shops = [
      {
        t: 0.08, side: -1, offset: 7.2, halfW: 1.8, halfD: 1.6, spawn: 'shop_bookshop',
        make: () => createModelShop(3.0, '書店 文房', 'Bunbou Books', 0x8060a0, 1.8, 0xf0ece4, 0x6a5040, 3.4, 3.2, 'crates', 'BOOKS', '📚'),
      },
      {
        t: 0.22, side: 1, offset: 7.2, halfW: 1.6, halfD: 1.4, spawn: 'shop_ramen',
        make: () => createModelShop(2.9, '麺処 山田', 'Yamada Ramen', 0xc04040, 1.7, 0xfff4ec, 0x8a3030, 3.2, 3.0, 'crates', 'RAMEN', '🍜'),
      },
      {
        t: 0.42, side: 1, offset: 7.5, halfW: 2.0, halfD: 1.8, spawn: 'shop_cafe',
        make: () => createCafePatio(),
      },
      {
        t: 0.48, side: -1, offset: 7.2, halfW: 1.5, halfD: 1.3, spawn: 'shop_florist',
        make: () => createModelShop(2.7, '花屋 はな', 'Hana Florist', 0xe08090, 1.6, 0xfaf0f2, 0xc06080, 3.0, 2.8, 'flowers', 'FLOWERS', '🌸'),
      },
      {
        t: 0.54, side: -1, offset: 8.0, halfW: 2.5, halfD: 1.8, spawn: 'shop_market',
        make: () => createMarketStalls(),
      },
      {
        t: 0.95, side: -1, offset: 8.0, halfW: 2.2, halfD: 1.6, spawn: 'shop_fishmarket',
        make: () => createFishMarket(),
      },
    ];

    shops.forEach((def) => {
      const shop = def.make();
      placeAlongPath(shop, this.path, def.t, def.side, def.offset);
      if (isTooCloseSolid(shop.position, this._placedPositions, 3.0)) {
        placeAlongPath(shop, this.path, def.t, def.side, def.offset + 2.0);
      }
      this.scene.add(shop);
      this._addBoxCollider(shop.position.x, shop.position.z, def.halfW, def.halfD, shop.rotation.y);
      this._recordSpawn(def.spawn, shop.position, shop.rotation.y);
      registerSolid(this._placedPositions, shop.position, 3.5);
    });
  }

  _createProps() {
    const props = [
      { t: 0.03, side: 1, type: 'busStop', offset: 2.7 },
      { t: 0.05, side: -1, type: 'vending', offset: 2.6, color: PALETTE.vending },
      { t: 0.12, side: 1, type: 'mailbox', offset: 2.4 },
      { t: 0.18, side: -1, type: 'dirSign', offset: 2.5 },
      { t: 0.20, side: -1, type: 'mirror', offset: 2.3 },
      { t: 0.25, side: 1, type: 'infoBoard', offset: 2.6 },
      { t: 0.30, side: 1, type: 'cone', offset: 2.1 },
      { t: 0.40, side: -1, type: 'kiosk', offset: 2.5 },
      { t: 0.45, side: -1, type: 'trashCan', offset: 2.2 },
      { t: 0.58, side: 1, type: 'vending', offset: 2.6, color: 0xc04060 },
      { t: 0.70, side: 1, type: 'trashCan', offset: 2.2 },
      { t: 0.72, side: -1, type: 'utility', offset: 2.4 },
      { t: 0.74, side: -1, type: 'utility', offset: 2.4 },
      { t: 0.75, side: -1, type: 'busStop', offset: 2.7 },
      { t: 0.84, side: 1, type: 'mailbox', offset: 2.4 },
      { t: 0.91, side: -1, type: 'vending', offset: 2.6, color: 0x4080a0 },
    ];

    const utilityAnchors = [];

    props.forEach(({ t, side, type, offset, color }) => {
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
        case 'cone':
          prop = createTrafficCone();
          break;
        case 'kiosk':
          prop = createInfoKiosk();
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

      placeAlongPath(prop, this.path, t, side, offset);
      if (isTooCloseSolid(prop.position, this._placedPositions, 1.6)) return;

      const propRadii = {
        vending: 0.55, mailbox: 0.35, mirror: 0.4, cone: 0.25,
        kiosk: 0.7, utility: 0.3, busStop: 0.45, dirSign: 0.5,
        infoBoard: 0.75, trashCan: 0.25,
      };
      this._addCircleCollider(prop.position.x, prop.position.z, propRadii[type] ?? 0.4);

      if (type === 'vending') {
        const roadCenter = this.path.getPointAt(t);
        prop.lookAt(roadCenter.x, prop.position.y, roadCenter.z);
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
      registerSolid(this._placedPositions, prop.position, propRadii[type] ?? 0.5);
    });

    if (utilityAnchors.length >= 2) {
      for (let i = 0; i < utilityAnchors.length - 1; i++) {
        const span = createUtilityWireSpan(utilityAnchors[i], utilityAnchors[i + 1]);
        this.scene.add(span);
      }
    }
  }

  _createStreetFurniture() {
    const furniture = [
      { t: 0.10, side: -1, type: 'bench', offset: 2.3, benchVariant: 'normal' },
      { t: 0.26, side: 1, type: 'bollard', offset: 2.0 },
      { t: 0.45, side: 1, type: 'plant', offset: 2.2 },
      { t: 0.60, side: -1, type: 'bench', offset: 2.3, benchVariant: 'cushion' },
      { t: 0.80, side: -1, type: 'plant', offset: 2.2 },
    ];

    furniture.forEach(({ t, side, type, offset, benchVariant }) => {
      let item;
      switch (type) {
        case 'bench':
          item = createBench(benchVariant ?? 'normal');
          break;
        case 'bollard':
          item = createBollard();
          break;
        case 'plant':
          item = createPottedPlant();
          break;
        default:
          return;
      }
      placeAlongPath(item, this.path, t, side, offset);
      if (isTooCloseSolid(item.position, this._placedPositions, 1.4)) return;
      const furnRadii = { bench: 0.9, bollard: 0.2, plant: 0.35 };
      this._addCircleCollider(item.position.x, item.position.z, furnRadii[type] ?? 0.4);
      this.scene.add(item);
      registerSolid(this._placedPositions, item.position, furnRadii[type] ?? 0.4);
      if (type === 'bench') {
        this._recordSpawn('bench', item.position, item.rotation.y);
      }
    });
  }

  _createVegetation() {
    const treeSpots = [
      { t: 0.07, side: 1, dist: 11.5, variant: 'cherry' },
      { t: 0.16, side: -1, dist: 12, variant: 'normal' },
      { t: 0.38, side: -1, dist: 12, variant: 'cherry' },
      { t: 0.50, side: 1, dist: 11.5, variant: 'normal' },
      { t: 0.66, side: 1, dist: 11.5, variant: 'pine', shrineTree: true },
      { t: 0.80, side: -1, dist: 12, variant: 'normal' },
      { t: 0.96, side: 1, dist: 12, variant: 'normal' },
    ];

    const placedTrees = [];
    treeSpots.forEach(({ t, side, dist, variant, shrineTree }) => {
      const pos = this.path.getPointAt(t);
      const tangent = this.path.getTangentAt(t);
      const perp = new THREE.Vector3(-tangent.z, 0, tangent.x).multiplyScalar(side);
      const treePos = pos.clone().add(perp.multiplyScalar(dist));
      if (isTooCloseSolid(treePos, this._placedPositions, 2.5)) return;
      const tree = createTree(variant);
      tree.position.copy(treePos);
      snapToGround(tree, 0);
      this.scene.add(tree);
      this._addCircleCollider(tree.position.x, tree.position.z, 0.9);
      placedTrees.push(tree.position.clone());
      registerSolid(this._placedPositions, tree.position, 2.0);
      if (variant === 'cherry') {
        this._recordSpawn('cherry_tree', tree.position);
      } else if (shrineTree) {
        this._recordSpawn('shrine_tree', tree.position);
      }
    });

    let randomPlaced = 0;
    for (let attempt = 0; attempt < 40 && randomPlaced < 6; attempt++) {
      const t = 0.04 + Math.random() * 0.92;
      const pos = this.path.getPointAt(t);
      const tangent = this.path.getTangentAt(t);
      const side = Math.random() > 0.5 ? 1 : -1;
      const perp = new THREE.Vector3(-tangent.z, 0, tangent.x).multiplyScalar(side);
      const treePos = pos.clone().add(perp.multiplyScalar(12 + Math.random() * 3));
      if (isTooClose(treePos, placedTrees, 4.0)) continue;
      if (isTooCloseSolid(treePos, this._placedPositions, 3.0)) continue;
      const tree = createTree('normal');
      tree.position.copy(treePos);
      tree.scale.setScalar(0.75 + Math.random() * 0.35);
      snapToGround(tree, 0);
      this.scene.add(tree);
      this._addCircleCollider(tree.position.x, tree.position.z, 0.7 * tree.scale.x);
      placedTrees.push(tree.position.clone());
      randomPlaced += 1;
    }

    [0.25, 0.74].forEach((t) => {
      const bamboo = createBambooCluster();
      placeAlongPath(bamboo, this.path, t, -1, 11.5);
      if (isTooCloseSolid(bamboo.position, this._placedPositions, 2.5)) return;
      this.scene.add(bamboo);
      this._addCircleCollider(bamboo.position.x, bamboo.position.z, 1.0);
      registerSolid(this._placedPositions, bamboo.position, 1.2);
    });
  }

  _createSceneryDecor() {
    if (!this.modelLoader) return;

    const decor = [
      { t: 0.10, side: 1, key: 'rock', offset: 13.0, height: 0.45 },
      { t: 0.26, side: -1, key: 'rock', offset: 13.0, height: 0.5 },
      { t: 0.42, side: 1, key: 'bush', offset: 12.5, height: 0.62 },
      { t: 0.58, side: -1, key: 'bush', offset: 13.0, height: 0.55 },
      { t: 0.74, side: 1, key: 'rock', offset: 13.0, height: 0.48 },
      { t: 0.90, side: -1, key: 'bush', offset: 13.0, height: 0.5 },
    ];

    decor.forEach(({ t, side, key, offset, height, scale = 1 }) => {
      const item = this.modelLoader.createInstance(key, { targetHeight: height, scale });
      if (!item) return;
      placeAlongPath(item, this.path, t, side, offset);
      if (isTooCloseSolid(item.position, this._placedPositions, 2.5)) return;
      this.scene.add(item);
      this._addCircleCollider(item.position.x, item.position.z, 0.45);
      registerSolid(this._placedPositions, item.position, 0.8);
    });

    const bgFiller = [
      { x: -42, z: -28, key: 'building_d', h: 2.8, ry: 0.4 },
      { x: 44, z: -42, key: 'building_d', h: 2.4, ry: -0.5 },
      { x: -46, z: -68, key: 'building_c', h: 2.6, ry: 0.2 },
      { x: 46, z: -95, key: 'building_c', h: 2.3, ry: -0.3 },
      { x: -40, z: -118, key: 'building_b', h: 2.5, ry: 0.6 },
    ];
    bgFiller.forEach(({ x, z, key, h, ry }) => {
      const b = this.modelLoader.createInstance(key, { targetHeight: h });
      if (!b) return;
      b.position.set(x, 0, z);
      b.rotation.y = ry;
      snapToGround(b, 0);
      this.scene.add(b);
    });
  }

  _createRiverCurve() {
    const points = [
      new THREE.Vector3(-24, 0, 24),
      new THREE.Vector3(-22, 0, 12),
      new THREE.Vector3(-16, 0, 0),
      new THREE.Vector3(-10, 0, -14),
      new THREE.Vector3(-18, 0, -32),
      new THREE.Vector3(-26, 0, -52),
      new THREE.Vector3(-20, 0, -72),
      new THREE.Vector3(-12, 0, -92),
      new THREE.Vector3(-22, 0, -112),
      new THREE.Vector3(-16, 0, -132),
    ];
    return new THREE.CatmullRomCurve3(points, false, 'catmullrom', 0.45);
  }

  _createRiver() {
    this.riverCurve = this._createRiverCurve();
    const waterHalf = 2.8;
    const bankHalf = 0.55;
    const RIVER_Y = -0.42;  // water surface sits in a channel below ground

    const waterMat = createWaterMaterial();
    const water = createPathRibbon(this.riverCurve, waterHalf, RIVER_Y, waterMat, 0, 160);
    water.userData.isWater = true;
    this.scene.add(water);
    this.waterMeshes.push(water);

    // Riverbed (dark silt under the water, slightly lower)
    const bedMat = createToonMaterial(0x4a5a50);
    const bed = createPathRibbon(this.riverCurve, waterHalf + 0.3, RIVER_Y - 0.04, bedMat, 0, 160);
    this.scene.add(bed);

    // Sloped embankment walls: angled panels connecting ground (y=0) to channel (RIVER_Y)
    // We build these as a custom ribbon that has a vertical component.
    // Approximate with a slightly-below-ground flat bank strip at RIVER_Y+0.06.
    const bankMat = createToonMaterial(0x6aaa84);
    const leftBank  = createPathRibbon(this.riverCurve, bankHalf, RIVER_Y + 0.08, bankMat, -(waterHalf + bankHalf + 0.05), 160);
    const rightBank = createPathRibbon(this.riverCurve, bankHalf, RIVER_Y + 0.08, bankMat,   waterHalf + bankHalf + 0.05, 160);
    this.scene.add(leftBank, rightBank);

    // Upper bank — ground-level lips bridging to the embankment
    const lipMat = createToonMaterial(0x78be94);
    const leftLip  = createPathRibbon(this.riverCurve, 0.5, -0.02, lipMat, -(waterHalf + bankHalf * 2 + 0.4), 160);
    const rightLip = createPathRibbon(this.riverCurve, 0.5, -0.02, lipMat,   waterHalf + bankHalf * 2 + 0.4, 160);
    this.scene.add(leftLip, rightLip);

    // Gravel path along the banks
    const gravelMat = createToonMaterial(PALETTE.road);
    const leftGravel  = createPathRibbon(this.riverCurve, 0.3, 0.01, gravelMat, -(waterHalf + bankHalf * 2 + 1.1), 160);
    const rightGravel = createPathRibbon(this.riverCurve, 0.3, 0.01, gravelMat,   waterHalf + bankHalf * 2 + 1.1, 160);
    this.scene.add(leftGravel, rightGravel);

    // Bank colliders — block walking into water
    const samples = this.riverCurve.getSpacedPoints(80);
    for (let i = 0; i < samples.length; i++) {
      const t = i / (samples.length - 1);
      const p = samples[i];
      const tangent = this.riverCurve.getTangentAt(t).normalize();
      const perp = new THREE.Vector3(-tangent.z, 0, tangent.x);
      const rotY = Math.atan2(tangent.x, tangent.z);

      const left = p.clone().add(perp.clone().multiplyScalar(-(waterHalf + 0.3)));
      const right = p.clone().add(perp.clone().multiplyScalar(waterHalf + 0.3));
      this._addBankCollider(left.x, left.z, 0.5, 0.25, rotY + Math.PI / 2);
      this._addBankCollider(right.x, right.z, 0.5, 0.25, rotY + Math.PI / 2);
    }

    // Reeds along river banks
    const reedGeo = new THREE.CylinderGeometry(0.03, 0.04, 0.5, 4);
    const reedMat = createToonMaterial(0x4a8050);
    scatterInstanced(this.scene, reedGeo, reedMat, 40, () => {
      const t = Math.random();
      const p = this.riverCurve.getPointAt(t);
      const tangent = this.riverCurve.getTangentAt(t).normalize();
      const perp = new THREE.Vector3(-tangent.z, 0, tangent.x);
      const side = Math.random() > 0.5 ? 1 : -1;
      const offset = side * (waterHalf + 0.8 + Math.random() * 0.6);
      return p.clone().add(perp.multiplyScalar(offset)).setY(0.25);
    }, [0.7, 1.3]);

    // Lily pads on water
    const padGeo = new THREE.CircleGeometry(0.25, 8);
    const padMat = createToonMaterial(0x50a060);
    scatterInstanced(this.scene, padGeo, padMat, 25, () => {
      const t = Math.random();
      const p = this.riverCurve.getPointAt(t);
      const tangent = this.riverCurve.getTangentAt(t).normalize();
      const perp = new THREE.Vector3(-tangent.z, 0, tangent.x);
      const lateral = (Math.random() - 0.5) * waterHalf * 1.2;
      return p.clone().add(perp.multiplyScalar(lateral)).setY(0.02);
    }, [0.8, 1.1]);
  }

  _createSidePaths() {
    const pathHalf = 1.45;
    const branchOff = 6.0;

    // ── Riverside spur (west, along the river) ─────────────────────────────
    const riverT = 0.20;
    const riverJunction = this.path.getPointAt(riverT);
    const riverTan = this.path.getTangentAt(riverT).normalize();
    const riverPerp = new THREE.Vector3(-riverTan.z, 0, riverTan.x);

    const riverside = buildBranchCurve(this.path, riverT, -1, branchOff, [
      new THREE.Vector3(-10, 0, -14),
      new THREE.Vector3(-12, 0, -14),
      new THREE.Vector3(-11, 0, -32),
      new THREE.Vector3(-13, 0, -50),
      new THREE.Vector3(-12, 0, -70),
      new THREE.Vector3(-11, 0, -90),
      new THREE.Vector3(-14, 0, -100),
      new THREE.Vector3(-8, 0, -103),
    ]);
    this.sidePaths.riverside = riverside;
    createSidePathStrip(riverside, this.groundMeshes, this.scene, { pathHalf, divisions: 140 });
    createJunctionFan(
      riverJunction, riverTan, riverPerp, -1,
      riverJunction.clone().add(riverPerp.clone().multiplyScalar(-branchOff)),
      this.scene, this.groundMeshes,
    );

    // Bridge 1 — spur crosses river near (-12, -14)
    this._placeBridge(-12, -14, Math.PI / 2, 6.0, 4.5);
    // Bridge 2 — spur crosses river near (-14, -100)
    this._placeBridge(-14, -100, Math.PI / 2 + 0.2, 6.0, 4.5);

    // Lanterns at bridge ends
    [[-12, -14], [-14, -100]].forEach(([bx, bz]) => {
      [[-2.5, 0], [2.5, 0]].forEach(([dx]) => {
        const lantern = createLantern();
        lantern.position.set(bx + dx, 0, bz + 2);
        this.scene.add(lantern);
        const lp = lantern.userData.lanternMesh;
        if (lp) this.lanterns.push(lp);
      });
    });

    // Stepping stones near bridge 1
    for (let i = 0; i < 6; i++) {
      const stone = createOutlinedMesh(
        new THREE.CylinderGeometry(0.25, 0.28, 0.08, 6),
        createToonMaterial(0x909888),
      );
      stone.position.set(-9 - i * 0.6, 0.04, -13.5 + i * 0.3);
      this.scene.add(stone);
    }

    // Junction signpost — riverside
    const riverSign = createJunctionSignpost('川辺', 'Riverside', 0x4080a0);
    riverSign.position.copy(riverJunction).add(riverPerp.clone().multiplyScalar(-4.5));
    riverSign.lookAt(riverJunction.x + riverTan.x, 0, riverJunction.z + riverTan.z);
    this.scene.add(riverSign);

    // ── Shopping lane (east loop) ───────────────────────────────────────────
    const shopT = 0.45;
    const shopJunction = this.path.getPointAt(shopT);
    const shopTan = this.path.getTangentAt(shopT).normalize();
    const shopPerp = new THREE.Vector3(-shopTan.z, 0, shopTan.x);
    const shopOuter = shopJunction.clone().add(shopPerp.clone().multiplyScalar(branchOff));

    const shoppingPts = [
      shopOuter.clone().add(new THREE.Vector3(4, 0, 1)),
      shopOuter.clone().add(new THREE.Vector3(6, 0, -5)),
      shopOuter.clone().add(new THREE.Vector3(2, 0, -9)),
      shopOuter.clone().add(new THREE.Vector3(-2, 0, -5)),
      shopOuter.clone(),
    ];
    const shopLoopPts = [
      shopJunction.clone(),
      shopJunction.clone().add(shopPerp.clone().multiplyScalar(branchOff * 0.55)),
      shopJunction.clone().add(shopPerp.clone().multiplyScalar(branchOff)),
      ...shoppingPts,
      shopJunction.clone().add(shopPerp.clone().multiplyScalar(branchOff * 0.55)),
    ];
    const shoppingLoop = new THREE.CatmullRomCurve3(shopLoopPts, true, 'catmullrom', 0.42);
    this.sidePaths.shopping = shoppingLoop;
    createSidePathStrip(shoppingLoop, this.groundMeshes, this.scene, { pathHalf, divisions: 100, closed: true });
    createJunctionFan(
      shopJunction, shopTan, shopPerp, 1,
      shopOuter,
      this.scene, this.groundMeshes,
    );

    // Junction signpost — shopping
    const shopSign = createJunctionSignpost('商店街', 'Shopping Lane', 0xc04040);
    shopSign.position.copy(shopJunction).add(shopPerp.clone().multiplyScalar(4.5));
    shopSign.lookAt(shopJunction.x + shopTan.x, 0, shopJunction.z + shopTan.z);
    this.scene.add(shopSign);

    // Shops sit outside the loop so the walkway stays clear
    const newShops = [
      { t: 0.10, key: 'bakery',   ja: 'パン屋 小麦', en: 'Komugi Bakery', color: 0xe8a040, wall: 0xfff8ec, roof: 0xc08030, emoji: '🍞', label: 'BREAD', goods: 'bread' },
      { t: 0.34, key: 'teahouse', ja: '茶屋 静',     en: 'Shizuka Tea',   color: 0x408060, wall: 0xf0f4ec, roof: 0x3a6048, emoji: '🍵', label: 'TEA',   goods: 'crates' },
      { t: 0.58, key: 'konbini',  ja: 'コンビニ',    en: 'Mini Mart',     color: 0x4060a0, wall: 0xf0f0f8, roof: 0x304878, emoji: '🏪', label: 'OPEN',  goods: 'crates' },
      { t: 0.82, key: 'sweets',   ja: '和菓子 花',   en: 'Hana Sweets',   color: 0xe08090, wall: 0xfff0f4, roof: 0xc06070, emoji: '🍡', label: 'SWEET', goods: 'flowers' },
    ];
    const shopLanePlaced = [];
    newShops.forEach(({ t, key, ja, en, color, wall, roof, emoji, label, goods }) => {
      const pos = shoppingLoop.getPointAt(t);
      const tan = shoppingLoop.getTangentAt(t).normalize();
      const perp = new THREE.Vector3(-tan.z, 0, tan.x);
      const shopPos = pos.clone().add(perp.multiplyScalar(4.2));
      if (isTooClose(shopPos, shopLanePlaced, 5.5)) return;
      const shop = createStorefront({
        targetHeight: 2.6, labelJa: ja, labelEn: en,
        signColor: color, awningColor: color, wallColor: wall, roofColor: roof,
        windowLabel: label, windowEmoji: emoji, goodsType: goods,
        w: 3.0, d: 2.8,
      });
      shop.position.copy(shopPos);
      shop.lookAt(pos.x, shop.position.y, pos.z);
      snapGroupToGround(shop, 0);
      this.scene.add(shop);
      this._addBoxCollider(shopPos.x, shopPos.z, 1.6, 1.4, shop.rotation.y);
      this._recordSpawn(`shop_${key}`, shopPos, shop.rotation.y);
      shopLanePlaced.push(shopPos.clone());
    });

    // Sidewalk chalkboards — spaced between shops, not on top of them
    [0.22, 0.70].forEach((t) => {
      const pos = shoppingLoop.getPointAt(t);
      const tan = shoppingLoop.getTangentAt(t).normalize();
      const perp = new THREE.Vector3(-tan.z, 0, tan.x);
      const boardPos = pos.clone().add(perp.multiplyScalar(2.2));
      if (isTooClose(boardPos, shopLanePlaced, 3.0)) return;
      const board = createOutlinedMesh(new THREE.BoxGeometry(0.6, 0.5, 0.06), createToonMaterial(0x3a3020));
      board.position.copy(boardPos);
      board.position.y = 0.5;
      board.lookAt(pos.x, 0.5, pos.z);
      this.scene.add(board);
    });
    {
      const pos = shoppingLoop.getPointAt(0.46);
      const tan = shoppingLoop.getTangentAt(0.46).normalize();
      const perp = new THREE.Vector3(-tan.z, 0, tan.x);
      const bike = createBicycle();
      bike.position.copy(pos).add(perp.multiplyScalar(-2.0));
      snapGroupToGround(bike, 0);
      this.scene.add(bike);
      this._addCircleCollider(bike.position.x, bike.position.z, 0.55);
    }

    // Lanterns on the outer curb between shops
    [0.22, 0.46, 0.70].forEach((t) => {
      const pos = shoppingLoop.getPointAt(t);
      const tan = shoppingLoop.getTangentAt(t).normalize();
      const perp = new THREE.Vector3(-tan.z, 0, tan.x);
      const lantern = createLantern();
      lantern.position.copy(pos).add(perp.multiplyScalar(2.5));
      lantern.position.y = 0;
      lantern.scale.setScalar(0.7);
      snapGroupToGround(lantern, 0);
      this.scene.add(lantern);
      const lp = lantern.userData.lanternMesh;
      if (lp) this.lanterns.push(lp);
    });

    // ── Park grove spur ───────────────────────────────────────────────────
    const groveT = 0.80;
    const groveJunction = this.path.getPointAt(groveT);
    const groveTan = this.path.getTangentAt(groveT).normalize();
    const grovePerp = new THREE.Vector3(-groveTan.z, 0, groveTan.x);

    const grove = buildBranchCurve(this.path, groveT, 1, branchOff, [
      groveJunction.clone().add(grovePerp.clone().multiplyScalar(9)).add(new THREE.Vector3(0, 0, -2)),
      groveJunction.clone().add(grovePerp.clone().multiplyScalar(11)).add(new THREE.Vector3(0, 0, -5)),
      groveJunction.clone().add(grovePerp.clone().multiplyScalar(8)).add(new THREE.Vector3(0, 0, -8)),
    ]);
    this.sidePaths.grove = grove;
    createSidePathStrip(grove, this.groundMeshes, this.scene, { pathHalf, divisions: 70 });
    createJunctionFan(
      groveJunction, groveTan, grovePerp, 1,
      groveJunction.clone().add(grovePerp.clone().multiplyScalar(branchOff)),
      this.scene, this.groundMeshes,
    );

    // Junction signpost — park
    const parkSign = createJunctionSignpost('公園', 'Park Grove', 0x5a8a6a);
    parkSign.position.copy(groveJunction).add(grovePerp.clone().multiplyScalar(5));
    parkSign.lookAt(groveJunction.x + groveTan.x, 0, groveJunction.z + groveTan.z);
    this.scene.add(parkSign);

    // Grove picnic area — keep blanket clear of the tree ring
    const groveCenter = grove.getPointAt(0.85);
    const blanket = new THREE.Mesh(
      new THREE.PlaneGeometry(2.2, 1.8),
      createToonMaterial(0xc04060),
    );
    blanket.rotation.x = -Math.PI / 2;
    blanket.position.set(groveCenter.x, 0.03, groveCenter.z);
    this.scene.add(blanket);

    // Wider tree ring so trunks don't cover the picnic blanket
    [0, 1, 2, 3].forEach((i) => {
      const angle = (i / 4) * Math.PI * 2 + 0.35;
      const variant = i % 2 === 0 ? 'cherry' : 'normal';
      const tree = createTree(variant);
      tree.position.set(
        groveCenter.x + Math.sin(angle) * 5.5,
        0,
        groveCenter.z + Math.cos(angle) * 5.5,
      );
      snapToGround(tree, 0);
      this.scene.add(tree);
      this._addCircleCollider(tree.position.x, tree.position.z, 0.9);
    });

    // Grove bench — off the path tip of the spur
    const groveBench = createBench('cushion');
    const benchPos = grove.getPointAt(0.55);
    const benchTan = grove.getTangentAt(0.55).normalize();
    const benchPerp = new THREE.Vector3(-benchTan.z, 0, benchTan.x);
    groveBench.position.copy(benchPos).add(benchPerp.multiplyScalar(2.4));
    snapGroupToGround(groveBench, 0);
    groveBench.lookAt(benchPos.x, groveBench.position.y, benchPos.z);
    this.scene.add(groveBench);
    this._addCircleCollider(groveBench.position.x, groveBench.position.z, 0.9);
    this._recordSpawn('bench', groveBench.position, groveBench.rotation.y);

    // Instanced mushrooms at grove
    const mushGeo = new THREE.SphereGeometry(0.08, 6, 5);
    const mushMat = createToonMaterial(0xe05050);
    scatterInstanced(this.scene, mushGeo, mushMat, 12, () => {
      const angle = Math.random() * Math.PI * 2;
      const r = 2 + Math.random() * 3;
      return new THREE.Vector3(
        groveCenter.x + Math.sin(angle) * r,
        0.08,
        groveCenter.z + Math.cos(angle) * r,
      );
    }, [0.7, 1.2]);

    // Update walkable curves
    this.walkableCurves = [this.path, riverside, shoppingLoop, grove];
  }

  _createEnvironmentDetails() {
    const flowerColors = [0xff6090, 0xf0d040, 0x60b0ff, 0xff8040, 0xc070e0];
    const flowerGeo = new THREE.SphereGeometry(0.06, 6, 5);
    flowerColors.forEach((color) => {
      const mat = createToonMaterial(color);
      scatterInstanced(this.scene, flowerGeo, mat, 11, () => {
        const x = -50 + Math.random() * 100;
        const z = -130 + Math.random() * 150;
        if (this._isNearPath(x, z, 5)) return null;
        if (this.riverCurve && this._isNearRiver(x, z, 4)) return null;
        return new THREE.Vector3(x, 0.06, z);
      }, [0.8, 1.4]);
    });

    const grassGeo = new THREE.ConeGeometry(0.08, 0.2, 4);
    const grassMat = createToonMaterial(0x5a9a60);
    scatterInstanced(this.scene, grassGeo, grassMat, 42, () => {
      const x = -50 + Math.random() * 100;
      const z = -130 + Math.random() * 150;
      if (this._isNearPath(x, z, 4.5)) return null;
      return new THREE.Vector3(x, 0.1, z);
    }, [0.7, 1.3]);

    const stoneGeo = new THREE.DodecahedronGeometry(0.12, 0);
    const stoneMat = createToonMaterial(0x888880);
    scatterInstanced(this.scene, stoneGeo, stoneMat, 21, () => {
      const x = -50 + Math.random() * 100;
      const z = -130 + Math.random() * 150;
      if (this._isNearPath(x, z, 3.5)) return null;
      return new THREE.Vector3(x, 0.08, z);
    }, [0.6, 1.2]);

    // Butterflies
    const bfCount = 10;
    const bfGeo = new THREE.PlaneGeometry(0.15, 0.1);
    const bfMat = new THREE.MeshBasicMaterial({ color: 0xffa0d0, side: THREE.DoubleSide });
    this._butterflies = new THREE.InstancedMesh(bfGeo, bfMat, bfCount);
    this._butterflyData = [];
    for (let i = 0; i < bfCount; i++) {
      this._butterflyData.push({
        x: -10 + Math.random() * 30,
        z: -10 + Math.random() * -100,
        baseY: 1.2 + Math.random() * 1.5,
        y: 1.2,
        phase: Math.random() * Math.PI * 2,
        speed: 0.5 + Math.random() * 0.8,
      });
    }
    this._butterflies.userData.dynamic = true;
    this.scene.add(this._butterflies);

    // Fireflies near shrine
    const ffCount = 20;
    const ffGeo = new THREE.SphereGeometry(0.04, 4, 4);
    const ffMat = new THREE.MeshBasicMaterial({ color: 0xc0ff80 });
    this._fireflies = new THREE.InstancedMesh(ffGeo, ffMat, ffCount);
    this._fireflyData = [];
    const shrineT = 0.64;
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
      [-18, 20, -2, 2.8],
      [12, 22, -8, 3.2],
      [-10, 24, -22, 2.6],
      [24, 21, -18, 3.0],
      [-24, 23, 2, 2.4],
      [6, 25, -28, 2.8],
      [-14, 20, -38, 3.1],
      [18, 22, -42, 2.6],
      [0, 26, -14, 3.6],
      [26, 21, -55, 2.9],
      [-22, 24, -65, 2.7],
      [10, 25, -72, 3.2],
      [32, 22, -50, 2.6],
      [-8, 23, -95, 2.8],
      [20, 24, -105, 3.0],
      [-28, 21, -115, 2.6],
      [14, 25, -128, 2.9],
      [-32, 19, -48, 2.5],
      [8, 28, -88, 2.7],
      [30, 20, -108, 3.1],
      [-16, 27, -78, 2.6],
      [22, 23, -32, 2.8],
      [-40, 19, -25, 3.4],
      [38, 20, -35, 3.0],
      [-35, 18, -60, 3.2],
      [42, 21, -75, 2.9],
      [-45, 19, -90, 3.1],
      [36, 20, -120, 2.8],
      [0, 19, -55, 3.5],
      [-20, 18, -130, 3.0],
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
    sun.shadow.mapSize.set(2048, 2048);
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
    [[-3, 2.5, -10], [-5, 2.5, -22], [4, 2.5, -34]].forEach(([x, y, z]) => {
      const pl = new THREE.PointLight(0xffc878, 0.28, 12);
      pl.position.set(x, y, z);
      this.scene.add(pl);
    });

    const harborLight = new THREE.PointLight(0x90d0e0, 0.3, 22);
    harborLight.position.set(22, 3, -95);
    this.scene.add(harborLight);

    const marketLight = new THREE.PointLight(0xffc878, 0.25, 14);
    marketLight.position.set(6, 3, -48);
    this.scene.add(marketLight);

    const shrineLight = new THREE.PointLight(0xc0a0e0, 0.22, 14);
    shrineLight.position.set(-8, 3, -68);
    this.scene.add(shrineLight);
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
