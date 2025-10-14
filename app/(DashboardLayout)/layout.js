'use client';
import React from 'react';
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Home } from 'lucide-react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

const Layout = ({ children }) => {
  const { data } = useSession();

  return (
    <>
      {data?.user?.role === 'admin' && (
        <div>
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset className="bg-white shadow-lg rounded-r-xl border-gray-200">
              <header className="flex justify-between items-center h-16 px-4 border-b border-gray-200">
                {/* Left Section */}
                <div className="flex items-center gap-3">
                  <SidebarTrigger className="text-gray-700 hover:text-black" />
                  <div className="flex items-center gap-2">
                    <Separator orientation="vertical" className="h-5" />
                    <span className="text-lg font-semibold text-gray-800">FF ID BYSEL</span>
                  </div>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-3">
                  <Link href="/"><Home className="text-gray-600 hover:text-black" /></Link>
                  <img
                    src="/563dd4c11d7f61ef99c1b8d1892bd759.jpg"
                    alt="logo"
                    className="h-10 w-10 rounded-full border-2 border-gray-300 object-cover"
                  />
                </div>
              </header>

              {/* Content */}
              <div className="flex-1 flex flex-col gap-4 p-4 overflow-y-auto">
                {children}
              </div>
            </SidebarInset>
          </SidebarProvider>
        </div>
      )}
    </>
  );
};

export default Layout;
