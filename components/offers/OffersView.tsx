"use client";

import { useMemo, useState } from "react";
import type { Offer, OfferCategory } from "@/lib/types";
import { OfferCard } from "@/components/cards/OfferCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { cn } from "@/lib/utils";

export function OffersView({
  offers,
  categories,
}: {
  offers: Offer[];
  categories: readonly OfferCategory[];
}) {
  const [category, setCategory] = useState<OfferCategory | "all">("all");
  const [brand, setBrand] = useState<string | "all">("all");

  const brands = useMemo(() => Array.from(new Set(offers.map((o) => o.brand))), [offers]);

  const list = useMemo(
    () =>
      offers
        .filter((o) => (category === "all" ? true : o.category === category))
        .filter((o) => (brand === "all" ? true : o.brand === brand)),
    [offers, category, brand],
  );

  const chip = (active: boolean) =>
    cn(
      "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-all",
      active ? "border-charcoal bg-charcoal text-ivory" : "border-charcoal/15 text-charcoal/75 hover:border-charcoal/40",
    );

  return (
    <div>
      <div className="grid gap-4">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-stone">Categorie</p>
          <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <button onClick={() => setCategory("all")} className={chip(category === "all")}>Toutes</button>
            {categories.map((c) => (
              <button key={c} onClick={() => setCategory(c)} className={chip(category === c)}>{c}</button>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-stone">Marque</p>
          <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <button onClick={() => setBrand("all")} className={chip(brand === "all")}>Toutes</button>
            {brands.map((b) => (
              <button key={b} onClick={() => setBrand(b)} className={chip(brand === b)}>{b}</button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10">
        {list.length === 0 ? (
          <EmptyState
            icon="tag"
            title="Aucune offre ne correspond a vos filtres"
            message="Essayez une autre categorie ou une autre marque : de nouvelles offres sont ajoutees regulierement."
          />
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((o) => (
              <OfferCard key={o.id} offer={o} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
