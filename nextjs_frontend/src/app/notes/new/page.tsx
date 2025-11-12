"use client";

import { useNotes } from "@/context/NotesContext";
import { NoteEditor } from "@/components/NoteEditor";
import { useRouter } from "next/navigation";

export default function NewNoteClientPage() {
  const { createNote } = useNotes();
  const router = useRouter();

  async function onSave(data: { title: string; content: string }) {
    const created = await createNote({ title: data.title, content: data.content });
    if (created) router.replace(`/notes/${created.id}`);
  }

  return (
    <div className="p-4">
      <div className="max-w-3xl mx-auto bg-white border border-[var(--ocn-border)] rounded-lg overflow-hidden">
        <NoteEditor initial={null} onSave={onSave} />
      </div>
    </div>
  );
}
