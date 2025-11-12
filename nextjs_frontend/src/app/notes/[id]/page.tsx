import ClientPage from "./ClientPage";

/**
// PUBLIC_INTERFACE
 * Server route entry for dynamic note page to support static export.
 * - Exports generateStaticParams() required by output: "export"
 * - Renders the client component for interactivity
 * This file must remain a server module (no "use client").
 */
export function generateStaticParams() {
  // Static export with no pre-rendered params: Next will fallback to client-only behavior.
  return [];
}

export default function NoteDetailServerPage() {
  return <ClientPage />;
}
