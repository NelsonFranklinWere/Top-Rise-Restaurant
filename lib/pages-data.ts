import { foodImages, drinkImages, interiorImages } from "./images";

export type GalleryCategory = "all" | "cuisine" | "ambiance" | "bar";

export const galleryCollection = [
  {
    id: 1,
    src: interiorImages.ambiance1,
    alt: "Dining room at Top Rise Restaurant",
    title: "The Dining Room",
    caption: "Room for the lunch crowd, and a quiet corner when you need one.",
    category: "ambiance" as GalleryCategory,
    span: "col-span-2 row-span-2",
  },
  {
    id: 2,
    src: foodImages.superservedlunch,
    alt: "Beef pilau with kachumbari",
    title: "Beef Pilau",
    caption: "Spiced rice, tender beef, fresh kachumbari.",
    category: "cuisine" as GalleryCategory,
    span: "col-span-1 row-span-1",
  },
  {
    id: 3,
    src: interiorImages.inside,
    alt: "Inside Top Rise Restaurant",
    title: "Inside Top Rise",
    caption: "Clean, bright and easy to settle into.",
    category: "ambiance" as GalleryCategory,
    span: "col-span-1 row-span-1",
  },
  {
    id: 4,
    src: foodImages.driedmeatcuisine,
    alt: "Nyama choma off the grill",
    title: "Nyama Choma",
    caption: "Grilled slow, served with ugali and kachumbari.",
    category: "cuisine" as GalleryCategory,
    span: "col-span-1 row-span-1",
  },
  {
    id: 5,
    src: drinkImages.juicydrink,
    alt: "Fresh juice",
    title: "Fresh Juices",
    caption: "Passion, orange and mango, pressed to order.",
    category: "bar" as GalleryCategory,
    span: "col-span-1 row-span-1",
  },
  {
    id: 6,
    src: interiorImages.ambiance2,
    alt: "Table set for guests",
    title: "Your Table",
    caption: "Booked ahead and ready when you arrive.",
    category: "ambiance" as GalleryCategory,
    span: "col-span-1 row-span-1",
  },
  {
    id: 7,
    src: foodImages.seafood,
    alt: "Whole tilapia",
    title: "Whole Tilapia",
    caption: "Wet fry or dry fry, with ugali and greens.",
    category: "cuisine" as GalleryCategory,
    span: "col-span-1 row-span-1",
  },
  {
    id: 8,
    src: interiorImages.interior,
    alt: "Top Rise Restaurant at Lyric House",
    title: "Lyric House",
    caption: "In the heart of the Nairobi CBD.",
    category: "ambiance" as GalleryCategory,
    span: "col-span-2 row-span-1",
  },
  {
    id: 9,
    src: foodImages.breakfast1,
    alt: "Full Kenyan breakfast",
    title: "Full Breakfast",
    caption: "Served from 8 AM, every day.",
    category: "cuisine" as GalleryCategory,
    span: "col-span-1 row-span-1",
  },
  {
    id: 10,
    src: drinkImages.premiumcoffee,
    alt: "Kenyan coffee",
    title: "Kenyan Coffee",
    caption: "Locally roasted, brewed by the cup.",
    category: "bar" as GalleryCategory,
    span: "col-span-1 row-span-1",
  },
  {
    id: 11,
    src: interiorImages.carousel,
    alt: "Group seating at Top Rise",
    title: "Group Tables",
    caption: "Team lunches, family meals and get-togethers.",
    category: "ambiance" as GalleryCategory,
    span: "col-span-1 row-span-1",
  },
  {
    id: 12,
    src: foodImages.friedchicken,
    alt: "Grilled chicken and chips",
    title: "Chicken & Chips",
    caption: "Off the grill with masala chips.",
    category: "cuisine" as GalleryCategory,
    span: "col-span-1 row-span-1",
  },
];

export const galleryCategories: { id: GalleryCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "cuisine", label: "Food" },
  { id: "ambiance", label: "The Restaurant" },
  { id: "bar", label: "Drinks" },
];

export const aboutStory = {
  origin: `Top Rise was built for the people who keep Nairobi moving: the office worker with one hour for lunch,
    the business owner meeting a client in town, the family in the CBD for the day. We are at Lyric House,
    in the middle of it all.`,
  philosophy: `Our kitchen cooks the food Kenyans actually want to eat. Pilau, ugali and beef fry, tilapia,
    nyama choma, chapati and stews, made fresh every day and served in portions that respect your appetite.`,
  promise: `We keep our promise simple. A full plate, a fair price, and service fast enough to get you
    back to work on time.`,
};

export const aboutMilestones = [
  { year: "Where", title: "Lyric House, CBD", detail: "A short walk from the offices, stages and shops of central Nairobi." },
  { year: "When", title: "8 AM to 10 PM", detail: "Open every day for breakfast, lunch and supper." },
  { year: "How Much", title: "KES 300 – 1,000", detail: "Honest prices on every plate. No surprises on the bill." },
];

export const aboutValues = [
  {
    title: "Generous",
    description: "Portions that fill you. Nobody leaves Top Rise hungry.",
  },
  {
    title: "Fair",
    description: "Good food at prices that work for every day, not only for special days.",
  },
  {
    title: "Fast",
    description: "Order ahead and your meal is ready when you arrive. Your lunch hour stays yours.",
  },
  {
    title: "Fresh",
    description: "Cooked daily in our own kitchen, the way it is made at home.",
  },
];

/** Our promises to guests. Swap for real Google reviews once the restaurant shares them. */
export const aboutTestimonials = [
  {
    quote: "A full plate at a fair price, every single day.",
    name: "Our Promise",
    role: "Top Rise Kitchen",
  },
  {
    quote: "Order ahead and your meal is ready when you walk in.",
    name: "Our Promise",
    role: "Service",
  },
  {
    quote: "Book a table and it is yours. Meet for as long as you need.",
    name: "Our Promise",
    role: "Meetings & Groups",
  },
  {
    quote: "Rated 4.3 stars by more than a hundred guests on Google.",
    name: "Google Reviews",
    role: "130 Reviews",
  },
];

export const eventOfferings = [
  {
    title: "Business Meetings",
    subtitle: "2 – 8 Guests",
    description:
      "A central, reliable table for client meetings and catch-ups. Book ahead and it is reserved in your name.",
    highlights: ["Reserved in advance", "Quiet corner on request", "Tea, coffee and full menu", "Stay as long as you need"],
    icon: "users" as const,
  },
  {
    title: "Team Lunches",
    subtitle: "For the Whole Office",
    description:
      "Bring the department. Send us your order before you leave the office and everything lands on the table together.",
    highlights: ["Pre-order by WhatsApp", "One bill or split bills", "Served together", "Group seating"],
    icon: "award" as const,
  },
  {
    title: "Office Lunch Accounts",
    subtitle: "Standing Weekly Orders",
    description:
      "Lunch for your staff, sorted. Set a standing order for the days you choose and we pack it for pickup or delivery within the CBD.",
    highlights: ["Weekly or daily orders", "Packed and labelled", "Pickup or CBD delivery", "Monthly invoicing"],
    icon: "calendar" as const,
  },
  {
    title: "Birthdays & Get-Togethers",
    subtitle: "Friends · Family · Chamas",
    description:
      "Celebrate without stretching the budget. Tables set together, platters to share, and room for the cake.",
    highlights: ["Tables joined for groups", "Sharing platters", "Bring your own cake", "Chama meetings welcome"],
    icon: "star" as const,
  },
  {
    title: "Bulk & Takeaway Orders",
    subtitle: "Top Rise, Where You Are",
    description:
      "Feeding a training, a meeting or a function? Order in bulk and collect hot, or have it delivered within the CBD.",
    highlights: ["Packed individually", "Order a day ahead for 20+", "Pay by M-Pesa", "Cutlery included"],
    icon: "map" as const,
  },
  {
    title: "Family Meals",
    subtitle: "In Town for the Day",
    description:
      "Shopping or running errands in the CBD? Sit the whole family down for a proper meal at a price that makes sense.",
    highlights: ["Platters to share", "Kid-friendly portions", "Open all day", "Easy to find"],
    icon: "clock" as const,
  },
];

export const eventProcess = [
  { step: "01", title: "Tell Us", detail: "Send your date, time and the number of people by WhatsApp, phone or the form." },
  { step: "02", title: "Choose", detail: "Pick from the menu, or ask us to suggest platters for your group and budget." },
  { step: "03", title: "Confirm", detail: "We confirm your table and order by WhatsApp. Pay by M-Pesa or on the day." },
  { step: "04", title: "Arrive", detail: "Your table is ready and the food follows. You get on with your meeting." },
];

export const contactMessage = {
  headline: "Talk to Us",
  opening: `Whether you want to order lunch, book a table for a meeting, or feed a whole office,
    your message comes straight to our team.`,
  body: `WhatsApp is the fastest way to reach us. Send your order or booking and we confirm within minutes
    during opening hours. You can also call, or use the form below.`,
  closing: `We are at Lyric House in the Nairobi CBD, open every day from 8 AM to 10 PM.`,
  signature: "The Top Rise Team",
};
