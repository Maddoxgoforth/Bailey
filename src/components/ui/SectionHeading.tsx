import { ReactNode } from "react";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      {eyebrow ? (
        <p className="text-sm font-extrabold tracking-widest text-accent-3 uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl leading-tight font-bold sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-md text-base text-muted">{subtitle}</p>
      ) : null}
    </div>
  );
}
