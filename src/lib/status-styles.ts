import type { CandidateStatus } from "@/types/pipeline";
import type { BadgeVariant } from "@/components/ui/badge";

export function candidateStatusVariant(
  status: CandidateStatus,
): BadgeVariant {
  switch (status) {
    case "Active":
      return "success";
    case "New":
      return "default";
    case "On hold":
      return "warning";
    case "Withdrawn":
      return "danger";
    default:
      return "neutral";
  }
}
