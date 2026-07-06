import * as THREE from 'three';
import { createToonMaterial, createOutlinedMesh, createSoftOutlinedMesh, createGrassTexture, createVendingDisplayTexture, createWaterMaterial, PALETTE, nextFrame } from './materials.js';
import { snapToGround } from './loaders/ModelLoader.js';

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
  if (group.userData.isLoadedModel) snapToGround(group, y);
  return group;
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

function createBuilding(width, depth, height, wallColor, roofColor, style = 'house') {
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
    const awningColor  = awningColors[Math.floor(wallColor) % awningColors.length];
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
      new THREE.MeshStandardMaterial({
        map: displayTex,
        emissive: new THREE.Color(0x306878),
        emissiveIntensity: 0.35,
        roughness: 0.25,
        metalness: 0.05,
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
      new THREE.MeshStandardMaterial({
        map: displayTex,
        emissive: new THREE.Color(0x306878),
        emissiveIntensity: 0.42,
        roughness: 0.18,
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
      new THREE.MeshStandardMaterial({
        color: 0x90d0e8,
        emissive: new THREE.Color(0x4098b8),
        emissiveIntensity: 0.45,
        transparent: true,
        opacity: 0.55,
        roughness: 0.2,
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

function createUtilityPole() {
  const group = new THREE.Group();
  const pole = createOutlinedMesh(
    new THREE.CylinderGeometry(0.07, 0.09, 4.5, 6),
    createToonMaterial(0x6a5a4a),
  );
  pole.position.y = 2.25;
  group.add(pole);

  const crossbar = createOutlinedMesh(
    new THREE.BoxGeometry(1.2, 0.06, 0.06),
    createToonMaterial(0x6a5a4a),
  );
  crossbar.position.y = 4.0;
  group.add(crossbar);

  const sign = createOutlinedMesh(
    new THREE.CircleGeometry(0.22, 12),
    createToonMaterial(0x3080c0),
  );
  sign.position.set(0, 3.2, 0.12);
  group.add(sign);

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

function createCloud(x, y, z, scale) {
  const group = new THREE.Group();
  const mat = createToonMaterial(PALETTE.skyCloud);
  [[0, 0, 0, 1], [-0.5, 0.1, 0, 0.7], [0.5, 0.05, 0.1, 0.8], [0, -0.1, 0.2, 0.6]].forEach(
    ([ox, oy, oz, s]) => {
      const puff = new THREE.Mesh(new THREE.SphereGeometry(0.8 * s, 8, 6), mat);
      puff.position.set(ox * scale, oy * scale, oz * scale);
      group.add(puff);
    },
  );
  group.position.set(x, y, z);
  group.scale.setScalar(scale);
  group.userData.driftSpeed = 0.15 + Math.random() * 0.2;
  group.userData.driftPhase = Math.random() * Math.PI * 2;
  group.userData.dynamic = true;
  return group;
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
  );
  if (mesh.userData?.isLoadedModel) {
    mesh.rotation.y = -Math.PI / 2;
  }
  group.add(mesh);
  return group;
}

function createModelShop(modelKey, targetHeight, labelJa, labelEn, signColor, signDepth = 2.0) {
  const group = new THREE.Group();
  const building = createPathBuilding(
    modelKey, targetHeight, 3, 3, targetHeight, 0xe8e0d0, 0x6a5040, 'shop',
  );
  group.add(building);
  const sign = createShopSign(labelJa, labelEn, signColor, targetHeight * 0.72);
  sign.position.set(0, 0, signDepth);
  group.add(sign);
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
  const cafe = createModelShop('shop_a', 3.0, '喫茶 木漏れ', 'Komorebi Cafe', 0x6a5040, 1.8);
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
  const shop = createModelShop('shop_b', 2.8, '魚屋 水樹', 'Mizuki Fish', 0x4080a0, 1.7);
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
    this.path = this._createPath();
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
      water.material.color.setHex(0x4a90b0);
      water.material.color.multiplyScalar(wave);
      water.material.opacity = 0.84 + Math.sin(elapsed * 1.1 + i) * 0.06;
    });

    // Animate falling cherry petals
    if (this._petals) {
      this._petals.forEach((p) => {
        const v = p.userData.vel;
        // Gentle drift
        p.position.x += (v.x + Math.sin(elapsed * 0.7 + p.position.z) * 0.12) * dt;
        p.position.y += v.y * dt;
        p.position.z += (v.z + Math.cos(elapsed * 0.5 + p.position.x) * 0.08) * dt;
        p.rotation.z += p.userData.spin * dt;
        p.rotation.x += p.userData.spin * 0.5 * dt;
        // Reset when fallen below ground
        if (p.position.y < -0.5) {
          p.position.y = p.userData.resetY;
          p.position.x = -8 + Math.random() * 24;
          p.position.z = -2 + Math.random() * -120;
        }
      });
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
    this.scene.fog = new THREE.Fog(0xd0e4f4, 75, 190);
    this.scene.background = new THREE.Color(0xa0cce8);

    const skyGeo = new THREE.SphereGeometry(220, 24, 16);
    const skyCanvas = document.createElement('canvas');
    skyCanvas.width = 1; skyCanvas.height = 64;
    const skyCtx = skyCanvas.getContext('2d');
    const grad = skyCtx.createLinearGradient(0, 0, 0, 64);
    grad.addColorStop(0,   '#4a88c0');
    grad.addColorStop(0.4, '#88b8d8');
    grad.addColorStop(0.72, '#c8e0f0');
    grad.addColorStop(0.9, '#f0dcc8');
    grad.addColorStop(1,   '#f8e4d0');
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
    const mat = new THREE.MeshBasicMaterial({ color: 0xffb8cc, side: THREE.DoubleSide });
    const petals = [];
    for (let i = 0; i < count; i++) {
      const petal = new THREE.Mesh(new THREE.PlaneGeometry(0.12, 0.09), mat);
      // Random positions centred on the cherry blossom area of the town
      petal.position.set(
        -8 + Math.random() * 24,
        1.5 + Math.random() * 5,
        -2 + Math.random() * -120,
      );
      petal.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      petal.userData.dynamic = true;
      petal.userData.vel = new THREE.Vector3(
        (Math.random() - 0.5) * 0.3,
        -(0.25 + Math.random() * 0.35),
        (Math.random() - 0.5) * 0.2,
      );
      petal.userData.spin = (Math.random() - 0.5) * 2.5;
      petal.userData.resetY = 4 + Math.random() * 5;
      this.scene.add(petal);
      petals.push(petal);
    }
    this._petals = petals;
  }

  _createBackdrop() {
    // Sky + fog only — distant hills handled in _createEdgeBackdrop.
  }

  _createEdgeBackdrop() {
    const mat = createToonMaterial(0x6a8a7a, { roughness: 0.95 });
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
      createToonMaterial(PALETTE.green, { map: grassTex, roughness: 0.92 }),
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.set(2, -0.06, -52);
    ground.receiveShadow = true;
    this.scene.add(ground);
    this.groundMeshes.push(ground);

    const meadow = new THREE.Mesh(
      new THREE.PlaneGeometry(420, 420),
      createToonMaterial(PALETTE.meadow, { map: grassTex, roughness: 0.9 }),
    );
    meadow.rotation.x = -Math.PI / 2;
    meadow.position.set(2, -0.055, -52);
    this.scene.add(meadow);

    const patches = [
      [-14, -6, 5, 4, 0x6a9a6a],
      [10, -16, 6, 5, 0x7aaa7a],
      [-8, -30, 7, 6, 0x5a8a5a],
      [16, -44, 9, 7, 0x6a9a8a],
      [20, -58, 12, 9, 0x5a8a6a],
      [-12, -52, 6, 5, 0x7aaa7a],
      [10, -74, 14, 10, 0x6aba7a],
      [-10, -86, 9, 7, 0x6a9a7a],
      [-18, -105, 11, 8, 0x5a9a6a],
      [14, -112, 10, 9, 0x6aaa8a],
      [22, -125, 14, 10, 0x5a8a8a],
      [-6, -128, 8, 7, 0x7a9a7a],
      [8, 8, 6, 5, 0x7aaa7a],
      [-10, 4, 5, 4, 0x6a9a68],
    ];
    patches.forEach(([x, z, w, d, color]) => {
      const patch = new THREE.Mesh(
        new THREE.PlaneGeometry(w, d),
        createToonMaterial(color, { roughness: 0.88 }),
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
        createToonMaterial(PALETTE.gravel, { roughness: 0.95 }),
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
      this.path, roadHalf, 0.08, createToonMaterial(PALETTE.road, { roughness: 0.78 }), 0, 200,
    );
    this.scene.add(road);
    this.groundMeshes.push(road);

    const sidewalkMat = createToonMaterial(PALETTE.sidewalk);
    const leftWalk = createPathRibbon(this.path, sidewalkHalf, 0.09, sidewalkMat, -sidewalkOffset, 200);
    const rightWalk = createPathRibbon(this.path, sidewalkHalf, 0.09, sidewalkMat, sidewalkOffset, 200);
    this.scene.add(leftWalk, rightWalk);
    this.groundMeshes.push(leftWalk, rightWalk);

    const curbMat = createToonMaterial(0x989080);
    const leftCurb = createPathRibbon(this.path, 0.06, 0.1, curbMat, -(roadHalf + 0.12), 200);
    const rightCurb = createPathRibbon(this.path, 0.06, 0.1, curbMat, roadHalf + 0.12, 200);
    this.scene.add(leftCurb, rightCurb);

    const points = this.path.getSpacedPoints(200);
    const lineMat = createToonMaterial(PALETTE.roadLine);
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
    const buildingDefs = [
      { t: 0.03, side: 1, modelKey: 'building_d', height: 3.0, w: 3, d: 4, h: 3.5, wall: PALETTE.wall, roof: PALETTE.roof, style: 'house' },
      { t: 0.06, side: -1, modelKey: 'shop_a', height: 2.8, w: 3.5, d: 3, h: 3.4, wall: 0xe8e0d0, roof: 0x6a5040, style: 'shop' },
      { t: 0.11, side: 1, modelKey: 'building_b', height: 3.6, w: 3.5, d: 3, h: 4.2, wall: 0xc8d0c0, roof: 0x5a7a6a, style: 'apartment' },
      { t: 0.17, side: -1, modelKey: 'building_a', height: 3.4, w: 5, d: 4, h: 4.5, wall: PALETTE.wallDark, roof: PALETTE.roof, style: 'house' },
      { t: 0.24, side: 1, modelKey: 'shop_b', height: 2.7, w: 3, d: 3.5, h: 3.2, wall: 0xe0d8c8, roof: 0x6a9a7a, style: 'shop' },
      { t: 0.31, side: -1, modelKey: 'building_c', height: 3.2, w: 4, d: 3, h: 3.8, wall: 0xd8d0c0, roof: PALETTE.roofDark, style: 'apartment' },
      { t: 0.38, side: 1, modelKey: 'building_d', height: 3.0, w: 3.5, d: 4, h: 3.5, wall: PALETTE.wall, roof: PALETTE.roof, style: 'house' },
      { t: 0.44, side: -1, modelKey: 'shop_c', height: 2.6, w: 4.5, d: 3.5, h: 4.2, wall: 0xc0b8a8, roof: 0x5a8a6a, style: 'shop' },
      { t: 0.52, side: 1, modelKey: 'building_a', height: 3.4, w: 4, d: 3.5, h: 3.6, wall: 0xf0e8d8, roof: PALETTE.roofDark, style: 'house' },
      { t: 0.58, side: -1, modelKey: 'shop_d', height: 2.5, w: 3.5, d: 3, h: 3.2, wall: 0xd0c8b8, roof: PALETTE.roof, style: 'shop' },
      { t: 0.64, side: 1, modelKey: 'building_c', height: 3.0, w: 3, d: 3, h: 3.0, wall: 0xe8e0d0, roof: PALETTE.roofDark, style: 'house' },
      { t: 0.70, side: -1, modelKey: 'building_b', height: 3.4, w: 4, d: 3.5, h: 3.6, wall: 0xd0c8b8, roof: PALETTE.roof, style: 'apartment' },
      { t: 0.76, side: 1, modelKey: 'building_d', height: 3.0, w: 3.5, d: 3.2, h: 3.4, wall: 0xd8e0d0, roof: 0x6a8a7a, style: 'house' },
      { t: 0.82, side: -1, modelKey: 'building_a', height: 3.4, w: 4.2, d: 3.8, h: 3.8, wall: 0xc8c0b0, roof: PALETTE.roofDark, style: 'house' },
      { t: 0.88, side: 1, modelKey: 'building_c', height: 3.0, w: 3.2, d: 3, h: 3.2, wall: 0xe0d8c8, roof: PALETTE.roof, style: 'apartment' },
      { t: 0.94, side: -1, modelKey: 'shop_a', height: 2.8, w: 4, d: 3.5, h: 3.5, wall: 0xc8d0d8, roof: 0x5080a0, style: 'shop' },
    ];

    buildingDefs.forEach(({ t, side, modelKey, height, w, d, h, wall, roof, style }) => {
      const pos = this.path.getPointAt(t);
      const tangent = this.path.getTangentAt(t);
      const perp = new THREE.Vector3(-tangent.z, 0, tangent.x).multiplyScalar(side);

      const building = createPathBuilding(modelKey, height, w, d, h, wall, roof, style);
      building.position.copy(pos).add(perp.multiplyScalar(5));
      building.lookAt(
        building.position.x + tangent.x,
        building.position.y,
        building.position.z + tangent.z,
      );
      this.scene.add(building);

      const fence = withModel('fence_low', 0.55, () => null, { rotationY: Math.PI });
      if (fence) {
        fence.position.copy(pos).add(perp.clone().normalize().multiplyScalar(3.4));
        fence.lookAt(
          fence.position.x + tangent.x,
          fence.position.y,
          fence.position.z + tangent.z,
        );
        this.scene.add(fence);
      }
    });
  }

  _createLandmarks() {
    const shrine = createShrine();
    placeAlongPath(shrine, this.path, 0.64, 1, 7.5);
    this.scene.add(shrine);
    this._recordSpawn('shrine', shrine.position, shrine.rotation.y);

    const steps = createStoneSteps(5);
    placeAlongPath(steps, this.path, 0.62, 1, 5.5);
    this.scene.add(steps);

    const torii = createTorii();
    placeAlongPath(torii, this.path, 0.36, -1, 6);
    this.scene.add(torii);

    const garden = createGardenPatch();
    placeAlongPath(garden, this.path, 0.14, 1, 7);
    this.scene.add(garden);

    const lookout = createLookoutDeck();
    placeAlongPath(lookout, this.path, 0.86, -1, 6.5);
    this.scene.add(lookout);

    const pier = createHarborPier();
    placeAlongPath(pier, this.path, 0.97, 1, 5);
    pier.rotation.y += Math.PI / 6;
    this.scene.add(pier);

    const harborTorii = createTorii();
    placeAlongPath(harborTorii, this.path, 0.93, -1, 7);
    harborTorii.scale.setScalar(0.65);
    this.scene.add(harborTorii);

    const park = createParkGazebo();
    placeAlongPath(park, this.path, 0.80, 1, 8);
    this.scene.add(park);
  }

  _createShopsAndPlaces() {
    const bookshop = createModelShop('shop_b', 3.0, '書店 文房', 'Bunbou Books', 0x8060a0, 1.8);
    placeAlongPath(bookshop, this.path, 0.08, -1, 5.5);
    this.scene.add(bookshop);
    this._recordSpawn('shop_bookshop', bookshop.position, bookshop.rotation.y);

    const ramen = createModelShop('shop_c', 2.8, '麺処 山田', 'Yamada Ramen', 0xc04040, 1.7);
    placeAlongPath(ramen, this.path, 0.22, 1, 5.8);
    this.scene.add(ramen);
    this._recordSpawn('shop_ramen', ramen.position, ramen.rotation.y);

    const florist = createModelShop('shop_d', 2.6, '花屋 はな', 'Hana Florist', 0xe08090, 1.6);
    placeAlongPath(florist, this.path, 0.50, -1, 5.5);
    this.scene.add(florist);
    this._recordSpawn('shop_florist', florist.position, florist.rotation.y);

    const cafe = createCafePatio();
    placeAlongPath(cafe, this.path, 0.46, 1, 6.5);
    this.scene.add(cafe);
    this._recordSpawn('shop_cafe', cafe.position, cafe.rotation.y);

    const market = createMarketStalls();
    placeAlongPath(market, this.path, 0.54, -1, 7);
    this.scene.add(market);
    this._recordSpawn('shop_market', market.position, market.rotation.y);

    const fishMarket = createFishMarket();
    placeAlongPath(fishMarket, this.path, 0.95, -1, 6);
    this.scene.add(fishMarket);
    this._recordSpawn('shop_fishmarket', fishMarket.position, fishMarket.rotation.y);
  }

  _createProps() {
    const props = [
      { t: 0.06, side: -1, type: 'vending', offset: 2.8, color: PALETTE.vending },
      { t: 0.10, side: 1, type: 'mailbox', offset: 2.5 },
      { t: 0.16, side: -1, type: 'mirror', offset: 2.2 },
      { t: 0.20, side: 1, type: 'cone', offset: 2.0 },
      { t: 0.28, side: -1, type: 'vending', offset: 2.8, color: 0x4060a0 },
      { t: 0.36, side: 1, type: 'kiosk', offset: 2.6 },
      { t: 0.44, side: -1, type: 'bicycle', offset: 2.3 },
      { t: 0.50, side: 1, type: 'vending', offset: 2.8, color: 0xc04060 },
      { t: 0.58, side: -1, type: 'lantern', offset: 2.4 },
      { t: 0.64, side: 1, type: 'cone', offset: 2.0 },
      { t: 0.70, side: -1, type: 'utility', offset: 2.5 },
      { t: 0.76, side: 1, type: 'mailbox', offset: 2.5 },
      { t: 0.82, side: -1, type: 'mirror', offset: 2.2 },
      { t: 0.88, side: 1, type: 'vending', offset: 2.8, color: 0x4080a0 },
      { t: 0.94, side: -1, type: 'bicycle', offset: 2.4 },
    ];

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
        case 'bicycle':
          prop = createBicycle();
          break;
        case 'lantern': {
          prop = createLantern();
          const lanternPart = prop.userData.lanternMesh;
          if (lanternPart) this.lanterns.push(lanternPart);
          break;
        }
        case 'utility':
          prop = createUtilityPole();
          break;
        default:
          return;
      }

      placeAlongPath(prop, this.path, t, side, offset);

      // Vending machines should face the road, not run parallel to it
      if (type === 'vending') {
        const roadCenter = this.path.getPointAt(t);
        prop.lookAt(roadCenter.x, prop.position.y, roadCenter.z);
        this.vendingMachines.push(prop);
        this._recordSpawn('vending', prop.position, prop.rotation.y);
      }

      this.scene.add(prop);
    });
  }

  _createStreetFurniture() {
    const furniture = [
      { t: 0.12, side: 1, type: 'bench', offset: 2.2, benchVariant: 'normal' },
      { t: 0.24, side: -1, type: 'bollard', offset: 2.0 },
      { t: 0.26, side: -1, type: 'bollard', offset: 2.4 },
      { t: 0.34, side: 1, type: 'plant', offset: 2.1 },
      { t: 0.36, side: 1, type: 'plant', offset: 2.5 },
      { t: 0.48, side: -1, type: 'bench', offset: 2.3, benchVariant: 'cushion' },
      { t: 0.68, side: -1, type: 'lantern', offset: 2.3 },
      { t: 0.74, side: 1, type: 'bench', offset: 2.2, benchVariant: 'normal' },
      { t: 0.84, side: -1, type: 'plant', offset: 2.2 },
      { t: 0.62, side: 1, type: 'plant', offset: 2.4 },
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
        case 'lantern': {
          item = createLantern();
          const lanternPart = item.userData.lanternMesh;
          if (lanternPart) this.lanterns.push(lanternPart);
          break;
        }
        default:
          return;
      }
      placeAlongPath(item, this.path, t, side, offset);
      this.scene.add(item);
      if (type === 'bench') {
        this._recordSpawn('bench', item.position, item.rotation.y);
      }
    });
  }

  _createVegetation() {
    const treeSpots = [
      { t: 0.08, side: 1, dist: 9.5, variant: 'cherry' },
      { t: 0.16, side: -1, dist: 10, variant: 'normal' },
      { t: 0.28, side: 1, dist: 9.5, variant: 'pine' },
      { t: 0.38, side: -1, dist: 10.5, variant: 'cherry' },
      { t: 0.48, side: 1, dist: 9.5, variant: 'normal' },
      { t: 0.58, side: -1, dist: 10, variant: 'pine' },
      { t: 0.68, side: 1, dist: 10.5, variant: 'cherry' },
      { t: 0.78, side: -1, dist: 9.5, variant: 'normal' },
      { t: 0.86, side: 1, dist: 10, variant: 'pine' },
      { t: 0.94, side: -1, dist: 11, variant: 'normal' },
    ];

    treeSpots.forEach(({ t, side, dist, variant }) => {
      const pos = this.path.getPointAt(t);
      const tangent = this.path.getTangentAt(t);
      const perp = new THREE.Vector3(-tangent.z, 0, tangent.x).multiplyScalar(side);
      const tree = createTree(variant);
      tree.position.copy(pos).add(perp.multiplyScalar(dist));
      snapToGround(tree, 0);
      this.scene.add(tree);
      if (variant === 'cherry') {
        this._recordSpawn('cherry_tree', tree.position);
      } else if (variant === 'pine' && t > 0.55 && t < 0.65) {
        this._recordSpawn('shrine_tree', tree.position);
      }
    });

    for (let i = 0; i < 16; i++) {
      const t = 0.04 + Math.random() * 0.92;
      const pos = this.path.getPointAt(t);
      const tangent = this.path.getTangentAt(t);
      const side = Math.random() > 0.5 ? 1 : -1;
      const perp = new THREE.Vector3(-tangent.z, 0, tangent.x).multiplyScalar(side);
      const tree = createTree('normal');
      tree.position.copy(pos).add(perp.multiplyScalar(9 + Math.random() * 4));
      tree.scale.setScalar(0.75 + Math.random() * 0.35);
      snapToGround(tree, 0);
      this.scene.add(tree);
    }

    [0.22, 0.48, 0.72, 0.88].forEach((t) => {
      const bamboo = createBambooCluster();
      placeAlongPath(bamboo, this.path, t, 1, 8 + Math.random() * 2);
      this.scene.add(bamboo);
    });
  }

  _createSceneryDecor() {
    if (!this.modelLoader) return;

    const decor = [
      { t: 0.10, side: 1, key: 'rock', offset: 10.5, height: 0.45 },
      { t: 0.14, side: 1, key: 'bush', offset: 10.2, height: 0.6 },
      { t: 0.26, side: -1, key: 'rock', offset: 11, height: 0.5 },
      { t: 0.30, side: -1, key: 'bush', offset: 10.8, height: 0.58 },
      { t: 0.42, side: 1, key: 'bush', offset: 10.5, height: 0.62 },
      { t: 0.44, side: 1, key: 'rock', offset: 11.2, height: 0.42 },
      { t: 0.56, side: -1, key: 'bush', offset: 10.6, height: 0.55 },
      { t: 0.58, side: -1, key: 'decoration', offset: 10.3, height: 0.35 },
      { t: 0.66, side: 1, key: 'decoration', offset: 10.2, height: 0.32 },
      { t: 0.72, side: -1, key: 'rock', offset: 11.5, height: 0.48 },
      { t: 0.80, side: 1, key: 'bush', offset: 10.4, height: 0.6 },
      { t: 0.84, side: -1, key: 'bush', offset: 10.7, height: 0.52 },
      { t: 0.90, side: 1, key: 'rock', offset: 11.3, height: 0.4 },
      { t: 0.92, side: -1, key: 'decoration', offset: 10.5, height: 0.3 },
    ];

    decor.forEach(({ t, side, key, offset, height, scale = 1 }) => {
      const item = this.modelLoader.createInstance(key, { targetHeight: height, scale });
      if (!item) return;
      placeAlongPath(item, this.path, t, side, offset);
      this.scene.add(item);
    });

    const bgFiller = [
      { x: -38, z: -28, key: 'shop_d', h: 2.2, ry: 0.4 },
      { x: 40, z: -42, key: 'building_d', h: 2.4, ry: -0.5 },
      { x: -44, z: -68, key: 'shop_c', h: 2.0, ry: 0.2 },
      { x: 42, z: -95, key: 'building_c', h: 2.3, ry: -0.3 },
      { x: -36, z: -118, key: 'shop_b', h: 2.1, ry: 0.6 },
    ];
    bgFiller.forEach(({ x, z, key, h, ry }) => {
      const b = this.modelLoader.createInstance(key, { targetHeight: h });
      if (!b) return;
      b.position.set(x, 0, z);
      b.rotation.y = ry;
      this.scene.add(b);
    });
  }

  _createClouds() {
    const cloudPositions = [
      [-18, 20, -2, 2.2],
      [12, 22, -8, 2.6],
      [-10, 24, -22, 2],
      [24, 21, -18, 2.4],
      [-24, 23, 2, 1.8],
      [6, 25, -28, 2.2],
      [-14, 20, -38, 2.5],
      [18, 22, -42, 2],
      [0, 26, -14, 3],
      [26, 21, -55, 2.3],
      [-22, 24, -65, 2.1],
      [10, 25, -72, 2.6],
      [32, 22, -50, 2],
      [-8, 23, -95, 2.2],
      [20, 24, -105, 2.4],
      [-28, 21, -115, 2],
      [14, 25, -128, 2.3],
    ];
    cloudPositions.forEach(([x, y, z, s]) => {
      const cloud = createCloud(x, y, z, s);
      this.scene.add(cloud);
      this.animatedClouds.push(cloud);
    });
  }

  _createLighting() {
    const hemi = new THREE.HemisphereLight(0xc8e8ff, 0x5a8a5a, 0.9);
    this.scene.add(hemi);

    const sun = new THREE.DirectionalLight(0xfff4d0, 1.22);
    sun.position.set(22, 32, 14);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.camera.near = 0.5;
    sun.shadow.camera.far = 220;
    sun.shadow.camera.left   = -85;
    sun.shadow.camera.right  = 85;
    sun.shadow.camera.top    = 85;
    sun.shadow.camera.bottom = -150;
    sun.shadow.bias = -0.0004;
    sun.shadow.normalBias = 0.02;
    this.scene.add(sun);
    this.sun = sun;

    const fill = new THREE.DirectionalLight(0xb8d8f8, 0.68);
    fill.position.set(-18, 14, -10);
    this.scene.add(fill);

    const ambient = new THREE.AmbientLight(0xe0ece8, 0.26);
    this.scene.add(ambient);

    // Street-level warm point lights along the road
    [[-3, 2.5, -10], [-5, 2.5, -22], [4, 2.5, -34], [-2, 2.5, -46], [6, 2.5, -62], [3, 2.5, -88]].forEach(([x, y, z]) => {
      const pl = new THREE.PointLight(0xffa858, 0.55, 14);
      pl.position.set(x, y, z);
      this.scene.add(pl);
    });

    const harborLight = new THREE.PointLight(0x80c8e8, 0.55, 26);
    harborLight.position.set(22, 3, -95);
    this.scene.add(harborLight);

    const harborLight2 = new THREE.PointLight(0x70b8d8, 0.45, 22);
    harborLight2.position.set(28, 3, -118);
    this.scene.add(harborLight2);

    const marketLight = new THREE.PointLight(0xffb868, 0.48, 18);
    marketLight.position.set(6, 3, -48);
    this.scene.add(marketLight);

    const shrineLight = new THREE.PointLight(0xb890e8, 0.42, 16);
    shrineLight.position.set(-8, 3, -68);
    this.scene.add(shrineLight);

    const coastLight = new THREE.PointLight(0xa0d0f0, 0.4, 20);
    coastLight.position.set(12, 3, -128);
    this.scene.add(coastLight);
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
