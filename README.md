# Mark Travel & Tours

Next.js 15 (App Router) · TypeScript (strict) · Tailwind CSS v4 · Zod · lucide-react

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Scripts: `dev`, `build`, `start`, `lint`, `typecheck`, `format`.

## Structure

- `app/` pages, API routes (`/api/site`, `/api/contact`), sitemap, robots
- `components/` `AppShell` (loads site data and shows the loader), `Loader`, `layout/Header|Footer`, `ui/`
- `lib/data.ts` all site content (services, posts, contact details), `lib/types.ts` shared types, `lib/validation.ts` Zod schema

## Editing

- **Loader:** `components/Loader.tsx` (props: `title`, `message`). The minimum display time is `MIN_LOADER_MS` in `AppShell.tsx`.
- **Content:** change `lib/data.ts`. Blog posts and services there are placeholder copy to replace.
- **Theme:** colors and fonts live in the `@theme` block of `app/globals.css`.
- **Contact form:** posts to `/api/contact`, validated with Zod. Set `RESEND_API_KEY` to deliver by email; otherwise enquiries are logged on the server.
