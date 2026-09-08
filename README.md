# Bailey's Recipe Club

A single-page landing site for Bailey's $10 recipe offer: 100+ of Bailey's
personal recipes plus weekly, direct access to chat with Bailey. Built with
Next.js (App Router), React, TypeScript, and Tailwind CSS v4.

## Everything is a placeholder right now

No real VSL, photos, or checkout exist yet. Every spot where one belongs
uses a "slot" component in `src/components/ui/`, each rendering a clearly
labeled placeholder with the exact spec of what's needed:

- **`VideoSlot`** — stands in for the VSL. Pass `embedUrl` once the video
  is hosted somewhere (Wistia, YouTube, Loom, etc.).
- **`ImageSlot`** — stands in for a headshot or community screenshot. Pass
  `src` (a path under `public/images/`) once the file exists.
- **`CheckoutSlot`** — stands in for the Whop checkout widget. Pass
  `embedUrl` once the $10 product exists on Whop.

Swapping a placeholder for the real thing is a one-line prop change at the
call site in the relevant section component (`src/components/sections/`).

## Dev workflow

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build; also runs the TypeScript check
npm run lint    # eslint
```

## Structure

```
src/app/
  layout.tsx     # root layout: font, metadata
  globals.css    # Tailwind import + pink/white design tokens
  page.tsx       # the landing page: one section per component, in order
src/components/
  ui/            # generic primitives, including the placeholder "slot" components
  sections/      # one file per page section (Hero, WhatsInside, Community, About, Pricing, Footer)
```
