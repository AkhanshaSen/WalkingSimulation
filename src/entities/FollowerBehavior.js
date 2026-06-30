import * as THREE from 'three';

export function moveToward(mesh, target, dt, speed, stopDist, onStep) {
  const dx = target.x - mesh.position.x;
  const dz = target.z - mesh.position.z;
  const dist = Math.hypot(dx, dz);

  if (dist > stopDist) {
    const step = Math.min(speed * dt, dist - stopDist);
    mesh.position.x += (dx / dist) * step;
    mesh.position.z += (dz / dist) * step;
    mesh.rotation.y = Math.atan2(dx, dz);
    onStep?.(speed, dt);
    return false;
  }

  onStep?.(0, dt);
  return true;
}

export function followPlayer(mesh, playerPos, playerFacing, dt, speed, offsetDist, stopDist, onStep) {
  const offset = new THREE.Vector3(
    -Math.sin(playerFacing) * offsetDist,
    0,
    -Math.cos(playerFacing) * offsetDist,
  );
  const target = playerPos.clone().add(offset);
  target.y = mesh.position.y;
  return moveToward(mesh, target, dt, speed, stopDist, onStep);
}
