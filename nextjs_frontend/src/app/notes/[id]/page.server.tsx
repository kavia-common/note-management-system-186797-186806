import ClientPage from "./ClientPage";

/**
// PUBLIC_INTERFACE
 * Server route entry for dynamic note page to support static export.
 * - Exports generateStaticParams() required by output: "export"
 * - Renders the client component for interactivity
 * This file is explicitly a server file (page.server.tsx).
 */
export async function generateStaticParams(): Promise<Array<{ id: string }>> {
  // No pre-rendered dynamic paths; the client page will handle navigation dynamically.
  return [];
}

export default function NoteDetailServerPage() {
  return <ClientPage />;
}
