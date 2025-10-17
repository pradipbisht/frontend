"use client";

import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";

async function fetchUsers() {
  const res = await fetch("/api/admin/users", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load users");
  const data = await res.json();
  return data.users || [];
}

async function deleteUserRequest(id: string) {
  const res = await fetch(`/api/admin/users/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Failed to delete user");
  return res.json();
}

export default function UsersPage() {
  const qc = useQueryClient();
  const [editingUser, setEditingUser] = React.useState<any | null>(null);
  const [open, setOpen] = React.useState(false);

  const { data, isLoading, isError } = useQuery<any[] | undefined>({
    queryKey: ["admin", "users"],
    queryFn: fetchUsers,
    staleTime: 1000 * 60,
  });

  const del = useMutation<any, Error, string>({
    mutationFn: (id: string) => deleteUserRequest(id),
    onSuccess: () => {
      toast.success("User deleted");
      qc.invalidateQueries({ queryKey: ["admin", "users"] });
    },
    onError: (err: any) => {
      toast.error(err?.message || "Delete failed");
    },
  });

  const update = useMutation<any, Error, { id: string; body: any }>({
    mutationFn: ({ id, body }) =>
      fetch(`/api/admin/users/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }).then(async (r) => {
        if (!r.ok) throw new Error("Update failed");
        return r.json();
      }),
    onSuccess: () => {
      toast.success("User updated");
      qc.invalidateQueries({ queryKey: ["admin", "users"] });
      setOpen(false);
      setEditingUser(null);
    },
    onError: (err: any) => {
      toast.error(err?.message || "Update failed");
    },
  });

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this user?")) return;
    del.mutate(id);
  };

  const openEdit = (u: any) => {
    setEditingUser(u);
    setOpen(true);
  };

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!editingUser) return;
    const data = new FormData(e.currentTarget as HTMLFormElement);
    const body: any = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      role: String(data.get("role") || "user"),
    };
    // don't send empty strings for password
    const password = String(data.get("password") || "").trim();
    if (password) body.password = password;

    update.mutate({ id: editingUser._id, body });
  };

  return (
    <div className="w-full min-h-[calc(100vh-4rem)] px-6 py-4 bg-background text-foreground flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Users</h1>
        <Button onClick={() => toast("Add user not implemented yet")}>
          Add user
        </Button>
      </div>

      <div className="flex-1 w-full overflow-auto">
        {isLoading ? (
          <div className="flex items-center justify-center p-6">
            <Spinner />
          </div>
        ) : isError ? (
          <div className="text-red-500">Failed to load users</div>
        ) : (
          <Table className="w-full min-w-full">
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {(data || []).map((u: any) => (
                <TableRow key={u._id}>
                  <TableCell>{u.name}</TableCell>
                  <TableCell>{u.email}</TableCell>
                  <TableCell>{u.role}</TableCell>
                  <TableCell className="text-center">
                    <div className="flex items-center justify-center gap-2 pointer-events-auto">
                      <Button variant="ghost" onClick={() => openEdit(u)}>
                        Edit
                      </Button>
                      <Button
                        variant="destructive"
                        onClick={() => handleDelete(u._id)}>
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>

      {/* Edit sheet/modal */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Edit user</SheetTitle>
          </SheetHeader>
          <form onSubmit={handleSave} className="p-4 flex flex-col gap-4">
            <div className="grid gap-2">
              <label className="text-sm font-medium">Name</label>
              <Input
                name="name"
                defaultValue={editingUser?.name || ""}
                required
              />
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-medium">Email</label>
              <Input
                name="email"
                type="email"
                defaultValue={editingUser?.email || ""}
                required
              />
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-medium">Role</label>
              <select
                name="role"
                defaultValue={editingUser?.role || "user"}
                className="h-9 w-full min-w-0 rounded-md border px-3 py-1 bg-transparent">
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-medium">
                New password (leave blank to keep)
              </label>
              <Input name="password" type="password" />
            </div>

            <SheetFooter className="flex gap-2">
              <Button
                type="submit"
                className="ml-auto"
                disabled={update.status === "pending"}>
                Save
              </Button>
              <SheetClose asChild>
                <Button variant="ghost">Cancel</Button>
              </SheetClose>
            </SheetFooter>
          </form>
        </SheetContent>
      </Sheet>
    </div>
  );
}
