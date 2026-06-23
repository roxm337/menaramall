import { cn } from "@/lib/utils";

/** Small pill used for tags, categories and floor labels. */
export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: React.ReactNode;
  tone?: "neutral" | "gold" | "clay" | "palm" | "outline";
  className?: string;
}) {
  const tones = {
    neutral: "bg-charcoal/6 text-charcoal/80",
    gold: "bg-gold/15 text-gold",
    clay: "bg-clay/12 text-clay",
    palm: "bg-palm/12 text-palm",
    outline: "border border-charcoal/15 text-charcoal/70",
  } as const;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-3 py-1 text-[0.68rem] font-medium tracking-wide",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
