"use client";

import { NoteList } from "@/components/NoteList";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={null}>
      <NoteList />
    </Suspense>
  );
}
