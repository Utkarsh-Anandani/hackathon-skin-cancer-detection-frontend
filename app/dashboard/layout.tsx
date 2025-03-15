import AppSidebar from "@/components/dashboard/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return(
        <SidebarProvider>
            <AppSidebar />
            <main>
                <div>
                    <SidebarTrigger />
                    Dashboard
                </div>
                {children}
            </main>
        </SidebarProvider>
    );
}