import { MenuItem } from "./types";
import { restaurantInfo } from "./data";

export function formatMenuPrice(price: number) {
  return `KES ${price.toLocaleString()}`;
}

export function buildWhatsAppOrderUrl(item: MenuItem): string {
  const phone = restaurantInfo.whatsapp.replace(/[^0-9]/g, "");
  const message = [
    `Hello Top Rise Restaurant! I would like to order:`,
    ``,
    `*${item.name}*`,
    `Price: ${formatMenuPrice(item.price)}`,
    ``,
    item.description,
    ``,
    `Please confirm availability. Thank you!`,
  ].join("\n");

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function buildBoltOrderUrl(item: MenuItem): string {
  const base = restaurantInfo.social.bolt;
  const note = encodeURIComponent(item.name);
  return `${base}?utm_source=toprise_website&item=${note}`;
}
