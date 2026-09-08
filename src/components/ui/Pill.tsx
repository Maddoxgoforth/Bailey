import { ReactNode } from "react";

const TONES = {
  pink: "bg-accent text-white",
  yellow: "bg-accent-2 text-ink",
  purple: "bg-accent-3 text-white",
} as const;

export default function Pill({
  children,
  tone = "yellow",
}: {
  children: ReactNode;
  tone?: keyof typeof TONES;
}) {
  return (
    <span
      className={`inline-flex rotate-[-2deg] items-center gap-2 rounded-full border-[3px] border-ink px-4 py-1.5 text-sm font-bold shadow-pop-sm ${TONES[tone]}`}
    >
      {children}
    </span>
  );
}
