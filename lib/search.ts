import { brands } from "@/lib/data/brands";
import { restaurants } from "@/lib/data/restaurants";
import { offers } from "@/lib/data/offers";
import type { Locale } from "@/lib/i18n";
import {
  tr,
  brandDescriptions,
  restaurantDescriptions,
  localizeDescription,
  offerContent,
} from "@/lib/i18n-content";

export interface SearchResult {
  type: "Boutique" | "Restaurant" | "Offre";
  title: string;
  subtitle: string;
  href: string;
  art: string;
  imageSrc?: string;
}

/**
 * Lightweight, dependency-free relevance search across all content types.
 * Matches against both the canonical French fields and the localized values so
 * a query works whatever the active language. Display fields are localized.
 */
export function searchAll(query: string, locale: Locale = "fr"): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const match = (...fields: (string | undefined)[]) =>
    fields.some((f) => f?.toLowerCase().includes(q));

  const results: SearchResult[] = [];

  for (const b of brands) {
    const localized = localizeDescription(brandDescriptions, b.name, b.description, locale);
    if (match(b.name, b.category, tr(b.category, locale), b.description, localized, ...(b.tags ?? [])))
      results.push({
        type: "Boutique",
        title: b.name,
        subtitle: `${tr(b.category, locale)} · ${tr(b.floor, locale)}`,
        href: `/shops/${b.slug}`,
        art: b.heroArt,
        imageSrc: b.imageSrc,
      });
  }
  for (const r of restaurants) {
    const localized = localizeDescription(restaurantDescriptions, r.name, r.description, locale);
    if (match(r.name, r.cuisine, tr(r.cuisine, locale), r.type, tr(r.type, locale), r.description, localized, ...(r.tags ?? [])))
      results.push({
        type: "Restaurant",
        title: r.name,
        subtitle: `${tr(r.cuisine, locale)} · ${tr(r.floor, locale)}`,
        href: `/dining/${r.slug}`,
        art: r.heroArt,
        imageSrc: r.imageSrc,
      });
  }
  for (const o of offers) {
    const copy = offerContent[o.id]?.[locale];
    const title = copy?.title ?? o.title;
    const description = copy?.description ?? o.description;
    if (match(o.title, title, o.brand, o.category, tr(o.category, locale), o.description, description))
      results.push({
        type: "Offre",
        title,
        subtitle: `${tr(o.brand, locale)} · ${tr(o.category, locale)}`,
        href: o.brandSlug ? `/shops/${o.brandSlug}` : "/offers",
        art: o.heroArt,
      });
  }
  return results;
}
