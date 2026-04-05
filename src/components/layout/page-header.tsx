import Link from "next/link";

type Crumb = { label: string; href?: string };

export function PageHeader({
  title,
  description,
  breadcrumbs,
}: {
  title: string;
  description?: string;
  breadcrumbs: Crumb[];
}) {
  return (
    <div className="border-b border-border bg-surface px-4 py-7 md:px-8 md:py-8">
      <nav
        className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[13px] text-muted-foreground"
        aria-label="Breadcrumb"
      >
        {breadcrumbs.map((c, i) => (
          <span key={`${c.label}-${i}`} className="flex items-center gap-1.5">
            {i > 0 && (
              <span className="text-border-strong select-none" aria-hidden>
                /
              </span>
            )}
            {c.href ? (
              <Link
                href={c.href}
                className="rounded px-0.5 transition-colors hover:text-primary hover:underline hover:decoration-primary/40 hover:underline-offset-2"
              >
                {c.label}
              </Link>
            ) : (
              <span
                className={
                  i === breadcrumbs.length - 1
                    ? "font-medium text-foreground"
                    : undefined
                }
              >
                {c.label}
              </span>
            )}
          </span>
        ))}
      </nav>
      <div className="mt-4 flex flex-col gap-1.5 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-1">
          <h1 className="text-heading-page">{title}</h1>
          {description ? (
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
