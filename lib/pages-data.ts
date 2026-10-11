import { foodImages, drinkImages, interiorImages, heroImages } from "./images";

export type GalleryCategory = "all" | "cuisine" | "ambiance" | "bar";

export const galleryCollection = [
  {
    id: 1,
    src: heroImages.home,
    alt: "Top Rise Restaurant hero — luxury dining on Kimathi Street",
    title: "Top Rise at Lyric House",
    caption: "Nairobi CBD's largest restaurant — luxury redefined on Kimathi Street.",
    category: "ambiance" as GalleryCategory,
    span: "col-span-2 row-span-2",
  },
  {
    id: 2,
    src: foodImages.sizzlingGrill,
    alt: "Mixed grill sizzling — fish, chicken, beef and vegetables",
    title: "Mixed Grill Sizzling",
    caption: "Served sizzling hot — our signature showpiece from the grill.",
    category: "cuisine" as GalleryCategory,
    span: "col-span-1 row-span-1",
  },
  {
    id: 3,
    src: interiorImages.balconyView,
    alt: "Balcony seating with evening views at Top Rise Restaurant",
    title: "Balcony Seating",
    caption: "Evening sun, fresh air, and Kimathi Street views from above.",
    category: "ambiance" as GalleryCategory,
    span: "col-span-1 row-span-1",
  },
  {
    id: 4,
    src: foodImages.pilauChipsChicken,
    alt: "Pilau rice with chips and chicken",
    title: "Pilau, Chips & Chicken",
    caption: "Fragrant pilau, golden chips, and tender chicken — a CBD favourite.",
    category: "cuisine" as GalleryCategory,
    span: "col-span-1 row-span-1",
  },
  {
    id: 5,
    src: drinkImages.mocktail,
    alt: "Colourful mocktail served at Top Rise Restaurant",
    title: "Mocktails & Drinks",
    caption: "Refreshing non-alcoholic pours — crafted for every occasion.",
    category: "bar" as GalleryCategory,
    span: "col-span-1 row-span-1",
  },
  {
    id: 6,
    src: interiorImages.eveningOutside,
    alt: "Evening outside view of Top Rise Restaurant at Lyric House",
    title: "Evening at Lyric House",
    caption: "Golden hour on Kimathi Street — where Nairobi CBD evenings begin.",
    category: "ambiance" as GalleryCategory,
    span: "col-span-1 row-span-1",
  },
  {
    id: 7,
    src: foodImages.seafood,
    alt: "Fresh grilled fish platter",
    title: "Grilled Fish",
    caption: "Fresh fish cooked to perfection — succulent and flavourful.",
    category: "cuisine" as GalleryCategory,
    span: "col-span-1 row-span-1",
  },
  {
    id: 8,
    src: interiorImages.mainDiningRoom,
    alt: "Spacious main dining room at Top Rise Restaurant",
    title: "Main Dining Room",
    caption: "Nairobi CBD's largest floor — generous space, artful lighting, cool quiet ambience.",
    category: "ambiance" as GalleryCategory,
    span: "col-span-2 row-span-1",
  },
  {
    id: 9,
    src: foodImages.butterChicken,
    alt: "Butter chicken in rich sauce",
    title: "Butter Chicken",
    caption: "BBQ boneless chicken in a rich special sauce — bold and silky.",
    category: "cuisine" as GalleryCategory,
    span: "col-span-1 row-span-1",
  },
  {
    id: 10,
    src: drinkImages.milkshake,
    alt: "Thick creamy milkshake from the Ice Cream Milkshake Lab",
    title: "Milkshake Lab",
    caption: "Thick, creamy milkshakes — sweet indulgence from our drinks lab.",
    category: "bar" as GalleryCategory,
    span: "col-span-1 row-span-1",
  },
  {
    id: 11,
    src: interiorImages.meetingSetup,
    alt: "Conference and meeting setup with display screens",
    title: "Meeting & Conference Setup",
    caption: "Private rooms with display screens, Wi‑Fi, and swift service.",
    category: "ambiance" as GalleryCategory,
    span: "col-span-1 row-span-1",
  },
  {
    id: 12,
    src: foodImages.riceBeefMasala,
    alt: "Arabian mandi rice with spiced meat",
    title: "Arabian Mandi",
    caption: "Traditional Arabian rice with spiced meat — fragrant and generous.",
    category: "cuisine" as GalleryCategory,
    span: "col-span-1 row-span-1",
  },
  {
    id: 13,
    src: foodImages.beefUgali,
    alt: "Beef karanga served with ugali",
    title: "Beef Karanga & Ugali",
    caption: "Traditional African beef stew — hearty, authentic, unforgettable.",
    category: "cuisine" as GalleryCategory,
    span: "col-span-1 row-span-1",
  },
  {
    id: 14,
    src: foodImages.heavyBreakfast,
    alt: "Full heavy breakfast spread",
    title: "Full Breakfast",
    caption: "A hearty morning spread — eggs, toast, and CBD breakfast done right.",
    category: "cuisine" as GalleryCategory,
    span: "col-span-1 row-span-1",
  },
  {
    id: 15,
    src: drinkImages.africanTea,
    alt: "African mixed tea service",
    title: "African Mixed Tea",
    caption: "Spiced tea blends — Kahawa Somali, dawa, and camel tea on the menu.",
    category: "bar" as GalleryCategory,
    span: "col-span-1 row-span-1",
  },
  {
    id: 16,
    src: interiorImages.interiorDaytime,
    alt: "Bright daytime interior of Top Rise Restaurant",
    title: "Daytime Dining",
    caption: "Well-lit interiors and cool ambience — lunch in luxury on Kimathi Street.",
    category: "ambiance" as GalleryCategory,
    span: "col-span-1 row-span-1",
  },
  {
    id: 17,
    src: foodImages.driedMeatCuisine,
    alt: "Dried meat cuisine — slow-cooked Kenyan specialty",
    title: "Dried Meat Cuisine",
    caption: "Slow-cooked dried meat — rich, hearty, and deeply Kenyan.",
    category: "cuisine" as GalleryCategory,
    span: "col-span-1 row-span-1",
  },
  {
    id: 18,
    src: drinkImages.smoothies,
    alt: "Fresh fruit smoothies",
    title: "Smoothies",
    caption: "Blended fruit smoothies — refreshing, colourful, naturally sweet.",
    category: "bar" as GalleryCategory,
    span: "col-span-1 row-span-1",
  },
  {
    id: 19,
    src: interiorImages.lateNightView,
    alt: "Late night view of Top Rise Restaurant",
    title: "Late Night Dining",
    caption: "Open late — Kimathi Street's address for evening meals and celebrations.",
    category: "ambiance" as GalleryCategory,
    span: "col-span-1 row-span-1",
  },
  {
    id: 20,
    src: foodImages.conferenceLunch,
    alt: "Conference lunch platter",
    title: "Conference Lunch",
    caption: "Executive lunch packages — Halal catering for meetings that impress.",
    category: "cuisine" as GalleryCategory,
    span: "col-span-1 row-span-1",
  },
  {
    id: 21,
    src: drinkImages.premiumCoffee,
    alt: "Premium artisan coffee",
    title: "Premium Coffee",
    caption: "Expertly brewed coffee — cappuccino, latte, and house blends.",
    category: "bar" as GalleryCategory,
    span: "col-span-1 row-span-1",
  },
  {
    id: 22,
    src: foodImages.happyClient,
    alt: "Happy guest enjoying a meal at Top Rise Restaurant",
    title: "Happy Guests",
    caption: "Rated 4.3 on Bolt Food — the experience guests return for.",
    category: "ambiance" as GalleryCategory,
    span: "col-span-1 row-span-1",
  },
  {
    id: 23,
    src: drinkImages.freshDrink,
    alt: "Freshly squeezed juice",
    title: "Fresh Juices",
    caption: "Cold-pressed juices from seasonal fruits — light and revitalising.",
    category: "bar" as GalleryCategory,
    span: "col-span-1 row-span-1",
  },
  {
    id: 24,
    src: foodImages.hotAndHeavyBreakfast,
    alt: "Hot and heavy breakfast platter",
    title: "Hot & Heavy Breakfast",
    caption: "A generous morning feast — start your CBD day at Top Rise.",
    category: "cuisine" as GalleryCategory,
    span: "col-span-1 row-span-1",
  },
];

export const galleryCategories: { id: GalleryCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "cuisine", label: "Cuisine" },
  { id: "ambiance", label: "Ambiance" },
  { id: "bar", label: "Bar & Drinks" },
];

export const galleryIntro = {
  title: "A Venue Worth Photographing",
  body: `Top Rise is more than a restaurant — it is a statement on Kimathi Street. Generous floor space,
    artfully lit interiors, balcony seats bathed in evening sun, and a cool, quiet atmosphere that
    separates us from every competitor in the CBD. Browse moments from our kitchen, our rooms, and
    the evenings that define luxury dining in Nairobi's centre.`,
  highlights: [
    "Nairobi CBD's largest dining floor",
    "Balcony seating with evening sun",
    "Cool, quiet, well-lit ambience",
    "Display screens for events",
  ],
};

export const aboutStory = {
  origin: `Top Rise Restaurant was conceived for a city that demands more — Nairobi. At Lyric House on Kimathi Street,
    we set out to dominate the CBD dining landscape: the largest restaurant in the centre, with luxury
    that competitors cannot replicate — generous space, balcony seats, high-speed Wi‑Fi, display screens,
    and an environment that is cool, quiet, and beautifully lit.`,
  philosophy: `We offer more than excellence. Swift service without rush. Halal cuisine rated 4.3 on Bolt Food.
    From sizzling grills and Arabian mandi to garden salads and private conference rooms — every detail
    is designed so Kimathi Street has a restaurant that leads, not follows.`,
  promise: `Meetings, conferences, birthday celebrations, balcony dinners at sunset — we host them all
    with the same standard: spacious, refined, and unmistakably Top Rise. You are not a guest at a table.
    You are the reason Nairobi CBD has a restaurant worth crossing the city for.`,
};

export const aboutMilestones = [
  { year: "Vision", title: "Dominance on Kimathi", detail: "Built to be Nairobi CBD's largest and most distinguished restaurant address." },
  { year: "Craft", title: "Beyond Excellence", detail: "Halal kitchen, swift service, balcony seats, Wi‑Fi, screens — luxury in every layer." },
  { year: "Today", title: "The CBD Standard", detail: "4.3 on Bolt Food. The venue professionals, families, and celebrations choose first." },
];

export const aboutValues = [
  {
    title: "Luxury Without Compromise",
    description: "Generous space, artful lighting, and a cool quiet ambience — Kimathi Street dining elevated to a standard others aspire to.",
  },
  {
    title: "Halal Excellence",
    description: "Every meal and drink prepared to Halal standards — from sizzling grills to Arabian mandi, flavours that dominate.",
  },
  {
    title: "Swift, Attentive Service",
    description: "Faster service that never feels rushed — attentive staff who respect your time and elevate your experience.",
  },
  {
    title: "Connected & Equipped",
    description: "High-speed Wi‑Fi, display screens, and private rooms — built for meetings, conferences, and celebrations that impress.",
  },
];

export const aboutTestimonials = [
  {
    quote: "Top Rise doesn't compete — it leads. The space alone puts every other Kimathi Street restaurant in the shade.",
    name: "Corporate Executive",
    role: "Regular Patron",
  },
  {
    quote: "Balcony seats at sunset, fast service, flawless Wi‑Fi for our board meeting. This is what CBD luxury should feel like.",
    name: "Events Director",
    role: "Conference Host",
  },
  {
    quote: "Rated 4.3 on Bolt for good reason. The mixed grill sizzling is outstanding — and dining in is even better.",
    name: "Food Enthusiast",
    role: "Bolt Food Review",
  },
  {
    quote: "Quiet, cool, well-lit — finally a CBD restaurant where you can actually hear your guest and enjoy your meal.",
    name: "Diplomatic Guest",
    role: "Private Dining",
  },
  {
    quote: "Our birthday celebration had private space, display screens for photos, and service that felt genuinely premium.",
    name: "Celebration Host",
    role: "Lyric House",
  },
];

export const eventOfferings = [
  {
    title: "Private Dining Rooms",
    subtitle: "2 – 50 Guests",
    description:
      "Secluded rooms for intimate celebrations, executive lunches, and family gatherings. Halal menus, dedicated service, and the privacy your occasion deserves.",
    highlights: ["Custom menu options", "Halal & vegan choices", "Private room booking", "Occasion styling on request"],
    icon: "users" as const,
  },
  {
    title: "Meetings & Conferences",
    subtitle: "Business in the CBD",
    description:
      "Host your meeting or conference in Nairobi's largest CBD restaurant. Spacious private areas, reliable catering, and a central Kimathi Street location.",
    highlights: ["Conference-ready spaces", "Halal lunch packages", "Flexible seating layouts", "Dietary accommodations"],
    icon: "award" as const,
  },
  {
    title: "Birthday Celebrations",
    subtitle: "Birthdays · Anniversaries · Milestones",
    description:
      "Mark life's special moments in a room designed for memory-making. From surprise parties to milestone birthdays — we help orchestrate every detail.",
    highlights: ["Celebration menus", "Cake coordination", "Private room setup", "Photography-friendly spaces"],
    icon: "star" as const,
  },
  {
    title: "Corporate Events",
    subtitle: "Teams & Clients",
    description:
      "Impress clients and colleagues without leaving the CBD. Presentation-ready spaces, Halal cuisine, and service that keeps your event running smoothly.",
    highlights: ["Executive packages", "AV-friendly rooms", "Group billing options", "Happy-hour add-ons"],
    icon: "calendar" as const,
  },
  {
    title: "Off-Site Catering",
    subtitle: "Top Rise, Where You Are",
    description:
      "Bring the Top Rise experience to your office or venue. Full-service Halal catering with the same standards as our Kimathi Street table.",
    highlights: ["On-site service", "Halal menu options", "Professional setup", "Minimum guest count applies"],
    icon: "map" as const,
  },
  {
    title: "Happy-Hour & Seasonal Events",
    subtitle: "Special Evenings",
    description:
      "Happy-hour food, festive season gatherings, and Nairobi's social calendar — celebrated with themed menus and evenings worth sharing.",
    highlights: ["Happy-hour specials", "Group packages", "Seasonal menus", "Early booking recommended"],
    icon: "clock" as const,
  },
];

export const eventProcess = [
  { step: "01", title: "Consult", detail: "Share your vision — guest count, occasion, Halal requirements, and budget." },
  { step: "02", title: "Plan", detail: "Our team designs your menu and maps every detail for your private space." },
  { step: "03", title: "Confirm", detail: "Review the plan, refine the menu, and lock in your date." },
  { step: "04", title: "Celebrate", detail: "Flawless execution. You enjoy the event — we handle everything else." },
];

export const contactMessage = {
  headline: "Experience Luxury on Kimathi Street",
  opening: `Whether you are reserving a balcony table for evening sun, booking a private room with display screens,
    or ordering our signature sizzling grills to your door — Top Rise is Nairobi CBD's answer to dining
    that offers more than excellence.`,
  body: `High-speed Wi‑Fi for your meetings. Swift service that respects your schedule. A cool, quiet,
    well-lit environment that feels worlds away from CBD noise. Every enquiry is handled with the
    discretion and warmth befitting Kimathi Street's premier restaurant address.`,
  closing: `Lyric House awaits. Call, write, or order on Bolt — your table, your balcony, your event begins here.`,
  signature: "The Top Rise Team",
};

export const venueHighlights = [
  { label: "Floor Space", value: "CBD's Largest" },
  { label: "Bolt Rating", value: "4.3 Stars" },
  { label: "Wi‑Fi", value: "High-Speed" },
  { label: "Ambience", value: "Cool & Quiet" },
  { label: "Balcony", value: "Evening Sun" },
  { label: "Events", value: "Display Screens" },
];
