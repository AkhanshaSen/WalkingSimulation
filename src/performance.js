/** Runtime quality settings — tuned for smooth play on GitHub Pages / mobile. */

function isMobileUa() {
  return /Android|iPhone|iPad|iPod|Mobile|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

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
  };
}

export const PERF = getPerformanceProfile();
