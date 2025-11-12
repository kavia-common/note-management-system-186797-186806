"use server";

/**
// PUBLIC_INTERFACE
 * Route segment configuration for /notes/[id] dynamic route.
 * Export generateStaticParams here to ensure Next.js picks it up during static export builds.
 */
export function generateStaticParams() {
  // We don't pre-render any specific note IDs during static export.
  return [];
}
