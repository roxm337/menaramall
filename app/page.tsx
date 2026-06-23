import { Hero } from "@/components/home/Hero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArtImage } from "@/components/ui/ArtImage";
import { Icon, type IconName } from "@/components/ui/Icon";
import { ExperienceCard, type Experience } from "@/components/cards/ExperienceCard";
import { BrandCard } from "@/components/cards/BrandCard";
import { RestaurantCard } from "@/components/cards/RestaurantCard";
import { EventCard } from "@/components/cards/EventCard";
import { OfferCard } from "@/components/cards/OfferCard";
import { brands } from "@/lib/data/brands";
import { restaurants } from "@/lib/data/restaurants";
import { events, isUpcoming } from "@/lib/data/events";
import { offers } from "@/lib/data/offers";
import { site } from "@/lib/data/site";
import { officialMedia } from "@/lib/data/official-media";

const experiences: Experience[] = [
  {
    title: "Shop",
    description:
      "More than 50 boutiques and enseignes across fashion, beauty, tech and everyday essentials.",
    href: "/shops",
    icon: "bag",
    art: "Premium shopping interior, polished stone floors, soft daylight",
    imageSrc: officialMedia.shoppingHero,
    tone: "sand",
  },
  {
    title: "Dine",
    description:
      "More than 18 restaurants and cafés, with Food Court energy and panoramic terrace moments.",
    href: "/dining",
    icon: "utensils",
    art: "Café lifestyle, marble table, coffee and pastries, warm light",
    imageSrc: officialMedia.diningHero,
    tone: "clay",
  },
  {
    title: "Play",
    description:
      "Family entertainment, games and memorable moments for children and adults.",
    href: "/entertainment",
    icon: "play",
    art: "Family entertainment zone, joyful children playing, bright colours",
    imageSrc: officialMedia.kidzoHero,
    tone: "gold",
  },
  {
    title: "Discover",
    description:
      "Step into Le Souk and explore Moroccan craft, gifts, beauty and culture.",
    href: "/le-souk",
    icon: "compass",
    art: "Moroccan craft detail, brass lanterns and textiles, amber glow",
    imageSrc: officialMedia.soukHero,
    tone: "palm",
  },
];

export default function HomePage() {
  const featuredBrands = brands.filter((b) => b.featured).slice(0, 6);
  const featuredDining = restaurants.filter((r) => r.featured).slice(0, 3);
  const upcoming = events.filter((e) => isUpcoming(e)).slice(0, 2);
  const featuredOffers = offers.filter((o) => o.featured).slice(0, 2);

  return (
    <>
      <Hero />

      {/* Intro / positioning statement */}
      <section className="bg-ivory py-20 sm:py-28">
        <Container size="narrow" className="text-center">
          <Reveal>
            <p className="eyebrow text-clay">A lifestyle destination</p>
            <p className="mt-6 text-balance font-display text-3xl leading-snug text-charcoal sm:text-4xl md:text-[2.75rem]">
              Bienvenue au Menara Mall, perché sur les hauteurs de l&apos;Avenue
              Mohamed VI. Un espace dédié au shopping, aux loisirs et aux
              expériences qui rassemblent.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 flex justify-center">
            <span className="rule-gold w-24" />
          </Reveal>
        </Container>
      </section>

      {/* Experience cards */}
      <section className="bg-ivory pb-24">
        <Container>
          <SectionHeader
            eyebrow="Four ways to experience"
            title="Everything Marrakech loves, under one roof"
            lede="Shopping, restaurants et cafés, Kidzo, Le Souq Al Madinah and essential services in one climate-controlled destination."
            action={<Button href="/shops" variant="outline" icon="arrow-right">Browse directory</Button>}
          />
          <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {experiences.map((exp) => (
              <RevealItem key={exp.title}>
                <ExperienceCard exp={exp} />
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Featured brands */}
      <section className="bg-cream py-24">
        <Container>
          <SectionHeader
            eyebrow="Featured brands"
            title="Boutiques & enseignes"
            lede="The official Menara Mall directory spans fashion, beauty, high-tech, services, toys, leisure and Carrefour Market."
            action={<Button href="/shops" variant="ghost" icon="arrow-right">All shops</Button>}
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
            eyebrow="Dining highlights"
            title="A table for every moment"
            lede="The official restaurants and cafés directory includes fast food, coffee, desserts, international plates and terrace-friendly stops."
            action={<Button href="/dining" variant="ghost" icon="arrow-right">All dining</Button>}
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
              <ArtImage
                art="Families enjoying Kidzo entertainment, soft play and rides, joyful light"
                src={officialMedia.kidzoPlay}
                ratio="card"
                tone="clay"
                className="shadow-2xl"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <Badge tone="gold">Kidzo · Family Entertainment</Badge>
              <h2 className="mt-5 text-balance text-white" style={{ fontSize: "var(--text-title)" }}>
                Where little adventures and big smiles begin
              </h2>
              <p className="mt-5 max-w-lg text-white/70">
                L&apos;univers magique des enfants vous attend à Kidzo - Menara Mall:
                patinoire, cinéma 7D, jeux en réalité virtuelle et Petite Crèche
                pour les plus jeunes.
              </p>
              <ul className="mt-7 grid grid-cols-2 gap-4 text-sm">
                {([
                  { icon: "shield", text: "Safe, supervised play" },
                  { icon: "sparkles", text: "Rides & arcade games" },
                  { icon: "heart", text: "Birthday packages" },
                  { icon: "baby", text: "Toddler-friendly zones" },
                ] as { icon: IconName; text: string }[]).map((f) => (
                  <li key={f.text} className="flex items-center gap-3 text-white/80">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-gold-soft">
                      <Icon name={f.icon} size={17} />
                    </span>
                    {f.text}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/entertainment" variant="gold" icon="arrow-right">Discover Play</Button>
                <Button href="/contact" variant="light" icon="ticket">Plan a family visit</Button>
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
              <h2 className="mt-4 text-balance text-charcoal" style={{ fontSize: "var(--text-title)" }}>
                A Moroccan experience within the mall
              </h2>
              <p className="mt-5 max-w-lg text-stone">
                Discover a curated world of craft, fragrance, fashion, beauty and
                traditional detail inspired by Marrakech. Le Souk gathers the city&rsquo;s
                artisanal spirit — handwoven textiles, brass and leather, rose and
                orange-blossom attars — in one elegant, lantern-lit promenade.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Craft", "Fragrance", "Traditional fashion", "Beauty rituals", "Gifts", "Décor"].map((t) => (
                  <Badge key={t} tone="outline">{t}</Badge>
                ))}
              </div>
              <div className="mt-8">
                <Button href="/le-souk" variant="primary" icon="arrow-right">Discover Le Souk</Button>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="order-1 grid grid-cols-2 gap-4 lg:order-2">
              <ArtImage art="Le Souq Al Madinah traditional craft" src={officialMedia.soukHero} ratio="tall" tone="clay" className="mt-8" />
              <ArtImage art="Le Souq Al Madinah at Menara Mall" src={officialMedia.soukDetail} ratio="tall" tone="gold" />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Events & Offers */}
      <section className="bg-cream py-24">
        <Container>
          <SectionHeader
            eyebrow="What's on"
            title="Events & offers worth the visit"
            lede="A calendar of culture, family festivals and seasonal moments — plus the season's best offers."
            action={
              <div className="flex gap-3">
                <Button href="/events" variant="ghost" icon="calendar">Events</Button>
                <Button href="/offers" variant="ghost" icon="tag">Offers</Button>
              </div>
            }
          />
          <RevealGroup className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {upcoming.map((e) => (
              <RevealItem key={e.id}><EventCard event={e} /></RevealItem>
            ))}
            {featuredOffers.map((o) => (
              <RevealItem key={o.id}><OfferCard offer={o} /></RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Social gallery */}
      <section className="bg-ivory py-24">
        <Container>
          <SectionHeader
            align="center"
            eyebrow="@menaramall"
            title="Moments from Menara Mall"
            lede="Tag your visit with #MenaraMall to be featured."
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
                  <ArtImage art="Official Menara Mall gallery image" src={src} ratio="square" />
                  <span className="absolute inset-0 flex items-center justify-center rounded-[var(--radius-xl2)] bg-charcoal/0 text-white opacity-0 transition-all duration-300 group-hover:bg-charcoal/40 group-hover:opacity-100">
                    <Icon name="instagram" size={26} />
                  </span>
                </a>
              </RevealItem>
            ))}
          </RevealGroup>
          <div className="mt-10 text-center">
            <Button href={site.social.instagram} variant="outline" icon="instagram">
              Follow @menaramall
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
