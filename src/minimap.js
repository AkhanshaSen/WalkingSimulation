// ── Minimap palette ───────────────────────────────────────────────────────────
const MAP = {
  ground: '#ddd0b8',
  grass: '#7eb86a',
  road: '#f8f2e4',
  roadEdge: '#a88862',
  roadCenter: '#c9b898',
  water: '#7eb8d8',
  waterEdge: '#ffffff',
  building: '#b07858',
  buildingEdge: '#7a5038',
  badge: 'rgba(18, 20, 24, 0.92)',
  badgeRing: 'rgba(255, 255, 255, 0.42)',
  player: '#5ec8f0',
  playerCore: '#ffffff',
};

export const INTERACTION_COLORS = {
  npc: '#f09030',
  animal: '#d060c8',
  shop: '#f0c030',
  shrine: '#50d0a0',
  torii: '#e86050',
  home: '#e8c878',
  vending: '#40c8d0',
  bench: '#a07050',
  tree: '#c090b0',
  companion: '#60e8d8',
  player: MAP.player,
};

const GRASS_PATCHES = [
  [-6, -12, 10, 8], [14, -28, 9, 7], [-10, -52, 11, 9], [8, -68, 12, 10],
  [-4, -88, 10, 8], [18, -72, 8, 7], [6, -42, 9, 8],
];

// Player-centered zoom levels (world units from center to map edge). Last entry = full town.
const ZOOM_LEVELS = [
  { id: 'close', radius: 14, label: 'Close' },
  { id: 'near', radius: 24, label: 'Near' },
  { id: 'area', radius: 38, label: 'Area' },
  { id: 'town', label: 'Town' },
];
const DEFAULT_ZOOM_INDEX = 1;

function lerpAngle(from, to, t) {
  const delta = Math.atan2(Math.sin(to - from), Math.cos(to - from));
  return from + delta * t;
}

function getInteractableColor(item) {
  if (item.type === 'npc') return INTERACTION_COLORS.npc;
  if (item.type === 'animal') return INTERACTION_COLORS.animal;
  const id = item.definition?.id ?? '';
  if (item.definition?.shopId || id.startsWith('shop')) return INTERACTION_COLORS.shop;
  if (id === 'home') return INTERACTION_COLORS.home;
  if (id === 'shrine') return INTERACTION_COLORS.shrine;
  if (id === 'torii') return INTERACTION_COLORS.torii;
  if (id === 'vending') return INTERACTION_COLORS.vending;
  if (id === 'bench') return INTERACTION_COLORS.bench;
  if (id === 'cherry_tree' || id === 'shrine_tree') return INTERACTION_COLORS.tree;
  return INTERACTION_COLORS.bench;
}

function getInteractablePosition(item) {
  if (item.type === 'npc' || item.type === 'animal') return item.mesh.position;
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
  for (const npc of npcs) add(npc.mesh.position.x, npc.mesh.position.z);
  for (const animal of animals) add(animal.mesh.position.x, animal.mesh.position.z);
  for (const prop of worldProps) {
    if (prop.mesh?.position) add(prop.mesh.position.x, prop.mesh.position.z);
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

function drawPoiBadge(ctx, mx, my, iconFn) {
  ctx.fillStyle = MAP.badge;
  ctx.beginPath();
  ctx.arc(mx, my, 6.5, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = MAP.badgeRing;
  ctx.lineWidth = 1.1;
  ctx.stroke();
  ctx.save();
  ctx.translate(mx, my);
  iconFn(ctx);
  ctx.restore();
}

function whiteShopIcon(ctx) {
  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.moveTo(-3.5, 1);
  ctx.lineTo(0, -4);
  ctx.lineTo(3.5, 1);
  ctx.closePath();
  ctx.fill();
  ctx.fillRect(-2.8, 1, 5.6, 3.5);
}

function whiteHomeIcon(ctx) {
  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.moveTo(0, -4.5);
  ctx.lineTo(4.5, 0);
  ctx.lineTo(-4.5, 0);
  ctx.closePath();
  ctx.fill();
  ctx.fillRect(-3, 0, 6, 4);
}

function whiteShrineIcon(ctx) {
  ctx.fillStyle = '#fff';
  ctx.beginPath();
  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2 - Math.PI / 2;
    const r = i % 2 === 0 ? 4 : 1.8;
    const x = Math.cos(angle) * r;
    const y = Math.sin(angle) * r;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fill();
}

function whiteToriiIcon(ctx) {
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = 1.6;
  ctx.lineCap = 'round';
  [-2.5, 2.5].forEach((dx) => {
    ctx.beginPath();
    ctx.moveTo(dx, 2.5);
    ctx.lineTo(dx, -3.5);
    ctx.stroke();
  });
  ctx.beginPath();
  ctx.moveTo(-3.8, -1.5);
  ctx.lineTo(3.8, -1.5);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(-4.2, -3.2);
  ctx.lineTo(4.2, -3.2);
  ctx.stroke();
}

function whiteNpcIcon(ctx) {
  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.arc(0, -2, 2.2, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillRect(-2, 0.5, 4, 3.5);
}

function whitePawIcon(ctx) {
  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.arc(0, 1.5, 2.2, 0, Math.PI * 2);
  ctx.fill();
  [[-2.2, -1.5], [0, -2.8], [2.2, -1.5]].forEach(([x, y]) => {
    ctx.beginPath();
    ctx.arc(x, y, 1.2, 0, Math.PI * 2);
    ctx.fill();
  });
}

function whiteDotIcon(ctx) {
  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.arc(0, 0, 2.2, 0, Math.PI * 2);
  ctx.fill();
}

function drawBuilding(ctx, mx, my, w, h) {
  ctx.fillStyle = MAP.building;
  ctx.fillRect(mx - w / 2, my - h / 2, w, h);
  ctx.strokeStyle = MAP.buildingEdge;
  ctx.lineWidth = 0.8;
  ctx.strokeRect(mx - w / 2 + 0.3, my - h / 2 + 0.3, w - 0.6, h - 0.6);
}

function drawPlayerMarker(ctx, mx, my, facing, overview = false) {
  ctx.fillStyle = 'rgba(94, 200, 240, 0.25)';
  ctx.beginPath();
  ctx.arc(mx, my, 10, 0, Math.PI * 2);
  ctx.fill();

  const arrowAngle = overview
    ? Math.atan2(Math.sin(facing), -Math.cos(facing))
    : (facing ?? 0);

  ctx.save();
  ctx.translate(mx, my);
  ctx.rotate(arrowAngle);
  ctx.fillStyle = MAP.player;
  ctx.strokeStyle = MAP.playerCore;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(0, -10);
  ctx.lineTo(6, 8);
  ctx.lineTo(0, 4);
  ctx.lineTo(-6, 8);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
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
    this.padding = 8;
    this.zoomIndex = DEFAULT_ZOOM_INDEX;
    this._mapRotation = 0;
    this._mapRotationReady = false;
    this._pulse = 0;
    this.unavailable = false;
    this.dpr = 1;
    this.size = canvas?.width || 180;

    this.fallbackEl = wrapEl?.querySelector('#minimap-fallback') ?? null;
    this.titleEl = wrapEl?.closest('#minimap-panel')?.querySelector('#minimap-title') ?? null;
    this.ctx = canvas?.getContext('2d') ?? null;

    if (!this.ctx) {
      console.warn('Minimap: 2D canvas context unavailable');
      this.unavailable = true;
      if (canvas) canvas.style.display = 'none';
      this.fallbackEl?.classList.remove('hidden');
      return;
    }

    this.resize(wrapEl?.clientWidth || canvas.width || 180);
    this._bindZoomControl();
    this._updateZoomLabel();
  }

  _bindZoomControl() {
    if (!this.wrapEl) return;
    this.wrapEl.style.cursor = 'pointer';
    this.wrapEl.title = 'Click to change map zoom';
    this.wrapEl.addEventListener('click', () => this.cycleZoom());
  }

  cycleZoom() {
    this.zoomIndex = (this.zoomIndex + 1) % ZOOM_LEVELS.length;
    this._updateZoomLabel();
  }

  _updateZoomLabel() {
    if (this.titleEl) {
      this.titleEl.textContent = ZOOM_LEVELS[this.zoomIndex].label;
    }
  }

  _isOverview() {
    return ZOOM_LEVELS[this.zoomIndex].radius == null;
  }

  _localScale() {
    const radius = ZOOM_LEVELS[this.zoomIndex].radius;
    const usable = this.size - this.padding * 2;
    return usable / (radius * 2);
  }

  _inLocalView(x, z, margin = 1.15) {
    if (this._isOverview() || !this.player) return true;
    const radius = ZOOM_LEVELS[this.zoomIndex].radius * margin;
    const dx = x - this.player.position.x;
    const dz = z - this.player.position.z;
    return dx * dx + dz * dz <= radius * radius;
  }

  setPlayer(player) {
    this.player = player;
    this._mapRotationReady = false;
  }
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

  _playerFacing() {
    return this.player?.mesh?.rotation?.y ?? this.player?.facing ?? 0;
  }

  _tickMapRotation(dt = 1 / 60) {
    if (!this.player?.mesh || this._isOverview()) return;

    const target = this._playerFacing();
    if (!this._mapRotationReady) {
      this._mapRotation = target;
      this._mapRotationReady = true;
      return;
    }

    const t = 1 - Math.exp(-10 * dt);
    this._mapRotation = lerpAngle(this._mapRotation, target, t);
  }

  _worldToMap(x, z) {
    if (!this._isOverview() && this.player) {
      const cx = this.size / 2;
      const cy = this.size / 2;
      const scale = this._localScale();
      const dx = x - this.player.position.x;
      const dz = z - this.player.position.z;
      const f = this._mapRotation;
      const localRight = dx * (-Math.cos(f)) + dz * Math.sin(f);
      const localForward = dx * Math.sin(f) + dz * Math.cos(f);
      return {
        mx: cx + localRight * scale,
        my: cy - localForward * scale,
      };
    }

    const { minX, maxX, minZ, maxZ } = this.bounds;
    const spanX = maxX - minX || 1;
    const spanZ = maxZ - minZ || 1;
    const usable = this.size - this.padding * 2;
    return {
      mx: this.padding + ((x - minX) / spanX) * usable,
      my: this.padding + ((z - minZ) / spanZ) * usable,
    };
  }

  _drawRoad(ctx) {
    const drawCurve = (curve, width, color, dash = []) => {
      if (!curve?.getPointAt) return;
      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.setLineDash(dash);
      ctx.beginPath();
      for (let i = 0; i <= 60; i++) {
        const p = curve.getPointAt(i / 60);
        const { mx, my } = this._worldToMap(p.x, p.z);
        if (i === 0) ctx.moveTo(mx, my);
        else ctx.lineTo(mx, my);
      }
      ctx.stroke();
      ctx.setLineDash([]);
    };

    const edgeW = this._isOverview() ? 9 : 14;
    const roadW = this._isOverview() ? 6 : 10;
    drawCurve(this.path, edgeW, MAP.roadEdge);
    drawCurve(this.path, roadW, MAP.road);
    drawCurve(this.path, this._isOverview() ? 1 : 1.4, MAP.roadCenter, [2, 3]);
    for (const curve of this.walkableCurves ?? []) {
      if (curve === this.path) continue;
      drawCurve(curve, this._isOverview() ? 3.5 : 5, 'rgba(168, 136, 98, 0.75)');
    }
  }

  update(dt = 1 / 60) {
    if (this.unavailable || !this.ctx || !this.path) return;

    this._tickMapRotation(dt);

    const { ctx, size } = this;
    const cx = size / 2;
    const cy = size / 2;
    this._pulse = (this._pulse + 0.07) % (Math.PI * 2);

    ctx.clearRect(0, 0, size, size);

    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, size / 2 - 1, 0, Math.PI * 2);
    ctx.clip();

    ctx.fillStyle = MAP.ground;
    ctx.fillRect(0, 0, size, size);

    for (const [gx, gz, rx, rz] of GRASS_PATCHES) {
      if (!this._inLocalView(gx, gz)) continue;
      const { mx, my } = this._worldToMap(gx, gz);
      const patchScale = this._isOverview()
        ? (size - this.padding * 2) / (this.bounds.maxX - this.bounds.minX || 1)
        : this._localScale();
      ctx.fillStyle = MAP.grass;
      ctx.beginPath();
      const erx = this._isOverview() ? rx * patchScale * 0.18 : rx * patchScale * 0.35;
      const erz = this._isOverview() ? rz * patchScale * 0.18 : rz * patchScale * 0.35;
      ctx.ellipse(mx, my, erx, erz, 0, 0, Math.PI * 2);
      ctx.fill();
    }

    if (this._inLocalView(22, -78, 1.4)) {
      const harbor = this._worldToMap(22, -78);
      const waterRx = this._isOverview() ? 13 : 18 * this._localScale() * 0.12;
      const waterRy = this._isOverview() ? 10 : 14 * this._localScale() * 0.12;
      ctx.fillStyle = MAP.water;
      ctx.beginPath();
      ctx.ellipse(harbor.mx, harbor.my, waterRx, waterRy, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = MAP.waterEdge;
      ctx.lineWidth = 1.2;
      ctx.stroke();
    }

    this._drawRoad(ctx);

    for (const prop of this.worldProps) {
      const pos = prop.mesh.position;
      if (!this._inLocalView(pos.x, pos.z)) continue;
      const id = prop.definition?.id ?? '';
      const { mx, my } = this._worldToMap(pos.x, pos.z);
      if (id.startsWith('shop') || id === 'home' || id === 'shrine') {
        const scale = this._isOverview() ? 1 : Math.max(0.85, this._localScale() * 0.55);
        const bw = (id === 'shrine' ? 9 : id === 'home' ? 7 : 6) * scale;
        const bh = (id === 'shrine' ? 7 : 5) * scale;
        drawBuilding(ctx, mx, my, bw, bh);
      }
    }

    for (const prop of this.worldProps) {
      const pos = prop.mesh.position;
      if (!this._inLocalView(pos.x, pos.z)) continue;
      const { mx, my } = this._worldToMap(pos.x, pos.z);
      const id = prop.definition?.id ?? '';
      if (id === 'home') drawPoiBadge(ctx, mx, my, whiteHomeIcon);
      else if (id === 'shrine') drawPoiBadge(ctx, mx, my, whiteShrineIcon);
      else if (id === 'torii') drawPoiBadge(ctx, mx, my, whiteToriiIcon);
      else if (id.startsWith('shop')) drawPoiBadge(ctx, mx, my, whiteShopIcon);
      else if (id === 'vending') drawPoiBadge(ctx, mx, my, whiteDotIcon);
    }

    for (const animal of this.animals) {
      if (animal === this.petCompanion) continue;
      const pos = animal.mesh.position;
      if (!this._inLocalView(pos.x, pos.z)) continue;
      const { mx, my } = this._worldToMap(pos.x, pos.z);
      drawPoiBadge(ctx, mx, my, whitePawIcon);
    }

    if (this.petCompanion) {
      const pos = this.petCompanion.mesh.position;
      if (this._inLocalView(pos.x, pos.z)) {
        const { mx, my } = this._worldToMap(pos.x, pos.z);
        ctx.strokeStyle = 'rgba(208,96,200,0.55)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(mx, my, 8 + Math.sin(this._pulse) * 2, 0, Math.PI * 2);
        ctx.stroke();
        drawPoiBadge(ctx, mx, my, whitePawIcon);
      }
    }

    for (const npc of this.npcs) {
      if (npc === this.companion) continue;
      const pos = npc.mesh.position;
      if (!this._inLocalView(pos.x, pos.z)) continue;
      const { mx, my } = this._worldToMap(pos.x, pos.z);
      if (!npc.profile?.isAmbient) drawPoiBadge(ctx, mx, my, whiteNpcIcon);
    }

    if (this.companion) {
      const pos = this.companion.mesh.position;
      if (this._inLocalView(pos.x, pos.z)) {
        const { mx, my } = this._worldToMap(pos.x, pos.z);
        ctx.strokeStyle = INTERACTION_COLORS.companion;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(mx, my, 8, 0, Math.PI * 2);
        ctx.stroke();
        drawPoiBadge(ctx, mx, my, whiteNpcIcon);
      }
    }

    for (const { item, dist } of this.nearbyInteractables) {
      const pos = getInteractablePosition(item);
      if (!pos || !this._inLocalView(pos.x, pos.z)) continue;
      const { mx, my } = this._worldToMap(pos.x, pos.z);
      const color = getInteractableColor(item);
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(mx, my, 7 + Math.sin(this._pulse + dist) * 2, 0, Math.PI * 2);
      ctx.stroke();
    }

    if (this.player) {
      if (this._isOverview()) {
        const pos = this.player.position;
        const { mx, my } = this._worldToMap(pos.x, pos.z);
        drawPlayerMarker(ctx, mx, my, this._playerFacing(), true);
      } else {
        drawPlayerMarker(ctx, cx, cy, 0);
      }
    }

    ctx.restore();

    const ring = ctx.createRadialGradient(cx, cy, size / 2 - 16, cx, cy, size / 2);
    ring.addColorStop(0, 'rgba(255,255,255,0)');
    ring.addColorStop(0.8, 'rgba(255,255,255,0.1)');
    ring.addColorStop(1, 'rgba(255,255,255,0.38)');
    ctx.fillStyle = ring;
    ctx.beginPath();
    ctx.arc(cx, cy, size / 2, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = 'rgba(255,255,255,0.75)';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.arc(cx, cy, size / 2 - 1.5, 0, Math.PI * 2);
    ctx.stroke();

    if (this._isOverview()) {
      ctx.fillStyle = 'rgba(255,255,255,0.6)';
      ctx.font = 'bold 9px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('N', cx, 11);
    }
  }
}
