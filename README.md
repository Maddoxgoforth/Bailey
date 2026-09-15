# Bailey's Landing Page

A single-page landing site for Bailey's $5/month offer: weekly, direct
access to chat with Bailey about anything, plus 100+ of her personal
recipes. Built with Next.js (App Router), React, TypeScript, and
Tailwind CSS v4.

## Everything is a placeholder right now

No real VSL, photos, or checkout exist yet. Every spot where one belongs
uses a "slot" component in `src/components/ui/`, each rendering a clearly
labeled placeholder with the exact spec of what's needed:

- **`VideoSlot`** — stands in for the VSL. Pass `embedUrl` once the video
  is hosted somewhere (Wistia, YouTube, Loom, etc.).
- **`ImageSlot`** — stands in for a headshot or community screenshot. Pass
  `src` (a path under `public/images/`) once the file exists.
- **`CheckoutSlot`** — renders the real Whop checkout once given a
  `planId` (the `$5/mo` plan is already wired up in `Pricing.tsx`); an
  `embedUrl` (plain iframe) or the placeholder box remain as fallbacks for
  other setups.

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
  layout.tsx         # root layout: font, metadata
  globals.css        # Tailwind import + pink/white design tokens
  page.tsx           # the landing page: one section per component, in order
  recipes/
    page.tsx         # browse/search all 100 recipes
    [slug]/page.tsx  # one recipe's full ingredients + steps
src/components/
  ui/                # generic primitives, including the placeholder "slot" components
  sections/          # one file per landing-page section (Hero, Community, WhatsInside, About, Pricing, Footer)
  recipes/           # RecipesNav, RecipeBrowser (search/filter), RecipeCard
src/data/recipes.json  # all 100 recipes (title, ingredients, steps, tip, etc.)
src/lib/recipes.ts     # typed accessors over recipes.json
```

## The 100 recipes

`/recipes` (browse/search) and `/recipes/[slug]` (one recipe's full
ingredients + steps) are normal pages on this same site, styled to match
the landing page.

`src/data/recipes.json` holds all 100 recipes. It was generated from the
per-category Python data files used to build the "Bailey's Recipe Box" PDF
cookbook (a separate deliverable, not part of this repo) — see that
project's `data/cat*.py` files if the source recipes ever need editing;
regenerate the JSON from there rather than hand-editing it, or hand-edit
`recipes.json` directly for small tweaks (title, a single ingredient, a
step's wording).
