"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render children until mounted on the client.
  // Previously we returned the children early which caused them to mount
  // once before NextThemesProvider and then again after mounting —
  // this double-mount caused client effects (like AuthProvider's checkAuth)
  // to run multiple times and trigger repeated /api/auth/me requests.
  if (!mounted) {
    return null;
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
