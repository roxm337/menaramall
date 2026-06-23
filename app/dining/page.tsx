import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { DiningDirectory } from "@/components/directory/DiningDirectory";
import { restaurants, cuisineTypes } from "@/lib/data/restaurants";

export const metadata: Metadata = {
  title: "Dining — Restaurants, Cafés & Flavours",
  description:
    "Discover dining at Menara Mall Marrakech — Moroccan feasts, Mediterranean terraces, specialty coffee and family favourites. Filter by type and what you're in the mood for.",
  alternates: { canonical: "/dining" },
};

export default function DiningPage() {
  return (
    <>
      <PageHero
        eyebrow="Dining"
        title="A table for every moment of the day"
        lede="Relaxed cafés, terrace restaurants with a view, sweet patisseries and quick bites — explore flavours from Marrakech and around the Mediterranean."
        art="Restaurant terrace lifestyle, shared plates, golden Marrakech light"
        tone="clay"
        crumbs={[{ label: "Dining" }]}
      />
      <section className="bg-ivory py-16 sm:py-20">
        <Container>
          <DiningDirectory restaurants={restaurants} types={cuisineTypes} />
        </Container>
      </section>
    </>
  );
}
