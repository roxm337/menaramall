import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { DiningDirectory } from "@/components/directory/DiningDirectory";
import { officialMedia } from "@/lib/data/official-media";
import { restaurants, cuisineTypes } from "@/lib/data/restaurants";

export const metadata: Metadata = {
  title: "Restaurants — Saveurs, cafes et adresses gourmandes",
  description:
    "Decouvrez la restauration a Menara Mall Marrakech : festins marocains, terrasses mediterraneennes, cafes de specialite et adresses familiales. Filtrez par type et par envie du moment.",
  alternates: { canonical: "/dining" },
};

export default function DiningPage({
  locale = "fr",
}: {
  locale?: "fr" | "en" | "ar";
}) {
  const copy =
    locale === "en"
      ? {
          eyebrow: "Dining",
          title: "A table for every moment of the day",
          lede: "Relaxed cafes, terrace restaurants with a view, sweet treats, and quick bites: explore the flavors of Marrakech and beyond.",
          crumb: "Dining",
        }
      : locale === "ar"
        ? {
            eyebrow: "المطاعم",
            title: "طاولة لكل لحظة من اليوم",
            lede: "مقاهٍ مريحة، ومطاعم مطلة على التراس، وحلويات، ووجبات سريعة: اكتشف نكهات مراكش وما بعدها.",
            crumb: "المطاعم",
          }
        : {
            eyebrow: "Restaurants",
            title: "Une table pour chaque moment de la journee",
            lede: "Cafes decontractes, restaurants en terrasse avec vue, douceurs sucrees et pauses rapides : explorez les saveurs de Marrakech et d'ailleurs.",
            crumb: "Restaurants",
          };
  return (
    <>
      <PageHero
        eyebrow={copy.eyebrow}
        title={copy.title}
        lede={copy.lede}
        art="Art de vivre en terrasse, assiettes a partager, lumiere doree de Marrakech"
        imageSrc={officialMedia.diningHero}
        tone="clay"
        crumbs={[{ label: copy.crumb }]}
      />
      <section className="bg-ivory py-16 sm:py-20">
        <Container>
          <DiningDirectory restaurants={restaurants} types={cuisineTypes} />
        </Container>
      </section>
    </>
  );
}
