import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaButton from "@/components/ui/CtaButton";
import Reveal from "@/components/ui/Reveal";

const BULLET_TONES = ["bg-accent", "bg-accent-2", "bg-accent-3"] as const;
const BULLET_TEXT = ["text-white", "text-ink", "text-white"] as const;

const INCLUDES = [
  "100+ of Bailey's personal recipes — the exact ones Bailey actually cooks, written out step by step",
  "New recipes added regularly, so the collection keeps growing after you join",
  "Simple, no-jargon instructions anyone can follow, whether you've never cooked or you cook every night",
  "A private community feed to post what you made, ask questions, and swap notes with other members",
  "Weekly live access to chat with Bailey directly — bring a recipe question, a substitution, or just ask what to cook tonight",
];

export default function WhatsInside() {
  return (
    <section className="py-16">
      <Container className="flex flex-col items-center gap-10">
        <Reveal>
          <SectionHeading
            eyebrow="What You Get"
            title="Everything Inside The Club"
            subtitle="One payment. Recipes, community, and Bailey — all in one place."
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
            label="JOIN THE CLUB — $10"
            subtext="Everything above, unlocked today."
            tone="purple"
          />
        </Reveal>
      </Container>
    </section>
  );
}
