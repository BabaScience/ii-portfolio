"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useState, useEffect } from "react";

export function ThemeProviderClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  // Force light theme if none is set
  useEffect(() => {
    const storageKey = 'inspiration-theme';
    const storedTheme = localStorage.getItem(storageKey);
    
    if (!storedTheme) {
      localStorage.setItem(storageKey, 'light');
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
    }
    
    setMounted(true);
  }, []);

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      storageKey="inspiration-theme"
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
} 