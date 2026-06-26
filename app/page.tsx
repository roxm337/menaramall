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
import { getPageText } from "@/lib/i18n-pages";

export default function HomePage({
  locale = "fr",
}: {
  locale?: "fr" | "en" | "ar";
}) {
  const pt = getPageText(locale);
  const experiences: Experience[] =
    locale === "en"
      ? [
          { title: "Shopping", description: "More than 90 national and international brands across fashion, beauty, tech, and everyday essentials.", href: "/shops", icon: "bag", art: "Interieur shopping premium, sols en pierre polie, lumiere naturelle douce", imageSrc: officialMedia.shoppingFeature, tone: "sand" },
          { title: "Dining", description: "More than 17 restaurants and cafes, from the energy of the Food Court to panoramic terrace moments.", href: "/dining", icon: "utensils", art: "Ambiance cafe lifestyle, table en marbre, cafe et patisseries, lumiere chaleureuse", imageSrc: officialMedia.diningFeature, tone: "clay" },
          { title: "Kidzo", description: "Kidzo - Menara Mall welcomes families with games, attractions, and memorable moments for children.", href: "/entertainment", icon: "play", art: "Univers Kidzo, enfants joyeux, jeux et couleurs lumineuses", imageSrc: officialMedia.kidzoHero, tone: "brand" },
          { title: "Discover", description: "Step into The Souk and explore Moroccan crafts, gifts, beauty, and culture.", href: "/le-souk", icon: "compass", art: "Detail d'artisanat marocain, lanternes en laiton et textiles, lueur ambree", imageSrc: officialMedia.soukHero, tone: "palm" },
        ]
      : locale === "ar"
        ? [
            { title: "التسوق", description: "أكثر من 90 علامة وطنية وعالمية بين الأزياء والجمال والتقنية وضروريات الحياة اليومية.", href: "/shops", icon: "bag", art: "Interieur shopping premium, sols en pierre polie, lumiere naturelle douce", imageSrc: officialMedia.shoppingFeature, tone: "sand" },
            { title: "المطاعم", description: "أكثر من 17 مطعمًا ومقهى، من حيوية الفود كورت إلى لحظات التراس البانورامي.", href: "/dining", icon: "utensils", art: "Ambiance cafe lifestyle, table en marbre, cafe et patisseries, lumiere chaleureuse", imageSrc: officialMedia.diningFeature, tone: "clay" },
            { title: "كيدزو", description: "عالم كيدزو السحري ينتظر الأطفال والعائلات مع الألعاب والتجارب والذكريات الجميلة.", href: "/entertainment", icon: "play", art: "Univers Kidzo, enfants joyeux, jeux et couleurs lumineuses", imageSrc: officialMedia.kidzoHero, tone: "brand" },
            { title: "اكتشف", description: "ادخل إلى السوق واكتشف الحرف المغربية والهدايا والجمال والثقافة.", href: "/le-souk", icon: "compass", art: "Detail d'artisanat marocain, lanternes en laiton et textiles, lueur ambree", imageSrc: officialMedia.soukHero, tone: "palm" },
          ]
        : [
            { title: "Shopping", description: "Plus de 90 enseignes nationales et internationales entre mode, beaute, high-tech et essentiels du quotidien.", href: "/shops", icon: "bag", art: "Interieur shopping premium, sols en pierre polie, lumiere naturelle douce", imageSrc: officialMedia.shoppingFeature, tone: "sand" },
            { title: "Restaurants", description: "Plus de 17 restaurants et cafes, entre l'energie du Food Court et les instants en terrasse panoramique.", href: "/dining", icon: "utensils", art: "Ambiance cafe lifestyle, table en marbre, cafe et patisseries, lumiere chaleureuse", imageSrc: officialMedia.diningFeature, tone: "clay" },
            { title: "Kidzo", description: "L'univers magique des enfants vous attend a Kidzo - Menara Mall, pour des jeux et des souvenirs memorables en famille.", href: "/entertainment", icon: "play", art: "Univers Kidzo, enfants joyeux, jeux et couleurs lumineuses", imageSrc: officialMedia.kidzoHero, tone: "brand" },
            { title: "Decouvrir", description: "Entrez dans Le Souk et explorez l'artisanat marocain, les cadeaux, la beaute et la culture.", href: "/le-souk", icon: "compass", art: "Detail d'artisanat marocain, lanternes en laiton et textiles, lueur ambree", imageSrc: officialMedia.soukHero, tone: "palm" },
          ];
  const copy =
    locale === "en"
      ? {
          expEyebrow: "Four ways to experience Menara Mall",
          expTitle: "Everything Marrakech loves, under one roof",
          expLede: "Shopping, dining, Kidzo, Le Souk Al Madinah, and essential services in an air-conditioned destination.",
          browse: "Browse directory",
          featuredEyebrow: "Featured brands",
          featuredTitle: "Shops and labels",
          featuredLede: "The official Menara Mall directory brings together fashion, beauty, tech, services, toys, Kidzo, and Carrefour Market.",
          allShops: "All shops",
          diningEyebrow: "Dining favorites",
          diningTitle: "A table for every moment",
          diningLede: "The official restaurant and cafe directory covers quick bites, cafes, desserts, world cuisines, and terrace breaks.",
          allDining: "All restaurants",
        }
      : locale === "ar"
        ? {
            expEyebrow: "أربع طرق لعيش منارة مول",
            expTitle: "كل ما تحبه مراكش تحت سقف واحد",
            expLede: "التسوق والمطاعم وكيدزو والسوق والخدمات الأساسية داخل وجهة مكيفة.",
            browse: "تصفح الدليل",
            featuredEyebrow: "علامات مميزة",
            featuredTitle: "المتاجر والعلامات",
            featuredLede: "يجمع دليل منارة مول الرسمي الأزياء والجمال والتقنية والخدمات والألعاب وكيدزو وكارفور ماركت.",
            allShops: "كل المتاجر",
            diningEyebrow: "مختارات المطاعم",
            diningTitle: "طاولة لكل لحظة",
            diningLede: "يضم الدليل الرسمي للمطاعم والمقاهي الوجبات السريعة والمقاهي والحلويات ومطابخ العالم واستراحات التراس.",
            allDining: "كل المطاعم",
          }
        : {
            expEyebrow: "Quatre facons de vivre Menara Mall",
            expTitle: "Tout ce que Marrakech aime, sous un meme toit",
            expLede: "Shopping, restaurants et cafes, Kidzo, Le Souk Al Madinah et services essentiels dans une destination climatisee.",
            browse: "Parcourir l'annuaire",
            featuredEyebrow: "Marques a la une",
            featuredTitle: "Boutiques et enseignes",
            featuredLede: "L'annuaire officiel Menara Mall rassemble mode, beaute, high-tech, services, jouets, Kidzo et Carrefour Market.",
            allShops: "Toutes les boutiques",
            diningEyebrow: "Coups de coeur restauration",
            diningTitle: "Une table pour chaque moment",
            diningLede: "L'annuaire officiel des restaurants et cafes propose restauration rapide, cafe, desserts, cuisines du monde et pauses en terrasse.",
            allDining: "Tous les restaurants",
          };
  const featuredBrands = brands.filter((b) => b.featured).slice(0, 6);
  const featuredDining = restaurants.filter((r) => r.featured).slice(0, 3);

  return (
    <>
      <ScrollProgress />
      <Hero locale={locale} />

      {/* Experience cards */}
      <section className="bg-ivory pb-24 pt-16 sm:pt-20 lg:pt-24">
        <Container>
          <SectionHeader
            eyebrow={copy.expEyebrow}
            title={copy.expTitle}
            lede={copy.expLede}
            action={
              <Button href="/shops" variant="outline" icon="arrow-right">
                {copy.browse}
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
            eyebrow={copy.featuredEyebrow}
            title={copy.featuredTitle}
            lede={copy.featuredLede}
            action={
              <Button href="/shops" variant="ghost" icon="arrow-right">
                {copy.allShops}
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
            eyebrow={copy.diningEyebrow}
            title={copy.diningTitle}
            lede={copy.diningLede}
            action={
              <Button href="/dining" variant="ghost" icon="arrow-right">
                {copy.allDining}
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
              <Badge tone="brand">{pt.home.kidzo.badge}</Badge>
              <h2
                className="mt-5 text-balance text-white"
                style={{ fontSize: "var(--text-title)" }}
              >
                {pt.home.kidzo.title}
              </h2>
              <p className="mt-5 max-w-lg text-white/70">
                {pt.home.kidzo.lede}
              </p>
              <ul className="mt-7 grid grid-cols-2 gap-4 text-sm">
                {(
                  [
                    { icon: "shield", text: pt.home.kidzo.features[0] },
                    { icon: "sparkles", text: pt.home.kidzo.features[1] },
                    { icon: "heart", text: pt.home.kidzo.features[2] },
                    { icon: "baby", text: pt.home.kidzo.features[3] },
                  ] as { icon: IconName; text: string }[]
                ).map((f) => (
                  <li
                    key={f.text}
                    className="flex items-center gap-3 text-white/80"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-brand-soft">
                      <Icon name={f.icon} size={17} />
                    </span>
                    {f.text}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/entertainment" locale={locale} variant="brand" icon="arrow-right">
                  {pt.home.kidzo.discover}
                </Button>
                <Button href="/contact" locale={locale} variant="light" icon="mail">
                  {pt.common.contactUs}
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
              <p className="eyebrow text-clay">{pt.home.souk.eyebrow}</p>
              <h2
                className="mt-4 text-balance text-charcoal"
                style={{ fontSize: "var(--text-title)" }}
              >
                {pt.home.souk.title}
              </h2>
              <p className="mt-5 max-w-lg text-stone">
                {pt.home.souk.lede}
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {pt.home.souk.tags.map((t) => (
                  <Badge key={t} tone="outline">
                    {t}
                  </Badge>
                ))}
              </div>
              <div className="mt-8">
                <Button href="/le-souk" locale={locale} variant="primary" icon="arrow-right">
                  {pt.home.souk.discover}
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
            eyebrow={pt.home.gallery.eyebrow}
            title={pt.home.gallery.title}
            lede={pt.home.gallery.lede}
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
              {pt.home.gallery.follow}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
