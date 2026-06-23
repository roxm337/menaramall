import type { Service } from "@/lib/types";

/**
 * Visitor services. Marked items should be verified by the Menara Mall team;
 * where a service is not confirmed, treat the copy as an editable placeholder.
 */
export const services: Service[] = [
  {
    id: "s-parking",
    title: "Parking",
    icon: "car",
    description:
      "Generous covered and open-air parking with direct mall access and clearly signed zones. [VERIFY capacity & rates]",
    location: "Levels P1–P2 · multiple entrances",
  },
  {
    id: "s-security",
    title: "Security & Safety",
    icon: "shield",
    description:
      "24/7 on-site security and CCTV throughout the mall and parking for a safe, comfortable visit.",
    location: "Mall-wide · Control Room, Ground Floor",
  },
  {
    id: "s-info",
    title: "Information Desk",
    icon: "info",
    description:
      "Multilingual concierge for directions, lost & found, wheelchair requests and general assistance.",
    location: "Ground Floor · Central Court",
  },
  {
    id: "s-family",
    title: "Family Services",
    icon: "baby",
    description:
      "Baby-changing rooms, stroller-friendly routes and family restrooms designed for parents on the go.",
    location: "Each floor · near restrooms",
  },
  {
    id: "s-prayer",
    title: "Prayer Rooms",
    icon: "moon",
    description:
      "Dedicated, well-maintained prayer rooms with ablution facilities for men and women. [VERIFY location]",
    location: "Ground Floor · East Wing",
  },
  {
    id: "s-accessibility",
    title: "Accessibility",
    icon: "accessibility",
    description:
      "Step-free access, lifts to every floor, accessible restrooms and complimentary wheelchairs on request.",
    location: "All floors · lifts at each court",
  },
  {
    id: "s-wifi",
    title: "Free Wi-Fi",
    icon: "wifi",
    description:
      "Complimentary high-speed Wi-Fi throughout the mall — connect and stay in touch as you explore. [VERIFY]",
    location: "Mall-wide",
  },
  {
    id: "s-atm",
    title: "ATMs & Bureau de Change",
    icon: "banknote",
    description:
      "Cash machines from major banks and currency exchange for international visitors.",
    location: "Ground Floor · near Central Court",
  },
  {
    id: "s-lost-found",
    title: "Lost & Found",
    icon: "search",
    description:
      "Misplaced an item? Our Information Desk safely holds found property — ask the team or contact us.",
    location: "Ground Floor · Information Desk",
  },
  {
    id: "s-restrooms",
    title: "Restrooms",
    icon: "droplet",
    description:
      "Clean, attended restrooms on every floor, including accessible and family facilities.",
    location: "Every floor",
  },
];
