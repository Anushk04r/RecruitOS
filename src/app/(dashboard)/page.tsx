import { PageHeader } from "@/components/layout/page-header";
import { CandidatePipelineDashboard } from "@/components/pipeline/candidate-pipeline-dashboard";
import { mockCandidates } from "@/data/mock-candidates";
import { mockJobOverview } from "@/data/mock-job";

export default async function CandidatePipelinePage({
  searchParams,
}: {
  searchParams: Promise<{ demo?: string }>;
}) {
  const sp = await searchParams;
  const demoEmpty = sp.demo === "empty";

  return (
    <>
      <PageHeader
        title="Candidate Pipeline"
        description="Track applicants across stages for your open role."
        breadcrumbs={[
          { label: "Dashboard", href: "/" },
          { label: "Jobs", href: "/jobs" },
          { label: "Senior Product Designer" },
        ]}
      />
      <CandidatePipelineDashboard
        job={mockJobOverview}
        initialCandidates={mockCandidates}
        demoEmpty={demoEmpty}
      />
    </>
  );
}
