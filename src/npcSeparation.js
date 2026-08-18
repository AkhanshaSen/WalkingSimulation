import { setupNpcRoutine } from './npcRoutines.js';
import { PERF } from './performance.js';

/** Minimum horizontal clearance between NPC bodies (~1 m footprint + margin). */
export const MIN_NPC_DISTANCE = 1.2;

function clampT(t) {
  return Math.min(0.97, Math.max(0.03, t));
}

function horizontalDist(a, b) {
  const dx = a.x - b.x;
  const dz = a.z - b.z;
  return Math.hypot(dx, dz);
}

function overlapsOthers(npc, npcs, index, minDist) {
  const pos = npc.mesh.position;
  for (let j = 0; j < index; j++) {
    if (horizontalDist(pos, npcs[j].mesh.position) < minDist) return true;
  }
  return false;
}

/** Spread spawn positions so no two NPCs start on top of each other. */
export function resolveNpcSpawnPositions(npcs) {
  for (let i = 0; i < npcs.length; i++) {
    const npc = npcs[i];
    for (let attempt = 0; attempt < 36; attempt++) {
      if (!overlapsOthers(npc, npcs, i, MIN_NPC_DISTANCE)) break;

      const step = attempt % 7;
      if (step === 0) npc.pathSide *= -1;
      else if (step === 1) npc.pathOffset += 0.45;
      else if (step === 2) npc.pathOffset = Math.max(1.65, npc.pathOffset - 0.4);
      else if (step === 3) npc.t = clampT(npc.t + 0.04);
      else if (step === 4) npc.t = clampT(npc.t - 0.04);
      else if (step === 5) npc.t = clampT(npc.t + 0.07);
      else npc.pathOffset += 0.3;

      npc._placeOnPath();
    }

    npc.homePos.copy(npc.mesh.position);
    npc.homeFacing = npc.mesh.rotation.y;
    setupNpcRoutine(npc);
  }
}

function shouldSeparate(a, b) {
  if (a === b) return false;
  return true;
}

function pushPairApart(a, b, minDist, strength) {
  const dx = b.mesh.position.x - a.mesh.position.x;
  const dz = b.mesh.position.z - a.mesh.position.z;
  const dist = Math.hypot(dx, dz);
  if (dist >= minDist || dist < 0.0001) return;

  const overlap = minDist - dist;
  const nx = dx / dist;
  const nz = dz / dist;
  const push = overlap * 0.5 * strength;

  a.mesh.position.x -= nx * push;
  a.mesh.position.z -= nz * push;
  b.mesh.position.x += nx * push;
  b.mesh.position.z += nz * push;
}

/** Keep NPCs apart every frame — idle, patrol, talk, approach, and notice pauses. */
export function applyNpcGroupSeparation(npcs, dt) {
  const strength = Math.min(1, 6 * dt + 0.35);
  const passes = PERF.npcSeparationPasses ?? 2;

  for (let pass = 0; pass < passes; pass++) {
    for (let i = 0; i < npcs.length; i++) {
      for (let j = i + 1; j < npcs.length; j++) {
        const a = npcs[i];
        const b = npcs[j];
        if (!shouldSeparate(a, b)) continue;
        pushPairApart(a, b, MIN_NPC_DISTANCE, strength);
      }
    }
  }
}
