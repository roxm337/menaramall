import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Services — Tout pour une visite confortable",
  description:
    "Les services visiteurs de Menara Mall Marrakech : parking, securite, point information, services famille, salles de priere, accessibilite, Wi-Fi, distributeurs, objets trouves et sanitaires.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services visiteurs"
        title="Des services pensees pour chaque instant"
        lede="Du parking aux salles de priere, des equipements famille a l'accessibilite, tout est prevu pour rendre votre visite simple et confortable."
        art="Conciergerie elegante et point information du mall, lumiere accueillante"
        tone="palm"
        crumbs={[{ label: "Services" }]}
      />
      <section className="bg-ivory py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="A votre service"
            title="La pour vous accompagner tout au long de la journee"
            lede="Notre equipe et nos equipements sont presents a chaque etage. Certains details sont confirmes sur place."
          />
          <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <RevealItem key={s.id}>
                <div className="lift h-full rounded-[var(--radius-xl2)] bg-white p-7 ring-1 ring-charcoal/8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-clay/10 text-clay">
                    <Icon name={s.icon as IconName} size={22} />
                  </span>
                  <h3 className="mt-5 text-2xl text-charcoal">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone">{s.description}</p>
                  <p className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-stone">
                    <Icon name="map-pin" size={13} /> {s.location}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <div className="mt-14 rounded-[var(--radius-xl2)] bg-charcoal p-8 text-ivory sm:p-10">
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl text-white">Besoin d'aide pendant votre visite ?</h2>
                <p className="mt-2 max-w-md text-sm text-white/70">
                  Rendez-vous au point information au rez-de-chaussee ou contactez-nous : notre equipe se fera un plaisir de vous aider.
                </p>
              </div>
              <div className="flex gap-3">
                <Button href="/shops" variant="gold" icon="bag">Voir les boutiques</Button>
                <Button href="/contact" variant="light" icon="phone">Nous contacter</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
