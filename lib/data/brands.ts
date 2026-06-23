import type { Brand, OpeningHours } from "@/lib/types";

const std: OpeningHours = [
  { open: "10:00", close: "22:00" },
  { open: "10:00", close: "22:00" },
  { open: "10:00", close: "22:00" },
  { open: "10:00", close: "22:00" },
  { open: "10:00", close: "22:00" },
  { open: "10:00", close: "22:00" },
  { open: "10:00", close: "22:00" },
];

const grocery: OpeningHours = [
  { open: "09:00", close: "23:00" },
  { open: "09:00", close: "23:00" },
  { open: "09:00", close: "23:00" },
  { open: "09:00", close: "23:00" },
  { open: "09:00", close: "23:00" },
  { open: "09:00", close: "23:00" },
  { open: "09:00", close: "23:00" },
];

/** Official shopping directory sourced from https://www.menaramall.com/api/shopping. */
export const brands: Brand[] = [
  {
    "id": "b-official-79",
    "name": "Exchange",
    "slug": "exchange",
    "monogram": "E",
    "category": "Services",
    "floor": "Mall Directory",
    "locationLabel": "Menara Mall · Official shopping directory",
    "description": "Exchange est un bureau de change proposant des services rapides et sécurisés pour toutes vos transactions de devises.",
    "openingHours": std,
    "featured": false,
    "tags": [
      "Divers"
    ],
    "heroArt": "Exchange at Menara Mall Marrakech",
    "imageSrc": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f931cc84a36_ELY19922.jpg",
    "gallery": [
      "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f931cc84a36_ELY19922.jpg"
    ]
  },
  {
    "id": "b-official-78",
    "name": "Galerie Menara Mall",
    "slug": "galerie-menara-mall",
    "monogram": "GM",
    "category": "Moroccan Craft",
    "floor": "Mall Directory",
    "locationLabel": "Menara Mall · Official shopping directory",
    "description": "Galerie Menara Mall est un espace artistique dédié à l’exposition et à la vente de tableaux de différents styles. Elle offre aux amateurs d’art un lieu unique pour découvrir des œuvres variée",
    "openingHours": std,
    "featured": false,
    "tags": [
      "Divers"
    ],
    "heroArt": "Galerie Menara Mall at Menara Mall Marrakech",
    "imageSrc": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f92ef48c41a_ELY10001.jpg",
    "gallery": [
      "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f92ef48c41a_ELY10001.jpg"
    ]
  },
  {
    "id": "b-official-76",
    "name": "LE COIN CHIC",
    "slug": "le-coin-chic",
    "monogram": "LC",
    "category": "Fashion",
    "floor": "Mall Directory",
    "locationLabel": "Menara Mall · Official shopping directory",
    "description": "Le Coin Chic est une boutique proposant des articles de mode de luxe pour femmes et hommes. Chaque pièce allie élégance, qualité et design raffiné pour un style sophistiqué.",
    "openingHours": std,
    "featured": false,
    "tags": [
      "Mode & Bijoux"
    ],
    "heroArt": "LE COIN CHIC at Menara Mall Marrakech",
    "imageSrc": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f925f21e394_ELY10061.jpg",
    "gallery": [
      "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f925f21e394_ELY10061.jpg"
    ]
  },
  {
    "id": "b-official-75",
    "name": "Uno",
    "slug": "uno",
    "monogram": "U",
    "category": "Electronics",
    "floor": "Mall Directory",
    "locationLabel": "Menara Mall · Official shopping directory",
    "description": "Uno est un revendeur agréé Apple proposant smartphones, tablettes, ordinateurs et accessoires officiels. La boutique offre également des services de conseil et d’assistance pour tous vos appa",
    "openingHours": std,
    "featured": true,
    "tags": [
      "High-Tech & Accessoires",
      "Tech"
    ],
    "heroArt": "Uno at Menara Mall Marrakech",
    "imageSrc": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f924c08b45a_ELY19970.jpg",
    "gallery": [
      "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f924c08b45a_ELY19970.jpg"
    ]
  },
  {
    "id": "b-official-74",
    "name": "Princes Jewellery",
    "slug": "princes-jewellery",
    "monogram": "PJ",
    "category": "Fashion",
    "floor": "Mall Directory",
    "locationLabel": "Menara Mall · Official shopping directory",
    "description": "Princes Jewellery propose des bijoux modernes et traditionnels en acier et en or. La boutique offre des créations uniques adaptées à toutes les occasions.",
    "openingHours": std,
    "featured": false,
    "tags": [
      "Mode & Bijoux",
      "Jewelry"
    ],
    "heroArt": "Princes Jewellery at Menara Mall Marrakech",
    "imageSrc": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f921fc368c8_ELY10027.jpg",
    "gallery": [
      "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f921fc368c8_ELY10027.jpg"
    ]
  },
  {
    "id": "b-official-73",
    "name": "Beauty & Beyond",
    "slug": "beauty-and-beyond",
    "monogram": "B&",
    "category": "Beauty",
    "floor": "Mall Directory",
    "locationLabel": "Menara Mall · Official shopping directory",
    "description": "Beauty & Beyond est une boutique dédiée à la beauté, proposant maquillage, soins et parfums venus d’Orient et d’Europe.",
    "openingHours": std,
    "featured": false,
    "tags": [
      "Beauté et bien être"
    ],
    "heroArt": "Beauty & Beyond at Menara Mall Marrakech",
    "imageSrc": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f92194245db_ELY19972.jpg",
    "gallery": [
      "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f92194245db_ELY19972.jpg"
    ]
  },
  {
    "id": "b-official-72",
    "name": "Pièce Unique",
    "slug": "piece-unique",
    "monogram": "PU",
    "category": "Fashion",
    "floor": "Mall Directory",
    "locationLabel": "Menara Mall · Official shopping directory",
    "description": "Pièce Unique est un bijoutier proposant des créations originales alliant savoir-faire marocain et design artistique. Chaque bijou, en or et pierres précieuses, reflète une touche artisanale u",
    "openingHours": std,
    "featured": false,
    "tags": [
      "Mode & Bijoux",
      "Jewelry"
    ],
    "heroArt": "Pièce Unique at Menara Mall Marrakech",
    "imageSrc": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f920fecf64d_ELY10003.jpg",
    "gallery": [
      "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f920fecf64d_ELY10003.jpg"
    ]
  },
  {
    "id": "b-official-71",
    "name": "Swiss Arabian",
    "slug": "swiss-arabian",
    "monogram": "SA",
    "category": "Beauty",
    "floor": "Mall Directory",
    "locationLabel": "Menara Mall · Official shopping directory",
    "description": "Swiss Arabian est une maison de parfumerie alliant tradition orientale et modernité. Elle propose des parfums, huiles et fragrances uniques pour hommes et femmes. Chaque création reflète élég",
    "openingHours": std,
    "featured": false,
    "tags": [
      "Beauté et bien être"
    ],
    "heroArt": "Swiss Arabian at Menara Mall Marrakech",
    "imageSrc": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f9200b1b5c3_ELY19978.jpg",
    "gallery": [
      "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f9200b1b5c3_ELY19978.jpg"
    ]
  },
  {
    "id": "b-official-70",
    "name": "Benji Luxury Shop",
    "slug": "benji-luxury-shop",
    "monogram": "BL",
    "category": "Fashion",
    "floor": "Mall Directory",
    "locationLabel": "Menara Mall · Official shopping directory",
    "description": "Benji Luxury Shop propose des bijoux et accessoires en acier inoxydable alliant élégance, modernité et durabilité.",
    "openingHours": std,
    "featured": false,
    "tags": [
      "Mode & Bijoux",
      "Jewelry",
      "Tech"
    ],
    "heroArt": "Benji Luxury Shop at Menara Mall Marrakech",
    "imageSrc": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f91f9110ea1_ELY19983 (1).jpg",
    "gallery": [
      "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f91f9110ea1_ELY19983 (1).jpg"
    ]
  },
  {
    "id": "b-official-69",
    "name": "PopKase",
    "slug": "popkase",
    "monogram": "P",
    "category": "Electronics",
    "floor": "Mall Directory",
    "locationLabel": "Menara Mall · Official shopping directory",
    "description": "PopKase propose des coques et accessoires personnalisés pour téléphones, tablettes et ordinateurs. Des designs créatifs et colorés alliant protection et style.",
    "openingHours": std,
    "featured": false,
    "tags": [
      "High-Tech & Accessoires",
      "Tech"
    ],
    "heroArt": "PopKase at Menara Mall Marrakech",
    "imageSrc": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f91ef175238_ELY19965.jpg",
    "gallery": [
      "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f91ef175238_ELY19965.jpg"
    ]
  },
  {
    "id": "b-official-67",
    "name": "Barber Shop Gentlemen Club",
    "slug": "barber-shop-gentlemen-club",
    "monogram": "BS",
    "category": "Beauty",
    "floor": "Mall Directory",
    "locationLabel": "Menara Mall · Official shopping directory",
    "description": "Barber Shop Gentlemen Club est un salon de coiffure masculin offrant un service premium alliant tradition et modernité. Chaque visite garantit une expérience relaxante dans un cadre élégant",
    "openingHours": std,
    "featured": false,
    "tags": [
      "Beauté et bien être",
      "Salon"
    ],
    "heroArt": "Barber Shop Gentlemen Club at Menara Mall Marrakech",
    "imageSrc": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f91c5cc0d09_ELY10012.jpg",
    "gallery": [
      "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f91c5cc0d09_ELY10012.jpg"
    ]
  },
  {
    "id": "b-official-66",
    "name": "Barber Signes",
    "slug": "barber-signes",
    "monogram": "BS",
    "category": "Beauty",
    "floor": "Mall Directory",
    "locationLabel": "Menara Mall · Official shopping directory",
    "description": "Barber Signes est un salon de coiffure masculin qui allie style, précision et savoir-faire. Il propose des coupes modernes, tailles de barbe et soins capillaires pour un look soigné et person",
    "openingHours": std,
    "featured": false,
    "tags": [
      "Beauté et bien être",
      "Salon"
    ],
    "heroArt": "Barber Signes at Menara Mall Marrakech",
    "imageSrc": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f913ac5a950_ELY10034.jpg",
    "gallery": [
      "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f913ac5a950_ELY10034.jpg"
    ]
  },
  {
    "id": "b-official-65",
    "name": "L’Artiste VIP",
    "slug": "lartiste-vip",
    "monogram": "LV",
    "category": "Beauty",
    "floor": "Mall Directory",
    "locationLabel": "Menara Mall · Official shopping directory",
    "description": "L’Artiste VIP est un salon de beauté offrant une expérience haut de gamme alliant expertise et élégance. Le salon propose une large gamme de soins esthétiques, coiffure et maquillage pour sub",
    "openingHours": std,
    "featured": false,
    "tags": [
      "Beauté et bien être",
      "Salon"
    ],
    "heroArt": "L’Artiste VIP at Menara Mall Marrakech",
    "imageSrc": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f912fe3d537_ELY10031.jpg",
    "gallery": [
      "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f912fe3d537_ELY10031.jpg"
    ]
  },
  {
    "id": "b-official-64",
    "name": "Yves Rocher",
    "slug": "yves-rocher",
    "monogram": "YR",
    "category": "Beauty",
    "floor": "Mall Directory",
    "locationLabel": "Menara Mall · Official shopping directory",
    "description": "Yves Rocher est une marque de cosmétiques et de soins inspirée par la nature. Elle propose des produits de beauté respectueux de la peau et de l’environnement.",
    "openingHours": std,
    "featured": true,
    "tags": [
      "Beauté et bien être"
    ],
    "heroArt": "Yves Rocher at Menara Mall Marrakech",
    "imageSrc": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f913fdeaf9c_ELY10052.jpg",
    "gallery": [
      "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f913fdeaf9c_ELY10052.jpg"
    ]
  },
  {
    "id": "b-official-62",
    "name": "Mariolina",
    "slug": "mariolina",
    "monogram": "M",
    "category": "Kids",
    "floor": "Mall Directory",
    "locationLabel": "Menara Mall · Official shopping directory",
    "description": "Mariolina est une boutique dédiée aux enfants, proposant des jouets variés et des mascottes amusantes pour éveiller l’imagination.",
    "openingHours": std,
    "featured": false,
    "tags": [
      "Jouets & Loisirs"
    ],
    "heroArt": "Mariolina at Menara Mall Marrakech",
    "imageSrc": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f919c43b0ee_ELY10215.jpg",
    "gallery": [
      "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f919c43b0ee_ELY10215.jpg"
    ]
  },
  {
    "id": "b-official-61",
    "name": "MonJouet",
    "slug": "monjouet",
    "monogram": "M",
    "category": "Kids",
    "floor": "Mall Directory",
    "locationLabel": "Menara Mall · Official shopping directory",
    "description": "MonJouet est une boutique spécialisée dans les jouets, les jeux éducatifs et les jeux de société pour tous les âges. Elle propose des produits ludiques qui stimulent imagination, créativité e",
    "openingHours": std,
    "featured": false,
    "tags": [
      "Jouets & Loisirs"
    ],
    "heroArt": "MonJouet at Menara Mall Marrakech",
    "imageSrc": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f91957f3ea8_ELY10005.jpg",
    "gallery": [
      "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f91957f3ea8_ELY10005.jpg"
    ]
  },
  {
    "id": "b-official-59",
    "name": "MINISO",
    "slug": "miniso",
    "monogram": "M",
    "category": "Electronics",
    "floor": "Mall Directory",
    "locationLabel": "Menara Mall · Official shopping directory",
    "description": "Miniso est une boutique lifestyle proposant une large gamme de produits design et abordables pour la maison, la beauté, les accessoires et les gadgets du quotidien.",
    "openingHours": std,
    "featured": true,
    "tags": [
      "High-Tech & Accessoires",
      "Tech"
    ],
    "heroArt": "MINISO at Menara Mall Marrakech",
    "imageSrc": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f9183b46d14_ELY10036 (2).jpg",
    "gallery": [
      "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f9183b46d14_ELY10036 (2).jpg"
    ]
  },
  {
    "id": "b-official-57",
    "name": "CLIP ELECTRO",
    "slug": "clip-electro",
    "monogram": "CE",
    "category": "Electronics",
    "floor": "Mall Directory",
    "locationLabel": "Menara Mall · Official shopping directory",
    "description": "Clip Electro est une boutique spécialisée dans les accessoires pour téléphones, tablettes et ordinateurs. Elle propose un large choix d’articles high-tech, de pochettes personnalisées et de g",
    "openingHours": std,
    "featured": false,
    "tags": [
      "High-Tech & Accessoires",
      "Tech"
    ],
    "heroArt": "CLIP ELECTRO at Menara Mall Marrakech",
    "imageSrc": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f914648dd4d_ELY19992.jpg",
    "gallery": [
      "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f914648dd4d_ELY19992.jpg"
    ]
  },
  {
    "id": "b-official-56",
    "name": "VAPOKECH",
    "slug": "vapokech",
    "monogram": "V",
    "category": "Electronics",
    "floor": "Mall Directory",
    "locationLabel": "Menara Mall · Official shopping directory",
    "description": "Vapokech est une boutique spécialisée dans l’univers de la vape et de ses accessoires. Elle propose une large sélection de cigarettes électroniques, e-liquides et pods de qualité.",
    "openingHours": std,
    "featured": false,
    "tags": [
      "High-Tech & Accessoires",
      "Tech"
    ],
    "heroArt": "VAPOKECH at Menara Mall Marrakech",
    "imageSrc": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f914cf1244b_ELY19982.jpg",
    "gallery": [
      "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f914cf1244b_ELY19982.jpg"
    ]
  },
  {
    "id": "b-official-55",
    "name": "Maroc Telecom",
    "slug": "maroc-telecom",
    "monogram": "MT",
    "category": "Services",
    "floor": "Mall Directory",
    "locationLabel": "Menara Mall · Official shopping directory",
    "description": "Maroc Telecom est le leader national des télécommunications, offrant des services innovants et fiables.",
    "openingHours": std,
    "featured": false,
    "tags": [
      "Divers",
      "Tech"
    ],
    "heroArt": "Maroc Telecom at Menara Mall Marrakech",
    "imageSrc": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f911d627665_ELY10009.jpg",
    "gallery": [
      "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f911d627665_ELY10009.jpg"
    ]
  },
  {
    "id": "b-official-54",
    "name": "Z Création",
    "slug": "z-creation",
    "monogram": "ZC",
    "category": "Fashion",
    "floor": "Mall Directory",
    "locationLabel": "Menara Mall · Official shopping directory",
    "description": "Z Création est une marque de vêtements féminins qui célèbre l’originalité et la créativité. Elle propose des pièces uniques, colorées et pleines de caractère pour affirmer son style avec conf",
    "openingHours": std,
    "featured": false,
    "tags": [
      "Mode & Bijoux"
    ],
    "heroArt": "Z Création at Menara Mall Marrakech",
    "imageSrc": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f9083b430a2_ELY19996.jpg",
    "gallery": [
      "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f9083b430a2_ELY19996.jpg"
    ]
  },
  {
    "id": "b-official-53",
    "name": "Noctichic",
    "slug": "noctichic",
    "monogram": "N",
    "category": "Fashion",
    "floor": "Mall Directory",
    "locationLabel": "Menara Mall · Official shopping directory",
    "description": "Noctichic est une marque de lingerie glamour dédiée aux femmes audacieuses et élégantes. Chaque pièce allie sensualité, confort et raffinement pour sublimer la féminité.",
    "openingHours": std,
    "featured": false,
    "tags": [
      "Mode & Bijoux"
    ],
    "heroArt": "Noctichic at Menara Mall Marrakech",
    "imageSrc": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f9080d1371e_ELY10019.jpg",
    "gallery": [
      "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f9080d1371e_ELY10019.jpg"
    ]
  },
  {
    "id": "b-official-52",
    "name": "be sport",
    "slug": "be-sport",
    "monogram": "BS",
    "category": "Fashion",
    "floor": "Mall Directory",
    "locationLabel": "Menara Mall · Official shopping directory",
    "description": "BeSport est la destination des passionnés de sport et de fitness. Elle propose des équipements, chaussures et vêtements adaptés à toutes les disciplines. La marque met l’accent sur performanc",
    "openingHours": std,
    "featured": false,
    "tags": [
      "Mode & Bijoux"
    ],
    "heroArt": "be sport at Menara Mall Marrakech",
    "imageSrc": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f90b431a3a4_ELY10054.jpg",
    "gallery": [
      "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f90b431a3a4_ELY10054.jpg"
    ]
  },
  {
    "id": "b-official-51",
    "name": "Bertrand Shoes",
    "slug": "bertrand-shoes",
    "monogram": "BS",
    "category": "Fashion",
    "floor": "Mall Directory",
    "locationLabel": "Menara Mall · Official shopping directory",
    "description": "Bertrand Shoes propose une large gamme de chaussures pour hommes et femmes. La marque allie qualité, confort et design élégant. Chaque modèle est pensé pour accompagner tous vos pas avec styl",
    "openingHours": std,
    "featured": false,
    "tags": [
      "Mode & Bijoux"
    ],
    "heroArt": "Bertrand Shoes at Menara Mall Marrakech",
    "imageSrc": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f90a302b390_ELY10026.jpg",
    "gallery": [
      "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f90a302b390_ELY10026.jpg"
    ]
  },
  {
    "id": "b-official-50",
    "name": "ARABLANCO",
    "slug": "arablanco",
    "monogram": "A",
    "category": "Fashion",
    "floor": "Mall Directory",
    "locationLabel": "Menara Mall · Official shopping directory",
    "description": "ArablanCo incarne l’élégance masculine à travers une collection de vêtements haut de gamme. Spécialisée dans les costumes, chemises et tenues raffinées, la marque célèbre le style et le savoi",
    "openingHours": std,
    "featured": false,
    "tags": [
      "Mode & Bijoux"
    ],
    "heroArt": "ARABLANCO at Menara Mall Marrakech",
    "imageSrc": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f91003b062a_ara.jpg",
    "gallery": [
      "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f91003b062a_ara.jpg"
    ]
  },
  {
    "id": "b-official-49",
    "name": "OLGA",
    "slug": "olga",
    "monogram": "O",
    "category": "Fashion",
    "floor": "Mall Directory",
    "locationLabel": "Menara Mall · Official shopping directory",
    "description": "OLGA offre des vêtements et accessoires féminins élégants et tendances. La marque met l’accent sur la qualité, le confort et le style moderne. Chaque pièce est conçue pour sublimer la féminit",
    "openingHours": std,
    "featured": false,
    "tags": [
      "Mode & Bijoux",
      "Tech"
    ],
    "heroArt": "OLGA at Menara Mall Marrakech",
    "imageSrc": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f90be2c0b32_ELY10016.jpg",
    "gallery": [
      "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f90be2c0b32_ELY10016.jpg"
    ]
  },
  {
    "id": "b-official-48",
    "name": "GABRI",
    "slug": "gabri",
    "monogram": "G",
    "category": "Fashion",
    "floor": "Mall Directory",
    "locationLabel": "Menara Mall · Official shopping directory",
    "description": "Gabri est une marque de chaussures 100 % cuir dédiée aux hommes exigeants. Elle associe artisanat, élégance et durabilité pour un style distingué en toute occasion. Chaque paire incarne le ma",
    "openingHours": std,
    "featured": false,
    "tags": [
      "Mode & Bijoux"
    ],
    "heroArt": "GABRI at Menara Mall Marrakech",
    "imageSrc": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f90cc657d47_ELY19962.jpg",
    "gallery": [
      "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f90cc657d47_ELY19962.jpg"
    ]
  },
  {
    "id": "b-official-47",
    "name": "ELITE",
    "slug": "elite",
    "monogram": "E",
    "category": "Fashion",
    "floor": "Mall Directory",
    "locationLabel": "Menara Mall · Official shopping directory",
    "description": "ELITE est une boutique élégante dédiée aux femmes modernes. Elle propose une collection chic de chaussures, d’accessoires et de valises alliant style et praticité. Chaque pièce est pensée pou",
    "openingHours": std,
    "featured": false,
    "tags": [
      "Mode & Bijoux",
      "Tech"
    ],
    "heroArt": "ELITE at Menara Mall Marrakech",
    "imageSrc": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f9099984b97_ELY10051.jpg",
    "gallery": [
      "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f9099984b97_ELY10051.jpg"
    ]
  },
  {
    "id": "b-official-46",
    "name": "FLO",
    "slug": "flo",
    "monogram": "F",
    "category": "Fashion",
    "floor": "Mall Directory",
    "locationLabel": "Menara Mall · Official shopping directory",
    "description": "Flo est spécialisé dans les chaussures pour toute la famille, alliant style et confort. La marque propose des modèles variés pour toutes les occasions. Chaque paire est pensée pour suivre les",
    "openingHours": std,
    "featured": false,
    "tags": [
      "Mode & Bijoux"
    ],
    "heroArt": "FLO at Menara Mall Marrakech",
    "imageSrc": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f908b23a683_ELY10120.jpg",
    "gallery": [
      "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f908b23a683_ELY10120.jpg"
    ]
  },
  {
    "id": "b-official-45",
    "name": "Koton",
    "slug": "koton",
    "monogram": "K",
    "category": "Fashion",
    "floor": "Mall Directory",
    "locationLabel": "Menara Mall · Official shopping directory",
    "description": "Koton offre des vêtements et accessoires inspirés des dernières tendances de la mode. La marque se distingue par son style jeune, frais et accessible. Chaque pièce est conçue pour exprimer pe",
    "openingHours": std,
    "featured": false,
    "tags": [
      "Mode & Bijoux",
      "Tech"
    ],
    "heroArt": "Koton at Menara Mall Marrakech",
    "imageSrc": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f90c706dd22_ELY10122.jpg",
    "gallery": [
      "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f90c706dd22_ELY10122.jpg"
    ]
  },
  {
    "id": "b-official-44",
    "name": "DeFacto",
    "slug": "defacto",
    "monogram": "D",
    "category": "Fashion",
    "floor": "Mall Directory",
    "locationLabel": "Menara Mall · Official shopping directory",
    "description": "DeFacto propose des vêtements contemporains pour hommes, femmes et enfants. La marque allie tendance, qualité et accessibilité pour tous les styles. Chaque collection reflète un esprit modern",
    "openingHours": std,
    "featured": true,
    "tags": [
      "Mode & Bijoux"
    ],
    "heroArt": "DeFacto at Menara Mall Marrakech",
    "imageSrc": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f90d0ab9775_ELY10119.jpg",
    "gallery": [
      "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f90d0ab9775_ELY10119.jpg"
    ]
  },
  {
    "id": "b-official-43",
    "name": "Kichoix",
    "slug": "kichoix",
    "monogram": "K",
    "category": "Fashion",
    "floor": "Mall Directory",
    "locationLabel": "Menara Mall · Official shopping directory",
    "description": "Kichoix est une boutique spécialisée dans les produits pratiques et tendance pour la maison et le quotidien. Elle offre une sélection variée d’articles utiles et de qualité. L’expérience shop",
    "openingHours": std,
    "featured": false,
    "tags": [
      "Mode & Bijoux"
    ],
    "heroArt": "Kichoix at Menara Mall Marrakech",
    "imageSrc": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f90c8af0cc3_ELY10126.jpg",
    "gallery": [
      "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f90c8af0cc3_ELY10126.jpg"
    ]
  },
  {
    "id": "b-official-42",
    "name": "LC WAIKIKI",
    "slug": "lc-waikiki",
    "monogram": "LW",
    "category": "Fashion",
    "floor": "Mall Directory",
    "locationLabel": "Menara Mall · Official shopping directory",
    "description": "LC Waikiki propose des vêtements modernes et accessibles pour toute la famille. La marque allie confort, style et qualité à prix abordable. Chaque collection suit les tendances pour habiller",
    "openingHours": std,
    "featured": true,
    "tags": [
      "Mode & Bijoux"
    ],
    "heroArt": "LC WAIKIKI at Menara Mall Marrakech",
    "imageSrc": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f909d3a1c3f_ELY10050.jpg",
    "gallery": [
      "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f909d3a1c3f_ELY10050.jpg"
    ]
  },
  {
    "id": "b-official-41",
    "name": "Evana",
    "slug": "evana",
    "monogram": "E",
    "category": "Fashion",
    "floor": "Mall Directory",
    "locationLabel": "Menara Mall · Official shopping directory",
    "description": "Evana est une marque de chaussures qui allie élégance, confort et modernité. Evana propose des modèles alliant design raffiné et qualité des matériaux.",
    "openingHours": std,
    "featured": false,
    "tags": [
      "Mode & Bijoux"
    ],
    "heroArt": "Evana at Menara Mall Marrakech",
    "imageSrc": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f905f79ab4d_ELY10020.jpg",
    "gallery": [
      "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f905f79ab4d_ELY10020.jpg"
    ]
  },
  {
    "id": "b-official-14",
    "name": "Carrefour Market",
    "slug": "carrefour-market",
    "monogram": "CM",
    "category": "Supermarket",
    "floor": "Ground Floor",
    "locationLabel": "Menara Mall · Carrefour Market",
    "description": "Carrefour Market est un supermarché proposant une large gamme de produits alimentaires, boissons et articles du quotidien.",
    "openingHours": grocery,
    "featured": true,
    "tags": [
      "Supermarche"
    ],
    "heroArt": "Carrefour Market at Menara Mall Marrakech",
    "imageSrc": "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f925b63bc3d_ELY19892.jpg",
    "gallery": [
      "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images/68f925b63bc3d_ELY19892.jpg"
    ]
  }
];

export const brandCategories = [
  "Fashion",
  "Beauty",
  "Jewelry",
  "Kids",
  "Home",
  "Sports",
  "Electronics",
  "Services",
  "Moroccan Craft",
  "Supermarket",
  "Entertainment",
] as const;

export const floors = ["Ground Floor", "First Floor", "Second Floor", "Mall Directory", "Food Court", "Le Souk"] as const;

export function getBrand(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}

export function relatedBrands(brand: Brand, limit = 3): Brand[] {
  return brands
    .filter((b) => b.slug !== brand.slug && b.category === brand.category)
    .concat(brands.filter((b) => b.slug !== brand.slug && b.category !== brand.category))
    .slice(0, limit);
}
