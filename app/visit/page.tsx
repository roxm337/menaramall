import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { HoursList } from "@/components/ui/OpeningHours";
import { Icon, type IconName } from "@/components/ui/Icon";
import { site, mallHours } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Visit Us — Hours, Parking & Directions",
  description:
    "Plan your visit to Menara Mall on Avenue Mohammed VI, Marrakech — opening hours, parking, directions, taxi and transport access, accessibility and visitor services.",
  alternates: { canonical: "/visit" },
};

const access: { icon: IconName; title: string; text: string }[] = [
  { icon: "car", title: "By car", text: "Generous covered and open-air parking with direct mall access from Avenue Mohammed VI. [VERIFY rates]" },
  { icon: "phone", title: "By taxi", text: "Petits taxis serve the mall directly; a dedicated drop-off point sits at the main entrance." },
  { icon: "bus", title: "Public transport", text: "City bus routes stop nearby along Avenue Mohammed VI. [VERIFY routes & stops]" },
  { icon: "accessibility", title: "Step-free access", text: "Level entrances, lifts to every floor and accessible parking bays close to the doors." },
];

const faqs = [
  { q: "What are the opening hours?", a: "Menara Mall is open daily from 10:00, with most stores closing at 22:00 (later on weekends). Carrefour and selected dining venues keep extended hours. Hours may vary during Ramadan and public holidays. [VERIFY]" },
  { q: "Is parking available and how much does it cost?", a: "Yes — covered and open-air parking is available with direct access to the mall. Current rates and capacity are confirmed on site. [VERIFY]" },
  { q: "Is the mall accessible for wheelchairs and pushchairs?", a: "Absolutely. The mall offers step-free entrances, lifts to all floors, accessible restrooms and complimentary wheelchairs on request at the Information Desk." },
  { q: "Are there family facilities?", a: "Yes. You'll find baby-changing rooms, family restrooms and stroller-friendly routes throughout, plus the Kidzo family entertainment zone." },
  { q: "Is there a prayer room?", a: "Dedicated prayer rooms with ablution facilities are available for men and women. [VERIFY location]" },
  { q: "How do I get there from the city centre?", a: "Menara Mall is on Avenue Mohammed VI in the Hivernage area — a short taxi ride from the Medina, Gueliz and most major hotels." },
];

const mapSrc = `https://www.google.com/maps?q=${site.geo.lat},${site.geo.lng}(${encodeURIComponent(site.name)})&z=15&output=embed`;

export default function VisitPage() {
  return (
    <>
      <PageHero
        eyebrow="Plan Your Visit"
        title="Everything you need for a smooth visit"
        lede="Opening hours, parking, directions and services — all in one place. Menara Mall sits on Avenue Mohammed VI, minutes from the heart of Marrakech."
        art="Golden-hour exterior of the mall, palms and modern facade, welcoming entrance"
        tone="sand"
        crumbs={[{ label: "Visit" }]}
      >
        <Button href="/services" variant="light" icon="info">Visitor services</Button>
      </PageHero>

      {/* Key facts + map */}
      <section className="bg-ivory py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <Reveal>
              <div className="overflow-hidden rounded-[var(--radius-xl2)] ring-1 ring-charcoal/10">
                <iframe
                  src={mapSrc}
                  title={`Map showing ${site.name}, ${site.city}`}
                  className="aspect-[4/3] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="mt-3 text-xs text-stone/70">Map location is approximate. [VERIFY exact pin]</p>
            </Reveal>

            <Reveal delay={0.1} className="space-y-5">
              <div className="rounded-[var(--radius-xl2)] bg-white p-6 ring-1 ring-charcoal/8">
                <h2 className="text-xl text-charcoal">Address</h2>
                <address className="mt-3 not-italic leading-relaxed text-stone">
                  {site.address.street}, {site.address.district}
                  <br />
                  {site.address.city} {site.address.postalCode}, {site.address.country}
                </address>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Button
                    href={`https://www.google.com/maps/dir/?api=1&destination=${site.geo.lat},${site.geo.lng}`}
                    variant="primary"
                    size="sm"
                    icon="map-pin"
                  >
                    Get directions
                  </Button>
                  <Button href={`tel:${site.phone.replace(/\s/g, "")}`} variant="outline" size="sm" icon="phone">
                    Call the mall
                  </Button>
                </div>
              </div>

              <div className="rounded-[var(--radius-xl2)] bg-white p-6 ring-1 ring-charcoal/8">
                <h2 className="flex items-center gap-2 text-xl text-charcoal">
                  <Icon name="clock" size={20} className="text-clay" /> Opening hours
                </h2>
                <HoursList hours={mallHours} className="mt-4" />
                <p className="mt-3 text-xs text-stone/70">Hours may vary on public holidays and during Ramadan. [VERIFY]</p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Getting here */}
      <section className="bg-cream py-20">
        <Container>
          <SectionHeader eyebrow="Getting here" title="Easy to reach, easy to enjoy" />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {access.map((a) => (
              <div key={a.title} className="rounded-[var(--radius-xl2)] bg-white p-6 ring-1 ring-charcoal/8">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-clay/10 text-clay">
                  <Icon name={a.icon} size={22} />
                </span>
                <h3 className="mt-4 text-xl text-charcoal">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">{a.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-ivory py-20">
        <Container size="narrow">
          <SectionHeader eyebrow="Good to know" title="Frequently asked questions" />
          <div className="mt-10">
            <Accordion items={faqs} defaultOpen={0} />
          </div>
          <div className="mt-10 rounded-[var(--radius-xl2)] bg-palm/8 p-6 text-center ring-1 ring-palm/15">
            <p className="text-charcoal">Still have a question?</p>
            <div className="mt-4 flex justify-center">
              <Button href="/contact" variant="primary" icon="arrow-right">Contact us</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
