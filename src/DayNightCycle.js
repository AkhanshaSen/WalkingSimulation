import * as THREE from 'three';

const PERIOD_LABELS = {
  morning: 'Morning',
  day: 'Daytime',
  evening: 'Evening',
  night: 'Night',
};

/** Key hours for sky / light colour blending (24 h). */
const SKY_KEYS = [
  { hour: 0,  sky: 0x1a2840, fog: 0x1a2840, hemiSky: 0x334466, hemiGround: 0x1a2830, sun: 0x6688bb, sunI: 0.12, ambient: 0x223344, ambientI: 0.35, exposure: 0.72 },
  { hour: 5,  sky: 0x4a6888, fog: 0x5a7898, hemiSky: 0x8899bb, hemiGround: 0x5a7060, sun: 0xffb080, sunI: 0.28, ambient: 0xc8b0a0, ambientI: 0.38, exposure: 0.88 },
  { hour: 8,  sky: 0x91d3c8, fog: 0x91d3c8, hemiSky: 0x97c5dd, hemiGround: 0x91d3c8, sun: 0xfff4e8, sunI: 0.65, ambient: 0xe8ddd9, ambientI: 0.45, exposure: 1.08 },
  { hour: 12, sky: 0x98d8d0, fog: 0x98d8d0, hemiSky: 0xa0d8f0, hemiGround: 0x8ec8a8, sun: 0xfff8f0, sunI: 0.72, ambient: 0xf0ece8, ambientI: 0.48, exposure: 1.12 },
  { hour: 17, sky: 0xe8b888, fog: 0xe0b090, hemiSky: 0xf0c090, hemiGround: 0xc89878, sun: 0xff8844, sunI: 0.48, ambient: 0xf0d0b0, ambientI: 0.42, exposure: 0.98 },
  { hour: 20, sky: 0x3a4868, fog: 0x3a4868, hemiSky: 0x556688, hemiGround: 0x2a3848, sun: 0x8899cc, sunI: 0.18, ambient: 0x445566, ambientI: 0.38, exposure: 0.78 },
  { hour: 24, sky: 0x1a2840, fog: 0x1a2840, hemiSky: 0x334466, hemiGround: 0x1a2830, sun: 0x6688bb, sunI: 0.12, ambient: 0x223344, ambientI: 0.35, exposure: 0.72 },
];

function lerpColor(a, b, t) {
  const ca = new THREE.Color(a);
  const cb = new THREE.Color(b);
  return ca.lerp(cb, t).getHex();
}

function lerpNum(a, b, t) {
  return a + (b - a) * t;
}

function sampleSkyKeys(hour) {
  let a = SKY_KEYS[0];
  let b = SKY_KEYS[SKY_KEYS.length - 1];
  for (let i = 0; i < SKY_KEYS.length - 1; i++) {
    if (hour >= SKY_KEYS[i].hour && hour < SKY_KEYS[i + 1].hour) {
      a = SKY_KEYS[i];
      b = SKY_KEYS[i + 1];
      break;
    }
  }
  const span = b.hour - a.hour || 1;
  const t = THREE.MathUtils.clamp((hour - a.hour) / span, 0, 1);
  return {
    sky: lerpColor(a.sky, b.sky, t),
    fog: lerpColor(a.fog, b.fog, t),
    hemiSky: lerpColor(a.hemiSky, b.hemiSky, t),
    hemiGround: lerpColor(a.hemiGround, b.hemiGround, t),
    sun: lerpColor(a.sun, b.sun, t),
    sunI: lerpNum(a.sunI, b.sunI, t),
    ambient: lerpColor(a.ambient, b.ambient, t),
    ambientI: lerpNum(a.ambientI, b.ambientI, t),
    exposure: lerpNum(a.exposure, b.exposure, t),
  };
}

export class DayNightCycle {
  constructor(game, town) {
    this.game = game;
    this.town = town;
    this.minutesPerSecond = 1.5;
    this.timeMinutes = 8 * 60 + 15;
    this.timeEl = document.getElementById('time-display');
    this.periodEl = document.getElementById('period-display');
  }

  get hour24() {
    return Math.floor(this.timeMinutes / 60) % 24;
  }

  get minute() {
    return Math.floor(this.timeMinutes % 60);
  }

  get hourFloat() {
    return (this.timeMinutes % (24 * 60)) / 60;
  }

  getPeriod() {
    const h = this.hour24;
    if (h >= 5 && h < 11) return 'morning';
    if (h >= 11 && h < 17) return 'day';
    if (h >= 17 && h < 20) return 'evening';
    return 'night';
  }

  formatTime() {
    const h = this.hour24;
    const m = this.minute;
    const ampm = h >= 12 ? 'PM' : 'AM';
    const h12 = h % 12 || 12;
    return `${h12}:${m.toString().padStart(2, '0')} ${ampm}`;
  }

  update(dt) {
    this.timeMinutes = (this.timeMinutes + dt * this.minutesPerSecond) % (24 * 60);
    this._applyLighting();
    this._updateHUD();
  }

  _updateHUD() {
    if (this.timeEl) this.timeEl.textContent = this.formatTime();
    if (this.periodEl) {
      const period = this.getPeriod();
      this.periodEl.textContent = PERIOD_LABELS[period];
      this.periodEl.dataset.period = period;
    }
  }

  _applyLighting() {
    const { scene, renderer } = this.game;
    const lights = this.town?.lights;
    if (!scene || !lights) return;

    const hour = this.hourFloat;
    const sample = sampleSkyKeys(hour);

    scene.background.setHex(sample.sky);
    if (scene.fog) scene.fog.color.setHex(sample.fog);

    if (lights.hemi) {
      lights.hemi.color.setHex(sample.hemiSky);
      lights.hemi.groundColor.setHex(sample.hemiGround);
      lights.hemi.intensity = lerpNum(0.9, 1.35, sample.sunI / 0.72);
    }
    if (lights.sun) {
      lights.sun.color.setHex(sample.sun);
      lights.sun.intensity = sample.sunI;
      const sunAngle = ((hour - 6) / 12) * Math.PI;
      const sunHeight = Math.max(0.08, Math.sin(sunAngle));
      const pp = this.game.player?.position ?? { x: 0, z: -40 };
      lights.sun.position.set(
        pp.x + 14 * Math.cos(sunAngle * 0.5),
        8 + sunHeight * 24,
        pp.z + 10 + sunHeight * 8,
      );
    }
    if (lights.ambient) {
      lights.ambient.color.setHex(sample.ambient);
      lights.ambient.intensity = sample.ambientI;
    }
    if (lights.fill) {
      lights.fill.intensity = lerpNum(0.22, 0.5, sample.sunI / 0.72);
    }

    const isNight = hour < 5 || hour >= 20;
    lights.street?.forEach((pl) => {
      pl.intensity = isNight ? 0.55 : 0.22;
    });
    if (lights.shrine) {
      lights.shrine.intensity = isNight ? 0.45 : 0.22;
    }

    if (renderer) {
      renderer.toneMappingExposure = sample.exposure;
    }

    this._updateSkyGradient(sample);
  }

  _updateSkyGradient(sample) {
    const ctx = this.town?.skyCtx;
    if (!ctx || !this.town?.skyTex) return;

    const top = new THREE.Color(sample.hemiSky);
    const mid = new THREE.Color(sample.sky);
    const bottom = new THREE.Color(sample.hemiGround);

    const grad = ctx.createLinearGradient(0, 0, 0, 64);
    grad.addColorStop(0, `#${top.getHexString()}`);
    grad.addColorStop(0.55, `#${mid.getHexString()}`);
    grad.addColorStop(1, `#${bottom.getHexString()}`);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1, 64);
    this.town.skyTex.needsUpdate = true;
  }
}
