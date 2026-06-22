import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { ShopsDirectory } from "@/components/directory/ShopsDirectory";
import { brands, brandCategories, floors } from "@/lib/data/brands";

export const metadata: Metadata = {
  title: "Shops — A Curated Brand Directory",
  description:
    "Browse the full directory of shops at Menara Mall Marrakech — fashion, beauty, jewellery, electronics, sports, Moroccan craft and more. Search by category and floor.",
  alternates: { canonical: "/shops" },
};

export default function ShopsPage() {
  return (
    <>
      <PageHero
        eyebrow="Shopping"
        title="A curated directory of the brands you love"
        lede="From international fashion and beauty houses to Morocco's everyday favourites — find every store, floor and opening time in one place."
        art="Premium shopping mall interior, elegant storefronts, soft daylight"
        tone="sand"
        crumbs={[{ label: "Shops" }]}
      />
      <section className="bg-ivory py-16 sm:py-20">
        <Container>
          <ShopsDirectory brands={brands} categories={brandCategories} floors={floors} />
        </Container>
      </section>
    </>
  );
}
