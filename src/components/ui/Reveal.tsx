"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

/**
 * Pops children into place (fade + rise + slight overshoot scale) the
 * first time they scroll into view. Purely presentational — no layout
 * impact once visible, and it settles to its final state even if
 * IntersectionObserver never fires.
 */
export default function Reveal({
  children,
  className = "",
  delayMs = 0,
}: {
  children: ReactNode;
  className?: string;
  delayMs?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delayMs}ms`,
        transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      }}
      className={`transition-all duration-700 ${
        visible
          ? "translate-y-0 scale-100 opacity-100"
          : "translate-y-6 scale-95 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
