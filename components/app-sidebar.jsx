import * as React from "react"
import { GalleryVerticalEnd } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

const data = {
  navMain: [
    {
      title: "Add Ids",
      url: "/dashboard/add-ids",
    },
    {
      title: "All Users",
      url: "/dashboard/all-users",
    },
    {
      title: "Manage Ids",
      url: "/dashboard/manage-ids",
    },
  ],
}

export function AppSidebar({
  ...props
}) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <div className="bg-[#0029f7c0] hover:bg-[#001fd1dd] transition-colors duration-300 rounded">
          <a
            href="/"
            className="py-4 px-6 flex items-center justify-start gap-4 hover:scale-105 transform transition-all duration-200"
          >
            {/* Icon */}
            <div className="text-white bg-[#001bd1] p-2 rounded-full shadow-sm flex items-center justify-center">
              <GalleryVerticalEnd className="w-6 h-6" />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-1 leading-none">
              <span className="font-semibold text-white text-lg">DASHBOARD</span>
              <span className="text-white/70 text-sm">Overview & stats</span>
            </div>
          </a>
        </div>

      </SidebarHeader>
      <SidebarContent className='bg-blue-50'>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url} className="font-medium hover:bg-[#0029f7ba] active:bg-[#0029f7ba]">
                    {item.title}
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
