import * as THREE from 'three';

export class RaycastPicker {
  constructor() {
    this.raycaster = new THREE.Raycaster();
  }

  pickFromTap(tap, camera, canvas, targets) {
    if (!tap || !camera || !canvas || !targets?.length) return null;

    const rect = canvas.getBoundingClientRect();
    const ndc = new THREE.Vector2(
      ((tap.x - rect.left) / rect.width) * 2 - 1,
      -((tap.y - rect.top) / rect.height) * 2 + 1,
    );

    this.raycaster.setFromCamera(ndc, camera);
    const hits = this.raycaster.intersectObjects(targets, true);
    if (hits.length === 0) return null;

    return this._interactableFromObject(hits[0].object);
  }

  _interactableFromObject(object) {
    let current = object;
    while (current) {
      if (current.userData?.interactable) return current.userData.interactable;
      if (current.userData?.interactNpc) return current.userData.interactNpc;
      current = current.parent;
    }
    return null;
  }
}
