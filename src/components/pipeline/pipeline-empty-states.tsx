import { Button } from "@/components/ui/button";

export function EmptyPipelineState({ onReset }: { onReset?: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-24 text-center md:py-28">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-surface-muted/80 shadow-sm ring-1 ring-foreground/[0.04] dark:bg-surface-muted/40">
        <svg
          className="h-8 w-8 text-muted-foreground"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
          />
        </svg>
      </div>
      <h3 className="mt-6 text-lg font-semibold tracking-tight text-foreground">
        No candidates in this pipeline
      </h3>
      <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
        When applicants arrive for this role, they will appear as cards across
        stages. Import candidates or connect your ATS to get started.
      </p>
      {onReset ? (
        <Button variant="primary" className="mt-8 min-w-[10rem]" onClick={onReset}>
          Clear demo mode
        </Button>
      ) : null}
    </div>
  );
}

export function NoSearchResultsState({ onClear }: { onClear: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-20 text-center md:py-24">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-200/80 bg-amber-50 shadow-sm dark:border-amber-500/20 dark:bg-amber-950/40">
        <svg
          className="h-7 w-7 text-amber-700 dark:text-amber-300"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
      <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
        No matching candidates
      </h3>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
        Try adjusting your search or filters. You can broaden the experience
        range or reset filters to see everyone in the pipeline.
      </p>
      <Button variant="primary" className="mt-7 min-w-[10rem]" onClick={onClear}>
        Clear filters
      </Button>
    </div>
  );
}
