import Container from "@/components/ui/Container";
import Pill from "@/components/ui/Pill";
import CtaButton from "@/components/ui/CtaButton";
import VideoSlot from "@/components/ui/VideoSlot";
import Reveal from "@/components/ui/Reveal";

export default function Hero() {
  return (
    <section className="bg-hero-glow relative overflow-hidden pt-16 pb-16">
      <Container className="flex flex-col items-center gap-6 text-center">
        <Reveal>
          <p className="text-xl font-black tracking-[0.3em] text-accent-dim">
            BAILEY&apos;S RECIPE CLUB
          </p>
        </Reveal>

        <Reveal delayMs={80}>
          <Pill>100+ Recipes. Direct Access To Bailey.</Pill>
        </Reveal>

        <Reveal delayMs={140}>
          <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl">
            Cook Like You Actually Know What You&apos;re Doing —{" "}
            <span className="text-accent">Taught By Bailey</span>
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
          <p className="animate-float-soft text-3xl font-extrabold text-accent">
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
