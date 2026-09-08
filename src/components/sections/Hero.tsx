import Container from "@/components/ui/Container";
import Pill from "@/components/ui/Pill";
import CtaButton from "@/components/ui/CtaButton";
import VideoSlot from "@/components/ui/VideoSlot";
import Highlight from "@/components/ui/Highlight";
import Reveal from "@/components/ui/Reveal";

export default function Hero() {
  return (
    <section className="bg-hero-glow relative overflow-hidden pt-16 pb-16">
      <span
        aria-hidden
        className="animate-float-soft absolute top-10 left-4 text-3xl sm:left-10"
        style={{ "--float-rotate": "-12deg" } as React.CSSProperties}
      >
        🍰
      </span>
      <span
        aria-hidden
        className="animate-float-soft absolute top-28 right-4 text-3xl [animation-delay:0.6s] sm:right-10"
        style={{ "--float-rotate": "10deg" } as React.CSSProperties}
      >
        🥑
      </span>
      <span
        aria-hidden
        className="animate-spin-slow absolute right-8 bottom-10 text-2xl sm:right-16"
      >
        ✨
      </span>
      <span
        aria-hidden
        className="animate-float-soft absolute bottom-24 left-6 text-3xl [animation-delay:1.2s] sm:left-12"
        style={{ "--float-rotate": "-8deg" } as React.CSSProperties}
      >
        🍳
      </span>

      <Container className="relative flex flex-col items-center gap-6 text-center">
        <Reveal>
          <p className="font-display text-xl font-bold tracking-[0.2em] text-accent-dim">
            BAILEY&apos;S RECIPE CLUB
          </p>
        </Reveal>

        <Reveal delayMs={80}>
          <Pill tone="yellow">🔥 100+ Recipes. Direct Access To Bailey.</Pill>
        </Reveal>

        <Reveal delayMs={140}>
          <h1 className="font-display text-3xl leading-tight font-bold sm:text-4xl">
            Cook Like You Actually Know What You&apos;re Doing —{" "}
            <Highlight tone="pink">Taught By Bailey</Highlight>
          </h1>
        </Reveal>

        <Reveal delayMs={200}>
          <p className="max-w-md text-lg text-muted">
            Every recipe Bailey personally cooks and swears by, plus a seat
            in the community where you can chat with Bailey one-on-one
            every single week. All for $5.
          </p>
        </Reveal>

        <Reveal delayMs={260} className="w-full">
          <VideoSlot
            label="VSL — Bailey's Recipe Club"
            spec="60–120 sec video: who Bailey is, what's inside (100+ recipes + weekly 1:1 access), and why it's $5. Landscape 16:9. Not yet recorded."
          />
        </Reveal>

        <Reveal delayMs={320} className="flex flex-col items-center gap-2">
          <p className="font-display animate-pop-bounce text-4xl font-bold text-accent">
            $5
          </p>
          <p className="text-sm text-muted">One payment. Instant access.</p>
        </Reveal>

        <Reveal delayMs={380} className="w-full">
          <CtaButton
            label="GET INSTANT ACCESS — $5"
            subtext="100+ recipes + weekly access to Bailey"
          />
        </Reveal>
      </Container>
    </section>
  );
}
