"use client";

import { useEffect, useState } from "react";
import { Note } from "@/types/note";

type Props = {
  initial?: Note | null;
  onSave: (data: { title: string; content: string }) => Promise<void>;
  onDelete?: () => Promise<void>;
};

export function NoteEditor({ initial, onSave, onDelete }: Props) {
  const [title, setTitle] = useState(initial?.title ?? "");
  const [content, setContent] = useState(initial?.content ?? "");
  const [saving, setSaving] = useState(false);
  const [confirm, setConfirm] = useState(false);

  useEffect(() => {
    setTitle(initial?.title ?? "");
    setContent(initial?.content ?? "");
  }, [initial?.id, initial?.title, initial?.content]);

  async function handleSave(e?: React.FormEvent) {
    e?.preventDefault();
    setSaving(true);
    await onSave({ title, content });
    setSaving(false);
  }

  return (
    <form onSubmit={handleSave} className="h-full flex flex-col">
      <div className="p-4 border-b border-[var(--ocn-border)] flex items-center gap-2">
        <label className="sr-only" htmlFor="title">Title</label>
        <input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Untitled"
          className="flex-1 text-xl font-medium bg-transparent outline-none"
        />
        <div className="flex items-center gap-2">
          {onDelete ? (
            <button
              type="button"
              onClick={() => setConfirm(true)}
              className="px-3 py-2 rounded-md border border-[var(--ocn-border)] hover:bg-gray-50"
            >
              Delete
            </button>
          ) : null}
          <button
            type="submit"
            disabled={saving}
            className="px-4 py-2 rounded-md bg-[var(--ocn-primary)] text-white hover:opacity-90 disabled:opacity-60"
          >
            {saving ? "Saving…" : "Save"}
          </button>
        </div>
      </div>
      <label className="sr-only" htmlFor="content">Content</label>
      <textarea
        id="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your note here…"
        className="flex-1 p-4 outline-none resize-none"
      />
      {confirm && onDelete ? (
        <div
          className="fixed inset-0 z-50 grid place-items-center"
          role="dialog"
          aria-modal="true"
        >
          <div className="absolute inset-0 bg-black/30" onClick={() => setConfirm(false)} />
          <div className="relative z-10 w-full max-w-md rounded-lg bg-white shadow-lg border border-[var(--ocn-border)] p-6">
            <h3 className="text-lg font-medium">Delete note?</h3>
            <p className="mt-1 text-[var(--ocn-muted)]">This action cannot be undone.</p>
            <div className="mt-4 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setConfirm(false)}
                className="px-4 py-2 rounded-md border border-[var(--ocn-border)]"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={async () => {
                  await onDelete();
                  setConfirm(false);
                }}
                className="px-4 py-2 rounded-md bg-[var(--ocn-error)] text-white"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </form>
  );
}
