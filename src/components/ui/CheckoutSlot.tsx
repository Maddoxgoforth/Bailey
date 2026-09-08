/**
 * Stands in for the real Whop checkout widget until the $10 product exists
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
        className="w-full overflow-hidden rounded-2xl border-[3px] border-ink shadow-pop"
      >
        <iframe src={embedUrl} title={label} className="h-[600px] w-full" />
      </div>
    );
  }

  return (
    <div
      id="checkout"
      className="relative flex min-h-[220px] w-full scroll-mt-24 flex-col items-center justify-center gap-3 rounded-2xl border-[3px] border-ink bg-background-elevated px-6 text-center shadow-pop"
    >
      <span
        aria-hidden
        className="absolute top-4 right-4 rotate-6 rounded-full border-[3px] border-ink bg-accent-3 px-3 py-1 text-xs font-bold text-white shadow-pop-sm"
      >
        SECURE 🔒
      </span>
      <span className="flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-ink bg-accent-2 text-2xl shadow-pop-sm">
        🛒
      </span>
      <p className="font-display text-sm font-bold text-accent-3">{label}</p>
      <p className="max-w-sm text-xs leading-relaxed text-muted">{spec}</p>
    </div>
  );
}
