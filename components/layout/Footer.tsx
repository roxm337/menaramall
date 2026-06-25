import Link from "next/link";
import { site, footerNav, legalNav, mallHours, foodCourtHours, carrefourHours } from "@/lib/data/site";
import { HoursList } from "@/components/ui/OpeningHours";
import { Newsletter } from "@/components/Newsletter";
import { Logo } from "./Logo";
import { Icon, type IconName } from "@/components/ui/Icon";
import { getUiText, localizeHref, type Locale } from "@/lib/i18n";

const socials: { name: IconName; href: string; label: string }[] = [
  { name: "instagram", href: site.social.instagram, label: "Instagram" },
  { name: "facebook", href: site.social.facebook, label: "Facebook" },
  { name: "tiktok", href: site.social.tiktok, label: "TikTok" },
  { name: "youtube", href: site.social.youtube, label: "YouTube" },
].filter((s) => s.href);

const navLabelByHref = {
  "/shops": { fr: "Boutiques", en: "Shops", ar: "المتاجر" },
  "/dining": { fr: "Restaurants", en: "Dining", ar: "المطاعم" },
  "/entertainment": { fr: "Kidzo", en: "Kidzo", ar: "كيدزو" },
  "/le-souk": { fr: "Le Souk", en: "The Souk", ar: "السوق" },
  "/offers": { fr: "Offres", en: "Offers", ar: "العروض" },
  "/services": { fr: "Services", en: "Services", ar: "الخدمات" },
  "/search": { fr: "Recherche", en: "Search", ar: "البحث" },
  "/contact": { fr: "Contact", en: "Contact", ar: "اتصل بنا" },
  "/leasing": { fr: "Location & partenariats", en: "Leasing & partnerships", ar: "التأجير والشراكات" },
  "/leasing#media": { fr: "Medias & publicite", en: "Media & advertising", ar: "الإعلام والإعلانات" },
} as const;

function navLabel(label: string, href: string, locale: Locale) {
  return navLabelByHref[href as keyof typeof navLabelByHref]?.[locale] ?? label;
}

export function Footer({ locale = "fr" }: { locale?: Locale }) {
  const t = getUiText(locale);
  return (
    <footer className="bg-charcoal text-ivory">
      {/* Newsletter band */}
      <div className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-12">
          <div>
            <p className="eyebrow text-gold-soft">{t.footer.stayInformed}</p>
            <h2 className="mt-3 max-w-md text-3xl text-white sm:text-4xl">
              {t.footer.newsletterTitle}
            </h2>
          </div>
          <div className="lg:justify-self-end lg:max-w-md lg:w-full">
            <Newsletter tone="light" />
            <p className="mt-3 text-xs text-white/45">
              {t.footer.newsletterLegal}
            </p>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:px-12">
        <div className="lg:col-span-4">
          <Logo tone="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
            {site.description}
          </p>
          <div className="mt-6 flex gap-2">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/8 text-white/80 transition-colors hover:bg-gold hover:text-charcoal"
              >
                <Icon name={s.name} size={18} />
              </a>
            ))}
          </div>
        </div>

        <nav className="lg:col-span-2" aria-label={t.footer.explore}>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40">{t.footer.explore}</h3>
          <ul className="mt-4 space-y-2.5">
            {footerNav.explore.map((l) => (
              <li key={l.href}>
                <Link href={localizeHref(l.href, locale)} className="text-sm text-white/70 transition-colors hover:text-gold-soft">
                  {navLabel(l.label, l.href, locale)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="lg:col-span-2" aria-label={t.footer.essentials}>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40">{t.footer.essentials}</h3>
          <ul className="mt-4 space-y-2.5">
            {footerNav.essentials.map((l) => (
              <li key={l.href}>
                <Link href={localizeHref(l.href, locale)} className="text-sm text-white/70 transition-colors hover:text-gold-soft">
                  {navLabel(l.label, l.href, locale)}
                </Link>
              </li>
            ))}
            {footerNav.business.slice(0, 1).map((l) => (
              <li key={l.href}>
                <Link href={localizeHref(l.href, locale)} className="text-sm text-white/70 transition-colors hover:text-gold-soft">
                  {navLabel(l.label, l.href, locale)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-4">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40">{t.footer.findUs}</h3>
          <address className="mt-4 not-italic text-sm leading-relaxed text-white/70">
            {site.address.street}
            {site.address.district ? `, ${site.address.district}` : ""}
            <br />
            {site.address.city}
            {site.address.postalCode ? ` ${site.address.postalCode}` : ""}, {site.address.country}
          </address>
          <div className="mt-4 space-y-2 text-sm text-white/70">
            {site.phone && (
              <>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 hover:text-gold-soft">
                  <Icon name="phone" size={15} /> {site.phone}
                </a>
                <br />
              </>
            )}
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 hover:text-gold-soft">
              <Icon name="mail" size={15} /> {site.email}
            </a>
          </div>
          <div className="mt-5 rounded-2xl bg-white/5 p-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-white/40">
              {t.footer.boutiques}
            </p>
            <HoursList hours={mallHours} className="[&_dt]:text-white/55 [&_dd]:text-white [&>div]:border-white/10" />
              <p className="mb-2 mt-5 text-xs font-semibold uppercase tracking-widest text-white/40">
              {t.footer.foodCourt}
            </p>
            <HoursList hours={foodCourtHours} className="[&_dt]:text-white/55 [&_dd]:text-white [&>div]:border-white/10" />
            <p className="mb-2 mt-5 text-xs font-semibold uppercase tracking-widest text-white/40">
              Carrefour Market
            </p>
            <HoursList hours={carrefourHours} className="[&_dt]:text-white/55 [&_dd]:text-white [&>div]:border-white/10" />
          </div>
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p>© {new Date().getFullYear()} {site.name}, {site.city}. {t.footer.rights}</p>
          <ul className="flex flex-wrap gap-4">
            {legalNav.map((l) => (
              <li key={l.label}>
                <Link href={localizeHref(l.href, locale)} className="transition-colors hover:text-white/80">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
