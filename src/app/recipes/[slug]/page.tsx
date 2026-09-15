import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import CtaButton from "@/components/ui/CtaButton";
import Footer from "@/components/sections/Footer";
import RecipesNav from "@/components/recipes/RecipesNav";
import RecipeCard from "@/components/recipes/RecipeCard";
import { CATEGORY_EMOJI } from "@/lib/categoryMeta";
import {
  getAllSlugs,
  getCategories,
  getRecipeBySlug,
  getRecipeImagePath,
  getRelatedRecipes,
} from "@/lib/recipes";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);
  if (!recipe) return {};
  return {
    title: `${recipe.title} — Bailey's Recipe Box`,
    description: recipe.blurb,
  };
}

export default async function RecipeDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);
  if (!recipe) notFound();

  const categories = getCategories();
  const related = getRelatedRecipes(recipe, 3);

  return (
    <>
      <RecipesNav />
      <main>
        <Container size="wide" className="flex flex-col gap-8 py-10">
          <Link
            href="/recipes"
            className="inline-flex w-fit items-center gap-1 text-sm font-bold text-accent-3 hover:underline"
          >
            ← All Recipes
          </Link>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_1.4fr]">
            <div className="flex flex-col gap-5">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border-[3px] border-ink shadow-pop">
                {/* eslint-disable-next-line @next/next/no-img-element -- static generated SVG, not a photo Next needs to optimize */}
                <img
                  src={getRecipeImagePath(recipe)}
                  alt={recipe.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <span className="inline-flex w-fit items-center gap-2 rounded-full border-[3px] border-ink bg-background-elevated px-3 py-1 text-xs font-extrabold tracking-wide text-accent-3 uppercase">
                {CATEGORY_EMOJI[recipe.category] ?? "🍽️"} {recipe.category}
              </span>

              <h1 className="font-display text-3xl leading-tight font-bold sm:text-4xl">
                {recipe.title}
              </h1>

              <p className="text-muted">{recipe.blurb}</p>

              <div className="grid grid-cols-3 gap-3">
                <Card className="items-center py-3 text-center">
                  <p className="text-[11px] font-extrabold tracking-wide text-accent uppercase">
                    Serves
                  </p>
                  <p className="mt-1 text-sm font-bold">{recipe.servings}</p>
                </Card>
                <Card className="items-center py-3 text-center">
                  <p className="text-[11px] font-extrabold tracking-wide text-accent uppercase">
                    Prep
                  </p>
                  <p className="mt-1 text-sm font-bold">{recipe.prepTime}</p>
                </Card>
                <Card className="items-center py-3 text-center">
                  <p className="text-[11px] font-extrabold tracking-wide text-accent uppercase">
                    Cook
                  </p>
                  <p className="mt-1 text-sm font-bold">{recipe.cookTime}</p>
                </Card>
              </div>

              <Card rotate="left">
                <p className="mb-3 font-display text-sm font-bold text-accent-3 uppercase">
                  Ingredients
                </p>
                <ul className="flex flex-col gap-2">
                  {recipe.ingredients.map((ingredient, i) => (
                    <li key={i} className="flex gap-2 text-sm text-foreground">
                      <span
                        aria-hidden
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      />
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            <div className="flex flex-col gap-5">
              <p className="font-display text-sm font-bold text-accent-3 uppercase">
                Instructions
              </p>
              <ol className="flex flex-col gap-4">
                {recipe.steps.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-[3px] border-ink bg-accent-2 text-xs font-extrabold text-ink">
                      {i + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-foreground">{step}</p>
                  </li>
                ))}
              </ol>

              {recipe.tip ? (
                <Card className="bg-background" rotate="right">
                  <p className="text-sm">
                    <span className="font-display font-bold text-accent">
                      Chef&apos;s Tip —{" "}
                    </span>
                    <span className="text-muted">{recipe.tip}</span>
                  </p>
                </Card>
              ) : null}

              <div className="pt-2">
                <CtaButton
                  label="CHAT WITH BAILEY ABOUT THIS — $5/mo"
                  subtext="Weekly access to Bailey + 100+ recipes"
                  href="/#checkout"
                />
              </div>
            </div>
          </div>

          {related.length > 0 ? (
            <div className="mt-6 flex flex-col gap-5">
              <p className="font-display text-center text-sm font-bold text-accent-3 uppercase">
                More {recipe.category}
              </p>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                {related.map((r) => (
                  <RecipeCard key={r.slug} recipe={r} categories={categories} />
                ))}
              </div>
            </div>
          ) : null}
        </Container>
      </main>
      <Footer />
    </>
  );
}
