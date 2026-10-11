import type { Metadata } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { ImagePreloader } from "@/components/image-preloader";

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

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  title: "Top Rise Restaurant — Luxury Halal Dining on Kimathi Street | Nairobi CBD",
  description: "Nairobi CBD's largest luxury restaurant at Lyric House, Kimathi Street. Balcony seats, high-speed Wi‑Fi, display screens, swift service, cool quiet ambience, and Halal cuisine rated 4.3 on Bolt Food.",
  keywords: ["Top Rise Restaurant", "luxury restaurant Kimathi Street", "Halal restaurant Nairobi CBD", "Lyric House Nairobi", "balcony dining Nairobi CBD", "private dining Nairobi", "Bolt Food Top Rise", "conference venue Nairobi CBD"],
  authors: [{ name: "Top Rise Restaurant" }],
  openGraph: {
    title: "Top Rise Restaurant — Luxury Redefined on Kimathi Street",
    description: "Nairobi CBD's premier address — spacious, quiet, well-lit, with balcony seats, Wi‑Fi, display screens, and Halal cuisine rated 4.3 on Bolt Food.",
    url: "https://github.com/cresdynamics-lang/top-rise-restaurant",
    siteName: "Top Rise Restaurant",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Top Rise Restaurant - Halal dining at Lyric House, Nairobi CBD",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Rise Restaurant — Luxury Redefined on Kimathi Street",
    description: "Nairobi CBD's premier address — spacious, quiet, well-lit, with balcony seats, Wi‑Fi, display screens, and Halal cuisine rated 4.3 on Bolt Food.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Top Rise Restaurant",
              image: "/og-image.jpg",
              "@id": "https://github.com/cresdynamics-lang/top-rise-restaurant",
              url: "https://github.com/cresdynamics-lang/top-rise-restaurant",
              telephone: "+254715551234",
              priceRange: "$$",
              servesCuisine: "Halal",
              slogan: "Luxury Redefined on Kimathi Street",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Lyric House, Kimathi Street",
                addressLocality: "Nairobi CBD",
                addressCountry: "KE",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -1.2837,
                longitude: 36.8219,
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
                closes: "23:00",
              },
            }),
          }}
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
