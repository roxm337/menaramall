import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ArtImage } from "@/components/ui/ArtImage";
import { Icon, type IconName } from "@/components/ui/Icon";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Leasing & Partnerships — Grow With Menara Mall",
  description:
    "Partner with Menara Mall Marrakech. Retail leasing, pop-up opportunities, event activations and media advertising at a premium lifestyle destination on Avenue Mohammed VI.",
  alternates: { canonical: "/leasing" },
};

const stats = [
  { value: "Prime", label: "Location on Avenue Mohammed VI" },
  { value: "All ages", label: "Families, locals & tourists" },
  { value: "3 floors", label: "Of curated retail & dining" },
  { value: "Year-round", label: "Footfall from a tourism hub" },
];

const why: { icon: IconName; title: string; text: string }[] = [
  { icon: "map-pin", title: "Landmark address", text: "A prominent position on one of Marrakech's most prestigious avenues, in the Hivernage hotel district." },
  { icon: "star", title: "Premium positioning", text: "A lifestyle destination that attracts discerning local and international shoppers." },
  { icon: "heart", title: "Loyal family audience", text: "Anchored by Carrefour, Kidzo and leading brands that bring families back week after week." },
  { icon: "compass", title: "Tourism gateway", text: "Steps from major hotels, drawing a steady international visitor base year-round." },
];

const opportunities: { id: string; icon: IconName; title: string; text: string }[] = [
  { id: "retail", icon: "bag", title: "Retail leasing", text: "Flagship and in-line units across fashion, beauty, lifestyle and services — join a carefully curated tenant mix." },
  { id: "popups", icon: "sparkles", title: "Pop-up opportunities", text: "Short-term retail moments and seasonal activations in high-visibility concourse locations." },
  { id: "events", icon: "ticket", title: "Event activations", text: "Brand experiences, launches and sampling in our central court and terrace spaces." },
  { id: "media", icon: "play", title: "Media & advertising", text: "Digital screens, atrium branding and high-impact placements to reach our visitors." },
];

export default function LeasingPage() {
  return (
    <>
      <PageHero
        eyebrow="Leasing · Partnerships"
        title="Grow your brand at the heart of Marrakech"
        lede="Menara Mall brings together discerning shoppers, families and international visitors in a premium setting on Avenue Mohammed VI — the ideal stage for your brand."
        art="Architectural mall interior, premium retail concourse, aspirational light"
        tone="charcoal"
        crumbs={[{ label: "Leasing" }]}
      >
        <div className="flex flex-wrap gap-3">
          <Button href="#enquire" variant="gold" icon="arrow-right">Enquire now</Button>
          <Button href="#" variant="light" icon="download">Download brochure</Button>
        </div>
      </PageHero>

      {/* Stats */}
      <section className="bg-charcoal py-16 text-ivory">
        <Container>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center sm:text-left">
                <p className="font-display text-4xl text-gold-soft sm:text-5xl">{s.value}</p>
                <p className="mt-2 text-sm text-white/60">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs text-white/40">
            Indicative positioning — request the media pack for verified footfall and demographic data. [VERIFY]
          </p>
        </Container>
      </section>

      {/* Why */}
      <section className="bg-ivory py-24">
        <Container>
          <SectionHeader eyebrow="Why Menara Mall" title="A location that works as hard as you do" />
          <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {why.map((w) => (
              <RevealItem key={w.title}>
                <div className="h-full rounded-[var(--radius-xl2)] bg-white p-7 ring-1 ring-charcoal/8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-palm/10 text-palm">
                    <Icon name={w.icon} size={22} />
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
            eyebrow="Opportunities"
            title="Ways to partner with us"
            lede="Whether you're opening a flagship, testing a concept or launching a campaign, there's a format to match your ambition."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {opportunities.map((o) => (
              <div key={o.id} id={o.id} className="scroll-mt-24">
                <Reveal>
                  <div className="flex gap-5 rounded-[var(--radius-xl2)] bg-white p-7 ring-1 ring-charcoal/8">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-clay/10 text-clay">
                      <Icon name={o.icon} size={22} />
                    </span>
                    <div>
                      <h3 className="text-2xl text-charcoal">{o.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-stone">{o.text}</p>
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
              <ArtImage art="Stylish shoppers in a bright mall concourse, lifestyle candid" ratio="card" tone="sand" />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="eyebrow text-clay">Our visitors</p>
              <h2 className="mt-3 text-charcoal" style={{ fontSize: "var(--text-title)" }}>
                Who you&rsquo;ll reach
              </h2>
              <p className="mt-5 text-stone">
                Menara Mall welcomes a vibrant mix of Marrakech families, young professionals and
                international tourists — visitors who value quality, experience and a warm,
                premium environment. It&rsquo;s an audience that comes to spend the day, not just
                to shop.
              </p>
              <ul className="mt-6 space-y-3">
                {["Affluent local families and residents", "International tourists from nearby hotels", "Young, brand-aware professionals", "Repeat visitors drawn by dining & leisure"].map((t) => (
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
            eyebrow="Let's talk"
            title="Start the conversation"
            lede="Tell us about your brand and what you're looking for — our leasing team will be in touch."
          />
          <div className="mt-10">
            <ContactForm defaultTopic="Leasing & partnerships" />
          </div>
        </Container>
      </section>
    </>
  );
}
