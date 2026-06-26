"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Icon, type IconName } from "@/components/ui/Icon";
import { getLocaleFromPathname, getUiText, localizeHref, stripLocalePrefix, type Locale } from "@/lib/i18n";

const items: { label: string; href: string; icon: IconName }[] = [
  { label: "Boutiques", href: "/shops", icon: "bag" },
  { label: "Resto", href: "/dining", icon: "utensils" },
  { label: "Kidzo", href: "/entertainment", icon: "play" },
  { label: "Souk", href: "/le-souk", icon: "compass" },
];

/** Sticky bottom quick-navigation for mobile. */
export function MobileQuickNav({ locale }: { locale?: Locale }) {
  const pathname = usePathname();
  const activeLocale = locale ?? getLocaleFromPathname(pathname);
  const t = getUiText(activeLocale);
  const labels = {
    "/shops": t.nav.shops,
    "/dining": activeLocale === "en" ? "Food" : activeLocale === "ar" ? "مطاعم" : "Resto",
    "/entertainment": t.nav.entertainment,
    "/le-souk": activeLocale === "en" ? "Souk" : activeLocale === "ar" ? "سوق" : "Souk",
  } as const;
  const path = stripLocalePrefix(pathname);
  return (
    <nav
      aria-label={t.nav.quickNav}
      className="fixed inset-x-0 bottom-0 z-30 border-t border-charcoal/8 bg-ivory/90 backdrop-blur-md lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <ul className="mx-auto flex max-w-md items-stretch justify-around">
        {items.map((item) => {
          const active = path.startsWith(item.href);
          return (
            <li key={item.href} className="flex-1">
              <Link
                href={localizeHref(item.href, activeLocale)}
                className={cn(
                  "flex flex-col items-center gap-1 py-2.5 text-[0.65rem] font-medium transition-colors",
                  active ? "text-clay" : "text-stone",
                )}
              >
                <Icon name={item.icon} size={21} />
                {labels[item.href as keyof typeof labels] ?? item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
