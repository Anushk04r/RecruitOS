"use client";

import { useState } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { TopNavbar } from "@/components/layout/top-navbar";
import { cn } from "@/lib/cn";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background md:h-svh md:max-h-svh">
      {/* Desktop: sticky full-height sidebar */}
      <div className="relative hidden shrink-0 md:block md:h-svh md:overflow-hidden">
        <div className="sticky top-0 flex h-full max-h-svh min-h-0 flex-col border-r border-border bg-surface shadow-[1px_0_0_0_rgba(15,23,42,0.04)] dark:shadow-[1px_0_0_0_rgba(255,255,255,0.06)]">
          <Sidebar />
        </div>
      </div>

      {/* Mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-foreground/20 backdrop-blur-[2px] transition-opacity duration-200 md:hidden dark:bg-black/50",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      />
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-[min(17.5rem,100vw)] transform transition-transform duration-200 ease-out md:hidden",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-full flex-col border-r border-border bg-surface shadow-xl">
          <Sidebar onNavigate={() => setOpen(false)} />
        </div>
      </div>

      {/* Main: header stays fixed; content scrolls (Notion/Linear-style) */}
      <div className="flex min-h-0 min-w-0 flex-1 flex-col md:h-svh md:overflow-hidden">
        <TopNavbar onMenuClick={() => setOpen(true)} />
        <main className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
