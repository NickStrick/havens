import type { Metadata } from "next";
import "./globals.css";
import { ForgeConnector } from "@/components/ForgeConnector";

export const metadata: Metadata = {
  title: "Havens Command Center",
  description: "Scoreboard, coaching and crew status for the bender brigade.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      {/* Extensions like ColorZilla add attributes to <body>; ignore those here only. */}
      <body className="min-h-full" suppressHydrationWarning>
        <ForgeConnector />
        {children}
      </body>
    </html>
  );
}
