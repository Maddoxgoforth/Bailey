import { ReactNode } from "react";

const MAX_WIDTH = {
  narrow: "max-w-xl",
  wide: "max-w-6xl",
} as const;

export default function Container({
  children,
  className = "",
  size = "narrow",
}: {
  children: ReactNode;
  className?: string;
  size?: keyof typeof MAX_WIDTH;
}) {
  return (
    <div className={`mx-auto w-full ${MAX_WIDTH[size]} px-6 ${className}`}>
      {children}
    </div>
  );
}
