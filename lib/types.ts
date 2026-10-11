export type MenuCategory = "breakfast" | "mains" | "grill" | "drinks";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  image?: string;
  isVegetarian?: boolean;
  isVegan?: boolean;
  spiceLevel?: "mild" | "medium" | "hot";
  allergens?: string[];
  /** False hides the dish from the public menu, for example when sold out. */
  isAvailable?: boolean;
  /** Position within its category; lower numbers show first. */
  sortOrder?: number;
}

export interface Reservation {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  specialRequests?: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
