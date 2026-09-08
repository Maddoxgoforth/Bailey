import { ReactNode } from "react";

const TONES = {
  pink: "bg-accent/90 text-white",
  yellow: "bg-accent-2 text-ink",
  purple: "bg-accent-3 text-white",
} as const;

/**
 * Wraps a word/phrase in a rotated highlighter-style block, like a marker
 * stroke laid down behind the text — used in headlines instead of plain
 * accent-colored text.
 */
export default function Highlight({
  children,
  tone = "pink",
}: {
  children: ReactNode;
  tone?: keyof typeof TONES;
}) {
  return (
    <span
      className={`inline-block -rotate-1 rounded-md border-[3px] border-ink px-2 py-0.5 shadow-pop-sm ${TONES[tone]}`}
    >
      {children}
    </span>
  );
}
