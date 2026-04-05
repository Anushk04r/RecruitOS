function Bar({ className }: { className?: string }) {
  return (
    <div
      className={`animate-pulse rounded-md bg-surface-muted dark:bg-surface-muted/60 ${className ?? ""}`}
    />
  );
}

export function PipelineSkeleton() {
  return (
    <div className="bg-background">
      <div className="border-b border-border bg-surface px-4 py-7 md:px-8 md:py-8">
        <Bar className="h-3 w-24" />
        <Bar className="mt-4 h-7 w-64 max-w-full" />
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-surface-muted/30 p-4 ring-1 ring-foreground/[0.03]"
            >
              <Bar className="h-3 w-20" />
              <Bar className="mt-4 h-6 w-28" />
            </div>
          ))}
        </div>
      </div>
      <div className="sticky top-0 z-20 border-b border-border bg-background/90 px-4 py-4 backdrop-blur-md md:px-8">
        <div className="flex flex-col gap-3 md:flex-row">
          <Bar className="h-10 w-full md:max-w-xs" />
          <Bar className="h-10 flex-1" />
          <Bar className="h-10 flex-1" />
          <Bar className="h-10 flex-1" />
        </div>
      </div>
      <div className="overflow-x-auto px-4 pb-10 pt-6 md:px-8">
        <div className="flex gap-5">
          {Array.from({ length: 5 }).map((_, col) => (
            <div
              key={col}
              className="w-[min(100%,288px)] shrink-0 overflow-hidden rounded-2xl border border-border bg-column-bg p-2.5 ring-1 ring-foreground/[0.03]"
            >
              <Bar className="mx-0.5 mb-3 h-5 w-24" />
              {Array.from({ length: 3 }).map((__, row) => (
                <div
                  key={row}
                  className="mb-2.5 rounded-2xl border border-border bg-surface p-3.5 shadow-sm last:mb-0"
                >
                  <Bar className="h-4 w-[75%]" />
                  <Bar className="mt-2 h-3 w-full" />
                  <Bar className="mt-3 h-3 w-20" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
