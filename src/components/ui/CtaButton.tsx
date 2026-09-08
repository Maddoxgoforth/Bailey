export default function CtaButton({
  label = "GET INSTANT ACCESS",
  subtext = "100+ recipes + weekly access to Bailey",
  href = "#checkout",
}: {
  label?: string;
  subtext?: string;
  href?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-4">
      <a
        href={href}
        className="flex w-full items-center justify-center gap-3 rounded-2xl bg-accent px-8 py-5 text-center shadow-lg shadow-accent/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-dim hover:shadow-xl hover:shadow-accent/30 active:translate-y-0"
      >
        <span className="flex flex-col items-center">
          <span className="text-lg font-extrabold tracking-wide text-white">
            {label}
          </span>
          <span className="text-sm font-medium text-white/85">{subtext}</span>
        </span>
        <span aria-hidden className="text-xl text-white">
          ↘
        </span>
      </a>
      <p className="text-center text-sm font-medium italic text-accent">
        Just $5. Cancel the takeout order instead.
      </p>
    </div>
  );
}
