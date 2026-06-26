import { notFound } from "next/navigation";
import HomePage from "@/app/page";
import ShopsPage from "@/app/shops/page";
import ShopsDetailPage from "@/app/shops/[slug]/page";
import DiningPage from "@/app/dining/page";
import DiningDetailPage from "@/app/dining/[slug]/page";
import EntertainmentPage from "@/app/entertainment/page";
import LeSoukPage from "@/app/le-souk/page";
import ServicesPage from "@/app/services/page";
import OffersPage from "@/app/offers/page";
import ContactPage from "@/app/contact/page";
import LeasingPage from "@/app/leasing/page";
import SearchPage from "@/app/search/page";
import { hasLocale } from "@/lib/i18n";

export default async function LocalizedPage({
  params,
}: PageProps<"/[lang]/[[...slug]]">) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();

  const path = slug ?? [];

  if (path.length === 0) return <HomePage locale={lang} />;
  if (path.length === 1 && path[0] === "shops") return <ShopsPage locale={lang} />;
  if (path.length === 2 && path[0] === "shops") {
    return <ShopsDetailPage params={Promise.resolve({ slug: path[1] })} locale={lang} />;
  }
  if (path.length === 1 && path[0] === "dining") return <DiningPage locale={lang} />;
  if (path.length === 2 && path[0] === "dining") {
    return <DiningDetailPage params={Promise.resolve({ slug: path[1] })} locale={lang} />;
  }
  if (path.length === 1 && path[0] === "entertainment") return <EntertainmentPage locale={lang} />;
  if (path.length === 1 && path[0] === "le-souk") return <LeSoukPage locale={lang} />;
  if (path.length === 1 && path[0] === "services") return <ServicesPage locale={lang} />;
  if (path.length === 1 && path[0] === "offers") return <OffersPage locale={lang} />;
  if (path.length === 1 && path[0] === "contact") return <ContactPage locale={lang} />;
  if (path.length === 1 && path[0] === "leasing") return <LeasingPage locale={lang} />;
  if (path.length === 1 && path[0] === "search") return <SearchPage locale={lang} />;

  notFound();
}
