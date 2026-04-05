import { PageHeader } from "@/components/layout/page-header";

export default function JobsPage() {
  return (
    <>
      <PageHeader
        title="Jobs"
        description="Manage open roles and hiring plans."
        breadcrumbs={[
          { label: "Dashboard", href: "/" },
          { label: "Jobs" },
        ]}
      />
      <div className="bg-background px-4 py-16 text-center md:px-8 md:py-20">
        <p className="mx-auto max-w-md text-sm leading-relaxed text-muted-foreground">
          This section is a placeholder. The candidate pipeline lives on the
          dashboard.
        </p>
      </div>
    </>
  );
}
