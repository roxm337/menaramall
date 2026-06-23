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

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
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
  const tone = transparent ? "light" : "dark";

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          transparent
            ? "bg-transparent"
            : "border-b border-charcoal/8 bg-ivory/85 backdrop-blur-md",
        )}
      >
        <div className="mx-auto flex h-[var(--header-h,4.5rem)] max-w-[96rem] items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
          <Logo tone={tone} />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {primaryNav.map((item) => {
              const active = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    transparent
                      ? "text-white/85 hover:bg-white/10 hover:text-white"
                      : "text-charcoal/80 hover:bg-charcoal/5 hover:text-charcoal",
                    active && (transparent ? "text-white" : "text-clay"),
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full transition-colors",
                transparent ? "text-white hover:bg-white/10" : "text-charcoal hover:bg-charcoal/5",
              )}
            >
              <Icon name="search" size={20} />
            </button>
            <div className="hidden sm:block">
              <LanguageSwitcher tone={tone} />
            </div>
            <div className="hidden lg:block">
              <Button href="/visit" variant={transparent ? "light" : "primary"} size="sm" icon="map-pin">
                Plan Your Visit
              </Button>
            </div>
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden",
                transparent ? "text-white hover:bg-white/10" : "text-charcoal hover:bg-charcoal/5",
              )}
            >
              <Icon name={menuOpen ? "close" : "menu"} size={24} />
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
              <nav className="flex flex-col" aria-label="Mobile">
                {primaryNav.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * i + 0.05, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center justify-between border-b border-charcoal/8 py-4 font-display text-3xl text-charcoal"
                    >
                      {item.label}
                      <Icon name="arrow-up-right" size={22} className="text-clay" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-8 grid grid-cols-2 gap-3">
                <Button href="/visit" variant="primary" icon="map-pin" className="w-full">
                  Plan Visit
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
                  Search
                </Button>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-charcoal/8 pt-6">
                <span className="text-sm text-stone">Language</span>
                <LanguageSwitcher />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
