"use client";

import React from "react";

export function Modal({
  open,
  title,
  description,
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
}: {
  open: boolean;
  title: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="absolute inset-0 bg-black/30" onClick={onCancel} />
      <div className="relative z-10 w-full max-w-md rounded-lg bg-white shadow-lg border border-[var(--ocn-border)] p-6">
        <h3 id="modal-title" className="text-lg font-medium text-[var(--ocn-text)]">
          {title}
        </h3>
        {description ? (
          <p className="mt-2 text-[var(--ocn-muted)]">{description}</p>
        ) : null}
        <div className="mt-6 flex justify-end gap-2">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-md border border-[var(--ocn-border)] text-[var(--ocn-text)] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[var(--ocn-focus)]"
          >
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-md bg-[var(--ocn-error)] text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--ocn-focus)]"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
