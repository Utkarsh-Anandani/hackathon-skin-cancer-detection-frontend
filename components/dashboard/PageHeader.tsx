import { SidebarTrigger } from "../ui/sidebar";

export default function PageHeader(props: any) {
  return (
    <div className="flex gap-3 items-center">
      <SidebarTrigger />
      <span className="text-3xl font-bold text-slate-500">
        {props.pageHeading}
      </span>
    </div>
  );
}
