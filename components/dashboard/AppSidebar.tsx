import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import AppIcon from "../AppIcon";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "../ui/sidebar";
import { UserSearch, Stethoscope, File } from "lucide-react";
import { SignedIn, UserButton } from "@clerk/nextjs";

export default function AppSidebar() {
  const serviceItems = [
    {
      title: "Skin Cancer Detection",
      url: "/dashboard/skin",
      icon: UserSearch,
    },
    {
      title: "Pneumonia Detection",
      url: "/dashboard/pneumonia",
      icon: UserSearch,
    },
  ];

  const consultaionItems = [
    {
      title: "Past Reports",
      url: "/dashboard/reports",
      icon: File,
    },
    {
      title: "AI Doctor",
      url: "/dashboard/aidoc",
      icon: Stethoscope,
    },
  ];
  return (
    <Sidebar>
      <SidebarHeader className="flex flex-row items-center gap-3 py-5 px-4">
        <AppIcon />
        <span className="text-xl font-bold text-blue-500">RuralMed</span>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent className="gap-0">
        <SidebarGroup>
          <SidebarGroupLabel>Services</SidebarGroupLabel>
          <SidebarMenu className="px-4">
            {serviceItems.map((item) => (
              <SidebarMenuItem
                key={item.title}
                className="hover:bg-gray-200 rounded-md"
              >
                <SidebarMenuButton asChild className="hover:bg-gray-200">
                  <a href={item.url}>
                    <item.icon height={80} />
                    <span className="text-md font-semibold">{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Consultations</SidebarGroupLabel>
          <SidebarMenu className="px-4">
            {consultaionItems.map((item) => (
              <SidebarMenuItem
                key={item.title}
                className="hover:bg-gray-200 rounded-md"
              >
                <SidebarMenuButton asChild className="hover:bg-gray-200">
                  <a href={item.url}>
                    <item.icon />
                    <span className="text-md font-semibold">{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="px-4 py-3">
        <div className="flex flex-row gap-2">
          <SignedIn>
            <UserButton
              userProfileMode="navigation"
              userProfileUrl="/dashboard/profile"
            />
          </SignedIn>
          <div className="w-4/5 flex flex-col justify-center">
            <div className="text-sm font-bold">Utkarsh Anandani</div>
            <div className="text-xs truncate">utkarshanandani9@gmail.com</div>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
