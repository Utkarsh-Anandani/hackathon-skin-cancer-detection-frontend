import PageHeader from "@/components/dashboard/PageHeader";
import ReportsTable from "@/components/reports/ReportsTable";

export default function Reports() {
  return (
    <main className="w-screen md:w-[80vw] px-3 py-5">
      <PageHeader pageHeading="Past Reports" />
      <ReportsTable />
    </main>
  );
}
