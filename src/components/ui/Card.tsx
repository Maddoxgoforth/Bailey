import { ReactNode } from "react";

const ROTATIONS = {
  none: "",
  left: "-rotate-1",
  right: "rotate-1",
} as const;

export default function Card({
  children,
  className = "",
  rotate = "none",
}: {
  children: ReactNode;
  className?: string;
  rotate?: keyof typeof ROTATIONS;
}) {
  return (
    <div
      className={`rounded-2xl border-[3px] border-ink bg-background-elevated p-6 shadow-pop transition-transform duration-200 hover:-translate-y-1 ${ROTATIONS[rotate]} ${className}`}
    >
      {children}
    </div>
  );
}
