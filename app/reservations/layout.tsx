import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Table",
  description: "Book a table at Top Rise Restaurant in the Nairobi CBD for a meeting, a group or the family. Same-day bookings welcome, confirmed on WhatsApp.",
  alternates: { canonical: "/reservations/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
