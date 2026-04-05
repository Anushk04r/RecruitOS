import { PageHeader } from "@/components/layout/page-header";

export default function CandidatesPage() {
  return (
    <>
      <PageHeader
        title="Candidates"
        description="Search and manage your talent pool."
        breadcrumbs={[
          { label: "Dashboard", href: "/" },
          { label: "Candidates" },
        ]}
      />
      <div className="bg-background px-4 py-16 text-center md:px-8 md:py-20">
        <p className="mx-auto max-w-md text-sm leading-relaxed text-muted-foreground">
          This section is a placeholder. Use the dashboard pipeline to review
          applicants by stage.
        </p>
      </div>
    </>
  );
}
