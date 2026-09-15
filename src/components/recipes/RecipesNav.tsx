import Link from "next/link";
import Container from "@/components/ui/Container";

export default function RecipesNav() {
  return (
    <header className="border-b-[3px] border-ink bg-background-elevated">
      <Container size="wide" className="flex items-center justify-between py-4">
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-wide text-accent-dim"
        >
          BAILEY
        </Link>
        <nav className="flex items-center gap-4 text-sm font-bold">
          <Link href="/recipes" className="hover:text-accent">
            All Recipes
          </Link>
          <Link
            href="/#checkout"
            className="rounded-full border-[3px] border-ink bg-accent px-4 py-1.5 text-xs font-extrabold text-white shadow-pop-sm transition-transform hover:-translate-y-0.5"
          >
            GET ACCESS — $5
          </Link>
        </nav>
      </Container>
    </header>
  );
}
