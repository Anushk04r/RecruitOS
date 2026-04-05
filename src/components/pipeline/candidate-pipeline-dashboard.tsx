"use client";

import { Suspense, useCallback, useMemo, useState } from "react";
import type { Candidate, JobOverview, PipelineStage } from "@/types/pipeline";
import { JobOverviewSection } from "@/components/pipeline/job-overview-section";
import { PipelineFilters } from "@/components/pipeline/pipeline-filters";
import { KanbanBoard } from "@/components/pipeline/kanban-board";
import { CandidateDetailDrawer } from "@/components/pipeline/candidate-detail-drawer";
import {
  EmptyPipelineState,
  NoSearchResultsState,
} from "@/components/pipeline/pipeline-empty-states";
import { PipelineSkeleton } from "@/components/pipeline/pipeline-skeleton";
import {
  filterCandidates,
  hasActivePipelineFilters,
} from "@/lib/filter-candidates";
import { usePipelineSearchParams } from "@/hooks/use-pipeline-search-params";
import {
  mergePipelineFilters,
  usePipelineFacetFilters,
} from "@/hooks/use-pipeline-facet-filters";
import { useCandidateDrawer } from "@/hooks/use-candidate-drawer";
import { usePipelineLoadingSimulation } from "@/hooks/use-pipeline-loading-simulation";

type Props = {
  job: JobOverview;
  initialCandidates: Candidate[];
  demoEmpty: boolean;
};

function CandidatePipelineDashboardInner({
  job,
  initialCandidates,
  demoEmpty,
}: Props) {
  const loading = usePipelineLoadingSimulation();
  const { searchQuery, setSearchQuery } = usePipelineSearchParams();
  const { facets, setStage, setExperience, setScore, resetFacets } =
    usePipelineFacetFilters();
  const { selectedId, drawerOpen, openDrawer, closeDrawer } =
    useCandidateDrawer();

  const [candidates, setCandidates] = useState<Candidate[]>(() =>
    demoEmpty ? [] : initialCandidates,
  );

  const filterOptions = useMemo(
    () => mergePipelineFilters(searchQuery, facets),
    [searchQuery, facets],
  );

  const filtered = useMemo(
    () => filterCandidates(candidates, filterOptions),
    [candidates, filterOptions],
  );

  const selected = useMemo(
    () =>
      selectedId
        ? candidates.find((c) => c.id === selectedId) ?? null
        : null,
    [candidates, selectedId],
  );

  const showEmptyPipeline = candidates.length === 0;
  const showNoResults =
    !showEmptyPipeline &&
    filtered.length === 0 &&
    hasActivePipelineFilters(filterOptions);

  const openCandidate = useCallback(
    (c: Candidate) => {
      openDrawer(c.id);
    },
    [openDrawer],
  );

  const clearFilters = useCallback(() => {
    setSearchQuery("");
    resetFacets();
  }, [setSearchQuery, resetFacets]);

  const moveStage = useCallback((id: string, newStage: PipelineStage) => {
    setCandidates((prev) =>
      prev.map((c) => (c.id === id ? { ...c, stage: newStage } : c)),
    );
  }, []);

  const rejectCandidate = useCallback(
    (id: string) => {
      setCandidates((prev) =>
        prev.map((c) =>
          c.id === id ? { ...c, status: "Withdrawn" as const } : c,
        ),
      );
      closeDrawer();
    },
    [closeDrawer],
  );

  if (loading) {
    return <PipelineSkeleton />;
  }

  return (
    <div className="bg-background">
      <JobOverviewSection job={job} />
      <PipelineFilters
        search={searchQuery}
        onSearchChange={setSearchQuery}
        stage={facets.stage}
        onStageChange={setStage}
        experience={facets.experience}
        onExperienceChange={setExperience}
        score={facets.score}
        onScoreChange={setScore}
      />

      {showEmptyPipeline ? (
        <EmptyPipelineState
          onReset={
            demoEmpty
              ? () => {
                  setCandidates(initialCandidates);
                }
              : undefined
          }
        />
      ) : showNoResults ? (
        <NoSearchResultsState onClear={clearFilters} />
      ) : (
        <KanbanBoard
          candidates={filtered}
          onOpenCandidate={openCandidate}
        />
      )}

      <CandidateDetailDrawer
        candidate={selected}
        open={drawerOpen && selected !== null}
        onClose={closeDrawer}
        onMoveStage={moveStage}
        onReject={rejectCandidate}
      />
    </div>
  );
}

export function CandidatePipelineDashboard(props: Props) {
  return (
    <Suspense fallback={<PipelineSkeleton />}>
      <CandidatePipelineDashboardInner {...props} />
    </Suspense>
  );
}
