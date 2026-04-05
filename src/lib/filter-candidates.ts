import type { Candidate, PipelineStage } from "@/types/pipeline";
import type {
  ExperienceFilter,
  ScoreFilter,
  StageFilter,
} from "@/types/filters";

/** Combined filter input — all conditions are ANDed */
export type PipelineFilterOptions = {
  search: string;
  stage: StageFilter;
  experience: ExperienceFilter;
  score: ScoreFilter;
};

export function hasActivePipelineFilters(opts: PipelineFilterOptions): boolean {
  return (
    opts.search.trim() !== "" ||
    opts.stage !== "all" ||
    opts.experience !== "all" ||
    opts.score !== "all"
  );
}

function experienceMatches(
  years: number,
  filter: ExperienceFilter,
): boolean {
  if (filter === "all") return true;
  if (filter === "0-2") return years >= 0 && years <= 2;
  if (filter === "3-5") return years >= 3 && years <= 5;
  if (filter === "6-10") return years >= 6 && years <= 10;
  if (filter === "10+") return years > 10;
  return true;
}

function scoreMatches(score: number, filter: ScoreFilter): boolean {
  if (filter === "all") return true;
  if (filter === "high") return score >= 80;
  if (filter === "mid") return score >= 60 && score < 80;
  if (filter === "low") return score < 60;
  return true;
}

/** Case-insensitive substring match on candidate name */
function nameMatches(name: string, query: string): boolean {
  if (!query) return true;
  return name.toLowerCase().includes(query.trim().toLowerCase());
}

/**
 * Apply all filters with AND semantics: name search + stage + experience band + score band.
 */
export function filterCandidates(
  list: Candidate[],
  opts: PipelineFilterOptions,
): Candidate[] {
  return list.filter((c) => {
    if (!nameMatches(c.name, opts.search)) return false;
    if (opts.stage !== "all" && c.stage !== opts.stage) return false;
    if (!experienceMatches(c.experienceYears, opts.experience)) return false;
    if (!scoreMatches(c.matchScore, opts.score)) return false;
    return true;
  });
}

export function candidatesByStage(
  list: Candidate[],
): Record<PipelineStage, Candidate[]> {
  const empty = {
    Applied: [] as Candidate[],
    Shortlisted: [] as Candidate[],
    Interview: [] as Candidate[],
    Offered: [] as Candidate[],
    Hired: [] as Candidate[],
  };
  for (const c of list) {
    empty[c.stage].push(c);
  }
  return empty;
}
