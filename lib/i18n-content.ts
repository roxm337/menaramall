import type { Locale } from "@/lib/i18n";

/**
 * Localized content layer.
 *
 * The sample data in `lib/data/*` keeps its canonical French values (which also
 * mirror the source API). This module supplies:
 *   1. `terms` — a dictionary that translates taxonomy values (categories,
 *      floors, restaurant types, tags, cuisines, location labels…) used as keys
 *      throughout the app, resolved at display time with `tr()`.
 *   2. Per-entity description translations for brands, restaurants and Le Souk.
 *   3. Fully localized service and offer content.
 *   4. `pageText` — every static string rendered by the server pages.
 *
 * Keeping logic keys canonical (French) means filtering/search keep working,
 * while only the displayed label is swapped for the active locale.
 */

type Tri = Record<Locale, string>;

/* ------------------------------------------------------------------ */
/* Taxonomy / term dictionary                                          */
/* ------------------------------------------------------------------ */

export const terms: Record<string, Tri> = {
  // Brand categories
  Mode: { fr: "Mode", en: "Fashion", ar: "الأزياء" },
  Beaute: { fr: "Beauté", en: "Beauty", ar: "الجمال" },
  Bijoux: { fr: "Bijoux", en: "Jewellery", ar: "المجوهرات" },
  Enfants: { fr: "Enfants", en: "Kids", ar: "الأطفال" },
  Maison: { fr: "Maison", en: "Home", ar: "المنزل" },
  Sport: { fr: "Sport", en: "Sport", ar: "الرياضة" },
  "High-Tech": { fr: "High-Tech", en: "Tech", ar: "التقنية" },
  Services: { fr: "Services", en: "Services", ar: "الخدمات" },
  "Artisanat marocain": { fr: "Artisanat marocain", en: "Moroccan crafts", ar: "الحرف المغربية" },
  Supermarche: { fr: "Supermarché", en: "Supermarket", ar: "سوبر ماركت" },
  Loisirs: { fr: "Loisirs", en: "Leisure", ar: "الترفيه" },

  // Floors
  "Rez-de-chaussee": { fr: "Rez-de-chaussée", en: "Ground floor", ar: "الطابق الأرضي" },
  "1er etage": { fr: "1er étage", en: "1st floor", ar: "الطابق الأول" },
  "2e etage": { fr: "2e étage", en: "2nd floor", ar: "الطابق الثاني" },
  "Galerie marchande": { fr: "Galerie marchande", en: "Shopping gallery", ar: "الرواق التجاري" },
  "Food Court": { fr: "Food Court", en: "Food Court", ar: "فود كورت" },
  "Le Souk": { fr: "Le Souk", en: "The Souk", ar: "السوق" },

  // Restaurant types
  Restaurant: { fr: "Restaurant", en: "Restaurant", ar: "مطعم" },
  Cafe: { fr: "Café", en: "Café", ar: "مقهى" },
  "Restauration rapide": { fr: "Restauration rapide", en: "Fast food", ar: "وجبات سريعة" },
  Dessert: { fr: "Dessert", en: "Dessert", ar: "حلويات" },

  // Offer categories (Mode / Beaute / High-Tech reuse the entries above)
  Restauration: { fr: "Restauration", en: "Dining", ar: "المطاعم" },
  Famille: { fr: "Famille", en: "Family", ar: "العائلة" },

  // Location labels
  "Menara Mall · Galerie marchande officielle": {
    fr: "Menara Mall · Galerie marchande officielle",
    en: "Menara Mall · Official shopping gallery",
    ar: "منارة مول · الرواق التجاري الرسمي",
  },
  "Menara Mall · Carrefour Market": {
    fr: "Menara Mall · Carrefour Market",
    en: "Menara Mall · Carrefour Market",
    ar: "منارة مول · كارفور ماركت",
  },
  "Menara Mall · Restaurants et cafes": {
    fr: "Menara Mall · Restaurants et cafés",
    en: "Menara Mall · Restaurants and cafés",
    ar: "منارة مول · مطاعم ومقاهٍ",
  },

  // Source categories used as brand tags
  "Mode & Bijoux": { fr: "Mode & Bijoux", en: "Fashion & Jewellery", ar: "الأزياء والمجوهرات" },
  "Beauté et bien être": { fr: "Beauté et bien-être", en: "Beauty & Wellness", ar: "الجمال والعافية" },
  "High-Tech & Accessoires": { fr: "High-Tech & Accessoires", en: "Tech & Accessories", ar: "التقنية والإكسسوارات" },
  "Jouets & Loisirs": { fr: "Jouets & Loisirs", en: "Toys & Leisure", ar: "الألعاب والترفيه" },
  Divers: { fr: "Divers", en: "Other", ar: "متنوع" },

  // Extra tags
  Salon: { fr: "Salon", en: "Salon", ar: "صالون" },
  Tech: { fr: "Tech", en: "Tech", ar: "تقنية" },
  Terrasse: { fr: "Terrasse", en: "Terrace", ar: "تراس" },
  New: { fr: "Nouveau", en: "New", ar: "جديد" },
  "Ouverture 26/06": { fr: "Ouverture 26/06", en: "Opening 26/06", ar: "افتتاح 26/06" },

  // Cuisines
  "Yaourt glace · Crepes": { fr: "Yaourt glacé · Crêpes", en: "Frozen yoghurt · Crêpes", ar: "زبادي مثلج · كريب" },
  "Sushi · Burgers · Pates": { fr: "Sushi · Burgers · Pâtes", en: "Sushi · Burgers · Pasta", ar: "سوشي · برغر · باستا" },
  Indien: { fr: "Indien", en: "Indian", ar: "هندي" },
  Pizza: { fr: "Pizza", en: "Pizza", ar: "بيتزا" },
  Italien: { fr: "Italien", en: "Italian", ar: "إيطالي" },
  "Tacos francais": { fr: "Tacos français", en: "French tacos", ar: "تاكو فرنسي" },
  "Kebab · Tacos": { fr: "Kebab · Tacos", en: "Kebab · Tacos", ar: "كباب · تاكو" },
  "Glace artisanale": { fr: "Glace artisanale", en: "Artisanal ice cream", ar: "آيس كريم حرفي" },
  "Patisseries orientales": { fr: "Pâtisseries orientales", en: "Oriental pastries", ar: "حلويات شرقية" },
  Burgers: { fr: "Burgers", en: "Burgers", ar: "برغر" },
  "Desserts · Milkshakes": { fr: "Desserts · Milkshakes", en: "Desserts · Milkshakes", ar: "حلويات · ميلك شيك" },
  "Cafe · Patisseries": { fr: "Café · Pâtisseries", en: "Coffee · Pastries", ar: "قهوة · معجنات" },
  "Kebabs · Pizza · Pates": { fr: "Kebabs · Pizza · Pâtes", en: "Kebabs · Pizza · Pasta", ar: "كباب · بيتزا · باستا" },
  "Marocain · International": { fr: "Marocain · International", en: "Moroccan · International", ar: "مغربي · عالمي" },
  "Boulangerie francaise": { fr: "Boulangerie française", en: "French bakery", ar: "مخبزة فرنسية" },
  "Pizza · Tex-Mex": { fr: "Pizza · Tex-Mex", en: "Pizza · Tex-Mex", ar: "بيتزا · تكس مكس" },
  "Shawarma · Street food": { fr: "Shawarma · Street food", en: "Shawarma · Street food", ar: "شاورما · ستريت فود" },

  // Offer brands that are descriptive rather than proper nouns
  "Terrace Restaurants": { fr: "Restaurants en terrasse", en: "Terrace Restaurants", ar: "مطاعم التراس" },
};

/** Translate a known taxonomy term; falls back to the raw value. */
export function tr(value: string, locale: Locale): string {
  return terms[value]?.[locale] ?? value;
}

/* ------------------------------------------------------------------ */
/* Brand descriptions (FR lives in the source API; EN/AR here)         */
/* ------------------------------------------------------------------ */

type Bi = { en: string; ar: string };

export const brandDescriptions: Record<string, Bi> = {
  Exchange: {
    en: "Exchange is a currency bureau offering fast, secure services for all your foreign-exchange transactions.",
    ar: "إكستشينج مكتب صرافة يقدم خدمات سريعة وآمنة لجميع معاملات العملات.",
  },
  "Galerie Menara Mall": {
    en: "Galerie Menara Mall is an artistic space dedicated to exhibiting and selling paintings in many styles, offering art lovers a unique place to discover varied works.",
    ar: "غاليري منارة مول فضاء فني مخصص لعرض وبيع اللوحات بمختلف الأساليب، ويمنح عشاق الفن مكانًا فريدًا لاكتشاف أعمال متنوعة.",
  },
  "LE COIN CHIC": {
    en: "Le Coin Chic is a boutique offering luxury fashion for women and men, where every piece blends elegance, quality and refined design.",
    ar: "لو كوان شيك بوتيك للأزياء الفاخرة للنساء والرجال، حيث تجمع كل قطعة بين الأناقة والجودة والتصميم الراقي.",
  },
  Uno: {
    en: "Uno is an authorized Apple reseller offering smartphones, tablets, computers and official accessories, along with advice and support for all your devices.",
    ar: "أونو موزّع معتمد لأبل يقدم الهواتف والأجهزة اللوحية والحواسيب والملحقات الأصلية، إضافة إلى خدمات النصح والدعم لأجهزتك.",
  },
  "Princes Jewellery": {
    en: "Princes Jewellery offers modern and traditional pieces in steel and gold, with unique creations suited to every occasion.",
    ar: "برينسيس جوليري تقدم مجوهرات عصرية وتقليدية من الفولاذ والذهب، بتصاميم فريدة تناسب كل المناسبات.",
  },
  "Beauty & Beyond": {
    en: "Beauty & Beyond is a beauty boutique offering makeup, skincare and fragrances from the East and Europe.",
    ar: "بيوتي آند بيوند بوتيك مخصص للجمال يقدم المكياج والعناية والعطور من الشرق وأوروبا.",
  },
  "Pièce Unique": {
    en: "Pièce Unique is a jeweller offering original creations that blend Moroccan craftsmanship with artistic design; each piece in gold and precious stones carries a unique handcrafted touch.",
    ar: "بيس أونيك صائغ يقدم إبداعات أصيلة تمزج الحرفية المغربية بالتصميم الفني؛ كل قطعة من الذهب والأحجار الكريمة تحمل لمسة حرفية فريدة.",
  },
  "Swiss Arabian": {
    en: "Swiss Arabian is a perfume house blending Oriental tradition with modernity, offering unique perfumes, oils and fragrances for men and women, each reflecting elegance.",
    ar: "سويس أرابيان دار عطور تمزج بين الأصالة الشرقية والحداثة، وتقدم عطورًا وزيوتًا فريدة للرجال والنساء تعكس الأناقة.",
  },
  "Benji Luxury Shop": {
    en: "Benji Luxury Shop offers stainless-steel jewellery and accessories that combine elegance, modernity and durability.",
    ar: "بنجي لكجري شوب يقدم مجوهرات وإكسسوارات من الفولاذ المقاوم للصدأ تجمع بين الأناقة والحداثة والمتانة.",
  },
  PopKase: {
    en: "PopKase offers customised cases and accessories for phones, tablets and computers, with creative, colourful designs that combine protection and style.",
    ar: "بوب كايس يقدم أغطية وإكسسوارات مخصصة للهواتف والأجهزة اللوحية والحواسيب بتصاميم إبداعية وملونة تجمع بين الحماية والأناقة.",
  },
  "Barber Shop Gentlemen Club": {
    en: "Barber Shop Gentlemen Club is a men's salon offering a premium service that blends tradition and modernity, for a relaxing experience in an elegant setting.",
    ar: "بربر شوب جنتلمن كلوب صالون رجالي يقدم خدمة راقية تمزج بين الأصالة والحداثة، لتجربة مريحة في إطار أنيق.",
  },
  "Barber Signes": {
    en: "Barber Signes is a men's salon combining style, precision and know-how, with modern cuts, beard trims and hair care for a polished, personalised look.",
    ar: "بربر سين صالون رجالي يجمع بين الأناقة والدقة والمهارة، ويقدم قصات عصرية وتهذيب اللحية والعناية بالشعر لإطلالة مرتبة ومميزة.",
  },
  "L’Artiste VIP": {
    en: "L'Artiste VIP is a beauty salon offering a high-end experience that blends expertise and elegance, with a wide range of esthetic care, hairstyling and makeup.",
    ar: "لارتيست في آي بي صالون تجميل يقدم تجربة راقية تمزج بين الخبرة والأناقة، مع مجموعة واسعة من خدمات العناية والتصفيف والمكياج.",
  },
  "Yves Rocher": {
    en: "Yves Rocher is a cosmetics and skincare brand inspired by nature, offering beauty products that respect the skin and the environment.",
    ar: "إيف روشيه علامة لمستحضرات التجميل والعناية مستوحاة من الطبيعة، تقدم منتجات تحترم البشرة والبيئة.",
  },
  Mariolina: {
    en: "Mariolina is a children's boutique offering a variety of toys and fun mascots to spark the imagination.",
    ar: "ماريولينا بوتيك للأطفال يقدم تشكيلة من الألعاب والدمى الممتعة لإيقاظ الخيال.",
  },
  MonJouet: {
    en: "MonJouet specialises in toys, educational games and board games for all ages, with playful products that stimulate imagination, creativity and learning.",
    ar: "مون جوي متجر متخصص في الألعاب والألعاب التعليمية وألعاب الطاولة لكل الأعمار، بمنتجات تنمّي الخيال والإبداع والتعلم.",
  },
  MINISO: {
    en: "Miniso is a lifestyle store offering a wide range of well-designed, affordable products for the home, beauty, accessories and everyday gadgets.",
    ar: "مينيسو متجر لايف ستايل يقدم تشكيلة واسعة من المنتجات العملية بأسعار مناسبة للمنزل والجمال والإكسسوارات وأدوات الحياة اليومية.",
  },
  "CLIP ELECTRO": {
    en: "Clip Electro specialises in accessories for phones, tablets and computers, with a wide choice of high-tech items, custom cases and gadgets.",
    ar: "كليب إلكترو متجر متخصص في إكسسوارات الهواتف والأجهزة اللوحية والحواسيب، بتشكيلة واسعة من المنتجات التقنية والأغطية المخصصة.",
  },
  VAPOKECH: {
    en: "Vapokech specialises in the world of vaping and its accessories, with a wide selection of quality e-cigarettes, e-liquids and pods.",
    ar: "فابوكيش متجر متخصص في عالم الفيب وملحقاته، بتشكيلة واسعة من السجائر الإلكترونية والسوائل والبودات عالية الجودة.",
  },
  "Maroc Telecom": {
    en: "Maroc Telecom is the national telecommunications leader, offering innovative and reliable services.",
    ar: "اتصالات المغرب الرائد الوطني في الاتصالات، يقدم خدمات مبتكرة وموثوقة.",
  },
  "Z Création": {
    en: "Z Création is a women's clothing brand that celebrates originality and creativity, with unique, colourful pieces full of character to express your style with confidence.",
    ar: "زي كرياسيون علامة ملابس نسائية تحتفي بالأصالة والإبداع، بقطع فريدة وملونة مليئة بالشخصية للتعبير عن أسلوبك بثقة.",
  },
  Noctichic: {
    en: "Noctichic is a glamorous lingerie brand for bold, elegant women, where every piece blends sensuality, comfort and refinement.",
    ar: "نوكتيشيك علامة لانجري أنيقة للمرأة الجريئة، حيث تجمع كل قطعة بين الأنوثة والراحة والرقي.",
  },
  "be sport": {
    en: "BeSport is the destination for sport and fitness enthusiasts, offering equipment, footwear and clothing for every discipline, with a focus on performance.",
    ar: "بي سبورت وجهة عشاق الرياضة واللياقة، تقدم المعدات والأحذية والملابس لكل الرياضات مع التركيز على الأداء.",
  },
  "Bertrand Shoes": {
    en: "Bertrand Shoes offers a wide range of footwear for men and women, combining quality, comfort and elegant design for every step.",
    ar: "برتراند شوز يقدم تشكيلة واسعة من الأحذية للرجال والنساء تجمع بين الجودة والراحة والتصميم الأنيق.",
  },
  ARABLANCO: {
    en: "ArablanCo embodies men's elegance through a collection of high-end clothing, specialising in suits, shirts and refined outfits that celebrate style and know-how.",
    ar: "أرابلانكو يجسّد أناقة الرجل من خلال مجموعة راقية من الملابس، متخصصًا في البدلات والقمصان والإطلالات المنمقة.",
  },
  OLGA: {
    en: "OLGA offers elegant, on-trend women's clothing and accessories, with a focus on quality, comfort and modern style.",
    ar: "أولغا تقدم ملابس وإكسسوارات نسائية أنيقة وعصرية مع التركيز على الجودة والراحة والأناقة الحديثة.",
  },
  GABRI: {
    en: "Gabri is a 100% leather footwear brand for discerning men, blending craftsmanship, elegance and durability for a distinguished look on any occasion.",
    ar: "غابري علامة أحذية جلدية 100% للرجال المميزين، تجمع بين الحرفية والأناقة والمتانة لإطلالة راقية في كل المناسبات.",
  },
  ELITE: {
    en: "ELITE is an elegant boutique for modern women, offering a chic collection of shoes, accessories and luggage that combines style and practicality.",
    ar: "إيليت بوتيك أنيق للمرأة العصرية، يقدم تشكيلة راقية من الأحذية والإكسسوارات والحقائب تجمع بين الأناقة والعملية.",
  },
  FLO: {
    en: "Flo specialises in footwear for the whole family, combining style and comfort with a variety of models for every occasion.",
    ar: "فلو متخصص في أحذية لكل أفراد العائلة، يجمع بين الأناقة والراحة بتشكيلة متنوعة لكل المناسبات.",
  },
  Koton: {
    en: "Koton offers clothing and accessories inspired by the latest fashion trends, with a young, fresh and accessible style for everyone.",
    ar: "كوتون تقدم ملابس وإكسسوارات مستوحاة من أحدث صيحات الموضة بأسلوب شبابي ومنعش ومتاح للجميع.",
  },
  DeFacto: {
    en: "DeFacto offers contemporary clothing for men, women and children, combining trends, quality and affordability for every style.",
    ar: "ديفاكتو تقدم ملابس عصرية للرجال والنساء والأطفال، تجمع بين الموضة والجودة والأسعار المناسبة لكل الأذواق.",
  },
  Kichoix: {
    en: "Kichoix specialises in practical, on-trend products for the home and everyday life, with a varied selection of useful, quality items.",
    ar: "كيشوا متجر متخصص في المنتجات العملية والعصرية للمنزل والحياة اليومية، بتشكيلة متنوعة من المنتجات المفيدة وعالية الجودة.",
  },
  "LC WAIKIKI": {
    en: "LC Waikiki offers modern, accessible clothing for the whole family, combining comfort, style and quality at affordable prices in line with the latest trends.",
    ar: "إل سي وايكيكي تقدم ملابس عصرية ومتاحة لكل أفراد العائلة، تجمع بين الراحة والأناقة والجودة بأسعار مناسبة ومواكبة لأحدث الصيحات.",
  },
  Evana: {
    en: "Evana is a footwear brand that blends elegance, comfort and modernity, with models that combine refined design and quality materials.",
    ar: "إيفانا علامة أحذية تمزج بين الأناقة والراحة والحداثة، بموديلات تجمع بين التصميم الراقي وجودة المواد.",
  },
  "Carrefour Market": {
    en: "Carrefour Market is a supermarket offering a wide range of groceries, drinks and everyday essentials.",
    ar: "كارفور ماركت سوبر ماركت يقدم تشكيلة واسعة من المواد الغذائية والمشروبات ومستلزمات الحياة اليومية.",
  },
};

/* ------------------------------------------------------------------ */
/* Restaurant descriptions                                             */
/* ------------------------------------------------------------------ */

export const restaurantDescriptions: Record<string, Bi> = {
  "Happy Yog": {
    en: "Happy Yog serves tasty crêpes, fresh frozen yoghurt and freshly made juices.",
    ar: "هابي يوغ يقدم كريب لذيذ وزبادي مثلج طازج وعصائر محضّرة في الحين.",
  },
  "Le Box": {
    en: "Le Box offers a wide choice of treats, from sushi and pasta to burgers and hot dogs.",
    ar: "لو بوكس يقدم تشكيلة واسعة من اللذائذ، من السوشي والباستا إلى البرغر والهوت دوغ.",
  },
  "Bollywood Café": {
    en: "Bollywood Café invites you to discover the authentic flavours of India through a selection of generous, fragrant dishes.",
    ar: "بوليوود كافيه يدعوك لاكتشاف نكهات الهند الأصيلة عبر تشكيلة من الأطباق الغنية والعطرة.",
  },
  "Pizza Factory": {
    en: "Pizza Factory offers tasty pizzas made with fresh ingredients and a variety of recipes for every taste.",
    ar: "بيتزا فاكتوري يقدم بيتزا لذيذة محضّرة بمكونات طازجة ووصفات متنوعة لكل الأذواق.",
  },
  "Bella Italia": {
    en: "Bella Italia serves traditional pizzas with authentic Italian flavours, made with quality ingredients.",
    ar: "بيلا إيطاليا يقدم بيتزا تقليدية بنكهات إيطالية أصيلة محضّرة بمكونات عالية الجودة.",
  },
  "Tacos Français": {
    en: "Tacos Français offers generously filled French-style tacos with a choice of sauces and varied flavours.",
    ar: "تاكوس فرانسي يقدم تاكو على الطريقة الفرنسية بحشوات غنية وصلصات متنوعة.",
  },
  "Kebab & Tacos": {
    en: "Kebab & Tacos offers a wide choice of tasty kebabs and tacos, prepared quickly for a meal on the go.",
    ar: "كباب آند تاكوس يقدم تشكيلة واسعة من الكباب والتاكو اللذيذ، محضّرة بسرعة لوجبة سريعة.",
  },
  "Oriental Legend": {
    en: "Oriental Legend is an artisanal ice-cream maker offering homemade ice creams and sorbets in varied, authentic flavours.",
    ar: "أورينتال ليجند محل آيس كريم حرفي يقدم مثلجات وسوربيه منزلية بنكهات متنوعة وأصيلة.",
  },
  "Alwardeh Alshamieh": {
    en: "Alwardeh Alshamieh offers traditional Oriental pastries, rich in flavour and sweetness.",
    ar: "الوردة الشامية تقدم حلويات شرقية تقليدية غنية بالنكهة والمذاق.",
  },
  "Burger King": {
    en: "Burger King is a fast-food chain famous for its juicy burgers, crispy fries and quick menus.",
    ar: "برغر كينغ سلسلة وجبات سريعة شهيرة ببرغرها الشهي وبطاطسها المقرمشة ووجباتها السريعة.",
  },
  "Kaspas Desserts": {
    en: "Kaspas Desserts offers a wide selection of indulgent desserts, from milkshakes to ice creams and cakes.",
    ar: "كاسباس ديزرتس يقدم تشكيلة واسعة من الحلويات الشهية، من الميلك شيك إلى المثلجات والكعك.",
  },
  "Costa Coffee": {
    en: "Costa Coffee serves quality coffees, teas and hot drinks, along with a variety of pastries and snacks.",
    ar: "كوستا كوفي يقدم القهوة والشاي والمشروبات الساخنة عالية الجودة مع تشكيلة من المعجنات والوجبات الخفيفة.",
  },
  "Carteer Square": {
    en: "Carteer Square offers a variety of dishes, from kebabs and pizzas to pasta and other specialities.",
    ar: "كارتير سكوير يقدم تشكيلة من الأطباق، من الكباب والبيتزا إلى الباستا وتخصصات أخرى.",
  },
  Victor: {
    en: "Victor offers a full breakfast as well as a varied menu of Moroccan and international dishes, with a pastry section for sweet lovers.",
    ar: "فيكتور يقدم فطورًا متكاملًا إلى جانب قائمة متنوعة من الأطباق المغربية والعالمية، مع ركن للحلويات.",
  },
  "Kasbah Café": {
    en: "Kasbah Café serves hearty breakfasts, Moroccan and international dishes, as well as delicious pastries.",
    ar: "قصبة كافيه يقدم فطورًا غنيًا وأطباقًا مغربية وعالمية إضافة إلى حلويات لذيذة.",
  },
  PAUL: {
    en: "PAUL offers pastries, tarts, sandwiches and coffees prepared in the French tradition.",
    ar: "بول يقدم المعجنات والتارت والسندويتشات والقهوة على الطريقة الفرنسية التقليدية.",
  },
  "Papa John’s": {
    en: "Papa John's offers generous pizzas made with fresh ingredients, alongside savoury Tex-Mex dishes, burgers and grills.",
    ar: "بابا جونز يقدم بيتزا غنية محضّرة بمكونات طازجة، إلى جانب أطباق تكس مكس والبرغر والمشاوي.",
  },
  "Venezia Ice": {
    en: "Venezia Ice is an artisanal ice-cream maker offering homemade ice creams and sorbets in varied flavours.",
    ar: "فينيزيا آيس محل آيس كريم حرفي يقدم مثلجات وسوربيه منزلية بنكهات متنوعة.",
  },
  "Shawarma Avenue": {
    en: "Shawarma Avenue joins Menara Mall with expertise built since 1999. The house serves shawarmas made with authentic recipes, quality ingredients and a generous street-food spirit, in a spot designed for quick, tasty breaks.",
    ar: "شاورما أفينيو ينضم إلى منارة مول بخبرة منذ 1999. يقدم المحل شاورما بوصفات أصيلة ومكونات عالية الجودة وروح ستريت فود سخية، في مكان مصمم للاستراحات السريعة واللذيذة.",
  },
};

/* ------------------------------------------------------------------ */
/* Le Souk item descriptions (keyed by source id)                      */
/* ------------------------------------------------------------------ */

export const soukDescriptions: Record<string, Bi> = {
  cmhdqsgu30000u9ocx8yoyt33: {
    en: "Dive into a sensory world where colourful spices, precious argan oils, fragrant henna, artisanal soaps and essential oils blend with powders for care and masks.",
    ar: "انغمس في عالم حسّي تتمازج فيه التوابل الملونة وزيوت الأركان الثمينة والحناء العطرة والصابون الحرفي والزيوت العطرية مع مساحيق العناية والأقنعة.",
  },
  cmhdqta7r0001u9ocj6l5uhcn: {
    en: "Step into a treasure trove where caftans, djellabas and gandouras for men and women dance to the rhythm of embroidery and colour.",
    ar: "ادخل إلى عالم تتراقص فيه القفاطين والجلابات والقنادر للرجال والنساء على إيقاع التطريز والألوان.",
  },
  cmhdqtw050002u9ock385jd5a: {
    en: "Discover a trove of unique objects from Morocco and Egypt: hand-painted ceramics, delicate jewellery and artisanal décor.",
    ar: "اكتشف كنزًا من القطع الفريدة من المغرب ومصر، بين الخزف المرسوم يدويًا والمجوهرات الرقيقة والديكور الحرفي.",
  },
  cmhdquuju0003u9ocqes2mjx0: {
    en: "Wander a glittering world where traditional and modern silver jewellery comes together for men and women.",
    ar: "تجوّل في عالم متلألئ تتمازج فيه المجوهرات الفضية التقليدية والعصرية للرجال والنساء.",
  },
  cmhdqywvu0000u92ww4ymtcjo: {
    en: "Discover caftans, djellabas and gandouras for men, women and children, adorned with refined embroidery and vibrant colours.",
    ar: "اكتشف القفاطين والجلابات والقنادر للرجال والنساء والأطفال، المزينة بتطريز راقٍ وألوان زاهية.",
  },
  cmhdr02d90001u92wqc4oaf2s: {
    en: "Dive into a world where traditional fashion, décor and souvenirs meet with elegance and authenticity.",
    ar: "انغمس في عالم تلتقي فيه الأزياء التقليدية وقطع الديكور والهدايا التذكارية بأناقة وأصالة.",
  },
  cmhdr1hu50002u92w0h9tkokx: {
    en: "Explore a refined collection of caftans, djellabas and gandouras for all, with delicate embroidery and vibrant colours.",
    ar: "استكشف مجموعة راقية من القفاطين والجلابات والقنادر للجميع، بتطريز رقيق وألوان زاهية.",
  },
  cmhdr5vo90003u92wzfy67pdn: {
    en: "Between shimmering fabrics, enchanting souvenirs and the scents of organic soaps, mists and masks, every object tells a story.",
    ar: "بين الأقمشة اللامعة والهدايا الساحرة وعبق الصابون والبخاخات والأقنعة العضوية، تروي كل قطعة حكاية.",
  },
  cmhdr7gow0004u92wp812nloj: {
    en: "Wander a world where souvenirs, finely crafted ceramics and traditional outfits sit side by side in harmony.",
    ar: "تجوّل في عالم تتجاور فيه الهدايا والخزف المتقن والأزياء التقليدية بانسجام.",
  },
  cmhdr9nex0005u92wkt2loup6: {
    en: "A place where tote bags, ceramics, leather bags, souvenirs and lamps intertwine in a ballet of colours and textures.",
    ar: "مكان تتشابك فيه الحقائب والخزف والحقائب الجلدية والهدايا والمصابيح في رقصة من الألوان والملمس.",
  },
  cmhdrc63q0006u92wdae1ykc6: {
    en: "Discover a showcase of caftans, takchitas, djellabas and traditional accessories, where every piece celebrates Moroccan elegance.",
    ar: "اكتشف مجموعة من القفاطين والتكشيطات والجلابات والإكسسوارات التقليدية، حيث تحتفي كل قطعة بالأناقة المغربية.",
  },
  cmhdrdu1o0007u92w1rmi5k68: {
    en: "A place blending traditional and contemporary outfits, alongside professional workwear for the healthcare sector.",
    ar: "مكان تتمازج فيه الأزياء التقليدية والعصرية إلى جانب الملابس المهنية لقطاع الصحة.",
  },
  cmhdrgpf50008u92w0i359s58: {
    en: "Argalista offers natural cosmetics based on precious ingredients such as argan, essential oils and plant extracts.",
    ar: "أرغاليستا تقدم مستحضرات تجميل طبيعية قائمة على مكونات ثمينة كالأركان والزيوت العطرية وخلاصات النباتات.",
  },
  cmhdrigjw0009u92w0zxur4jj: {
    en: "A true festival of colours and scents where rare spices and traditional blends come together.",
    ar: "مهرجان حقيقي من الألوان والروائح تتمازج فيه التوابل النادرة والخلطات التقليدية.",
  },
  cmhdrke4l000au92w8qovewhv: {
    en: "A place where traditional outfits, finely crafted babouches and authentic souvenirs meet with elegance.",
    ar: "مكان تلتقي فيه الأزياء التقليدية والبلغة المتقنة والهدايا الأصيلة بأناقة.",
  },
};

/** Resolve a per-entity description, falling back to the French source value. */
export function localizeDescription(
  map: Record<string, Bi>,
  key: string,
  frFallback: string,
  locale: Locale,
): string {
  if (locale === "fr") return frFallback;
  return map[key]?.[locale] ?? frFallback;
}

/** Kidzo tagline (the source repeats one French line for every asset). */
export const kidzoTagline: Tri = {
  fr: "L'univers magique des enfants vous attend à Kidzo – Menara Mall.",
  en: "The magical world of children awaits you at Kidzo – Menara Mall.",
  ar: "عالم الأطفال السحري بانتظارك في كيدزو – منارة مول.",
};

/* ------------------------------------------------------------------ */
/* Services (fully localized, keyed by service id)                     */
/* ------------------------------------------------------------------ */

type ServiceCopy = { title: string; description: string; location: string };

export const serviceContent: Record<string, Record<Locale, ServiceCopy>> = {
  "s-parking-pmr": {
    fr: { title: "Parking & Accès PMR", description: "Le parking et les dispositifs d'accessibilité figurent parmi les services proposés pour faciliter la visite.", location: "Menara Mall" },
    en: { title: "Parking & Accessibility", description: "Parking and accessibility facilities are among the services provided to make your visit easier.", location: "Menara Mall" },
    ar: { title: "موقف السيارات والولوجية", description: "يُعد موقف السيارات وتجهيزات الولوجية من بين الخدمات المتاحة لتسهيل الزيارة.", location: "منارة مول" },
  },
  "s-restauration": {
    fr: { title: "Restauration", description: "Restaurants, cafés et options du Food Court pour un café, un repas rapide, un dessert ou un moment à table.", location: "Restaurants et cafés" },
    en: { title: "Dining", description: "Restaurants, cafés and Food Court options for a coffee, a quick meal, a dessert or a moment at the table.", location: "Restaurants and cafés" },
    ar: { title: "المطاعم", description: "مطاعم ومقاهٍ وخيارات فود كورت لتناول القهوة أو وجبة سريعة أو حلوى أو لحظة على الطاولة.", location: "مطاعم ومقاهٍ" },
  },
  "s-mode-bijoux": {
    fr: { title: "Mode & Bijoux", description: "Marques de mode, chaussures, accessoires et bijoux présentées dans l'annuaire officiel.", location: "Galerie marchande" },
    en: { title: "Fashion & Jewellery", description: "Fashion, footwear, accessory and jewellery brands featured in the official directory.", location: "Shopping gallery" },
    ar: { title: "الأزياء والمجوهرات", description: "علامات الأزياء والأحذية والإكسسوارات والمجوهرات المدرجة في الدليل الرسمي.", location: "الرواق التجاري" },
  },
  "s-kidzo": {
    fr: { title: "Kidzo", description: "Des loisirs en famille avec les expériences Kidzo mises en avant sur le site officiel.", location: "Kidzo" },
    en: { title: "Kidzo", description: "Family entertainment with the Kidzo experiences highlighted on the official site.", location: "Kidzo" },
    ar: { title: "كيدزو", description: "ترفيه عائلي مع تجارب كيدزو المميزة على الموقع الرسمي.", location: "كيدزو" },
  },
  "s-souq": {
    fr: { title: "Le Souk Al Madinah", description: "Une expérience de souk marocain autour de l'artisanat, de la mode traditionnelle, des rituels beauté et des cadeaux locaux.", location: "Le Souk Al Madinah" },
    en: { title: "Le Souk Al Madinah", description: "A Moroccan souk experience around crafts, traditional fashion, beauty rituals and local gifts.", location: "Le Souk Al Madinah" },
    ar: { title: "سوق المدينة", description: "تجربة سوق مغربي حول الحرف والأزياء التقليدية وطقوس الجمال والهدايا المحلية.", location: "سوق المدينة" },
  },
  "s-beaute": {
    fr: { title: "Beauté & Bien-être", description: "Marques de beauté, parfum, grooming et bien-être présentes dans l'annuaire officiel Menara Mall.", location: "Galerie marchande" },
    en: { title: "Beauty & Wellness", description: "Beauty, fragrance, grooming and wellness brands featured in the official Menara Mall directory.", location: "Shopping gallery" },
    ar: { title: "الجمال والعافية", description: "علامات الجمال والعطور والعناية والعافية المدرجة في دليل منارة مول الرسمي.", location: "الرواق التجاري" },
  },
  "s-high-tech": {
    fr: { title: "High-Tech & Accessoires", description: "Téléphones, accessoires, services télécom et enseignes high-tech recensés dans l'annuaire officiel.", location: "Galerie marchande" },
    en: { title: "Tech & Accessories", description: "Phones, accessories, telecom services and tech retailers listed in the official directory.", location: "Shopping gallery" },
    ar: { title: "التقنية والإكسسوارات", description: "الهواتف والإكسسوارات وخدمات الاتصالات ومتاجر التقنية المدرجة في الدليل الرسمي.", location: "الرواق التجاري" },
  },
  "s-carrefour": {
    fr: { title: "Carrefour", description: "Carrefour Market est ouvert tous les jours de 09:00 à 23:00 selon le pied de page officiel.", location: "Carrefour Market" },
    en: { title: "Carrefour", description: "Carrefour Market is open every day from 09:00 to 23:00 according to the official footer.", location: "Carrefour Market" },
    ar: { title: "كارفور", description: "كارفور ماركت مفتوح كل يوم من 09:00 إلى 23:00 وفق التذييل الرسمي.", location: "كارفور ماركت" },
  },
  "s-exchange": {
    fr: { title: "Change", description: "Des services de change pour les visiteurs figurent dans l'annuaire officiel du centre.", location: "Galerie marchande" },
    en: { title: "Currency Exchange", description: "Currency-exchange services for visitors are listed in the centre's official directory.", location: "Shopping gallery" },
    ar: { title: "الصرافة", description: "خدمات صرف العملات للزوار مدرجة في الدليل الرسمي للمركز.", location: "الرواق التجاري" },
  },
};

/* ------------------------------------------------------------------ */
/* Offers (fully localized, keyed by offer id)                         */
/* ------------------------------------------------------------------ */

type OfferCopy = { title: string; description: string; terms: string };

export const offerContent: Record<string, Record<Locale, OfferCopy>> = {
  "o-zara-summer": {
    fr: { title: "Sélection d'été : jusqu'à -40 %", description: "Renouvelez votre dressing de saison avec jusqu'à 40 % de remise sur une sélection de styles été femme, homme et enfant.", terms: "Remise valable uniquement sur les articles signalés, dans la limite des stocks disponibles. Non cumulable avec d'autres promotions. [À VÉRIFIER] avec la marque." },
    en: { title: "Summer edit: up to 40% off", description: "Refresh your seasonal wardrobe with up to 40% off a selection of women's, men's and kids' summer styles.", terms: "Discount valid only on tagged items, while stocks last. Cannot be combined with other promotions. [TO VERIFY] with the brand." },
    ar: { title: "تشكيلة الصيف: حتى 40% خصم", description: "جدّد خزانتك الصيفية مع خصم يصل إلى 40% على تشكيلة من إطلالات الصيف للنساء والرجال والأطفال.", terms: "الخصم ساري فقط على القطع المحددة وحتى نفاد المخزون. لا يُجمع مع عروض أخرى. [للتأكيد] مع العلامة." },
  },
  "o-sephora-gift": {
    fr: { title: "Cadeau beauté dès 600 MAD d'achat", description: "Recevez un coffret découverte soigneusement sélectionné pour tout achat supérieur à 600 MAD en soin et parfum.", terms: "Un cadeau par client, dans la limite des stocks disponibles. Seuil minimum avant taxes. [À VÉRIFIER] avec la marque." },
    en: { title: "Beauty gift from 600 MAD spend", description: "Receive a carefully selected discovery set with any purchase over 600 MAD in skincare and fragrance.", terms: "One gift per customer, while stocks last. Minimum threshold before tax. [TO VERIFY] with the brand." },
    ar: { title: "هدية جمال من 600 درهم شراء", description: "احصل على مجموعة اكتشاف منتقاة مع أي شراء يفوق 600 درهم في العناية والعطور.", terms: "هدية واحدة لكل زبون وحتى نفاد المخزون. الحد الأدنى قبل الضريبة. [للتأكيد] مع العلامة." },
  },
  "o-carrefour-family": {
    fr: { title: "Économies famille sur les courses", description: "Des économies chaque semaine sur les produits frais, l'épicerie et les essentiels du quotidien pour toute la famille.", terms: "Prix affichés en magasin. La sélection change chaque semaine. [À VÉRIFIER] avec la marque." },
    en: { title: "Family savings on groceries", description: "Weekly savings on fresh produce, groceries and everyday essentials for the whole family.", terms: "In-store prices apply. The selection changes every week. [TO VERIFY] with the brand." },
    ar: { title: "توفير عائلي على المشتريات", description: "توفير أسبوعي على المنتجات الطازجة والبقالة ومستلزمات العائلة اليومية.", terms: "الأسعار المعروضة في المتجر. تتغير التشكيلة كل أسبوع. [للتأكيد] مع العلامة." },
  },
  "o-electroplanet-tech": {
    fr: { title: "Offres packs maison connectée", description: "Économisez sur les packs regroupant enceintes connectées, écrans et accessoires, avec options d'extension de garantie.", terms: "Tarif pack valable sur une sélection de produits achetés ensemble. [À VÉRIFIER] avec la marque." },
    en: { title: "Smart-home bundle deals", description: "Save on bundles of smart speakers, screens and accessories, with warranty-extension options.", terms: "Bundle price valid on a selection of products bought together. [TO VERIFY] with the brand." },
    ar: { title: "عروض باقات المنزل الذكي", description: "وفّر على باقات تجمع مكبرات الصوت الذكية والشاشات والإكسسوارات مع خيارات تمديد الضمان.", terms: "سعر الباقة ساري على تشكيلة من المنتجات المشتراة معًا. [للتأكيد] مع العلامة." },
  },
  "o-dining-terrace": {
    fr: { title: "Terrasse gourmande : dessert offert", description: "Profitez d'un dessert signature offert pour chaque plat principal dans les restaurants de terrasse participants.", terms: "Un dessert par plat principal, sur place uniquement, dans les enseignes participantes. [À VÉRIFIER] avec les restaurants." },
    en: { title: "Terrace dining: free dessert", description: "Enjoy a complimentary signature dessert with every main course at participating terrace restaurants.", terms: "One dessert per main course, dine-in only, at participating venues. [TO VERIFY] with the restaurants." },
    ar: { title: "تراس الذواقة: حلوى مجانية", description: "استمتع بحلوى مميزة مجانية مع كل طبق رئيسي في مطاعم التراس المشاركة.", terms: "حلوى واحدة لكل طبق رئيسي، لتناول الطعام بالمكان فقط، في المطاعم المشاركة. [للتأكيد] مع المطاعم." },
  },
  "o-home-refresh": {
    fr: { title: "Maison : 3 pour 2", description: "Achetez-en trois, payez-en deux sur une sélection de coussins, textiles et art de la table pour rafraîchir votre intérieur.", terms: "Article le moins cher offert. Valable uniquement sur une sélection d'articles maison. [À VÉRIFIER] avec la marque." },
    en: { title: "Home: 3 for 2", description: "Buy three, pay for two on a selection of cushions, textiles and tableware to refresh your interior.", terms: "Cheapest item free. Valid only on a selection of home items. [TO VERIFY] with the brand." },
    ar: { title: "المنزل: 3 مقابل 2", description: "اشترِ ثلاثة وادفع ثمن اثنين على تشكيلة من الوسائد والمنسوجات وأدوات المائدة لتجديد منزلك.", terms: "القطعة الأرخص مجانًا. ساري فقط على تشكيلة من منتجات المنزل. [للتأكيد] مع العلامة." },
  },
};
