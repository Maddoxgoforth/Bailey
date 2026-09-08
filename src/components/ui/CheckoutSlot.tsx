/**
 * Stands in for the real Whop checkout widget until the $5 product exists
 * on Whop. Pass `embedUrl` (the Whop checkout embed URL) once it does, and
 * this renders it inline instead of the placeholder. Always keeps
 * id="checkout" so every buy-CTA's `href="#checkout"` anchor keeps working.
 */
export default function CheckoutSlot({
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
      <div
        id="checkout"
        className="w-full overflow-hidden rounded-2xl border border-border"
      >
        <iframe src={embedUrl} title={label} className="h-[600px] w-full" />
      </div>
    );
  }

  return (
    <div
      id="checkout"
      className="flex min-h-[220px] w-full scroll-mt-24 flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-border bg-background-elevated px-6 text-center"
    >
      <span aria-hidden className="text-3xl">
        🛒
      </span>
      <p className="text-xs font-extrabold uppercase tracking-widest text-accent">
        {label}
      </p>
      <p className="max-w-sm text-xs leading-relaxed text-muted">{spec}</p>
    </div>
  );
}
