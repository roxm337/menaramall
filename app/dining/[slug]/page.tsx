import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { restaurants, getRestaurant, relatedRestaurants } from "@/lib/data/restaurants";
import { site } from "@/lib/data/site";
import { summarizeHours } from "@/lib/hours";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArtImage } from "@/components/ui/ArtImage";
import { Icon } from "@/components/ui/Icon";
import { OpenBadge, HoursList } from "@/components/ui/OpeningHours";
import { Reveal } from "@/components/ui/Reveal";
import { Gallery } from "@/components/Gallery";
import { MapPlaceholder } from "@/components/MapPlaceholder";
import { RestaurantCard } from "@/components/cards/RestaurantCard";

export function generateStaticParams() {
  return restaurants.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const r = getRestaurant(slug);
  if (!r) return { title: "Restaurant introuvable" };
  return {
    title: `${r.name} — ${r.cuisine}`,
    description: r.description,
    alternates: { canonical: `/dining/${r.slug}` },
    openGraph: { title: `${r.name} · ${site.name}`, description: r.description, locale: "fr_FR" },
  };
}

export default async function RestaurantDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const r = getRestaurant(slug);
  if (!r) notFound();

  const related = relatedRestaurants(r);
  const gallery = r.gallery ?? [
    `Salle de ${r.name}, lumiere d'ambiance et tables dressees`,
    `Plat signature de ${r.name}, ${r.cuisine}, gros plan stylise`,
    `Details de ${r.name}, vaisselle et textures`,
    `Clients profitant de ${r.name}, moment chaleureux`,
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: r.name,
    servesCuisine: r.cuisine,
    description: r.description,
    url: `${site.url}/dining/${r.slug}`,
    telephone: r.phone,
    openingHours: summarizeHours(r.openingHours),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressCountry: "MA",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-charcoal pt-[var(--header-h,4.5rem)]">
        <ArtImage art={r.heroArt} src={r.imageSrc} ratio="hero" rounded={false} className="!absolute inset-0 h-full w-full !rounded-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/45 to-charcoal/30" />
        <Container className="relative z-10 flex min-h-[46vh] flex-col justify-end py-12">
          <div className="mb-6 [&_*]:!text-white/70 [&_a:hover]:!text-white">
            <Breadcrumbs items={[{ label: "Restaurants", href: "/dining" }, { label: r.name }]} />
          </div>
          <Reveal>
            <div className="flex flex-wrap gap-2">
              <Badge tone="gold">{r.type}</Badge>
              {r.tags?.map((t) => (
                <Badge key={t} tone="outline" className="!border-white/30 !text-white/80">{t}</Badge>
              ))}
            </div>
            <p className="mt-4 eyebrow text-gold-soft">{r.cuisine}</p>
            <h1 className="mt-2 text-white" style={{ fontSize: "var(--text-hero)", lineHeight: "1.02" }}>
              {r.name}
            </h1>
            <div className="mt-4 rounded-full bg-white/10 px-4 py-2 backdrop-blur w-fit">
              <OpenBadge hours={r.openingHours} className="!text-white" />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-ivory py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Reveal>
                <p className="eyebrow text-clay">L'experience</p>
                <h2 className="mt-3 text-3xl text-charcoal">Ce qui vous attend</h2>
                <p className="mt-5 text-lg leading-relaxed text-stone">{r.description}</p>
              </Reveal>
              <Reveal className="mt-12">
                <h3 className="mb-5 text-2xl text-charcoal">Galerie</h3>
                <Gallery items={gallery} tone="clay" />
              </Reveal>
              <Reveal className="mt-12">
                <h3 className="mb-5 text-2xl text-charcoal">Le trouver dans le mall</h3>
                <MapPlaceholder locationLabel={r.locationLabel} floor={r.floor} />
              </Reveal>
            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-[calc(var(--header-h,4.5rem)+1.5rem)] rounded-[var(--radius-xl2)] bg-white p-6 ring-1 ring-charcoal/8">
                <h3 className="text-xl text-charcoal">Reservation & infos</h3>
                <dl className="mt-4 space-y-4 text-sm">
                  <div className="flex gap-3">
                    <Icon name="utensils" size={18} className="mt-0.5 shrink-0 text-clay" />
                    <div><dt className="text-stone">Cuisine</dt><dd className="font-medium text-charcoal">{r.cuisine}</dd></div>
                  </div>
                  <div className="flex gap-3">
                    <Icon name="map-pin" size={18} className="mt-0.5 shrink-0 text-clay" />
                    <div><dt className="text-stone">Emplacement</dt><dd className="font-medium text-charcoal">{r.locationLabel}</dd></div>
                  </div>
                  {r.phone && (
                    <div className="flex gap-3">
                      <Icon name="phone" size={18} className="mt-0.5 shrink-0 text-clay" />
                      <div><dt className="text-stone">Telephone</dt>
                        <dd><a href={`tel:${r.phone.replace(/\s/g, "")}`} className="font-medium text-charcoal link-underline">{r.phone}</a></dd>
                      </div>
                    </div>
                  )}
                  <div className="flex gap-3">
                    <Icon name="clock" size={18} className="mt-0.5 shrink-0 text-clay" />
                    <div className="w-full"><dt className="mb-2 text-stone">Horaires</dt><dd><HoursList hours={r.openingHours} /></dd></div>
                  </div>
                </dl>
                <div className="mt-5 space-y-2 border-t border-charcoal/8 pt-5">
                  {r.reservationUrl && (
                    <Button href={r.reservationUrl} variant="primary" icon="phone" className="w-full">Reserver une table</Button>
                  )}
                  {r.menuUrl && (
                    <Button href={r.menuUrl} variant="outline" icon="utensils" className="w-full">Voir le menu</Button>
                  )}
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="bg-cream py-20">
          <Container>
            <h2 className="text-3xl text-charcoal">D'autres adresses a decouvrir</h2>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((x) => (
                <RestaurantCard key={x.id} restaurant={x} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
