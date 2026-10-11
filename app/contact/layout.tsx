import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Directions",
  description: "Find Top Rise Restaurant at Lyric House, Nairobi CBD. Call or WhatsApp to order, book a table, or arrange a group lunch. Open daily 8 AM to 10 PM.",
  alternates: { canonical: "/contact/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
