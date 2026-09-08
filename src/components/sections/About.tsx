import Container from "@/components/ui/Container";
import ImageSlot from "@/components/ui/ImageSlot";
import CtaButton from "@/components/ui/CtaButton";
import Highlight from "@/components/ui/Highlight";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <section className="py-16">
      <Container className="flex flex-col items-center gap-8 text-center">
        <Reveal className="animate-wiggle">
          <div className="h-36 w-36">
            <ImageSlot
              label="Bailey Headshot"
              spec="Square headshot of Bailey, cropped tight, no background clutter."
              aspectClassName="aspect-square"
              shape="circle"
            />
          </div>
        </Reveal>

        <Reveal delayMs={80} className="flex flex-col items-center gap-3">
          <p className="text-sm font-extrabold tracking-widest text-accent-3 uppercase">
            Why Listen To Bailey
          </p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            MEET <Highlight tone="yellow">BAILEY</Highlight>
          </h2>
          <p className="max-w-md text-muted">
            Bailey has spent years building a recipe box that&apos;s simple
            enough for a weeknight and good enough to actually impress
            people. The Recipe Club is that box, plus a direct line to
            Bailey every week to help you actually use it.
          </p>
        </Reveal>

        <Reveal delayMs={160} className="w-full">
          <CtaButton
            label="LEARN DIRECTLY FROM BAILEY — $5"
            subtext="Get the recipes, and the person behind them."
          />
        </Reveal>
      </Container>
    </section>
  );
}
