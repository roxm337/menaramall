import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArtImage } from "@/components/ui/ArtImage";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Carousel } from "@/components/ui/Carousel";
import { sourceKidzo } from "@/lib/data/source-api";
import { getPageText } from "@/lib/i18n-pages";
import { kidzoTagline } from "@/lib/i18n-content";
import type { Locale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Kidzo — Jeux et activites en famille",
  description:
    "Kidzo a Menara Mall Marrakech : patinoire, cinema 7D, petite creche, jeux en realite virtuelle et univers enfant. Retrouvez l'univers magique des enfants a Kidzo - Menara Mall.",
  alternates: { canonical: "/entertainment" },
};

const heroSlideSrcs = [
  "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f92df1049d4_ELY10130.jpg",
  "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f92e72b49e5_ELY10155.jpg",
] as const;

const vrGameSrcs = [
  "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f92e93b2eca_ELY10144.jpg",
  "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903b16022a2f_ELY10231.jpg",
  "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903b1545aee3_ELY10152.jpg",
  "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903b14c3a680_ELY10153.jpg",
  "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903b3f910365_ELY10216.jpg",
  "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903b41391457_ELY10220.jpg",
  "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903b41d1492a_ELY10251.jpg",
  "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903b442b391f_ELY10238.jpg",
  "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903b449e58fb_ELY10248.jpg",
  "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903b4538bceb_ELY10218.jpg",
] as const;

const kidzoFeatureIcons: IconName[] = ["shield", "sparkles", "heart", "baby"];

const kidzoAssets = [...sourceKidzo].sort(
  (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
);

const kidzoGallery = kidzoAssets.slice(0, 6);

export default function EntertainmentPage({
  locale = "fr",
}: {
  locale?: Locale;
}) {
  const e = getPageText(locale).entertainment;
  const heroLede = kidzoTagline[locale];
  return (
    <>
      <PageHero
        eyebrow={e.heroEyebrow}
        title={e.heroTitle}
        lede={heroLede}
        art="Univers Kidzo lumineux, enfants rieurs, jeux et couleurs joyeuses"
        imageSrc={heroSlideSrcs[0]}
        tone="gold"
        crumbs={[{ label: e.crumb }]}
      />

      <section className="bg-ivory py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <Badge tone="clay">{e.introBadge}</Badge>
              <h2
                className="mt-5 text-balance text-charcoal"
                style={{ fontSize: "var(--text-title)" }}
              >
                {e.introTitle}
              </h2>
              <p className="mt-5 text-stone">
                {heroLede}
              </p>
              <ul className="mt-7 grid grid-cols-2 gap-4 text-sm">
                {kidzoFeatureIcons.map((icon, index) => (
                  <li
                    key={icon}
                    className="flex items-center gap-3 text-charcoal"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-clay/10 text-clay">
                      <Icon name={icon} size={17} />
                    </span>
                    {e.features[index]}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1} className="grid grid-cols-2 gap-4">
              {heroSlideSrcs.map((src, index) => (
                <ArtImage
                  key={src}
                  art={e.heroSlides[index]}
                  src={src}
                  ratio="tall"
                  tone={index === 0 ? "gold" : "clay"}
                  className={index === 0 ? "mt-8" : ""}
                />
              ))}
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-cream py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <ArtImage
                art="Patinoire Kidzo Menara Mall"
                src="https://www.menaramall.com/img/patinoire.png"
                ratio="card"
                tone="ivory"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <SectionHeader
                eyebrow={e.patinoire.eyebrow}
                title={e.patinoire.title}
                lede={e.patinoire.lede}
              />
              <p className="mt-6 text-stone">
                {e.patinoire.para}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-charcoal py-24 text-ivory">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal className="order-2 lg:order-1">
              <SectionHeader
                eyebrow={e.cinema.eyebrow}
                title={e.cinema.title}
                lede={e.cinema.lede}
              />
              <p className="mt-6 max-w-xl text-white/75">
                {e.cinema.para}
              </p>
            </Reveal>
            <Reveal delay={0.1} className="order-1 lg:order-2">
              <ArtImage
                art="Cinema 7D Kidzo Menara Mall"
                src="https://www.menaramall.com/img/cin.png"
                ratio="card"
                tone="clay"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-ivory py-24">
        <Container>
          <SectionHeader
            align="center"
            eyebrow={e.gallery.eyebrow}
            title={e.gallery.title}
            lede={e.gallery.lede}
          />
          <Reveal className="mt-14">
            <Carousel>
              {kidzoGallery.map((item, index) => (
                <div
                  key={item.id}
                  className="min-w-[18rem] snap-start overflow-hidden rounded-[var(--radius-xl2)] bg-white ring-1 ring-charcoal/8 sm:min-w-[22rem] lg:min-w-[24rem]"
                >
                  <ArtImage
                    art={`Visuel officiel Kidzo ${index + 1}`}
                    src={item.imageUrl}
                    ratio="portrait"
                    tone={index % 2 === 0 ? "gold" : "clay"}
                    rounded={false}
                  />
                  <div className="p-5">
                    <p className="text-sm leading-relaxed text-stone">
                      {locale === "fr" ? item.description : heroLede}
                    </p>
                  </div>
                </div>
              ))}
            </Carousel>
          </Reveal>
        </Container>
      </section>

      <section className="bg-sky-50 py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <SectionHeader
                eyebrow={e.creche.eyebrow}
                title={e.creche.title}
                lede={e.creche.lede}
              />
              <p className="mt-6 text-stone">
                {e.creche.para}
              </p>
              <ul className="mt-7 grid grid-cols-2 gap-4 text-sm">
                {e.creche.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-charcoal"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                      <Icon name="check" size={17} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1} className="grid grid-cols-2 gap-4">
              <ArtImage
                art="Petite Creche Kidzo 1"
                src="https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f92cfd81f27_ELY10139.jpg"
                ratio="tall"
                tone="palm"
                className="mt-8"
              />
              <ArtImage
                art="Petite Creche Kidzo 2"
                src="https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903b303ca57d_ELY10164.jpg"
                ratio="tall"
                tone="gold"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <SectionHeader
            align="center"
            eyebrow={e.vr.eyebrow}
            title={e.vr.title}
            lede={e.vr.lede}
          />
          <Reveal className="mt-14">
            <Carousel>
              {vrGameSrcs.map((src, index) => (
                <div
                  key={src}
                  className="min-w-[18rem] snap-start overflow-hidden rounded-[var(--radius-xl2)] bg-white ring-1 ring-charcoal/8 shadow-[0_18px_40px_-30px_rgba(23,23,23,0.35)] sm:min-w-[22rem] lg:min-w-[24rem]"
                >
                  <ArtImage
                    art={e.vr.games[index]}
                    src={src}
                    ratio="wide"
                    tone="charcoal"
                    rounded={false}
                  />
                  <div className="p-5">
                    <h3 className="text-xl text-charcoal">{e.vr.games[index]}</h3>
                  </div>
                </div>
              ))}
            </Carousel>
          </Reveal>
        </Container>
      </section>

      <section className="bg-charcoal py-20 text-center text-ivory">
        <Container size="narrow">
          <Reveal>
            <h2
              className="text-balance text-white"
              style={{ fontSize: "var(--text-title)" }}
            >
              {e.cta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-white/70">
              {e.cta.lede}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href="/contact" locale={locale} variant="gold" icon="mail">
                {getPageText(locale).common.contactUs}
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
