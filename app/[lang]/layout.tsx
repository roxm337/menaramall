import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { site, mallHours } from "@/lib/data/site";
import { summarizeHours } from "@/lib/hours";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileQuickNav } from "@/components/layout/MobileQuickNav";
import { getLocaleDir, hasLocale, locales, type Locale } from "@/lib/i18n";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

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

function StructuredData() {
  const json = {
    "@context": "https://schema.org",
    "@type": "ShoppingCenter",
    name: site.name,
    description: site.description,
    url: site.url,
    ...(site.phone ? { telephone: site.phone } : {}),
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      ...(site.address.postalCode ? { postalCode: site.address.postalCode } : {}),
      addressCountry: "MA",
    },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
    openingHours: summarizeHours(mallHours),
    sameAs: Object.values(site.social).filter(Boolean),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export default async function LocalizedLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const locale = lang as Locale;
  const dir = getLocaleDir(locale);

  return (
    <html lang={locale} dir={dir} className={`${cormorant.variable} ${inter.variable}`}>
      <body className="min-h-screen">
        <StructuredData />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-charcoal focus:px-5 focus:py-3 focus:text-sm focus:text-ivory"
        >
          Skip to content
        </a>
        <Header locale={locale} />
        <main id="main" className="pb-[4.5rem] lg:pb-0">
          {children}
        </main>
        <Footer locale={locale} />
        <MobileQuickNav locale={locale} />
      </body>
    </html>
  );
}
