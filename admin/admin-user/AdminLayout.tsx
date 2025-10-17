"use client";

import React from "react";
import { AdminRoute } from "@/contexts/ProtectedRoutes";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/app/admin/AdminSidebar";
import AdminMain from "@/app/admin/AdminMain";

function AdminLayout({ children }: { children?: React.ReactNode }) {
  return (
    <AdminRoute>
      <SidebarProvider>
        <div className="min-h-screen flex bg-gray-50 dark:bg-gray-900">
          <aside className="w-64 border-r dark:border-gray-800">
            <AdminSidebar />
          </aside>

          <main className="flex-1 p-6">
            {/* If children are provided (nested admin pages) render them, otherwise render AdminMain */}
            {children ?? <AdminMain />}
          </main>
        </div>
      </SidebarProvider>
    </AdminRoute>
  );
}

export default AdminLayout;
