import type { MenuInput } from "./db";
import type { MenuCategory } from "./types";

export const MENU_CATEGORIES: { id: MenuCategory; label: string }[] = [
  { id: "starters", label: "Starters" },
  { id: "mains", label: "Main Course" },
  { id: "desserts", label: "Desserts" },
  { id: "drinks", label: "Drinks" },
];

const CATEGORY_IDS = MENU_CATEGORIES.map((c) => c.id);
const SPICE_LEVELS = ["mild", "medium", "hot"] as const;

type Result = { ok: true; value: MenuInput } | { ok: false; error: string };

/** Validates a menu item sent from the admin screen. */
export function parseMenuInput(body: unknown): Result {
  if (typeof body !== "object" || body === null) {
    return { ok: false, error: "Invalid request" };
  }
  const data = body as Record<string, unknown>;

  const name = typeof data.name === "string" ? data.name.trim() : "";
  if (name.length < 2 || name.length > 80) {
    return { ok: false, error: "Name must be between 2 and 80 characters" };
  }

  const description = typeof data.description === "string" ? data.description.trim() : "";
  if (description.length > 300) {
    return { ok: false, error: "Description must be 300 characters or fewer" };
  }

  const price = Number(data.price);
  if (!Number.isInteger(price) || price < 0 || price > 100000) {
    return { ok: false, error: "Price must be a whole number of shillings" };
  }

  const category = data.category as MenuCategory;
  if (!CATEGORY_IDS.includes(category)) {
    return { ok: false, error: "Choose a valid category" };
  }

  let image: string | null = null;
  if (typeof data.image === "string" && data.image.trim() !== "") {
    image = data.image.trim();
    // Only site-hosted pictures: a path under /food, /drinks, /interior or /hero.
    if (!/^\/(food|drinks|interior|hero|menu)\/[A-Za-z0-9._-]+\.(webp|jpg|jpeg|png)$/.test(image)) {
      return { ok: false, error: "Choose a picture from the list" };
    }
  }

  let spiceLevel: MenuInput["spiceLevel"] = null;
  if (typeof data.spiceLevel === "string" && data.spiceLevel !== "") {
    if (!SPICE_LEVELS.includes(data.spiceLevel as (typeof SPICE_LEVELS)[number])) {
      return { ok: false, error: "Choose a valid spice level" };
    }
    spiceLevel = data.spiceLevel as MenuInput["spiceLevel"];
  }

  const sortOrder = Number(data.sortOrder ?? 0);
  if (!Number.isInteger(sortOrder) || sortOrder < 0 || sortOrder > 100000) {
    return { ok: false, error: "Position must be a whole number" };
  }

  return {
    ok: true,
    value: {
      name,
      description,
      price,
      category,
      image,
      isVegetarian: data.isVegetarian === true,
      spiceLevel,
      isAvailable: data.isAvailable !== false,
      sortOrder,
    },
  };
}
