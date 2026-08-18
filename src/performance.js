/** Runtime quality settings — tuned for smooth play on GitHub Pages / mobile. */

function isMobileUa() {
  return /Android|iPhone|iPad|iPod|Mobile|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

/** Models required before town build + first playable frame. Rest load in background. */
export const BOOT_MODEL_KEYS = [
  'character_female_a',
  'character_female_b',
  'character_male_a',
  'character_female_c',
  'street_lamp',
  'vending',
  'shrine_stairs',
  'shrine',
  'fountain',
  'tree_normal',
  'tree_cherry',
  'building_b',
];

export function getPerformanceProfile() {
  const mobile = isMobileUa();
  const lowMemory = typeof navigator.deviceMemory === 'number' && navigator.deviceMemory <= 4;
  const lowCores = typeof navigator.hardwareConcurrency === 'number' && navigator.hardwareConcurrency <= 4;
  const lowEnd = mobile || lowMemory || lowCores;

  return {
    lowEnd,
    /** Cap device pixel ratio — full Retina + post-FX is the main live-site killer. */
    dprMax: lowEnd ? 1.15 : 1.5,
    shadowMapSize: lowEnd ? 512 : 1024,
    softShadows: false,
    /** EffectComposer + OutputPass + FXAA ≈ 3 full-screen passes per frame. */
    usePostProcessing: false,
    minimapUpdateInterval: lowEnd ? 0.12 : 0.066,
    /** Point lights are expensive — use emissive windows/lanterns instead. */
    usePointLights: false,
    pathLocalSearchSteps: 14,
    pathLocalSearchSpan: 0.09,
    /** GLB props: outlines double draw calls — skip on static Kenney assets. */
    skipStaticOutlines: true,
    /** Only ground/road receive shadows; static props skip shadow receiver pass. */
    receiveShadowGroundOnly: true,
    pathRibbonDivisions: lowEnd ? 100 : 140,
    npcSeparationPasses: lowEnd ? 1 : 2,
    /** Off-screen renders before hiding the loading screen (shader compile). */
    warmupFrames: lowEnd ? 2 : 3,
    /** compile() walks the whole scene synchronously — skip on low-end. */
    skipShaderCompile: lowEnd,
    /** Procedural grass blade rects — 0 = mottling only. */
    grassBladeCount: lowEnd ? 0 : 350,
    /** Spawn ambient NPCs + animals after first frames. */
    deferAmbientContent: true,
    /** Gardens are hundreds of meshes — build after gameplay starts. */
    deferGardens: true,
    deferredLoadDelayMs: lowEnd ? 3000 : 2000,
    interactionUpdateInterval: 0.1,
  };
}

export const PERF = getPerformanceProfile();
