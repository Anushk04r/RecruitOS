import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-primary-foreground shadow-sm ring-1 ring-primary/20 hover:bg-primary-hover active:scale-[0.98] dark:ring-primary/30",
  secondary:
    "border border-border bg-surface text-foreground shadow-sm hover:bg-surface-muted hover:border-border-strong active:scale-[0.98]",
  ghost:
    "text-muted-foreground hover:bg-surface-muted hover:text-foreground",
  danger:
    "bg-rose-600 text-white shadow-sm ring-1 ring-rose-500/30 hover:bg-rose-500 active:scale-[0.98] dark:bg-rose-600 dark:hover:bg-rose-500",
};

export function Button({
  children,
  variant = "secondary",
  className,
  type = "button",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
}) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-offset-background",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
