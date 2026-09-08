/**
 * Stands in for the real VSL until one exists. Pass `embedUrl` (a Wistia,
 * YouTube, or Loom embed URL) once the real video is hosted, and this
 * renders it instead of the placeholder — no other call sites need to change.
 */
export default function VideoSlot({
  label,
  spec,
  embedUrl,
}: {
  label: string;
  spec: string;
  embedUrl?: string;
}) {
  if (embedUrl) {
    return (
      <div className="aspect-video w-full overflow-hidden rounded-2xl border border-border">
        <iframe
          src={embedUrl}
          title={label}
          className="h-full w-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className="group relative flex aspect-video w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border-2 border-dashed border-border bg-background-elevated px-6 text-center transition-colors hover:border-accent/60">
      <span
        aria-hidden
        className="animate-pulse-ring flex h-14 w-14 items-center justify-center rounded-full bg-accent text-xl text-white"
      >
        ▶
      </span>
      <p className="text-xs font-extrabold uppercase tracking-widest text-accent">
        {label}
      </p>
      <p className="max-w-sm text-xs leading-relaxed text-muted">{spec}</p>
    </div>
  );
}
