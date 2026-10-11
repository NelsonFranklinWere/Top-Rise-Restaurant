"use client";

import { useState, useEffect } from "react";
import { menuItems, restaurantInfo } from "@/lib/data";
import { OptimizedImage } from "@/components/optimized-image";
import { heroImages, preloadImages } from "@/lib/images";
import { MenuCategory, MenuItem } from "@/lib/types";
import { formatMenuPrice } from "@/lib/order-links";
import { UtensilsCrossed, Leaf, Flame } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { AppButton } from "@/components/ui/app-button";
import { OrderPromptModal } from "@/components/order-prompt-modal";

const categories: { id: MenuCategory; label: string }[] = [
  { id: "starters", label: "Starters" },
  { id: "mains", label: "Main Course" },
  { id: "desserts", label: "Desserts" },
  { id: "drinks", label: "Drinks" },
];

const uniqueMenuImages = Array.from(
  new Set(menuItems.map((item) => item.image).filter((img): img is string => Boolean(img)))
);

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("starters");
  const [orderItem, setOrderItem] = useState<MenuItem | null>(null);

  useEffect(() => {
    preloadImages(uniqueMenuImages);
  }, []);

  const filteredItems = menuItems.filter((item) => item.category === activeCategory);

  const openOrderPrompt = (item: MenuItem) => setOrderItem(item);
  const closeOrderPrompt = () => setOrderItem(null);

  const getSpiceLevelIcon = (level?: "mild" | "medium" | "hot") => {
    if (!level) return null;
    const intensity = level === "mild" ? 1 : level === "medium" ? 2 : 3;
    return (
      <div className="flex gap-1" title={level}>
        {Array.from({ length: intensity }).map((_, i) => (
          <Flame key={i} className="w-4 h-4 text-accent-400" />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-charcoal-950">
      <PageHero
        image={heroImages.menu}
        imageAlt="Top Rise Restaurant Menu"
        eyebrow="Culinary Collection"
        title="Our Menu"
        subtitle="Discover our Halal menu — sizzling grills, Arabian mandi, breakfast spreads, and refreshing drinks from Top Rise on Kimathi Street."
      />

      {/* Category Tabs */}
      <section className="sticky top-20 z-40 bg-charcoal-950/95 backdrop-blur-xl border-b border-accent-500/15">
        <div className="container mx-auto px-4 max-w-6xl py-4">
          <div className="flex gap-3 overflow-x-auto scrollbar-hide justify-center md:justify-start">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2.5 rounded-full text-xs tracking-[0.15em] uppercase whitespace-nowrap flex-shrink-0 font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-accent-600 to-accent-500 text-white shadow-lg shadow-accent-500/30"
                    : "border border-gold-500/25 text-champagne/70 hover:text-accent-300 hover:border-accent-500/50"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <p className="text-center text-champagne/50 text-sm tracking-wide mb-10">
            {filteredItems.length} delicacies · {categories.find((c) => c.id === activeCategory)?.label}
            <span className="hidden sm:inline"> · Tap a dish to order</span>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                role="button"
                tabIndex={0}
                onClick={() => openOrderPrompt(item)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openOrderPrompt(item);
                  }
                }}
                className="group relative bg-charcoal-900/60 border border-gold-500/15 hover:border-accent-500/40 overflow-hidden transition-all duration-300 hover:shadow-red-lg cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
              >
                <div className="relative h-52 sm:h-56 overflow-hidden pointer-events-none">
                  {item.image ? (
                    <OptimizedImage
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      variant="menuCard"
                    />
                  ) : (
                    <div className="relative h-full bg-charcoal-800 flex items-center justify-center">
                      <UtensilsCrossed className="w-16 h-16 text-champagne/20" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent" />
                </div>

                <div className="p-5 sm:p-6 pointer-events-none">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-lg sm:text-xl font-display text-ivory leading-tight flex-1">
                      {item.name}
                    </h3>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {item.isVegetarian && (
                        <span
                          className="p-1.5 rounded-full bg-green-500/15 border border-green-500/30"
                          title="Vegetarian"
                        >
                          <Leaf className="w-4 h-4 text-green-400" />
                        </span>
                      )}
                      {item.isVegan && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] text-blue-400 font-semibold border border-blue-500/30 bg-blue-500/10">
                          VEGAN
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-champagne/65 text-sm leading-relaxed mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  {item.spiceLevel && (
                    <div className="mb-4 flex items-center gap-2">
                      {getSpiceLevelIcon(item.spiceLevel)}
                      <span className="text-xs text-champagne/40 capitalize">{item.spiceLevel}</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-4 border-t border-gold-500/15">
                    <span className="text-xl sm:text-2xl font-display text-gold-300">
                      {formatMenuPrice(item.price)}
                    </span>
                    <span className="px-5 py-2 rounded-full text-xs font-semibold tracking-wide uppercase bg-gradient-to-r from-accent-600 to-accent-500 text-white opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 shadow-md shadow-accent-500/25">
                      Order
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 text-center border border-accent-500/20 p-10 md:p-14 section-red-accent">
            <p className="font-display text-2xl md:text-3xl text-ivory mb-3">
              Ready to savour the difference?
            </p>
            <p className="text-champagne/60 text-sm mb-8 max-w-md mx-auto">
              Reserve your table or order delivery — Nairobi&apos;s finest, on your schedule.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <AppButton href="/reservations" variant="primary" icon={<UtensilsCrossed className="w-4 h-4" />}>
                Reserve Your Table
              </AppButton>
              <AppButton href={restaurantInfo.social.bolt} external variant="outline">
                Order via Bolt
              </AppButton>
            </div>
          </div>
        </div>
      </section>

      <OrderPromptModal item={orderItem} onClose={closeOrderPrompt} />
    </div>
  );
}
