import type { OpeningHours, Restaurant } from "@/lib/types";

const dining: OpeningHours = [
  { open: "10:00", close: "00:00" },
  { open: "10:00", close: "00:00" },
  { open: "10:00", close: "00:00" },
  { open: "10:00", close: "00:00" },
  { open: "10:00", close: "01:00" },
  { open: "10:00", close: "01:00" },
  { open: "10:00", close: "00:00" },
];

/** Official restaurant and café directory sourced from https://www.menaramall.com/api/restaurant. */
export const restaurants: Restaurant[] = [
  {
    "id": "r-official-13",
    "name": "Happy Yog",
    "slug": "happy-yog",
    "monogram": "HY",
    "cuisine": "Frozen yogurt · Crêpes",
    "type": "Dessert",
    "floor": "Food Court",
    "locationLabel": "Menara Mall · Restaurants & cafés",
    "description": "Happy Yog propose des crêpes savoureuses, des glaces au yaourt fraîches et des jus préparés à la minute.",
    "openingHours": dining,
    "reservationUrl": "/contact",
    "featured": false,
    "tags": [
      "Dessert",
      "Food Court"
    ],
    "heroArt": "Happy Yog at Menara Mall Marrakech",
    "imageSrc": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/690399e7dd688_ELY10266.jpg",
    "gallery": [
      "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/690399e7dd688_ELY10266.jpg"
    ]
  },
  {
    "id": "r-official-15",
    "name": "Le Box",
    "slug": "le-box",
    "monogram": "LB",
    "cuisine": "Sushi · Burgers · Pasta",
    "type": "Fast Food",
    "floor": "Food Court",
    "locationLabel": "Menara Mall · Restaurants & cafés",
    "description": "Le Box propose un large choix de gourmandises allant des sushis aux pâtes, en passant par burgers et hot-dogs.",
    "openingHours": dining,
    "reservationUrl": "/contact",
    "featured": false,
    "tags": [
      "Fast Food",
      "Food Court"
    ],
    "heroArt": "Le Box at Menara Mall Marrakech",
    "imageSrc": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/69039c3e3ce31_ELY10265.jpg",
    "gallery": [
      "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/69039c3e3ce31_ELY10265.jpg"
    ]
  },
  {
    "id": "r-official-16",
    "name": "Bollywood Café",
    "slug": "bollywood-cafe",
    "monogram": "BC",
    "cuisine": "Indian",
    "type": "Restaurant",
    "floor": "Food Court",
    "locationLabel": "Menara Mall · Restaurants & cafés",
    "description": "Bollywood Café vous invite à découvrir les saveurs authentiques de l’Inde à travers une sélection de plats généreux et parfumés.",
    "openingHours": dining,
    "reservationUrl": "/contact",
    "featured": false,
    "tags": [
      "Restaurant",
      "Food Court"
    ],
    "heroArt": "Bollywood Café at Menara Mall Marrakech",
    "imageSrc": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/69039eee79f51_ELY10285.jpg",
    "gallery": [
      "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/69039eee79f51_ELY10285.jpg"
    ]
  },
  {
    "id": "r-official-17",
    "name": "Pizza Factory",
    "slug": "pizza-factory",
    "monogram": "PF",
    "cuisine": "Pizza",
    "type": "Fast Food",
    "floor": "Food Court",
    "locationLabel": "Menara Mall · Restaurants & cafés",
    "description": "Pizza Factory propose des pizzas savoureuses préparées avec des ingrédients frais et des recettes variées pour tous les goûts.",
    "openingHours": dining,
    "reservationUrl": "/contact",
    "featured": false,
    "tags": [
      "Fast Food",
      "Food Court"
    ],
    "heroArt": "Pizza Factory at Menara Mall Marrakech",
    "imageSrc": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/69039f2d7c1ac_ELY10254.jpg",
    "gallery": [
      "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/69039f2d7c1ac_ELY10254.jpg"
    ]
  },
  {
    "id": "r-official-18",
    "name": "Bella Italia",
    "slug": "bella-italia",
    "monogram": "BI",
    "cuisine": "Italian",
    "type": "Restaurant",
    "floor": "Food Court",
    "locationLabel": "Menara Mall · Restaurants & cafés",
    "description": "Bella Italia sert des pizzas traditionnelles aux saveurs italiennes authentiques, préparées avec des ingrédients de qualité.",
    "openingHours": dining,
    "reservationUrl": "/contact",
    "featured": false,
    "tags": [
      "Restaurant",
      "Food Court"
    ],
    "heroArt": "Bella Italia at Menara Mall Marrakech",
    "imageSrc": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/69039f66ecbe8_ELY10268.jpg",
    "gallery": [
      "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/69039f66ecbe8_ELY10268.jpg"
    ]
  },
  {
    "id": "r-official-19",
    "name": "Tacos Français",
    "slug": "tacos-francais",
    "monogram": "TF",
    "cuisine": "French tacos",
    "type": "Fast Food",
    "floor": "Food Court",
    "locationLabel": "Menara Mall · Restaurants & cafés",
    "description": "Tacos Français propose des tacos généreusement garnis, préparés à la française avec des sauces au choix et des saveurs variées.",
    "openingHours": dining,
    "reservationUrl": "/contact",
    "featured": false,
    "tags": [
      "Fast Food",
      "Food Court"
    ],
    "heroArt": "Tacos Français at Menara Mall Marrakech",
    "imageSrc": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/69039fac41bde_ELY10286.jpg",
    "gallery": [
      "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/69039fac41bde_ELY10286.jpg"
    ]
  },
  {
    "id": "r-official-20",
    "name": "Kebab & Tacos",
    "slug": "kebab-and-tacos",
    "monogram": "K&",
    "cuisine": "Kebab · Tacos",
    "type": "Fast Food",
    "floor": "Food Court",
    "locationLabel": "Menara Mall · Restaurants & cafés",
    "description": "Kebab & Tacos offre un large choix de kebabs et tacos savoureux, préparés rapidement pour un repas sur le pouce.",
    "openingHours": dining,
    "reservationUrl": "/contact",
    "featured": false,
    "tags": [
      "Fast Food",
      "Food Court"
    ],
    "heroArt": "Kebab & Tacos at Menara Mall Marrakech",
    "imageSrc": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/69039fd3c8173_ELY10271.jpg",
    "gallery": [
      "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/69039fd3c8173_ELY10271.jpg"
    ]
  },
  {
    "id": "r-official-21",
    "name": "Oriental Legend",
    "slug": "oriental-legend",
    "monogram": "OL",
    "cuisine": "Artisanal ice cream",
    "type": "Dessert",
    "floor": "Food Court",
    "locationLabel": "Menara Mall · Restaurants & cafés",
    "description": "Oriental Legend est un glacier artisanal proposant des glaces et sorbets faits maison aux saveurs variées et authentiques.",
    "openingHours": dining,
    "reservationUrl": "/contact",
    "featured": false,
    "tags": [
      "Dessert",
      "Food Court"
    ],
    "heroArt": "Oriental Legend at Menara Mall Marrakech",
    "imageSrc": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903a2bfaa50c_ELY19968.jpg",
    "gallery": [
      "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903a2bfaa50c_ELY19968.jpg"
    ]
  },
  {
    "id": "r-official-22",
    "name": "Alwardeh Alshamieh",
    "slug": "alwardeh-alshamieh",
    "monogram": "AA",
    "cuisine": "Oriental pastries",
    "type": "Dessert",
    "floor": "Food Court",
    "locationLabel": "Menara Mall · Restaurants & cafés",
    "description": "Alwardeh Alshamieh propose des pâtisseries orientales traditionnelles riches en saveurs et en douceur.",
    "openingHours": dining,
    "reservationUrl": "/contact",
    "featured": false,
    "tags": [
      "Dessert",
      "Food Court"
    ],
    "heroArt": "Alwardeh Alshamieh at Menara Mall Marrakech",
    "imageSrc": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903a314f3079_ELY19988.jpg",
    "gallery": [
      "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903a314f3079_ELY19988.jpg"
    ]
  },
  {
    "id": "r-official-23",
    "name": "Burger King",
    "slug": "burger-king",
    "monogram": "BK",
    "cuisine": "Burgers",
    "type": "Fast Food",
    "floor": "Food Court",
    "locationLabel": "Menara Mall · Restaurants & cafés",
    "description": "Burger King est une chaîne de fast-food célèbre pour ses burgers juteux, frites croustillantes et menus rapides.",
    "openingHours": dining,
    "reservationUrl": "/contact",
    "featured": true,
    "tags": [
      "Fast Food",
      "Food Court"
    ],
    "heroArt": "Burger King at Menara Mall Marrakech",
    "imageSrc": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903a360a36a2_ELY10063.jpg",
    "gallery": [
      "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903a360a36a2_ELY10063.jpg"
    ]
  },
  {
    "id": "r-official-24",
    "name": "Kaspas Desserts",
    "slug": "kaspas-desserts",
    "monogram": "KD",
    "cuisine": "Desserts · Milkshakes",
    "type": "Dessert",
    "floor": "Food Court",
    "locationLabel": "Menara Mall · Restaurants & cafés",
    "description": "Kaspas Desserts propose une large sélection de desserts gourmands, allant des milkshakes aux glaces et gâteaux.",
    "openingHours": dining,
    "reservationUrl": "/contact",
    "featured": false,
    "tags": [
      "Dessert",
      "Food Court"
    ],
    "heroArt": "Kaspas Desserts at Menara Mall Marrakech",
    "imageSrc": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903a3b7262a7_ELY19886.jpg",
    "gallery": [
      "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903a3b7262a7_ELY19886.jpg"
    ]
  },
  {
    "id": "r-official-25",
    "name": "Costa Coffee",
    "slug": "costa-coffee",
    "monogram": "CC",
    "cuisine": "Coffee · Pastries",
    "type": "Café",
    "floor": "Food Court",
    "locationLabel": "Menara Mall · Restaurants & cafés",
    "description": "Costa Coffee sert cafés, thés et boissons chaudes de qualité, accompagnés de pâtisseries et en-cas variés.",
    "openingHours": dining,
    "reservationUrl": "/contact",
    "featured": true,
    "tags": [
      "Café",
      "Food Court"
    ],
    "heroArt": "Costa Coffee at Menara Mall Marrakech",
    "imageSrc": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903a3de2de03_ELY19880.jpg",
    "gallery": [
      "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903a3de2de03_ELY19880.jpg"
    ]
  },
  {
    "id": "r-official-26",
    "name": "Carteer Square",
    "slug": "carteer-square",
    "monogram": "CS",
    "cuisine": "Kebabs · Pizza · Pasta",
    "type": "Fast Food",
    "floor": "Food Court",
    "locationLabel": "Menara Mall · Restaurants & cafés",
    "description": "Carteer Square propose une variété de plats, allant des kebabs et pizzas aux pâtes et autres spécialités.",
    "openingHours": dining,
    "reservationUrl": "/contact",
    "featured": false,
    "tags": [
      "Fast Food",
      "Food Court"
    ],
    "heroArt": "Carteer Square at Menara Mall Marrakech",
    "imageSrc": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903a49017ac0_ELY19873.jpg",
    "gallery": [
      "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903a49017ac0_ELY19873.jpg"
    ]
  },
  {
    "id": "r-official-27",
    "name": "Victor",
    "slug": "victor",
    "monogram": "V",
    "cuisine": "Moroccan · International",
    "type": "Restaurant",
    "floor": "Food Court",
    "locationLabel": "Menara Mall · Restaurants & cafés",
    "description": "Victor propose un petit‑déjeuner complet ainsi qu’une carte variée de plats marocains et internationaux, accompagnée d’une section pâtisserie pour les gourmands.",
    "openingHours": dining,
    "reservationUrl": "/contact",
    "featured": false,
    "tags": [
      "Restaurant",
      "Food Court"
    ],
    "heroArt": "Victor at Menara Mall Marrakech",
    "imageSrc": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903a4ebabdb5_ELY19868.jpg",
    "gallery": [
      "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903a4ebabdb5_ELY19868.jpg"
    ]
  },
  {
    "id": "r-official-28",
    "name": "Kasbah Café",
    "slug": "kasbah-cafe",
    "monogram": "KC",
    "cuisine": "Moroccan · International",
    "type": "Café",
    "floor": "Food Court",
    "locationLabel": "Menara Mall · Restaurants & cafés",
    "description": "Kasbah Café sert des petits-déjeuners copieux, des plats marocains et internationaux, ainsi que de savoureuses pâtisseries.",
    "openingHours": dining,
    "reservationUrl": "/contact",
    "featured": true,
    "tags": [
      "Café",
      "Food Court"
    ],
    "heroArt": "Kasbah Café at Menara Mall Marrakech",
    "imageSrc": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903a5b682225_ELY19960.jpg",
    "gallery": [
      "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903a5b682225_ELY19960.jpg"
    ]
  },
  {
    "id": "r-official-29",
    "name": "PAUL",
    "slug": "paul",
    "monogram": "P",
    "cuisine": "French bakery",
    "type": "Café",
    "floor": "Food Court",
    "locationLabel": "Menara Mall · Restaurants & cafés",
    "description": "PAUL propose des viennoiseries, tartes, sandwiches et cafés préparés dans la tradition française.",
    "openingHours": dining,
    "reservationUrl": "/contact",
    "featured": true,
    "tags": [
      "Café",
      "Food Court"
    ],
    "heroArt": "PAUL at Menara Mall Marrakech",
    "imageSrc": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903a5d5b1d3e_ELY19958.jpg",
    "gallery": [
      "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903a5d5b1d3e_ELY19958.jpg"
    ]
  },
  {
    "id": "r-official-30",
    "name": "Papa John’s",
    "slug": "papa-johns",
    "monogram": "PJ",
    "cuisine": "Pizza · Tex-Mex",
    "type": "Fast Food",
    "floor": "Food Court",
    "locationLabel": "Menara Mall · Restaurants & cafés",
    "description": "Papa John’s propose des pizzas généreuses préparées avec des ingrédients frais, tandis que Chili’s sert des plats tex-mex, burgers et grillades savoureux",
    "openingHours": dining,
    "reservationUrl": "/contact",
    "featured": true,
    "tags": [
      "Fast Food",
      "Food Court"
    ],
    "heroArt": "Papa John’s at Menara Mall Marrakech",
    "imageSrc": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903a638df631_ELY10290.jpg",
    "gallery": [
      "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903a638df631_ELY10290.jpg"
    ]
  },
  {
    "id": "r-official-31",
    "name": "Venezia Ice",
    "slug": "venezia-ice",
    "monogram": "VI",
    "cuisine": "Artisanal ice cream",
    "type": "Dessert",
    "floor": "Food Court",
    "locationLabel": "Menara Mall · Restaurants & cafés",
    "description": "Venezia Ice est un glacier artisanal proposant des glaces et sorbets faits maison aux saveurs variées.",
    "openingHours": dining,
    "reservationUrl": "/contact",
    "featured": false,
    "tags": [
      "Dessert",
      "Food Court"
    ],
    "heroArt": "Venezia Ice at Menara Mall Marrakech",
    "imageSrc": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903a6ed6a7e2_ELY19920.jpg",
    "gallery": [
      "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903a6ed6a7e2_ELY19920.jpg"
    ]
  }
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
