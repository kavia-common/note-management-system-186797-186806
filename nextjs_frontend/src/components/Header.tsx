"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export function Header() {
  const router = useRouter();
  const params = useSearchParams();
  const initialQ = params.get("q") ?? "";
  const [q, setQ] = useState(initialQ);

  useEffect(() => {
    setQ(initialQ);
  }, [initialQ]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const url = q ? `/?q=${encodeURIComponent(q)}` : "/";
    router.push(url);
  }

  return (
    <header className="h-16 flex items-center justify-between px-4 border-b border-[var(--ocn-border)] bg-[var(--ocn-surface)]">
      <form onSubmit={onSubmit} className="flex-1 max-w-xl">
        <label className="sr-only" htmlFor="search">Search notes</label>
        <input
          id="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search notes..."
          className="w-full px-3 py-2 rounded-md border border-[var(--ocn-border)] focus:outline-none focus:ring-2 focus:ring-[var(--ocn-focus)]"
          type="search"
        />
      </form>
      <Link
        href="/notes/new"
        className="ml-4 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[var(--ocn-primary)] text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--ocn-focus)] transition"
      >
        + New
      </Link>
    </header>
  );
}
