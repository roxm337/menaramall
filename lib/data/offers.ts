import type { Offer } from "@/lib/types";

/**
 * Offres d'exemple. Les dates de validite et conditions doivent etre confirmees
 * et maintenues par l'equipe Menara Mall via le CMS.
 */
export const offers: Offer[] = [
  {
    id: "o-zara-summer",
    title: "Selection d'ete : jusqu'a -40 %",
    slug: "zara-summer-edit",
    brand: "Zara",
    brandSlug: "zara",
    description:
      "Renouvelez votre dressing de saison avec jusqu'a 40 % de remise sur une selection de styles ete femme, homme et enfant.",
    validFrom: "2026-06-15",
    validUntil: "2026-07-31",
    terms:
      "Remise valable uniquement sur les articles signales, dans la limite des stocks disponibles. Non cumulable avec d'autres promotions. [A VERIFIER] avec la marque.",
    category: "Mode",
    featured: true,
    heroArt: "Selection mode estivale, lin et tons paille, styling editorial",
  },
  {
    id: "o-sephora-gift",
    title: "Cadeau beaute des 600 MAD d'achat",
    slug: "sephora-gift-with-purchase",
    brand: "Sephora",
    brandSlug: "sephora",
    description:
      "Recevez un coffret decouverte soigneusement selectionne pour tout achat superieur a 600 MAD en soin et parfum.",
    validFrom: "2026-06-01",
    validUntil: "2026-08-15",
    terms:
      "Un cadeau par client, dans la limite des stocks disponibles. Seuil minimum avant taxes. [A VERIFIER] avec la marque.",
    category: "Beaute",
    featured: true,
    heroArt: "Coffret beaute premium, flacons en verre et accents dores, lumiere douce",
  },
  {
    id: "o-carrefour-family",
    title: "Economies famille sur les courses",
    slug: "carrefour-family-savings",
    brand: "Carrefour",
    brandSlug: "carrefour",
    description:
      "Des economies chaque semaine sur les produits frais, l'epicerie et les essentiels du quotidien pour toute la famille.",
    validFrom: "2026-06-10",
    validUntil: "2026-12-31",
    terms:
      "Prix affiches en magasin. La selection change chaque semaine. [A VERIFIER] avec la marque.",
    category: "Famille",
    featured: true,
    heroArt: "Abondance de produits frais, paniers de fruits et legumes, ambiance lumineuse",
  },
  {
    id: "o-electroplanet-tech",
    title: "Offres packs maison connectee",
    slug: "electroplanet-smart-home",
    brand: "Electroplanet",
    brandSlug: "electroplanet",
    description:
      "Economisez sur les packs regroupant enceintes connectees, ecrans et accessoires, avec options d'extension de garantie.",
    validFrom: "2026-07-01",
    validUntil: "2026-08-31",
    terms:
      "Tarif pack valable sur une selection de produits achetes ensemble. [A VERIFIER] avec la marque.",
    category: "High-Tech",
    heroArt: "Appareils de maison connectee au design epure, surface minimaliste, lumiere froide",
  },
  {
    id: "o-dining-terrace",
    title: "Terrasse gourmande : dessert offert",
    slug: "terrace-dining-dessert",
    brand: "Terrace Restaurants",
    description:
      "Profitez d'un dessert signature offert pour chaque plat principal dans les restaurants de terrasse participants.",
    validFrom: "2026-06-20",
    validUntil: "2026-09-15",
    terms:
      "Un dessert par plat principal, sur place uniquement, dans les enseignes participantes. [A VERIFIER] avec les restaurants.",
    category: "Restauration",
    featured: true,
    heroArt: "Dessert dresse avec elegance sur une table en terrasse a l'heure doree",
  },
  {
    id: "o-home-refresh",
    title: "Maison : 3 pour 2",
    slug: "home-refresh-3-for-2",
    brand: "Dar Déco",
    brandSlug: "dar-deco",
    description:
      "Achetez-en trois, payez-en deux sur une selection de coussins, textiles et art de la table pour rafraichir votre interieur.",
    validFrom: "2026-07-05",
    validUntil: "2026-08-20",
    terms:
      "Article le moins cher offert. Valable uniquement sur une selection d'articles maison. [A VERIFIER] avec la marque.",
    category: "Maison",
    heroArt: "Textiles et ceramiques de maison dans des tons marocains chaleureux",
  },
];

export const offerCategories = [
  "Mode",
  "Beaute",
  "Restauration",
  "High-Tech",
  "Famille",
  "Maison",
] as const;

export function getOffer(slug: string): Offer | undefined {
  return offers.find((o) => o.slug === slug);
}
