"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { searchAll, type SearchResult } from "@/lib/search";
import { ArtImage } from "@/components/ui/ArtImage";
import { Badge } from "@/components/ui/Badge";
import { EmptyState } from "@/components/ui/EmptyState";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

const FILTERS = ["Tous", "Boutique", "Restaurant", "Offre"] as const;

export function SearchResults() {
  const params = useSearchParams();
  const router = useRouter();
  const initial = params.get("q") ?? "";
  const [query, setQuery] = useState(initial);
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("Tous");

  // Keep the input in sync when the ?q= param changes (e.g. via the overlay).
  // eslint-disable-next-line react-hooks/set-state-in-effect -- mirror URL param into editable input
  useEffect(() => setQuery(initial), [initial]);

  const all = useMemo(() => searchAll(query), [query]);
  const results = filter === "Tous" ? all : all.filter((r) => r.type === filter);

  const counts = useMemo(() => {
    const c: Record<string, number> = { Tous: all.length };
    for (const r of all) c[r.type] = (c[r.type] ?? 0) + 1;
    return c;
  }, [all]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    router.replace(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <div>
      <form onSubmit={submit} className="flex items-center gap-3 border-b-2 border-charcoal/15 pb-4 focus-within:border-clay">
        <Icon name="search" size={24} className="text-stone" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher des boutiques, restaurants, offres..."
          aria-label="Recherche"
          autoFocus
          className="w-full bg-transparent font-display text-2xl text-charcoal outline-none placeholder:text-stone/50 sm:text-3xl"
        />
      </form>

      {query && (
        <>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            {FILTERS.map((f) => {
              const n = counts[f] ?? 0;
              const disabled = f !== "Tous" && n === 0;
              return (
                <button
                  key={f}
                  disabled={disabled}
                  onClick={() => setFilter(f)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                    filter === f
                      ? "border-charcoal bg-charcoal text-ivory"
                      : disabled
                        ? "cursor-not-allowed border-charcoal/10 text-charcoal/30"
                        : "border-charcoal/15 text-charcoal/75 hover:border-charcoal/40"
                  }`}
                >
                  {f} {n > 0 && <span className="opacity-60">({n})</span>}
                </button>
              );
            })}
          </div>

          <p className="mt-6 text-sm text-stone">
            <span className="font-medium text-charcoal">{results.length}</span> resultat
            {results.length === 1 ? "" : "s"} pour &ldquo;{query}&rdquo;
          </p>

          <div className="mt-6">
            {results.length === 0 ? (
              <EmptyState
                icon="search"
                title="Aucun resultat"
                message="Aucune correspondance trouvee. Essayez un autre terme ou parcourez l'annuaire."
                action={<Button href="/shops" variant="outline" icon="arrow-right">Voir les boutiques</Button>}
              />
            ) : (
              <ul className="divide-y divide-charcoal/8 overflow-hidden rounded-[var(--radius-xl2)] bg-white ring-1 ring-charcoal/8">
                {results.map((r: SearchResult) => (
                  <li key={r.href + r.title}>
                    <Link href={r.href} className="flex items-center gap-4 p-4 transition-colors hover:bg-ivory">
                      <ArtImage art={r.art} src={r.imageSrc} ratio="square" className="h-16 w-16 shrink-0" />
                      <span className="min-w-0 flex-1">
                        <span className="block truncate font-display text-lg text-charcoal">{r.title}</span>
                        <span className="block truncate text-sm text-stone">{r.subtitle}</span>
                      </span>
                      <Badge tone="outline">{r.type}</Badge>
                      <Icon name="arrow-right" size={18} className="text-clay" />
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </>
      )}

      {!query && (
        <p className="mt-10 text-stone">Commencez a saisir pour rechercher parmi les boutiques, restaurants et offres.</p>
      )}
    </div>
  );
}
