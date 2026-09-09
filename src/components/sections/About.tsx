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
            Why People Join
          </p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            MEET <Highlight tone="yellow">BAILEY</Highlight>
          </h2>
          <p className="max-w-md text-muted">
            You already know Bailey from her content. This is how you
            actually talk to her — a real weekly conversation, not just a
            comment she&apos;ll never see. She&apos;ll also hand over the
            100+ recipes people ask about the most.
          </p>
        </Reveal>

        <Reveal delayMs={160} className="w-full">
          <CtaButton
            label="GET ACCESS TO BAILEY — $5/mo"
            subtext="Weekly chat, plus the recipes everyone asks for."
          />
        </Reveal>
      </Container>
    </section>
  );
}
