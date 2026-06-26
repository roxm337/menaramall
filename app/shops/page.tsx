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

export default function ShopsPage({
  locale = "fr",
}: {
  locale?: "fr" | "en" | "ar";
}) {
  const copy =
    locale === "en"
      ? {
          eyebrow: "Shopping",
          title: "A curated directory of every brand you love",
          lede: "From international fashion and beauty labels to everyday essentials in Morocco, find every shop, level, and opening hour in one place.",
          crumb: "Shops",
        }
      : locale === "ar"
        ? {
            eyebrow: "التسوق",
            title: "دليل منسق لكل العلامات التي تحبها",
            lede: "من علامات الأزياء والجمال العالمية إلى أساسيات الحياة اليومية في المغرب، اعثر على كل متجر والطابق والمواعيد في مكان واحد.",
            crumb: "المتاجر",
          }
        : {
            eyebrow: "Shopping",
            title: "Un annuaire soigne de toutes les marques que vous aimez",
            lede: "Des enseignes internationales de mode et de beaute aux incontournables du quotidien au Maroc, retrouvez chaque boutique, niveau et horaire en un seul endroit.",
            crumb: "Boutiques",
          };
  return (
    <>
      <PageHero
        eyebrow={copy.eyebrow}
        title={copy.title}
        lede={copy.lede}
        art="Interieur de centre commercial premium, vitrines elegantes, lumiere douce"
        imageSrc={officialMedia.shoppingHero}
        tone="sand"
        crumbs={[{ label: copy.crumb }]}
      />
      <section className="bg-ivory py-16 sm:py-20">
        <Container>
          <ShopsDirectory brands={brands} categories={brandCategories} floors={floors} />
        </Container>
      </section>
    </>
  );
}
