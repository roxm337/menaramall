import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

/** Editorial section header: eyebrow label, serif title, optional lede + action. */
export function SectionHeader({
  eyebrow,
  title,
  lede,
  align = "left",
  action,
  className,
  tone = "dark",
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
  action?: React.ReactNode;
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <div
      className={cn(
        "flex w-full flex-col gap-6",
        align === "center"
          ? "items-center text-center"
          : "md:flex-row md:items-end md:justify-between",
        className,
      )}
    >
      <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto")}>
        {eyebrow && (
          <div
            className={cn(
              "eyebrow mb-4 flex items-center gap-3",
              align === "center" && "justify-center",
              tone === "light" ? "text-gold-soft" : "text-clay",
            )}
          >
            <span className="h-px w-8 bg-current opacity-60" />
            {eyebrow}
          </div>
        )}
        <h2
          className={cn(
            "text-balance",
            tone === "light" ? "text-ivory" : "text-charcoal",
          )}
          style={{ fontSize: "var(--text-title)", lineHeight: "var(--text-title--line-height)" }}
        >
          {title}
        </h2>
        {lede && (
          <p
            className={cn(
              "mt-5 text-base leading-relaxed sm:text-lg",
              tone === "light" ? "text-ivory/75" : "text-stone",
            )}
          >
            {lede}
          </p>
        )}
      </Reveal>
      {action && <Reveal delay={0.1} className="shrink-0">{action}</Reveal>}
    </div>
  );
}
