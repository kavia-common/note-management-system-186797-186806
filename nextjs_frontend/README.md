# Ocean Notes – Next.js Frontend

A modern notes UI built with Next.js App Router and the Ocean Professional theme.

## Scripts

- `npm run dev` – start development server
- `npm run build` – build for production
- `npm start` – run production build
- `npm run lint` – lint

## Environment variables

The app reads the following optional public vars (NEXT_PUBLIC_*). If absent, it falls back to a local in-browser store (localStorage) so the UI remains fully functional:

- `NEXT_PUBLIC_API_BASE` – Base URL for REST API (expects `/notes` endpoints)
- `NEXT_PUBLIC_BACKEND_URL` – Alternative base URL if `NEXT_PUBLIC_API_BASE` is not set
- `NEXT_PUBLIC_FRONTEND_URL`, `NEXT_PUBLIC_WS_URL`, `NEXT_PUBLIC_NODE_ENV`, `NEXT_PUBLIC_NEXT_TELEMETRY_DISABLED`,
  `NEXT_PUBLIC_ENABLE_SOURCE_MAPS`, `NEXT_PUBLIC_PORT`, `NEXT_PUBLIC_TRUST_PROXY`, `NEXT_PUBLIC_LOG_LEVEL`,
  `NEXT_PUBLIC_HEALTHCHECK_PATH`, `NEXT_PUBLIC_FEATURE_FLAGS`, `NEXT_PUBLIC_EXPERIMENTS_ENABLED` – optional; not required for basic usage.

When either API base is defined, the app calls:
- `GET    /notes`
- `GET    /notes/:id`
- `POST   /notes`
- `PUT    /notes/:id`
- `DELETE /notes/:id`

Otherwise, it uses an in-memory repository persisted to `localStorage` with sample data seeded on first run.

## Features

- Sidebar + main content layout
- Notes list, search, new/edit views
- Delete confirmation
- Toast notifications
- Keyboard/accessibility friendly controls
- Mobile-responsive
- Local storage fallback with sample data

## Styling

TailwindCSS v4 is used with theme variables injected as CSS custom properties for the Ocean Professional palette.

## Preview

No special steps are needed; simply run `npm run dev`. The preview system will discover routes automatically.
