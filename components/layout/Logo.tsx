import Link from "next/link";
import { cn } from "@/lib/utils";

/** Wordmark logo — an elegant serif lockup with a small zellige diamond. */
export function Logo({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="Menara Mall — home"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span
        className={cn(
          "grid h-9 w-9 place-items-center rounded-lg transition-colors",
          tone === "light" ? "bg-white/12 text-gold-soft" : "bg-charcoal text-gold-soft",
        )}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 2l10 10-10 10L2 12z" stroke="currentColor" strokeWidth="1.3" />
          <path d="M12 7l5 5-5 5-5-5z" stroke="currentColor" strokeWidth="1.3" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-xl font-medium tracking-tight",
            tone === "light" ? "text-white" : "text-charcoal",
          )}
        >
          Menara
        </span>
        <span
          className={cn(
            "text-[0.55rem] font-semibold tracking-[0.32em]",
            tone === "light" ? "text-white/60" : "text-stone",
          )}
        >
          MALL · MARRAKECH
        </span>
      </span>
    </Link>
  );
}
