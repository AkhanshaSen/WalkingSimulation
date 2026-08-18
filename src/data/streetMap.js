/**
 * Main-street layout map — what the player sees left vs right while walking
 * the path from entrance (t≈0) toward the cape (t≈1).
 *
 * Side convention (character facing forward along the road):
 *   L = side -1 (player's left)
 *   R = side +1 (player's right)
 *
 * Distance bands from road centre (metres):
 *   sidewalk props  ~2.85 m
 *   landmarks       5.0–7.4 m
 *   shops           ~6.6 m
 *   trees          ~13.5 m
 *
 * Path arc length ≈ 182 m.
 */

export const PATH_LENGTH_M = 182;

export const DISTANCE_BANDS = {
  sidewalk: 2.85,
  landmarkNear: 5.0,
  landmarkDeep: 7.4,
  shop: 6.6,
  tree: 13.5,
};

/** Location zones — mirrors game.js LOCATION_ZONES */
export const STREET_ZONES = [
  { tMax: 0.08, id: 'entrance', label: 'Town Entrance', labelJa: '静かな入口' },
  { tMax: 0.16, id: 'bookshop', label: 'Bookshop Row', labelJa: '本屋通り' },
  { tMax: 0.28, id: 'sakura', label: 'Sakura Street', labelJa: '桜通り' },
  { tMax: 0.38, id: 'torii', label: 'Torii Slope', labelJa: '鳥居坂' },
  { tMax: 0.48, id: 'market', label: 'Morning Market', labelJa: '朝市' },
  { tMax: 0.58, id: 'shrine', label: 'Shrine Approach', labelJa: '神社の参道' },
  { tMax: 0.68, id: 'park', label: 'Town Park', labelJa: '公園' },
  { tMax: 0.78, id: 'harbor', label: 'Harbor View', labelJa: '港の見晴台' },
  { tMax: 0.88, id: 'fishing', label: 'Fishing Port', labelJa: '漁港' },
  { tMax: 0.96, id: 'coast', label: 'Coastal Path', labelJa: '海岸通り' },
  { tMax: 1.0, id: 'cape', label: 'Cape Outlook', labelJa: '岬の灯台' },
];

export const STREET_LAYOUT = [
  { t: 0.06, side: 'L', band: 'sidewalk', type: 'prop', id: 'vending', label: 'Vending machine' },
  { t: 0.12, side: 'L', band: 'shop', type: 'shop', id: 'bookshop', label: 'Bunbou Books' },
  { t: 0.11, side: 'L', band: 'landmarkDeep', type: 'landmark', id: 'garden_sakura', label: 'Flower bed' },
  { t: 0.20, side: 'R', band: 'sidewalk', type: 'prop', id: 'mailbox', label: 'Mailbox' },
  { t: 0.24, side: 'R', band: 'landmarkNear', type: 'landmark', id: 'garden_torii', label: 'Shrub garden' },
  { t: 0.26, side: 'R', band: 'shop', type: 'shop', id: 'ramen', label: 'Yamada Ramen' },
  { t: 0.30, side: 'L', band: 'sidewalk', type: 'prop', id: 'dirSign', label: 'Directional sign' },
  { t: 0.34, side: 'L', band: 'landmarkNear', type: 'landmark', id: 'torii', label: 'Torii gate' },
  { t: 0.37, side: 'R', band: 'landmarkDeep', type: 'landmark', id: 'garden_cafe', label: 'Corner garden' },
  { t: 0.40, side: 'R', band: 'sidewalk', type: 'prop', id: 'mirror', label: 'Traffic mirror' },
  { t: 0.46, side: 'R', band: 'shop', type: 'shop', id: 'cafe', label: 'Cafe patio' },
  { t: 0.49, side: 'L', band: 'landmarkNear', type: 'landmark', id: 'garden_market', label: 'Flower bed' },
  { t: 0.50, side: 'L', band: 'sidewalk', type: 'prop', id: 'trashCan', label: 'Trash can' },
  { t: 0.52, side: 'L', band: 'shop', type: 'shop', id: 'florist', label: 'Hana Florist' },
  { t: 0.58, side: 'L', band: 'shop', type: 'shop', id: 'market', label: 'Morning market stalls' },
  { t: 0.63, side: 'L', band: 'landmarkNear', type: 'landmark', id: 'garden_shrine', label: 'Rock garden' },
  { t: 0.64, side: 'R', band: 'sidewalk', type: 'prop', id: 'infoBoard', label: 'Community notice board' },
  { t: 0.66, side: 'R', band: 'landmarkDeep', type: 'landmark', id: 'shrine', label: 'Elevated shrine' },
  { t: 0.66, side: 'R', band: 'landmarkDeep', type: 'landmark', id: 'torii_shrine', label: 'Shrine torii gate' },
  { t: 0.76, side: 'R', band: 'landmarkNear', type: 'landmark', id: 'garden_approach', label: 'Shrub garden' },
  { t: 0.74, side: 'L', band: 'sidewalk', type: 'prop', id: 'utility_1', label: 'Utility pole' },
  { t: 0.80, side: 'L', band: 'sidewalk', type: 'prop', id: 'utility_2', label: 'Utility pole' },
  { t: 0.86, side: 'R', band: 'sidewalk', type: 'prop', id: 'busStop', label: 'Bus stop' },
  { t: 0.89, side: 'R', band: 'landmarkDeep', type: 'landmark', id: 'garden_harbor', label: 'Flower bed' },
  { t: 0.92, side: 'L', band: 'shop', type: 'shop', id: 'fishmarket', label: 'Fish market' },
  { t: 0.94, side: 'L', band: 'sidewalk', type: 'prop', id: 'vending_harbor', label: 'Harbor vending' },
];

export const TREE_LAYOUT = [
  { t: 0.04, side: 'L', dist: 14.0, variant: 'sakura' },
  { t: 0.05, side: 'R', dist: 13.8, variant: 'blush' },
  { t: 0.08, side: 'R', dist: 13.5, variant: 'cherry', cherryTree: true },
  { t: 0.11, side: 'L', dist: 14.2, variant: 'sakura' },
  { t: 0.15, side: 'R', dist: 13.6, variant: 'cherry' },
  { t: 0.19, side: 'L', dist: 14.5, variant: 'blush' },
  { t: 0.23, side: 'R', dist: 13.9, variant: 'sakura' },
  { t: 0.28, side: 'L', dist: 14.0, variant: 'cherry' },
  { t: 0.32, side: 'R', dist: 13.7, variant: 'sakura' },
  { t: 0.36, side: 'L', dist: 14.3, variant: 'blush' },
  { t: 0.40, side: 'R', dist: 13.5, variant: 'cherry' },
  { t: 0.42, side: 'L', dist: 14.0, variant: 'sakura' },
  { t: 0.45, side: 'R', dist: 14.8, variant: 'cherry' },
  { t: 0.49, side: 'L', dist: 13.8, variant: 'blush' },
  { t: 0.53, side: 'R', dist: 14.2, variant: 'sakura' },
  { t: 0.57, side: 'L', dist: 13.6, variant: 'cherry' },
  { t: 0.61, side: 'R', dist: 14.6, variant: 'sakura' },
  { t: 0.65, side: 'L', dist: 13.9, variant: 'blush' },
  { t: 0.68, side: 'R', dist: 14.1, variant: 'cherry' },
  { t: 0.72, side: 'R', dist: 13.5, variant: 'sakura', shrineTree: true },
  { t: 0.75, side: 'L', dist: 14.4, variant: 'cherry' },
  { t: 0.79, side: 'R', dist: 13.7, variant: 'blush' },
  { t: 0.83, side: 'L', dist: 14.8, variant: 'sakura' },
  { t: 0.87, side: 'R', dist: 13.8, variant: 'cherry' },
  { t: 0.91, side: 'L', dist: 14.2, variant: 'sakura' },
  { t: 0.95, side: 'R', dist: 13.6, variant: 'blush' },
  { t: 0.97, side: 'L', dist: 14.3, variant: 'cherry' },
  { t: 0.99, side: 'R', dist: 14.5, variant: 'sakura' },
];

export const BUILDING_LAYOUT = [];

export function getZoneAt(t) {
  return STREET_ZONES.find((z) => t <= z.tMax) ?? STREET_ZONES[STREET_ZONES.length - 1];
}

export function getLayoutBySide() {
  const left = STREET_LAYOUT.filter((e) => e.side === 'L').sort((a, b) => a.t - b.t);
  const right = STREET_LAYOUT.filter((e) => e.side === 'R').sort((a, b) => a.t - b.t);
  return { left, right };
}
