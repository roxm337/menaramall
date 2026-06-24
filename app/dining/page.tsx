import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { DiningDirectory } from "@/components/directory/DiningDirectory";
import { restaurants, cuisineTypes } from "@/lib/data/restaurants";

export const metadata: Metadata = {
  title: "Restaurants — Saveurs, cafes et adresses gourmandes",
  description:
    "Decouvrez la restauration a Menara Mall Marrakech : festins marocains, terrasses mediterraneennes, cafes de specialite et adresses familiales. Filtrez par type et par envie du moment.",
  alternates: { canonical: "/dining" },
};

export default function DiningPage() {
  return (
    <>
      <PageHero
        eyebrow="Restaurants"
        title="Une table pour chaque moment de la journee"
        lede="Cafes decontractes, restaurants en terrasse avec vue, douceurs sucrees et pauses rapides : explorez les saveurs de Marrakech et d'ailleurs."
        art="Art de vivre en terrasse, assiettes a partager, lumiere doree de Marrakech"
        tone="clay"
        crumbs={[{ label: "Restaurants" }]}
      />
      <section className="bg-ivory py-16 sm:py-20">
        <Container>
          <DiningDirectory restaurants={restaurants} types={cuisineTypes} />
        </Container>
      </section>
    </>
  );
}
