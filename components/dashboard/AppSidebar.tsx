"use client";
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
import { SignedIn, UserButton, useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import axios from "axios";
import { useUserContext } from "@/app/context/UserContext";

export default function AppSidebar() {
  const { user } = useUser();
  const { userDetails, setUserDetails } = useUserContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const getUserDetails = async () => {
      try {
        const phoneNumber = user.phoneNumbers?.[0]?.phoneNumber;
        if (!phoneNumber) throw new Error("Phone number not available");

        const formattedPhone = phoneNumber.substring(3);
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URI}/api/profile?phone=${formattedPhone}`
        );
        if (response.data.success) {
          setUserDetails(response.data.data);
          setIsLoading(false);
        } else {
          setIsLoading(false);
        }
      } catch (err) {
        console.error("Error fetching user details:", err);
      }
    };

    getUserDetails();
    return () => setUserDetails(null);
  }, [user]);

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
      <a href="/">
        <SidebarHeader className="flex flex-row items-center gap-3 py-5 px-4">
          <AppIcon dim={8} />
          <span className="text-xl font-bold text-blue-500">Medxo</span>
        </SidebarHeader>
      </a>
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
          {userDetails ? (
            <div className="w-4/5 flex flex-col justify-center">
              <div className="text-sm font-bold">{userDetails?.fullName}</div>
              <div className="text-xs truncate">{userDetails?.phoneNumber}</div>
            </div>
          ) : (
            <div className="w-4/5 flex flex-col justify-center">
              <div className="text-sm font-bold">
                {user?.phoneNumbers[0]?.phoneNumber}
              </div>
            </div>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
