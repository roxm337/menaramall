import Link from "next/link";
import { Icon } from "./Icon";

export interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-stone">
        <li>
          <Link href="/" className="link-underline hover:text-charcoal">
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <Icon name="chevron-right" size={13} className="text-stone/60" />
            {item.href && i < items.length - 1 ? (
              <Link href={item.href} className="link-underline hover:text-charcoal">
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
