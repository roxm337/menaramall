import type { Offer } from "@/lib/types";

/**
 * Sample offers. Premium placeholder copy — validity dates and terms must be
 * confirmed and maintained by the Menara Mall team via the CMS.
 */
export const offers: Offer[] = [
  {
    id: "o-zara-summer",
    title: "Summer Edit: Up to 40% Off",
    slug: "zara-summer-edit",
    brand: "Zara",
    brandSlug: "zara",
    description:
      "Refresh the season's wardrobe with up to 40% off selected summer styles across women, men and kids.",
    validFrom: "2026-06-15",
    validUntil: "2026-07-31",
    terms:
      "Discount applies to marked items only while stocks last. Cannot be combined with other promotions. [VERIFY] with brand.",
    category: "Fashion",
    featured: true,
    heroArt: "Summer fashion flat-lay, linen and straw tones, editorial styling",
  },
  {
    id: "o-sephora-gift",
    title: "Beauty Gift With Purchase",
    slug: "sephora-gift-with-purchase",
    brand: "Sephora",
    brandSlug: "sephora",
    description:
      "Receive a curated discovery set with every purchase over 600 MAD on skincare and fragrance.",
    validFrom: "2026-06-01",
    validUntil: "2026-08-15",
    terms:
      "One gift per customer while supplies last. Minimum spend applies before tax. [VERIFY] with brand.",
    category: "Beauty",
    featured: true,
    heroArt: "Luxe beauty gift set, glass bottles and gold accents, soft light",
  },
  {
    id: "o-carrefour-family",
    title: "Family Grocery Savings",
    slug: "carrefour-family-savings",
    brand: "Carrefour",
    brandSlug: "carrefour",
    description:
      "Weekly savings on fresh produce, pantry staples and household essentials for the whole family.",
    validFrom: "2026-06-10",
    validUntil: "2026-12-31",
    terms:
      "Prices as marked in store. Selection rotates weekly. [VERIFY] with brand.",
    category: "Family",
    featured: true,
    heroArt: "Fresh-produce abundance, baskets of fruit and vegetables, bright",
  },
  {
    id: "o-electroplanet-tech",
    title: "Smart Home Bundle Deals",
    slug: "electroplanet-smart-home",
    brand: "Electroplanet",
    brandSlug: "electroplanet",
    description:
      "Save when you bundle smart speakers, displays and accessories — plus extended warranty options.",
    validFrom: "2026-07-01",
    validUntil: "2026-08-31",
    terms:
      "Bundle pricing applies to selected items purchased together. [VERIFY] with brand.",
    category: "Electronics",
    heroArt: "Sleek smart-home devices arranged on minimal surface, cool light",
  },
  {
    id: "o-dining-terrace",
    title: "Terrace Dining: Dessert on Us",
    slug: "terrace-dining-dessert",
    brand: "Terrace Restaurants",
    description:
      "Enjoy a complimentary signature dessert with every main course at participating terrace restaurants.",
    validFrom: "2026-06-20",
    validUntil: "2026-09-15",
    terms:
      "One dessert per main course, dine-in only, at participating venues. [VERIFY] with venues.",
    category: "Dining",
    featured: true,
    heroArt: "Dessert plated elegantly on a terrace table at golden hour",
  },
  {
    id: "o-home-refresh",
    title: "Home Refresh: 3 for 2",
    slug: "home-refresh-3-for-2",
    brand: "Dar Déco",
    brandSlug: "dar-deco",
    description:
      "Buy three, pay for two across cushions, textiles and tableware to refresh your space.",
    validFrom: "2026-07-05",
    validUntil: "2026-08-20",
    terms:
      "Lowest-priced item free. Applies to selected homeware only. [VERIFY] with brand.",
    category: "Home",
    heroArt: "Styled home textiles and ceramics in warm Moroccan tones",
  },
];

export const offerCategories = [
  "Fashion",
  "Beauty",
  "Dining",
  "Electronics",
  "Family",
  "Home",
] as const;

export function getOffer(slug: string): Offer | undefined {
  return offers.find((o) => o.slug === slug);
}
