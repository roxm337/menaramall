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

const worlds: { icon: IconName; title: string; text: string; art: string; imageSrc?: string; tone: "clay" | "gold" | "sand" | "palm" }[] = [
  { icon: "compass", title: "Artisanat marocain", text: "Cuir travaille a la main, laiton martelé, bois sculpte et paniers tisses par des artisans locaux.", art: "Lanternes en laiton et articles en cuir exposes, lumiere ambree", imageSrc: officialMedia.soukDetail, tone: "gold" },
  { icon: "bag", title: "Mode traditionnelle", text: "Caftans, djellabas et babouches : des silhouettes patrimoniales superbement realisees.", art: "Caftans brodes exposes, richesse des matieres", imageSrc: officialMedia.soukHero, tone: "clay" },
  { icon: "droplet", title: "Rituels beaute", text: "Huile d'argan, ghassoul et savon noir : les rituels intemporels du hammam.", art: "Huile d'argan et pots de beaute naturelle, ambiance spa", imageSrc: officialMedia.gallery[3], tone: "palm" },
  { icon: "sparkles", title: "Parfums & attars", text: "Rose, ambre, oud et fleur d'oranger : des fragrances composees a la main.", art: "Flacons de parfum en verre et petales de rose, ambiance d'apothicaire", imageSrc: soukImages.perfumes, tone: "gold" },
  { icon: "heart", title: "Cadeaux locaux", text: "Des souvenirs choisis avec soin qui emportent un peu de Marrakech avec vous.", art: "Table de cadeaux selectionnes, ceramiques et objets, styling chaleureux", imageSrc: soukImages.gifts, tone: "sand" },
  { icon: "star", title: "Decoration", text: "Ceramiques, tapis, miroirs et lanternes pour inviter la chaleur du Maroc dans chaque interieur.", art: "Decoration marocaine, mosaïque et textiles, interieur stylise", imageSrc: soukImages.decor, tone: "clay" },
];

export default function LeSoukPage() {
  const boutiques = brands.filter((b) => b.category === "Artisanat marocain");

  return (
    <>
      <PageHero
        eyebrow="Le Souk · Experience signature"
        title="Une experience marocaine au coeur du mall"
        lede="Quittez les allées du centre pour entrer dans un univers de lanternes, d'artisanat, de parfums et de tradition : Le Souk rassemble l'ame artisanale de Marrakech sous un meme toit."
        art="Promenade de souk marocain eclairee aux lanternes, echoppes d'artisans, lueur ambree"
        imageSrc={officialMedia.soukHero}
        tone="clay"
        crumbs={[{ label: "Le Souk" }]}
      >
        <Button href="#worlds" variant="gold" icon="arrow-right">Decouvrir Le Souk</Button>
      </PageHero>

      {/* Worlds grid */}
      <section id="worlds" className="bg-cream py-24 scroll-mt-20">
        <Container>
          <SectionHeader eyebrow="Univers a explorer" title="Six facons de decouvrir l'artisanat marocain" align="center" />
          <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {worlds.map((w) => (
              <RevealItem key={w.title}>
                <div className="lift group h-full overflow-hidden rounded-[var(--radius-xl2)] bg-white ring-1 ring-charcoal/8">
                  <ArtImage art={w.art} src={w.imageSrc} tone={w.tone} ratio="wide" rounded={false} />
                  <div className="p-7">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-clay/10 text-clay">
                      <Icon name={w.icon} size={20} />
                    </span>
                    <h3 className="mt-4 text-2xl text-charcoal">{w.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-stone">{w.text}</p>
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
              eyebrow="Boutiques a la une"
              title="Rencontrez les createurs du Souk"
              lede="Une selection de boutiques artisanales a decouvrir dans l'experience Le Souk."
              action={<Button href="/shops" variant="ghost" icon="arrow-right">Toutes les boutiques</Button>}
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
            <p className="eyebrow text-gold-soft">Emportez Marrakech avec vous</p>
            <h2 className="mt-4 text-balance text-white" style={{ fontSize: "var(--text-title)" }}>
              Chaque piece raconte une histoire de la ville
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-white/75">
              Visitez Le Souk au rez-de-chaussee et repartez avec une piece authentique de l&apos;artisanat marocain,
              faite a la main et avec coeur.
            </p>
            <div className="mt-8 flex justify-center gap-3">
              <Button href="/contact" variant="gold" icon="mail">Nous contacter</Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
