"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Only run on client to avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Pre-render button with no icon to avoid hydration mismatch
  if (!mounted) {
    return <Button variant="ghost" size="icon" className="w-9 h-9 rounded-full" />;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="w-9 h-9 rounded-full"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
      ) : (
        <Moon className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
      )}
    </Button>
  );
} 