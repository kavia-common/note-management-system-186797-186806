export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string; // ISO
  updatedAt: string; // ISO
}

export type NoteCreate = Pick<Note, "title" | "content">;
export type NoteUpdate = Partial<NoteCreate> & { id: string };
