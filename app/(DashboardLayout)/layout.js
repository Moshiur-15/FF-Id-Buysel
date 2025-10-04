import React from 'react';
import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
const layout = ({ children }) => {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex justify-between h-16 shrink-0 items-center gap-2 border-b">
            <div className="flex items-center gap-2 px-3">
              <SidebarTrigger />
              <div>
                <Separator orientation="vertical" className="mr-2 h-4" />
                <span className="text-lg font-medium">FF ID BYSEL</span>
              </div>
            </div>
            <div>
              <img src="/563dd4c11d7f61ef99c1b8d1892bd759.jpg" alt="logo" className="h-8 w-8 rounded-full" />
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4">
            {children}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default layout;
