import { animateCharacter } from './character.js';

export function setupNpcRoutine(npc) {
  const profile = npc.profile;
  npc.routine = profile.routine ?? 'idle';
  npc.patrolTs = profile.patrolTs ?? null;
  npc.patrolIndex = 0;
  npc.patrolSpeed = profile.routine === 'jog' ? 4.8 : 2.4;
  npc.workPhase = Math.random() * Math.PI * 2;

  if (npc.routine === 'sit') {
    npc.mesh.position.copy(npc.homePos);
  }
}

export function updateNpcRoutine(npc, dt) {
  if (npc.isTalking || npc.isCompanion || npc.state === 'following' || npc.state === 'approaching') {
    return;
  }
  if (npc.playerNearby && !npc.profile.isAmbient) {
    return;
  }

  switch (npc.routine) {
    case 'patrol':
    case 'jog':
      updatePatrol(npc, dt);
      break;
    case 'work':
      updateWork(npc, dt);
      break;
    case 'sit':
      updateSit(npc, dt);
      break;
    default:
      updateIdle(npc, dt);
  }
}

function updatePatrol(npc, dt) {
  if (!npc.patrolTs?.length) return;
  const targetT = npc.patrolTs[npc.patrolIndex];
  const target = npc.path.getPointAt(targetT);
  target.y = npc.mesh.position.y;
  const reached = npc._moveToward(target, dt, npc.patrolSpeed, 0.9);
  if (reached) {
    npc.patrolIndex = (npc.patrolIndex + 1) % npc.patrolTs.length;
  }
}

function updateWork(npc, dt) {
  npc.workPhase += dt;
  npc.mesh.position.y = npc.homePos.y + Math.sin(npc.workPhase * 2.2) * 0.01;
  const busy = Math.sin(npc.workPhase * 1.4) > 0.6;
  animateCharacter(npc.mesh, busy ? 0.35 : 0, dt);
  npc.mesh.rotation.y = npc.homeFacing + Math.sin(npc.workPhase * 0.7) * 0.25;
}

function updateSit(npc, dt) {
  npc.idlePhase += dt * 1.1;
  npc.mesh.position.copy(npc.homePos);
  npc.mesh.position.y += Math.sin(npc.idlePhase) * 0.012;
  npc.mesh.rotation.y = npc.homeFacing;
  animateCharacter(npc.mesh, 0, dt);
}

function updateIdle(npc, dt) {
  npc.idlePhase += dt * 1.5;
  npc.mesh.position.y = npc.homePos.y + Math.sin(npc.idlePhase) * 0.015;
}
