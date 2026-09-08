import Image from "next/image";

/**
 * Stands in for a real photo until one exists. Pass `src` (a path under
 * public/images/) once the real asset is uploaded, and this renders it
 * instead of the placeholder — no other call sites need to change.
 */
export default function ImageSlot({
  label,
  spec,
  src,
  alt,
  aspectClassName = "aspect-video",
  shape = "rect",
}: {
  label: string;
  spec: string;
  src?: string;
  alt?: string;
  aspectClassName?: string;
  shape?: "rect" | "circle";
}) {
  const roundedClassName = shape === "circle" ? "rounded-full" : "rounded-2xl";

  if (src) {
    return (
      <div
        className={`relative w-full overflow-hidden ${aspectClassName} ${roundedClassName} border-[3px] border-ink shadow-pop`}
      >
        <Image src={src} alt={alt ?? label} fill className="object-cover" />
      </div>
    );
  }

  if (shape === "circle") {
    return (
      <div
        title={spec}
        className={`flex w-full flex-col items-center justify-center gap-1 ${aspectClassName} ${roundedClassName} border-[3px] border-ink bg-background-elevated px-2 text-center shadow-pop`}
      >
        <span aria-hidden className="text-xl">
          📸
        </span>
        <p className="text-[9px] font-extrabold tracking-widest text-accent-3 uppercase">
          {label}
        </p>
      </div>
    );
  }

  return (
    <div
      className={`flex w-full flex-col items-center justify-center gap-2 ${aspectClassName} ${roundedClassName} border-[3px] border-ink bg-background-elevated px-4 text-center shadow-pop`}
    >
      <span aria-hidden className="text-2xl">
        📸
      </span>
      <p className="text-[11px] font-extrabold tracking-widest text-accent-3 uppercase">
        {label}
      </p>
      <p className="max-w-[24ch] text-[11px] leading-snug text-muted">
        {spec}
      </p>
    </div>
  );
}
