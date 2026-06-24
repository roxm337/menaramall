"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { searchAll } from "@/lib/search";
import { ArtImage } from "@/components/ui/ArtImage";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";

const SUGGESTIONS = ["Zara", "Le Souk", "Cafe", "Enfants", "Carrefour", "Terrasse"];

export function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const results = useMemo(() => searchAll(q).slice(0, 6), [q]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 60);
    } else {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- reset query when the overlay is dismissed
      setQ("");
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!q.trim()) return;
    router.push(`/search?q=${encodeURIComponent(q.trim())}`);
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-charcoal/55 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: -28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -28, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-0 max-h-full overflow-y-auto bg-ivory px-5 pb-10 pt-6 sm:px-8 lg:px-12"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mx-auto max-w-3xl">
              <div className="flex items-center justify-between">
                <span className="eyebrow text-clay">Rechercher dans Menara Mall</span>
                <button
                  onClick={onClose}
                  aria-label="Fermer la recherche"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-charcoal hover:bg-charcoal/5"
                >
                  <Icon name="close" size={22} />
                </button>
              </div>

              <form onSubmit={submit} className="mt-5 flex items-center gap-3 border-b-2 border-charcoal/15 pb-4 focus-within:border-clay">
                <Icon name="search" size={26} className="text-stone" />
                <input
                  ref={inputRef}
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Rechercher des boutiques, restaurants, offres..."
                  className="w-full bg-transparent font-display text-2xl text-charcoal outline-none placeholder:text-stone/60 sm:text-3xl"
                  aria-label="Requete de recherche"
                />
              </form>

              {!q && (
                <div className="mt-6">
                  <p className="text-xs text-stone">Recherches populaires</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {SUGGESTIONS.map((s) => (
                      <button
                        key={s}
                        onClick={() => setQ(s)}
                        className="rounded-full border border-charcoal/15 px-4 py-1.5 text-sm text-charcoal transition-colors hover:border-clay hover:text-clay"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {q && (
                <div className="mt-6 space-y-2">
                  {results.length === 0 && (
                    <p className="py-8 text-center text-sm text-stone">
                      Aucun resultat pour “{q}”. Essayez une autre recherche.
                    </p>
                  )}
                  {results.map((r) => (
                    <Link
                      key={r.href + r.title}
                      href={r.href}
                      onClick={onClose}
                      className="flex items-center gap-4 rounded-2xl p-2.5 transition-colors hover:bg-white"
                    >
                      <ArtImage art={r.art} ratio="square" className="h-14 w-14 shrink-0" />
                      <span className="min-w-0 flex-1">
                        <span className="block truncate font-medium text-charcoal">{r.title}</span>
                        <span className="block truncate text-xs text-stone">{r.subtitle}</span>
                      </span>
                      <Badge tone="outline">{r.type}</Badge>
                    </Link>
                  ))}
                  {results.length > 0 && (
                    <button
                      onClick={submit}
                      className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-clay"
                    >
                      Voir tous les resultats <Icon name="arrow-right" size={15} />
                    </button>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
