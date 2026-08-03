"use client";

import { useCallback, useSyncExternalStore } from "react";

export function useScrollHeader(threshold = 50) {
  const subscribe = useCallback((callback: () => void) => {
    window.addEventListener("scroll", callback, { passive: true });
    return () => window.removeEventListener("scroll", callback);
  }, []);

  const getSnapshot = useCallback(() => {
    return window.scrollY > threshold;
  }, [threshold]);

  const getServerSnapshot = useCallback(() => {
    return false;
  }, []);

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
