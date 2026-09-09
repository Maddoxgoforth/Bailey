import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import ImageSlot from "@/components/ui/ImageSlot";
import Highlight from "@/components/ui/Highlight";
import Reveal from "@/components/ui/Reveal";

const ROTATIONS = ["left", "right", "left"] as const;

const TOUCHPOINTS = [
  {
    title: "Weekly live session with Bailey",
    body: "Show up and talk to her about literally anything — your week, what she's up to, a recipe question if you've got one. No set topic.",
  },
  {
    title: "Direct message access",
    body: "Post in the community and get a real reply from Bailey, not a bot or a template.",
  },
  {
    title: "A community of people who just get it",
    body: "Hang out with other members, see what everyone's talking about, and share your own.",
  },
];

export default function Community() {
  return (
    <section className="py-16">
      <Container className="flex flex-col items-center gap-10">
        <Reveal>
          <SectionHeading
            eyebrow="Direct Access"
            title={
              <>
                Talk To <Highlight tone="purple">Bailey</Highlight>. Every
                Single Week.
              </>
            }
            subtitle="Not a course you buy and forget. A running conversation, about whatever you want."
          />
        </Reveal>

        <Reveal className="w-full" delayMs={100}>
          <ImageSlot
            label="Community / Chat Screenshot"
            spec="Screenshot of the Whop community feed or a chat exchange with Bailey replying to a member."
            aspectClassName="aspect-[16/10]"
          />
        </Reveal>

        <div className="flex w-full flex-col gap-5">
          {TOUCHPOINTS.map((point, i) => (
            <Reveal key={point.title} delayMs={140 + i * 80}>
              <Card
                className="text-left"
                rotate={ROTATIONS[i % ROTATIONS.length]}
              >
                <p className="font-display font-bold text-accent">
                  {point.title}
                </p>
                <p className="mt-1 text-sm text-muted">{point.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
