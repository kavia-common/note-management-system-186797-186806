import NewNoteClientPage from "./page";

/**
// PUBLIC_INTERFACE
 * Provide empty params for static export compatibility for the "new note" page.
 */
export function generateStaticParams() {
  return [];
}

export default function NewNoteServerPage() {
  return <NewNoteClientPage />;
}
