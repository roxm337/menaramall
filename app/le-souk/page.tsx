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

export const metadata: Metadata = {
  title: "Le Souk — A Curated Moroccan Experience",
  description:
    "Le Souk at Menara Mall is a curated Moroccan craft experience — handmade leather and brass, traditional fashion, beauty rituals, attars and local gifts, in one elegant promenade.",
  alternates: { canonical: "/le-souk" },
};

const worlds: { icon: IconName; title: string; text: string; art: string; imageSrc?: string; tone: "clay" | "gold" | "sand" | "palm" }[] = [
  { icon: "compass", title: "Moroccan Craft", text: "Hand-tooled leather, hammered brass, carved wood and woven baskets from local artisans.", art: "Brass lanterns and leather goods on display, amber light", imageSrc: officialMedia.soukDetail, tone: "gold" },
  { icon: "bag", title: "Traditional Fashion", text: "Kaftans, djellabas and babouches — heritage silhouettes, beautifully made.", art: "Embroidered kaftans on display, rich fabric detail", imageSrc: officialMedia.soukHero, tone: "clay" },
  { icon: "droplet", title: "Beauty Rituals", text: "Argan oil, ghassoul clay and black soap — the timeless rituals of the hammam.", art: "Argan oil and natural beauty jars, spa-like calm", imageSrc: officialMedia.gallery[3], tone: "palm" },
  { icon: "sparkles", title: "Perfumes & Attars", text: "Rose, amber, oud and orange blossom — bespoke fragrance blended by hand.", art: "Glass perfume bottles and rose petals, apothecary mood", tone: "gold" },
  { icon: "heart", title: "Local Gifts", text: "Thoughtful keepsakes and souvenirs that carry a little of Marrakech home.", art: "Curated gift table, ceramics and trinkets, warm styling", tone: "sand" },
  { icon: "star", title: "Décor", text: "Ceramics, rugs, mirrors and lanterns to bring Moroccan warmth to any space.", art: "Moroccan home décor, mosaic and textiles, styled interior", tone: "clay" },
];

export default function LeSoukPage() {
  const boutiques = brands.filter((b) => b.category === "Moroccan Craft");

  return (
    <>
      <PageHero
        eyebrow="Le Souk · Signature Experience"
        title="A Moroccan experience within the mall"
        lede="Step off the polished concourse into a lantern-lit world of craft, fragrance and tradition — Le Souk gathers the artisanal soul of Marrakech under one roof."
        art="Lantern-lit Moroccan souk promenade, artisan stalls, warm amber glow"
        imageSrc={officialMedia.soukHero}
        tone="clay"
        crumbs={[{ label: "Le Souk" }]}
      >
        <Button href="#worlds" variant="gold" icon="arrow-right">Discover Le Souk</Button>
      </PageHero>

      {/* Story */}
      <section className="bg-ivory py-24">
        <Container size="narrow" className="text-center">
          <Reveal>
            <p className="eyebrow text-clay">An artisan story</p>
            <p className="mt-6 text-balance font-display text-3xl leading-snug text-charcoal sm:text-[2.5rem]">
              Marrakech has always been a city of makers. Le Souk honours that spirit —
              a curated promenade where the work of Morocco&rsquo;s artisans is given the
              setting it deserves.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 flex justify-center">
            <span className="rule-gold w-24" />
          </Reveal>
        </Container>
      </section>

      {/* Worlds grid */}
      <section id="worlds" className="bg-cream py-24 scroll-mt-20">
        <Container>
          <SectionHeader eyebrow="Worlds to explore" title="Six ways to discover Moroccan craft" align="center" />
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
              eyebrow="Featured boutiques"
              title="Meet the makers of Le Souk"
              lede="A handpicked selection of artisan boutiques within the experience."
              action={<Button href="/shops" variant="ghost" icon="arrow-right">All shops</Button>}
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
        <ArtImage art="Le Souq Al Madinah official photography" src={officialMedia.soukDetail} ratio="hero" rounded={false} className="!absolute inset-0 h-full w-full !rounded-none" tone="clay" />
        <div className="absolute inset-0 bg-charcoal/70" />
        <Container size="narrow" className="relative z-10">
          <Reveal>
            <p className="eyebrow text-gold-soft">Carry Marrakech home</p>
            <h2 className="mt-4 text-balance text-white" style={{ fontSize: "var(--text-title)" }}>
              Every piece tells a story of the city
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-white/75">
              Visit Le Souk on the Ground Floor and take home a piece of authentic Moroccan craft —
              made by hand, made with heart.
            </p>
            <div className="mt-8 flex justify-center gap-3">
              <Button href="/contact" variant="gold" icon="mail">Contact us</Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
