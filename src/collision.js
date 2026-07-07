/**
 * Lightweight 2D collision world (XZ plane).
 * Circle-vs-rotated-box and circle-vs-circle resolution.
 */

function resolveCircleBox(px, pz, radius, bx, bz, halfW, halfD, rotY) {
  const cos = Math.cos(-rotY);
  const sin = Math.sin(-rotY);
  const dx = px - bx;
  const dz = pz - bz;
  const lx = dx * cos - dz * sin;
  const lz = dx * sin + dz * cos;

  const clampX = Math.max(-halfW, Math.min(halfW, lx));
  const clampZ = Math.max(-halfD, Math.min(halfD, lz));
  const nearX = lx - clampX;
  const nearZ = lz - clampZ;
  const distSq = nearX * nearX + nearZ * nearZ;

  if (distSq >= radius * radius || distSq < 1e-8) return null;

  const dist = Math.sqrt(distSq);
  const push = radius - dist;
  const nx = nearX / dist;
  const nz = nearZ / dist;
  const wx = nx * cos + nz * sin;
  const wz = -nx * sin + nz * cos;
  return { x: px + wx * push, z: pz + wz * push };
}

function resolveCircleCircle(px, pz, r1, cx, cz, r2) {
  const dx = px - cx;
  const dz = pz - cz;
  const dist = Math.hypot(dx, dz);
  const minDist = r1 + r2;
  if (dist >= minDist || dist < 1e-6) return null;
  const push = (minDist - dist) / dist;
  return { x: px + dx * push, z: pz + dz * push };
}

export class ColliderWorld {
  constructor() {
    this.boxes = [];
    this.circles = [];
  }

  addBox(x, z, halfW, halfD, rotY = 0) {
    this.boxes.push({ x, z, halfW, halfD, rotY });
  }

  addCircle(x, z, radius) {
    this.circles.push({ x, z, radius });
  }

  /** Push player position out of colliders. Mutates pos (Vector3). */
  resolve(pos, playerRadius = 0.45, iterations = 2) {
    let px = pos.x;
    let pz = pos.z;

    for (let iter = 0; iter < iterations; iter++) {
      for (const box of this.boxes) {
        const out = resolveCircleBox(px, pz, playerRadius, box.x, box.z, box.halfW, box.halfD, box.rotY);
        if (out) { px = out.x; pz = out.z; }
      }
      for (const circ of this.circles) {
        const out = resolveCircleCircle(px, pz, playerRadius, circ.x, circ.z, circ.radius);
        if (out) { px = out.x; pz = out.z; }
      }
    }

    pos.x = px;
    pos.z = pz;
  }
}
