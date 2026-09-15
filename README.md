# Bailey's Landing Page

A single-page landing site for Bailey's $5/month offer: weekly, direct
access to chat with Bailey about anything, plus 100+ of her personal
recipes. Built with Next.js (App Router), React, TypeScript, and
Tailwind CSS v4.

## Everything is a placeholder right now

Real photos don't exist yet. Every spot where one belongs uses a "slot"
component in `src/components/ui/`, each rendering a clearly labeled
placeholder with the exact spec of what's needed:

- **`VideoSlot`** — the VSL. Currently rendering the real Wistia embed
  (`wistiaMediaId` on the Hero's instance); pass a generic `embedUrl`
  instead for a different host, or drop both props to fall back to the
  placeholder.
- **`ImageSlot`** — stands in for a headshot or community screenshot. Pass
  `src` (a path under `public/images/`) once the file exists.

Swapping a placeholder for the real thing is a one-line prop change at the
call site in the relevant section component (`src/components/sections/`).

## Checkout

Apple Pay can't be embedded on-site yet (domain verification with Whop is
still pending — see `docs/` history / commit log), so every "buy" button
(`CtaButton`'s default `href`, in `src/lib/checkout.ts`) currently sends
people straight to Whop's own hosted checkout page for the plan, opened in
a new tab, rather than an embedded widget. Once Apple Pay verification is
sorted, swap `WHOP_CHECKOUT_URL` in `src/lib/checkout.ts` back to an
embedded checkout if you want one on-site again.

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
