"use client";

import { useMemo, useState } from "react";
import type { Recipe } from "@/lib/recipes";
import { CATEGORY_EMOJI } from "@/lib/categoryMeta";
import RecipeCard from "./RecipeCard";

const ALL = "All Recipes";

export default function RecipeBrowser({
  recipes,
  categories,
}: {
  recipes: Recipe[];
  categories: string[];
}) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(ALL);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return recipes.filter((r) => {
      const matchesCategory =
        activeCategory === ALL || r.category === activeCategory;
      if (!matchesCategory) return false;
      if (!q) return true;
      return (
        r.title.toLowerCase().includes(q) ||
        r.blurb.toLowerCase().includes(q) ||
        r.ingredients.some((i) => i.toLowerCase().includes(q))
      );
    });
  }, [recipes, query, activeCategory]);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col items-center gap-4">
        <div className="w-full max-w-md">
          <div className="flex items-center gap-2 rounded-2xl border-[3px] border-ink bg-background-elevated px-4 py-3 shadow-pop-sm">
            <span aria-hidden className="text-lg">
              🔍
            </span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search recipes or ingredients…"
              className="w-full bg-transparent text-sm text-foreground placeholder:text-muted focus:outline-none"
            />
            {query ? (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="text-muted hover:text-foreground"
              >
                ✕
              </button>
            ) : null}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          <button
            type="button"
            onClick={() => setActiveCategory(ALL)}
            className={`rounded-full border-[3px] border-ink px-4 py-1.5 text-xs font-extrabold uppercase transition-all ${
              activeCategory === ALL
                ? "-rotate-1 bg-accent text-white shadow-pop-sm"
                : "bg-background-elevated text-foreground hover:-translate-y-0.5"
            }`}
          >
            {ALL}
          </button>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border-[3px] border-ink px-4 py-1.5 text-xs font-extrabold whitespace-nowrap transition-all ${
                activeCategory === category
                  ? "-rotate-1 bg-accent-2 text-ink shadow-pop-sm"
                  : "bg-background-elevated text-foreground hover:-translate-y-0.5"
              }`}
            >
              {CATEGORY_EMOJI[category] ?? ""} {category}
            </button>
          ))}
        </div>
      </div>

      <p className="text-center text-sm font-bold text-muted">
        {filtered.length === 0
          ? "No recipes match that search."
          : `Showing ${filtered.length} of ${recipes.length} recipes`}
      </p>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((recipe) => (
            <RecipeCard key={recipe.slug} recipe={recipe} categories={categories} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-3 rounded-2xl border-[3px] border-dashed border-border bg-background-elevated py-16 text-center">
          <span aria-hidden className="text-3xl">
            🤔
          </span>
          <p className="text-muted">
            Try a different search, or clear the filter above.
          </p>
        </div>
      )}
    </div>
  );
}
