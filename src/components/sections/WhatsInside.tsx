import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaButton from "@/components/ui/CtaButton";
import Reveal from "@/components/ui/Reveal";

const BULLET_TONES = ["bg-accent", "bg-accent-2", "bg-accent-3"] as const;
const BULLET_TEXT = ["text-white", "text-ink", "text-white"] as const;

const INCLUDES = [
  "Weekly live access to chat with Bailey directly — about anything, no set topic. Ask a recipe question if you've got one",
  "100+ of Bailey's personal recipes — the exact ones she actually cooks, written out step by step",
  "A private community feed to post, hang out, and swap notes with other members",
  "Real replies from Bailey, not a bot or a template",
  "New recipes and content added regularly, so it keeps growing after you join",
];

export default function WhatsInside() {
  return (
    <section className="py-16">
      <Container className="flex flex-col items-center gap-10">
        <Reveal>
          <SectionHeading
            eyebrow="What You Get"
            title="Everything You Get"
            subtitle="Weekly access to Bailey, plus her recipes — all in one place."
          />
        </Reveal>

        <Reveal className="w-full" delayMs={100}>
          <Card className="w-full text-left">
            <ul className="flex flex-col gap-4">
              {INCLUDES.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-ink text-xs font-bold ${BULLET_TONES[i % BULLET_TONES.length]} ${BULLET_TEXT[i % BULLET_TEXT.length]}`}
                  >
                    {i + 1}
                  </span>
                  <span className="text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>

        <Reveal className="w-full" delayMs={180}>
          <CtaButton
            label="JOIN NOW — $5/mo"
            subtext="Everything above, unlocked today."
            tone="purple"
          />
        </Reveal>
      </Container>
    </section>
  );
}
