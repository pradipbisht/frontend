"use client";

import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  const handleToggle = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <Switch
      checked={theme === "dark"}
      onCheckedChange={handleToggle}
      aria-label="Toggle dark mode"
    />
  );
}
