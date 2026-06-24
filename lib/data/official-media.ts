const UPLOADS =
  "https://ghostwhite-goldfinch-864066.hostingersite.com/uploads/UPLODESYSTEME/images";

export const officialMedia = {
  homeHero: `${UPLOADS}/68f927699e1da_ELY19905.jpg`,
  /** The live menaramall.com hero is a 3-slide carousel (verified on site). */
  heroSlides: [
    `${UPLOADS}/68f927699e1da_ELY19905.jpg`,
    `${UPLOADS}/68f928a683f84_ELY19936.jpg`,
    `${UPLOADS}/68fe35235aad8_IMG_5369.JPEG`,
  ],

  /* Section images as used by the live menaramall.com homepage (verified). */
  shoppingFeature: `${UPLOADS}/68bef99733c12_ChatGPT Image 8 sept. 2025, 16_40_59.png`,
  kidzoFeature: `${UPLOADS}/68befdd53614e_ChatGPT Image 8 sept. 2025, 16_59_17.png`,
  diningFeature: `${UPLOADS}/6903a5d5b1d3e_ELY19958.jpg`,

  shoppingHero: `${UPLOADS}/69074eaf6efc1_ELY19969.jpg`,
  diningHero: `${UPLOADS}/6907499ca13a4_header resataurant 2.jpg`,
  kidzoHero: `${UPLOADS}/68f92df1049d4_ELY10130.jpg`,
  kidzoPlay: `${UPLOADS}/68f92e72b49e5_ELY10155.jpg`,
  soukHero: `${UPLOADS}/69074d10d8861_header souq 2.jpg`,
  soukDetail: `${UPLOADS}/6903a9efb2a84_ELY10080.jpg`,
  fountains: `${UPLOADS}/68640dd247672_slide1-4 1.png`,
  gallery: [
    `${UPLOADS}/68f928a683f84_ELY19936.jpg`,
    `${UPLOADS}/68fe35235aad8_IMG_5369.JPEG`,
    `${UPLOADS}/6903b16022a2f_ELY10231.jpg`,
    `${UPLOADS}/6903ad0248cf9_ELY10102.jpg`,
    `${UPLOADS}/6903a5d5b1d3e_ELY19958.jpg`,
    `${UPLOADS}/68f925b63bc3d_ELY19892.jpg`,
  ],
  /** Commercial partner logos from the live "Nos partenaires commerciaux" carousel. */
  partners: [
    `${UPLOADS}/68ffbb05c421d_1.png`,
    `${UPLOADS}/68ffbb2ad7d69_2.png`,
    `${UPLOADS}/68ffbb9c4876f_5.png`,
    `${UPLOADS}/68ffbba02604f_6.png`,
    `${UPLOADS}/68ffbba597d66_7.png`,
    `${UPLOADS}/68ffbbab6776d_8.png`,
    `${UPLOADS}/68ffbbb1b3482_9.png`,
    `${UPLOADS}/68ffbbb78262e_10.png`,
  ],
} as const;
