import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";

const links: { label: string; href: string; icon: IconName }[] = [
  { label: "Boutiques", href: "/shops", icon: "bag" },
  { label: "Restaurants", href: "/dining", icon: "utensils" },
  { label: "Le Souk", href: "/le-souk", icon: "compass" },
  { label: "Services", href: "/services", icon: "info" },
];

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden bg-charcoal pt-[var(--header-h,4.5rem)] text-ivory">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#1f3a9e,#2a4bc0_45%,#0f6b5f)]" />
      <div className="zellige absolute inset-0 opacity-[0.12] mix-blend-overlay" />
      <div className="absolute inset-0 bg-charcoal/55" />
      <Container size="narrow" className="relative z-10 text-center">
        <p className="font-display text-[clamp(5rem,18vw,11rem)] leading-none text-white/90">404</p>
        <h1 className="mt-2 text-3xl text-white sm:text-4xl">Cette page s'est perdue dans le souk</h1>
        <p className="mx-auto mt-4 max-w-md text-white/70">
          La page que vous recherchez est introuvable. Revenons au coeur de Menara Mall.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/" variant="gold" icon="arrow-right">Retour a l'accueil</Button>
        </div>
        <ul className="mx-auto mt-10 flex max-w-md flex-wrap justify-center gap-3">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-sm text-white/85 transition-colors hover:bg-white/10"
              >
                <Icon name={l.icon} size={16} /> {l.label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
