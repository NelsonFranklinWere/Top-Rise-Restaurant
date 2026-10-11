import { foodImages, drinkImages, interiorImages } from "./images";

export const luxuryStandards = [
  "Nairobi CBD's Largest Restaurant",
  "Balcony Seats & Evening Sun",
  "High-Speed Wi‑Fi",
  "Quiet, Cool Ambience",
  "Artfully Lit Interiors",
  "Display Screens for Events",
  "Swift, Attentive Service",
  "Halal Excellence",
  "Private Dining Rooms",
  "Order on Bolt Food",
];

export type AmenityIcon =
  | "space"
  | "wifi"
  | "service"
  | "quiet"
  | "lighting"
  | "balcony"
  | "screens"
  | "cuisine";

export const luxuryAmenities: {
  icon: AmenityIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: "space",
    title: "Generous Space",
    description:
      "Nairobi CBD's largest restaurant — room to breathe, dine, and host without feeling crowded. The scale competitors simply cannot match.",
  },
  {
    icon: "wifi",
    title: "High-Speed Wi‑Fi",
    description:
      "Reliable, fast internet throughout — ideal for working lunches, video calls, and conferences that demand connectivity.",
  },
  {
    icon: "service",
    title: "Swift Service",
    description:
      "Attentive staff and efficient kitchen flow — your time is valued. Faster service without sacrificing the quality you expect.",
  },
  {
    icon: "quiet",
    title: "Cool & Quiet",
    description:
      "A refined environment away from CBD chaos — cooler temperatures, softer acoustics, and an atmosphere designed for conversation.",
  },
  {
    icon: "lighting",
    title: "Artful Lighting",
    description:
      "Thoughtfully lit interiors that flatter every plate and every guest — from bright daytime clarity to golden evening warmth.",
  },
  {
    icon: "balcony",
    title: "Balcony Seating",
    description:
      "Elevated balcony tables with evening sun — Kimathi Street views, fresh air, and a setting that feels distinctly premium.",
  },
  {
    icon: "screens",
    title: "Display Screens",
    description:
      "Built-in screens for presentations, match days, and milestone celebrations — your event, visually elevated.",
  },
  {
    icon: "cuisine",
    title: "Exceptional Cuisine",
    description:
      "From sizzling grills and Arabian mandi to garden salads and butter chicken — Halal food rated 4.3 on Bolt Food.",
  },
];

export const featuredDelicacies = [
  {
    id: "mixed-grill",
    // menuId links the card to its dish in the menu database, so the name,
    // description, price and picture follow whatever is saved at /admin.
    menuId: "7",
    name: "Mixed Grill Sizzling",
    tagline: "Sizzling Grills",
    description:
      "Fish, chicken, beef & veg — served sizzling hot. A signature showpiece that defines the Top Rise experience.",
    price: "KES 920",
    image: foodImages.driedMeatCuisine,
    note: "House Favourite",
  },
  {
    id: "mandi",
    menuId: "9",
    name: "Arabian Mandi",
    tagline: "African & Arabian",
    description:
      "Traditional Arabian rice with spiced meat — fragrant, generous, and crafted for guests who expect depth in every bite.",
    price: "KES 1,150",
    image: foodImages.riceBeefMasala,
    note: "Chef's Pick",
  },
  {
    id: "butter-chicken",
    menuId: "10",
    name: "Butter Chicken",
    tagline: "Chicken Selection",
    description:
      "BBQ boneless chicken in a rich, special sauce — bold flavour, silky finish, and the kind of plate that keeps guests returning.",
    price: "KES 920",
    image: foodImages.butterChicken,
    note: "Guest Favourite",
  },
  {
    id: "garden-salad",
    menuId: "1",
    name: "Toprise Garden Salad",
    tagline: "Fresh & Light",
    description:
      "Iceberg lettuce, avocado, olives, and garden freshness — proof that luxury on Kimathi Street extends to every course.",
    price: "KES 460",
    image: foodImages.superServedLunch,
    note: "Light Luxury",
  },
];

export const experiences = [
  {
    title: "Private Dining",
    subtitle: "Space. Discretion. Excellence.",
    description:
      "Private rooms for board meetings, conferences, and celebrations — with Halal menus, display screens, and service that anticipates every need.",
    icon: "crown" as const,
  },
  {
    title: "Balcony & Evening Sun",
    subtitle: "Kimathi Street elevated",
    description:
      "Balcony seating with golden evening light — a rare luxury in the CBD. Dine above the street, not in the noise of it.",
    icon: "wine" as const,
  },
  {
    title: "Meetings That Impress",
    subtitle: "Wi‑Fi · Screens · Speed",
    description:
      "High-speed internet, presentation-ready screens, and swift service — the venue Nairobi professionals choose when image matters.",
    icon: "chef" as const,
  },
];

export const ambianceDisplays = [
  {
    src: interiorImages.eveningOutside,
    alt: "Top Rise Restaurant evening outside view — luxury dining at Lyric House",
    span: "col-span-2 row-span-2",
  },
  {
    src: foodImages.sizzlingGrill,
    alt: "Mixed grill sizzling platter at Top Rise Restaurant",
    span: "col-span-1 row-span-1",
  },
  {
    src: interiorImages.balconyView,
    alt: "Balcony seating with evening sun at Top Rise Restaurant",
    span: "col-span-1 row-span-1",
  },
  {
    src: drinkImages.freshDrink,
    alt: "Freshly squeezed juice at Top Rise Restaurant",
    span: "col-span-1 row-span-1",
  },
  {
    src: interiorImages.meetingSetup,
    alt: "Meeting setup with display screens at Top Rise Restaurant",
    span: "col-span-1 row-span-1",
  },
];

export const guestTestimonials = [
  {
    quote:
      "Top Rise is in a league of its own on Kimathi Street. Spacious, quiet, fast service, and the balcony seats at sunset are unforgettable.",
    name: "Corporate Guest",
    title: "Regular Patron, Nairobi CBD",
  },
  {
    quote:
      "We held a conference here — Wi‑Fi was flawless, the screens worked perfectly, and the Halal catering impressed every delegate.",
    name: "Events Coordinator",
    title: "Conference Host",
  },
  {
    quote:
      "4.3 stars on Bolt for a reason. The mixed grill sizzling is exceptional, and dining in feels like luxury without the pretence.",
    name: "Valued Guest",
    title: "Google & Bolt Review",
  },
];
