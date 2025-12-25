import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AFH Omni-Pulse - VOA Monitoring System",
  description: "One-click Voice of Audience monitoring for the AFH ecosystem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

