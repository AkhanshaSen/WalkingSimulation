// ── symbol renderers ──────────────────────────────────────────────────────────
function dot(ctx, mx, my, r, fill, stroke = null, sw = 1.5) {
  ctx.fillStyle = fill;
  ctx.beginPath();
  ctx.arc(mx, my, r, 0, Math.PI * 2);
  ctx.fill();
  if (stroke) {
    ctx.strokeStyle = stroke;
    ctx.lineWidth = sw;
    ctx.stroke();
  }
}

/** Small upright human silhouette (head + body) */
function personIcon(ctx, mx, my, bodyColor, headColor) {
  ctx.fillStyle = bodyColor;
  ctx.fillRect(mx - 2.5, my - 1, 5, 5);
  ctx.fillStyle = headColor ?? bodyColor;
  ctx.beginPath();
  ctx.arc(mx, my - 2.8, 2.8, 0, Math.PI * 2);
  ctx.fill();
}

/** Tiny paw — circle + 3 toe-dots */
function pawIcon(ctx, mx, my, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(mx, my + 1, 2.8, 0, Math.PI * 2);
  ctx.fill();
  [[-3, -2.5], [0, -4.5], [3, -2.5]].forEach(([dx, dy]) => {
    ctx.beginPath();
    ctx.arc(mx + dx, my + dy, 1.5, 0, Math.PI * 2);
    ctx.fill();
  });
}

/** Small diamond (rotated square) */
function diamondIcon(ctx, mx, my, color, size = 4) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(mx, my - size);
  ctx.lineTo(mx + size, my);
  ctx.lineTo(mx, my + size);
  ctx.lineTo(mx - size, my);
  ctx.closePath();
  ctx.fill();
}

/** 4-point star */
function starIcon(ctx, mx, my, color, r = 4.5) {
  ctx.fillStyle = color;
  ctx.beginPath();
  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2 - Math.PI / 2;
    const radius = i % 2 === 0 ? r : r * 0.45;
    const x = mx + Math.cos(angle) * radius;
    const y = my + Math.sin(angle) * radius;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fill();
}

/** Tiny house outline */
function shopIcon(ctx, mx, my, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(mx - 4.5, my - 0.5);
  ctx.lineTo(mx, my - 5.5);
  ctx.lineTo(mx + 4.5, my - 0.5);
  ctx.closePath();
  ctx.fill();
  ctx.fillRect(mx - 3.5, my - 0.5, 7, 5.5);
}

export const INTERACTION_COLORS = {
  npc: '#f09030',
  animal: '#d060c8',
  shop: '#f0c030',
  shrine: '#50d0a0',
  vending: '#40c8d0',
  bench: '#a07050',
  tree: '#c090b0',
  companion: '#60e8d8',
  player: '#4a90e8',
};

function getInteractableColor(item) {
  if (item.type === 'npc') return INTERACTION_COLORS.npc;
  if (item.type === 'animal') return INTERACTION_COLORS.animal;
  const id = item.definition?.id ?? '';
  if (item.definition?.shopId || id.startsWith('shop')) return INTERACTION_COLORS.shop;
  if (id === 'shrine') return INTERACTION_COLORS.shrine;
  if (id === 'vending') return INTERACTION_COLORS.vending;
  if (id === 'bench') return INTERACTION_COLORS.bench;
  if (id === 'cherry_tree' || id === 'shrine_tree') return INTERACTION_COLORS.tree;
  return INTERACTION_COLORS.bench;
}

function getInteractablePosition(item) {
  if (item.type === 'npc' || item.type === 'animal') {
    return item.mesh.position;
  }
  return item.mesh?.position;
}

function computeMapBounds(path, npcs, animals, worldProps, padding = 10, extraCurves = []) {
  let minX = Infinity;
  let maxX = -Infinity;
  let minZ = Infinity;
  let maxZ = -Infinity;

  const add = (x, z) => {
    if (x < minX) minX = x;
    if (x > maxX) maxX = x;
    if (z < minZ) minZ = z;
    if (z > maxZ) maxZ = z;
  };

  const sampleCurve = (curve) => {
    if (!curve?.getPointAt) return;
    for (let i = 0; i <= 60; i++) {
      const p = curve.getPointAt(i / 60);
      add(p.x, p.z);
    }
  };

  sampleCurve(path);
  for (const curve of extraCurves) {
    if (curve !== path) sampleCurve(curve);
  }

  for (const npc of npcs) {
    add(npc.mesh.position.x, npc.mesh.position.z);
  }
  for (const animal of animals) {
    add(animal.mesh.position.x, animal.mesh.position.z);
  }
  for (const prop of worldProps) {
    if (prop.mesh?.position) {
      add(prop.mesh.position.x, prop.mesh.position.z);
    }
  }

  if (!Number.isFinite(minX)) {
    return { minX: -20, maxX: 20, minZ: -100, maxZ: 20 };
  }

  return {
    minX: minX - padding,
    maxX: maxX + padding,
    minZ: minZ - padding,
    maxZ: maxZ + padding,
  };
}

export class Minimap {
  constructor(canvas, path, wrapEl = null, walkableCurves = []) {
    this.canvas = canvas;
    this.wrapEl = wrapEl;
    this.path = path;
    this.walkableCurves = walkableCurves ?? [];
    this.player = null;
    this.npcs = [];
    this.animals = [];
    this.worldProps = [];
    this.companion = null;
    this.petCompanion = null;
    this.nearbyInteractables = [];
    this.bounds = { minX: -20, maxX: 20, minZ: -100, maxZ: 20 };
    this.padding = 10;
    this._pulse = 0;
    this.unavailable = false;
    this.dpr = 1;
    this.size = canvas?.width || 180;

    this.fallbackEl = wrapEl?.querySelector('#minimap-fallback') ?? null;
    this.ctx = canvas?.getContext('2d') ?? null;

    if (!this.ctx) {
      console.warn('Minimap: 2D canvas context unavailable');
      this.unavailable = true;
      if (canvas) canvas.style.display = 'none';
      this.fallbackEl?.classList.remove('hidden');
      return;
    }

    const logicalSize = wrapEl?.clientWidth || canvas.width || 180;
    this.resize(logicalSize);
  }

  setPlayer(player)       { this.player = player; }
  setNpcs(npcs)           { this.npcs = npcs; this._recomputeBounds(); }
  setAnimals(animals)     { this.animals = animals; this._recomputeBounds(); }
  setWorldProps(props)    { this.worldProps = props; this._recomputeBounds(); }
  setCompanion(npc)       { this.companion = npc; }
  setPetCompanion(animal) { this.petCompanion = animal; }
  setNearbyInteractables(entries) { this.nearbyInteractables = entries ?? []; }

  _recomputeBounds() {
    this.bounds = computeMapBounds(
      this.path, this.npcs, this.animals, this.worldProps, 10, this.walkableCurves,
    );
  }

  resize(logicalSize) {
    if (this.unavailable || !this.canvas || !this.ctx) return;

    const size = Math.max(80, Math.round(logicalSize || this.wrapEl?.clientWidth || this.size || 180));
    this.size = size;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);

    this.canvas.width = Math.round(size * this.dpr);
    this.canvas.height = Math.round(size * this.dpr);
    this.canvas.style.width = `${size}px`;
    this.canvas.style.height = `${size}px`;

    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
  }

  _worldToMap(x, z) {
    const { minX, maxX, minZ, maxZ } = this.bounds;
    const spanX = maxX - minX || 1;
    const spanZ = maxZ - minZ || 1;
    const usable = this.size - this.padding * 2;
    return {
      mx: this.padding + ((x - minX) / spanX) * usable,
      my: this.padding + ((z - minZ) / spanZ) * usable,
    };
  }

  update() {
    if (this.unavailable || !this.ctx) return;

    const { ctx, size } = this;
    this._pulse = (this._pulse + 0.07) % (Math.PI * 2);
    ctx.clearRect(0, 0, size, size);

    ctx.save();
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2 - 2, 0, Math.PI * 2);
    ctx.clip();

    ctx.fillStyle = '#243c24';
    ctx.fillRect(0, 0, size, size);

    const harbor = this._worldToMap(22, -78);
    ctx.fillStyle = '#3a6890';
    ctx.beginPath();
    ctx.arc(harbor.mx, harbor.my, 18, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = '#1a1a1a';
    ctx.lineWidth = 7;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();
    for (let i = 0; i <= 60; i++) {
      const p = this.path.getPointAt(i / 60);
      const { mx, my } = this._worldToMap(p.x, p.z);
      if (i === 0) ctx.moveTo(mx, my);
      else ctx.lineTo(mx, my);
    }
    ctx.stroke();

    ctx.strokeStyle = 'rgba(220,210,180,0.55)';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Side paths — lighter strokes
    if (this.walkableCurves?.length) {
      for (const curve of this.walkableCurves) {
        if (curve === this.path) continue;
        ctx.strokeStyle = 'rgba(138,132,120,0.7)';
        ctx.lineWidth = 5;
        ctx.beginPath();
        for (let i = 0; i <= 40; i++) {
          const p = curve.getPointAt(i / 40);
          const { mx, my } = this._worldToMap(p.x, p.z);
          if (i === 0) ctx.moveTo(mx, my);
          else ctx.lineTo(mx, my);
        }
        ctx.stroke();
      }
    }

    for (const prop of this.worldProps) {
      const pos = prop.mesh.position;
      const { mx, my } = this._worldToMap(pos.x, pos.z);
      const id = prop.definition?.id ?? '';

      if (id === 'shrine') {
        starIcon(ctx, mx, my, INTERACTION_COLORS.shrine);
      } else if (id === 'vending') {
        dot(ctx, mx, my, 2.8, INTERACTION_COLORS.vending, '#ffffff', 1);
      } else if (id.startsWith('shop')) {
        shopIcon(ctx, mx, my, INTERACTION_COLORS.shop);
      } else if (id === 'bench') {
        dot(ctx, mx, my, 2, INTERACTION_COLORS.bench);
      } else if (id === 'cherry_tree' || id === 'shrine_tree') {
        dot(ctx, mx, my, 2, INTERACTION_COLORS.tree);
      }
    }

    for (const animal of this.animals) {
      if (animal === this.petCompanion) continue;
      const pos = animal.mesh.position;
      const { mx, my } = this._worldToMap(pos.x, pos.z);
      pawIcon(ctx, mx, my, INTERACTION_COLORS.animal);
    }

    if (this.petCompanion) {
      const pos = this.petCompanion.mesh.position;
      const { mx, my } = this._worldToMap(pos.x, pos.z);
      const pr = 5 + Math.sin(this._pulse) * 2;
      dot(ctx, mx, my, pr, 'rgba(208,96,200,0.25)');
      pawIcon(ctx, mx, my, '#ff80f0');
      ctx.strokeStyle = '#ff80f0';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(mx, my, pr, 0, Math.PI * 2);
      ctx.stroke();
    }

    for (const npc of this.npcs) {
      if (npc === this.companion) continue;
      const { mx, my } = this._worldToMap(npc.mesh.position.x, npc.mesh.position.z);
      if (npc.profile?.isAmbient) {
        dot(ctx, mx, my, 2, 'rgba(200,160,100,0.65)');
      } else {
        personIcon(ctx, mx, my, INTERACTION_COLORS.npc, '#f8d0a0');
      }
    }

    if (this.companion) {
      const { mx, my } = this._worldToMap(
        this.companion.mesh.position.x,
        this.companion.mesh.position.z,
      );
      const pr = 6 + Math.sin(this._pulse) * 2;
      dot(ctx, mx, my, pr, 'rgba(96,232,216,0.22)');
      personIcon(ctx, mx, my, INTERACTION_COLORS.companion, '#c0fff8');
      ctx.strokeStyle = INTERACTION_COLORS.companion;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(mx, my, pr, 0, Math.PI * 2);
      ctx.stroke();
    }

    for (const { item, dist } of this.nearbyInteractables) {
      const pos = getInteractablePosition(item);
      if (!pos) continue;
      const { mx, my } = this._worldToMap(pos.x, pos.z);
      const color = getInteractableColor(item);
      const intensity = 1 - Math.min(dist / 20, 0.75);
      const pr = 8 + Math.sin(this._pulse + dist) * 2.5 * intensity;
      const rgb = color.match(/#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})/i);
      if (rgb) {
        const [, r, g, b] = rgb;
        dot(ctx, mx, my, pr, `rgba(${parseInt(r, 16)},${parseInt(g, 16)},${parseInt(b, 16)},${0.15 + intensity * 0.2})`);
      }
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(mx, my, pr, 0, Math.PI * 2);
      ctx.stroke();
      diamondIcon(ctx, mx, my, color, 3.5);
    }

    if (this.player) {
      const pos = this.player.position;
      const { mx, my } = this._worldToMap(pos.x, pos.z);

      dot(ctx, mx, my, 11, 'rgba(74,144,232,0.22)');

      ctx.fillStyle = INTERACTION_COLORS.player;
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(mx, my, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      const f = this.player.facing ?? 0;
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.moveTo(mx + Math.sin(f) * 11, my + Math.cos(f) * 11);
      ctx.lineTo(mx + Math.sin(f + 2.5) * 6, my + Math.cos(f + 2.5) * 6);
      ctx.lineTo(mx + Math.sin(f - 2.5) * 6, my + Math.cos(f - 2.5) * 6);
      ctx.closePath();
      ctx.fill();
    }

    ctx.restore();

    ctx.strokeStyle = 'rgba(255,255,255,0.95)';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2 - 2, 0, Math.PI * 2);
    ctx.stroke();

    ctx.strokeStyle = 'rgba(80,180,160,0.55)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2 - 6, 0, Math.PI * 2);
    ctx.stroke();
  }
}
