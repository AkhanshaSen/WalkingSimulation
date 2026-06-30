import * as THREE from 'three';

let toonGradient = null;

function getToonGradient() {
  if (toonGradient) return toonGradient;

  // 5-step cel-shade: deep shadow → warm shadow → mid-tone → lit → bright highlight
  const pixels = ['#0e0e12', '#0e0e12', '#3a3040', '#3a3040', '#808090', '#808090', '#d8d0e0', '#d8d0e0', '#f0f0f8', '#ffffff'];
  const gradientCanvas = document.createElement('canvas');
  gradientCanvas.width = pixels.length; // 10 px → 5 discrete steps
  gradientCanvas.height = 1;
  const ctx = gradientCanvas.getContext('2d');
  pixels.forEach((color, i) => {
    ctx.fillStyle = color;
    ctx.fillRect(i, 0, 1, 1);
  });
  toonGradient = new THREE.CanvasTexture(gradientCanvas);
  toonGradient.minFilter = THREE.NearestFilter;
  toonGradient.magFilter = THREE.NearestFilter;
  return toonGradient;
}

const materialCache = new Map();

export function createToonMaterial(color, options = {}) {
  const key = `${color}:${JSON.stringify(options)}`;
  if (!materialCache.has(key)) {
    materialCache.set(
      key,
      new THREE.MeshToonMaterial({
        color,
        gradientMap: getToonGradient(),
        ...options,
      }),
    );
  }
  return materialCache.get(key);
}

export function addOutline(mesh, thickness = 1.03, color = 0x111111) {
  if (!mesh.geometry) return mesh;

  const outline = new THREE.Mesh(
    mesh.geometry,
    new THREE.MeshBasicMaterial({
      color,
      side: THREE.BackSide,
    }),
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

export const PALETTE = {
  sky: 0xa8d8d8,
  skyCloud: 0xc8e8e8,
  road: 0x3a3a3a,
  roadLine: 0xf0f0f0,
  sidewalk: 0xb8b0a0,
  wall: 0xd8d0c0,
  wallDark: 0xa8a090,
  roof: 0x6a8a7a,
  roofDark: 0x4a6a5a,
  green: 0x7aaa7a,
  vending: 0x4a9a9a,
  orange: 0xe89050,
  blue: 0x4a8ae8,
  skin: 0xf0d0b0,
  hair: 0x1a1a1a,
  shirt: 0xf8f8f8,
  pants: 0x1a1a1a,
  backpack: 0x3a7ae8,
  cone: 0xf08030,
  sign: 0x5a8a6a,
  metal: 0x888888,
};

export function nextFrame() {
  return new Promise((resolve) => requestAnimationFrame(resolve));
}
