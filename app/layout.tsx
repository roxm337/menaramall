import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { site, mallHours } from "@/lib/data/site";
import { summarizeHours } from "@/lib/hours";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileQuickNav } from "@/components/layout/MobileQuickNav";

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
    "Marrakech mall",
    "shopping Marrakech",
    "dining Marrakech",
    "Le Souk",
    "family entertainment Marrakech",
    "Avenue Mohammed VI",
  ],
  openGraph: {
    type: "website",
    locale: "en",
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
    languages: { en: "/", fr: "/fr", ar: "/ar" },
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
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      postalCode: site.address.postalCode,
      addressCountry: "MA",
    },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
    openingHours: summarizeHours(mallHours),
    sameAs: Object.values(site.social),
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
    <html lang="en" dir="ltr" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="min-h-screen">
        <StructuredData />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-charcoal focus:px-5 focus:py-3 focus:text-sm focus:text-ivory"
        >
          Skip to content
        </a>
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
