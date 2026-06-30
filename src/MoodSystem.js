/**
 * MoodSystem — tracks the player's emotional state (0–100 score).
 *
 * Score drifts slowly back toward the "content" baseline (55) over time.
 * Interactions boost or drain score and trigger a face expression change
 * on the player mesh, plus a floating emoji pop-up at the screen centre.
 */

const MOODS = [
  { min: 85, name: 'joyful',   emoji: '😄', expression: 'happy',    color: '#f0c030' },
  { min: 65, name: 'happy',    emoji: '😊', expression: 'happy',    color: '#80d080' },
  { min: 45, name: 'content',  emoji: '🙂', expression: null,       color: '#60b8d8' },
  { min: 25, name: 'tired',    emoji: '😐', expression: 'thinking', color: '#a0a0b8' },
  { min:  0, name: 'sad',      emoji: '😢', expression: 'thinking', color: '#8070c0' },
];

const BASELINE = 55;
const DRIFT_RATE = 0.4;   // points per second toward baseline
const DRIFT_INTERVAL = 4; // seconds between drift ticks

export class MoodSystem {
  constructor() {
    this.score = 60;
    this._driftTimer = 0;
    this._prevMoodName = 'content';
    this._floatEl = null;    // DOM element for floating pop-up
    this._floatTimeout = null;
  }

  getMood() {
    for (const m of MOODS) {
      if (this.score >= m.min) return m;
    }
    return MOODS[MOODS.length - 1];
  }

  /**
   * Boost mood by `amount` points.
   * If the mood *tier* changes, fires the floating emoji animation.
   * Returns the current mood descriptor.
   */
  boost(amount, label = null) {
    const prev = this.getMood().name;
    this.score = Math.min(100, this.score + amount);
    const next = this.getMood();
    if (next.name !== prev || label) {
      this._triggerFloat(next.emoji, label, next.color);
    }
    return next;
  }

  drain(amount) {
    this.score = Math.max(0, this.score - amount);
    return this.getMood();
  }

  /** Call once per game frame with `dt` (seconds). Returns current mood. */
  update(dt) {
    this._driftTimer += dt;
    if (this._driftTimer >= DRIFT_INTERVAL) {
      this._driftTimer = 0;
      if (this.score > BASELINE) {
        this.score = Math.max(BASELINE, this.score - DRIFT_RATE);
      } else if (this.score < BASELINE) {
        this.score = Math.min(BASELINE, this.score + DRIFT_RATE * 0.5);
      }
    }
    return this.getMood();
  }

  /** Attach the DOM float container (called once from game.js). */
  setFloatContainer(el) {
    this._floatEl = el;
  }

  _triggerFloat(emoji, label, color) {
    if (!this._floatEl) return;
    clearTimeout(this._floatTimeout);

    // Build inner HTML
    const text = label ? `${emoji} ${label}` : emoji;
    this._floatEl.textContent = text;
    this._floatEl.style.color = color ?? '#f0e060';
    this._floatEl.classList.remove('mood-float-active');

    // Force reflow so animation restarts
    void this._floatEl.offsetWidth;
    this._floatEl.classList.add('mood-float-active');

    this._floatTimeout = setTimeout(() => {
      this._floatEl.classList.remove('mood-float-active');
    }, 2000);
  }

  /** Returns 0–100 for a progress bar. */
  getPercent() {
    return this.score;
  }
}
