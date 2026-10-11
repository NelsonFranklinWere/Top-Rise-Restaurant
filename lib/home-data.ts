import { foodImages, drinkImages, interiorImages } from "./images";

export const luxuryStandards = [
  "Open 8 AM – 10 PM Daily",
  "Meals From KES 300",
  "Order Ahead, Skip the Queue",
  "Pay by M-Pesa",
  "Lyric House, Nairobi CBD",
  "Tables for Meetings & Groups",
  "Generous Portions",
  "Breakfast · Lunch · Supper",
];

/**
 * Home page favourites. `menuId` links each card to its dish in the database,
 * so the name, price and picture follow whatever is saved at /admin, and a
 * dish that is hidden or deleted there drops off the home page too.
 * The values below are only the fallback shown before the live menu loads.
 */
export const featuredDelicacies = [
  {
    id: "pilau",
    menuId: "7",
    name: "Beef Pilau",
    tagline: "The Lunch Favourite",
    description:
      "Fragrant spiced rice cooked with tender beef and served with fresh kachumbari. The plate town comes back for.",
    price: "KES 450",
    image: foodImages.superservedlunch,
    note: "Most Ordered",
  },
  {
    id: "tilapia",
    menuId: "10",
    name: "Whole Tilapia",
    tagline: "Wet Fry or Dry Fry",
    description:
      "A whole lake tilapia with ugali and greens. Fried crisp, or simmered in tomato and onion.",
    price: "KES 900",
    image: foodImages.seafood,
    note: "House Speciality",
  },
  {
    id: "choma",
    menuId: "13",
    name: "Nyama Choma",
    tagline: "Off the Grill",
    description:
      "A quarter kilo of goat, grilled slow and served with kachumbari and ugali.",
    price: "KES 750",
    image: foodImages.driedmeatcuisine,
    note: "Weekend Favourite",
  },
  {
    id: "breakfast",
    menuId: "1",
    name: "Full Kenyan Breakfast",
    tagline: "From 8 AM",
    description:
      "Eggs, sausage, toast, fruit and a pot of tea or coffee. A proper start before the office.",
    price: "KES 450",
    image: foodImages.breakfast1,
    note: "Morning Special",
  },
];

export const experiences = [
  {
    title: "Order Ahead",
    subtitle: "Skip the lunch queue",
    description:
      "Pick your meal on the menu and send it to us on WhatsApp. It is plated and waiting when you walk in, or packed for pickup.",
    icon: "crown" as const,
  },
  {
    title: "Meet Over a Meal",
    subtitle: "A table in the middle of town",
    description:
      "Meeting a client or catching up with the team? Book a table at Lyric House. Central, easy to find, and nobody rushes you.",
    icon: "wine" as const,
  },
  {
    title: "Groups & Office Lunch",
    subtitle: "Feed the whole team",
    description:
      "Group tables, bulk orders and standing weekly lunches for offices in the CBD. Tell us the numbers and we handle the rest.",
    icon: "chef" as const,
  },
];

export const ambianceDisplays = [
  {
    src: interiorImages.ambiance1,
    alt: "Dining room at Top Rise Restaurant, Nairobi CBD",
    span: "col-span-2 row-span-2",
  },
  {
    src: foodImages.lunch1,
    alt: "A lunch plate at Top Rise",
    span: "col-span-1 row-span-1",
  },
  {
    src: interiorImages.inside,
    alt: "Inside Top Rise Restaurant",
    span: "col-span-1 row-span-1",
  },
  {
    src: drinkImages.juicydrink,
    alt: "Fresh juice at Top Rise",
    span: "col-span-1 row-span-1",
  },
  {
    src: interiorImages.ambiance2,
    alt: "Table set for a meeting at Top Rise",
    span: "col-span-1 row-span-1",
  },
];

/** Reasons guests return. Swap for real Google reviews once the restaurant shares them. */
export const guestTestimonials = [
  {
    quote:
      "Plates are generous and prices stay between KES 300 and KES 1,000. You leave full, and you know what it will cost before you sit down.",
    name: "Portions & Price",
    title: "Why regulars come back",
  },
  {
    quote:
      "Order ahead on WhatsApp and your meal is ready when you arrive. A full lunch fits comfortably inside a one-hour break.",
    name: "Speed",
    title: "Built for the lunch hour",
  },
  {
    quote:
      "Lyric House is a short walk from most CBD offices and stages, which makes Top Rise an easy place to agree on for a meeting.",
    name: "Location",
    title: "Right in town",
  },
];
