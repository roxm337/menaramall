import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui/Container";
import { SearchResults } from "@/components/search/SearchResults";

export const metadata: Metadata = {
  title: "Search",
  description: "Search across shops, dining, events and offers at Menara Mall Marrakech.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/search" },
};

export default function SearchPage() {
  return (
    <section className="bg-ivory pb-24 pt-[calc(var(--header-h,4.5rem)+3rem)]">
      <Container size="narrow">
        <p className="eyebrow text-clay">Search</p>
        <h1 className="mt-3 text-charcoal" style={{ fontSize: "var(--text-title)" }}>
          Find your way around Menara Mall
        </h1>
        <div className="mt-10">
          <Suspense fallback={<p className="text-stone">Loading search…</p>}>
            <SearchResults />
          </Suspense>
        </div>
      </Container>
    </section>
  );
}
