"use server";

/**
// PUBLIC_INTERFACE
 * Server layout stub for /notes/[id] route segment.
 * Also re-exports generateStaticParams to aid Next.js static export detection.
 */
export function generateStaticParams() {
  return [];
}

export default function NotesIdSegmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // No-op layout wrapper; keeps segment server-aware.
  return <>{children}</>;
}
