"use client";

import { useNotes } from "@/context/NotesContext";
import { NoteItem } from "./NoteItem";
import { EmptyState } from "./EmptyState";
import { useSearchParams } from "next/navigation";

export function NoteList() {
  const { notes, loading } = useNotes();
  const params = useSearchParams();
  const q = (params.get("q") ?? "").toLowerCase();

  const filtered = q
    ? notes.filter(
        (n) =>
          n.title.toLowerCase().includes(q) || (n.content || "").toLowerCase().includes(q)
      )
    : notes;

  if (loading) {
    return <div className="p-6 text-[var(--ocn-muted)]">Loading notes…</div>;
  }

  if (!filtered.length) {
    return <EmptyState title="No notes" subtitle="Create your first note to get started." ctaHref="/notes/new" />;
  }

  return (
    <ul className="grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3">
      {filtered.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </ul>
  );
}
