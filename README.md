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
src/proxy.ts           # subdomain rewrite — see "Recipes subdomain" below
```

## The 100 recipes

`src/data/recipes.json` holds all 100 recipes. It was generated from the
per-category Python data files used to build the "Bailey's Recipe Box" PDF
cookbook (a separate deliverable, not part of this repo) — see that
project's `data/cat*.py` files if the source recipes ever need editing;
regenerate the JSON from there rather than hand-editing it, or hand-edit
`recipes.json` directly for small tweaks (title, a single ingredient, a
step's wording).

## Recipes subdomain

`/recipes` and `/recipes/[slug]` work today as normal paths on whatever
domain this app is deployed to. `src/proxy.ts` additionally makes them
**subdomain-ready**: if a request's Host header starts with `recipes.`
(e.g. `recipes.yoursite.com`), it transparently serves that same section
at the subdomain's own root — `recipes.yoursite.com/` shows the recipe
grid, `recipes.yoursite.com/some-recipe` shows that recipe, with no
`/recipes` prefix anywhere in the URL.

Two things this repo can't do on its own, since they're hosting/DNS
config rather than code:

1. **Point the subdomain at this deployment.** In whatever host this is
   deployed to (e.g. Vercel → Project → Settings → Domains), add
   `recipes.yoursite.com` as a domain on this same project. Once that's
   done, `src/proxy.ts` handles the rest automatically — no redeploy
   needed beyond what you'd do anyway.
2. **Set `NEXT_PUBLIC_MAIN_SITE_URL`** as a build environment variable
   once the main domain is known (e.g. `https://yoursite.com`). The
   recipe pages' "GET ACCESS" / "CHAT WITH BAILEY" buttons and the
   `BAILEY` logo need this to link back to the main landing page's
   checkout — a real cross-origin link, since the subdomain is a
   different origin a same-app rewrite can't fake. Until it's set, those
   links just fall back to relative paths (fine for testing everything
   under a single domain at `/recipes`, not correct once the subdomain
   is actually live).
