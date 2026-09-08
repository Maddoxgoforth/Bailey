const TONES = {
  pink: "bg-accent hover:bg-accent-dim",
  yellow: "bg-accent-2 hover:bg-accent-2-dim",
  purple: "bg-accent-3 hover:bg-accent-3-dim",
} as const;

const TEXT_TONES = {
  pink: "text-white",
  yellow: "text-ink",
  purple: "text-white",
} as const;

export default function CtaButton({
  label = "GET INSTANT ACCESS",
  subtext = "100+ recipes + weekly access to Bailey",
  href = "#checkout",
  tone = "pink",
}: {
  label?: string;
  subtext?: string;
  href?: string;
  tone?: keyof typeof TONES;
}) {
  return (
    <div className="flex flex-col items-center gap-4">
      <a
        href={href}
        className={`group relative flex w-full -rotate-1 items-center justify-center gap-3 rounded-2xl border-[3px] border-ink px-8 py-5 text-center shadow-pop transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:rotate-0 hover:shadow-pop-lg active:translate-x-1 active:translate-y-1 active:shadow-none ${TONES[tone]}`}
      >
        <span
          aria-hidden
          className="absolute -top-3 -right-2 rotate-12 text-xl transition-transform duration-150 group-hover:rotate-[24deg] group-hover:scale-110"
        >
          ✨
        </span>
        <span className={`flex flex-col items-center ${TEXT_TONES[tone]}`}>
          <span className="font-display text-lg font-bold tracking-wide uppercase">
            {label}
          </span>
          <span className="text-sm font-medium opacity-85">{subtext}</span>
        </span>
      </a>
      <p className="text-center text-sm font-bold text-accent-3">
        Just $5. Cancel the takeout order instead. 🍟
      </p>
    </div>
  );
}
