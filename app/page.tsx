import { Hero } from "@/components/home/Hero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Parallax, ScrollProgress, TiltCard } from "@/components/ui/Motion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArtImage } from "@/components/ui/ArtImage";
import { Icon, type IconName } from "@/components/ui/Icon";
import {
  ExperienceCard,
  type Experience,
} from "@/components/cards/ExperienceCard";
import { BrandCard } from "@/components/cards/BrandCard";
import { RestaurantCard } from "@/components/cards/RestaurantCard";
import { brands } from "@/lib/data/brands";
import { restaurants } from "@/lib/data/restaurants";
import { site } from "@/lib/data/site";
import { officialMedia } from "@/lib/data/official-media";

const experiences: Experience[] = [
  {
    title: "Shopping",
    description:
      "Plus de 90 enseignes nationales et internationales entre mode, beaute, high-tech et essentiels du quotidien.",
    href: "/shops",
    icon: "bag",
    art: "Interieur shopping premium, sols en pierre polie, lumiere naturelle douce",
    imageSrc: officialMedia.shoppingFeature,
    tone: "sand",
  },
  {
    title: "Restaurants",
    description:
      "Plus de 17 restaurants et cafes, entre l'energie du Food Court et les instants en terrasse panoramique.",
    href: "/dining",
    icon: "utensils",
    art: "Ambiance cafe lifestyle, table en marbre, cafe et patisseries, lumiere chaleureuse",
    imageSrc: officialMedia.diningFeature,
    tone: "clay",
  },
  {
    title: "Kidzo",
    description:
      "L'univers magique des enfants vous attend a Kidzo - Menara Mall, pour des jeux et des souvenirs memorables en famille.",
    href: "/entertainment",
    icon: "play",
    art: "Univers Kidzo, enfants joyeux, jeux et couleurs lumineuses",
    imageSrc: officialMedia.kidzoHero,
    tone: "gold",
  },
  {
    title: "Decouvrir",
    description:
      "Entrez dans Le Souk et explorez l'artisanat marocain, les cadeaux, la beaute et la culture.",
    href: "/le-souk",
    icon: "compass",
    art: "Detail d'artisanat marocain, lanternes en laiton et textiles, lueur ambree",
    imageSrc: officialMedia.soukHero,
    tone: "palm",
  },
];

export default function HomePage() {
  const featuredBrands = brands.filter((b) => b.featured).slice(0, 6);
  const featuredDining = restaurants.filter((r) => r.featured).slice(0, 3);

  return (
    <>
      <ScrollProgress />
      <Hero />

      {/* Experience cards */}
      <section className="bg-ivory pb-24 pt-16 sm:pt-20 lg:pt-24">
        <Container>
          <SectionHeader
            eyebrow="Quatre facons de vivre Menara Mall"
            title="Tout ce que Marrakech aime, sous un meme toit"
            lede="Shopping, restaurants et cafes, Kidzo, Le Souk Al Madinah et services essentiels dans une destination climatisee."
            action={
              <Button href="/shops" variant="outline" icon="arrow-right">
                Parcourir l'annuaire
              </Button>
            }
          />
          <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {experiences.map((exp) => (
              <RevealItem key={exp.title}>
                <TiltCard className="h-full rounded-[var(--radius-xl2)]">
                  <ExperienceCard exp={exp} />
                </TiltCard>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Featured brands */}
      <section className="bg-cream py-24">
        <Container>
          <SectionHeader
            eyebrow="Marques a la une"
            title="Boutiques et enseignes"
            lede="L'annuaire officiel Menara Mall rassemble mode, beaute, high-tech, services, jouets, Kidzo et Carrefour Market."
            action={
              <Button href="/shops" variant="ghost" icon="arrow-right">
                Toutes les boutiques
              </Button>
            }
          />
          <RevealGroup
            stagger={0.06}
            className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {featuredBrands.map((b) => (
              <RevealItem key={b.id}>
                <BrandCard brand={b} />
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Dining highlights */}
      <section className="bg-ivory py-24">
        <Container>
          <SectionHeader
            eyebrow="Coups de coeur restauration"
            title="Une table pour chaque moment"
            lede="L'annuaire officiel des restaurants et cafes propose restauration rapide, cafe, desserts, cuisines du monde et pauses en terrasse."
            action={
              <Button href="/dining" variant="ghost" icon="arrow-right">
                Tous les restaurants
              </Button>
            }
          />
          <RevealGroup className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {featuredDining.map((r) => (
              <RevealItem key={r.id}>
                <RestaurantCard restaurant={r} />
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Family entertainment / Kidzo */}
      <section className="bg-charcoal py-24 text-ivory">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <Parallax
                amount={34}
                className="overflow-hidden rounded-[var(--radius-xl2)] shadow-2xl"
              >
                <ArtImage
                  art="Familles profitant de Kidzo, jeux et attractions, lumiere joyeuse"
                  src={officialMedia.kidzoFeature}
                  ratio="card"
                  tone="clay"
                  className="scale-[1.2]"
                />
              </Parallax>
            </Reveal>
            <Reveal delay={0.1}>
              <Badge tone="gold">Kidzo · Univers enfants</Badge>
              <h2
                className="mt-5 text-balance text-white"
                style={{ fontSize: "var(--text-title)" }}
              >
                La ou commencent les petites aventures et les grands sourires
              </h2>
              <p className="mt-5 max-w-lg text-white/70">
                L&apos;univers magique des enfants vous attend à Kidzo - Menara
                Mall: patinoire, cinéma 7D, jeux en réalité virtuelle et Petite
                Crèche pour les plus jeunes.
              </p>
              <ul className="mt-7 grid grid-cols-2 gap-4 text-sm">
                {(
                  [
                    { icon: "shield", text: "Jeux surveilles et securises" },
                    { icon: "sparkles", text: "Attractions et arcade" },
                    { icon: "heart", text: "Formules anniversaire" },
                    { icon: "baby", text: "Espaces adaptes aux tout-petits" },
                  ] as { icon: IconName; text: string }[]
                ).map((f) => (
                  <li
                    key={f.text}
                    className="flex items-center gap-3 text-white/80"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-gold-soft">
                      <Icon name={f.icon} size={17} />
                    </span>
                    {f.text}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/entertainment" variant="gold" icon="arrow-right">
                  Decouvrir Kidzo
                </Button>
                <Button href="/contact" variant="light" icon="ticket">
                  Preparer une visite en famille
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Le Souk */}
      <section className="relative overflow-hidden bg-ivory py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal className="order-2 lg:order-1">
              <p className="eyebrow text-clay">Le Souk</p>
              <h2
                className="mt-4 text-balance text-charcoal"
                style={{ fontSize: "var(--text-title)" }}
              >
                Une experience marocaine au coeur du mall
              </h2>
              <p className="mt-5 max-w-lg text-stone">
                Decouvrez un univers soigneusement compose de savoir-faire,
                parfums, mode, beaute et details traditionnels inspires de
                Marrakech. Le Souk rassemble l'esprit artisanal de la ville,
                entre textiles tisses main, laiton, cuir et senteurs de rose
                et de fleur d'oranger, dans une promenade elegante eclairee
                aux lanternes.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "Artisanat",
                  "Parfums",
                  "Mode traditionnelle",
                  "Rituels beaute",
                  "Cadeaux",
                  "Decoration",
                ].map((t) => (
                  <Badge key={t} tone="outline">
                    {t}
                  </Badge>
                ))}
              </div>
              <div className="mt-8">
                <Button href="/le-souk" variant="primary" icon="arrow-right">
                  Decouvrir Le Souk
                </Button>
              </div>
            </Reveal>
            <Reveal
              delay={0.1}
              direction="left"
              className="order-1 grid grid-cols-2 gap-4 lg:order-2"
            >
              <Parallax
                amount={24}
                className="mt-8 overflow-hidden rounded-[var(--radius-xl2)]"
              >
                <ArtImage
                  art="Artisanat traditionnel Le Souk Al Madinah"
                  src={officialMedia.soukHero}
                  ratio="tall"
                  tone="clay"
                  className="scale-[1.18]"
                />
              </Parallax>
              <Parallax
                amount={-30}
                className="overflow-hidden rounded-[var(--radius-xl2)]"
              >
                <ArtImage
                  art="Le Souk Al Madinah a Menara Mall"
                  src={officialMedia.soukDetail}
                  ratio="tall"
                  tone="gold"
                  className="scale-[1.18]"
                />
              </Parallax>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Social gallery */}
      <section className="bg-ivory py-24">
        <Container>
          <SectionHeader
            align="center"
            eyebrow="@menaramall"
            title="Moments voles a Menara Mall"
            lede="Identifiez votre visite avec #MenaraMall pour apparaitre dans notre selection."
          />
          <RevealGroup
            stagger={0.05}
            className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6"
          >
            {officialMedia.gallery.map((src, i) => (
              <RevealItem key={i}>
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block"
                >
                  <ArtImage
                    art="Image officielle de la galerie Menara Mall"
                    src={src}
                    ratio="square"
                  />
                  <span className="absolute inset-0 flex items-center justify-center rounded-[var(--radius-xl2)] bg-charcoal/0 text-white opacity-0 transition-all duration-300 group-hover:bg-charcoal/40 group-hover:opacity-100">
                    <Icon name="instagram" size={26} />
                  </span>
                </a>
              </RevealItem>
            ))}
          </RevealGroup>
          <div className="mt-10 text-center">
            <Button
              href={site.social.instagram}
              variant="outline"
              icon="instagram"
            >
              Suivre @menaramall
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
