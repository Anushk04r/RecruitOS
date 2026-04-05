export type PipelineStage =
  | "Applied"
  | "Shortlisted"
  | "Interview"
  | "Offered"
  | "Hired";

export type CandidateStatus = "Active" | "On hold" | "Withdrawn" | "New";

export interface Candidate {
  id: string;
  name: string;
  currentRole: string;
  company: string;
  experienceYears: number;
  matchScore: number;
  status: CandidateStatus;
  lastActivity: string;
  stage: PipelineStage;
  skills: string[];
  interviewStatus: string;
  notes: string;
}

export interface JobOverview {
  id: string;
  title: string;
  department: string;
  location: string;
  openPositions: number;
  hiringManager: string;
  totalApplicants: number;
}

export const PIPELINE_STAGES: PipelineStage[] = [
  "Applied",
  "Shortlisted",
  "Interview",
  "Offered",
  "Hired",
];
