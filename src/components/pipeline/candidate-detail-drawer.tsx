"use client";

import { useEffect } from "react";
import type { Candidate, PipelineStage } from "@/types/pipeline";
import { PIPELINE_STAGES } from "@/types/pipeline";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { candidateStatusVariant } from "@/lib/status-styles";
import { cn } from "@/lib/cn";
import { DRAWER_EXIT_MS } from "@/hooks/use-candidate-drawer";

export function CandidateDetailDrawer({
  candidate,
  open,
  onClose,
  onMoveStage,
  onReject,
}: {
  candidate: Candidate | null;
  open: boolean;
  onClose: () => void;
  onMoveStage: (id: string, stage: PipelineStage) => void;
  onReject: (id: string) => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!candidate) return null;

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-foreground/25 transition-[opacity,visibility] ease-out dark:bg-black/60",
          open
            ? "visible opacity-100"
            : "pointer-events-none invisible opacity-0",
        )}
        style={{ transitionDuration: `${DRAWER_EXIT_MS}ms` }}
        aria-hidden={!open}
        onClick={onClose}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
        data-state={open ? "open" : "closed"}
        className={cn(
          "fixed inset-y-0 right-0 z-[70] flex w-full max-w-[420px] flex-col border-l border-border bg-surface shadow-2xl shadow-foreground/10 will-change-transform dark:shadow-black/40",
          "transition-transform ease-[cubic-bezier(0.32,0.72,0,1)]",
          open ? "translate-x-0" : "translate-x-full pointer-events-none",
        )}
        style={{ transitionDuration: `${DRAWER_EXIT_MS}ms` }}
      >
        <div className="flex items-start justify-between gap-3 border-b border-border px-6 py-5">
          <div className="min-w-0">
            <p className="text-label">Candidate</p>
            <h2
              id="drawer-title"
              className="mt-2 truncate text-xl font-semibold tracking-tight text-foreground"
            >
              {candidate.name}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {candidate.currentRole} · {candidate.company}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-lg p-2 text-muted-foreground transition-colors hover:bg-surface-muted hover:text-foreground"
            aria-label="Close"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          <div className="flex flex-wrap gap-2">
            <Badge variant={candidateStatusVariant(candidate.status)}>
              {candidate.status}
            </Badge>
            <Badge variant="neutral">Match {candidate.matchScore}%</Badge>
            <Badge variant="neutral">{candidate.stage}</Badge>
          </div>

          <section className="mt-7">
            <h3 className="text-[13px] font-semibold text-foreground">Skills</h3>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {candidate.skills.map((s) => (
                <span
                  key={s}
                  className="rounded-lg border border-border bg-surface-muted/60 px-2.5 py-1 text-xs font-medium text-foreground shadow-sm transition-colors hover:bg-surface-muted dark:bg-surface-muted/40"
                >
                  {s}
                </span>
              ))}
            </div>
          </section>

          <section className="mt-7">
            <h3 className="text-[13px] font-semibold text-foreground">
              Interview status
            </h3>
            <p className="mt-2 rounded-xl border border-border bg-surface-muted/50 px-3.5 py-2.5 text-sm leading-relaxed text-foreground dark:bg-surface-muted/30">
              {candidate.interviewStatus}
            </p>
          </section>

          <section className="mt-7">
            <h3 className="text-[13px] font-semibold text-foreground">Notes</h3>
            <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-muted-foreground">
              {candidate.notes}
            </p>
          </section>
        </div>

        <div className="border-t border-border bg-surface-muted/40 px-6 py-5 dark:bg-surface-muted/20">
          <label htmlFor="move-stage" className="text-label">
            Move to stage
          </label>
          <select
            id="move-stage"
            value={candidate.stage}
            onChange={(e) =>
              onMoveStage(candidate.id, e.target.value as PipelineStage)
            }
            className="mt-2 w-full cursor-pointer rounded-lg border border-border bg-surface py-2.5 pl-3 pr-9 text-sm text-foreground shadow-sm transition-[border-color,box-shadow] focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/25"
          >
            {PIPELINE_STAGES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <div className="mt-4 flex flex-col gap-2">
            <Button
              variant="secondary"
              className="w-full"
              type="button"
              onClick={() => {}}
            >
              Schedule interview
            </Button>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button
                variant="primary"
                className="flex-1"
                onClick={() => onClose()}
              >
                Done
              </Button>
              <Button
                variant="danger"
                className="flex-1"
                onClick={() => onReject(candidate.id)}
              >
                Reject
              </Button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
