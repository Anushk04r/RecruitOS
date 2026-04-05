"use client";

import { useCallback, useReducer } from "react";
import type {
  ExperienceFilter,
  ScoreFilter,
  StageFilter,
} from "@/types/filters";
import type { PipelineFilterOptions } from "@/lib/filter-candidates";

export type FacetFilterState = {
  stage: StageFilter;
  experience: ExperienceFilter;
  score: ScoreFilter;
};

const initialFacetState: FacetFilterState = {
  stage: "all",
  experience: "all",
  score: "all",
};

type FacetAction =
  | { type: "SET_STAGE"; payload: StageFilter }
  | { type: "SET_EXPERIENCE"; payload: ExperienceFilter }
  | { type: "SET_SCORE"; payload: ScoreFilter }
  | { type: "RESET" };

function facetReducer(state: FacetFilterState, action: FacetAction): FacetFilterState {
  switch (action.type) {
    case "SET_STAGE":
      return { ...state, stage: action.payload };
    case "SET_EXPERIENCE":
      return { ...state, experience: action.payload };
    case "SET_SCORE":
      return { ...state, score: action.payload };
    case "RESET":
      return initialFacetState;
    default:
      return state;
  }
}

/**
 * Stage / experience / score filters (reducer) with stable action callbacks.
 */
export function usePipelineFacetFilters() {
  const [facets, dispatch] = useReducer(facetReducer, initialFacetState);

  const setStage = useCallback((payload: StageFilter) => {
    dispatch({ type: "SET_STAGE", payload });
  }, []);

  const setExperience = useCallback((payload: ExperienceFilter) => {
    dispatch({ type: "SET_EXPERIENCE", payload });
  }, []);

  const setScore = useCallback((payload: ScoreFilter) => {
    dispatch({ type: "SET_SCORE", payload });
  }, []);

  const resetFacets = useCallback(() => {
    dispatch({ type: "RESET" });
  }, []);

  return {
    facets,
    setStage,
    setExperience,
    setScore,
    resetFacets,
  };
}

/** Merge URL search string with facet state into a single filter object */
export function mergePipelineFilters(
  searchQuery: string,
  facets: FacetFilterState,
): PipelineFilterOptions {
  return {
    search: searchQuery,
    stage: facets.stage,
    experience: facets.experience,
    score: facets.score,
  };
}
