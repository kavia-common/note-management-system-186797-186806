"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "@/lib/utils";

export function Sidebar() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || pathname?.startsWith(href + "/");

  return (
    <aside
      className="flex-shrink-0 w-64 border-r border-[var(--ocn-border)] bg-[var(--ocn-surface)]/95 backdrop-blur supports-[backdrop-filter]:bg-white/75"
      aria-label="Sidebar"
    >
      <div className="h-16 flex items-center px-4 border-b border-[var(--ocn-border)]">
        <span className="text-lg font-semibold text-[var(--ocn-text)]">Ocean Notes</span>
      </div>
      <nav className="p-3 space-y-1" aria-label="Primary">
        <Link
          href="/"
          className={clsx(
            "block px-3 py-2 rounded-md transition",
            isActive("/") ? "bg-blue-50 text-blue-700" : "hover:bg-gray-50 text-[var(--ocn-text)]"
          )}
        >
          Notes
        </Link>
        <Link
          href="/notes/new"
          className={clsx(
            "block px-3 py-2 rounded-md transition",
            isActive("/notes/new")
              ? "bg-blue-50 text-blue-700"
              : "hover:bg-gray-50 text-[var(--ocn-text)]"
          )}
        >
          New Note
        </Link>
      </nav>
      <div className="mt-auto p-3 text-sm text-[var(--ocn-muted)]">
        <p className="px-2">Theme: Ocean Professional</p>
      </div>
    </aside>
  );
}
