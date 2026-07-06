import { OUTFIT_MODELS, OUTFIT_ACCENTS, OUTFIT_HATS, OUTFIT_SHOES } from '../data/outfitData.js';
import { attachAccessory } from '../accessories.js';

export class OutfitUI {
  constructor(elements, game) {
    this.modal = elements.modal;
    this.closeBtn = elements.closeBtn;
    this.modelLabel = elements.modelLabel;
    this.accentLabel = elements.accentLabel;
    this.hatLabel = elements.hatLabel;
    this.shoesLabel = elements.shoesLabel;
    this.game = game;

    this.indices = { model: 0, accent: 0, hat: 0, shoes: 0 };
    this.open = false;

    this.closeBtn?.addEventListener('click', () => this.hide());
    this._wirePair('model', elements.modelPrev, elements.modelNext, OUTFIT_MODELS);
    this._wirePair('accent', elements.accentPrev, elements.accentNext, OUTFIT_ACCENTS);
    this._wirePair('hat', elements.hatPrev, elements.hatNext, OUTFIT_HATS);
    this._wirePair('shoes', elements.shoesPrev, elements.shoesNext, OUTFIT_SHOES);
  }

  _wirePair(slot, prevBtn, nextBtn, list) {
    prevBtn?.addEventListener('click', () => this._cycle(slot, list, -1));
    nextBtn?.addEventListener('click', () => this._cycle(slot, list, 1));
  }

  _cycle(slot, list, dir) {
    this.indices[slot] = (this.indices[slot] + dir + list.length) % list.length;
    this._applyOutfit();
    this._updateLabels();
  }

  _applyOutfit() {
    const model  = OUTFIT_MODELS[this.indices.model];
    const accent = OUTFIT_ACCENTS[this.indices.accent];
    const hat    = OUTFIT_HATS[this.indices.hat];
    const shoes  = OUTFIT_SHOES[this.indices.shoes];

    // Accent overrides the skin's own tint; otherwise use the skin's built-in tint.
    let tint, tintStrength;
    if (accent.tint !== null) {
      tint = accent.tint;
      tintStrength = 0.30;
    } else if (shoes.tint !== null) {
      tint = shoes.tint;
      tintStrength = 0.22;
    } else {
      tint = model.tint ?? null;
      tintStrength = model.tintStrength ?? 0.22;
    }

    const player = this.game?.player;
    if (!player) return;

    player.setOutfit({ modelKey: model.key, tint, tintStrength });

    // Apply headgear after the skin swap (new mesh was just created).
    attachAccessory(player.mesh, hat.id);
  }

  _updateLabels() {
    if (this.modelLabel) this.modelLabel.textContent = OUTFIT_MODELS[this.indices.model].label;
    if (this.accentLabel) this.accentLabel.textContent = OUTFIT_ACCENTS[this.indices.accent].label;
    if (this.hatLabel) this.hatLabel.textContent = OUTFIT_HATS[this.indices.hat].label;
    if (this.shoesLabel) this.shoesLabel.textContent = OUTFIT_SHOES[this.indices.shoes].label;
  }

  _syncFromPlayer() {
    const outfit = this.game?.player?.outfit;
    if (!outfit) return;
    const modelIdx = OUTFIT_MODELS.findIndex((m) => m.key === outfit.modelKey);
    if (modelIdx >= 0) this.indices.model = modelIdx;
    const accentIdx = OUTFIT_ACCENTS.findIndex((a) => a.tint === outfit.tint);
    if (accentIdx >= 0) this.indices.accent = accentIdx;
    const accId = this.game?.player?.mesh?.userData?.accessoryId ?? 'none';
    const hatIdx = OUTFIT_HATS.findIndex((h) => h.id === accId);
    if (hatIdx >= 0) this.indices.hat = hatIdx;
    this._updateLabels();
  }

  show() {
    if (!this.modal) return;
    this.open = true;
    this._syncFromPlayer();
    this.modal.classList.remove('hidden');
    if (this.game) {
      this.game.outfitOpen = true;
      this._savedCamera = {
        angle: this.game.input.cameraAngle,
        pitch: this.game.input.cameraPitch,
        distance: this.game.input.cameraDistance,
      };
      this.game.input.cameraPitch = 0.38;
      this.game.input.cameraDistance = 3.8;
      this.game.input.cameraAngle = this.game.player.facing + Math.PI;
    }
  }

  hide() {
    this.open = false;
    this.modal?.classList.add('hidden');
    if (this.game) {
      this.game.outfitOpen = false;
      if (this._savedCamera) {
        this.game.input.cameraAngle = this._savedCamera.angle;
        this.game.input.cameraPitch = this._savedCamera.pitch;
        this.game.input.cameraDistance = this._savedCamera.distance;
      }
    }
  }

  isOpen() {
    return this.open;
  }

  toggle() {
    if (this.open) this.hide();
    else this.show();
  }
}
