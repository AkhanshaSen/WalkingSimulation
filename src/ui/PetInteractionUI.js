import { FRIEND_THRESHOLD } from '../data/animalData.js';

export class PetInteractionUI {
  constructor(elements) {
    this.modal = elements.modal;
    this.portrait = elements.portrait;
    this.nameEl = elements.name;
    this.personalityEl = elements.personality;
    this.heartsEl = elements.hearts;
    this.petBtn = elements.petBtn;
    this.sitBtn = elements.sitBtn;
    this.shooBtn = elements.shooBtn;
    this.leaveBtn = elements.leaveBtn;
    this.inviteBtn = elements.inviteBtn;
    this.animal = null;
    this.open = false;
    this.onAction = null;
    this.onInvite = null;

    this.petBtn?.addEventListener('click', () => this._action('pet'));
    this.sitBtn?.addEventListener('click', () => this._action('sit'));
    this.shooBtn?.addEventListener('click', () => this._action('shoo'));
    this.leaveBtn?.addEventListener('click', () => this.hide());
    this.inviteBtn?.addEventListener('click', () => this._invite());
  }

  setHandlers({ onAction, onInvite }) {
    this.onAction = onAction;
    this.onInvite = onInvite;
  }

  isOpen() {
    return this.open;
  }

  show(animal) {
    if (!animal || !this.modal) return;
    this.animal = animal;
    this.open = true;
    this._render();
    this.modal.classList.remove('hidden');
  }

  hide() {
    this.open = false;
    this.animal = null;
    this.modal?.classList.add('hidden');
  }

  _render() {
    const a = this.animal;
    if (!a) return;
    const d = a.definition;
    this.portrait.textContent = d.emoji;
    this.nameEl.textContent = `${d.nameJa} · ${d.name}`;
    this.personalityEl.textContent = `${d.species} · ${d.personality}`;
    this._renderHearts(a.affinity);
    const isFriend = a.affinity >= FRIEND_THRESHOLD;
    this.inviteBtn?.classList.toggle('hidden', !isFriend || a.isPetCompanion);
    if (isFriend && !a.isPetCompanion) {
      this.inviteBtn.textContent = `🐾 Invite ${d.name} to follow`;
    }
  }

  _renderHearts(affinity) {
    if (!this.heartsEl) return;
    const filled = Math.floor(affinity / 20);
    this.heartsEl.innerHTML = '';
    for (let i = 0; i < 5; i++) {
      const span = document.createElement('span');
      span.className = 'pet-heart' + (i < filled ? ' filled' : '');
      span.textContent = i < filled ? '♥' : '♡';
      this.heartsEl.appendChild(span);
    }
  }

  _action(action) {
    if (!this.animal) return;
    const result = this.onAction?.(this.animal, action);

    if (action === 'pet') {
      this.animal.spawnHearts?.(5, '#ff4488');
    } else if (action === 'sit') {
      this.animal.spawnHearts?.(2, '#ffcc00');
    } else if (action === 'shoo') {
      setTimeout(() => this.hide(), 500);
    }

    this._render();
  }

  _invite() {
    if (!this.animal) return;
    this.onInvite?.(this.animal);
    this.hide();
  }

  refresh() {
    if (this.open && this.animal) this._render();
  }
}
