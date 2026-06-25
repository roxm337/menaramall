import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { ShopsDirectory } from "@/components/directory/ShopsDirectory";
import { officialMedia } from "@/lib/data/official-media";
import { brands, brandCategories, floors } from "@/lib/data/brands";

export const metadata: Metadata = {
  title: "Boutiques — Un annuaire de marques soigneusement selectionne",
  description:
    "Parcourez l'annuaire complet des boutiques de Menara Mall Marrakech : mode, beaute, bijoux, high-tech, sport, artisanat marocain et plus encore. Recherchez par categorie et par niveau.",
  alternates: { canonical: "/shops" },
};

export default function ShopsPage() {
  return (
    <>
      <PageHero
        eyebrow="Shopping"
        title="Un annuaire soigne de toutes les marques que vous aimez"
        lede="Des enseignes internationales de mode et de beaute aux incontournables du quotidien au Maroc, retrouvez chaque boutique, niveau et horaire en un seul endroit."
        art="Interieur de centre commercial premium, vitrines elegantes, lumiere douce"
        imageSrc={officialMedia.shoppingHero}
        tone="sand"
        crumbs={[{ label: "Boutiques" }]}
      />
      <section className="bg-ivory py-16 sm:py-20">
        <Container>
          <ShopsDirectory brands={brands} categories={brandCategories} floors={floors} />
        </Container>
      </section>
    </>
  );
}
