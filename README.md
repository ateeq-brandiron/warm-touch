# WarmTouch

Single-page marketing site for WarmTouch, a senior living placement service.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- [lucide-react](https://lucide.dev) for icons

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

- `src/content/` — page copy, one file per section (`site.ts` for cross-page
  content like nav links and the phone number, `hero.ts` for the hero, etc.).
  Edit these to change copy without touching component markup.
- `src/components/layout/` — header, footer, and other page chrome.
- `src/components/sections/` — one component per homepage section, assembled
  in order in `src/app/page.tsx`.
- `src/components/ui/` — shared building blocks (buttons, etc.).
- `src/app/globals.css` — design tokens (colors, fonts) as CSS variables,
  mapped into Tailwind via `@theme inline`.
- `public/images/` — logo and photo assets.

## Design system

Colors, type, and spacing follow the approved WarmTouch design handoff:
a warm cream background, sage green as the primary brand accent (reserved
dark green for the header and small accent bands), amber/orange for eyebrow
labels, Caprasimo for headlines, and Figtree for body copy. Base type size is
raised (`html { font-size: 112.5% }`) so Tailwind's default text scale stays
comfortably legible for an older audience.
