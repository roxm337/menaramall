import type { Service } from "@/lib/types";

/** Official service and activity labels sourced from https://www.menaramall.com/. */
export const services: Service[] = [
  {
    id: "s-parking-pmr",
    title: "Parking & Accès PMR",
    icon: "car",
    description:
      "Parking and accessibility support are listed by Menara Mall as part of the visitor experience.",
    location: "Menara Mall",
  },
  {
    id: "s-restauration",
    title: "Restauration",
    icon: "utensils",
    description:
      "Restaurants, cafés and Food Court options for coffee, quick meals, desserts and sit-down dining.",
    location: "Restaurants & cafés",
  },
  {
    id: "s-mode-bijoux",
    title: "Mode & Bijoux",
    icon: "bag",
    description:
      "Fashion, shoes, accessories and jewelry brands from the official shopping directory.",
    location: "Shopping directory",
  },
  {
    id: "s-kidzo",
    title: "Kidzo",
    icon: "play",
    description:
      "Family entertainment including Kidzo experiences highlighted on the official site.",
    location: "Kidzo",
  },
  {
    id: "s-souq",
    title: "Le SouQ Al Madinah",
    icon: "compass",
    description:
      "A Moroccan souk experience for crafts, traditional fashion, beauty rituals and local gifts.",
    location: "Le SouQ Al Madinah",
  },
  {
    id: "s-beaute",
    title: "Beauté & Bien-être",
    icon: "sparkles",
    description:
      "Beauty, fragrance, grooming and wellness brands from the official Menara Mall directory.",
    location: "Shopping directory",
  },
  {
    id: "s-high-tech",
    title: "High-Tech & Accessoires",
    icon: "wifi",
    description:
      "Phones, accessories, telecom services and tech shops listed in the official directory.",
    location: "Shopping directory",
  },
  {
    id: "s-carrefour",
    title: "Carrefour",
    icon: "bag",
    description:
      "Carrefour Market is open daily from 09:00 to 23:00 according to the official footer.",
    location: "Carrefour Market",
  },
  {
    id: "s-exchange",
    title: "Exchange",
    icon: "banknote",
    description:
      "Currency exchange services for visitor transactions are listed in the official shopping directory.",
    location: "Shopping directory",
  },
];
