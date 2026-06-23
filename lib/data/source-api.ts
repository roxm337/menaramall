export interface SourceShop {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  categorie: string;
}

export interface SourceRestaurant {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export interface SourceKidzoItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  createdAt: string;
}

export interface SourceSoukItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

/**
 * Local snapshot of the public Menara Mall source API payloads.
 *
 * Captured from https://www.menaramall.com/api/* on 2026-06-23 so this
 * project can serve the same data from its own /api routes without runtime
 * dependency on the remote site.
 */
export const sourceShopping = [
  {
    "id": 79,
    "title": "Exchange ",
    "description": "Exchange est un bureau de change proposant des services rapides et sécurisés pour toutes vos transactions de devises.",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f931cc84a36_ELY19922.jpg",
    "categorie": "Divers"
  },
  {
    "id": 78,
    "title": "Galerie Menara Mall ",
    "description": "Galerie Menara Mall est un espace artistique dédié à l’exposition et à la vente de tableaux de différents styles. Elle offre aux amateurs d’art un lieu unique pour découvrir des œuvres variée",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f92ef48c41a_ELY10001.jpg",
    "categorie": "Divers"
  },
  {
    "id": 76,
    "title": "LE COIN CHIC ",
    "description": "Le Coin Chic est une boutique proposant des articles de mode de luxe pour femmes et hommes. Chaque pièce allie élégance, qualité et design raffiné pour un style sophistiqué.",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f925f21e394_ELY10061.jpg",
    "categorie": "Mode & Bijoux"
  },
  {
    "id": 75,
    "title": "Uno",
    "description": "Uno est un revendeur agréé Apple proposant smartphones, tablettes, ordinateurs et accessoires officiels. La boutique offre également des services de conseil et d’assistance pour tous vos appa",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f924c08b45a_ELY19970.jpg",
    "categorie": "High-Tech & Accessoires"
  },
  {
    "id": 74,
    "title": "Princes Jewellery",
    "description": "Princes Jewellery propose des bijoux modernes et traditionnels en acier et en or. La boutique offre des créations uniques adaptées à toutes les occasions.",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f921fc368c8_ELY10027.jpg",
    "categorie": "Mode & Bijoux"
  },
  {
    "id": 73,
    "title": "Beauty & Beyond ",
    "description": "Beauty & Beyond est une boutique dédiée à la beauté, proposant maquillage, soins et parfums venus d’Orient et d’Europe.",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f92194245db_ELY19972.jpg",
    "categorie": "Beauté et bien être"
  },
  {
    "id": 72,
    "title": "Pièce Unique",
    "description": "Pièce Unique est un bijoutier proposant des créations originales alliant savoir-faire marocain et design artistique. Chaque bijou, en or et pierres précieuses, reflète une touche artisanale u",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f920fecf64d_ELY10003.jpg",
    "categorie": "Mode & Bijoux"
  },
  {
    "id": 71,
    "title": "Swiss Arabian ",
    "description": "Swiss Arabian est une maison de parfumerie alliant tradition orientale et modernité. Elle propose des parfums, huiles et fragrances uniques pour hommes et femmes. Chaque création reflète élég",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f9200b1b5c3_ELY19978.jpg",
    "categorie": "Beauté et bien être"
  },
  {
    "id": 70,
    "title": "Benji Luxury Shop ",
    "description": "Benji Luxury Shop propose des bijoux et accessoires en acier inoxydable alliant élégance, modernité et durabilité.",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f91f9110ea1_ELY19983 (1).jpg",
    "categorie": "Mode & Bijoux"
  },
  {
    "id": 69,
    "title": "PopKase",
    "description": "PopKase propose des coques et accessoires personnalisés pour téléphones, tablettes et ordinateurs. Des designs créatifs et colorés alliant protection et style.",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f91ef175238_ELY19965.jpg",
    "categorie": "High-Tech & Accessoires"
  },
  {
    "id": 67,
    "title": "Barber Shop Gentlemen Club ",
    "description": " Barber Shop Gentlemen Club est un salon de coiffure masculin offrant un service premium alliant tradition et modernité. Chaque visite garantit une expérience relaxante dans un cadre élégant ",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f91c5cc0d09_ELY10012.jpg",
    "categorie": "Beauté et bien être"
  },
  {
    "id": 66,
    "title": "Barber Signes ",
    "description": "Barber Signes est un salon de coiffure masculin qui allie style, précision et savoir-faire. Il propose des coupes modernes, tailles de barbe et soins capillaires pour un look soigné et person",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f913ac5a950_ELY10034.jpg",
    "categorie": "Beauté et bien être"
  },
  {
    "id": 65,
    "title": "L’Artiste VIP",
    "description": "L’Artiste VIP est un salon de beauté offrant une expérience haut de gamme alliant expertise et élégance. Le salon propose une large gamme de soins esthétiques, coiffure et maquillage pour sub",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f912fe3d537_ELY10031.jpg",
    "categorie": "Beauté et bien être"
  },
  {
    "id": 64,
    "title": "Yves Rocher",
    "description": "Yves Rocher est une marque de cosmétiques et de soins inspirée par la nature. Elle propose des produits de beauté respectueux de la peau et de l’environnement.",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f913fdeaf9c_ELY10052.jpg",
    "categorie": "Beauté et bien être"
  },
  {
    "id": 62,
    "title": "Mariolina ",
    "description": "Mariolina est une boutique dédiée aux enfants, proposant des jouets variés et des mascottes amusantes pour éveiller l’imagination.",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f919c43b0ee_ELY10215.jpg",
    "categorie": "Jouets & Loisirs"
  },
  {
    "id": 61,
    "title": "MonJouet ",
    "description": "MonJouet est une boutique spécialisée dans les jouets, les jeux éducatifs et les jeux de société pour tous les âges. Elle propose des produits ludiques qui stimulent imagination, créativité e",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f91957f3ea8_ELY10005.jpg",
    "categorie": "Jouets & Loisirs"
  },
  {
    "id": 59,
    "title": "MINISO",
    "description": "Miniso est une boutique lifestyle proposant une large gamme de produits design et abordables pour la maison, la beauté, les accessoires et les gadgets du quotidien.",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f9183b46d14_ELY10036 (2).jpg",
    "categorie": "High-Tech & Accessoires"
  },
  {
    "id": 57,
    "title": "CLIP ELECTRO",
    "description": "Clip Electro est une boutique spécialisée dans les accessoires pour téléphones, tablettes et ordinateurs. Elle propose un large choix d’articles high-tech, de pochettes personnalisées et de g",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f914648dd4d_ELY19992.jpg",
    "categorie": "High-Tech & Accessoires"
  },
  {
    "id": 56,
    "title": "VAPOKECH",
    "description": "Vapokech est une boutique spécialisée dans l’univers de la vape et de ses accessoires. Elle propose une large sélection de cigarettes électroniques, e-liquides et pods de qualité.",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f914cf1244b_ELY19982.jpg",
    "categorie": "High-Tech & Accessoires"
  },
  {
    "id": 55,
    "title": "Maroc Telecom",
    "description": "Maroc Telecom est le leader national des télécommunications, offrant des services innovants et fiables. ",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f911d627665_ELY10009.jpg",
    "categorie": "Divers"
  },
  {
    "id": 54,
    "title": "Z Création",
    "description": "Z Création est une marque de vêtements féminins qui célèbre l’originalité et la créativité. Elle propose des pièces uniques, colorées et pleines de caractère pour affirmer son style avec conf",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f9083b430a2_ELY19996.jpg",
    "categorie": "Mode & Bijoux"
  },
  {
    "id": 53,
    "title": "Noctichic",
    "description": "Noctichic est une marque de lingerie glamour dédiée aux femmes audacieuses et élégantes. Chaque pièce allie sensualité, confort et raffinement pour sublimer la féminité.",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f9080d1371e_ELY10019.jpg",
    "categorie": "Mode & Bijoux"
  },
  {
    "id": 52,
    "title": "be sport",
    "description": "BeSport est la destination des passionnés de sport et de fitness. Elle propose des équipements, chaussures et vêtements adaptés à toutes les disciplines. La marque met l’accent sur performanc",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f90b431a3a4_ELY10054.jpg",
    "categorie": "Mode & Bijoux"
  },
  {
    "id": 51,
    "title": "Bertrand Shoes",
    "description": "Bertrand Shoes propose une large gamme de chaussures pour hommes et femmes. La marque allie qualité, confort et design élégant. Chaque modèle est pensé pour accompagner tous vos pas avec styl",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f90a302b390_ELY10026.jpg",
    "categorie": "Mode & Bijoux"
  },
  {
    "id": 50,
    "title": "ARABLANCO",
    "description": "ArablanCo incarne l’élégance masculine à travers une collection de vêtements haut de gamme. Spécialisée dans les costumes, chemises et tenues raffinées, la marque célèbre le style et le savoi",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f91003b062a_ara.jpg",
    "categorie": "Mode & Bijoux"
  },
  {
    "id": 49,
    "title": "OLGA",
    "description": "OLGA offre des vêtements et accessoires féminins élégants et tendances. La marque met l’accent sur la qualité, le confort et le style moderne. Chaque pièce est conçue pour sublimer la féminit",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f90be2c0b32_ELY10016.jpg",
    "categorie": "Mode & Bijoux"
  },
  {
    "id": 48,
    "title": "GABRI",
    "description": "Gabri est une marque de chaussures 100 % cuir dédiée aux hommes exigeants. Elle associe artisanat, élégance et durabilité pour un style distingué en toute occasion. Chaque paire incarne le ma",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f90cc657d47_ELY19962.jpg",
    "categorie": "Mode & Bijoux"
  },
  {
    "id": 47,
    "title": "ELITE",
    "description": "ELITE est une boutique élégante dédiée aux femmes modernes. Elle propose une collection chic de chaussures, d’accessoires et de valises alliant style et praticité. Chaque pièce est pensée pou",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f9099984b97_ELY10051.jpg",
    "categorie": "Mode & Bijoux"
  },
  {
    "id": 46,
    "title": "FLO",
    "description": "Flo est spécialisé dans les chaussures pour toute la famille, alliant style et confort. La marque propose des modèles variés pour toutes les occasions. Chaque paire est pensée pour suivre les",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f908b23a683_ELY10120.jpg",
    "categorie": "Mode & Bijoux"
  },
  {
    "id": 45,
    "title": "Koton",
    "description": "Koton offre des vêtements et accessoires inspirés des dernières tendances de la mode. La marque se distingue par son style jeune, frais et accessible. Chaque pièce est conçue pour exprimer pe",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f90c706dd22_ELY10122.jpg",
    "categorie": "Mode & Bijoux"
  },
  {
    "id": 44,
    "title": "DeFacto",
    "description": "DeFacto propose des vêtements contemporains pour hommes, femmes et enfants. La marque allie tendance, qualité et accessibilité pour tous les styles. Chaque collection reflète un esprit modern",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f90d0ab9775_ELY10119.jpg",
    "categorie": "Mode & Bijoux"
  },
  {
    "id": 43,
    "title": "Kichoix",
    "description": "Kichoix est une boutique spécialisée dans les produits pratiques et tendance pour la maison et le quotidien. Elle offre une sélection variée d’articles utiles et de qualité. L’expérience shop",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f90c8af0cc3_ELY10126.jpg",
    "categorie": "Mode & Bijoux"
  },
  {
    "id": 42,
    "title": "LC WAIKIKI",
    "description": "LC Waikiki propose des vêtements modernes et accessibles pour toute la famille. La marque allie confort, style et qualité à prix abordable. Chaque collection suit les tendances pour habiller ",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f909d3a1c3f_ELY10050.jpg",
    "categorie": "Mode & Bijoux"
  },
  {
    "id": 41,
    "title": "Evana",
    "description": "Evana est une marque de chaussures qui allie élégance, confort et modernité. Evana propose des modèles alliant design raffiné et qualité des matériaux. ",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f905f79ab4d_ELY10020.jpg",
    "categorie": "Mode & Bijoux"
  },
  {
    "id": 14,
    "title": "Carrefour Market",
    "description": "Carrefour Market est un supermarché proposant une large gamme de produits alimentaires, boissons et articles du quotidien.",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f925b63bc3d_ELY19892.jpg",
    "categorie": "Supermarche"
  }
] satisfies SourceShop[];

export const sourceShoppingCategories = [
  "Supermarche",
  "Mode & Bijoux",
  "Divers",
  "High-Tech & Accessoires",
  "Jouets & Loisirs",
  "Beauté et bien être"
] satisfies string[];

export const sourceRestaurants = [
  {
    "id": 13,
    "title": "Happy Yog",
    "description": "Happy Yog propose des crêpes savoureuses, des glaces au yaourt fraîches et des jus préparés à la minute. ",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/690399e7dd688_ELY10266.jpg"
  },
  {
    "id": 15,
    "title": "Le Box ",
    "description": "Le Box propose un large choix de gourmandises allant des sushis aux pâtes, en passant par burgers et hot-dogs.",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/69039c3e3ce31_ELY10265.jpg"
  },
  {
    "id": 16,
    "title": "Bollywood Café",
    "description": "Bollywood Café vous invite à découvrir les saveurs authentiques de l’Inde à travers une sélection de plats généreux et parfumés.",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/69039eee79f51_ELY10285.jpg"
  },
  {
    "id": 17,
    "title": "Pizza Factory ",
    "description": "Pizza Factory propose des pizzas savoureuses préparées avec des ingrédients frais et des recettes variées pour tous les goûts.",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/69039f2d7c1ac_ELY10254.jpg"
  },
  {
    "id": 18,
    "title": "Bella Italia",
    "description": "Bella Italia sert des pizzas traditionnelles aux saveurs italiennes authentiques, préparées avec des ingrédients de qualité.",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/69039f66ecbe8_ELY10268.jpg"
  },
  {
    "id": 19,
    "title": "Tacos Français ",
    "description": "Tacos Français propose des tacos généreusement garnis, préparés à la française avec des sauces au choix et des saveurs variées.",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/69039fac41bde_ELY10286.jpg"
  },
  {
    "id": 20,
    "title": "Kebab & Tacos",
    "description": "Kebab & Tacos offre un large choix de kebabs et tacos savoureux, préparés rapidement pour un repas sur le pouce.",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/69039fd3c8173_ELY10271.jpg"
  },
  {
    "id": 21,
    "title": "Oriental Legend",
    "description": "Oriental Legend est un glacier artisanal proposant des glaces et sorbets faits maison aux saveurs variées et authentiques.",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903a2bfaa50c_ELY19968.jpg"
  },
  {
    "id": 22,
    "title": "Alwardeh Alshamieh",
    "description": "Alwardeh Alshamieh propose des pâtisseries orientales traditionnelles riches en saveurs et en douceur.",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903a314f3079_ELY19988.jpg"
  },
  {
    "id": 23,
    "title": "Burger King",
    "description": "Burger King est une chaîne de fast-food célèbre pour ses burgers juteux, frites croustillantes et menus rapides.",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903a360a36a2_ELY10063.jpg"
  },
  {
    "id": 24,
    "title": "Kaspas Desserts",
    "description": "Kaspas Desserts propose une large sélection de desserts gourmands, allant des milkshakes aux glaces et gâteaux.",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903a3b7262a7_ELY19886.jpg"
  },
  {
    "id": 25,
    "title": "Costa Coffee ",
    "description": "Costa Coffee sert cafés, thés et boissons chaudes de qualité, accompagnés de pâtisseries et en-cas variés.",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903a3de2de03_ELY19880.jpg"
  },
  {
    "id": 26,
    "title": "Carteer Square",
    "description": "Carteer Square propose une variété de plats, allant des kebabs et pizzas aux pâtes et autres spécialités.",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903a49017ac0_ELY19873.jpg"
  },
  {
    "id": 27,
    "title": "Victor ",
    "description": "Victor propose un petit‑déjeuner complet ainsi qu’une carte variée de plats marocains et internationaux, accompagnée d’une section pâtisserie pour les gourmands.",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903a4ebabdb5_ELY19868.jpg"
  },
  {
    "id": 28,
    "title": "Kasbah Café",
    "description": "Kasbah Café sert des petits-déjeuners copieux, des plats marocains et internationaux, ainsi que de savoureuses pâtisseries.",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903a5b682225_ELY19960.jpg"
  },
  {
    "id": 29,
    "title": "PAUL",
    "description": "PAUL propose des viennoiseries, tartes, sandwiches et cafés préparés dans la tradition française.",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903a5d5b1d3e_ELY19958.jpg"
  },
  {
    "id": 30,
    "title": "Papa John’s",
    "description": "Papa John’s propose des pizzas généreuses préparées avec des ingrédients frais, tandis que Chili’s sert des plats tex-mex, burgers et grillades savoureux",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903a638df631_ELY10290.jpg"
  },
  {
    "id": 31,
    "title": "Venezia Ice ",
    "description": "Venezia Ice est un glacier artisanal proposant des glaces et sorbets faits maison aux saveurs variées.",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903a6ed6a7e2_ELY19920.jpg"
  }
] satisfies SourceRestaurant[];

export const sourceKidzo = [
  {
    "id": 12,
    "title": "Kidzo",
    "description": "L’univers magique des enfants vous attend à Kidzo – Menara Mall",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68c02cc799f1f_Design sans titre (6).png",
    "createdAt": "2025-09-09T13:32:15.068Z"
  },
  {
    "id": 11,
    "title": "Kidzo",
    "description": "L’univers magique des enfants vous attend à Kidzo – Menara Mall",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68c029e246930_Design sans titre (5).png",
    "createdAt": "2025-09-09T13:27:34.331Z"
  },
  {
    "id": 10,
    "title": "Kidzo",
    "description": "L’univers magique des enfants vous attend à Kidzo – Menara Mall",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68c02b9db81ca_ChatGPT Image 9 sept. 2025, 14_26_21.png",
    "createdAt": "2025-09-09T13:27:15.159Z"
  },
  {
    "id": 9,
    "title": "Kidzo",
    "description": "L’univers magique des enfants vous attend à Kidzo – Menara Mall",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68c0290187fb6_ChatGPT Image 9 sept. 2025, 14_15_40.png",
    "createdAt": "2025-09-09T13:16:37.594Z"
  },
  {
    "id": 7,
    "title": "Kidzo",
    "description": "L’univers magique des enfants vous attend à Kidzo – Menara Mall",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68c01cdf8d430_ChatGPT Image 9 sept. 2025, 13_23_49.png",
    "createdAt": "2025-09-06T17:19:29.153Z"
  },
  {
    "id": 6,
    "title": "Kidzo",
    "description": "L’univers magique des enfants vous attend à Kidzo – Menara Mall",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68c021d137c43_ChatGPT Image 9 sept. 2025, 13_44_47.png",
    "createdAt": "2025-09-06T17:19:13.252Z"
  },
  {
    "id": 5,
    "title": "Kidzo",
    "description": "L’univers magique des enfants vous attend à Kidzo – Menara Mall",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68c0271eb8806_Design sans titre (4).png",
    "createdAt": "2025-09-06T17:16:08.557Z"
  },
  {
    "id": 4,
    "title": "Kidzo",
    "description": "L’univers magique des enfants vous attend à Kidzo – Menara Mall",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68c02713e9d51_Design sans titre (1).png",
    "createdAt": "2025-09-06T17:15:54.796Z"
  },
  {
    "id": 3,
    "title": "Kidzo",
    "description": "L’univers magique des enfants vous attend à Kidzo – Menara Mall",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68c027098bf61_Design sans titre (2).png",
    "createdAt": "2025-09-06T17:15:43.652Z"
  },
  {
    "id": 2,
    "title": "Kidzo",
    "description": "L’univers magique des enfants vous attend à Kidzo – Menara Mall",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68c0280e7f794_Design sans titre (3).png",
    "createdAt": "2025-09-06T17:15:32.624Z"
  }
] satisfies SourceKidzoItem[];

export const sourceSouk = [
  {
    "id": "cmhdqsgu30000u9ocx8yoyt33",
    "title": "souk",
    "description": "Plongez dans un univers sensoriel où les épices colorées, huiles d’argan précieuses, henné parfumé, savons artisanaux et huiles essentielles se mêlent aux poudres pour soins et masques.",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903a9efb2a84_ELY10080.jpg"
  },
  {
    "id": "cmhdqta7r0001u9ocj6l5uhcn",
    "title": "souk",
    "description": "Entrez dans un écrin où caftans, djellabas et gandouras pour hommes et femmes dansent au rythme des broderies et des couleurs.",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903aab7ad5af_ELY10099.jpg"
  },
  {
    "id": "cmhdqtw050002u9ock385jd5a",
    "title": "souk",
    "description": "Découvrez un trésor d’objets uniques du Maroc et d’Égypte, entre céramiques peintes à la main, bijoux délicats et décorations artisanales.",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903aad27bd50_ELY10100.jpg"
  },
  {
    "id": "cmhdquuju0003u9ocqes2mjx0",
    "title": "souk",
    "description": "Parcourez un univers scintillant où bijoux en argent traditionnels et modernes se mêlent pour hommes et femmes.",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903aaff0d7b6_ELY10075.jpg"
  },
  {
    "id": "cmhdqywvu0000u92ww4ymtcjo",
    "title": "souk",
    "description": "Découvrez des caftans, djellabas et gandouras pour hommes, femmes et enfants, ornés de broderies raffinées et de couleurs éclatantes.",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903ab5c27ca4_ELY10085.jpg"
  },
  {
    "id": "cmhdr02d90001u92wqc4oaf2s",
    "title": "souk",
    "description": "Plongez dans un univers où mode traditionnelle, objets de décoration et souvenirs se rencontrent avec élégance et authenticité.",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903abea64410_ELY10096.jpg"
  },
  {
    "id": "cmhdr1hu50002u92w0h9tkokx",
    "title": "souk",
    "description": "Explorez une collection raffinée de caftans, djellabas et gandouras pour tous, aux broderies délicates et aux couleurs éclatantes.",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903ac37ceeb3_ELY10098.jpg"
  },
  {
    "id": "cmhdr5vo90003u92wzfy67pdn",
    "title": "souk",
    "description": "Entre tissus chatoyants, souvenirs enchanteurs et effluves de savons, brumes et masques bio, chaque objet raconte une histoire.",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903ad0248cf9_ELY10102.jpg"
  },
  {
    "id": "cmhdr7gow0004u92wp812nloj",
    "title": "souk",
    "description": "Parcourez un univers où souvenirs, céramiques finement travaillées et tenues traditionnelles se côtoient avec harmonie.",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903ad4e91a87_ELY10083.jpg"
  },
  {
    "id": "cmhdr9nex0005u92wkt2loup6",
    "title": "souk",
    "description": "Un lieu où tote bags, céramiques, sacs en cuir, souvenirs et lampadaires s’entrelacent dans un ballet de couleurs et de textures.",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903adb32c689_ELY10091.jpg"
  },
  {
    "id": "cmhdrc63q0006u92wdae1ykc6",
    "title": "souk",
    "description": "Découvrez un écrin de caftans, takchitas, djellabas et accessoires traditionnels, où chaque pièce célèbre l’élégance marocaine.",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903ae257bbc0_ELY10073.jpg"
  },
  {
    "id": "cmhdrdu1o0007u92w1rmi5k68",
    "title": "souk",
    "description": "Un lieu où se mêlent tenues traditionnelles et contemporaines, aux côtés de vêtements professionnels pour le secteur de la santé.",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903ae6fd1479_ELY10070.jpg"
  },
  {
    "id": "cmhdrgpf50008u92w0i359s58",
    "title": "souk",
    "description": "Argalista propose des cosmétiques naturels à base d’ingrédients précieux comme l’argan, les huiles essentielles et les extraits de plantes.",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903aefb89591_ELY10094.jpg"
  },
  {
    "id": "cmhdrigjw0009u92w0zxur4jj",
    "title": "souk",
    "description": "Un véritable festival de couleurs et de senteurs où se mêlent épices rares et mélanges traditionnels.",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903af4f5cb68_ELY10082.jpg"
  },
  {
    "id": "cmhdrke4l000au92w8qovewhv",
    "title": "souk",
    "description": "Un lieu où tenues traditionnelles, babouches finement travaillées et souvenirs authentiques se rencontrent avec élégance.",
    "imageUrl": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/6903afa6b83a4_ELY10097.jpg"
  }
] satisfies SourceSoukItem[];
