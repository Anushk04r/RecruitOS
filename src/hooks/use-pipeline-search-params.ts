"use client";

import { useCallback, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const QUERY_KEY = "q";

/**
 * Global + pipeline search string stored in the URL (`?q=...`).
 * Preserves other query keys (e.g. `demo`). Keeps navbar and pipeline filters in sync.
 */
export function usePipelineSearchParams() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const searchQuery = useMemo(
    () => searchParams.get(QUERY_KEY) ?? "",
    [searchParams],
  );

  const setSearchQuery = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      const trimmed = value.trim();
      if (trimmed) params.set(QUERY_KEY, trimmed);
      else params.delete(QUERY_KEY);
      const qs = params.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    },
    [pathname, router, searchParams],
  );

  return { searchQuery, setSearchQuery };
}
