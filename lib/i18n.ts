export const locales = ["fr", "en", "ar"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fr";

export const localeMeta: Record<Locale, { label: string; dir: "ltr" | "rtl" }> = {
  fr: { label: "Français", dir: "ltr" },
  en: { label: "English", dir: "ltr" },
  ar: { label: "العربية", dir: "rtl" },
};

export function hasLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getLocaleDir(locale: Locale) {
  return localeMeta[locale].dir;
}

export function getLocaleFromPathname(pathname: string | null | undefined): Locale {
  if (!pathname) return defaultLocale;
  const [, first] = pathname.split("/");
  return first && hasLocale(first) ? first : defaultLocale;
}

export function stripLocalePrefix(pathname: string): string {
  const parts = pathname.split("/");
  const first = parts[1];
  if (first && hasLocale(first)) {
    const next = `/${parts.slice(2).join("/")}`.replace(/\/+$/, "") || "/";
    return next === "" ? "/" : next;
  }
  return pathname || "/";
}

export function localizeHref(href: string, locale: Locale): string {
  if (!href) return href;
  if (/^(https?:|mailto:|tel:|#)/.test(href)) return href;

  const [pathWithHash, search = ""] = href.split("?");
  const [path, hash = ""] = pathWithHash.split("#");
  const normalized = path.startsWith("/") ? stripLocalePrefix(path) : path;
  const localizedPath =
    locale === defaultLocale ? normalized : `/${locale}${normalized === "/" ? "" : normalized}`;

  return `${localizedPath}${search ? `?${search}` : ""}${hash ? `#${hash}` : ""}`;
}

export const uiText = {
  fr: {
    nav: {
      shops: "Boutiques",
      dining: "Restaurants",
      entertainment: "Kidzo",
      souk: "Le Souk",
      contact: "Contact",
      search: "Rechercher",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
      language: "Langue",
      quickNav: "Navigation rapide",
      mainNav: "Navigation principale",
      mobileNav: "Navigation mobile",
      browseDirectory: "Parcourir l'annuaire",
      viewAllResults: "Voir tous les resultats",
    },
    search: {
      title: "Rechercher dans Menara Mall",
      close: "Fermer la recherche",
      placeholder: "Rechercher des boutiques, restaurants, offres...",
      queryLabel: "Requete de recherche",
      popular: "Recherches populaires",
      noResults: "Aucun resultat pour “{q}”. Essayez une autre recherche.",
    },
    footer: {
      stayInformed: "Restez informe",
      newsletterTitle: "Nouvelles ouvertures et offres, en premier.",
      newsletterLegal:
        "En vous inscrivant, vous acceptez de recevoir les actualites de Menara Mall. Desinscription a tout moment.",
      explore: "Explorer",
      essentials: "Essentiels",
      findUs: "Nous trouver",
      boutiques: "Boutiques",
      foodCourt: "Food Court et Kidzo",
      rights: "Tous droits reserves.",
    },
    contactForm: {
      defaultTopic: "Demande generale",
      businessTopic: "Location & partenariats",
      mediaTopic: "Medias & publicite",
      successTitle: "Merci, votre message a bien ete recu",
      successMessage:
        "Un membre de l'equipe Menara Mall vous recontactera rapidement. Merci pour votre interet.",
      legend: "Comment pouvons-nous vous aider ?",
      name: "Nom complet *",
      email: "E-mail *",
      phone: "Telephone",
      company: "Entreprise / marque",
      message: "Message *",
      namePlaceholder: "Votre nom",
      phonePlaceholder: "+212 …",
      companyPlaceholder: "Organisation",
      messagePlaceholder: "Parlez-nous un peu de votre demande...",
      error: "Veuillez renseigner les champs obligatoires marques d'un *.",
      responseTime: "Nous repondons en general sous deux jours ouvrables.",
      submit: "Envoyer le message",
    },
  },
  en: {
    nav: {
      shops: "Shops",
      dining: "Dining",
      entertainment: "Kidzo",
      souk: "The Souk",
      contact: "Contact",
      search: "Search",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      language: "Language",
      quickNav: "Quick navigation",
      mainNav: "Main navigation",
      mobileNav: "Mobile navigation",
      browseDirectory: "Browse directory",
      viewAllResults: "View all results",
    },
    search: {
      title: "Search Menara Mall",
      close: "Close search",
      placeholder: "Search shops, restaurants, offers...",
      queryLabel: "Search query",
      popular: "Popular searches",
      noResults: "No results for “{q}”. Try a different search.",
    },
    footer: {
      stayInformed: "Stay informed",
      newsletterTitle: "New openings and offers, first.",
      newsletterLegal:
        "By subscribing, you agree to receive Menara Mall updates. Unsubscribe at any time.",
      explore: "Explore",
      essentials: "Essentials",
      findUs: "Find us",
      boutiques: "Shops",
      foodCourt: "Food Court and Kidzo",
      rights: "All rights reserved.",
    },
    contactForm: {
      defaultTopic: "General inquiry",
      businessTopic: "Leasing & partnerships",
      mediaTopic: "Media & advertising",
      successTitle: "Thank you, your message has been received",
      successMessage:
        "A member of the Menara Mall team will contact you shortly. Thank you for your interest.",
      legend: "How can we help you?",
      name: "Full name *",
      email: "Email *",
      phone: "Phone",
      company: "Company / brand",
      message: "Message *",
      namePlaceholder: "Your name",
      phonePlaceholder: "+212 …",
      companyPlaceholder: "Organization",
      messagePlaceholder: "Tell us a bit about your request...",
      error: "Please fill in the required fields marked with *.",
      responseTime: "We usually reply within two business days.",
      submit: "Send message",
    },
  },
  ar: {
    nav: {
      shops: "المتاجر",
      dining: "المطاعم",
      entertainment: "كيدزو",
      souk: "السوق",
      contact: "اتصل بنا",
      search: "بحث",
      openMenu: "فتح القائمة",
      closeMenu: "إغلاق القائمة",
      language: "اللغة",
      quickNav: "تنقل سريع",
      mainNav: "التنقل الرئيسي",
      mobileNav: "تنقل الهاتف",
      browseDirectory: "تصفح الدليل",
      viewAllResults: "عرض كل النتائج",
    },
    search: {
      title: "ابحث في منارة مول",
      close: "إغلاق البحث",
      placeholder: "ابحث عن المتاجر أو المطاعم أو العروض...",
      queryLabel: "عبارة البحث",
      popular: "عمليات البحث الشائعة",
      noResults: "لا توجد نتائج لـ “{q}”. جرّب بحثًا آخر.",
    },
    footer: {
      stayInformed: "ابقَ على اطلاع",
      newsletterTitle: "الافتتاحات الجديدة والعروض أولاً.",
      newsletterLegal:
        "باشتراكك، فإنك توافق على تلقي أخبار منارة مول. يمكنك إلغاء الاشتراك في أي وقت.",
      explore: "استكشف",
      essentials: "الأساسيات",
      findUs: "اعثر علينا",
      boutiques: "المتاجر",
      foodCourt: "فود كورت وكيدزو",
      rights: "جميع الحقوق محفوظة.",
    },
    contactForm: {
      defaultTopic: "استفسار عام",
      businessTopic: "التأجير والشراكات",
      mediaTopic: "الإعلام والإعلانات",
      successTitle: "شكرًا، تم استلام رسالتك",
      successMessage:
        "سيتواصل معك أحد أعضاء فريق منارة مول قريبًا. شكرًا على اهتمامك.",
      legend: "كيف يمكننا مساعدتك؟",
      name: "الاسم الكامل *",
      email: "البريد الإلكتروني *",
      phone: "الهاتف",
      company: "الشركة / العلامة",
      message: "الرسالة *",
      namePlaceholder: "اسمك",
      phonePlaceholder: "+212 …",
      companyPlaceholder: "الجهة",
      messagePlaceholder: "أخبرنا قليلًا عن طلبك...",
      error: "يرجى تعبئة الحقول الإلزامية المميزة بـ *.",
      responseTime: "نرد عادة خلال يومي عمل.",
      submit: "إرسال الرسالة",
    },
  },
} as const;

export function getUiText(locale: Locale) {
  return uiText[locale];
}
