import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";
import { Icon, type IconName } from "@/components/ui/Icon";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Contact — Parlons de votre demande",
  description:
    "Contactez Menara Mall Marrakech pour toute demande generale, location ou media. Retrouvez notre e-mail, adresse, carte et reseaux sociaux.",
  alternates: { canonical: "/contact" },
};

const socials: { name: IconName; href: string; label: string }[] = [
  { name: "instagram", href: site.social.instagram, label: "Instagram" },
  { name: "facebook", href: site.social.facebook, label: "Facebook" },
  { name: "tiktok", href: site.social.tiktok, label: "TikTok" },
  { name: "youtube", href: site.social.youtube, label: "YouTube" },
].filter((s) => s.href);

const mapSrc = `https://www.google.com/maps?q=${site.geo.lat},${site.geo.lng}(${encodeURIComponent(site.name)})&z=15&output=embed`;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Nous sommes a votre ecoute"
        lede="Que vous prepariez une visite, envisagiez un partenariat ou ayez une question, l'equipe Menara Mall est la pour vous aider."
        art="Entree chaleureuse du mall a l'heure doree, detail de conciergerie"
        tone="clay"
        crumbs={[{ label: "Contact" }]}
      />

      <section className="bg-ivory py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Info column */}
            <div className="lg:col-span-2">
              <Reveal>
                <p className="eyebrow text-clay">Entrer en contact</p>
                <h2 className="mt-3 text-3xl text-charcoal">Joignez directement notre equipe</h2>
                <p className="mt-4 text-stone">
                  Choisissez le type de demande adapte ou utilisez les coordonnees ci-dessous. Nous repondons generalement sous deux jours ouvrables.
                </p>

                <ul className="mt-8 space-y-5">
                  <li className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-clay/10 text-clay"><Icon name="map-pin" size={20} /></span>
                    <div>
                      <p className="text-sm text-stone">Adresse</p>
                      <address className="not-italic font-medium text-charcoal">
                        {site.address.street}, {site.address.city}
                      </address>
                    </div>
                  </li>
                  {site.phone && (
                    <li className="flex gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-clay/10 text-clay"><Icon name="phone" size={20} /></span>
                      <div>
                        <p className="text-sm text-stone">Telephone</p>
                        <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="font-medium text-charcoal link-underline">{site.phone}</a>
                      </div>
                    </li>
                  )}
                  <li className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-clay/10 text-clay"><Icon name="mail" size={20} /></span>
                    <div>
                      <p className="text-sm text-stone">E-mail</p>
                      <a href={`mailto:${site.email}`} className="font-medium text-charcoal link-underline">{site.email}</a>
                    </div>
                  </li>
                </ul>

                <div className="mt-8">
                  <p className="text-sm text-stone">Suivez-nous</p>
                  <div className="mt-3 flex gap-2">
                    {socials.map((s) => (
                      <a
                        key={s.name}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-charcoal/5 text-charcoal transition-colors hover:bg-charcoal hover:text-ivory"
                      >
                        <Icon name={s.name} size={19} />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="mt-8 overflow-hidden rounded-[var(--radius-xl2)] ring-1 ring-charcoal/10">
                  <iframe
                    src={mapSrc}
                    title={`Carte montrant ${site.name}`}
                    className="aspect-video w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Reveal>
            </div>

            {/* Form column */}
            <div className="lg:col-span-3">
              <Reveal delay={0.1}>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
