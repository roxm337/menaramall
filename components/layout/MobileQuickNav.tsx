"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Icon, type IconName } from "@/components/ui/Icon";

const items: { label: string; href: string; icon: IconName }[] = [
  { label: "Shop", href: "/shops", icon: "bag" },
  { label: "Dine", href: "/dining", icon: "utensils" },
  { label: "Play", href: "/entertainment", icon: "play" },
  { label: "Events", href: "/events", icon: "calendar" },
];

/** Sticky bottom quick-navigation for mobile. */
export function MobileQuickNav() {
  const pathname = usePathname();
  return (
    <nav
      aria-label="Quick navigation"
      className="fixed inset-x-0 bottom-0 z-30 border-t border-charcoal/8 bg-ivory/90 backdrop-blur-md lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <ul className="mx-auto flex max-w-md items-stretch justify-around">
        {items.map((item) => {
          const active = pathname.startsWith(item.href);
          return (
            <li key={item.href} className="flex-1">
              <Link
                href={item.href}
                className={cn(
                  "flex flex-col items-center gap-1 py-2.5 text-[0.65rem] font-medium transition-colors",
                  active ? "text-clay" : "text-stone",
                )}
              >
                <Icon name={item.icon} size={21} />
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
