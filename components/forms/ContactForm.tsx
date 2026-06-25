"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { getLocaleFromPathname, getUiText } from "@/lib/i18n";

type Topic = "Demande generale" | "Location & partenariats" | "Medias & publicite";

const fieldBase =
  "w-full rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-sm text-charcoal outline-none transition-colors placeholder:text-stone/55 focus:border-clay";

/**
 * Multi-purpose inquiry form (general / leasing / media).
 * Client-side validation with a success state. Wire `onSubmit` to an email
 * service or CRM endpoint at integration time.
 */
export function ContactForm({ defaultTopic = "Demande generale" }: { defaultTopic?: Topic }) {
  const locale = getLocaleFromPathname(usePathname());
  const t = getUiText(locale).contactForm;
  const topics = [
    { key: "Demande generale", label: t.defaultTopic },
    { key: "Location & partenariats", label: t.businessTopic },
    { key: "Medias & publicite", label: t.mediaTopic },
  ] as const;
  const [topic, setTopic] = useState<Topic>(defaultTopic);
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [sent, setSent] = useState(false);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Record<string, boolean> = {};
    if (!form.name.trim()) next.name = true;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = true;
    if (!form.message.trim()) next.message = true;
    setErrors(next);
    if (Object.keys(next).length === 0) {
      // TODO: POST { topic, ...form } to inquiry endpoint.
      setSent(true);
    }
  };

  const isBusiness = topic !== "Demande generale";

  if (sent) {
    return (
      <div className="rounded-[var(--radius-xl2)] bg-palm/8 p-10 text-center ring-1 ring-palm/20">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-palm text-white">
          <Icon name="check" size={28} />
        </span>
        <h3 className="mt-5 text-2xl text-charcoal">{t.successTitle}</h3>
        <p className="mx-auto mt-2 max-w-sm text-sm text-stone">
          {t.successMessage}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="rounded-[var(--radius-xl2)] bg-white p-6 ring-1 ring-charcoal/8 sm:p-8">
      <fieldset>
        <legend className="mb-2 text-xs font-semibold uppercase tracking-widest text-stone">{t.legend}</legend>
        <div className="flex flex-wrap gap-2">
          {topics.map((tItem) => (
            <button
              type="button"
              key={tItem.key}
              onClick={() => setTopic(tItem.key as Topic)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-all",
                topic === tItem.key ? "border-charcoal bg-charcoal text-ivory" : "border-charcoal/15 text-charcoal/75 hover:border-charcoal/40",
              )}
            >
              {tItem.label}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-charcoal">{t.name}</span>
          <input value={form.name} onChange={set("name")} className={cn(fieldBase, errors.name && "border-clay")} placeholder={t.namePlaceholder} aria-invalid={!!errors.name} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-charcoal">{t.email}</span>
          <input type="email" value={form.email} onChange={set("email")} className={cn(fieldBase, errors.email && "border-clay")} placeholder="you@email.com" aria-invalid={!!errors.email} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-charcoal">{t.phone}</span>
          <input value={form.phone} onChange={set("phone")} className={fieldBase} placeholder={t.phonePlaceholder} />
        </label>
        {isBusiness && (
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-charcoal">{t.company}</span>
            <input value={form.company} onChange={set("company")} className={fieldBase} placeholder={t.companyPlaceholder} />
          </label>
        )}
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-sm font-medium text-charcoal">{t.message}</span>
          <textarea value={form.message} onChange={set("message")} rows={5} className={cn(fieldBase, "resize-none", errors.message && "border-clay")} placeholder={t.messagePlaceholder} aria-invalid={!!errors.message} />
        </label>
      </div>

      {Object.keys(errors).length > 0 && (
        <p className="mt-3 text-xs text-clay">{t.error}</p>
      )}

      <div className="mt-6 flex items-center justify-between gap-4">
        <p className="text-xs text-stone">{t.responseTime}</p>
        <Button type="submit" variant="primary" icon="arrow-right">{t.submit}</Button>
      </div>
    </form>
  );
}
