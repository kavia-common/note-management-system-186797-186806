"use client";

import { useEffect, useState } from "react";
import { useNotes } from "@/context/NotesContext";
import { useParams, useRouter } from "next/navigation";
import { Note } from "@/types/note";
import { NoteEditor } from "@/components/NoteEditor";

export default function NoteDetailClientPage() {
  const params = useParams<{ id: string }>();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const { getNote, updateNote, deleteNote } = useNotes();
  const [note, setNote] = useState<Note | null>(null);
  const router = useRouter();

  useEffect(() => {
    let active = true;
    (async () => {
      const n = await getNote(id);
      if (active) setNote(n ?? null);
    })();
    return () => {
      active = false;
    };
  }, [id, getNote]);

  async function onSave(data: { title: string; content: string }) {
    if (!note) return;
    await updateNote({ id: note.id, title: data.title, content: data.content });
  }

  async function onDelete() {
    if (!note) return;
    const ok = await deleteNote(note.id);
    if (ok) router.replace("/");
  }

  if (!note) {
    return <div className="p-6 text-[var(--ocn-muted)]">Loading…</div>;
  }

  return (
    <div className="p-4">
      <div className="max-w-3xl mx-auto bg-white border border-[var(--ocn-border)] rounded-lg overflow-hidden">
        <NoteEditor initial={note} onSave={onSave} onDelete={onDelete} />
      </div>
    </div>
  );
}
