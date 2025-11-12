# Client-side environment access

This app reads only public (NEXT_PUBLIC_*) variables on the client. To avoid runtime errors like "process is not defined", all reads are guarded:

Resolution order used by src/lib/utils.ts:
1. window.__ENV__ map if provided (e.g., via a small script tag in index HTML)
2. Build-time replaced env (process.env.NEXT_PUBLIC_* or import.meta.env.NEXT_PUBLIC_*)
3. Fallback: undefined

To configure an API base for the backend:
- Set NEXT_PUBLIC_API_BASE or NEXT_PUBLIC_BACKEND_URL in your .env for Next.js builds.
- Or, inject at runtime using a script that sets window.__ENV__ = { NEXT_PUBLIC_API_BASE: "https://api.example.com" }.

The app automatically falls back to a local in-browser repository if no API base is provided.
