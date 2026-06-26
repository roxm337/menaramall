import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { services } from "@/lib/data/services";
import { getPageText } from "@/lib/i18n-pages";
import { serviceContent } from "@/lib/i18n-content";
import type { Locale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Services — Tout pour une visite confortable",
  description:
    "Les services visiteurs de Menara Mall Marrakech : parking, securite, point information, services famille, salles de priere, accessibilite, Wi-Fi, distributeurs, objets trouves et sanitaires.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage({
  locale = "fr",
}: {
  locale?: Locale;
}) {
  const sv = getPageText(locale).services;
  return (
    <>
      <PageHero
        eyebrow={sv.heroEyebrow}
        title={sv.heroTitle}
        lede={sv.heroLede}
        art="Conciergerie elegante et point information du mall, lumiere accueillante"
        tone="palm"
        crumbs={[{ label: sv.crumb }]}
      />
      <section className="bg-ivory py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow={sv.sectionEyebrow}
            title={sv.sectionTitle}
            lede={sv.sectionLede}
          />
          <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const c = serviceContent[s.id]?.[locale] ?? { title: s.title, description: s.description, location: s.location };
              return (
              <RevealItem key={s.id}>
                <div className="lift h-full rounded-[var(--radius-xl2)] bg-white p-7 ring-1 ring-charcoal/8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-clay/10 text-clay">
                    <Icon name={s.icon as IconName} size={22} />
                  </span>
                  <h3 className="mt-5 text-2xl text-charcoal">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone">{c.description}</p>
                  <p className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-stone">
                    <Icon name="map-pin" size={13} /> {c.location}
                  </p>
                </div>
              </RevealItem>
              );
            })}
          </RevealGroup>

          <div className="mt-14 rounded-[var(--radius-xl2)] bg-charcoal p-8 text-ivory sm:p-10">
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl text-white">{sv.helpTitle}</h2>
                <p className="mt-2 max-w-md text-sm text-white/70">
                  {sv.helpText}
                </p>
              </div>
              <div className="flex gap-3">
                <Button href="/shops" locale={locale} variant="gold" icon="bag">{getPageText(locale).common.viewShops}</Button>
                <Button href="/contact" locale={locale} variant="light" icon="phone">{getPageText(locale).common.contactUs}</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
