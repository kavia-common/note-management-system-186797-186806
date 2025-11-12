"use client";

import { useNotes } from "@/context/NotesContext";

export function ToastCenter() {
  const { toasts, dismissToast } = useNotes();

  return (
    <div className="fixed bottom-4 right-4 z-40 space-y-2">
      {toasts.map((t) => (
        <div
          key={t.id}
          role="status"
          className={`px-4 py-2 rounded-md shadow border text-white ${
            t.type === "error"
              ? "bg-red-500 border-red-600"
              : t.type === "success"
              ? "bg-emerald-500 border-emerald-600"
              : "bg-blue-500 border-blue-600"
          }`}
        >
          <div className="flex items-start gap-3">
            <span>{t.message}</span>
            <button
              aria-label="Dismiss notification"
              className="opacity-80 hover:opacity-100 focus:outline-none"
              onClick={() => dismissToast(t.id)}
            >
              ✕
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
