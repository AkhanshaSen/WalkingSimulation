/**
 * Gentle Japanese-inspired ambient loop (In-sen pentatonic koto + soft pad).
 * Synthesised at runtime — no external files, works offline and on GitHub Pages.
 */

const IN_SEN = [
  261.63, // C4
  311.13, // Eb4
  349.23, // F4
  392.0,  // G4
  466.16, // Bb4
  523.25, // C5
  622.25, // Eb5
  698.46, // F5
  783.99, // G5
];

/** Melody skeleton — scale-degree indices into IN_SEN (0–8), rests as null. */
const PHRASES = [
  [4, 3, 2, 3, 4, 5, 4, null, 3, 2, 1, 2, null],
  [2, 3, 4, 5, 6, 5, 4, null, 3, 2, 0, 2, null],
  [5, 4, 3, 2, 3, 4, null, 2, 3, 5, 4, null],
  [0, 2, 3, 4, 3, 2, 1, 0, null, 2, 4, 5, null],
];

const BEAT_SEC = 0.72;
const PHRASE_BEATS = 13;
const LOOP_PHRASES = PHRASES.length;

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export class MusicManager {
  constructor() {
    this.playing = false;
    this.volume = 0.38;
    this.ctx = null;
    this.master = null;
    this.reverb = null;
    this.bus = null;
    this.schedulerId = null;
    this.nextBeatTime = 0;
    this.beatIndex = 0;
    this.phraseIndex = 0;
    this.loopStartTime = 0;
    this._fadeTimer = null;
  }

  get isPlaying() {
    return this.playing;
  }

  async _ensureContext() {
    if (!this.ctx) {
      this.ctx = new AudioContext();
      this.master = this.ctx.createGain();
      this.master.gain.value = 0;
      this.master.connect(this.ctx.destination);

      this.reverb = this.ctx.createConvolver();
      this.reverb.buffer = this._makeReverbImpulse(2.8, 2.5);
      const reverbSend = this.ctx.createGain();
      reverbSend.gain.value = 0.42;
      this.reverb.connect(reverbSend);
      reverbSend.connect(this.master);

      this.bus = this.ctx.createGain();
      this.bus.gain.value = 1;
      this.bus.connect(this.master);
      this.bus.connect(this.reverb);
    }
    if (this.ctx.state === 'suspended') {
      await this.ctx.resume();
    }
  }

  _makeReverbImpulse(seconds, decay) {
    const rate = this.ctx.sampleRate;
    const length = rate * seconds;
    const impulse = this.ctx.createBuffer(2, length, rate);
    for (let ch = 0; ch < 2; ch++) {
      const data = impulse.getChannelData(ch);
      for (let i = 0; i < length; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, decay);
      }
    }
    return impulse;
  }

  _fadeTo(value, duration = 1.4) {
    if (!this.master || !this.ctx) return;
    clearTimeout(this._fadeTimer);
    const now = this.ctx.currentTime;
    this.master.gain.cancelScheduledValues(now);
    this.master.gain.setValueAtTime(this.master.gain.value, now);
    this.master.gain.linearRampToValueAtTime(value, now + duration);
  }

  _pluckKoto(freq, time, velocity = 0.2, duration = 2.8) {
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq * 1.002, time);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.992, time + 0.06);
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(2800, time);
    filter.frequency.exponentialRampToValueAtTime(900, time + duration);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime(velocity, time + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.bus);
    osc.start(time);
    osc.stop(time + duration + 0.05);
  }

  _shakuhachiBreath(time, freq = 392) {
    const dur = 3.2;
    const bufferSize = this.ctx.sampleRate * dur;
    const noiseBuf = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = noiseBuf.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / bufferSize, 1.6);
    }
    const src = this.ctx.createBufferSource();
    src.buffer = noiseBuf;
    const bp = this.ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.setValueAtTime(freq, time);
    bp.Q.value = 8;
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime(0.07, time + 0.35);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + dur);
    src.connect(bp);
    bp.connect(gain);
    gain.connect(this.bus);
    src.start(time);
    src.stop(time + dur);
  }

  _padDrone(time) {
    const freqs = [130.81, 196.0]; // C3, G3
    freqs.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq;
      osc.detune.value = i === 0 ? -4 : 5;
      gain.gain.setValueAtTime(0.0001, time);
      gain.gain.linearRampToValueAtTime(0.045, time + 2.5);
      osc.connect(gain);
      gain.connect(this.bus);
      osc.start(time);
      osc.stop(time + LOOP_PHRASES * PHRASE_BEATS * BEAT_SEC + 4);
    });
  }

  _scheduleBeat(beatTime) {
    const phrase = PHRASES[this.phraseIndex];
    const degree = phrase[this.beatIndex % PHRASE_BEATS];

    if (degree != null) {
      const freq = IN_SEN[degree];
      const accent = degree >= 5 ? 0.17 : 0.22;
      this._pluckKoto(freq, beatTime, accent, pick([2.4, 2.8, 3.2]));
    }

    // Soft companion note on some off-beats
    if (this.beatIndex % 4 === 2 && Math.random() < 0.55) {
      const companion = IN_SEN[Math.max(0, (degree ?? 2) - 2)];
      this._pluckKoto(companion, beatTime + 0.04, 0.08, 1.8);
    }

    this.beatIndex++;
    if (this.beatIndex >= PHRASE_BEATS) {
      this.beatIndex = 0;
      this.phraseIndex = (this.phraseIndex + 1) % LOOP_PHRASES;
      if (this.phraseIndex === 0 && Math.random() < 0.45) {
        this._shakuhachiBreath(beatTime + BEAT_SEC * 0.5, pick([349.23, 392, 466.16]));
      }
    }
  }

  _scheduler() {
    if (!this.playing || !this.ctx) return;
    const ahead = 0.18;
    while (this.nextBeatTime < this.ctx.currentTime + ahead) {
      this._scheduleBeat(this.nextBeatTime);
      this.nextBeatTime += BEAT_SEC;
    }
    this.schedulerId = setTimeout(() => this._scheduler(), 25);
  }

  async play() {
    await this._ensureContext();
    if (this.playing) return true;

    this.playing = true;
    this.beatIndex = 0;
    this.phraseIndex = 0;
    this.nextBeatTime = this.ctx.currentTime + 0.08;
    this.loopStartTime = this.ctx.currentTime;
    this._padDrone(this.ctx.currentTime + 0.05);
    this._fadeTo(this.volume);
    this._scheduler();
    return true;
  }

  async pause() {
    if (!this.playing) return false;
    this.playing = false;
    clearTimeout(this.schedulerId);
    this.schedulerId = null;
    this._fadeTo(0, 1.0);
    this._fadeTimer = setTimeout(() => {
      if (!this.playing && this.ctx?.state === 'running') {
        this.ctx.suspend().catch(() => {});
      }
    }, 1100);
    return false;
  }

  async toggle() {
    if (this.playing) {
      await this.pause();
      return false;
    }
    await this.play();
    return true;
  }
}
