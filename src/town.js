import * as THREE from 'three';
import { createToonMaterial, createOutlinedMesh, PALETTE, nextFrame } from './materials.js';

function createBuilding(width, depth, height, wallColor, roofColor) {
  const group = new THREE.Group();

  const walls = createOutlinedMesh(
    new THREE.BoxGeometry(width, height, depth),
    createToonMaterial(wallColor),
  );
  walls.position.y = height / 2;
  group.add(walls);

  const roof = createOutlinedMesh(
    new THREE.BoxGeometry(width + 0.3, 0.15, depth + 0.3),
    createToonMaterial(roofColor),
  );
  roof.position.y = height + 0.08;
  group.add(roof);

  const windowMat = createToonMaterial(0xc8e8f0);
  const windowGeo = new THREE.PlaneGeometry(0.5, 0.6);
  const windowCount = Math.floor(width / 1.2);
  for (let i = 0; i < windowCount; i++) {
    const win = new THREE.Mesh(windowGeo, windowMat);
    win.position.set(-width / 2 + 0.6 + i * 1.2, height * 0.55, depth / 2 + 0.01);
    group.add(win);
  }

  return group;
}

function createVendingMachine() {
  const group = new THREE.Group();
  const body = createOutlinedMesh(
    new THREE.BoxGeometry(0.9, 1.8, 0.7),
    createToonMaterial(PALETTE.vending),
  );
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

  const roof = createOutlinedMesh(
    new THREE.ConeGeometry(0.28, 0.2, 4),
    createToonMaterial(PALETTE.orange),
  );
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

  const mirror = createOutlinedMesh(
    new THREE.CircleGeometry(0.45, 16),
    createToonMaterial(0xd0e8e8),
  );
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
  return createOutlinedMesh(
    new THREE.ConeGeometry(0.15, 0.4, 8),
    createToonMaterial(PALETTE.cone),
  );
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
  return group;
}

export class Town {
  constructor(scene) {
    this.scene = scene;
    this.groundMeshes = [];
    this.path = this._createPath();
  }

  async build(onProgress) {
    onProgress?.('Building sky…');
    this._createSky();
    await nextFrame();

    onProgress?.('Laying streets…');
    this._createGround();
    this._createRoad();
    await nextFrame();

    onProgress?.('Placing buildings…');
    this._createBuildings();
    await nextFrame();

    onProgress?.('Adding details…');
    this._createProps();
    this._createVegetation();
    this._createClouds();
    this._createLighting();
    onProgress?.('Ready');
  }

  _createPath() {
    const points = [
      new THREE.Vector3(0, 0, 8),
      new THREE.Vector3(-2, 0, 4),
      new THREE.Vector3(-1, 0, 0),
      new THREE.Vector3(2, 0, -4),
      new THREE.Vector3(4, 0, -8),
      new THREE.Vector3(2, 0, -14),
      new THREE.Vector3(-3, 0, -18),
      new THREE.Vector3(-6, 0, -22),
    ];
    return new THREE.CatmullRomCurve3(points, false, 'catmullrom', 0.5);
  }

  _createSky() {
    this.scene.fog = new THREE.Fog(PALETTE.sky, 30, 80);
    this.scene.background = new THREE.Color(PALETTE.sky);
  }

  _createGround() {
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(120, 120),
      createToonMaterial(PALETTE.green),
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.05;
    ground.receiveShadow = true;
    this.scene.add(ground);
    this.groundMeshes.push(ground);
  }

  _createRoad() {
    const divisions = 48;
    const roadWidth = 3.5;
    const points = this.path.getSpacedPoints(divisions);
    const roadMat = createToonMaterial(PALETTE.road);
    const sidewalkMat = createToonMaterial(PALETTE.sidewalk);
    const lineMat = createToonMaterial(PALETTE.roadLine);

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

      const sidewalkL = new THREE.Mesh(sidewalkGeo, sidewalkMat);
      sidewalkL.position.copy(center).add(perp.clone().multiplyScalar(roadWidth / 2 + 0.75));
      sidewalkL.position.y = 0.04;
      sidewalkL.lookAt(
        sidewalkL.position.x + dir.x,
        sidewalkL.position.y,
        sidewalkL.position.z + dir.z,
      );
      this.scene.add(sidewalkL);
      this.groundMeshes.push(sidewalkL);

      const sidewalkR = new THREE.Mesh(sidewalkGeo, sidewalkMat);
      sidewalkR.position.copy(center).add(perp.clone().multiplyScalar(-(roadWidth / 2 + 0.75)));
      sidewalkR.position.y = 0.04;
      sidewalkR.lookAt(
        sidewalkR.position.x + dir.x,
        sidewalkR.position.y,
        sidewalkR.position.z + dir.z,
      );
      this.scene.add(sidewalkR);
      this.groundMeshes.push(sidewalkR);

      if (i % 6 === 0) {
        const line = new THREE.Mesh(
          new THREE.BoxGeometry(0.12, 0.02, len * 0.4),
          lineMat,
        );
        line.position.copy(center).add(perp.clone().multiplyScalar(roadWidth / 2 - 0.3));
        line.position.y = 0.07;
        line.lookAt(p1.x, line.position.y, p1.z);
        this.scene.add(line);
      }
    }
  }

  _createBuildings() {
    const buildingDefs = [
      { t: 0.08, side: 1, w: 3, d: 4, h: 3.5, wall: PALETTE.wall, roof: PALETTE.roof },
      { t: 0.12, side: -1, w: 4, d: 3.5, h: 4, wall: 0xd0c8b8, roof: PALETTE.roofDark },
      { t: 0.22, side: 1, w: 3.5, d: 3, h: 3, wall: 0xc8d0c0, roof: 0x5a7a6a },
      { t: 0.35, side: -1, w: 5, d: 4, h: 4.5, wall: PALETTE.wallDark, roof: PALETTE.roof },
      { t: 0.48, side: 1, w: 3, d: 3.5, h: 3.2, wall: 0xe0d8c8, roof: 0x6a9a7a },
      { t: 0.58, side: -1, w: 4, d: 3, h: 3.8, wall: 0xd8d0c0, roof: PALETTE.roofDark },
      { t: 0.72, side: 1, w: 3.5, d: 4, h: 3.5, wall: PALETTE.wall, roof: PALETTE.roof },
      { t: 0.85, side: -1, w: 4.5, d: 3.5, h: 4.2, wall: 0xc0b8a8, roof: 0x5a8a6a },
    ];

    buildingDefs.forEach(({ t, side, w, d, h, wall, roof }) => {
      const pos = this.path.getPointAt(t);
      const tangent = this.path.getTangentAt(t);
      const perp = new THREE.Vector3(-tangent.z, 0, tangent.x).multiplyScalar(side);

      const building = createBuilding(w, d, h, wall, roof);
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

  _createProps() {
    const props = [
      { t: 0.1, side: -1, type: 'vending', offset: 2.8 },
      { t: 0.15, side: 1, type: 'mailbox', offset: 2.5 },
      { t: 0.28, side: -1, type: 'mirror', offset: 2.2 },
      { t: 0.32, side: 1, type: 'cone', offset: 2.0 },
      { t: 0.45, side: -1, type: 'kiosk', offset: 2.6 },
      { t: 0.55, side: 1, type: 'vending', offset: 2.8 },
      { t: 0.68, side: -1, type: 'cone', offset: 2.0 },
      { t: 0.78, side: 1, type: 'mailbox', offset: 2.5 },
    ];

    props.forEach(({ t, side, type, offset }) => {
      const pos = this.path.getPointAt(t);
      const tangent = this.path.getTangentAt(t);
      const perp = new THREE.Vector3(-tangent.z, 0, tangent.x).multiplyScalar(side);

      let prop;
      switch (type) {
        case 'vending':
          prop = createVendingMachine();
          break;
        case 'mailbox':
          prop = createMailbox();
          break;
        case 'mirror':
          prop = createTrafficMirror();
          break;
        case 'cone':
          prop = createTrafficCone();
          prop.position.y = 0.2;
          break;
        case 'kiosk':
          prop = createInfoKiosk();
          break;
        default:
          return;
      }

      prop.position.copy(pos).add(perp.multiplyScalar(offset));
      prop.lookAt(prop.position.x + tangent.x, prop.position.y, prop.position.z + tangent.z);
      this.scene.add(prop);
    });

    const polePositions = [
      this.path.getPointAt(0.2),
      this.path.getPointAt(0.5),
      this.path.getPointAt(0.75),
    ];
    for (let i = 0; i < polePositions.length - 1; i++) {
      const start = polePositions[i].clone();
      start.y = 3.5;
      start.x += 4;
      const end = polePositions[i + 1].clone();
      end.y = 3.5;
      end.x += 4;
      this.scene.add(createPowerLines(start, end, 5));
    }
  }

  _createVegetation() {
    for (let i = 0; i < 20; i++) {
      const t = 0.1 + Math.random() * 0.8;
      const pos = this.path.getPointAt(t);
      const tangent = this.path.getTangentAt(t);
      const side = Math.random() > 0.5 ? 1 : -1;
      const perp = new THREE.Vector3(-tangent.z, 0, tangent.x).multiplyScalar(side);
      const dist = 6 + Math.random() * 4;

      const tree = new THREE.Group();
      const trunk = createOutlinedMesh(
        new THREE.CylinderGeometry(0.08, 0.12, 0.8, 6),
        createToonMaterial(0x6a5040),
      );
      trunk.position.y = 0.4;
      tree.add(trunk);

      const foliage = createOutlinedMesh(
        new THREE.SphereGeometry(0.5 + Math.random() * 0.3, 8, 6),
        createToonMaterial(0x5a9a5a + Math.floor(Math.random() * 0x050505)),
      );
      foliage.position.y = 1.1;
      tree.add(foliage);

      tree.position.copy(pos).add(perp.multiplyScalar(dist));
      tree.position.y = 0;
      this.scene.add(tree);
    }
  }

  _createClouds() {
    const cloudPositions = [
      [-15, 18, -5, 2],
      [10, 20, -10, 2.5],
      [-8, 22, -20, 1.8],
      [20, 19, -15, 2.2],
      [-20, 21, 0, 1.5],
      [5, 23, -25, 2],
    ];
    cloudPositions.forEach(([x, y, z, s]) => {
      this.scene.add(createCloud(x, y, z, s));
    });
  }

  _createLighting() {
    const ambient = new THREE.AmbientLight(0xffffff, 0.55);
    this.scene.add(ambient);

    const sun = new THREE.DirectionalLight(0xfff8e8, 1.1);
    sun.position.set(15, 25, 10);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    sun.shadow.camera.near = 0.5;
    sun.shadow.camera.far = 60;
    sun.shadow.camera.left = -25;
    sun.shadow.camera.right = 25;
    sun.shadow.camera.top = 25;
    sun.shadow.camera.bottom = -25;
    this.scene.add(sun);
    this.sun = sun;
  }

  getPath() {
    return this.path;
  }

  getGroundMeshes() {
    return this.groundMeshes;
  }
}
