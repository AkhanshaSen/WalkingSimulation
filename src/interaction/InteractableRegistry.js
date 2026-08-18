const TYPE_PRIORITY = { npc: 0, animal: 1, prop: 2 };

export class InteractableRegistry {
  constructor() {
    this.items = [];
  }

  register(item) {
    if (!item) return;
    this.items.push(item);
  }

  registerAll(...groups) {
    for (const group of groups) {
      if (Array.isArray(group)) {
        group.forEach((item) => this.register(item));
      } else if (group) {
        this.register(group);
      }
    }
  }

  getHitTargets() {
    const targets = [];
    for (const item of this.items) {
      const hits = item.getHitTargets?.() ?? [];
      targets.push(...hits);
    }
    return targets;
  }

  findNearest(playerPos, maxRange, options = {}) {
    const { types = null, includeIgnored = false } = options;
    let closest = null;
    let closestDist = Infinity;
    let closestPriority = Infinity;

    for (const item of this.items) {
      if (types && !types.includes(item.type)) continue;
      if (item.type === 'npc' && item.isCompanion) continue;
      if (item.type === 'npc' && item.isTalking) continue;
      if (item.type === 'npc' && !includeIgnored && item.isIgnored?.()) continue;
      if (item.type === 'animal' && item.isPetCompanion) continue;

      const dist = item.distanceTo(playerPos);
      if (dist >= maxRange) continue;

      const priority = TYPE_PRIORITY[item.type] ?? 9;
      if (dist < closestDist - 0.5 || (Math.abs(dist - closestDist) < 0.5 && priority < closestPriority)) {
        closest = item;
        closestDist = dist;
        closestPriority = priority;
      }
    }

    return closest;
  }

  getNpcs() {
    return this.items.filter((i) => i.type === 'npc');
  }

  getAnimals() {
    return this.items.filter((i) => i.type === 'animal');
  }

  findAllInRange(playerPos, maxRange, options = {}) {
    return this.findAllInteractable(playerPos, maxRange, options);
  }

  /** All interactables within each item's own range, sorted nearest first. */
  findAllInteractable(playerPos, maxRange = 9, options = {}) {
    const { includeIgnored = false } = options;
    const results = [];

    for (const item of this.items) {
      if (item.type === 'npc' && item.isCompanion) continue;
      if (item.type === 'npc' && item.isTalking) continue;
      if (item.type === 'npc' && !includeIgnored && item.isIgnored?.()) continue;
      if (item.type === 'animal' && item.isPetCompanion) continue;

      const dist = item.distanceTo(playerPos);
      const effectiveRange = item.type === 'npc' ? maxRange : (item.range ?? maxRange);
      if (dist > effectiveRange) continue;
      if (item.canInteract && !item.canInteract(playerPos)) continue;

      results.push({ item, dist });
    }

    return results.sort((a, b) => {
      if (Math.abs(a.dist - b.dist) > 0.35) return a.dist - b.dist;
      const pa = TYPE_PRIORITY[a.item.type] ?? 9;
      const pb = TYPE_PRIORITY[b.item.type] ?? 9;
      return pa - pb;
    });
  }
}
