import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ArtImage } from "@/components/ui/ArtImage";
import { Icon, type IconName } from "@/components/ui/Icon";
import { BrandCard } from "@/components/cards/BrandCard";
import { brands } from "@/lib/data/brands";
import { officialMedia } from "@/lib/data/official-media";
import { sourceSouk } from "@/lib/data/source-api";
import { getPageText } from "@/lib/i18n-pages";
import type { Locale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Le Souk — Une experience marocaine soigneusement composee",
  description:
    "Le Souk de Menara Mall est une experience marocaine soigneusement composee : cuir et laiton faits main, mode traditionnelle, rituels beaute, attars et cadeaux locaux au fil d'une promenade elegante.",
  alternates: { canonical: "/le-souk" },
};

const soukImages = {
  perfumes: sourceSouk[7]?.imageUrl,
  gifts: sourceSouk[8]?.imageUrl,
  decor: sourceSouk[5]?.imageUrl,
} as const;

const worldVisuals: { icon: IconName; art: string; imageSrc?: string; tone: "clay" | "gold" | "sand" | "palm" }[] = [
  { icon: "compass", art: "Lanternes en laiton et articles en cuir exposes, lumiere ambree", imageSrc: officialMedia.soukDetail, tone: "gold" },
  { icon: "bag", art: "Caftans brodes exposes, richesse des matieres", imageSrc: officialMedia.soukHero, tone: "clay" },
  { icon: "droplet", art: "Huile d'argan et pots de beaute naturelle, ambiance spa", imageSrc: officialMedia.gallery[3], tone: "palm" },
  { icon: "sparkles", art: "Flacons de parfum en verre et petales de rose, ambiance d'apothicaire", imageSrc: soukImages.perfumes, tone: "gold" },
  { icon: "heart", art: "Table de cadeaux selectionnes, ceramiques et objets, styling chaleureux", imageSrc: soukImages.gifts, tone: "sand" },
  { icon: "star", art: "Decoration marocaine, mosaïque et textiles, interieur stylise", imageSrc: soukImages.decor, tone: "clay" },
];

export default function LeSoukPage({
  locale = "fr",
}: {
  locale?: Locale;
}) {
  const s = getPageText(locale).leSouk;
  const boutiques = brands.filter((b) => b.category === "Artisanat marocain");

  return (
    <>
      <PageHero
        eyebrow={s.heroEyebrow}
        title={s.heroTitle}
        lede={s.heroLede}
        art="Promenade de souk marocain eclairee aux lanternes, echoppes d'artisans, lueur ambree"
        imageSrc={officialMedia.soukHero}
        tone="clay"
        crumbs={[{ label: s.crumb }]}
      >
        <Button href="#worlds" variant="gold" icon="arrow-right">{s.heroButton}</Button>
      </PageHero>

      {/* Worlds grid */}
      <section id="worlds" className="bg-cream py-24 scroll-mt-20">
        <Container>
          <SectionHeader eyebrow={s.worldsEyebrow} title={s.worldsTitle} align="center" />
          <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {worldVisuals.map((w, index) => (
              <RevealItem key={s.worlds[index].title}>
                <div className="lift group h-full overflow-hidden rounded-[var(--radius-xl2)] bg-white ring-1 ring-charcoal/8">
                  <ArtImage art={w.art} src={w.imageSrc} tone={w.tone} ratio="wide" rounded={false} />
                  <div className="p-7">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-clay/10 text-clay">
                      <Icon name={w.icon} size={20} />
                    </span>
                    <h3 className="mt-4 text-2xl text-charcoal">{s.worlds[index].title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-stone">{s.worlds[index].text}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Featured boutiques */}
      {boutiques.length > 0 && (
        <section className="bg-ivory py-24">
          <Container>
            <SectionHeader
              eyebrow={s.boutiquesEyebrow}
              title={s.boutiquesTitle}
              lede={s.boutiquesLede}
              action={<Button href="/shops" locale={locale} variant="ghost" icon="arrow-right">{getPageText(locale).common.allShops}</Button>}
            />
            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {boutiques.map((b) => (
                <BrandCard key={b.id} brand={b} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Immersive band */}
      <section className="relative isolate overflow-hidden bg-charcoal py-28 text-center text-ivory">
        <ArtImage art="Photographie officielle Le Souk Al Madinah" src={officialMedia.soukDetail} ratio="hero" rounded={false} className="!absolute inset-0 h-full w-full !rounded-none" tone="clay" />
        <div className="absolute inset-0 bg-charcoal/70" />
        <Container size="narrow" className="relative z-10">
          <Reveal>
            <p className="eyebrow text-gold-soft">{s.bandEyebrow}</p>
            <h2 className="mt-4 text-balance text-white" style={{ fontSize: "var(--text-title)" }}>
              {s.bandTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-white/75">
              {s.bandLede}
            </p>
            <div className="mt-8 flex justify-center gap-3">
              <Button href="/contact" locale={locale} variant="gold" icon="mail">{getPageText(locale).common.contactUs}</Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
