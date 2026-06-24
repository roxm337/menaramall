import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArtImage } from "@/components/ui/ArtImage";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Carousel } from "@/components/ui/Carousel";
import { sourceKidzo } from "@/lib/data/source-api";

export const metadata: Metadata = {
  title: "Kidzo — Jeux et activites en famille",
  description:
    "Kidzo a Menara Mall Marrakech : patinoire, cinema 7D, petite creche, jeux en realite virtuelle et univers enfant. Retrouvez l'univers magique des enfants a Kidzo - Menara Mall.",
  alternates: { canonical: "/entertainment" },
};

const heroSlides = [
  {
    src: "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f92df1049d4_ELY10130.jpg",
    title: "Bienvenue dans Kidzo !",
  },
  {
    src: "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f92e72b49e5_ELY10155.jpg",
    title: "Des aventures incroyables vous attendent !",
  },
] as const;

const vrGames = [
  {
    src: "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f92e93b2eca_ELY10144.jpg",
    title: "Aventure galactique",
  },
  {
    src: "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903b16022a2f_ELY10231.jpg",
    title: "Course cosmique",
  },
  {
    src: "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903b1545aee3_ELY10152.jpg",
    title: "Mission sous-marine",
  },
  {
    src: "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903b14c3a680_ELY10153.jpg",
    title: "Exploration des mondes",
  },
  {
    src: "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903b3f910365_ELY10216.jpg",
    title: "Chasse aux tresors",
  },
  {
    src: "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903b41391457_ELY10220.jpg",
    title: "Aventure jungle",
  },
  {
    src: "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903b41d1492a_ELY10251.jpg",
    title: "Combat des robots",
  },
  {
    src: "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903b442b391f_ELY10238.jpg",
    title: "Voyage temporel",
  },
  {
    src: "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903b449e58fb_ELY10248.jpg",
    title: "Escape room VR",
  },
  {
    src: "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903b4538bceb_ELY10218.jpg",
    title: "Aventure spatiale",
  },
] as const;

const kidzoFeatures: { icon: IconName; text: string }[] = [
  { icon: "shield", text: "Jeux surveilles et securises" },
  { icon: "sparkles", text: "Attractions et experiences immersives" },
  { icon: "heart", text: "Formules anniversaire" },
  { icon: "baby", text: "Espaces adaptes aux plus jeunes" },
];

const crecheFeatures = [
  "Encadrement professionnel",
  "Jeux educatifs et ludiques",
  "Espace detente et gouter",
  "Securite et surveillance continue",
];

const kidzoAssets = [...sourceKidzo].sort(
  (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
);

const kidzoHero = kidzoAssets[0];
const kidzoGallery = kidzoAssets.slice(0, 6);

export default function EntertainmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Kidzo"
        title={heroSlides[0].title}
        lede={kidzoHero?.description ?? "L'univers magique des enfants vous attend a Kidzo - Menara Mall."}
        art="Univers Kidzo lumineux, enfants rieurs, jeux et couleurs joyeuses"
        imageSrc={heroSlides[0].src}
        tone="gold"
        crumbs={[{ label: "Kidzo" }]}
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/contact" variant="gold" icon="ticket">
            Preparer une visite en famille
          </Button>
          <Button href="/contact" variant="light" icon="heart">
            Demander un anniversaire
          </Button>
        </div>
      </PageHero>

      <section className="bg-ivory py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <Badge tone="clay">Kidzo · Univers enfants</Badge>
              <h2
                className="mt-5 text-balance text-charcoal"
                style={{ fontSize: "var(--text-title)" }}
              >
                La ou commencent les petites aventures et les grands sourires
              </h2>
              <p className="mt-5 text-stone">
                {kidzoHero?.description ??
                  "L'univers magique des enfants vous attend a Kidzo - Menara Mall."}
              </p>
              <ul className="mt-7 grid grid-cols-2 gap-4 text-sm">
                {kidzoFeatures.map((feature) => (
                  <li
                    key={feature.text}
                    className="flex items-center gap-3 text-charcoal"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-clay/10 text-clay">
                      <Icon name={feature.icon} size={17} />
                    </span>
                    {feature.text}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1} className="grid grid-cols-2 gap-4">
              {heroSlides.map((slide, index) => (
                <ArtImage
                  key={slide.src}
                  art={slide.title}
                  src={slide.src}
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
                eyebrow="Patinoire"
                title="Decouvrez la patinoire magique du Menara Mall"
                lede="Plongez dans un univers feerique ou la glace scintille sous vos patins. Debutants comme amateurs de glisse y trouvent des instants de joie, de complicite et d'emerveillement."
              />
              <p className="mt-6 text-stone">
                Enfilez vos patins et retrouvez une ambiance hivernale pleine
                de magie, concue pour partager un moment memorable entre amis
                ou en famille.
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
                eyebrow="Cinema 7D"
                title="Une experience immersive pour toute la famille"
                lede="Mouvements, eclaboussures, lumiere et vent donnent vie a chaque scene. Le cinema 7D transforme chaque seance en aventure sensorielle."
              />
              <p className="mt-6 max-w-xl text-white/75">
                Les sieges interactifs et les effets speciaux cites sur la page
                officielle Kidzo offrent un divertissement intense et ludique,
                ideal pour completer une sortie en famille.
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
            eyebrow="Galerie officielle"
            title="L'univers magique de Kidzo"
            lede="Selection d'images issue du contenu officiel Kidzo diffuse par Menara Mall."
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
                      {item.description}
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
                eyebrow="Petite Creche"
                title="Un espace chaleureux pour les tout-petits"
                lede="La Petite Creche accueille les enfants de 1 a 4 ans dans un environnement amusant, securise et adapte au rythme des plus jeunes."
              />
              <p className="mt-6 text-stone">
                La page officielle Kidzo met en avant un encadrement
                professionnel, des jeux educatifs, des moments de detente et
                une surveillance continue pour que les parents profitent
                sereinement de leur visite.
              </p>
              <ul className="mt-7 grid grid-cols-2 gap-4 text-sm">
                {crecheFeatures.map((feature) => (
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
            eyebrow="Jeux en realite virtuelle"
            title="Des aventures immersives pour tous les ages"
            lede="Le site Kidzo historique presente une collection d'experiences VR ludiques et spectaculaires. Voici les visuels officiels associes a cette section."
          />
          <Reveal className="mt-14">
            <Carousel>
              {vrGames.map((game) => (
                <div
                  key={game.src}
                  className="min-w-[18rem] snap-start overflow-hidden rounded-[var(--radius-xl2)] bg-white ring-1 ring-charcoal/8 shadow-[0_18px_40px_-30px_rgba(23,23,23,0.35)] sm:min-w-[22rem] lg:min-w-[24rem]"
                >
                  <ArtImage
                    art={game.title}
                    src={game.src}
                    ratio="wide"
                    tone="charcoal"
                    rounded={false}
                  />
                  <div className="p-5">
                    <h3 className="text-xl text-charcoal">{game.title}</h3>
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
              Pret pour une journee dont toute la famille se souviendra ?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-white/70">
              Preparez votre visite, demandez nos tarifs groupes ou
              renseignez-vous sur une fete d'anniversaire : nous serons ravis
              de vous aider.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href="/contact" variant="gold" icon="mail">
                Nous contacter
              </Button>
              <Button href="/contact" variant="light" icon="ticket">
                Faire une demande
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
