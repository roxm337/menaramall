import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { OffersView } from "@/components/offers/OffersView";
import { Accordion } from "@/components/ui/Accordion";
import { offers, offerCategories } from "@/lib/data/offers";
import { formatDateRange } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Offres — Bons plans et privileges de saison",
  description:
    "Decouvrez les dernieres offres et privileges des marques de Menara Mall Marrakech : mode, beaute, restauration, high-tech et bons plans famille. Filtrez par categorie et par marque.",
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
        eyebrow="Offres & privileges"
        title="Le meilleur de la saison, soigneusement selectionne"
        lede="Des renouvellements de dressing aux cadeaux beaute et plaisirs a partager en famille : decouvrez les offres en cours des marques Menara Mall."
        art="Presentation elegante d'offres retail, coffrets cadeaux et styling de saison, lumiere chaude"
        tone="gold"
        crumbs={[{ label: "Offres" }]}
      />
      <section className="bg-ivory py-16 sm:py-20">
        <Container>
          <OffersView offers={offers} categories={offerCategories} />
        </Container>
      </section>

      <section className="bg-cream py-20">
        <Container size="narrow">
          <p className="eyebrow text-clay">Informations utiles</p>
          <h2 className="mt-3 text-3xl text-charcoal">Conditions generales</h2>
          <p className="mt-3 text-sm text-stone">
            Les offres sont proposees par les marques participantes et soumises a leurs propres conditions. Merci de confirmer les details en magasin avant achat.
          </p>
          <div className="mt-8">
            <Accordion items={terms} />
          </div>
        </Container>
      </section>
    </>
  );
}
