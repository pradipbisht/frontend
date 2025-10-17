// frontend/app/admin/layout.tsx
// Server layout that mounts the client AdminLayout (sidebar + guard)
import React from "react";
import AdminLayout from "./AdminLayout";

export const metadata = {
  title: "Admin",
};

export default function AdminAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminLayout>{children}</AdminLayout>;
}
