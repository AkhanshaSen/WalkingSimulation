import { animateCharacter } from './character.js';

export function setupNpcRoutine(npc) {
  const profile = npc.profile;
  npc.routine = profile.routine ?? 'idle';
  npc.patrolTs = profile.patrolTs ? [...profile.patrolTs] : null;
  npc.patrolIndex = 0;
  npc.patrolWait = 0;
  npc.patrolSpeed = profile.routine === 'jog' ? 3.6 : 2.2;
  npc.workPhase = Math.random() * Math.PI * 2;
  npc.homeFacing = npc.mesh.rotation.y;

  // Auto waypoints when a movable routine has none — stroll near start and stand at each stop.
  if (!npc.patrolTs?.length && (npc.routine === 'patrol' || npc.routine === 'jog' || npc.routine === 'work')) {
    const t = profile.startT ?? 0.5;
    const span = npc.routine === 'work' ? 0.035 : npc.routine === 'jog' ? 0.12 : 0.06;
    npc.patrolTs = [
      clamp01(t - span),
      clamp01(t),
      clamp01(t + span),
      clamp01(t),
    ];
  }

  if (npc.routine === 'sit') {
    npc.mesh.position.copy(npc.homePos);
    npc.mesh.userData.isSitting = true;
  } else {
    npc.mesh.userData.isSitting = false;
  }

  // Start standing so mixer never freezes mid-run.
  animateCharacter(npc.mesh, 0, 0);
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
    case 'work':
      updatePointToPoint(npc, dt);
      break;
    case 'sit':
      updateSit(npc, dt);
      break;
    default:
      updateIdle(npc, dt);
  }
}

function clamp01(t) {
  return Math.min(0.98, Math.max(0.02, t));
}

function dwellSeconds(npc) {
  if (npc.profile.patrolWait != null) return npc.profile.patrolWait;
  if (npc.routine === 'jog') return 1.4;
  if (npc.routine === 'work') return 3.2;
  return 2.6;
}

/** Walk between path waypoints; stand and idle at each stop. */
function updatePointToPoint(npc, dt) {
  npc.mesh.userData.isSitting = false;

  if (!npc.patrolTs?.length) {
    updateIdle(npc, dt);
    return;
  }

  // Standing pause at the current waypoint
  if (npc.patrolWait > 0) {
    npc.patrolWait -= dt;
    npc.mesh.position.y = npc.homePos.y + Math.sin((npc.idlePhase += dt * 1.2)) * 0.01;
    animateCharacter(npc.mesh, 0, dt);
    return;
  }

  const targetT = npc.patrolTs[npc.patrolIndex];
  const target = npc.path.getPointAt(targetT);
  target.y = npc.mesh.position.y;
  const reached = npc._moveToward(target, dt, npc.patrolSpeed, 0.75);
  if (reached) {
    npc.patrolIndex = (npc.patrolIndex + 1) % npc.patrolTs.length;
    npc.patrolWait = dwellSeconds(npc);
    // Face along path toward the next stop while standing
    const nextT = npc.patrolTs[npc.patrolIndex];
    const next = npc.path.getPointAt(nextT);
    npc.facePoint(next);
    animateCharacter(npc.mesh, 0, dt);
  }
}

function updateSit(npc, dt) {
  npc.idlePhase += dt * 1.1;
  npc.mesh.position.copy(npc.homePos);
  npc.mesh.position.y += Math.sin(npc.idlePhase) * 0.012;
  npc.mesh.rotation.y = npc.homeFacing;
  npc.mesh.userData.isSitting = true;
  animateCharacter(npc.mesh, 0, dt);
}

function updateIdle(npc, dt) {
  npc.mesh.userData.isSitting = false;
  npc.idlePhase += dt * 1.5;
  npc.mesh.position.y = npc.homePos.y + Math.sin(npc.idlePhase) * 0.015;
  animateCharacter(npc.mesh, 0, dt);
}
