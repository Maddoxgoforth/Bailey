import WhopCheckout from "./WhopCheckout";

/**
 * Renders the real Whop checkout once a `planId` is set — that's the only
 * case wired up on the live site right now. `embedUrl` (a plain iframe) and
 * the placeholder box remain as fallbacks for other checkout setups. Always
 * keeps id="checkout" so every buy-CTA's `href="#checkout"` anchor works.
 */
export default function CheckoutSlot({
  label = "Checkout",
  spec = "Checkout widget.",
  embedUrl,
  planId,
}: {
  label?: string;
  spec?: string;
  embedUrl?: string;
  planId?: string;
}) {
  if (planId) {
    return (
      <div
        id="checkout"
        className="w-full scroll-mt-24 rounded-2xl border-[3px] border-ink bg-background-elevated p-4 shadow-pop"
      >
        <WhopCheckout planId={planId} />
      </div>
    );
  }

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
