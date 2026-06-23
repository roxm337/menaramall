# Menara Mall — Marrakech

A premium, multilingual-ready lifestyle-destination website for **Menara Mall, Marrakech**.
Built to reposition the mall as a destination for shopping, dining, family entertainment,
Moroccan discovery (Le Souk), events and visitor experiences — not a basic directory.

Built with **Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion**.

---

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build (static + SSG)
npm run start    # serve the production build
npm run lint     # eslint
npx tsc --noEmit # type-check
```

---

## Project structure

```
app/                     # Routes (App Router)
  layout.tsx             # Root layout: fonts, metadata, JSON-LD, header/footer
  page.tsx               # Homepage
  shops/                 # /shops  +  /shops/[slug]
  dining/                # /dining +  /dining/[slug]
  entertainment/         # /entertainment (Kidzo / Play)
  le-souk/               # /le-souk (signature page)
  events/                # /events +  /events/[slug]
  offers/                # /offers
  visit/                 # /visit (hours, parking, map, FAQs)
  services/              # /services
  leasing/               # /leasing (business / partnerships)
  contact/               # /contact
  search/                # /search
  not-found.tsx          # 404
  sitemap.ts, robots.ts  # SEO

components/
  layout/                # Header, Footer, Logo, MobileQuickNav, SearchOverlay, LanguageSwitcher
  cards/                 # BrandCard, RestaurantCard, EventCard, OfferCard, ExperienceCard
  directory/             # Shops/Dining filter UIs + shared FilterControls
  events/ offers/ search/# Page-specific interactive views
  forms/                 # ContactForm (general / leasing / events / media)
  home/                  # Cinematic Hero
  ui/                    # Design-system primitives (Button, Badge, Icon, Reveal, …)
  PageHero, Gallery, MapPlaceholder, Newsletter

lib/
  types.ts               # Content models (Brand, Restaurant, MallEvent, Offer, Service)
  hours.ts               # Open-now logic + weekly-hours summariser
  search.ts              # Cross-content search
  utils.ts               # cn(), date helpers
  data/                  # >>> ALL EDITABLE CONTENT LIVES HERE <<<
    site.ts              # Address, phone, hours, social, navigation
    brands.ts restaurants.ts events.ts offers.ts services.ts
```

---

## How to update content

All content is plain, typed TypeScript in **`lib/data/`**. No database is required for the
sample site — edit a file, save, and the change appears. The data shapes match the CMS models
in `lib/types.ts`, so these arrays can later be replaced by a headless CMS (Sanity, Contentful,
Strapi…) without touching components.

### Add or edit a shop — `lib/data/brands.ts`
Add an object to the `brands` array:

```ts
{
  id: "b-newbrand",
  name: "New Brand",
  slug: "new-brand",            // becomes /shops/new-brand
  monogram: "NB",               // shown on the placeholder logo
  category: "Fashion",          // see BrandCategory in lib/types.ts
  floor: "First Floor",
  locationLabel: "First Floor · East Wing",
  description: "Premium, on-brand description…",
  openingHours: std,            // reuse `std` / `grocery`, or supply 7 entries (Mon→Sun)
  featured: true,               // optional: surfaces on home + /shops featured strip
  tags: ["Womenswear"],
  heroArt: "Art-direction note for the hero image",
}
```

### Add or edit a restaurant/café — `lib/data/restaurants.ts`
Same pattern. Routes to `/dining/[slug]`. Use `type` (`Restaurant | Café | Fast Food | Dessert`)
and `tags` like `"Family-friendly"`, `"Terrace"` (these drive the dining filters).

### Add or edit an event — `lib/data/events.ts`
Routes to `/events/[slug]`. Upcoming vs. past is computed automatically from `date` (and optional
`endDate`). `category` drives the events filter; `registrationUrl` adds a "Register interest" CTA;
an "Add to calendar" link is generated automatically.

### Add or edit an offer — `lib/data/offers.ts`
Set `validFrom` / `validUntil` (ISO `YYYY-MM-DD`) and `terms` (shown in the Terms accordion).
`brandSlug` links the offer back to a shop page.

### Update mall-wide info — `lib/data/site.ts`
Address, phone, email, social links, **opening hours** (`mallHours`), and navigation.

> **Items needing verification** are marked with `[VERIFY]` in the data and copy. Search the repo
> for `[VERIFY]` and confirm with the Menara Mall team before launch (address, phone, exact hours,
> parking rates, prayer-room location, transport routes).

---

## Design system

Tokens live in `app/globals.css` under Tailwind v4 `@theme` and are available as utilities
(`bg-ivory`, `text-clay`, `font-display`, …):

| Token | Value | Use |
|------|-------|-----|
| `ivory` | `#F7F1E8` | Primary background |
| `cream` / `ivory-deep` | warm off-whites | Alternating sections |
| `sand` / `clay` | `#D8B98A` / `#B76E4C` | Warm accents |
| `gold` | `#B89B5E` | Muted luxe accent |
| `charcoal` | `#171717` | Text / dark sections |
| `stone` | `#8B8178` | Secondary text |
| `palm` | `#1F5C4A` | Optional emerald accent |

- **Type:** Cormorant Garamond (display serif) + Inter (UI sans), via `next/font`.
- **Motion:** `components/ui/Reveal.tsx` (scroll reveals) and Framer Motion; all motion respects
  `prefers-reduced-motion`.
- **Imagery:** `components/ui/ArtImage.tsx` renders elegant art-directed placeholders seeded from an
  art-direction note. It is the single **swap point** for real photography — replace its internals
  with `next/image` (and whitelist your media domain in `next.config.ts → images.remotePatterns`).

---

## Internationalisation (FR / EN / AR)

The architecture is multilingual-ready: copy is centralised, the `LanguageSwitcher` persists the
choice and flips `document.dir` to demonstrate **RTL** for Arabic. Full localized routing
(`/fr`, `/ar`) is the recommended next step using `next-intl` — the language switcher and
`alternates.languages` metadata are already wired for it.

---

## SEO & accessibility

- Per-page titles/descriptions, Open Graph, canonical URLs, `sitemap.xml`, `robots.txt`.
- Structured data: `ShoppingCenter` (root), `Restaurant` (dining detail), `Event` (event detail).
- Semantic HTML, skip-link, visible focus states, keyboard-navigable menus/overlays, alt/aria labels,
  reduced-motion support, and RTL readiness.

---

## Notes for integration

- Forms (`ContactForm`, `Newsletter`) validate client-side and have a `// TODO` marking where to POST
  to an email/CRM endpoint.
- The interactive in-mall map (`MapPlaceholder`) is a styled placeholder for a future wayfinding
  integration.
- Replace `lib/data/*` with CMS fetches; component props already match `lib/types.ts`.
