import type { Metadata } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { ImagePreloader } from "@/components/image-preloader";
import { menuItems, restaurantInfo } from "@/lib/data";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Set NEXT_PUBLIC_BASE_URL to the live domain at deploy time.
const siteUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

const siteTitle = "Top Rise Restaurant | Kenyan Food in Nairobi CBD, Lyric House";
const siteDescription =
  "Top Rise Restaurant at Lyric House, Nairobi CBD. Generous Kenyan meals from KES 300: pilau, ugali and beef fry, tilapia, nyama choma. Open daily 8 AM to 10 PM. Order ahead on WhatsApp, pay by M-Pesa, or book a table for your meeting.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Top Rise Restaurant, Nairobi CBD",
  },
  description: siteDescription,
  keywords: [
    "Top Rise Restaurant",
    "restaurant in Nairobi CBD",
    "restaurants in Nairobi CBD",
    "lunch in Nairobi CBD",
    "Kenyan food Nairobi",
    "affordable restaurant Nairobi",
    "Lyric House restaurant",
    "breakfast Nairobi CBD",
    "nyama choma Nairobi CBD",
    "pilau Nairobi",
    "meeting place Nairobi CBD",
    "order lunch Nairobi CBD",
  ],
  authors: [{ name: "Top Rise Restaurant" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Top Rise Restaurant | Big Plates, Fair Prices, Right in Town",
    description:
      "Honest Kenyan cooking at Lyric House in the Nairobi CBD. Meals from KES 300, open daily 8 AM to 10 PM. Order ahead or book a table.",
    url: siteUrl,
    siteName: "Top Rise Restaurant",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Top Rise Restaurant, Lyric House, Nairobi CBD",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Rise Restaurant | Big Plates, Fair Prices, Right in Town",
    description:
      "Kenyan meals from KES 300 at Lyric House, Nairobi CBD. Open daily 8 AM to 10 PM.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const sectionNames: Record<string, string> = {
  breakfast: "Breakfast",
  mains: "Lunch & Supper",
  grill: "From the Grill",
  drinks: "Drinks",
};

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: restaurantInfo.fullName,
  image: `${siteUrl}/og-image.jpg`,
  "@id": siteUrl,
  url: siteUrl,
  telephone: restaurantInfo.phone,
  email: restaurantInfo.email,
  priceRange: "KES 300 - 2,000",
  servesCuisine: ["Kenyan", "Swahili", "Indian", "Grill", "Halal"],
  slogan: restaurantInfo.tagline,
  acceptsReservations: true,
  paymentAccepted: "M-Pesa, Cash",
  currenciesAccepted: "KES",
  hasMap: restaurantInfo.social.google,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Lyric House, Kimathi Street",
    addressLocality: "Nairobi",
    addressRegion: "Nairobi County",
    addressCountry: "KE",
  },
  areaServed: "Nairobi CBD",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: restaurantInfo.rating.value,
    reviewCount: restaurantInfo.rating.count,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "08:00",
    closes: "22:00",
  },
  hasMenu: {
    "@type": "Menu",
    url: `${siteUrl}/menu/`,
    hasMenuSection: Object.keys(sectionNames).map((category) => ({
      "@type": "MenuSection",
      name: sectionNames[category],
      hasMenuItem: menuItems
        .filter((item) => item.category === category)
        .map((item) => ({
          "@type": "MenuItem",
          name: item.name,
          description: item.description,
          offers: {
            "@type": "Offer",
            price: item.price,
            priceCurrency: "KES",
          },
        })),
    })),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
      </head>
      <body
        className={`${playfairDisplay.variable} ${cormorant.variable} ${inter.variable} antialiased bg-charcoal-950 text-ivory`}
      >
        <Navigation />
        <ImagePreloader />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
