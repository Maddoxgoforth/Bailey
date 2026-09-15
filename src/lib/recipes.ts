import recipesData from "@/data/recipes.json";

export type Recipe = {
  id: number;
  slug: string;
  category: string;
  title: string;
  blurb: string;
  servings: string;
  prepTime: string;
  cookTime: string;
  ingredients: string[];
  steps: string[];
  tip: string;
};

const RECIPES = recipesData as Recipe[];

export function getAllRecipes(): Recipe[] {
  return RECIPES;
}

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return RECIPES.find((r) => r.slug === slug);
}

export function getAllSlugs(): string[] {
  return RECIPES.map((r) => r.slug);
}

export function getCategories(): string[] {
  const seen = new Set<string>();
  const ordered: string[] = [];
  for (const r of RECIPES) {
    if (!seen.has(r.category)) {
      seen.add(r.category);
      ordered.push(r.category);
    }
  }
  return ordered;
}

export function getRelatedRecipes(recipe: Recipe, count = 3): Recipe[] {
  return RECIPES.filter(
    (r) => r.category === recipe.category && r.slug !== recipe.slug,
  ).slice(0, count);
}

/**
 * Every recipe has a generated illustration at this path (see
 * public/images/recipes/) — a colorful icon standing in for a real photo
 * of the finished dish. Swapping in real photography later is a one-line
 * change here.
 */
export function getRecipeImagePath(recipe: Recipe): string {
  return `/images/recipes/${recipe.slug}.svg`;
}
