import { MAP_BOUNDS } from './character.js';

export class Minimap {
  constructor(canvas, path) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.path = path;
    this.bounds = MAP_BOUNDS;
    this.player = null;
    this.npcs = [];
    this.companion = null;
    this.size = canvas.width;
    this.padding = 10;
  }

  setPlayer(player) {
    this.player = player;
  }

  setNpcs(npcs) {
    this.npcs = npcs;
  }

  setCompanion(companion) {
    this.companion = companion;
  }

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
    ctx.clearRect(0, 0, size, size);

    ctx.save();
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2 - 2, 0, Math.PI * 2);
    ctx.clip();

    ctx.fillStyle = '#6a9a6a';
    ctx.fillRect(0, 0, size, size);

    ctx.fillStyle = '#5a8aaa';
    const harbor = this._worldToMap(22, -62);
    ctx.beginPath();
    ctx.arc(harbor.mx, harbor.my, 14, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = '#2a2a2a';
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();
    for (let i = 0; i <= 48; i++) {
      const p = this.path.getPointAt(i / 48);
      const { mx, my } = this._worldToMap(p.x, p.z);
      if (i === 0) ctx.moveTo(mx, my);
      else ctx.lineTo(mx, my);
    }
    ctx.stroke();

    ctx.strokeStyle = 'rgba(255,255,255,0.35)';
    ctx.lineWidth = 2;
    ctx.stroke();

    for (const npc of this.npcs) {
      if (npc.isCompanion) continue;
      const { mx, my } = this._worldToMap(npc.mesh.position.x, npc.mesh.position.z);
      ctx.fillStyle = '#e85050';
      ctx.beginPath();
      ctx.arc(mx, my, 3.5, 0, Math.PI * 2);
      ctx.fill();
    }

    if (this.companion) {
      const { mx, my } = this._worldToMap(
        this.companion.mesh.position.x,
        this.companion.mesh.position.z,
      );
      ctx.fillStyle = '#3a8a8a';
      ctx.beginPath();
      ctx.arc(mx, my, 4, 0, Math.PI * 2);
      ctx.fill();
    }

    if (this.player) {
      const pos = this.player.position;
      const { mx, my } = this._worldToMap(pos.x, pos.z);

      ctx.fillStyle = 'rgba(58, 122, 232, 0.25)';
      ctx.beginPath();
      ctx.arc(mx, my, 9, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#3a7ae8';
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(mx, my, 5.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      const facing = this.player.facing ?? 0;
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.moveTo(mx, my);
      ctx.lineTo(mx + Math.sin(facing) * 10, my + Math.cos(facing) * 10);
      ctx.lineTo(mx + Math.sin(facing + 2.4) * 6, my + Math.cos(facing + 2.4) * 6);
      ctx.closePath();
      ctx.fill();
    }

    ctx.restore();

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.95)';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2 - 2, 0, Math.PI * 2);
    ctx.stroke();

    ctx.strokeStyle = 'rgba(42, 106, 106, 0.5)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2 - 5, 0, Math.PI * 2);
    ctx.stroke();
  }
}
