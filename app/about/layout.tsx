import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Top Rise Restaurant serves generous, fairly priced Kenyan food at Lyric House in the Nairobi CBD. Open every day from 8 AM to 10 PM.",
  alternates: { canonical: "/about/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
