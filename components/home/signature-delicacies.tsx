"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { OptimizedImage } from "@/components/optimized-image";
import { SectionHeading } from "@/components/section-heading";
import { featuredDelicacies as fallbackDelicacies } from "@/lib/home-data";
import { formatMenuPrice } from "@/lib/order-links";
import type { MenuItem } from "@/lib/types";

type FeaturedDish = {
  id: string;
  menuId: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  image: string;
  note: string;
};

export function SignatureDelicacies() {
  // Starts with the built-in cards so the section is never empty, then takes
  // name, price and picture from the live menu (edited at /admin).
  const [featuredDelicacies, setFeaturedDelicacies] = useState<FeaturedDish[]>(fallbackDelicacies);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/menu/", { cache: "no-store" })
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => {
        if (cancelled || !data || !Array.isArray(data.items)) return;
        const live = new Map<string, MenuItem>(data.items.map((item: MenuItem) => [item.id, item]));
        setFeaturedDelicacies(
          fallbackDelicacies.flatMap((dish) => {
            const item = live.get(dish.menuId);
            // Hidden or deleted in the admin: leave it off the home page.
            if (!item) return [];
            return [
              {
                ...dish,
                name: item.name,
                price: formatMenuPrice(item.price),
                image: item.image || dish.image,
              },
            ];
          })
        );
      })
      .catch(() => {
        // Database unreachable: keep showing the built-in cards.
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (featuredDelicacies.length === 0) return null;

  return (
    <section className="py-24 md:py-32 bg-charcoal-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <SectionHeading
          eyebrow="Signature Delicacies"
          title="Signature Plates"
          subtitle="Rated 4.3 on Bolt Food — a curated selection from our kitchen, each dish crafted to dominate Kimathi Street."
        />

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mt-16">
          {featuredDelicacies.map((dish, index) => (
            <article
              key={dish.id}
              className={`group relative overflow-hidden border border-gold-500/15 hover:border-gold-500/40 transition-all duration-500 ${
                index === 0 ? "md:col-span-2 md:grid md:grid-cols-2" : ""
              }`}
            >
              <div className={`relative overflow-hidden ${index === 0 ? "h-64 md:h-full min-h-[280px]" : "h-56"}`}>
                <OptimizedImage
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  variant="menuCard"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-gold-500/90 text-charcoal-950 text-xs tracking-[0.2em] uppercase font-semibold">
                  {dish.note}
                </span>
              </div>

              <div className={`p-6 md:p-8 flex flex-col justify-center ${index === 0 ? "md:p-10" : ""}`}>
                <p className="text-gold-400 text-xs tracking-[0.25em] uppercase mb-2">{dish.tagline}</p>
                <h3 className="font-display text-2xl md:text-3xl text-ivory mb-3">{dish.name}</h3>
                <p className="text-champagne/70 text-sm md:text-base leading-relaxed mb-4 flex-1">
                  {dish.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gold-500/15">
                  <span className="font-display text-xl text-gold-300">{dish.price}</span>
                  <Link
                    href="/menu"
                    className="text-gold-400 hover:text-gold-300 text-sm tracking-wide flex items-center gap-2 transition-colors"
                  >
                    View Menu <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
