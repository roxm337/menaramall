"use client";

import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import type { Restaurant, RestaurantType } from "@/lib/types";
import { RestaurantCard } from "@/components/cards/RestaurantCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { Button } from "@/components/ui/Button";
import { CardSkeletonGrid } from "@/components/ui/Skeleton";
import { cn } from "@/lib/utils";
import { SearchField, ChipFilter, ResultsBar, useAutoHideFilters } from "./FilterControls";
import { getLocaleFromPathname, getUiText } from "@/lib/i18n";
import { tr } from "@/lib/i18n-content";

const TAGS = ["Food Court", "Restauration rapide", "Cafe", "Dessert", "Terrasse"] as const;

export function DiningDirectory({
  restaurants,
  types,
}: {
  restaurants: Restaurant[];
  types: readonly RestaurantType[];
}) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState<RestaurantType | "all">("all");
  const [tag, setTag] = useState<(typeof TAGS)[number] | null>(null);
  const [loading, setLoading] = useState(true);
  const filtersHidden = useAutoHideFilters();
  const locale = getLocaleFromPathname(usePathname());
  const t = getUiText(locale);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 450);
    return () => clearTimeout(t);
  }, []);

  const hasFilters = query !== "" || type !== "all" || tag !== null;

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return restaurants
      .filter((r) => (type === "all" ? true : r.type === type))
      .filter((r) => (tag ? r.tags?.includes(tag) : true))
      .filter((r) =>
        q
          ? [r.name, r.cuisine, r.type, r.description, ...(r.tags ?? [])]
              .join(" ")
              .toLowerCase()
              .includes(q)
          : true,
      );
  }, [restaurants, query, type, tag]);

  const reset = () => {
    setQuery("");
    setType("all");
    setTag(null);
  };

  return (
    <div>
      <div
        className={cn(
          "sticky top-[var(--header-h,4.5rem)] z-20 -mx-5 mb-8 border-y border-charcoal/8 bg-ivory/90 px-5 py-5 backdrop-blur-md transition-transform duration-300 ease-[var(--ease-luxe)] sm:-mx-8 sm:px-8",
          filtersHidden && "-translate-y-[calc(100%+1rem)]",
        )}
      >
        <div className="grid gap-4">
          <SearchField value={query} onChange={setQuery} placeholder={t.directory.searchDiningPlaceholder} />
          <ChipFilter label={t.directory.type} options={types} value={type} onChange={setType} />
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-stone">{t.directory.idealFor}</p>
            <div className="flex flex-wrap gap-2">
              {TAGS.map((t) => (
                <button
                  key={t}
                  onClick={() => setTag(tag === t ? null : t)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-medium transition-all",
                    tag === t
                      ? "border-palm bg-palm text-ivory"
                      : "border-charcoal/15 bg-white text-charcoal/75 hover:border-charcoal/40",
                  )}
                >
                  {tr(t, locale)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <ResultsBar count={results.length} noun={t.directory.addressNoun} onReset={reset} hasFilters={hasFilters} />
      </div>

      {loading ? (
        <CardSkeletonGrid count={6} />
      ) : results.length === 0 ? (
        <EmptyState
          icon="utensils"
          title={t.directory.noDiningTitle}
          message={t.directory.noDiningMessage}
          action={<Button onClick={reset} variant="outline">{t.directory.resetFilters}</Button>}
        />
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((r) => (
            <RestaurantCard key={r.id} restaurant={r} />
          ))}
        </div>
      )}
    </div>
  );
}
