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

const experiences: Experience[] = [
  {
    title: "Shop",
    description:
      "Fashion, beauty, home and everyday essentials across a curated mix of brands.",
    href: "/shops",
    icon: "bag",
    art: "Premium shopping interior, polished stone floors, soft daylight",
    tone: "sand",
  },
  {
    title: "Dine",
    description:
      "From relaxed cafés to family dining, flavours for every moment of the day.",
    href: "/dining",
    icon: "utensils",
    art: "Café lifestyle, marble table, coffee and pastries, warm light",
    tone: "clay",
  },
  {
    title: "Play",
    description:
      "Family entertainment, games and memorable moments for children and adults.",
    href: "/entertainment",
    icon: "play",
    art: "Family entertainment zone, joyful children playing, bright colours",
    tone: "gold",
  },
  {
    title: "Discover",
    description:
      "Step into Le Souk and explore Moroccan craft, gifts, beauty and culture.",
    href: "/le-souk",
    icon: "compass",
    art: "Moroccan craft detail, brass lanterns and textiles, amber glow",
    tone: "palm",
  },
];

const visitFacts: { icon: IconName; label: string; value: string }[] = [
  { icon: "clock", label: "Open daily", value: "10:00 – 22:00" },
  { icon: "car", label: "Parking", value: "Covered & open-air" },
  { icon: "map-pin", label: "Location", value: "Avenue Mohammed VI" },
  { icon: "accessibility", label: "Access", value: "Step-free, all floors" },
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
              More than a mall — a meeting place where Marrakech comes together to
              shop, dine, play and discover, all within one warm, light-filled
              destination.
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
            lede="Curated retail, restaurants and cafés, family leisure and a Moroccan craft experience — designed to be discovered at your own pace."
            action={<Button href="/visit" variant="outline" icon="arrow-right">Plan your visit</Button>}
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
            title="Names you love, beautifully gathered"
            lede="From international fashion and beauty houses to Morocco's everyday favourites."
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
            lede="Slow Moroccan feasts, Mediterranean terraces, specialty coffee and sweet finishes."
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
                Kidzo brings a world of safe, imaginative play to Menara Mall — rides,
                games, soft play and hands-on activities for children, with comfortable
                spaces for parents close by. From quiet afternoons to unforgettable
                birthday celebrations, it&rsquo;s family time, elevated.
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
              <ArtImage art="Handwoven Moroccan textiles, rich colour, artisan detail" ratio="tall" tone="clay" className="mt-8" />
              <ArtImage art="Brass lanterns and perfume bottles, warm amber light" ratio="tall" tone="gold" />
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

      {/* Visit information */}
      <section className="bg-palm py-24 text-ivory">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <p className="eyebrow text-gold-soft">Plan your visit</p>
              <h2 className="mt-4 text-balance text-white" style={{ fontSize: "var(--text-title)" }}>
                Everything you need for a smooth visit
              </h2>
              <p className="mt-5 max-w-lg text-white/75">
                Find opening hours, parking, directions and services — all in one place.
                Menara Mall sits on Avenue Mohammed VI, minutes from the heart of
                Marrakech and its leading hotels.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/visit" variant="light" icon="map-pin">Directions & parking</Button>
                <Button href="/services" variant="ghost" icon="info" className="!text-white hover:!bg-white/10">
                  Visitor services
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <dl className="grid grid-cols-2 gap-4">
                {visitFacts.map((f) => (
                  <div key={f.label} className="rounded-2xl bg-white/8 p-5 ring-1 ring-white/10">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-gold-soft">
                      <Icon name={f.icon} size={19} />
                    </span>
                    <dt className="mt-4 text-xs uppercase tracking-widest text-white/50">{f.label}</dt>
                    <dd className="mt-1 font-display text-xl text-white">{f.value}</dd>
                  </div>
                ))}
              </dl>
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
            title="Moments from Menara Mall"
            lede="Tag your visit with #MenaraMall to be featured."
          />
          <RevealGroup
            stagger={0.05}
            className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6"
          >
            {[
              "Golden-hour mall exterior, palms and modern facade",
              "Friends with shopping bags laughing, candid lifestyle",
              "Mint tea poured at a Moroccan café, close-up",
              "Child delighted on a ride at Kidzo, motion blur",
              "Artisan hands shaping leather in Le Souk",
              "Elegant fashion window display, evening light",
            ].map((art, i) => (
              <RevealItem key={i}>
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block"
                >
                  <ArtImage art={art} ratio="square" />
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
