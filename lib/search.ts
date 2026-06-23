import { brands } from "@/lib/data/brands";
import { restaurants } from "@/lib/data/restaurants";
import { events } from "@/lib/data/events";
import { offers } from "@/lib/data/offers";

export interface SearchResult {
  type: "Shop" | "Dining" | "Event" | "Offer";
  title: string;
  subtitle: string;
  href: string;
  art: string;
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
        type: "Shop",
        title: b.name,
        subtitle: `${b.category} · ${b.floor}`,
        href: `/shops/${b.slug}`,
        art: b.heroArt,
      });
  }
  for (const r of restaurants) {
    if (match(r.name, r.cuisine, r.type, r.description, ...(r.tags ?? [])))
      results.push({
        type: "Dining",
        title: r.name,
        subtitle: `${r.cuisine} · ${r.floor}`,
        href: `/dining/${r.slug}`,
        art: r.heroArt,
      });
  }
  for (const e of events) {
    if (match(e.title, e.category, e.description, e.location))
      results.push({
        type: "Event",
        title: e.title,
        subtitle: `${e.category} · ${e.location}`,
        href: `/events/${e.slug}`,
        art: e.heroArt,
      });
  }
  for (const o of offers) {
    if (match(o.title, o.brand, o.category, o.description))
      results.push({
        type: "Offer",
        title: o.title,
        subtitle: `${o.brand} · ${o.category}`,
        href: o.brandSlug ? `/shops/${o.brandSlug}` : "/offers",
        art: o.heroArt,
      });
  }
  return results;
}
