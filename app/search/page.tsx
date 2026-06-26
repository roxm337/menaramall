import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui/Container";
import { SearchResults } from "@/components/search/SearchResults";

export const metadata: Metadata = {
  title: "Recherche",
  description: "Recherchez parmi les boutiques, restaurants et offres de Menara Mall Marrakech.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/search" },
};

export default function SearchPage({
  locale = "fr",
}: {
  locale?: "fr" | "en" | "ar";
}) {
  const eyebrow = locale === "en" ? "Search" : locale === "ar" ? "بحث" : "Recherche";
  const title =
    locale === "en"
      ? "Find your way around Menara Mall"
      : locale === "ar"
        ? "اعثر على وجهتك داخل منارة مول"
        : "Trouvez votre chemin dans Menara Mall";
  const loading =
    locale === "en" ? "Loading search..." : locale === "ar" ? "جار تحميل البحث..." : "Chargement de la recherche...";
  return (
    <section className="bg-ivory pb-24 pt-[calc(var(--header-h,4.5rem)+3rem)]">
      <Container size="narrow">
        <p className="eyebrow text-clay">{eyebrow}</p>
        <h1 className="mt-3 text-charcoal" style={{ fontSize: "var(--text-title)" }}>
          {title}
        </h1>
        <div className="mt-10">
          <Suspense fallback={<p className="text-stone">{loading}</p>}>
            <SearchResults />
          </Suspense>
        </div>
      </Container>
    </section>
  );
}
