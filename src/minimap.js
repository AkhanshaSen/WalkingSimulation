import { MAP_BOUNDS } from './character.js';

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
  // body
  ctx.fillStyle = bodyColor;
  ctx.fillRect(mx - 2.5, my - 1, 5, 5);
  // head
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
  // roof
  ctx.beginPath();
  ctx.moveTo(mx - 4.5, my - 0.5);
  ctx.lineTo(mx, my - 5.5);
  ctx.lineTo(mx + 4.5, my - 0.5);
  ctx.closePath();
  ctx.fill();
  // walls
  ctx.fillRect(mx - 3.5, my - 0.5, 7, 5.5);
}

// ── Legend config ─────────────────────────────────────────────────────────────
const LEGEND = [
  { color: '#4a90e8', label: 'You' },
  { color: '#f09030', label: 'NPC' },
  { color: '#d060c8', label: 'Pet' },
  { color: '#f0c030', label: 'Shop' },
  { color: '#50d0a0', label: 'Shrine' },
  { color: '#40c8d0', label: 'Vend' },
];

export class Minimap {
  constructor(canvas, path) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.path = path;
    this.bounds = MAP_BOUNDS;
    this.player = null;
    this.npcs = [];
    this.animals = [];
    this.worldProps = [];
    this.companion = null;
    this.petCompanion = null;
    this.size = canvas.width;
    this.padding = 10;
    this._pulse = 0;
  }

  setPlayer(player)       { this.player = player; }
  setNpcs(npcs)           { this.npcs = npcs; }
  setAnimals(animals)     { this.animals = animals; }
  setWorldProps(props)    { this.worldProps = props; }
  setCompanion(npc)       { this.companion = npc; }
  setPetCompanion(animal) { this.petCompanion = animal; }

  _worldToMap(x, z) {
    const { minX, maxX, minZ, maxZ } = this.bounds;
    const spanX = maxX - minX;
    const spanZ = maxZ - minZ;
    const usable = this.size - this.padding * 2;
    return {
      mx: this.padding + ((x - minX) / spanX) * usable,
      my: this.padding + ((z - minZ) / spanZ) * usable,
    };
  }

  update() {
    const { ctx, size } = this;
    this._pulse = (this._pulse + 0.07) % (Math.PI * 2);
    ctx.clearRect(0, 0, size, size);

    // ── circular clip ──────────────────────────────────────────────────────
    ctx.save();
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2 - 2, 0, Math.PI * 2);
    ctx.clip();

    // ── background ─────────────────────────────────────────────────────────
    ctx.fillStyle = '#3a5a3a';
    ctx.fillRect(0, 0, size, size);

    // Harbor water blob
    ctx.fillStyle = '#4a7a9a';
    const harbor = this._worldToMap(22, -78);
    ctx.beginPath();
    ctx.arc(harbor.mx, harbor.my, 16, 0, Math.PI * 2);
    ctx.fill();

    // ── road path ──────────────────────────────────────────────────────────
    ctx.strokeStyle = '#2a2a2a';
    ctx.lineWidth = 6;
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

    ctx.strokeStyle = 'rgba(200,200,180,0.4)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // ── world props ────────────────────────────────────────────────────────
    for (const prop of this.worldProps) {
      const pos = prop.mesh.position;
      const { mx, my } = this._worldToMap(pos.x, pos.z);
      const id = prop.definition?.id ?? '';

      if (id === 'shrine') {
        starIcon(ctx, mx, my, '#50d0a0');
      } else if (id === 'vending') {
        dot(ctx, mx, my, 2.8, '#40c8d0', '#ffffff', 1);
      } else if (id.startsWith('shop')) {
        shopIcon(ctx, mx, my, '#f0c030');
      } else if (id === 'bench') {
        dot(ctx, mx, my, 2, '#a07050');
      } else if (id === 'cherry_tree' || id === 'shrine_tree') {
        dot(ctx, mx, my, 2, '#c090b0');
      }
    }

    // ── animals ────────────────────────────────────────────────────────────
    for (const animal of this.animals) {
      if (animal === this.petCompanion) continue;
      const pos = animal.mesh.position;
      const { mx, my } = this._worldToMap(pos.x, pos.z);
      pawIcon(ctx, mx, my, '#d060c8');
    }

    if (this.petCompanion) {
      const pos = this.petCompanion.mesh.position;
      const { mx, my } = this._worldToMap(pos.x, pos.z);
      // Pulsing ring for pet companion
      const pr = 5 + Math.sin(this._pulse) * 2;
      dot(ctx, mx, my, pr, 'rgba(208,96,200,0.25)');
      pawIcon(ctx, mx, my, '#ff80f0');
      ctx.strokeStyle = '#ff80f0';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(mx, my, pr, 0, Math.PI * 2);
      ctx.stroke();
    }

    // ── NPCs ───────────────────────────────────────────────────────────────
    for (const npc of this.npcs) {
      if (npc === this.companion) continue;
      const { mx, my } = this._worldToMap(npc.mesh.position.x, npc.mesh.position.z);
      if (npc.profile?.isAmbient) {
        dot(ctx, mx, my, 2, 'rgba(200,160,100,0.65)');
      } else {
        personIcon(ctx, mx, my, '#f09030', '#f8d0a0');
      }
    }

    // Companion NPC (teal pulsing ring)
    if (this.companion) {
      const { mx, my } = this._worldToMap(
        this.companion.mesh.position.x,
        this.companion.mesh.position.z,
      );
      const pr = 6 + Math.sin(this._pulse) * 2;
      dot(ctx, mx, my, pr, 'rgba(96,232,216,0.22)');
      personIcon(ctx, mx, my, '#60e8d8', '#c0fff8');
      ctx.strokeStyle = '#60e8d8';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(mx, my, pr, 0, Math.PI * 2);
      ctx.stroke();
    }

    // ── player ─────────────────────────────────────────────────────────────
    if (this.player) {
      const pos = this.player.position;
      const { mx, my } = this._worldToMap(pos.x, pos.z);

      // Soft aura
      dot(ctx, mx, my, 10, 'rgba(74,144,232,0.18)');

      // Body
      ctx.fillStyle = '#4a90e8';
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(mx, my, 5.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Direction arrow
      const f = this.player.facing ?? 0;
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.moveTo(mx + Math.sin(f) * 10, my + Math.cos(f) * 10);
      ctx.lineTo(mx + Math.sin(f + 2.5) * 5.5, my + Math.cos(f + 2.5) * 5.5);
      ctx.lineTo(mx + Math.sin(f - 2.5) * 5.5, my + Math.cos(f - 2.5) * 5.5);
      ctx.closePath();
      ctx.fill();
    }

    ctx.restore();

    // ── border rings ───────────────────────────────────────────────────────
    ctx.strokeStyle = 'rgba(255,255,255,0.9)';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2 - 2, 0, Math.PI * 2);
    ctx.stroke();

    ctx.strokeStyle = 'rgba(80,180,160,0.4)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2 - 5, 0, Math.PI * 2);
    ctx.stroke();

    // ── legend ─────────────────────────────────────────────────────────────
    const lx = 6, ly = size - 8;
    LEGEND.forEach(({ color, label }, i) => {
      const x = lx + i * (size / LEGEND.length);
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(x + 4, ly - 5, 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = 'rgba(255,255,255,0.75)';
      ctx.font = `${Math.round(size / 14)}px sans-serif`;
      ctx.textAlign = 'left';
      ctx.fillText(label, x + 9, ly);
    });
  }
}
