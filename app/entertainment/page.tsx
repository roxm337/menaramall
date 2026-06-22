import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArtImage } from "@/components/ui/ArtImage";
import { Icon, type IconName } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Entertainment & Play — Family Fun at Kidzo",
  description:
    "Family entertainment at Menara Mall Marrakech — Kidzo rides and games, soft play, activities and birthday celebrations. A premium, safe day out for all ages.",
  alternates: { canonical: "/entertainment" },
};

const activities: { icon: IconName; title: string; text: string }[] = [
  { icon: "play", title: "Arcade & Games", text: "Classic arcades, redemption games and prizes for every score." },
  { icon: "sparkles", title: "Rides & Attractions", text: "Gentle rides and spinning favourites for younger explorers." },
  { icon: "baby", title: "Soft Play", text: "Cushioned climbing, slides and ball pits for toddlers and tots." },
  { icon: "heart", title: "Birthday Parties", text: "Tailored packages with hosts, cake and a private celebration zone." },
  { icon: "star", title: "Seasonal Shows", text: "Live characters, storytelling and holiday programming." },
  { icon: "compass", title: "Discovery Workshops", text: "Hands-on creative and science activities that teach as they play." },
];

const safety = [
  "Trained, friendly supervision across all play zones",
  "Secure check-in and wristband system for children",
  "Sanitised equipment and regular safety inspections",
  "Comfortable parent seating with clear sightlines",
];

export default function EntertainmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Entertainment · Play"
        title="Where little adventures and big smiles begin"
        lede="A premium family playground at the heart of Menara Mall — Kidzo brings rides, games and imaginative play together in a safe, joyful space for all ages."
        art="Families enjoying a bright entertainment zone, children laughing, playful colour"
        tone="gold"
        crumbs={[{ label: "Entertainment" }]}
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/contact" variant="gold" icon="ticket">Plan a family visit</Button>
          <Button href="/contact" variant="light" icon="heart">Birthday inquiries</Button>
        </div>
      </PageHero>

      {/* Kidzo intro */}
      <section className="bg-ivory py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <Badge tone="clay">Kidzo · KidZone</Badge>
              <h2 className="mt-5 text-balance text-charcoal" style={{ fontSize: "var(--text-title)" }}>
                A world of imaginative play, beautifully done
              </h2>
              <p className="mt-5 text-stone">
                Kidzo is Menara Mall&rsquo;s dedicated family entertainment destination — thoughtfully
                designed to spark curiosity and delight. From the youngest visitors in soft play
                to older children chasing high scores in the arcade, every corner is built for fun
                that feels safe, clean and welcoming.
              </p>
              <p className="mt-4 text-stone">
                Parents can relax close by, knowing the space is supervised and secure — making it
                easy to turn an afternoon into a treasured family memory.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="grid grid-cols-2 gap-4">
              <ArtImage art="Child delighted on a colourful ride, motion and joy" ratio="tall" tone="gold" className="mt-8" />
              <ArtImage art="Soft play area with cushioned shapes, bright and clean" ratio="tall" tone="clay" />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Activities */}
      <section className="bg-cream py-24">
        <Container>
          <SectionHeader eyebrow="Things to do" title="Games, rides & activities for every age" align="center" />
          <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {activities.map((a) => (
              <RevealItem key={a.title}>
                <div className="lift h-full rounded-[var(--radius-xl2)] bg-white p-7 ring-1 ring-charcoal/8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-clay/10 text-clay">
                    <Icon name={a.icon} size={22} />
                  </span>
                  <h3 className="mt-5 text-2xl text-charcoal">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone">{a.text}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Safety + gallery */}
      <section className="bg-ivory py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <p className="eyebrow text-clay">Safety & visitor info</p>
              <h2 className="mt-3 text-charcoal" style={{ fontSize: "var(--text-title)" }}>
                Peace of mind, built in
              </h2>
              <ul className="mt-7 space-y-4">
                {safety.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-charcoal">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-palm/12 text-palm">
                      <Icon name="check" size={15} />
                    </span>
                    <span className="text-sm leading-relaxed text-stone">{s}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-stone/70">
                Heights, age guidance and session details are confirmed on site. [VERIFY with operator]
              </p>
            </Reveal>
            <Reveal delay={0.1} className="grid grid-cols-2 gap-4">
              <ArtImage art="Family laughing together at the arcade, candid warmth" ratio="square" tone="gold" />
              <ArtImage art="Birthday celebration with balloons and cake, festive" ratio="square" tone="clay" />
              <ArtImage art="Toddler in soft play, gentle focus" ratio="square" tone="sand" />
              <ArtImage art="Older kids high-fiving by a game machine" ratio="square" tone="gold" />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-20 text-center text-ivory">
        <Container size="narrow">
          <Reveal>
            <h2 className="text-balance text-white" style={{ fontSize: "var(--text-title)" }}>
              Ready for a day the whole family will remember?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-white/70">
              Plan your visit, ask about group rates, or enquire about a birthday celebration —
              we&rsquo;d love to help.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href="/visit" variant="gold" icon="map-pin">Plan your visit</Button>
              <Button href="/contact" variant="light" icon="ticket">Make an inquiry</Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
