import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { OffersView } from "@/components/offers/OffersView";
import { Accordion } from "@/components/ui/Accordion";
import { offers, offerCategories } from "@/lib/data/offers";
import { formatDateRange } from "@/lib/utils";
import { getPageText } from "@/lib/i18n-pages";
import { offerContent, tr } from "@/lib/i18n-content";
import type { Locale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Offres — Bons plans et privileges de saison",
  description:
    "Decouvrez les dernieres offres et privileges des marques de Menara Mall Marrakech : mode, beaute, restauration, high-tech et bons plans famille. Filtrez par categorie et par marque.",
  alternates: { canonical: "/offers" },
};

export default function OffersPage({
  locale = "fr",
}: {
  locale?: Locale;
}) {
  const ofp = getPageText(locale).offers;
  const terms = offers.map((o) => {
    const copy = offerContent[o.id]?.[locale];
    return {
      q: `${copy?.title ?? o.title} — ${tr(o.brand, locale)}`,
      a: `${ofp.valid} ${formatDateRange(o.validFrom, o.validUntil, locale)}. ${copy?.terms ?? o.terms}`,
    };
  });

  return (
    <>
      <PageHero
        eyebrow={ofp.heroEyebrow}
        title={ofp.heroTitle}
        lede={ofp.heroLede}
        art="Presentation elegante d'offres retail, coffrets cadeaux et styling de saison, lumiere chaude"
        tone="gold"
        crumbs={[{ label: ofp.crumb }]}
      />
      <section className="bg-ivory py-16 sm:py-20">
        <Container>
          <OffersView offers={offers} categories={offerCategories} />
        </Container>
      </section>

      <section className="bg-cream py-20">
        <Container size="narrow">
          <p className="eyebrow text-clay">{ofp.termsEyebrow}</p>
          <h2 className="mt-3 text-3xl text-charcoal">{ofp.termsTitle}</h2>
          <p className="mt-3 text-sm text-stone">
            {ofp.termsIntro}
          </p>
          <div className="mt-8">
            <Accordion items={terms} />
          </div>
        </Container>
      </section>
    </>
  );
}
