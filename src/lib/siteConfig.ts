/**
 * Once this recipe section is served on its own subdomain (recipes.yoursite.com),
 * links back to the main marketing site (like the checkout CTA) need a real,
 * cross-origin URL — a same-app rewrite can't fake that. Set
 * NEXT_PUBLIC_MAIN_SITE_URL (e.g. "https://baileysdomain.com") as a build
 * environment variable once that domain exists. Until then this is empty and
 * every link below just stays a normal relative path.
 */
export const MAIN_SITE_URL = (
  process.env.NEXT_PUBLIC_MAIN_SITE_URL ?? ""
).replace(/\/$/, "");

export function withMainSite(path: string): string {
  return MAIN_SITE_URL ? `${MAIN_SITE_URL}${path}` : path;
}
