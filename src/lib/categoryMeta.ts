export const CATEGORY_EMOJI: Record<string, string> = {
  "Breakfast & Brunch": "🍳",
  "Soups & Stews": "🍲",
  "Salads & Sides": "🥗",
  "Poultry Mains": "🍗",
  "Beef & Pork Mains": "🥩",
  "Seafood Mains": "🦐",
  "Pasta, Rice & Grains": "🍝",
  "Vegetarian & Vegan Mains": "🥦",
  "Sandwiches, Wraps & Handhelds": "🥪",
  "Baking, Desserts & Sweets": "🍰",
};

const TONES = ["pink", "yellow", "purple"] as const;
export type Tone = (typeof TONES)[number];

export function toneForCategory(category: string, categories: string[]): Tone {
  const index = categories.indexOf(category);
  return TONES[index % TONES.length];
}
