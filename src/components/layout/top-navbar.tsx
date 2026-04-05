"use client";

import { Suspense, useId } from "react";
import { usePipelineSearchParams } from "@/hooks/use-pipeline-search-params";

export function TopNavbar({ onMenuClick }: { onMenuClick?: () => void }) {
  return (
    <header className="sticky top-0 z-30 flex h-[3.25rem] shrink-0 items-center gap-3 border-b border-border bg-surface/95 px-3 backdrop-blur-md backdrop-saturate-150 md:px-6">
      <button
        type="button"
        onClick={onMenuClick}
        className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-surface-muted hover:text-foreground md:hidden"
        aria-label="Open menu"
      >
        <MenuIcon />
      </button>
      <Suspense fallback={<GlobalSearchFallback />}>
        <GlobalSearchField />
      </Suspense>
      <div className="ml-auto flex items-center gap-1.5">
        <button
          type="button"
          className="hidden rounded-lg p-2 text-muted-foreground transition-colors hover:bg-surface-muted hover:text-foreground sm:inline-flex"
          aria-label="Notifications"
        >
          <BellIcon className="h-5 w-5" />
        </button>
        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-hover text-xs font-semibold text-primary-foreground shadow-sm ring-2 ring-surface transition-transform hover:scale-[1.02] active:scale-[0.98]"
          aria-label="Account menu"
        >
          AK
        </button>
      </div>
    </header>
  );
}

function GlobalSearchField() {
  const id = useId();
  const { searchQuery, setSearchQuery } = usePipelineSearchParams();

  return (
    <div className="mx-auto min-w-0 flex-1 max-w-xl">
      <label htmlFor={id} className="sr-only">
        Search jobs, candidates, tags
      </label>
      <div className="relative">
        <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-muted-foreground">
          <SearchIcon className="h-4 w-4" />
        </span>
        <input
          id={id}
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search jobs, candidates, tags…"
          autoComplete="off"
          className="w-full rounded-lg border border-border bg-surface-muted/60 py-2 pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground/80 transition-[box-shadow,border-color] focus:border-primary/40 focus:bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 dark:bg-surface-muted/40"
        />
      </div>
    </div>
  );
}

function GlobalSearchFallback() {
  return (
    <div className="mx-auto min-w-0 flex-1 max-w-xl">
      <div className="h-9 animate-pulse rounded-lg bg-surface-muted/80" aria-hidden />
    </div>
  );
}

function MenuIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  );
}

function BellIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.082A2.25 2.25 0 0021.75 14v-4.5a8.25 8.25 0 00-8.25-8.25S5.25 5.25 5.25 9.75V14a2.25 2.25 0 002.25 2.25h13.5M12 21a2.25 2.25 0 002.25-2.25H9.75A2.25 2.25 0 0012 21z" />
    </svg>
  );
}
