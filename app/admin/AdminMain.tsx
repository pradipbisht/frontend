"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Spinner } from "@/components/ui/spinner";

async function fetchUsers() {
  const res = await fetch("/api/admin/users", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load users");
  const data = await res.json();
  return data.users || [];
}

function AdminMain() {
  const { data, isLoading, isError } = useQuery<any[]>({
    queryKey: ["admin", "users", "count"],
    queryFn: fetchUsers,
    staleTime: 1000 * 60,
  });

  const total = Array.isArray(data) ? data.length : 0;

  return (
    <div className="w-full">
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Users</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Manage site users and roles.
            </p>
            <div className="mt-4 flex items-center gap-4">
              <Link href="/admin/users">
                <Button>View users</Button>
              </Link>
              <div className="ml-auto text-sm text-muted-foreground">
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <Spinner /> <span>Loading...</span>
                  </div>
                ) : isError ? (
                  <span className="text-red-500">Failed to load</span>
                ) : (
                  <span className="font-semibold">{total} users</span>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Content</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Manage posts, pages and categories.
            </p>
            <div className="mt-4">
              <Button variant="outline">Open content manager</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Site Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Global site settings and integrations.
            </p>
            <div className="mt-4">
              <Link href="/admin/settings">
                <Button variant="outline">Settings</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent activity / placeholders */}
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Recent activity</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              No recent activity to show.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default AdminMain;
