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
  title: "Location & partenariats — Developpez votre marque avec Menara Mall",
  description:
    "Associez-vous a Menara Mall Marrakech. Location commerciale, pop-up stores et solutions media dans une destination lifestyle premium sur l'avenue Mohammed VI.",
  alternates: { canonical: "/leasing" },
};

const stats = [
  { value: "Premium", label: "Adresse sur l'avenue Mohammed VI" },
  { value: "Tous publics", label: "Familles, residents et touristes" },
  { value: "3 niveaux", label: "De shopping et restauration" },
  { value: "Toute l'annee", label: "Flux porte par un pole touristique" },
];

const why: { icon: IconName; title: string; text: string }[] = [
  { icon: "map-pin", title: "Adresse emblématique", text: "Une position de choix sur l'une des avenues les plus prestigieuses de Marrakech, au coeur du quartier hotelier de l'Hivernage." },
  { icon: "star", title: "Positionnement premium", text: "Une destination lifestyle qui attire une clientele locale et internationale exigeante." },
  { icon: "heart", title: "Audience familiale fidele", text: "Portee par Carrefour, Kidzo et des enseignes fortes qui font revenir les familles semaine apres semaine." },
  { icon: "compass", title: "Porte d'entree touristique", text: "A quelques pas des grands hotels, avec un flux regulier de visiteurs internationaux toute l'annee." },
];

const opportunities: { id: string; icon: IconName; title: string; text: string }[] = [
  { id: "retail", icon: "bag", title: "Location commerciale", text: "Cellules flagship et boutiques lineaires en mode, beaute, lifestyle et services : rejoignez un mix enseignes soigneusement compose." },
  { id: "popups", icon: "sparkles", title: "Opportunites pop-up", text: "Formats courts et activations saisonnieres dans des zones de passage a forte visibilite." },
  { id: "media", icon: "play", title: "Medias & publicite", text: "Ecrans digitaux, habillage d'atrium et dispositifs impactants pour toucher nos visiteurs." },
];

export default function LeasingPage() {
  return (
    <>
      <PageHero
        eyebrow="Location · Partenariats"
        title="Faites grandir votre marque au coeur de Marrakech"
        lede="Menara Mall rassemble une clientele exigeante, des familles et des visiteurs internationaux dans un cadre premium sur l'avenue Mohammed VI : la scene ideale pour votre marque."
        art="Interieur architectural du mall, galerie premium, lumiere inspiree"
        tone="charcoal"
        crumbs={[{ label: "Location & partenariats" }]}
      >
        <div className="flex flex-wrap gap-3">
          <Button href="#enquire" variant="gold" icon="arrow-right">Demander des informations</Button>
          <Button href="#" variant="light" icon="download">Telecharger la brochure</Button>
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
            Positionnement indicatif : demandez le media pack pour les donnees de frequentation et de profil visiteur verifiees. [A VERIFIER]
          </p>
        </Container>
      </section>

      {/* Why */}
      <section className="bg-ivory py-24">
        <Container>
          <SectionHeader eyebrow="Pourquoi Menara Mall" title="Une adresse qui travaille autant que vous" />
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
            eyebrow="Opportunites"
            title="Les formats de partenariat possibles"
            lede="Que vous ouvriez un flagship, testiez un concept ou lanciez une campagne, il existe une formule a la hauteur de votre ambition."
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
              <ArtImage art="Clients elegants dans une galerie lumineuse, scene lifestyle" ratio="card" tone="sand" />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="eyebrow text-clay">Nos visiteurs</p>
              <h2 className="mt-3 text-charcoal" style={{ fontSize: "var(--text-title)" }}>
                Qui vous allez toucher
              </h2>
              <p className="mt-5 text-stone">
                Menara Mall accueille un melange vivant de familles marrakchies, de jeunes actifs
                et de touristes internationaux, des visiteurs sensibles a la qualite, a l'experience
                et a un environnement premium et chaleureux. C'est une audience qui vient passer
                du temps sur place, pas seulement faire des achats.
              </p>
              <ul className="mt-6 space-y-3">
                {["Familles locales et residents au pouvoir d'achat eleve", "Touristes internationaux sejournant dans les hotels voisins", "Jeunes actifs attentifs aux marques", "Visiteurs recurrents attires par la restauration et les loisirs"].map((t) => (
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
            eyebrow="Parlons-en"
            title="Ouvrons la conversation"
            lede="Parlez-nous de votre marque et de vos besoins : notre equipe location reviendra vers vous."
          />
          <div className="mt-10">
            <ContactForm defaultTopic="Location & partenariats" />
          </div>
        </Container>
      </section>
    </>
  );
}
