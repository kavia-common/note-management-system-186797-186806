"use client";

import Link from "next/link";
import { Note } from "@/types/note";

export function NoteItem({ note }: { note: Note }) {
  const updated = new Date(note.updatedAt).toLocaleString();
  return (
    <li className="group">
      <Link
        href={`/notes/${note.id}`}
        className="block p-3 rounded-lg border border-[var(--ocn-border)] hover:shadow-sm bg-white transition"
      >
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-[var(--ocn-text)]">{note.title || "Untitled"}</h3>
          <span className="text-xs text-[var(--ocn-muted)]">{updated}</span>
        </div>
        <p className="mt-1 text-sm line-clamp-2 text-[var(--ocn-muted)] whitespace-pre-wrap">
          {note.content}
        </p>
      </Link>
    </li>
  );
}
