import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import CheckoutSlot from "@/components/ui/CheckoutSlot";
import Highlight from "@/components/ui/Highlight";
import Reveal from "@/components/ui/Reveal";

const CHECK_TONES = ["bg-accent", "bg-accent-2", "bg-accent-3"] as const;
const CHECK_TEXT = ["text-white", "text-ink", "text-white"] as const;

const RECAP = [
  "Weekly live access to chat with Bailey, one-on-one, about anything",
  "100+ of Bailey's personal recipes",
  "A private community feed with other members",
  "Real replies from Bailey, not a bot or a template",
];

export default function Pricing() {
  return (
    <section className="py-16">
      <Container className="flex flex-col items-center gap-8">
        <Reveal>
          <SectionHeading
            eyebrow="Get Started"
            title={
              <>
                Everything Above, For{" "}
                <Highlight tone="pink">$5/mo</Highlight>
              </>
            }
            subtitle="Less than a coffee. Way more useful than one."
          />
        </Reveal>

        <Reveal className="w-full" delayMs={100}>
          <Card className="w-full text-left">
            <ul className="flex flex-col gap-3">
              {RECAP.map((item, i) => (
                <li key={item} className="flex items-center gap-3">
                  <span
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-ink text-[11px] font-bold ${CHECK_TONES[i % CHECK_TONES.length]} ${CHECK_TEXT[i % CHECK_TEXT.length]}`}
                  >
                    ✓
                  </span>
                  <span className="text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>

        <Reveal
          delayMs={180}
          className="animate-pop-bounce flex flex-col items-center gap-1"
        >
          <p className="font-display text-4xl font-bold text-accent">
            $5<span className="text-2xl text-muted">/mo</span>
          </p>
          <p className="text-sm text-muted">Billed monthly. Cancel anytime.</p>
        </Reveal>

        <Reveal className="w-full" delayMs={240}>
          <CheckoutSlot planId="plan_mInFwVvJc1Goy" />
        </Reveal>
      </Container>
    </section>
  );
}
