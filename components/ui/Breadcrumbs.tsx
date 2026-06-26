"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "./Icon";
import { getLocaleFromPathname, localizeHref } from "@/lib/i18n";
import { getPageText } from "@/lib/i18n-pages";

export interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const locale = getLocaleFromPathname(usePathname());
  const c = getPageText(locale).common;
  return (
    <nav aria-label={c.breadcrumbAria}>
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-stone">
        <li>
          <Link href={localizeHref("/", locale)} className="link-underline hover:text-charcoal">
            {c.home}
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <Icon name="chevron-right" size={13} className="text-stone/60" />
            {item.href && i < items.length - 1 ? (
              <Link href={localizeHref(item.href, locale)} className="link-underline hover:text-charcoal">
                {item.label}
              </Link>
            ) : (
              <span className="text-charcoal" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
