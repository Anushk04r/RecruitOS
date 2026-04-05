import { PageHeader } from "@/components/layout/page-header";

export default function SettingsPage() {
  return (
    <>
      <PageHeader
        title="Settings"
        description="Workspace preferences and integrations."
        breadcrumbs={[
          { label: "Dashboard", href: "/" },
          { label: "Settings" },
        ]}
      />
      <div className="bg-background px-4 py-16 text-center md:px-8 md:py-20">
        <p className="mx-auto max-w-md text-sm leading-relaxed text-muted-foreground">
          Configure your workspace in this placeholder area.
        </p>
      </div>
    </>
  );
}
