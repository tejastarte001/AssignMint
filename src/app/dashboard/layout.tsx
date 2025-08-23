"use client";

import React from 'react';
import DashboardSidebar from "@/components/dashboard-sidebar";
import DashboardHeader from "@/components/dashboard-header";
import { useAuth } from '@/context/auth-context';
import { SidebarProvider, Sidebar, SidebarInset } from '@/components/ui/sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useAuth();
  
  if (!user) {
    // AuthProvider handles redirects, this is a fallback.
    return null;
  }
  
  return (
    <SidebarProvider>
        <Sidebar>
            <DashboardSidebar />
        </Sidebar>
        <SidebarInset>
            <DashboardHeader />
            <div className="p-4 sm:p-6 lg:p-8 overflow-y-auto h-[calc(100vh-4rem)]">
                {children}
            </div>
        </SidebarInset>
    </SidebarProvider>
  );
}
