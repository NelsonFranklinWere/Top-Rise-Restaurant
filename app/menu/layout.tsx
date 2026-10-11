import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu & Prices",
  description: "Top Rise Restaurant menu with prices. Breakfast, pilau, ugali and beef fry, tilapia, nyama choma and fresh juices from KES 100 to KES 1,000. Order ahead on WhatsApp.",
  alternates: { canonical: "/menu/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
