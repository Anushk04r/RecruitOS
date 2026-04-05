import type { JobOverview } from "@/types/pipeline";

export function JobOverviewSection({ job }: { job: JobOverview }) {
  const items: { label: string; value: string; large?: boolean }[] = [
    { label: "Department", value: job.department },
    { label: "Location", value: job.location },
    { label: "Open positions", value: String(job.openPositions), large: true },
    { label: "Hiring manager", value: job.hiringManager },
    { label: "Total applicants", value: String(job.totalApplicants), large: true },
  ];

  return (
    <section className="border-b border-border bg-surface px-4 py-7 md:px-8 md:py-8">
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-1">
          <p className="text-label">Active role</p>
          <h2 className="text-heading-section text-lg">{job.title}</h2>
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {items.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-border bg-surface-muted/40 p-4 shadow-sm ring-1 ring-foreground/[0.03] transition-shadow hover:shadow-md dark:bg-surface-muted/25 dark:ring-white/[0.04]"
          >
            <p className="text-[12px] font-medium text-muted-foreground">
              {item.label}
            </p>
            <p
              className={
                item.large
                  ? "mt-2 text-2xl font-semibold tabular-nums tracking-tight text-foreground"
                  : "mt-2 text-sm font-medium leading-snug text-foreground"
              }
            >
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
