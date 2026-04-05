import { cn } from "@/lib/cn";

export type BadgeVariant =
  | "default"
  | "success"
  | "warning"
  | "danger"
  | "neutral";

const variants: Record<BadgeVariant, string> = {
  default:
    "bg-surface-muted text-muted-foreground ring-1 ring-inset ring-border-strong/60 dark:ring-border",
  success:
    "bg-emerald-50 text-emerald-900 ring-1 ring-inset ring-emerald-600/15 dark:bg-emerald-950/45 dark:text-emerald-100 dark:ring-emerald-500/25",
  warning:
    "bg-amber-50 text-amber-950 ring-1 ring-inset ring-amber-600/20 dark:bg-amber-950/50 dark:text-amber-100 dark:ring-amber-500/20",
  danger:
    "bg-rose-50 text-rose-900 ring-1 ring-inset ring-rose-600/15 dark:bg-rose-950/45 dark:text-rose-100 dark:ring-rose-500/25",
  neutral:
    "bg-surface-muted text-muted-foreground ring-1 ring-inset ring-border-strong/50 dark:ring-border",
};

export function Badge({
  children,
  variant = "default",
  className,
}: {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-semibold tracking-wide",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
