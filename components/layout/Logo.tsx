import Link from "next/link";
import { cn } from "@/lib/utils";

/** Wordmark logo — an elegant serif lockup with a small zellige diamond. */
export function Logo({
  tone = "dark",
  compact = false,
  className,
}: {
  tone?: "dark" | "light";
  compact?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="Menara Mall — home"
      className={cn(
        "group inline-flex items-center transition-all duration-500",
        compact ? "gap-2" : "gap-2.5",
        className,
      )}
    >
      <span
        className={cn(
          "grid place-items-center rounded-lg transition-all duration-500",
          compact ? "h-8.5 w-8.5" : "h-9 w-9",
          tone === "light" ? "bg-white/12 text-gold-soft" : "bg-charcoal text-gold-soft",
        )}
      >
        <svg width={compact ? 17 : 18} height={compact ? 17 : 18} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 2l10 10-10 10L2 12z" stroke="currentColor" strokeWidth="1.3" />
          <path d="M12 7l5 5-5 5-5-5z" stroke="currentColor" strokeWidth="1.3" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display font-medium tracking-tight transition-all duration-500",
            compact ? "text-[1.08rem]" : "text-xl",
            tone === "light" ? "text-white" : "text-charcoal",
          )}
        >
          Menara
        </span>
        <span
          className={cn(
            "overflow-hidden font-semibold tracking-[0.32em] transition-all duration-500",
            compact ? "max-h-0 translate-y-[-2px] opacity-0" : "max-h-4 translate-y-0 opacity-100",
            compact ? "text-[0.48rem]" : "text-[0.55rem]",
            tone === "light" ? "text-white/60" : "text-stone",
          )}
        >
          MALL · MARRAKECH
        </span>
      </span>
    </Link>
  );
}
