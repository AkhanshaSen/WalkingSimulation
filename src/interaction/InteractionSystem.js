import { RaycastPicker } from './RaycastPicker.js';

export class InteractionSystem {
  constructor(player, registry, dialogue, game, petUI) {
    this.player = player;
    this.registry = registry;
    this.dialogue = dialogue;
    this.game = game;
    this.petUI = petUI;
    this.picker = new RaycastPicker();
    this.approachRange = 9;
    this.spotRange = 20;
    this.wasInRange = false;
    this.initiatedNpc = null;
  }

  setRewardHandler(handler) {
    this.dialogue.setRewardHandler(handler);
  }

  isBlocking() {
    return this.dialogue.isBlocking() || this.petUI?.isOpen();
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
      player: this.player,
    });
    return true;
  }

  _resolveTarget(preferred = null) {
    if (preferred) return preferred;
    return this.registry.findNearest(this.player.position, this.approachRange + 2, {
      includeIgnored: true,
    });
  }

  update(input, camera, canvas) {
    if (this.isBlocking()) return;

    const npcs = this.registry.getNpcs();
    const companion = this.game.companion;

    for (const npc of npcs) {
      if (npc.isCompanion) continue;

      const dist = npc.distanceTo(this.player.position);
      const inTalkRange = dist < this.approachRange;

      npc.setPlayerNearby(inTalkRange, this.player.position);

      if (
        !npc.profile.isAmbient &&
        !npc.isIgnored() &&
        !npc.isTalking &&
        npc.state === 'idle' &&
        dist < this.spotRange &&
        dist > this.approachRange + 1
      ) {
        npc.startApproaching();
      }

      if (
        npc.state === 'approaching' &&
        dist < this.approachRange &&
        !npc.isIgnored()
      ) {
        if (!this.dialogue.approachOpen && this.initiatedNpc !== npc) {
          this.dialogue.showApproach(npc, { initiated: true });
          this.initiatedNpc = npc;
        }
      }
    }

    const closestNpc = this.registry.findNearest(this.player.position, this.approachRange, {
      types: ['npc'],
    });
    const inRange = !!closestNpc;

    if (this.dialogue.approachOpen && !inRange && !this.dialogue.approachInitiated) {
      this.dialogue.hideApproach();
    } else if (inRange && !this.wasInRange && !this.dialogue.approachOpen) {
      this.dialogue.showApproach(closestNpc, { initiated: false });
    }

    const tap = input.consumeTap();
    if (tap) {
      const hit = this.picker.pickFromTap(tap, camera, canvas, this.registry.getHitTargets());
      if (hit) {
        this._interactWithItem(hit);
      }
    }

    if (input.consumeKey('KeyE')) {
      const hitTargets = this.registry.getHitTargets();
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

    if (!inRange) this.initiatedNpc = null;
    this.wasInRange = inRange;
  }
}
