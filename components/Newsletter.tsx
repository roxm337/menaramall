"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import { getLocaleFromPathname } from "@/lib/i18n";
import { getPageText } from "@/lib/i18n-pages";

/**
 * Newsletter signup. Client-side validation + optimistic success state.
 * Wire `onSubmit` to a CMS/ESP endpoint (Mailchimp, Klaviyo…) at integration.
 */
export function Newsletter({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const n = getPageText(getLocaleFromPathname(usePathname())).newsletter;
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "done" | "error">("idle");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) {
      setStatus("error");
      return;
    }
    // TODO: POST to newsletter endpoint.
    setStatus("done");
  };

  const light = tone === "light";

  if (status === "done") {
    return (
      <div
        className={cn(
          "flex items-center gap-3 rounded-full px-5 py-4 text-sm",
          light ? "bg-white/10 text-white" : "bg-palm/10 text-palm",
        )}
      >
        <Icon name="check" size={18} />
        {n.success}
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate>
      <div
        className={cn(
          "flex items-center gap-2 rounded-full border p-1.5 transition-colors",
          light
            ? "border-white/20 bg-white/5 focus-within:border-white/50"
            : "border-charcoal/15 bg-white focus-within:border-clay",
        )}
      >
        <span className={cn("pl-3", light ? "text-white/60" : "text-stone")}>
          <Icon name="mail" size={18} />
        </span>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          placeholder={n.placeholder}
          aria-label={n.ariaEmail}
          aria-invalid={status === "error"}
          className={cn(
            "w-full bg-transparent text-sm outline-none",
            light ? "text-white placeholder:text-white/40" : "text-charcoal placeholder:text-stone/60",
          )}
        />
        <button
          type="submit"
          className={cn(
            "shrink-0 rounded-full px-5 py-2.5 text-sm font-medium transition-colors",
            light ? "bg-white text-charcoal hover:bg-gold-soft hover:text-ivory" : "bg-charcoal text-ivory hover:bg-clay",
          )}
        >
          {n.submit}
        </button>
      </div>
      {status === "error" && (
        <p className={cn("mt-2 pl-4 text-xs", light ? "text-gold-soft" : "text-clay")}>
          {n.error}
        </p>
      )}
    </form>
  );
}
