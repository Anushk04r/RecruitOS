"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/** Match CSS transition on drawer panel (ms) */
export const DRAWER_EXIT_MS = 320;

/**
 * Drawer open state + delayed clear of selection so exit animation can finish.
 */
export function useCandidateDrawer(exitMs: number = DRAWER_EXIT_MS) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = useCallback(() => {
    if (closeTimerRef.current !== null) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const openDrawer = useCallback(
    (id: string) => {
      clearTimer();
      setSelectedId(id);
      setDrawerOpen(true);
    },
    [clearTimer],
  );

  const closeDrawer = useCallback(() => {
    clearTimer();
    setDrawerOpen(false);
    closeTimerRef.current = setTimeout(() => {
      setSelectedId(null);
      closeTimerRef.current = null;
    }, exitMs);
  }, [clearTimer, exitMs]);

  /** Immediate close without waiting for exit duration */
  const forceClose = useCallback(() => {
    clearTimer();
    setDrawerOpen(false);
    setSelectedId(null);
  }, [clearTimer]);

  useEffect(() => () => clearTimer(), [clearTimer]);

  return {
    selectedId,
    drawerOpen,
    openDrawer,
    closeDrawer,
    forceClose,
  };
}
