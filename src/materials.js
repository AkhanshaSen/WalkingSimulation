import * as THREE from 'three';

/**
 * PBR material cache — keyed by color + JSON-serialised options so each unique
 * combination is created only once.  All surfaces use MeshStandardMaterial so
 * the GPU can exploit the same analytical BRDF shader across the whole scene
 * (single shader program, no per-object gradient-texture fetches).
 */
const materialCache = new Map();

/**
 * Returns a cached MeshStandardMaterial for the given hex colour.
 * Caller may override roughness / metalness / any MeshStandardMaterial property
 * via `options`.  The `gradientMap` key (legacy toon) is silently ignored.
 */
export function createToonMaterial(color, options = {}) {
  // Strip toon-only keys so they don't cause warnings on MeshStandardMaterial
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

/**
 * Adds a back-face outline child to a mesh — keeps the hand-drawn look while
 * only uploading the geometry to the GPU once (shared buffer).
 */
export function addOutline(mesh, thickness = 1.03, color = 0x111111) {
  if (!mesh.geometry) return mesh;
  const outline = new THREE.Mesh(
    mesh.geometry,                                        // shared buffer — no extra upload
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

export const PALETTE = {
  sky:       0xa8d8d8,
  skyCloud:  0xc8e8e8,
  road:      0x3a3a3a,
  roadLine:  0xf0f0f0,
  sidewalk:  0xb8b0a0,
  wall:      0xd8d0c0,
  wallDark:  0xa8a090,
  roof:      0x6a8a7a,
  roofDark:  0x4a6a5a,
  green:     0x7aaa7a,
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
};

export function nextFrame() {
  return new Promise((resolve) => requestAnimationFrame(resolve));
}
