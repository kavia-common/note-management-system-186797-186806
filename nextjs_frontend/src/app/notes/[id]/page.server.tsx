import NoteDetailClientPage from "./page";

/**
// PUBLIC_INTERFACE
 * Provide empty params for static export compatibility for dynamic note page.
 */
export function generateStaticParams() {
  return [];
}

export default function NoteDetailServerPage() {
  return <NoteDetailClientPage />;
}
