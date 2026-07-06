import * as THREE from 'three';

const materialCache = new Map();
let grassTexture = null;

export function createToonMaterial(color, options = {}) {
  const { gradientMap: _g, ...rest } = options;
  const key = `pbr:${color}:${JSON.stringify(rest)}`;
  if (!materialCache.has(key)) {
    materialCache.set(
      key,
      new THREE.MeshStandardMaterial({
        color,
        roughness: rest.roughness ?? 0.82,
        metalness: rest.metalness ?? 0.0,
        ...rest,
      }),
    );
  }
  return materialCache.get(key);
}

export function addOutline(mesh, thickness = 1.03, color = 0x111111) {
  if (!mesh.geometry) return mesh;
  const outline = new THREE.Mesh(
    mesh.geometry,
    new THREE.MeshBasicMaterial({ color, side: THREE.BackSide }),
  );
  outline.scale.multiplyScalar(thickness);
  outline.userData.isOutline = true;
  mesh.add(outline);
  return mesh;
}

export function createOutlinedMesh(geometry, material, outlineScale = 1.04) {
  const mesh = new THREE.Mesh(geometry, material);
  addOutline(mesh, outlineScale);
  return mesh;
}

/** Lighter outline for large fallback geometry */
export function createSoftOutlinedMesh(geometry, material, outlineScale = 1.012) {
  return createOutlinedMesh(geometry, material, outlineScale);
}

export function createGrassTexture() {
  if (grassTexture) return grassTexture;
  const size = 256;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#5f8f62';
  ctx.fillRect(0, 0, size, size);
  for (let i = 0; i < 14000; i++) {
    const x = Math.random() * size;
    const y = Math.random() * size;
    const g = 85 + Math.floor(Math.random() * 55);
    ctx.fillStyle = `rgba(${g - 22},${g + 12},${g - 28},0.38)`;
    ctx.fillRect(x, y, 1 + Math.random() * 2, 1 + Math.random() * 3);
  }
  for (let i = 0; i < 500; i++) {
    const x = Math.random() * size;
    const y = Math.random() * size;
    ctx.fillStyle = `rgba(${95 + Math.random() * 45},${125 + Math.random() * 35},${75 + Math.random() * 25},0.22)`;
    ctx.beginPath();
    ctx.arc(x, y, 2 + Math.random() * 4, 0, Math.PI * 2);
    ctx.fill();
  }
  grassTexture = new THREE.CanvasTexture(canvas);
  grassTexture.wrapS = grassTexture.wrapT = THREE.RepeatWrapping;
  grassTexture.repeat.set(48, 48);
  grassTexture.colorSpace = THREE.SRGBColorSpace;
  return grassTexture;
}

const vendingDisplayCache = new Map();

export function createVendingDisplayTexture(accentColor = 0x4a9a9a) {
  const key = accentColor.toString(16);
  if (vendingDisplayCache.has(key)) return vendingDisplayCache.get(key);

  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 192;
  const ctx = canvas.getContext('2d');

  const accent = `#${new THREE.Color(accentColor).getHexString()}`;
  ctx.fillStyle = '#1a2830';
  ctx.fillRect(0, 0, 128, 192);

  ctx.fillStyle = accent;
  ctx.fillRect(0, 0, 128, 22);
  ctx.fillStyle = '#f0f8ff';
  ctx.font = 'bold 14px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('DRINKS', 64, 16);

  const drinkColors = ['#e85050', '#50a850', '#5080e8', '#f0c040', '#e070c0', '#50c8c8'];
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 3; col++) {
      const x = 18 + col * 32;
      const y = 30 + row * 30;
      ctx.fillStyle = drinkColors[(row * 3 + col) % drinkColors.length];
      ctx.fillRect(x, y, 18, 22);
      ctx.fillStyle = 'rgba(255,255,255,0.35)';
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

export function createWaterMaterial() {
  return new THREE.MeshStandardMaterial({
    color: 0x4a90b0,
    roughness: 0.15,
    metalness: 0.35,
    transparent: true,
    opacity: 0.88,
  });
}

export const PALETTE = {
  sky:       0xb8dce8,
  skyCloud:  0xd8ece8,
  road:      0x3a3a3a,
  roadLine:  0xf0f0f0,
  sidewalk:  0xc0b8a8,
  wall:      0xe8e0d4,
  wallDark:  0xc8c0b4,
  roof:      0x5a4a40,
  roofDark:  0x4a3a32,
  green:     0x6a9468,
  meadow:    0x5a8a5a,
  gravel:    0x989080,
  vending:   0x4a9a9a,
  orange:    0xe89050,
  blue:      0x4a8ae8,
  skin:      0xf0d0b0,
  hair:      0x1a1a1a,
  shirt:     0xf8f8f8,
  pants:     0x1a1a1a,
  backpack:  0x3a7ae8,
  cone:      0xf08030,
  sign:      0x5a8a6a,
  metal:     0x888888,
  awningRed: 0xc05050,
  awningBlue: 0x5060a0,
};

export function nextFrame() {
  return new Promise((resolve) => requestAnimationFrame(resolve));
}
