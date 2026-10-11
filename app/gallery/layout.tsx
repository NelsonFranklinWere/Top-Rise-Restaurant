import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "See the food, drinks and dining room at Top Rise Restaurant, Lyric House, Nairobi CBD.",
  alternates: { canonical: "/gallery/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
