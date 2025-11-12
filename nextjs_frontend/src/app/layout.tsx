import type { Metadata } from "next";
import "./globals.css";
import { ClientShell } from "./ClientShell";

export const metadata: Metadata = {
  title: "Ocean Notes",
  description: "Create, edit, and manage notes with a modern, accessible UI.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
