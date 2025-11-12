"use client";

import Link from "next/link";

export function EmptyState({
  title,
  subtitle,
  ctaHref,
}: {
  title: string;
  subtitle?: string;
  ctaHref?: string;
}) {
  return (
    <div className="m-6 p-8 border-2 border-dashed border-[var(--ocn-border)] rounded-xl bg-white">
      <h2 className="text-lg font-medium text-[var(--ocn-text)]">{title}</h2>
      {subtitle ? <p className="mt-1 text-[var(--ocn-muted)]">{subtitle}</p> : null}
      {ctaHref ? (
        <Link
          href={ctaHref}
          className="mt-4 inline-flex items-center px-4 py-2 rounded-md bg-[var(--ocn-primary)] text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--ocn-focus)]"
        >
          Create Note
        </Link>
      ) : null}
    </div>
  );
}
