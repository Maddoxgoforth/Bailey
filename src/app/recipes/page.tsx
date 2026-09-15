import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Pill from "@/components/ui/Pill";
import Highlight from "@/components/ui/Highlight";
import Footer from "@/components/sections/Footer";
import RecipesNav from "@/components/recipes/RecipesNav";
import RecipeBrowser from "@/components/recipes/RecipeBrowser";
import { getAllRecipes, getCategories } from "@/lib/recipes";

export const metadata: Metadata = {
  title: "100 Recipes — Bailey's Recipe Box",
  description:
    "Browse all 100 of Bailey's personal recipes — search by name, ingredient, or category, then get the full step-by-step for any of them.",
};

export default function RecipesIndexPage() {
  const recipes = getAllRecipes();
  const categories = getCategories();

  return (
    <>
      <RecipesNav />
      <main className="bg-hero-glow">
        <Container size="wide" className="flex flex-col items-center gap-4 pt-14 pb-10 text-center">
          <Pill tone="yellow">🍽️ 100 Recipes, Free To Browse</Pill>
          <h1 className="font-display max-w-2xl text-3xl leading-tight font-bold sm:text-4xl">
            Bailey&apos;s <Highlight tone="pink">Recipe Box</Highlight>
          </h1>
          <p className="max-w-lg text-lg text-muted">
            Every recipe Bailey actually cooks, written out step by step.
            Search for something specific, or just scroll and see what looks good.
          </p>
        </Container>

        <Container size="wide" className="pb-20">
          <RecipeBrowser recipes={recipes} categories={categories} />
        </Container>
      </main>
      <Footer />
    </>
  );
}
