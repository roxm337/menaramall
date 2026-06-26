import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { site, mallHours } from "@/lib/data/site";
import { summarizeHours } from "@/lib/hours";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileQuickNav } from "@/components/layout/MobileQuickNav";
import { LocaleHtmlSync } from "@/components/layout/LocaleHtmlSync";

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

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Menara Mall",
    "centre commercial Marrakech",
    "shopping Marrakech",
    "restaurants Marrakech",
    "Le Souk",
    "loisirs en famille Marrakech",
    "Avenue Mohammed VI",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  alternates: {
    canonical: "/",
    languages: { fr: "/", en: "/en", ar: "/ar" },
  },
  robots: { index: true, follow: true },
};

/** ShoppingCenter structured data for rich search results. */
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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" dir="ltr" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="min-h-screen">
        <StructuredData />
        <LocaleHtmlSync />
        <Header />
        <main id="main" className="pb-[4.5rem] lg:pb-0">
          {children}
        </main>
        <Footer />
        <MobileQuickNav />
      </body>
    </html>
  );
}
