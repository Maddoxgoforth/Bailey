import { NextRequest, NextResponse } from "next/server";

const RECIPES_SUBDOMAIN_PREFIX = "recipes.";

/**
 * Once a `recipes.<yourdomain>` subdomain is pointed at this same
 * deployment (in your host's dashboard, e.g. Vercel's Domains settings),
 * this makes that subdomain transparently serve the /recipes section at
 * its own root — recipes.yoursite.com/ shows the recipe grid,
 * recipes.yoursite.com/some-recipe shows that recipe — with no /recipes
 * prefix visible anywhere. Until that subdomain exists, this never
 * matches and the app behaves exactly as before.
 */
export function proxy(request: NextRequest) {
  const hostname = request.headers.get("host") ?? "";
  const { pathname } = request.nextUrl;

  if (!hostname.startsWith(RECIPES_SUBDOMAIN_PREFIX)) {
    return NextResponse.next();
  }

  // Already-prefixed paths pass through untouched (guards against
  // double-prefixing / rewrite loops).
  if (pathname === "/recipes" || pathname.startsWith("/recipes/")) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? "/recipes" : `/recipes${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    // Every path except Next's internals and common static asset extensions.
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico|css|js)$).*)",
  ],
};
