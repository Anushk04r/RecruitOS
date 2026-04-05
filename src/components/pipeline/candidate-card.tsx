"use client";

import type { Candidate } from "@/types/pipeline";
import { Badge } from "@/components/ui/badge";
import { candidateStatusVariant } from "@/lib/status-styles";
import { cn } from "@/lib/cn";

function scoreBadgeVariant(score: number): "success" | "warning" | "danger" {
  if (score >= 80) return "success";
  if (score >= 60) return "warning";
  return "danger";
}

export function CandidateCard({
  candidate,
  onOpen,
}: {
  candidate: Candidate;
  onOpen: (c: Candidate) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(candidate)}
      className={cn(
        "group w-full rounded-2xl border border-border bg-surface p-3.5 text-left shadow-sm ring-1 ring-foreground/[0.04] transition-all duration-200",
        "hover:-translate-y-0.5 hover:border-border-strong hover:shadow-md hover:ring-foreground/[0.06]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-column-bg dark:ring-white/[0.05] dark:hover:ring-white/[0.08] dark:focus-visible:ring-offset-column-bg",
        "active:translate-y-0 active:shadow-sm",
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold tracking-tight text-foreground">
            {candidate.name}
          </p>
          <p className="mt-0.5 truncate text-xs text-muted-foreground">
            {candidate.currentRole} · {candidate.company}
          </p>
        </div>
        <Badge variant={scoreBadgeVariant(candidate.matchScore)}>
          {candidate.matchScore}%
        </Badge>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className="text-[11px] font-medium tabular-nums text-muted-foreground">
          {candidate.experienceYears} yrs exp
        </span>
        <Badge variant={candidateStatusVariant(candidate.status)}>
          {candidate.status}
        </Badge>
      </div>
      <p className="mt-2.5 border-t border-border pt-2.5 text-[11px] text-muted-foreground">
        Last activity · {candidate.lastActivity}
      </p>
    </button>
  );
}
