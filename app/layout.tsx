import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from "@/components/ui/sonner";
import { ThemeProviderClient } from "./theme-provider";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Inspiration Illimitee - Philosophical Insights',
  description: 'Exploring the depths of human consciousness and philosophical wisdom',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen antialiased`}>
        <ThemeProviderClient>
          {children}
          <Toaster />
        </ThemeProviderClient>
      </body>
    </html>
  );
}