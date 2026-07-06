import * as THREE from 'three';
import { createToonMaterial } from './materials.js';

// ── Calibration ────────────────────────────────────────────────────────────────
// KayKit characters normalised to 2.35 m.  T-pose measurements:
//   head bone world Y ≈ 0.972   head mesh top world Y ≈ 1.724   model scale ≈ 0.7826
//   bone-local Y from bone origin to top of head = (1.724 - 0.972) / 0.7826 ≈ 0.961
const H  = 0.961;   // bone-local Y at crown of head
const IS = 1.278;   // inv model scale  →  world units to bone-local units

/** Convert a desired world-space size to bone-local size. */
const s = (w) => w * IS;

// ── Catalogue ─────────────────────────────────────────────────────────────────
export const HEADGEAR_DEFS = [
  { id: 'none',        label: 'None' },
  { id: 'class_hat',   label: 'Class Hat' },
  { id: 'tophat',      label: 'Top Hat' },
  { id: 'witchhat',    label: 'Witch Hat' },
  { id: 'crown',       label: 'Crown' },
  { id: 'flowerCrown', label: 'Flower Crown' },
  { id: 'halo',        label: 'Halo' },
  { id: 'catears',     label: 'Cat Ears' },
  { id: 'beret',       label: 'Beret' },
  { id: 'piratecap',   label: 'Pirate Cap' },
];

// ── Procedural meshes ─────────────────────────────────────────────────────────

function makeTopHat() {
  const g     = new THREE.Group();
  const black = createToonMaterial(0x111111);
  const band  = createToonMaterial(0xcc3030);

  // Brim
  const brim = new THREE.Mesh(new THREE.CylinderGeometry(s(0.24), s(0.25), s(0.025), 16), black);
  brim.position.y = H + s(0.012);
  g.add(brim);

  // Hat band
  const hatBand = new THREE.Mesh(new THREE.CylinderGeometry(s(0.132), s(0.132), s(0.03), 16), band);
  hatBand.position.y = H + s(0.025) + s(0.015);
  g.add(hatBand);

  // Body
  const body = new THREE.Mesh(new THREE.CylinderGeometry(s(0.13), s(0.135), s(0.22), 16), black);
  body.position.y = H + s(0.025) + s(0.11);
  g.add(body);

  return g;
}

function makeWitchHat() {
  const g     = new THREE.Group();
  const dark  = createToonMaterial(0x2a0a5a);
  const brimM = createToonMaterial(0x1a0640);
  const band  = createToonMaterial(0x884488);

  const brim = new THREE.Mesh(new THREE.CylinderGeometry(s(0.30), s(0.32), s(0.03), 16), brimM);
  brim.position.y = H + s(0.015);
  g.add(brim);

  const cone = new THREE.Mesh(new THREE.ConeGeometry(s(0.13), s(0.45), 8), dark);
  cone.position.y = H + s(0.03) + s(0.225);
  g.add(cone);

  const hatBand = new THREE.Mesh(new THREE.CylinderGeometry(s(0.132), s(0.132), s(0.025), 16), band);
  hatBand.position.y = H + s(0.03) + s(0.012);
  g.add(hatBand);

  return g;
}

function makeCrown() {
  const g    = new THREE.Group();
  const gold = createToonMaterial(0xf0c020);
  const gem  = createToonMaterial(0xcc1060);

  // Base band
  const ring = new THREE.Mesh(new THREE.CylinderGeometry(s(0.18), s(0.17), s(0.07), 16), gold);
  ring.position.y = H + s(0.035);
  g.add(ring);

  // 5 alternating tall / short spikes
  [0, 72, 144, 216, 288].forEach((deg, i) => {
    const rad  = deg * Math.PI / 180;
    const tall = i % 2 === 0;
    const h    = tall ? s(0.14) : s(0.08);
    const r    = s(0.18);

    const spike = new THREE.Mesh(new THREE.ConeGeometry(s(0.027), h, 5), gold);
    spike.position.set(Math.sin(rad) * r, H + s(0.07) + h * 0.5, Math.cos(rad) * r);
    g.add(spike);

    if (tall) {
      const gemMesh = new THREE.Mesh(new THREE.SphereGeometry(s(0.025), 6, 5), gem);
      gemMesh.position.set(Math.sin(rad) * r, H + s(0.07) + s(0.01), Math.cos(rad) * r);
      g.add(gemMesh);
    }
  });

  return g;
}

function makeFlowerCrown() {
  const g      = new THREE.Group();
  const green  = createToonMaterial(0x50a030);
  const colors = [0xff5090, 0xf0d020, 0x50c0ff, 0xff8030, 0xe060ff, 0x88e840, 0xff5090, 0xf0d020];
  const ringR  = s(0.18);

  const torus = new THREE.Mesh(new THREE.TorusGeometry(ringR, s(0.018), 8, 20), green);
  torus.rotation.x = Math.PI / 2;
  torus.position.y = H + s(0.02);
  g.add(torus);

  for (let i = 0; i < 8; i++) {
    const a     = (i / 8) * Math.PI * 2;
    const petal = new THREE.Mesh(
      new THREE.SphereGeometry(s(0.042), 7, 6),
      createToonMaterial(colors[i]),
    );
    petal.position.set(Math.sin(a) * ringR, H + s(0.05), Math.cos(a) * ringR);
    g.add(petal);
  }

  return g;
}

function makeHalo() {
  const g    = new THREE.Group();
  const glow = createToonMaterial(0xffe840);

  const halo = new THREE.Mesh(new THREE.TorusGeometry(s(0.20), s(0.024), 8, 24), glow);
  halo.rotation.x = Math.PI / 2;
  halo.position.y = H + s(0.28);
  g.add(halo);

  return g;
}

function makeCatEars() {
  const g    = new THREE.Group();
  const dark = createToonMaterial(0x1a1a2a);
  const pink = createToonMaterial(0xff99cc);

  // Ears spread along X (character's left/right)
  [-s(0.12), s(0.12)].forEach((dx) => {
    const outer = new THREE.Mesh(new THREE.ConeGeometry(s(0.065), s(0.15), 3), dark);
    outer.position.set(dx, H + s(0.06), 0);
    g.add(outer);

    const inner = new THREE.Mesh(new THREE.ConeGeometry(s(0.038), s(0.10), 3), pink);
    inner.position.set(dx, H + s(0.06), 0);
    g.add(inner);
  });

  return g;
}

function makeBeret() {
  const g   = new THREE.Group();
  const mat = createToonMaterial(0x882222);

  // Main disc, tilted slightly
  const disc = new THREE.Mesh(new THREE.CylinderGeometry(s(0.20), s(0.20), s(0.055), 16), mat);
  disc.position.y = H + s(0.028);
  disc.rotation.z = 0.30;
  g.add(disc);

  // Small button
  const btn = new THREE.Mesh(new THREE.SphereGeometry(s(0.023), 6, 5), mat);
  btn.position.set(s(-0.07), H + s(0.075), s(0.07));
  g.add(btn);

  return g;
}

function makePirateCap() {
  const g    = new THREE.Group();
  const dark = createToonMaterial(0x111111);
  const red  = createToonMaterial(0xcc2020);
  const bone = createToonMaterial(0xddddcc);

  const brim = new THREE.Mesh(new THREE.CylinderGeometry(s(0.22), s(0.23), s(0.025), 16), dark);
  brim.position.y = H + s(0.012);
  g.add(brim);

  const body = new THREE.Mesh(new THREE.CylinderGeometry(s(0.11), s(0.14), s(0.14), 16), dark);
  body.position.y = H + s(0.025) + s(0.07);
  g.add(body);

  // Skull pin
  const skull = new THREE.Mesh(new THREE.SphereGeometry(s(0.028), 6, 5), bone);
  skull.position.set(s(0.11), H + s(0.025) + s(0.08), 0);
  g.add(skull);

  // Red feather
  const feather = new THREE.Mesh(new THREE.CylinderGeometry(s(0.013), s(0.005), s(0.11), 5), red);
  feather.rotation.z = 0.4;
  feather.position.set(s(-0.065), H + s(0.025) + s(0.145), s(0.065));
  g.add(feather);

  return g;
}

function buildProceduralMesh(id) {
  switch (id) {
    case 'tophat':      return makeTopHat();
    case 'witchhat':    return makeWitchHat();
    case 'crown':       return makeCrown();
    case 'flowerCrown': return makeFlowerCrown();
    case 'halo':        return makeHalo();
    case 'catears':     return makeCatEars();
    case 'beret':       return makeBeret();
    case 'piratecap':   return makePirateCap();
    default:            return null;
  }
}

// ── Class-hat helpers ─────────────────────────────────────────────────────────
const CLASS_HAT_SUFFIXES = ['_hat', '_helmet'];

function setClassHatVisible(character, visible) {
  character.traverse((c) => {
    if (!c.isMesh && !c.isSkinnedMesh) return;
    const n = c.name.toLowerCase();
    if (CLASS_HAT_SUFFIXES.some((k) => n.endsWith(k))) c.visible = visible;
  });
}

function removeProceduralAccessory(character) {
  const toRemove = [];
  character.traverse((c) => { if (c.userData.isProceduralAccessory) toRemove.push(c); });
  toRemove.forEach((c) => c.parent?.remove(c));
}

// ── Public API ────────────────────────────────────────────────────────────────

/**
 * Attach (or change) the headgear accessory on a rigged character mesh.
 * @param {THREE.Group} character  - the wrapper group returned by createCharacterInstance
 * @param {string} accessoryId     - one of the HEADGEAR_DEFS ids
 */
export function attachAccessory(character, accessoryId) {
  if (!character) return;

  removeProceduralAccessory(character);

  if (!accessoryId || accessoryId === 'none') {
    setClassHatVisible(character, false);
    character.userData.accessoryId = 'none';
    return;
  }

  if (accessoryId === 'class_hat') {
    setClassHatVisible(character, true);
    character.userData.accessoryId = 'class_hat';
    return;
  }

  // Procedural hat — hide class hat to avoid double-stacking
  setClassHatVisible(character, false);

  const mesh = buildProceduralMesh(accessoryId);
  if (!mesh) return;

  // Find the head bone
  let headBone = null;
  character.traverse((c) => { if (!headBone && c.isBone && c.name === 'head') headBone = c; });
  if (!headBone) return;

  mesh.userData.isProceduralAccessory = true;
  mesh.traverse((c) => { c.userData.dynamic = true; });
  headBone.add(mesh);

  character.userData.accessoryId = accessoryId;
}

/** Remove any headgear (call when swapping skins). */
export function clearAccessory(character) {
  if (!character) return;
  removeProceduralAccessory(character);
  setClassHatVisible(character, false);
  character.userData.accessoryId = 'none';
}
