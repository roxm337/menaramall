import type { Service } from "@/lib/types";

/** Official service and activity labels sourced from https://www.menaramall.com/. */
export const services: Service[] = [
  {
    id: "s-parking-pmr",
    title: "Parking & Accès PMR",
    icon: "car",
    description:
      "Le parking et les dispositifs d'accessibilite figurent parmi les services proposes pour faciliter la visite.",
    location: "Menara Mall",
  },
  {
    id: "s-restauration",
    title: "Restauration",
    icon: "utensils",
    description:
      "Restaurants, cafes et options du Food Court pour un cafe, un repas rapide, un dessert ou un moment a table.",
    location: "Restaurants et cafes",
  },
  {
    id: "s-mode-bijoux",
    title: "Mode & Bijoux",
    icon: "bag",
    description:
      "Marques de mode, chaussures, accessoires et bijoux presentes dans l'annuaire officiel.",
    location: "Galerie marchande",
  },
  {
    id: "s-kidzo",
    title: "Kidzo",
    icon: "play",
    description:
      "Des loisirs en famille avec les experiences Kidzo mises en avant sur le site officiel.",
    location: "Kidzo",
  },
  {
    id: "s-souq",
    title: "Le Souk Al Madinah",
    icon: "compass",
    description:
      "Une experience de souk marocain autour de l'artisanat, de la mode traditionnelle, des rituels beaute et des cadeaux locaux.",
    location: "Le Souk Al Madinah",
  },
  {
    id: "s-beaute",
    title: "Beauté & Bien-être",
    icon: "sparkles",
    description:
      "Marques de beaute, parfum, grooming et bien-etre presentes dans l'annuaire officiel Menara Mall.",
    location: "Galerie marchande",
  },
  {
    id: "s-high-tech",
    title: "High-Tech & Accessoires",
    icon: "wifi",
    description:
      "Telephones, accessoires, services telecom et enseignes high-tech recenses dans l'annuaire officiel.",
    location: "Galerie marchande",
  },
  {
    id: "s-carrefour",
    title: "Carrefour",
    icon: "bag",
    description:
      "Carrefour Market est ouvert tous les jours de 09:00 a 23:00 selon le pied de page officiel.",
    location: "Carrefour Market",
  },
  {
    id: "s-exchange",
    title: "Change",
    icon: "banknote",
    description:
      "Des services de change pour les visiteurs figurent dans l'annuaire officiel du centre.",
    location: "Galerie marchande",
  },
];
