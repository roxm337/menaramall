"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Offer } from "@/lib/types";
import { ArtImage } from "@/components/ui/ArtImage";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { formatDateRange } from "@/lib/utils";
import { getLocaleFromPathname, getUiText, localizeHref } from "@/lib/i18n";
import { tr, offerContent } from "@/lib/i18n-content";

export function OfferCard({ offer }: { offer: Offer }) {
  const locale = getLocaleFromPathname(usePathname());
  const t = getUiText(locale);
  const copy = offerContent[offer.id]?.[locale];
  const title = copy?.title ?? offer.title;
  const description = copy?.description ?? offer.description;
  const href = offer.brandSlug ? `/shops/${offer.brandSlug}` : "/offers";
  return (
    <article className="lift group flex h-full flex-col overflow-hidden rounded-[var(--radius-xl2)] bg-white ring-1 ring-charcoal/8">
      <div className="relative">
        <ArtImage art={offer.heroArt} ratio="wide" rounded={false} scrim />
        <div className="absolute left-5 top-5">
          <Badge tone="clay">{tr(offer.category, locale)}</Badge>
        </div>
        <div className="absolute bottom-4 left-5 right-5">
          <p className="eyebrow text-gold-soft">{tr(offer.brand, locale)}</p>
          <h3 className="mt-1 text-2xl leading-tight text-white">{title}</h3>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="flex-1 text-sm leading-relaxed text-stone">{description}</p>
        <p className="mt-4 inline-flex items-center gap-1.5 text-xs text-stone">
          <Icon name="calendar" size={13} />
          {t.common.validFrom} {formatDateRange(offer.validFrom, offer.validUntil, locale)}
        </p>
        <Link
          href={localizeHref(href, locale)}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-clay"
        >
          {t.common.viewBrand}
          <Icon name="arrow-right" size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
