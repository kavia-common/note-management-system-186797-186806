import type { Metadata } from "next";
import "./globals.css";
import { ClientShell } from "./ClientShell";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Ocean Notes",
  description: "Create, edit, and manage notes with a modern, accessible UI.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ClientShell>
          <Suspense fallback={null}>
            {children}
          </Suspense>
        </ClientShell>
      </body>
    </html>
  );
}
