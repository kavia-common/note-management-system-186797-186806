"use client";

import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { NotesProvider } from "@/context/NotesContext";
import { applyThemeVars } from "@/lib/theme";
import { useEffect } from "react";
import { ToastCenter } from "@/components/ToastCenter";

/**
// PUBLIC_INTERFACE
 * Client-side application shell that renders the sidebar, header, and page content,
 * and wires up providers and runtime theme variables.
 */
export function ClientShell({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    applyThemeVars();
  }, []);

  return (
    <NotesProvider>
      <div className="app-shell">
        <Sidebar />
        <main className="min-h-screen bg-gradient-to-b from-blue-50/30 to-gray-50">
          <Header />
          <div className="max-w-6xl mx-auto">{children}</div>
        </main>
      </div>
      <ToastCenter />
    </NotesProvider>
  );
}
