"use client";

import React from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/contexts/AuthContext";
import { User, Settings, LayoutDashboard, LogOut, LogIn } from "lucide-react";

export default function ProfileDropDown() {
  const { user, logout } = useAuth();

  const initials = user?.name
    ? user.name
        .split(" ")
        .map((p) => p[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()
    : "U";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="flex items-center gap-2 px-3 py-1 rounded-full hover:shadow-sm transition-shadow duration-150"
          aria-label="Open profile menu">
          <div className="h-8 w-8 rounded-full bg-card text-card-foreground flex items-center justify-center text-sm font-medium">
            {user?.avatar ? (
              <img
                src={user.avatar}
                alt="avatar"
                className="h-8 w-8 rounded-full object-cover"
              />
            ) : (
              <span>{initials}</span>
            )}
          </div>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-52">
        <div className="px-3 py-2">
          <DropdownMenuLabel className="text-sm">User Menu</DropdownMenuLabel>
        </div>

        {user ? (
          <>
            {/* Admin dashboard */}
            {user.role === "admin" && (
              <DropdownMenuItem asChild>
                <Link href="/admin" className="flex items-center gap-2">
                  <LayoutDashboard size={16} /> Admin Dashboard
                </Link>
              </DropdownMenuItem>
            )}

            {/* Account Settings */}
            <DropdownMenuItem asChild>
              <Link href="/account" className="flex items-center gap-2">
                <User size={16} /> Account Settings
              </Link>
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            {/* Logout */}
            <DropdownMenuItem
              className="flex items-center gap-2"
              onSelect={() => logout()}>
              <LogOut size={16} /> Log Out
            </DropdownMenuItem>
          </>
        ) : (
          <DropdownMenuItem asChild>
            <Link href="/auth" className="flex items-center gap-2">
              <LogIn size={16} /> Sign In / Sign Up
            </Link>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
