import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meetings & Group Bookings",
  description: "Book a table at Top Rise for business meetings, team lunches, office lunch accounts, chamas and family meals in the Nairobi CBD.",
  alternates: { canonical: "/events/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
