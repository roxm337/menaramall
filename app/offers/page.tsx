import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { OffersView } from "@/components/offers/OffersView";
import { Accordion } from "@/components/ui/Accordion";
import { offers, offerCategories } from "@/lib/data/offers";
import { formatDateRange } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Offers — Seasonal Savings & Privileges",
  description:
    "Explore the latest offers and privileges from brands at Menara Mall Marrakech — fashion, beauty, dining, electronics and family savings. Filter by category and brand.",
  alternates: { canonical: "/offers" },
};

export default function OffersPage() {
  const terms = offers.map((o) => ({
    q: `${o.title} — ${o.brand}`,
    a: `Valid ${formatDateRange(o.validFrom, o.validUntil)}. ${o.terms}`,
  }));

  return (
    <>
      <PageHero
        eyebrow="Offers & Privileges"
        title="The season's best, beautifully curated"
        lede="From wardrobe refreshes to beauty gifts and family dining treats — discover current offers from the brands at Menara Mall."
        art="Elegant retail offer display, gift sets and seasonal styling, warm light"
        tone="gold"
        crumbs={[{ label: "Offers" }]}
      />
      <section className="bg-ivory py-16 sm:py-20">
        <Container>
          <OffersView offers={offers} categories={offerCategories} />
        </Container>
      </section>

      <section className="bg-cream py-20">
        <Container size="narrow">
          <p className="eyebrow text-clay">The small print</p>
          <h2 className="mt-3 text-3xl text-charcoal">Terms & conditions</h2>
          <p className="mt-3 text-sm text-stone">
            Offers are provided by participating brands and subject to their terms. Please confirm
            details in store before purchase.
          </p>
          <div className="mt-8">
            <Accordion items={terms} />
          </div>
        </Container>
      </section>
    </>
  );
}
