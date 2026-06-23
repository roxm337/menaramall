import type { OpeningHours, Restaurant } from "@/lib/types";

const dining: OpeningHours = [
  { open: "11:00", close: "23:00" },
  { open: "11:00", close: "23:00" },
  { open: "11:00", close: "23:00" },
  { open: "11:00", close: "23:00" },
  { open: "11:00", close: "00:00" },
  { open: "11:00", close: "00:00" },
  { open: "11:00", close: "23:00" },
];

const cafe: OpeningHours = [
  { open: "09:00", close: "23:00" },
  { open: "09:00", close: "23:00" },
  { open: "09:00", close: "23:00" },
  { open: "09:00", close: "23:00" },
  { open: "09:00", close: "00:00" },
  { open: "09:00", close: "00:00" },
  { open: "09:00", close: "23:00" },
];

/**
 * Sample dining directory. Premium placeholder copy — venue names are
 * illustrative and must be confirmed by the Menara Mall team.
 */
export const restaurants: Restaurant[] = [
  {
    id: "r-dar-zellij",
    name: "Dar Zellij",
    slug: "dar-zellij",
    monogram: "DZ",
    cuisine: "Moroccan",
    type: "Restaurant",
    floor: "Second Floor",
    locationLabel: "Second Floor · Terrace",
    description:
      "Refined Moroccan cuisine — slow-cooked tagines, pastilla and mechoui — served beneath hand-carved cedar in a courtyard-style setting with a view over the Atlas.",
    openingHours: dining,
    phone: "+212 5 24 00 02 10",
    reservationUrl: "/contact",
    menuUrl: "#",
    featured: true,
    tags: ["Family-friendly", "Terrace", "View"],
    heroArt: "Elegant Moroccan restaurant, zellige walls, brass lanterns, tagines",
  },
  {
    id: "r-le-jardin",
    name: "Le Jardin Café",
    slug: "le-jardin-cafe",
    monogram: "LJ",
    cuisine: "French · Café",
    type: "Café",
    floor: "First Floor",
    locationLabel: "First Floor · Central Court",
    description:
      "A leafy all-day café for breakfast, patisserie and specialty coffee, framed by palms and filtered Marrakech light.",
    openingHours: cafe,
    reservationUrl: "/contact",
    featured: true,
    tags: ["Coffee", "Breakfast", "Family-friendly"],
    heroArt: "Plant-filled café, marble tables, espresso and pastries, daylight",
  },
  {
    id: "r-saveurs-atlas",
    name: "Saveurs d'Atlas",
    slug: "saveurs-datlas",
    monogram: "SA",
    cuisine: "Mediterranean",
    type: "Restaurant",
    floor: "Second Floor",
    locationLabel: "Second Floor · Terrace",
    description:
      "Sun-drenched Mediterranean plates — grilled fish, mezze and wood-fired flatbreads — designed for sharing with family and friends.",
    openingHours: dining,
    reservationUrl: "/contact",
    featured: true,
    tags: ["Family-friendly", "Terrace", "Sharing"],
    heroArt: "Mediterranean terrace dining, grilled dishes, olive and citrus tones",
  },
  {
    id: "r-spice-route",
    name: "Spice Route",
    slug: "spice-route",
    monogram: "SR",
    cuisine: "Asian Fusion",
    type: "Restaurant",
    floor: "Second Floor",
    locationLabel: "Second Floor · Food Terrace",
    description:
      "Vibrant pan-Asian flavours — from wok-fired noodles to fragrant curries — in a warm, contemporary dining room.",
    openingHours: dining,
    reservationUrl: "/contact",
    tags: ["Family-friendly", "Spicy"],
    heroArt: "Modern Asian-fusion restaurant, warm lanterns, steaming bowls",
  },
  {
    id: "r-bocca",
    name: "Bocca Italiana",
    slug: "bocca-italiana",
    monogram: "BI",
    cuisine: "Italian",
    type: "Restaurant",
    floor: "Second Floor",
    locationLabel: "Second Floor · Food Terrace",
    description:
      "Authentic Neapolitan pizza from a wood-fired oven, fresh pasta and classic dolci in a relaxed trattoria atmosphere.",
    openingHours: dining,
    reservationUrl: "/contact",
    tags: ["Family-friendly", "Pizza"],
    heroArt: "Trattoria interior, wood-fired pizza oven glow, rustic wood tables",
  },
  {
    id: "r-mint-kettle",
    name: "The Mint Kettle",
    slug: "the-mint-kettle",
    monogram: "MK",
    cuisine: "Moroccan Tea · Café",
    type: "Café",
    floor: "Ground Floor",
    locationLabel: "Ground Floor · Le Souk",
    description:
      "A traditional tea salon pouring ceremonial mint tea, Moroccan pastries and honeyed sweets beside Le Souk.",
    openingHours: cafe,
    tags: ["Mint tea", "Sweets", "Le Souk"],
    heroArt: "Moroccan tea salon, silver teapots, mint tea poured high, sweets",
  },
  {
    id: "r-burger-co",
    name: "Atlas Burger Co.",
    slug: "atlas-burger-co",
    monogram: "AB",
    cuisine: "Burgers",
    type: "Fast Food",
    floor: "Second Floor",
    locationLabel: "Second Floor · Food Court",
    description:
      "Smash-style burgers, hand-cut fries and thick shakes — quick, generous and made to order.",
    openingHours: dining,
    tags: ["Family-friendly", "Quick bite"],
    heroArt: "Casual burger counter, char-grilled burgers, golden fries",
  },
  {
    id: "r-sucre-sale",
    name: "Sucré & Salé",
    slug: "sucre-et-sale",
    monogram: "SS",
    cuisine: "Patisserie · Dessert",
    type: "Dessert",
    floor: "First Floor",
    locationLabel: "First Floor · Central Court",
    description:
      "A jewel-box patisserie of French-Moroccan pastries, crêpes, gelato and signature gateaux.",
    openingHours: cafe,
    tags: ["Dessert", "Family-friendly", "Gelato"],
    heroArt: "Glass patisserie counter, colourful pastries and gelato, soft light",
  },
  {
    id: "r-grain-roast",
    name: "Grain & Roast",
    slug: "grain-and-roast",
    monogram: "GR",
    cuisine: "Specialty Coffee",
    type: "Café",
    floor: "Ground Floor",
    locationLabel: "Ground Floor · Central Court",
    description:
      "A specialty coffee bar roasting single-origin beans, with cold brew, pastries and a quiet corner to pause.",
    openingHours: cafe,
    tags: ["Coffee", "Quick bite"],
    heroArt: "Specialty coffee bar, brass espresso machine, warm minimal interior",
  },
];

export const cuisineTypes = ["Restaurant", "Café", "Fast Food", "Dessert"] as const;

export function getRestaurant(slug: string): Restaurant | undefined {
  return restaurants.find((r) => r.slug === slug);
}

export function relatedRestaurants(r: Restaurant, limit = 3): Restaurant[] {
  return restaurants
    .filter((x) => x.slug !== r.slug && x.type === r.type)
    .concat(restaurants.filter((x) => x.slug !== r.slug && x.type !== r.type))
    .slice(0, limit);
}
