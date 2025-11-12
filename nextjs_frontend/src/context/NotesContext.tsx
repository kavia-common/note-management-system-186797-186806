"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { Note, NoteCreate, NoteUpdate } from "@/types/note";
import { apiCreateNote, apiDeleteNote, apiGetNote, apiListNotes, apiUpdateNote } from "@/lib/api";
import { LocalRepo } from "@/lib/localRepo";
import { getApiBase } from "@/lib/utils";

type Toast = { id: string; type: "success" | "error" | "info"; message: string };

interface NotesContextValue {
  notes: Note[];
  loading: boolean;
  getNote: (id: string) => Promise<Note | undefined>;
  createNote: (payload: NoteCreate) => Promise<Note | undefined>;
  updateNote: (payload: NoteUpdate) => Promise<Note | undefined>;
  deleteNote: (id: string) => Promise<boolean>;
  refresh: () => Promise<void>;
  backend: boolean;
  toasts: Toast[];
  dismissToast: (id: string) => void;
}

const NotesContext = createContext<NotesContextValue | undefined>(undefined);

// PUBLIC_INTERFACE
export function useNotes() {
  const ctx = useContext(NotesContext);
  if (!ctx) throw new Error("useNotes must be used within NotesProvider");
  return ctx;
}

function makeToast(message: string, type: Toast["type"] = "info"): Toast {
  return { id: Math.random().toString(36).slice(2), type, message };
}

export function NotesProvider({ children }: { children: React.ReactNode }) {
  const backend = useMemo(() => Boolean(getApiBase()), []);
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);
  const [toasts, setToasts] = useState<Toast[]>([]);

  const pushToast = useCallback((t: Toast) => {
    setToasts((prev) => [...prev, t]);
    // auto dismiss
    setTimeout(() => {
      setToasts((prev) => prev.filter((x) => x.id !== t.id));
    }, 3000);
  }, []);

  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      const data = backend ? await apiListNotes() : LocalRepo.list();
      setNotes(data);
    } catch (e) {
      console.error(e);
      pushToast(makeToast("Failed to load notes", "error"));
    } finally {
      setLoading(false);
    }
  }, [backend, pushToast]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const getNote = useCallback(
    async (id: string) => {
      try {
        const note = backend ? await apiGetNote(id) : LocalRepo.get(id);
        return note;
      } catch (e) {
        console.error(e);
        pushToast(makeToast("Failed to fetch note", "error"));
      }
    },
    [backend, pushToast]
  );

  const createNote = useCallback(
    async (payload: NoteCreate) => {
      try {
        const note = backend ? await apiCreateNote(payload) : LocalRepo.create(payload);
        if (note) {
          setNotes((prev) => [note, ...prev.filter((n) => n.id !== note.id)]);
          pushToast(makeToast("Note created", "success"));
        }
        return note;
      } catch (e) {
        console.error(e);
        pushToast(makeToast("Failed to create note", "error"));
      }
    },
    [backend, pushToast]
  );

  const updateNote = useCallback(
    async (payload: NoteUpdate) => {
      try {
        const note = backend ? await apiUpdateNote(payload) : LocalRepo.update(payload);
        if (note) {
          setNotes((prev) => {
            const others = prev.filter((n) => n.id !== note.id);
            return [note, ...others];
          });
          pushToast(makeToast("Note saved", "success"));
        }
        return note ?? undefined;
      } catch (e) {
        console.error(e);
        pushToast(makeToast("Failed to save note", "error"));
      }
    },
    [backend, pushToast]
  );

  const deleteNote = useCallback(
    async (id: string) => {
      try {
        const ok = backend ? (await apiDeleteNote(id), true) : LocalRepo.delete(id);
        if (ok) {
          setNotes((prev) => prev.filter((n) => n.id !== id));
          pushToast(makeToast("Note deleted", "success"));
        }
        return ok;
      } catch (e) {
        console.error(e);
        pushToast(makeToast("Failed to delete note", "error"));
        return false;
      }
    },
    [backend, pushToast]
  );

  const dismissToast = (id: string) => setToasts((prev) => prev.filter((t) => t.id !== id));

  const value: NotesContextValue = {
    notes,
    loading,
    getNote,
    createNote,
    updateNote,
    deleteNote,
    refresh,
    backend,
    toasts,
    dismissToast,
  };

  return <NotesContext.Provider value={value}>{children}</NotesContext.Provider>;
}
