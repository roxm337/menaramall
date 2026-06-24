import { brands } from "@/lib/data/brands";
import { restaurants } from "@/lib/data/restaurants";
import { offers } from "@/lib/data/offers";

export interface SearchResult {
  type: "Boutique" | "Restaurant" | "Offre";
  title: string;
  subtitle: string;
  href: string;
  art: string;
  imageSrc?: string;
}

/** Lightweight, dependency-free relevance search across all content types. */
export function searchAll(query: string): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const match = (...fields: (string | undefined)[]) =>
    fields.some((f) => f?.toLowerCase().includes(q));

  const results: SearchResult[] = [];

  for (const b of brands) {
    if (match(b.name, b.category, b.description, ...(b.tags ?? [])))
      results.push({
        type: "Boutique",
        title: b.name,
        subtitle: `${b.category} · ${b.floor}`,
        href: `/shops/${b.slug}`,
        art: b.heroArt,
        imageSrc: b.imageSrc,
      });
  }
  for (const r of restaurants) {
    if (match(r.name, r.cuisine, r.type, r.description, ...(r.tags ?? [])))
      results.push({
        type: "Restaurant",
        title: r.name,
        subtitle: `${r.cuisine} · ${r.floor}`,
        href: `/dining/${r.slug}`,
        art: r.heroArt,
        imageSrc: r.imageSrc,
      });
  }
  for (const o of offers) {
    if (match(o.title, o.brand, o.category, o.description))
      results.push({
        type: "Offre",
        title: o.title,
        subtitle: `${o.brand} · ${o.category}`,
        href: o.brandSlug ? `/shops/${o.brandSlug}` : "/offers",
        art: o.heroArt,
      });
  }
  return results;
}
