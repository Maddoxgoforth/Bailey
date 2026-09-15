"use client";

import Script from "next/script";

type WhopCheckoutInstance = {
  mount: (selector: string) => void;
};

type WhopCheckoutBuilder = {
  create: (elementType: string) => WhopCheckoutInstance;
};

type WhopElementsApi = {
  checkout: {
    create: (options: { plan: string }) => WhopCheckoutBuilder;
  };
};

declare global {
  interface Window {
    WhopElements?: () => WhopElementsApi;
  }
}

/**
 * Mounts the real Whop checkout element for `planId` into #whop-checkout.
 * Loads Whop's elements.js on the client and (re)mounts on every load —
 * matches the embed snippet Whop hands out for a given plan.
 */
export default function WhopCheckout({ planId }: { planId: string }) {
  const mount = () => {
    if (!window.WhopElements) return;
    window.WhopElements()
      .checkout.create({ plan: planId })
      .create("checkout")
      .mount("#whop-checkout");
  };

  return (
    <>
      <div id="whop-checkout" />
      <Script
        src="https://js.whop.cloud/elements/amber/elements.js"
        data-whop-elements=""
        strategy="afterInteractive"
        onReady={mount}
      />
    </>
  );
}
