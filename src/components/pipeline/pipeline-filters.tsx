"use client";

import { memo } from "react";
import { PIPELINE_STAGES } from "@/types/pipeline";
import type {
  ExperienceFilter,
  ScoreFilter,
  StageFilter,
} from "@/types/filters";

function PipelineFiltersInner({
  search,
  onSearchChange,
  stage,
  onStageChange,
  experience,
  onExperienceChange,
  score,
  onScoreChange,
}: {
  search: string;
  onSearchChange: (v: string) => void;
  stage: StageFilter;
  onStageChange: (v: StageFilter) => void;
  experience: ExperienceFilter;
  onExperienceChange: (v: ExperienceFilter) => void;
  score: ScoreFilter;
  onScoreChange: (v: ScoreFilter) => void;
}) {
  const selectClass =
    "w-full cursor-pointer rounded-lg border border-border bg-surface py-2 pl-3 pr-9 text-sm text-foreground shadow-sm transition-[border-color,box-shadow] hover:border-border-strong focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20";

  return (
    <div className="sticky top-0 z-20 flex flex-col gap-4 border-b border-border bg-background/90 px-4 py-4 backdrop-blur-md backdrop-saturate-150 md:flex-row md:flex-wrap md:items-end md:gap-5 md:px-8">
      <div className="min-w-0 flex-1 md:max-w-xs">
        <label htmlFor="pipeline-search" className="mb-1.5 block text-label">
          Search
        </label>
        <div className="relative">
          <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-muted-foreground">
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </span>
          <input
            id="pipeline-search"
            type="search"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by name…"
            className="w-full rounded-lg border border-border bg-surface py-2 pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground/70 shadow-sm transition-[border-color,box-shadow] focus:border-primary/45 focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>
      <div className="grid w-full gap-4 sm:grid-cols-3 md:w-auto md:min-w-0 md:flex-1 md:max-w-3xl md:grid-cols-3">
        <div>
          <label htmlFor="filter-stage" className="mb-1.5 block text-label">
            Stage
          </label>
          <select
            id="filter-stage"
            value={stage}
            onChange={(e) => onStageChange(e.target.value as StageFilter)}
            className={selectClass}
          >
            <option value="all">All stages</option>
            {PIPELINE_STAGES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="filter-exp" className="mb-1.5 block text-label">
            Experience
          </label>
          <select
            id="filter-exp"
            value={experience}
            onChange={(e) =>
              onExperienceChange(e.target.value as ExperienceFilter)
            }
            className={selectClass}
          >
            <option value="all">Any experience</option>
            <option value="0-2">0–2 years</option>
            <option value="3-5">3–5 years</option>
            <option value="6-10">6–10 years</option>
            <option value="10+">10+ years</option>
          </select>
        </div>
        <div>
          <label htmlFor="filter-score" className="mb-1.5 block text-label">
            Match score
          </label>
          <select
            id="filter-score"
            value={score}
            onChange={(e) => onScoreChange(e.target.value as ScoreFilter)}
            className={selectClass}
          >
            <option value="all">Any score</option>
            <option value="high">80+ (strong)</option>
            <option value="mid">60–79</option>
            <option value="low">Under 60</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export const PipelineFilters = memo(PipelineFiltersInner);
PipelineFilters.displayName = "PipelineFilters";
