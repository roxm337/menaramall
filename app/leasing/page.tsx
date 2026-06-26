import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ArtImage } from "@/components/ui/ArtImage";
import { Icon, type IconName } from "@/components/ui/Icon";
import { ContactForm } from "@/components/forms/ContactForm";
import { getPageText } from "@/lib/i18n-pages";
import type { Locale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Location & partenariats — Developpez votre marque avec Menara Mall",
  description:
    "Associez-vous a Menara Mall Marrakech. Location commerciale, pop-up stores et solutions media dans une destination lifestyle premium sur l'avenue Mohammed VI.",
  alternates: { canonical: "/leasing" },
};

const whyIcons: IconName[] = ["map-pin", "star", "heart", "compass"];
const oppData: { id: string; icon: IconName }[] = [
  { id: "retail", icon: "bag" },
  { id: "popups", icon: "sparkles" },
  { id: "media", icon: "play" },
];

export default function LeasingPage({
  locale = "fr",
}: {
  locale?: Locale;
}) {
  const l = getPageText(locale).leasing;
  return (
    <>
      <PageHero
        eyebrow={l.heroEyebrow}
        title={l.heroTitle}
        lede={l.heroLede}
        art="Interieur architectural du mall, galerie premium, lumiere inspiree"
        tone="charcoal"
        crumbs={[{ label: l.crumb }]}
      >
        <div className="flex flex-wrap gap-3">
          <Button href="#enquire" variant="gold" icon="arrow-right">{l.btnInfo}</Button>
          <Button href="#" variant="light" icon="download">{l.btnBrochure}</Button>
        </div>
      </PageHero>

      {/* Stats */}
      <section className="bg-charcoal py-16 text-ivory">
        <Container>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {l.stats.map((s) => (
              <div key={s.label} className="text-center sm:text-left">
                <p className="font-display text-4xl text-gold-soft sm:text-5xl">{s.value}</p>
                <p className="mt-2 text-sm text-white/60">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs text-white/40">
            {l.statsNote}
          </p>
        </Container>
      </section>

      {/* Why */}
      <section className="bg-ivory py-24">
        <Container>
          <SectionHeader eyebrow={l.whyEyebrow} title={l.whyTitle} />
          <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {l.why.map((w, index) => (
              <RevealItem key={w.title}>
                <div className="h-full rounded-[var(--radius-xl2)] bg-white p-7 ring-1 ring-charcoal/8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-palm/10 text-palm">
                    <Icon name={whyIcons[index]} size={22} />
                  </span>
                  <h3 className="mt-5 text-xl text-charcoal">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone">{w.text}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Opportunities */}
      <section className="bg-cream py-24">
        <Container>
          <SectionHeader
            eyebrow={l.oppsEyebrow}
            title={l.oppsTitle}
            lede={l.oppsLede}
          />
          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {oppData.map((o, index) => (
              <div key={o.id} id={o.id} className="scroll-mt-24">
                <Reveal>
                  <div className="flex gap-5 rounded-[var(--radius-xl2)] bg-white p-7 ring-1 ring-charcoal/8">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-clay/10 text-clay">
                      <Icon name={o.icon} size={22} />
                    </span>
                    <div>
                      <h3 className="text-2xl text-charcoal">{l.opps[index].title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-stone">{l.opps[index].text}</p>
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Visitor profile band */}
      <section className="bg-ivory py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <ArtImage art="Clients elegants dans une galerie lumineuse, scene lifestyle" ratio="card" tone="sand" />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="eyebrow text-clay">{l.visitorEyebrow}</p>
              <h2 className="mt-3 text-charcoal" style={{ fontSize: "var(--text-title)" }}>
                {l.visitorTitle}
              </h2>
              <p className="mt-5 text-stone">
                {l.visitorPara}
              </p>
              <ul className="mt-6 space-y-3">
                {l.visitorBullets.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-stone">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-palm/12 text-palm">
                      <Icon name="check" size={14} />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Enquiry */}
      <section id="enquire" className="bg-cream py-24 scroll-mt-20">
        <Container size="narrow">
          <SectionHeader
            align="center"
            eyebrow={l.enquiryEyebrow}
            title={l.enquiryTitle}
            lede={l.enquiryLede}
          />
          <div className="mt-10">
            <ContactForm defaultTopic="Location & partenariats" />
          </div>
        </Container>
      </section>
    </>
  );
}
