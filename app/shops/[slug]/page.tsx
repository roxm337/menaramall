import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { brands, getBrand, relatedBrands } from "@/lib/data/brands";
import { site } from "@/lib/data/site";
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
import { BrandCard } from "@/components/cards/BrandCard";

export function generateStaticParams() {
  return brands.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrand(slug);
  if (!brand) return { title: "Boutique introuvable" };
  return {
    title: `${brand.name} — ${brand.category}`,
    description: brand.description,
    alternates: { canonical: `/shops/${brand.slug}` },
    openGraph: { title: `${brand.name} · ${site.name}`, description: brand.description, locale: "fr_FR" },
  };
}

export default async function ShopDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const brand = getBrand(slug);
  if (!brand) notFound();

  const related = relatedBrands(brand);
  const gallery = brand.gallery ?? [
    `Vitrine ${brand.name}, presentation soignee`,
    `Interieur ${brand.name}, details produits et styling`,
    `Gros plan ${brand.category}, matieres et textures premium`,
    `Client en train de decouvrir ${brand.name}, scene lifestyle`,
  ];

  return (
    <>
      {/* Detail hero */}
      <section className="relative isolate overflow-hidden bg-charcoal pt-[var(--header-h,4.5rem)]">
        <ArtImage
          art={brand.heroArt}
          src={brand.imageSrc}
          ratio="hero"
          rounded={false}
          className="!absolute inset-0 h-full w-full !rounded-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/45 to-charcoal/30" />
        <Container className="relative z-10 flex min-h-[46vh] flex-col justify-end py-12">
          <div className="mb-6 [&_*]:!text-white/70 [&_a:hover]:!text-white">
            <Breadcrumbs items={[{ label: "Boutiques", href: "/shops" }, { label: brand.name }]} />
          </div>
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="grid h-16 w-16 place-items-center rounded-2xl bg-white/10 font-display text-2xl text-gold-soft ring-1 ring-white/20 backdrop-blur">
                {brand.monogram}
              </span>
              <div className="flex flex-wrap gap-2">
                <Badge tone="gold">{brand.category}</Badge>
                <Badge tone="outline" className="!border-white/30 !text-white/80">{brand.floor}</Badge>
              </div>
            </div>
            <h1 className="mt-5 text-white" style={{ fontSize: "var(--text-hero)", lineHeight: "1.02" }}>
              {brand.name}
            </h1>
            <div className="mt-4 rounded-full bg-white/10 px-4 py-2 backdrop-blur w-fit">
              <OpenBadge hours={brand.openingHours} className="!text-white" />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Body */}
      <section className="bg-ivory py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main */}
            <div className="lg:col-span-2">
              <Reveal>
                <p className="eyebrow text-clay">A propos de la marque</p>
                <h2 className="mt-3 text-3xl text-charcoal">Un regard plus precis</h2>
                <p className="mt-5 text-lg leading-relaxed text-stone">{brand.description}</p>
                {brand.tags && brand.tags.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {brand.tags.map((t) => (
                      <Badge key={t} tone="neutral">{t}</Badge>
                    ))}
                  </div>
                )}
              </Reveal>

              <Reveal className="mt-12">
                <h3 className="mb-5 text-2xl text-charcoal">Galerie</h3>
                <Gallery items={gallery} />
              </Reveal>

              <Reveal className="mt-12">
                <h3 className="mb-5 text-2xl text-charcoal">La trouver dans le mall</h3>
                <MapPlaceholder locationLabel={brand.locationLabel} floor={brand.floor} />
              </Reveal>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-[calc(var(--header-h,4.5rem)+1.5rem)] space-y-4">
                <div className="rounded-[var(--radius-xl2)] bg-white p-6 ring-1 ring-charcoal/8">
                  <h3 className="text-xl text-charcoal">Informations pratiques</h3>
                  <dl className="mt-4 space-y-4 text-sm">
                    <div className="flex gap-3">
                      <Icon name="map-pin" size={18} className="mt-0.5 shrink-0 text-clay" />
                      <div>
                        <dt className="text-stone">Emplacement</dt>
                        <dd className="font-medium text-charcoal">{brand.locationLabel}</dd>
                      </div>
                    </div>
                    {brand.phone && (
                      <div className="flex gap-3">
                        <Icon name="phone" size={18} className="mt-0.5 shrink-0 text-clay" />
                        <div>
                          <dt className="text-stone">Telephone</dt>
                          <dd>
                            <a href={`tel:${brand.phone.replace(/\s/g, "")}`} className="font-medium text-charcoal link-underline">
                              {brand.phone}
                            </a>
                          </dd>
                        </div>
                      </div>
                    )}
                    <div className="flex gap-3">
                      <Icon name="clock" size={18} className="mt-0.5 shrink-0 text-clay" />
                      <div className="w-full">
                        <dt className="mb-2 text-stone">Horaires</dt>
                        <dd><HoursList hours={brand.openingHours} /></dd>
                      </div>
                    </div>
                  </dl>

                  {(brand.website || brand.instagram) && (
                    <div className="mt-5 flex gap-2 border-t border-charcoal/8 pt-5">
                      {brand.website && (
                        <a href={brand.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-charcoal/15 px-4 py-2 text-xs font-medium text-charcoal hover:border-charcoal">
                          <Icon name="globe" size={15} /> Site web
                        </a>
                      )}
                      {brand.instagram && (
                        <a href={brand.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-charcoal/15 px-4 py-2 text-xs font-medium text-charcoal hover:border-charcoal">
                          <Icon name="instagram" size={15} /> Instagram
                        </a>
                      )}
                    </div>
                  )}

                  <div className="mt-5">
                    <Button
                      href={`https://www.google.com/maps/dir/?api=1&destination=${site.geo.lat},${site.geo.lng}`}
                      variant="primary"
                      icon="map-pin"
                      className="w-full"
                    >
                      Itineraire
                    </Button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-cream py-20">
          <Container>
            <h2 className="text-3xl text-charcoal">Vous pourriez aussi aimer</h2>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((b) => (
                <BrandCard key={b.id} brand={b} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
