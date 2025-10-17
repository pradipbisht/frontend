"use client";

import React from "react";
import AdminMain from "./AdminMain";
import { AdminRoute } from "@/contexts/ProtectedRoutes";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AdminSidebar } from "./AdminSidebar";

function AdminLayout({ children }: { children?: React.ReactNode }) {
  return (
    <AdminRoute>
      <SidebarProvider>
        <div className="min-h-screen flex bg-background pt-16">
          <aside className="w-64 border-r border-border fixed top-16 left-0 h-[calc(100vh-4rem)] z-40">
            <AdminSidebar />
          </aside>

          <main className="flex-1 p-6 ml-64">
            {/* If children are provided (nested admin pages) render them, otherwise render AdminMain */}
            {children ?? <AdminMain />}
          </main>
        </div>
      </SidebarProvider>
    </AdminRoute>
  );
}

export default AdminLayout;
