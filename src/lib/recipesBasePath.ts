import { headers } from "next/headers";

const RECIPES_SUBDOMAIN_PREFIX = "recipes.";

/**
 * The recipe pages live at /recipes and /recipes/[slug] in this app. When
 * served through the main domain that's also the public URL. But when
 * middleware.ts rewrites a `recipes.*` subdomain's "/" straight to
 * "/recipes", the section's own internal links need to drop that prefix so
 * they stay relative to the subdomain's actual root instead of pointing at
 * a doubled-up /recipes/recipes path.
 */
export async function getRecipesBasePath(): Promise<string> {
  const headersList = await headers();
  const host = headersList.get("host") ?? "";
  return host.startsWith(RECIPES_SUBDOMAIN_PREFIX) ? "" : "/recipes";
}
