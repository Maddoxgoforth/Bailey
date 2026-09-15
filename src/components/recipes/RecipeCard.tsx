import Link from "next/link";
import type { Recipe } from "@/lib/recipes";
import { CATEGORY_EMOJI, toneForCategory } from "@/lib/categoryMeta";

const TONE_BORDER = {
  pink: "hover:border-accent",
  yellow: "hover:border-accent-2",
  purple: "hover:border-accent-3",
} as const;

const TONE_TEXT = {
  pink: "text-accent",
  yellow: "text-accent-2-dim",
  purple: "text-accent-3",
} as const;

export default function RecipeCard({
  recipe,
  categories,
  basePath = "/recipes",
}: {
  recipe: Recipe;
  categories: string[];
  basePath?: string;
}) {
  const tone = toneForCategory(recipe.category, categories);

  return (
    <Link
      href={`${basePath}/${recipe.slug}`}
      className={`group flex flex-col gap-3 rounded-2xl border-[3px] border-ink bg-background-elevated p-5 shadow-pop transition-all duration-200 hover:-translate-y-1 hover:shadow-pop-lg ${TONE_BORDER[tone]}`}
    >
      <div className="flex items-start justify-between gap-2">
        <span
          aria-hidden
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[3px] border-ink bg-background text-xl transition-transform duration-200 group-hover:scale-110"
        >
          {CATEGORY_EMOJI[recipe.category] ?? "🍽️"}
        </span>
        <span
          className={`text-right text-[11px] leading-tight font-extrabold tracking-wide uppercase ${TONE_TEXT[tone]}`}
        >
          {recipe.category}
        </span>
      </div>

      <h3 className="font-display text-lg leading-tight font-bold text-foreground">
        {recipe.title}
      </h3>

      <p className="line-clamp-2 flex-1 text-sm text-muted">{recipe.blurb}</p>

      <div className="flex items-center gap-3 border-t border-border pt-3 text-xs font-bold text-muted">
        <span>⏱ {recipe.prepTime.split(" ").slice(0, 2).join(" ")} prep</span>
        <span>🔥 {recipe.cookTime.split(" ").slice(0, 2).join(" ")} cook</span>
      </div>
    </Link>
  );
}
