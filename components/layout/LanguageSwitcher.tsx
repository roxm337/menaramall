"use client";

import { useEffect, useRef, useState } from "react";
import { locales } from "@/lib/data/site";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";

/**
 * Language switcher. The information architecture is multilingual-ready
 * (FR / EN / AR). This control demonstrates RTL readiness by flipping the
 * document direction for Arabic and persisting the choice. Full localized
 * routing (e.g. /fr, /ar) is the next integration step with next-intl.
 */
export function LanguageSwitcher({ tone = "dark" }: { tone?: "dark" | "light" }) {
  type Code = (typeof locales)[number]["code"];
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<Code>("en");
  const ref = useRef<HTMLDivElement>(null);

  // Restore the persisted preference once on mount (client-only API).
  useEffect(() => {
    const saved = localStorage.getItem("mm-locale") as Code | null;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing from a browser-only store on mount
    if (saved) setActive(saved);
  }, []);

  // Apply + persist the active locale. DOM/document writes belong in an effect.
  useEffect(() => {
    const dir = locales.find((l) => l.code === active)?.dir ?? "ltr";
    document.documentElement.lang = active;
    document.documentElement.dir = dir;
    localStorage.setItem("mm-locale", active);
  }, [active]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const choose = (code: Code) => {
    setActive(code);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Change language"
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-medium transition-colors",
          tone === "light"
            ? "text-white/90 hover:bg-white/10"
            : "text-charcoal hover:bg-charcoal/5",
        )}
      >
        <Icon name="globe" size={16} />
        <span className="uppercase">{active}</span>
        <Icon name="chevron-down" size={13} className={cn("transition-transform", open && "rotate-180")} />
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-2 w-40 overflow-hidden rounded-2xl bg-white p-1.5 shadow-xl ring-1 ring-charcoal/10"
        >
          {locales.map((l) => (
            <li key={l.code}>
              <button
                role="option"
                aria-selected={active === l.code}
                onClick={() => choose(l.code)}
                className={cn(
                  "flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm transition-colors hover:bg-ivory",
                  active === l.code ? "text-clay" : "text-charcoal",
                )}
              >
                <span>{l.label}</span>
                {active === l.code && <Icon name="check" size={15} />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
