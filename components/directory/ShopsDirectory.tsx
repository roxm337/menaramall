"use client";

import { useEffect, useMemo, useState } from "react";
import type { Brand, BrandCategory, Floor } from "@/lib/types";
import { BrandCard } from "@/components/cards/BrandCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { Button } from "@/components/ui/Button";
import { CardSkeletonGrid } from "@/components/ui/Skeleton";
import { SearchField, ChipFilter, ResultsBar } from "./FilterControls";
import { cn } from "@/lib/utils";

const ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export function ShopsDirectory({
  brands,
  categories,
  floors,
}: {
  brands: Brand[];
  categories: readonly BrandCategory[];
  floors: readonly Floor[];
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<BrandCategory | "all">("all");
  const [floor, setFloor] = useState<Floor | "all">("all");
  const [letter, setLetter] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Brief initial loading state to surface the skeleton treatment.
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 450);
    return () => clearTimeout(t);
  }, []);

  const hasFilters =
    query !== "" || category !== "all" || floor !== "all" || letter !== null;

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return brands
      .filter((b) => (category === "all" ? true : b.category === category))
      .filter((b) => (floor === "all" ? true : b.floor === floor))
      .filter((b) => (letter ? b.name.toUpperCase().startsWith(letter) : true))
      .filter((b) =>
        q
          ? [b.name, b.category, b.description, ...(b.tags ?? [])]
              .join(" ")
              .toLowerCase()
              .includes(q)
          : true,
      )
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [brands, query, category, floor, letter]);

  const featured = brands.filter((b) => b.featured).slice(0, 3);
  const activeLetters = new Set(brands.map((b) => b.name[0].toUpperCase()));

  const reset = () => {
    setQuery("");
    setCategory("all");
    setFloor("all");
    setLetter(null);
  };

  return (
    <div>
      {/* Featured strip — only when browsing without filters */}
      {!hasFilters && !loading && (
        <div className="mb-14">
          <p className="eyebrow mb-5 text-clay">Featured brands</p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((b) => (
              <BrandCard key={b.id} brand={b} />
            ))}
          </div>
        </div>
      )}

      {/* Controls */}
      <div className="sticky top-[var(--header-h,4.5rem)] z-20 -mx-5 mb-8 border-y border-charcoal/8 bg-ivory/90 px-5 py-5 backdrop-blur-md sm:-mx-8 sm:px-8">
        <div className="grid gap-4">
          <SearchField value={query} onChange={setQuery} placeholder="Search brands, categories…" />
          <div className="grid gap-4 sm:grid-cols-2">
            <ChipFilter label="Category" options={categories} value={category} onChange={setCategory} />
            <ChipFilter label="Floor" options={floors} value={floor} onChange={setFloor} />
          </div>
          {/* Alphabetical */}
          <div className="flex flex-wrap items-center gap-1">
            <button
              onClick={() => setLetter(null)}
              className={cn(
                "rounded-md px-2 py-1 text-xs font-medium",
                letter === null ? "text-clay" : "text-stone hover:text-charcoal",
              )}
            >
              All
            </button>
            {ALPHA.map((l) => {
              const enabled = activeLetters.has(l);
              return (
                <button
                  key={l}
                  disabled={!enabled}
                  onClick={() => setLetter(letter === l ? null : l)}
                  className={cn(
                    "h-7 w-7 rounded-md text-xs font-medium transition-colors",
                    !enabled && "cursor-not-allowed text-charcoal/20",
                    enabled && letter === l && "bg-charcoal text-ivory",
                    enabled && letter !== l && "text-charcoal/70 hover:bg-charcoal/5",
                  )}
                >
                  {l}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mb-6">
        <ResultsBar count={results.length} noun="shop" onReset={reset} hasFilters={hasFilters} />
      </div>

      {loading ? (
        <CardSkeletonGrid count={6} />
      ) : results.length === 0 ? (
        <EmptyState
          icon="bag"
          title="No shops match your search"
          message="Try adjusting your filters or searching for a different brand or category."
          action={<Button onClick={reset} variant="outline">Reset filters</Button>}
        />
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((b) => (
            <BrandCard key={b.id} brand={b} />
          ))}
        </div>
      )}
    </div>
  );
}
