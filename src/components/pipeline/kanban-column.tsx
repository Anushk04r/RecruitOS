import type { Candidate, PipelineStage } from "@/types/pipeline";
import { CandidateCard } from "@/components/pipeline/candidate-card";

export function KanbanColumn({
  stage,
  candidates,
  onOpenCandidate,
}: {
  stage: PipelineStage;
  candidates: Candidate[];
  onOpenCandidate: (c: Candidate) => void;
}) {
  return (
    <div className="flex w-[min(100%,288px)] shrink-0 flex-col overflow-hidden rounded-2xl border border-border-strong/60 bg-column-bg shadow-sm ring-1 ring-foreground/[0.03] dark:border-border dark:ring-white/[0.04]">
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border/80 bg-column-header/95 px-3 py-2.5 backdrop-blur-sm dark:border-border dark:bg-column-header/90">
        <h3 className="text-[13px] font-semibold tracking-tight text-foreground">
          {stage}
        </h3>
        <span className="inline-flex min-w-[1.5rem] items-center justify-center rounded-md bg-surface px-2 py-0.5 text-[11px] font-semibold tabular-nums text-muted-foreground shadow-sm ring-1 ring-border">
          {candidates.length}
        </span>
      </div>
      <div className="flex max-h-[min(70vh,580px)] flex-col gap-2.5 overflow-y-auto overflow-x-hidden p-2.5 [scrollbar-width:thin] [scrollbar-color:var(--border)_transparent]">
        {candidates.map((c) => (
          <CandidateCard key={c.id} candidate={c} onOpen={onOpenCandidate} />
        ))}
      </div>
    </div>
  );
}
