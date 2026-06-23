import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Services — Everything for a Comfortable Visit",
  description:
    "Visitor services at Menara Mall Marrakech — parking, security, information desk, family services, prayer rooms, accessibility, Wi-Fi, ATMs, lost & found and restrooms.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Visitor Services"
        title="Thoughtful services at every turn"
        lede="From parking and prayer rooms to family facilities and accessibility, every detail is designed to make your visit effortless and comfortable."
        art="Elegant mall concierge and information desk, warm welcoming light"
        tone="palm"
        crumbs={[{ label: "Services" }]}
      />
      <section className="bg-ivory py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="At your service"
            title="Here to help, throughout your day"
            lede="Our team and facilities are on hand across every floor. Some details are confirmed on site — look for items marked for verification."
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
                <h2 className="text-2xl text-white">Need something during your visit?</h2>
                <p className="mt-2 max-w-md text-sm text-white/70">
                  Visit the Information Desk on the Ground Floor or reach out — our team is happy to help.
                </p>
              </div>
              <div className="flex gap-3">
                <Button href="/visit" variant="gold" icon="map-pin">Plan your visit</Button>
                <Button href="/contact" variant="light" icon="phone">Contact us</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
