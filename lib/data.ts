import { MenuItem } from "./types";
import { drinkImages, foodImages } from "./images";

/**
 * PLACEHOLDER MENU
 * Dishes and prices below are a realistic sample in Top Rise's price band
 * (KES 300 – 1,000 per plate). Replace with the restaurant's real menu
 * and prices before launch.
 */
export const menuItems: MenuItem[] = [
  // Breakfast
  {
    id: "1",
    name: "Full Kenyan Breakfast",
    description: "Two eggs your way, sausage, toast, fresh fruit and a pot of tea or coffee.",
    price: 450,
    category: "breakfast",
    image: foodImages.breakfast1,
  },
  {
    id: "2",
    name: "Chapati & Beans",
    description: "Two soft, layered chapati with slow-cooked coconut beans.",
    price: 300,
    category: "breakfast",
    isVegetarian: true,
    image: foodImages.breakfast2,
  },
  {
    id: "3",
    name: "Mandazi & Chai",
    description: "Three warm mandazi served with a pot of spiced Kenyan tea.",
    price: 200,
    category: "breakfast",
    isVegetarian: true,
    image: foodImages.hotBreakfast,
  },
  {
    id: "4",
    name: "Spanish Omelette & Toast",
    description: "Three-egg omelette with onions, tomato and peppers, served with buttered toast.",
    price: 350,
    category: "breakfast",
    isVegetarian: true,
    image: foodImages.breakfast3,
  },
  {
    id: "5",
    name: "Heavy Breakfast Platter",
    description: "Eggs, beef sausages, baked beans, arrowroot and sweet potato. Built to last until supper.",
    price: 550,
    category: "breakfast",
    image: foodImages.hotHeavyBreakfast,
  },
  {
    id: "6",
    name: "Beef Samosas (3)",
    description: "Crisp, hand-folded samosas with a wedge of lemon and kachumbari.",
    price: 250,
    category: "breakfast",
    spiceLevel: "mild",
    image: foodImages.elegantlyfriedfood1,
  },

  // Mains
  {
    id: "7",
    name: "Beef Pilau",
    description: "Fragrant spiced rice cooked with tender beef, served with fresh kachumbari.",
    price: 450,
    category: "mains",
    spiceLevel: "mild",
    image: foodImages.superservedlunch,
  },
  {
    id: "8",
    name: "Ugali, Beef Fry & Sukuma",
    description: "The classic plate. Generous beef fry, fresh ugali and sukuma wiki.",
    price: 400,
    category: "mains",
    image: foodImages.lunch1,
  },
  {
    id: "9",
    name: "Kienyeji Chicken Stew",
    description: "Slow-cooked free-range chicken in a rich stew, with ugali or rice.",
    price: 700,
    category: "mains",
    image: foodImages.lunch2,
  },
  {
    id: "10",
    name: "Whole Tilapia, Wet or Dry Fry",
    description: "Whole lake tilapia, fried crisp or simmered in tomato and onion, with ugali and greens.",
    price: 900,
    category: "mains",
    image: foodImages.seafood,
  },
  {
    id: "11",
    name: "Chapati & Ndengu",
    description: "Two chapati with a hearty green gram stew.",
    price: 300,
    category: "mains",
    isVegetarian: true,
    image: foodImages.lunch3,
  },
  {
    id: "12",
    name: "Matoke & Beef Stew",
    description: "Green bananas simmered soft, served with a ladle of beef stew.",
    price: 450,
    category: "mains",
    image: foodImages.elegantlyfriedfood2,
  },

  // Grill
  {
    id: "13",
    name: "Nyama Choma (¼ kg)",
    description: "Goat off the grill, served with kachumbari and ugali.",
    price: 750,
    category: "grill",
    image: foodImages.driedmeatcuisine,
  },
  {
    id: "14",
    name: "Grilled Chicken & Chips",
    description: "Quarter chicken off the grill with masala chips and coleslaw.",
    price: 600,
    category: "grill",
    spiceLevel: "mild",
    image: foodImages.friedchicken,
  },
  {
    id: "15",
    name: "Beef Mshikaki",
    description: "Three marinated beef skewers with a side of chips.",
    price: 500,
    category: "grill",
    spiceLevel: "medium",
    image: foodImages.friedmeatcuisine,
  },
  {
    id: "16",
    name: "Mixed Grill Platter",
    description: "Nyama choma, chicken and sausage with ugali and kachumbari. Enough for two.",
    price: 1000,
    category: "grill",
    image: foodImages.driedmeatcuisine,
  },
  {
    id: "17",
    name: "Masala Chips",
    description: "Chips tossed in our house masala sauce. A full plate.",
    price: 300,
    category: "grill",
    isVegetarian: true,
    spiceLevel: "medium",
    image: foodImages.elegantlyfriedfood1,
  },
  {
    id: "18",
    name: "Fried Chicken (2 pieces)",
    description: "Crisp fried chicken with chips and a fresh salad.",
    price: 550,
    category: "grill",
    image: foodImages.friedchicken,
  },

  // Drinks
  {
    id: "19",
    name: "Fresh Passion Juice",
    description: "Pressed to order, nothing added.",
    price: 200,
    category: "drinks",
    isVegetarian: true,
    image: drinkImages.juicydrink,
  },
  {
    id: "20",
    name: "Fresh Orange Juice",
    description: "A tall glass of freshly squeezed orange.",
    price: 250,
    category: "drinks",
    isVegetarian: true,
    image: drinkImages.superjuicewithorange,
  },
  {
    id: "21",
    name: "Kenyan Coffee",
    description: "Locally roasted Kenyan beans, brewed by the cup.",
    price: 200,
    category: "drinks",
    isVegetarian: true,
    image: drinkImages.premiumcoffee,
  },
  {
    id: "22",
    name: "Dawa",
    description: "Hot lemon, ginger and honey. The Nairobi cure-all.",
    price: 200,
    category: "drinks",
    isVegetarian: true,
    image: drinkImages.elegantcoffe,
  },
  {
    id: "23",
    name: "Soda (300ml)",
    description: "Ice cold. Your choice.",
    price: 100,
    category: "drinks",
    isVegetarian: true,
    image: drinkImages.chillingdrink,
  },
  {
    id: "24",
    name: "Mango & Passion Cooler",
    description: "Fresh mango and passion blended over ice.",
    price: 300,
    category: "drinks",
    isVegetarian: true,
    image: drinkImages.twoglassescombineddrink,
  },
];

/**
 * TODO before launch — confirm with the restaurant:
 *  - phone below is from public listings (Wanderlog, Top-Rated); confirm it is also the WhatsApp line
 *  - email address (placeholder below)
 *  - Instagram, Facebook and Bolt Food links (left empty; buttons hide when empty)
 */
export const restaurantInfo = {
  name: "Top Rise",
  fullName: "Top Rise Restaurant",
  tagline: "Big plates. Fair prices. Right in town.",
  subtext:
    "Honest Kenyan cooking at Lyric House in the heart of the Nairobi CBD. Order ahead and skip the lunch queue, or book a table for your next meeting.",
  description:
    "Top Rise Restaurant sits in Lyric House, right in the Nairobi CBD. Generous Kenyan meals from breakfast to supper, served fast and priced fairly, for everyone who works, meets and shops in town.",
  address: {
    street: "Lyric House, Kimathi Street",
    city: "Nairobi CBD",
    country: "Kenya",
  },
  phone: "+254 715 551 234",
  whatsapp: "+254 715 551 234",
  email: "info@toprise.co.ke",
  hours: {
    mon_thu: "Open every day",
    fri_sun: "8:00 AM – 10:00 PM",
  },
  rating: { value: 4.3, count: 130 },
  priceBand: "Halal · Meals from KES 300",
  social: {
    instagram: "",
    facebook: "",
    google: "https://www.google.com/maps/search/?api=1&query=Top+Rise+Restaurant+Lyric+House+Nairobi",
    bolt: "",
  },
};
