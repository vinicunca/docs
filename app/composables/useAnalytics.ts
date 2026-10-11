// The hub ships no analytics SDK; callers keep their `track` calls so the
// copied Pohon docs components stay unchanged.
function track(_event: string, _properties?: Record<string, unknown>) {}

export function useAnalytics() {
  return {
    track,
    trackThrottled: track,
  };
}
