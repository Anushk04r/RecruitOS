"use client";

import type { Candidate, PipelineStage } from "@/types/pipeline";
import { PIPELINE_STAGES } from "@/types/pipeline";
import { KanbanColumn } from "@/components/pipeline/kanban-column";
import { candidatesByStage } from "@/lib/filter-candidates";

export function KanbanBoard({
  candidates,
  onOpenCandidate,
}: {
  candidates: Candidate[];
  onOpenCandidate: (c: Candidate) => void;
}) {
  const grouped = candidatesByStage(candidates);

  return (
    <div className="overflow-x-auto pb-10 pt-5 [-webkit-overflow-scrolling:touch]">
      <div className="flex min-h-[min(70vh,560px)] gap-5 px-4 md:px-8">
        {PIPELINE_STAGES.map((stage: PipelineStage) => (
          <KanbanColumn
            key={stage}
            stage={stage}
            candidates={grouped[stage]}
            onOpenCandidate={onOpenCandidate}
          />
        ))}
      </div>
    </div>
  );
}
