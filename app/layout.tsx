// Codes by mahdi tasha
// Importing part
import { RootLayoutProps } from "@/type/component";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { cn } from "@/util/cn";
import "@/style/index.css";

// Defining metadata
export const metadata: Metadata = {
  title: "Banking system for React",
  description:
    "A set of utility functions and components for react to get info and icon of the persian banking systems",
};

// Defining font
const JetbrainsFont = JetBrains_Mono({
  display: "block",
  style: "normal",
  weight: ["300", "500", "700"],
});

// Creating and exporting RootLayout component as default
export default function RootLayout({ children }: RootLayoutProps): ReactNode {
  // Returning JSX
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "bg-background text-foreground lg:overflow-y-hidden overflow-x-hidden lg:h-dvh h-auto",
          JetbrainsFont.className,
        )}
      >
        {children}
      </body>
    </html>
  );
}
