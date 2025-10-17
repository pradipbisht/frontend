import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Users, Settings } from "lucide-react";

export function AdminSidebar() {
  return (
    <Sidebar
      className="flex flex-col h-screen sticky top-16 bg-sidebar text-sidebar-foreground"
      style={{
        backgroundColor: "var(--sidebar)",
        color: "var(--sidebar-foreground)",
      }}>
      {/* Header */}
      <SidebarHeader>
        <div className="px-4 py-4 text-lg font-semibold">LifeStyle Admin</div>
      </SidebarHeader>

      {/* Sidebar Links */}
      <SidebarContent className="flex-1 overflow-y-auto px-1 py-2">
        <SidebarGroup className="flex flex-col gap-1">
          <Link
            href="/admin"
            className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition">
            <LayoutDashboard size={16} /> Dashboard
          </Link>
          <Link
            href="/admin/users"
            className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition">
            <Users size={16} /> Users
          </Link>
          <Link
            href="/admin/settings"
            className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition">
            <Settings size={16} /> Settings
          </Link>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="mt-auto p-4">
        <Link href="/" className="block w-full">
          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2">
            Back to Site
          </Button>
        </Link>
      </SidebarFooter>
    </Sidebar>
  );
}
