"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { primaryNav } from "@/lib/data/site";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { SearchOverlay } from "./SearchOverlay";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { getLocaleFromPathname, localizeHref, stripLocalePrefix, getUiText, type Locale } from "@/lib/i18n";

export function Header({ locale }: { locale?: Locale }) {
  const pathname = usePathname();
  const activeLocale = locale ?? getLocaleFromPathname(pathname);
  const path = stripLocalePrefix(pathname);
  const isHome = path === "/";
  const t = getUiText(activeLocale);
  const navLabels = {
    "/shops": t.nav.shops,
    "/dining": activeLocale === "en" ? "Dining" : activeLocale === "ar" ? "المطاعم" : "Restaurants",
    "/entertainment": t.nav.entertainment,
    "/le-souk": t.nav.souk,
  } as const;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = isHome && !scrolled && !menuOpen;
  const compact = scrolled && !menuOpen;
  const tone = transparent ? "light" : "dark";

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 px-3 transition-all duration-500 sm:px-5 lg:px-6",
          compact ? "pt-1.5 sm:pt-2" : "pt-0",
        )}
      >
        <div
          className={cn(
            "mx-auto flex items-center justify-between transition-all duration-500",
            compact
              ? "h-14 max-w-[76rem] gap-3 rounded-[1rem] border border-charcoal/8 bg-ivory/95 px-3.5 shadow-[0_18px_40px_-30px_rgba(23,23,23,0.55)] backdrop-blur-xl sm:px-4.5"
              : "max-w-[96rem] gap-4",
            transparent
              ? "h-[var(--header-h,4.5rem)] bg-transparent px-2 sm:px-3"
              : !compact
                ? "h-[var(--header-h,4.5rem)] border-b border-charcoal/8 bg-ivory/85 px-2 backdrop-blur-md sm:px-3"
                : "",
          )}
        >
          <Logo tone={tone} compact={compact} />

          <nav className={cn("hidden items-center gap-1 lg:flex", compact && "gap-0.5")} aria-label={t.nav.mainNav}>
            {primaryNav.map((item) => {
              const active = path.startsWith(item.href);
              const localizedHref = localizeHref(item.href, activeLocale);
              return (
                <Link
                  key={item.href}
                  href={localizedHref}
                  className={cn(
                    "rounded-full font-medium transition-all duration-500",
                    compact ? "px-3 py-1.5 text-[0.82rem]" : "px-4 py-2 text-sm",
                    transparent
                      ? "text-white/85 hover:bg-white/10 hover:text-white"
                      : "text-charcoal/80 hover:bg-charcoal/5 hover:text-charcoal",
                    active && (transparent ? "text-white" : "text-clay"),
                  )}
                >
                  {navLabels[item.href as keyof typeof navLabels] ?? item.label}
                </Link>
              );
            })}
          </nav>

          <div className={cn("flex items-center gap-1 sm:gap-2", compact && "sm:gap-1.5")}>
            <button
              onClick={() => setSearchOpen(true)}
              aria-label={t.nav.search}
              className={cn(
                "flex items-center justify-center rounded-full transition-all duration-500",
                compact ? "h-9 w-9" : "h-10 w-10",
                transparent ? "text-white hover:bg-white/10" : "text-charcoal hover:bg-charcoal/5",
              )}
            >
              <Icon name="search" size={compact ? 19 : 20} />
            </button>
            <div className="hidden sm:block transition-all duration-500">
              <LanguageSwitcher locale={activeLocale} tone={tone} />
            </div>
            <div className="hidden lg:block transition-all duration-500">
              <Button href="/contact" locale={activeLocale} variant={transparent ? "light" : "primary"} size="sm" icon="mail" className={compact ? "px-3.5 py-1.5 text-[0.79rem]" : ""}>
                {t.nav.contact}
              </Button>
            </div>
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={menuOpen}
              className={cn(
                "flex items-center justify-center rounded-full transition-all duration-500 lg:hidden",
                compact ? "h-9 w-9" : "h-10 w-10",
                transparent ? "text-white hover:bg-white/10" : "text-charcoal hover:bg-charcoal/5",
              )}
            >
              <Icon name={menuOpen ? "close" : "menu"} size={compact ? 22 : 24} />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 overflow-y-auto bg-ivory pt-[var(--header-h,4.5rem)] lg:hidden"
          >
            <div className="px-5 py-8 sm:px-8">
              <nav className="flex flex-col" aria-label={t.nav.mobileNav}>
                {primaryNav.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * i + 0.05, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={localizeHref(item.href, activeLocale)}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center justify-between border-b border-charcoal/8 py-4 font-display text-3xl text-charcoal"
                    >
                      {navLabels[item.href as keyof typeof navLabels] ?? item.label}
                      <Icon name="arrow-up-right" size={22} className="text-clay" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-8 grid grid-cols-2 gap-3">
                <Button href="/contact" locale={activeLocale} variant="primary" icon="mail" className="w-full">
                  {t.nav.contact}
                </Button>
                <Button
                  variant="outline"
                  icon="search"
                  className="w-full"
                  onClick={() => {
                    setMenuOpen(false);
                    setSearchOpen(true);
                  }}
                >
                  {t.nav.search}
                </Button>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-charcoal/8 pt-6">
                <span className="text-sm text-stone">{t.nav.language}</span>
                <LanguageSwitcher locale={activeLocale} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <SearchOverlay locale={activeLocale} open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
