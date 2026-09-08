import { ReactNode } from "react";

export default function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-border bg-background-elevated p-6 shadow-sm shadow-accent/5 ${className}`}
    >
      {children}
    </div>
  );
}
