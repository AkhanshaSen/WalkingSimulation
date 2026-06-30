import * as THREE from 'three';
import { createToonMaterial } from '../materials.js';
import { PROP_DEFINITIONS, drawFortune } from '../data/propData.js';

function createHitVolume(radius = 1.2, height = 2) {
  const mesh = new THREE.Mesh(
    new THREE.CylinderGeometry(radius, radius, height, 8),
    new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false }),
  );
  mesh.position.y = height / 2;
  return mesh;
}

export class WorldProp {
  constructor(scene, definition, position, rotationY = 0) {
    this.type = 'prop';
    this.definition = definition;
    this.range = definition.range ?? 3.5;
    this.mesh = new THREE.Group();
    this.mesh.position.copy(position);
    this.mesh.rotation.y = rotationY;
    this.hitVolume = createHitVolume(definition.hitRadius ?? 1.2);
    this.mesh.add(this.hitVolume);
    this.mesh.userData.interactable = this;
    this.hitVolume.userData.interactable = this;
    scene.add(this.mesh);
  }

  getHitTargets() {
    return [this.hitVolume];
  }

  distanceTo(point) {
    const dx = this.mesh.position.x - point.x;
    const dz = this.mesh.position.z - point.z;
    return Math.hypot(dx, dz);
  }

  canInteract(playerPos) {
    return this.distanceTo(playerPos) <= this.range;
  }

  interact(context) {
    const def = this.definition;

    // Shop prop — open shop UI
    if (def.shopId) {
      context.game?.openShop(def.shopId);
      return;
    }

    // Shrine prop — draw a fortune
    if (def.id === 'shrine') {
      const fortune = drawFortune();
      context.dialogue?._showToast(`⛩️ ${fortune}`);
      context.dialogue?.addJournalEntry?.(
        '御神籤 · Fortune',
        fortune,
        '神社 · Shrine',
      );
      return;
    }

    // Default prop (bench, tree, etc.)
    const action = def.defaultAction ?? 'interact';
    const actionDef = def.actions?.[action];
    if (!actionDef) return;

    if (actionDef.sitDuration) {
      context.game?.playerRest?.(actionDef.sitDuration, this.mesh.position);
    }

    context.dialogue?._showToast(actionDef.message);

    if (actionDef.journal) {
      context.dialogue?.addJournalEntry?.(
        actionDef.journal.title,
        actionDef.journal.body,
        def.label,
      );
    }
  }
}

export function createBenchProp(scene, position, rotationY = 0) {
  const def = { ...PROP_DEFINITIONS.bench, defaultAction: 'sit', hitRadius: 1.4 };
  return new WorldProp(scene, def, position, rotationY);
}

export function createTreeProp(scene, position, treeType = 'cherry_tree') {
  const def = {
    ...(PROP_DEFINITIONS[treeType] ?? PROP_DEFINITIONS.cherry_tree),
    defaultAction: treeType === 'shrine_tree' ? 'listen' : 'admire',
    hitRadius: 1.8,
  };
  return new WorldProp(scene, def, position, 0);
}

export function createShrineProp(scene, position, rotationY = 0) {
  const def = { ...PROP_DEFINITIONS.shrine };
  return new WorldProp(scene, def, position, rotationY);
}

export function createShopProp(scene, position, rotationY, shopId, label) {
  const def = {
    id: `shop_${shopId}`,
    label,
    shopId,
    range: 7,
    hitRadius: 2.5,
  };
  return new WorldProp(scene, def, position, rotationY);
}

export function createVendingProp(scene, position, rotationY = 0) {
  const def = { ...PROP_DEFINITIONS.vending };
  return new WorldProp(scene, def, position, rotationY);
}

export function createPropHitMarker(scene, position) {
  const marker = new THREE.Mesh(
    new THREE.SphereGeometry(0.15, 6, 4),
    createToonMaterial(0xffffff),
  );
  marker.position.copy(position);
  marker.position.y = 0.5;
  marker.visible = false;
  scene.add(marker);
  return marker;
}
