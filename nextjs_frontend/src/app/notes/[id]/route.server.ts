"use server";

/**
// PUBLIC_INTERFACE
 * Segment-level server module for /notes/[id] to ensure Next.js static export
 * discovers generateStaticParams during build.
 */
export function generateStaticParams() {
  // No params pre-rendered; client handles navigation.
  return [];
}
