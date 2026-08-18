import { RaycastPicker } from './RaycastPicker.js';

export class InteractionSystem {
  constructor(player, registry, dialogue, game, petUI, shopUI) {
    this.player = player;
    this.registry = registry;
    this.dialogue = dialogue;
    this.game = game;
    this.petUI = petUI;
    this.shopUI = shopUI;
    this.picker = new RaycastPicker();
    this.approachRange = 9;
    this.spotRange = 20;
    this._hintTargets = [];
    this._hintIndex = 0;

    dialogue.onHintSelect = (index) => {
      this._hintIndex = index;
      this._interactWithItem(this._hintTargets[index]);
    };
  }

  setRewardHandler(handler) {
    this.dialogue.setRewardHandler(handler);
  }

  isBlocking() {
    return this.dialogue.isBlocking() || this.petUI?.isOpen() || this.shopUI?.isOpen() || this.game?.outfitOpen;
  }

  _interactWithNpc(npc) {
    if (!npc) return false;
    npc.clearIgnore?.();
    npc.stopApproaching?.();
    this.dialogue.showApproach(npc, { initiated: false });
    return true;
  }

  _interactWithItem(item) {
    if (!item) return false;
    const playerPos = this.player.position;
    const maxRange = item.type === 'npc'
      ? (item.isCompanion ? this.approachRange + 2 : this.spotRange)
      : (item.range ?? this.approachRange);

    if (!item.canInteract?.(playerPos) && item.distanceTo(playerPos) > maxRange) {
      this.dialogue._showToast('Move closer to interact.');
      return false;
    }

    if (item.type === 'npc') {
      return this._interactWithNpc(item);
    }

    item.interact({
      game: this.game,
      dialogue: this.dialogue,
      petUI: this.petUI,
      shopUI: this.shopUI,
      player: this.player,
    });
    return true;
  }

  _refreshHintTargets() {
    const nearby = this.registry.findAllInteractable(this.player.position, this.approachRange)
      .slice(0, 6);
    const ids = nearby.map(({ item }) => item);
    const prevId = this._hintTargets[this._hintIndex];
    this._hintTargets = ids;

    if (!ids.length) {
      this._hintIndex = 0;
      this.dialogue.hideInteractHint();
      return;
    }

    const kept = prevId ? ids.indexOf(prevId) : -1;
    this._hintIndex = kept >= 0 ? kept : 0;
    this.dialogue.showInteractHints(this._hintTargets, this._hintIndex);
  }

  update(input, camera, canvas) {
    if (this.isBlocking()) {
      this.dialogue.hideInteractHint();
      this._hintTargets = [];
      return;
    }

    const npcs = this.registry.getNpcs();

    for (const npc of npcs) {
      if (npc.isCompanion) continue;
      const dist = npc.distanceTo(this.player.position);
      const inTalkRange = dist < this.approachRange;
      npc.setPlayerNearby(inTalkRange, this.player.position);
    }

    const closestNpc = this.registry.findNearest(this.player.position, this.approachRange, {
      types: ['npc'],
    });
    const inRange = !!closestNpc;

    if (this.dialogue.approachOpen && !inRange && !this.dialogue.approachInitiated) {
      this.dialogue.hideApproach();
    }

    this._refreshHintTargets();

    if (input.consumeKey('Tab') && this._hintTargets.length > 1) {
      this._hintIndex = (this._hintIndex + 1) % this._hintTargets.length;
      this.dialogue.showInteractHints(this._hintTargets, this._hintIndex);
    }

    for (let i = 1; i <= 9; i++) {
      if (input.consumeKey(`Digit${i}`) && i <= this._hintTargets.length) {
        this._hintIndex = i - 1;
        this._interactWithItem(this._hintTargets[this._hintIndex]);
      }
    }

    const tap = input.consumeTap();
    if (tap) {
      const hit = this.picker.pickFromTap(tap, camera, canvas, this.registry.getHitTargets());
      if (hit) {
        this._interactWithItem(hit);
      }
    }

    if (input.consumeKey('KeyE')) {
      const companion = this.game.companion;
      let target = companion ?? this._hintTargets[this._hintIndex] ?? null;

      if (!target) {
        target = this.registry.findNearest(this.player.position, this.approachRange + 2, {
          includeIgnored: true,
        });
      }

      if (target) {
        this._interactWithItem(target);
      } else {
        this.dialogue._showToast('Nothing nearby to interact with.');
      }
    }
  }
}
