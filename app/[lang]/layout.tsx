import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { site } from "@/lib/data/site";
import { hasLocale, locales } from "@/lib/i18n";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return {
    metadataBase: new URL(site.url),
    alternates: {
      canonical: lang === "fr" ? "/" : `/${lang}`,
      languages: { fr: "/", en: "/en", ar: "/ar" },
    },
  };
}

export default async function LocalizedLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return children;
}
