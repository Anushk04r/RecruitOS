"use client";

import { useEffect, useState } from "react";

const DEFAULT_MS = 850;

/**
 * One-shot loading flag for initial data paint simulation. Cleans up timeout on unmount.
 */
export function usePipelineLoadingSimulation(durationMs: number = DEFAULT_MS) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = window.setTimeout(() => setLoading(false), durationMs);
    return () => window.clearTimeout(id);
  }, [durationMs]);

  return loading;
}
