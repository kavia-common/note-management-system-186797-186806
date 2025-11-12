"use server";

/**
// PUBLIC_INTERFACE
 * Server layout stub for /notes/[id] route segment.
 * Keep this as a server file but do not export generateStaticParams here
 * to avoid conflicts with the page-level export required by Next.js.
 */
export default function NotesIdSegmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // No-op layout wrapper; keeps segment server-aware.
  return <>{children}</>;
}
