import * as THREE from 'three';

const materialCache = new Map();
let grassTexture = null;
let toonGradientMap = null;

/** Stepped gradient for MeshToonMaterial cel shading */
export function getToonGradientMap() {
  if (toonGradientMap) return toonGradientMap;
  const canvas = document.createElement('canvas');
  canvas.width = 4;
  canvas.height = 1;
  const ctx = canvas.getContext('2d');
  const grad = ctx.createLinearGradient(0, 0, 4, 0);
  grad.addColorStop(0.0, '#383838');
  grad.addColorStop(0.42, '#9a9a9a');
  grad.addColorStop(1.0, '#ffffff');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 4, 1);
  toonGradientMap = new THREE.CanvasTexture(canvas);
  toonGradientMap.minFilter = THREE.NearestFilter;
  toonGradientMap.magFilter = THREE.NearestFilter;
  toonGradientMap.generateMipmaps = false;
  return toonGradientMap;
}

export function convertMaterialToToon(material) {
  if (!material) return material;
  if (material.isMeshToonMaterial) return material;

  const toon = new THREE.MeshToonMaterial({
    color: material.color?.clone() ?? new THREE.Color(0xffffff),
    map: material.map ?? null,
    gradientMap: getToonGradientMap(),
    transparent: material.transparent ?? false,
    opacity: material.opacity ?? 1,
    side: material.side ?? THREE.FrontSide,
    alphaTest: material.alphaTest ?? 0,
  });
  if (toon.map) {
    toon.map.colorSpace = THREE.SRGBColorSpace;
    toon.map.anisotropy = 8;
  }
  return toon;
}

export function createToonMaterial(color, options = {}) {
  const { map, transparent, opacity, emissive, emissiveIntensity, ...rest } = options;
  const key = `toon:${color}:${map?.uuid ?? ''}:${transparent}:${opacity}:${JSON.stringify(rest)}`;
  if (!materialCache.has(key)) {
    const mat = new THREE.MeshToonMaterial({
      color,
      gradientMap: getToonGradientMap(),
      map: map ?? null,
      transparent: transparent ?? false,
      opacity: opacity ?? 1,
      ...rest,
    });
    if (emissive != null) {
      mat.emissive = new THREE.Color(emissive);
      mat.emissiveIntensity = emissiveIntensity ?? 0.4;
    }
    materialCache.set(key, mat);
  }
  return materialCache.get(key);
}

export function addOutline(mesh, thickness = 1.068, color = 0x0a0a10) {
  if (!mesh.geometry || mesh.userData.hasOutline) return mesh;
  const outline = new THREE.Mesh(
    mesh.geometry,
    new THREE.MeshBasicMaterial({ color, side: THREE.BackSide }),
  );
  outline.scale.multiplyScalar(thickness);
  outline.userData.isOutline = true;
  outline.raycast = () => {};
  mesh.add(outline);
  mesh.userData.hasOutline = true;
  return mesh;
}

export function createOutlinedMesh(geometry, material, outlineScale = 1.068) {
  const mesh = new THREE.Mesh(geometry, material);
  addOutline(mesh, outlineScale);
  return mesh;
}

/** Slightly thinner outline for very large meshes */
export function createSoftOutlinedMesh(geometry, material, outlineScale = 1.042) {
  return createOutlinedMesh(geometry, material, outlineScale);
}

export function applyCelShading(object, outlineScale = 1.04) {
  object.traverse((child) => {
    if (!child.isMesh || child.userData.isOutline) return;
    child.castShadow = true;
    child.receiveShadow = true;

    if (Array.isArray(child.material)) {
      child.material = child.material.map(convertMaterialToToon);
    } else {
      child.material = convertMaterialToToon(child.material);
    }
    if (child.geometry && !child.userData.hasOutline) {
      addOutline(child, outlineScale, 0x0a0a10);
    }
  });
  return object;
}

export function createGrassTexture() {
  if (grassTexture) return grassTexture;
  const size = 256;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#6a9a78';
  ctx.fillRect(0, 0, size, size);
  // Two-tone mottling patches
  for (let i = 0; i < 120; i++) {
    const x = Math.random() * size;
    const y = Math.random() * size;
    const r = 8 + Math.random() * 22;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle = Math.random() > 0.5 ? 'rgba(90,140,100,0.35)' : 'rgba(110,160,115,0.28)';
    ctx.fill();
  }
  // Fine blade detail
  for (let i = 0; i < 6000; i++) {
    const x = Math.random() * size;
    const y = Math.random() * size;
    const g = 100 + Math.floor(Math.random() * 40);
    ctx.fillStyle = `rgba(${g - 25},${g + 10},${g - 30},0.22)`;
    ctx.fillRect(x, y, 1, 2 + Math.random() * 2);
  }
  grassTexture = new THREE.CanvasTexture(canvas);
  grassTexture.wrapS = grassTexture.wrapT = THREE.RepeatWrapping;
  grassTexture.repeat.set(40, 40);
  grassTexture.colorSpace = THREE.SRGBColorSpace;
  return grassTexture;
}

const vendingDisplayCache = new Map();

export function createVendingDisplayTexture(accentColor = 0x5ab0a8) {
  const key = accentColor.toString(16);
  if (vendingDisplayCache.has(key)) return vendingDisplayCache.get(key);

  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 192;
  const ctx = canvas.getContext('2d');

  const accent = `#${new THREE.Color(accentColor).getHexString()}`;
  ctx.fillStyle = '#283038';
  ctx.fillRect(0, 0, 128, 192);

  ctx.fillStyle = accent;
  ctx.fillRect(0, 0, 128, 22);
  ctx.fillStyle = '#f0f8ff';
  ctx.font = 'bold 14px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('DRINKS', 64, 16);

  const drinkColors = ['#e8a050', '#f0d050', '#70b8c8', '#e87878', '#88c878', '#c8a0e0'];
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 3; col++) {
      const x = 18 + col * 32;
      const y = 30 + row * 30;
      ctx.fillStyle = drinkColors[(row * 3 + col) % drinkColors.length];
      ctx.fillRect(x, y, 18, 22);
      ctx.strokeStyle = '#1a1a1a';
      ctx.lineWidth = 2;
      ctx.strokeRect(x, y, 18, 22);
      ctx.fillStyle = 'rgba(255,255,255,0.4)';
      ctx.fillRect(x + 2, y + 2, 5, 16);
    }
  }

  ctx.fillStyle = '#8898a8';
  ctx.fillRect(96, 150, 24, 32);
  ctx.fillStyle = '#f0f0f0';
  ctx.font = '10px sans-serif';
  ctx.fillText('¥', 108, 170);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  vendingDisplayCache.set(key, texture);
  return texture;
}

let waterWaveTexture = null;

function createWaterWaveTexture() {
  if (waterWaveTexture) return waterWaveTexture;
  const size = 256;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#4a90a8';
  ctx.fillRect(0, 0, size, size);
  for (let y = 0; y < size; y += 4) {
    for (let x = 0; x < size; x += 4) {
      const v = 0.15 + Math.sin(x * 0.08 + y * 0.05) * 0.12 + Math.random() * 0.08;
      ctx.fillStyle = `rgba(255,255,255,${v.toFixed(2)})`;
      ctx.fillRect(x, y, 3, 2);
    }
  }
  waterWaveTexture = new THREE.CanvasTexture(canvas);
  waterWaveTexture.wrapS = waterWaveTexture.wrapT = THREE.RepeatWrapping;
  waterWaveTexture.repeat.set(4, 4);
  waterWaveTexture.colorSpace = THREE.SRGBColorSpace;
  return waterWaveTexture;
}

export function createWaterMaterial() {
  const map = createWaterWaveTexture();
  const mat = new THREE.MeshToonMaterial({
    color: 0x6ab0c0,
    gradientMap: getToonGradientMap(),
    map,
    transparent: true,
    opacity: 0.9,
  });
  mat.userData.waterMap = map;
  return mat;
}

export const PALETTE = {
  sky:       0xa8dcd4,
  skyCloud:  0xc8ece8,
  road:      0xc8c4bc,
  roadLine:  0xe8ece8,
  sidewalk:  0xd8d4cc,
  wall:      0xd8d4cc,
  wallDark:  0xb8b4ac,
  roof:      0x6a6458,
  roofDark:  0x524c44,
  green:     0x7db882,
  meadow:    0x6a9a78,
  gravel:    0xa8a49c,
  vending:   0x5ab0a8,
  orange:    0xf0b060,
  yellow:    0xf0d060,
  blue:      0x6a9ac8,
  skin:      0xf0d0b0,
  hair:      0x1a1a1a,
  shirt:     0xf8f8f8,
  pants:     0x1a1a1a,
  backpack:  0x989898,
  cone:      0xf0a050,
  sign:      0x6a9a7a,
  metal:     0x909090,
  awningRed: 0xd87868,
  awningBlue: 0x6888b0,
  accent:    0xf0d060,
};

export function nextFrame() {
  return new Promise((resolve) => requestAnimationFrame(resolve));
}
