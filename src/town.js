import * as THREE from 'three';
import { createToonMaterial, createOutlinedMesh, PALETTE, nextFrame } from './materials.js';

function placeAlongPath(group, path, t, side, offset, y = 0) {
  const pos = path.getPointAt(t);
  const tangent = path.getTangentAt(t);
  const perp = new THREE.Vector3(-tangent.z, 0, tangent.x).multiplyScalar(side);
  group.position.copy(pos).add(perp.multiplyScalar(offset));
  group.position.y = y;
  group.lookAt(group.position.x + tangent.x, group.position.y, group.position.z + tangent.z);
  return group;
}

function createBuilding(width, depth, height, wallColor, roofColor, style = 'house') {
  const group = new THREE.Group();
  const wallMat  = createToonMaterial(wallColor);
  const roofMat  = createToonMaterial(roofColor);
  const faceZ    = depth / 2;  // front-face Z offset

  // ── main walls ──────────────────────────────────────────────────────────────
  const walls = createOutlinedMesh(new THREE.BoxGeometry(width, height, depth), wallMat);
  walls.position.y = height / 2;
  group.add(walls);

  // Ground-floor band (slightly darker)
  const bandH = Math.min(1.4, height * 0.35);
  const band = createOutlinedMesh(
    new THREE.BoxGeometry(width + 0.02, bandH, depth + 0.02),
    createToonMaterial(new THREE.Color(wallColor).offsetHSL(0, 0, -0.08).getHex()),
  );
  band.position.y = bandH / 2;
  group.add(band);

  // Horizontal floor-separation strips
  const floors = style === 'apartment' ? Math.max(2, Math.round(height / 1.6)) : 1;
  for (let f = 1; f < floors; f++) {
    const strip = createOutlinedMesh(
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
    const dispFrame = createOutlinedMesh(
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
    const doorFrame = createOutlinedMesh(
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
    const awningColors = [0xc84040, 0x4060c0, 0x408040, 0xc09030];
    const awningColor  = awningColors[Math.floor(Math.random() * awningColors.length)];
    const awning = createOutlinedMesh(
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
    const door = createOutlinedMesh(
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
    const plate = createOutlinedMesh(
      new THREE.BoxGeometry(0.3, 0.14, 0.04),
      createToonMaterial(0xf0e8c0),
    );
    plate.position.set(-width * 0.2 - 0.52, 1.1, faceZ + 0.04);
    group.add(plate);
  }

  if (style === 'apartment') {
    // Central entrance
    const entryArch = createOutlinedMesh(
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
      const balcony = createOutlinedMesh(
        new THREE.BoxGeometry(width * 0.45, 0.09, 0.65),
        createToonMaterial(0x909090),
      );
      balcony.position.set(width * 0.22, by, faceZ + 0.36);
      group.add(balcony);
      const rail = createOutlinedMesh(
        new THREE.BoxGeometry(width * 0.45, 0.32, 0.05),
        createToonMaterial(0x707070),
      );
      rail.position.set(width * 0.22, by + 0.2, faceZ + 0.67);
      group.add(rail);
    }

    // A/C units on side wall
    [height * 0.35, height * 0.65].forEach((ay) => {
      const ac = createOutlinedMesh(
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
    const parapet = createOutlinedMesh(
      new THREE.BoxGeometry(width + 0.3, 0.22, depth + 0.3),
      roofMat,
    );
    parapet.position.y = height + 0.11;
    group.add(parapet);

    // Roof lip (slightly taller outer edge)
    const lip = createOutlinedMesh(
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
  const group = new THREE.Group();
  const body = createOutlinedMesh(new THREE.BoxGeometry(0.9, 1.8, 0.7), createToonMaterial(color));
  body.position.y = 0.9;
  group.add(body);

  const glass = createOutlinedMesh(
    new THREE.BoxGeometry(0.7, 1.2, 0.05),
    createToonMaterial(0x2a6a6a),
  );
  glass.position.set(0, 1.0, 0.36);
  group.add(glass);

  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 3; col++) {
      const drink = createOutlinedMesh(
        new THREE.BoxGeometry(0.12, 0.25, 0.08),
        createToonMaterial([0xe85050, 0x50a050, 0x5080e8, 0xf0c040][row]),
        1.02,
      );
      drink.position.set(-0.2 + col * 0.2, 0.55 + row * 0.28, 0.38);
      group.add(drink);
    }
  }
  return group;
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

function createBench() {
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

  const leaves = createOutlinedMesh(
    new THREE.SphereGeometry(0.22, 8, 6),
    createToonMaterial(0x4a9a4a),
  );
  leaves.position.y = 0.38;
  group.add(leaves);

  return group;
}

function createCat() {
  const group = new THREE.Group();
  const body = createOutlinedMesh(
    new THREE.SphereGeometry(0.12, 8, 6),
    createToonMaterial(0xf0a040),
  );
  body.scale.set(1.2, 0.8, 1);
  body.position.y = 0.12;
  group.add(body);

  const head = createOutlinedMesh(new THREE.SphereGeometry(0.09, 8, 6), createToonMaterial(0xf0a040));
  head.position.set(0.14, 0.18, 0);
  group.add(head);

  [[-0.04, 0.28, 0.04], [0.04, 0.28, 0.04]].forEach(([x, y, z]) => {
    const ear = createOutlinedMesh(new THREE.ConeGeometry(0.03, 0.06, 3), createToonMaterial(0xf0a040));
    ear.position.set(x + 0.14, y, z);
    group.add(ear);
  });

  return group;
}

function createPowerLines(start, end, height) {
  const group = new THREE.Group();
  const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
  mid.y = height;
  const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
  const tube = new THREE.Mesh(
    new THREE.TubeGeometry(curve, 20, 0.015, 4, false),
    createToonMaterial(0x333333),
  );
  group.add(tube);
  return group;
}

function createTree(variant = 'normal') {
  const tree = new THREE.Group();
  const trunk = createOutlinedMesh(
    new THREE.CylinderGeometry(0.08, 0.12, 0.8, 6),
    createToonMaterial(0x6a5040),
  );
  trunk.position.y = 0.4;
  tree.add(trunk);

  if (variant === 'cherry') {
    // Multiple overlapping blossom puffs with slight color variation
    const puffs = [
      [0, 1.1, 0, 0.58, 0xf0a0b8],
      [-0.32, 1.0, 0.12, 0.42, 0xf8b8cc],
      [0.32, 1.05, -0.12, 0.46, 0xf0a0c0],
      [0, 1.35, 0.18, 0.38, 0xffc0d0],
      [-0.18, 1.22, -0.22, 0.35, 0xf8aabf],
      [0.22, 1.28, 0.25, 0.32, 0xffb8cc],
    ];
    puffs.forEach(([x, y, z, s, c]) => {
      const puff = createOutlinedMesh(new THREE.SphereGeometry(s, 9, 7), createToonMaterial(c));
      puff.position.set(x, y, z);
      tree.add(puff);
    });
    // Add a few visible petal sprites hanging at the edges
    const petalMat = new THREE.MeshBasicMaterial({ color: 0xffc8d8, side: THREE.DoubleSide });
    for (let i = 0; i < 8; i++) {
      const petal = new THREE.Mesh(new THREE.PlaneGeometry(0.08, 0.06), petalMat);
      const angle = (i / 8) * Math.PI * 2;
      petal.position.set(Math.cos(angle) * 0.5, 0.9 + Math.random() * 0.3, Math.sin(angle) * 0.5);
      petal.rotation.set(Math.random(), Math.random() * Math.PI, Math.random());
      tree.add(petal);
    }
    tree.userData.isCherry = true;
  } else if (variant === 'pine') {
    [0.55, 0.4, 0.28].forEach((r, i) => {
      const layer = createOutlinedMesh(
        new THREE.ConeGeometry(r, 0.45, 6),
        createToonMaterial(0x3a7a4a),
      );
      layer.position.y = 0.85 + i * 0.35;
      tree.add(layer);
    });
  } else {
    const foliage = createOutlinedMesh(
      new THREE.SphereGeometry(0.5 + Math.random() * 0.25, 8, 6),
      createToonMaterial(0x5a9a5a + Math.floor(Math.random() * 0x050505)),
    );
    foliage.position.y = 1.1;
    tree.add(foliage);
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
  return group;
}

function createMountainBackdrop() {
  const group = new THREE.Group();
  const mat = createToonMaterial(0x7a9a9a);
  const peaks = [
    [-45, 0, -55, 9, 14],
    [-28, 0, -62, 7, 11],
    [-10, 0, -68, 11, 16],
    [8, 0, -72, 8, 13],
    [28, 0, -65, 10, 15],
    [48, 0, -58, 8, 12],
    [-35, 0, -78, 6, 10],
    [18, 0, -82, 9, 14],
    [42, 0, -75, 7, 11],
  ];
  peaks.forEach(([x, y, z, w, h]) => {
    const peak = new THREE.Mesh(new THREE.ConeGeometry(w, h, 4), mat);
    peak.position.set(x, h / 2 - 1, z);
    peak.rotation.y = Math.PI / 4;
    group.add(peak);
  });
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
    createToonMaterial(0x5a9ab8),
  );
  water.rotation.x = -Math.PI / 2;
  water.position.y = -0.08;
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
  const group = new THREE.Group();
  const mat = createToonMaterial(0x989890);
  for (let i = 0; i < count; i++) {
    const step = createOutlinedMesh(new THREE.BoxGeometry(1.8 - i * 0.1, 0.12, 0.45), mat);
    step.position.set(0, 0.06 + i * 0.12, -i * 0.4);
    group.add(step);
  }
  return group;
}

function createShrine() {
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

function createShopSign(labelJa, labelEn, boardColor = 0xc84040) {
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
  sign.position.y = 4.2;
  group.add(sign);

  const board = createOutlinedMesh(new THREE.BoxGeometry(2.0, 0.75, 0.08), createToonMaterial(boardColor));
  board.position.y = 3.6;
  group.add(board);
  return group;
}

function createNamedShop(w, d, h, wall, roof, style, labelJa, labelEn, signColor) {
  const group = new THREE.Group();
  const building = createBuilding(w, d, h, wall, roof, style);
  group.add(building);
  const sign = createShopSign(labelJa, labelEn, signColor);
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
    const awning = createOutlinedMesh(new THREE.BoxGeometry(1.8, 0.06, 1.3), createToonMaterial(colors[i]));
    awning.position.set(x, 1.05, 0.25);
    group.add(awning);
    const goods = createOutlinedMesh(
      new THREE.BoxGeometry(0.45, 0.25, 0.35),
      createToonMaterial([0xf0a040, 0xf06060, 0x80c080, 0xf0e060][i]),
    );
    goods.position.set(x, 0.92, 0.1);
    group.add(goods);
  });
  const sign = createShopSign('朝市', 'Morning Market', 0xe85050);
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
  return group;
}

function createCafePatio() {
  const group = new THREE.Group();
  const cafe = createNamedShop(3.5, 3, 3.2, 0xf0e8d8, 0x6a5040, 'shop', '喫茶 木漏れ', 'Komorebi Cafe', 0x6a5040);
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
  const shed = createOutlinedMesh(new THREE.BoxGeometry(4, 2.5, 2.5), createToonMaterial(0xc8d0d8));
  shed.position.y = 1.25;
  group.add(shed);
  const counter = createOutlinedMesh(new THREE.BoxGeometry(3.5, 0.15, 0.8), createToonMaterial(0x989080));
  counter.position.set(0, 0.8, 1.5);
  group.add(counter);
  for (let i = 0; i < 3; i++) {
    const crate = createOutlinedMesh(new THREE.BoxGeometry(0.6, 0.4, 0.5), createToonMaterial(0x806040));
    crate.position.set(-1 + i * 1, 0.2, 1.2);
    group.add(crate);
  }
  const sign = createShopSign('魚屋 水樹', 'Mizuki Fish', 0x4080a0);
  sign.position.set(0, 0, 2.0);
  group.add(sign);
  return group;
}

export class Town {
  constructor(scene) {
    this.scene = scene;
    this.groundMeshes = [];
    this.animatedClouds = [];
    this.lanterns = [];
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
      const pulse = 0.75 + Math.sin(elapsed * 2 + i) * 0.25;
      if (!lantern.userData.baseColor) {
        lantern.userData.baseColor = lantern.material.color.clone();
      }
      lantern.material.color.copy(lantern.userData.baseColor).multiplyScalar(pulse);
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
          p.position.x = -4 + Math.random() * 16;
          p.position.z = -5 + Math.random() * -35;
        }
      });
    }
  }

  _createPath() {
    const points = [
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
    ];
    return new THREE.CatmullRomCurve3(points, false, 'catmullrom', 0.5);
  }

  _createSky() {
    this.scene.fog = new THREE.Fog(0xb8dce8, 50, 160);
    this.scene.background = new THREE.Color(0xa0d0e8);

    // Gradient sky dome: horizon warm → zenith blue
    const skyGeo = new THREE.SphereGeometry(145, 16, 12);
    const skyCanvas = document.createElement('canvas');
    skyCanvas.width = 1; skyCanvas.height = 64;
    const skyCtx = skyCanvas.getContext('2d');
    const grad = skyCtx.createLinearGradient(0, 0, 0, 64);
    grad.addColorStop(0,   '#68b0d8');   // zenith — deep blue
    grad.addColorStop(0.5, '#a8d8ec');   // mid sky
    grad.addColorStop(0.8, '#d8eef8');   // horizon haze
    grad.addColorStop(1,   '#f0f0e8');   // ground-line warm
    skyCtx.fillStyle = grad;
    skyCtx.fillRect(0, 0, 1, 64);
    const skyTex = new THREE.CanvasTexture(skyCanvas);
    skyTex.mapping = THREE.EquirectangularReflectionMapping;
    const skyMat = new THREE.MeshBasicMaterial({
      map: skyTex,
      side: THREE.BackSide,
    });
    const skyDome = new THREE.Mesh(skyGeo, skyMat);
    skyDome.position.set(0, -10, -40);
    this.scene.add(skyDome);

    // Floating petal system for cherry blossom areas
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
        -4 + Math.random() * 16,
        1.5 + Math.random() * 5,
        -5 + Math.random() * -35,
      );
      petal.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
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
    this.scene.add(createMountainBackdrop());
  }

  _createGround() {
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(280, 280),
      createToonMaterial(PALETTE.green),
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.set(2, -0.05, -42);
    ground.receiveShadow = true;
    this.scene.add(ground);
    this.groundMeshes.push(ground);

    const patches = [
      [-12, -8, 4, 3, 0x6a9a6a],
      [8, -18, 5, 4, 0x8aaa7a],
      [-6, -32, 6, 5, 0x5a8a5a],
      [14, -48, 8, 6, 0x6a9a8a],
      [18, -62, 10, 8, 0x5a8aaa],
      [-10, -55, 5, 4, 0x7aaa7a],
      [8, -78, 12, 8, 0x7aba8a],
      [-8, -88, 8, 6, 0x6a9a7a],
    ];
    patches.forEach(([x, z, w, d, color]) => {
      const patch = new THREE.Mesh(
        new THREE.PlaneGeometry(w, d),
        createToonMaterial(color),
      );
      patch.rotation.x = -Math.PI / 2;
      patch.position.set(x, 0.01, z);
      this.scene.add(patch);
    });

    const harborWater = createHarborWater();
    harborWater.position.set(24, -0.08, -88);
    this.scene.add(harborWater);
    const harborWater2 = createHarborWater();
    harborWater2.position.set(20, -0.08, -96);
    harborWater2.scale.set(0.8, 1, 0.7);
    this.scene.add(harborWater2);
  }

  _createRoad() {
    const divisions = 110;
    const roadWidth = 3.5;
    const points = this.path.getSpacedPoints(divisions);
    const roadMat = createToonMaterial(PALETTE.road);
    const sidewalkMat = createToonMaterial(PALETTE.sidewalk);
    const lineMat = createToonMaterial(PALETTE.roadLine);
    const curbMat = createToonMaterial(0x989080);

    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i];
      const p1 = points[i + 1];
      const dir = new THREE.Vector3().subVectors(p1, p0).normalize();
      const perp = new THREE.Vector3(-dir.z, 0, dir.x);
      const len = p0.distanceTo(p1);
      const center = p0.clone().add(p1).multiplyScalar(0.5);

      const segment = new THREE.Mesh(new THREE.BoxGeometry(roadWidth, 0.08, len + 0.05), roadMat);
      segment.position.copy(center);
      segment.position.y = 0.02;
      segment.lookAt(p1.x, segment.position.y, p1.z);
      this.scene.add(segment);
      this.groundMeshes.push(segment);

      const sidewalkGeo = new THREE.BoxGeometry(1.5, 0.06, len + 0.05);

      [-1, 1].forEach((sign) => {
        const sidewalk = new THREE.Mesh(sidewalkGeo, sidewalkMat);
        sidewalk.position.copy(center).add(perp.clone().multiplyScalar(sign * (roadWidth / 2 + 0.75)));
        sidewalk.position.y = 0.04;
        sidewalk.lookAt(
          sidewalk.position.x + dir.x,
          sidewalk.position.y,
          sidewalk.position.z + dir.z,
        );
        this.scene.add(sidewalk);
        this.groundMeshes.push(sidewalk);

        const curb = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.1, len + 0.05), curbMat);
        curb.position.copy(center).add(perp.clone().multiplyScalar(sign * (roadWidth / 2 + 0.2)));
        curb.position.y = 0.05;
        curb.lookAt(curb.position.x + dir.x, curb.position.y, curb.position.z + dir.z);
        this.scene.add(curb);
      });

      if (i % 5 === 0) {
        const line = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.02, len * 0.35), lineMat);
        line.position.copy(center).add(perp.clone().multiplyScalar(roadWidth / 2 - 0.3));
        line.position.y = 0.07;
        line.lookAt(p1.x, line.position.y, p1.z);
        this.scene.add(line);
      }

      if (i % 14 === 7) {
        const cover = new THREE.Mesh(
          new THREE.CylinderGeometry(0.25, 0.25, 0.03, 10),
          createToonMaterial(0x505050),
        );
        cover.position.copy(center);
        cover.position.y = 0.07;
        this.scene.add(cover);
      }
    }
  }

  _createBuildings() {
    const buildingDefs = [
      { t: 0.03, side: 1, w: 3, d: 4, h: 3.5, wall: PALETTE.wall, roof: PALETTE.roof, style: 'house' },
      { t: 0.06, side: -1, w: 3.5, d: 3, h: 3.4, wall: 0xe8e0d0, roof: 0x6a5040, style: 'shop' },
      { t: 0.11, side: 1, w: 3.5, d: 3, h: 4.2, wall: 0xc8d0c0, roof: 0x5a7a6a, style: 'apartment' },
      { t: 0.17, side: -1, w: 5, d: 4, h: 4.5, wall: PALETTE.wallDark, roof: PALETTE.roof, style: 'house' },
      { t: 0.24, side: 1, w: 3, d: 3.5, h: 3.2, wall: 0xe0d8c8, roof: 0x6a9a7a, style: 'shop' },
      { t: 0.31, side: -1, w: 4, d: 3, h: 3.8, wall: 0xd8d0c0, roof: PALETTE.roofDark, style: 'apartment' },
      { t: 0.38, side: 1, w: 3.5, d: 4, h: 3.5, wall: PALETTE.wall, roof: PALETTE.roof, style: 'house' },
      { t: 0.44, side: -1, w: 4.5, d: 3.5, h: 4.2, wall: 0xc0b8a8, roof: 0x5a8a6a, style: 'shop' },
      { t: 0.52, side: 1, w: 4, d: 3.5, h: 3.6, wall: 0xf0e8d8, roof: PALETTE.roofDark, style: 'house' },
      { t: 0.58, side: -1, w: 3.5, d: 3, h: 3.2, wall: 0xd0c8b8, roof: PALETTE.roof, style: 'shop' },
      { t: 0.64, side: 1, w: 3, d: 3, h: 3.0, wall: 0xe8e0d0, roof: PALETTE.roofDark, style: 'house' },
      { t: 0.70, side: -1, w: 4, d: 3.5, h: 3.6, wall: 0xd0c8b8, roof: PALETTE.roof, style: 'apartment' },
      { t: 0.76, side: 1, w: 3.5, d: 3.2, h: 3.4, wall: 0xd8e0d0, roof: 0x6a8a7a, style: 'house' },
      { t: 0.82, side: -1, w: 4.2, d: 3.8, h: 3.8, wall: 0xc8c0b0, roof: PALETTE.roofDark, style: 'house' },
      { t: 0.88, side: 1, w: 3.2, d: 3, h: 3.2, wall: 0xe0d8c8, roof: PALETTE.roof, style: 'apartment' },
      { t: 0.94, side: -1, w: 4, d: 3.5, h: 3.5, wall: 0xc8d0d8, roof: 0x5080a0, style: 'shop' },
    ];

    buildingDefs.forEach(({ t, side, w, d, h, wall, roof, style }) => {
      const pos = this.path.getPointAt(t);
      const tangent = this.path.getTangentAt(t);
      const perp = new THREE.Vector3(-tangent.z, 0, tangent.x).multiplyScalar(side);

      const building = createBuilding(w, d, h, wall, roof, style);
      building.position.copy(pos).add(perp.multiplyScalar(5));
      building.lookAt(
        building.position.x + tangent.x,
        building.position.y,
        building.position.z + tangent.z,
      );
      this.scene.add(building);

      const wallMesh = createOutlinedMesh(
        new THREE.BoxGeometry(0.15, 0.8, 3),
        createToonMaterial(PALETTE.sidewalk),
      );
      wallMesh.position.copy(pos).add(perp.clone().normalize().multiplyScalar(3.2));
      wallMesh.position.y = 0.4;
      wallMesh.lookAt(
        wallMesh.position.x + tangent.x,
        wallMesh.position.y,
        wallMesh.position.z + tangent.z,
      );
      this.scene.add(wallMesh);
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
    const bookshop = createNamedShop(3, 3.2, 3.4, 0xf0e8f8, 0x6a5040, 'shop', '書店 文房', 'Bunbou Books', 0x8060a0);
    placeAlongPath(bookshop, this.path, 0.08, -1, 5.5);
    this.scene.add(bookshop);
    this._recordSpawn('shop_bookshop', bookshop.position, bookshop.rotation.y);

    const ramen = createNamedShop(3.5, 3, 3.2, 0xf0e0c8, 0xc04040, 'shop', '麺処 山田', 'Yamada Ramen', 0xc04040);
    placeAlongPath(ramen, this.path, 0.22, 1, 5.8);
    this.scene.add(ramen);
    this._recordSpawn('shop_ramen', ramen.position, ramen.rotation.y);

    const florist = createNamedShop(3, 3, 3.0, 0xf0f0d8, 0xe08090, 'shop', '花屋 はな', 'Hana Florist', 0xe08090);
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
        this._recordSpawn('vending', prop.position, prop.rotation.y);
      }

      this.scene.add(prop);
    });

    const polePositions = [0.12, 0.28, 0.44, 0.60, 0.76, 0.90].map((t) => this.path.getPointAt(t));
    for (let i = 0; i < polePositions.length - 1; i++) {
      const start = polePositions[i].clone();
      start.y = 3.5;
      start.x += 4.5;
      const end = polePositions[i + 1].clone();
      end.y = 3.5;
      end.x += 4.5;
      this.scene.add(createPowerLines(start, end, 5 + (i % 2) * 0.5));
    }
  }

  _createStreetFurniture() {
    const furniture = [
      { t: 0.12, side: 1, type: 'bench', offset: 2.2 },
      { t: 0.24, side: -1, type: 'bollard', offset: 2.0 },
      { t: 0.26, side: -1, type: 'bollard', offset: 2.4 },
      { t: 0.34, side: 1, type: 'plant', offset: 2.1 },
      { t: 0.36, side: 1, type: 'plant', offset: 2.5 },
      { t: 0.48, side: -1, type: 'bench', offset: 2.3 },
      { t: 0.56, side: 1, type: 'cat', offset: 3.0 },
      { t: 0.68, side: -1, type: 'lantern', offset: 2.3 },
      { t: 0.74, side: 1, type: 'bench', offset: 2.2 },
      { t: 0.84, side: -1, type: 'plant', offset: 2.2 },
      { t: 0.90, side: 1, type: 'cat', offset: 3.2 },
    ];

    furniture.forEach(({ t, side, type, offset }) => {
      let item;
      switch (type) {
        case 'bench':
          item = createBench();
          break;
        case 'bollard':
          item = createBollard();
          break;
        case 'plant':
          item = createPottedPlant();
          break;
        case 'cat':
          item = createCat();
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
      { t: 0.10, side: 1, dist: 7, variant: 'cherry' },
      { t: 0.18, side: -1, dist: 8, variant: 'normal' },
      { t: 0.30, side: 1, dist: 7.5, variant: 'pine' },
      { t: 0.40, side: -1, dist: 9, variant: 'cherry' },
      { t: 0.50, side: 1, dist: 8, variant: 'normal' },
      { t: 0.60, side: -1, dist: 7, variant: 'pine' },
      { t: 0.72, side: 1, dist: 8.5, variant: 'cherry' },
      { t: 0.82, side: -1, dist: 7, variant: 'normal' },
      { t: 0.92, side: 1, dist: 9, variant: 'pine' },
    ];

    treeSpots.forEach(({ t, side, dist, variant }) => {
      const pos = this.path.getPointAt(t);
      const tangent = this.path.getTangentAt(t);
      const perp = new THREE.Vector3(-tangent.z, 0, tangent.x).multiplyScalar(side);
      const tree = createTree(variant);
      tree.position.copy(pos).add(perp.multiplyScalar(dist));
      this.scene.add(tree);
      if (variant === 'cherry') {
        this._recordSpawn('cherry_tree', tree.position);
      } else if (variant === 'pine' && t > 0.55 && t < 0.65) {
        this._recordSpawn('shrine_tree', tree.position);
      }
    });

    for (let i = 0; i < 24; i++) {
      const t = 0.04 + Math.random() * 0.92;
      const pos = this.path.getPointAt(t);
      const tangent = this.path.getTangentAt(t);
      const side = Math.random() > 0.5 ? 1 : -1;
      const perp = new THREE.Vector3(-tangent.z, 0, tangent.x).multiplyScalar(side);
      const tree = createTree('normal');
      tree.position.copy(pos).add(perp.multiplyScalar(6 + Math.random() * 5));
      tree.scale.setScalar(0.7 + Math.random() * 0.5);
      this.scene.add(tree);
    }

    [0.24, 0.52, 0.78, 0.90].forEach((t) => {
      const bamboo = createBambooCluster();
      placeAlongPath(bamboo, this.path, t, 1, 6.5 + Math.random());
      this.scene.add(bamboo);
    });
  }

  _createClouds() {
    const cloudPositions = [
      [-15, 18, -5, 2],
      [10, 20, -10, 2.5],
      [-8, 22, -20, 1.8],
      [20, 19, -15, 2.2],
      [-20, 21, 0, 1.5],
      [5, 23, -25, 2],
      [-12, 19, -35, 2.3],
      [15, 21, -38, 1.7],
      [0, 24, -12, 2.8],
      [22, 20, -50, 2.1],
      [-18, 22, -58, 1.9],
      [8, 23, -65, 2.4],
      [28, 21, -45, 1.8],
    ];
    cloudPositions.forEach(([x, y, z, s]) => {
      const cloud = createCloud(x, y, z, s);
      this.scene.add(cloud);
      this.animatedClouds.push(cloud);
    });
  }

  _createLighting() {
    // Warm hemisphere: sky colour from top, bounced ground from below
    const hemi = new THREE.HemisphereLight(0xc8e8ff, 0x8ab88a, 0.6);
    this.scene.add(hemi);

    // Main directional sun — slightly warmer, stronger
    const sun = new THREE.DirectionalLight(0xfff4d0, 1.35);
    sun.position.set(18, 28, 12);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.camera.near = 0.5;
    sun.shadow.camera.far = 130;
    sun.shadow.camera.left   = -60;
    sun.shadow.camera.right  = 60;
    sun.shadow.camera.top    = 60;
    sun.shadow.camera.bottom = -100;
    sun.shadow.bias = -0.0005;
    this.scene.add(sun);
    this.sun = sun;

    // Cool fill from opposite side — gives nice rim lighting
    const fill = new THREE.DirectionalLight(0xb8d8f8, 0.45);
    fill.position.set(-14, 10, -8);
    this.scene.add(fill);

    // Street-level warm point lights along the road
    [[-3, 2.5, -10], [-5, 2.5, -22], [4, 2.5, -34], [-2, 2.5, -46]].forEach(([x, y, z]) => {
      const pl = new THREE.PointLight(0xffa858, 0.55, 12);
      pl.position.set(x, y, z);
      this.scene.add(pl);
    });

    // Harbor blue-green ambience
    const harborLight = new THREE.PointLight(0x80c8e8, 0.5, 22);
    harborLight.position.set(20, 3, -88);
    this.scene.add(harborLight);

    // Market warm glow
    const marketLight = new THREE.PointLight(0xffb868, 0.45, 16);
    marketLight.position.set(6, 3, -48);
    this.scene.add(marketLight);

    // Shrine cool-purple ambience
    const shrineLight = new THREE.PointLight(0xb890e8, 0.4, 14);
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
