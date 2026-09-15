import Link from "next/link";
import { getRecipeImagePath, type Recipe } from "@/lib/recipes";
import { toneForCategory } from "@/lib/categoryMeta";

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
}: {
  recipe: Recipe;
  categories: string[];
}) {
  const tone = toneForCategory(recipe.category, categories);

  return (
    <Link
      href={`/recipes/${recipe.slug}`}
      className={`group flex flex-col overflow-hidden rounded-2xl border-[3px] border-ink bg-background-elevated shadow-pop transition-all duration-200 hover:-translate-y-1 hover:shadow-pop-lg ${TONE_BORDER[tone]}`}
    >
      <div className="aspect-[4/3] w-full overflow-hidden border-b-[3px] border-ink">
        {/* eslint-disable-next-line @next/next/no-img-element -- static generated SVG, not a photo Next needs to optimize */}
        <img
          src={getRecipeImagePath(recipe)}
          alt={recipe.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <span
          className={`text-[11px] leading-tight font-extrabold tracking-wide uppercase ${TONE_TEXT[tone]}`}
        >
          {recipe.category}
        </span>

        <h3 className="font-display text-lg leading-tight font-bold text-foreground">
          {recipe.title}
        </h3>

        <p className="line-clamp-2 flex-1 text-sm text-muted">{recipe.blurb}</p>

        <div className="flex items-center gap-3 border-t border-border pt-3 text-xs font-bold text-muted">
          <span>⏱ {recipe.prepTime.split(" ").slice(0, 2).join(" ")} prep</span>
          <span>🔥 {recipe.cookTime.split(" ").slice(0, 2).join(" ")} cook</span>
        </div>
      </div>
    </Link>
  );
}
