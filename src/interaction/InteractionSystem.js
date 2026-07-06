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

    // Wire hint-button click back to this system
    dialogue.onHintClick = () => {
      if (dialogue.hintItem) this._interactWithItem(dialogue.hintItem);
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

  update(input, camera, canvas) {
    if (this.isBlocking()) {
      this.dialogue.hideInteractHint();
      return;
    }

    const npcs = this.registry.getNpcs();
    const companion = this.game.companion;

    for (const npc of npcs) {
      if (npc.isCompanion) continue;

      const dist = npc.distanceTo(this.player.position);
      const inTalkRange = dist < this.approachRange;

      npc.setPlayerNearby(inTalkRange, this.player.position);

    }

    // Closest NPC drives approach modal visibility
    const closestNpc = this.registry.findNearest(this.player.position, this.approachRange, {
      types: ['npc'],
    });
    const inRange = !!closestNpc;

    if (this.dialogue.approachOpen && !inRange && !this.dialogue.approachInitiated) {
      this.dialogue.hideApproach();
    }

    // Closest interactable (any type) drives the hint pill
    const hintTarget = this.registry.findNearest(this.player.position, this.approachRange, {});
    if (hintTarget) {
      this.dialogue.showInteractHint(hintTarget);
    } else {
      this.dialogue.hideInteractHint();
    }

    const tap = input.consumeTap();
    if (tap) {
      const hit = this.picker.pickFromTap(tap, camera, canvas, this.registry.getHitTargets());
      if (hit) {
        this._interactWithItem(hit);
      }
    }

    if (input.consumeKey('KeyE')) {
      let tapped = null;
      if (companion) {
        tapped = companion;
      } else {
        tapped = this.registry.findNearest(this.player.position, this.approachRange + 2, {
          includeIgnored: true,
        });
      }

      if (tapped) {
        this._interactWithItem(tapped);
      } else {
        this.dialogue._showToast('Nothing nearby to interact with.');
      }
    }
  }
}
