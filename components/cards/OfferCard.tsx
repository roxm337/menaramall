import Link from "next/link";
import type { Offer } from "@/lib/types";
import { ArtImage } from "@/components/ui/ArtImage";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { formatDateRange } from "@/lib/utils";

export function OfferCard({ offer }: { offer: Offer }) {
  const href = offer.brandSlug ? `/shops/${offer.brandSlug}` : "/offers";
  return (
    <article className="lift group flex h-full flex-col overflow-hidden rounded-[var(--radius-xl2)] bg-white ring-1 ring-charcoal/8">
      <div className="relative">
        <ArtImage art={offer.heroArt} ratio="wide" rounded={false} scrim />
        <div className="absolute left-5 top-5">
          <Badge tone="clay">{offer.category}</Badge>
        </div>
        <div className="absolute bottom-4 left-5 right-5">
          <p className="eyebrow text-gold-soft">{offer.brand}</p>
          <h3 className="mt-1 text-2xl leading-tight text-white">{offer.title}</h3>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="flex-1 text-sm leading-relaxed text-stone">{offer.description}</p>
        <p className="mt-4 inline-flex items-center gap-1.5 text-xs text-stone">
          <Icon name="calendar" size={13} />
          Valable du {formatDateRange(offer.validFrom, offer.validUntil)}
        </p>
        <Link
          href={href}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-clay"
        >
          Voir la marque
          <Icon name="arrow-right" size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
