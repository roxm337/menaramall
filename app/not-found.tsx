"use client";

import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { getLocaleFromPathname, localizeHref } from "@/lib/i18n";
import { getPageText } from "@/lib/i18n-pages";

const icons: IconName[] = ["bag", "utensils", "compass", "info"];

export default function NotFound() {
  const locale = getLocaleFromPathname(usePathname());
  const nf = getPageText(locale).notFound;
  return (
    <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden bg-charcoal pt-[var(--header-h,4.5rem)] text-ivory">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#1f3a9e,#2a4bc0_45%,#0f6b5f)]" />
      <div className="zellige absolute inset-0 opacity-[0.12] mix-blend-overlay" />
      <div className="absolute inset-0 bg-charcoal/55" />
      <Container size="narrow" className="relative z-10 text-center">
        <p className="font-display text-[clamp(5rem,18vw,11rem)] leading-none text-white/90">404</p>
        <h1 className="mt-2 text-3xl text-white sm:text-4xl">{nf.title}</h1>
        <p className="mx-auto mt-4 max-w-md text-white/70">
          {nf.lede}
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/" locale={locale} variant="gold" icon="arrow-right">{nf.home}</Button>
        </div>
        <ul className="mx-auto mt-10 flex max-w-md flex-wrap justify-center gap-3">
          {nf.links.map((l, i) => (
            <li key={l.href}>
              <a
                href={localizeHref(l.href, locale)}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-sm text-white/85 transition-colors hover:bg-white/10"
              >
                <Icon name={icons[i]} size={16} /> {l.label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
