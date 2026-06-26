"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname, getLocaleDir } from "@/lib/i18n";
import { getPageText } from "@/lib/i18n-pages";

/**
 * Keeps <html lang/dir> in sync with the route's locale (so RTL applies on
 * direct navigation to /ar/…), and renders the localized skip link.
 */
export function LocaleHtmlSync() {
  const locale = getLocaleFromPathname(usePathname());

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = getLocaleDir(locale);
  }, [locale]);

  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-charcoal focus:px-5 focus:py-3 focus:text-sm focus:text-ivory"
    >
      {getPageText(locale).common.skipToContent}
    </a>
  );
}
