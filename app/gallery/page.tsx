"use client";

import { useState, useEffect, useMemo } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { OptimizedImage } from "@/components/optimized-image";
import { PageHero } from "@/components/page-hero";
import { AppButton } from "@/components/ui/app-button";
import { interiorImages, preloadImages } from "@/lib/images";
import { restaurantInfo } from "@/lib/data";
import { galleryCollection, galleryCategories, galleryIntro, type GalleryCategory } from "@/lib/pages-data";

function getSpanClasses(span: string) {
  if (span.includes("col-span-2") && span.includes("row-span-2")) {
    return "sm:col-span-2 sm:row-span-2 min-h-[280px] sm:min-h-[440px]";
  }
  if (span.includes("col-span-2")) {
    return "sm:col-span-2 min-h-[200px]";
  }
  return "min-h-[200px]";
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      activeCategory === "all"
        ? galleryCollection
        : galleryCollection.filter((img) => img.category === activeCategory),
    [activeCategory]
  );

  const selectedIndex = filtered.findIndex((img) => img.id === selectedId);
  const selected = selectedIndex >= 0 ? filtered[selectedIndex] : null;

  useEffect(() => {
    preloadImages(galleryCollection.map((img) => img.src));
  }, []);

  const navigate = (dir: -1 | 1) => {
    if (selectedIndex < 0) return;
    const next = (selectedIndex + dir + filtered.length) % filtered.length;
    setSelectedId(filtered[next].id);
  };

  useEffect(() => {
    if (!selectedId) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedId(null);
      if (selectedIndex < 0) return;
      if (e.key === "ArrowLeft") {
        const next = (selectedIndex - 1 + filtered.length) % filtered.length;
        setSelectedId(filtered[next].id);
      }
      if (e.key === "ArrowRight") {
        const next = (selectedIndex + 1) % filtered.length;
        setSelectedId(filtered[next].id);
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [selectedId, selectedIndex, filtered]);

  return (
    <div className="min-h-screen bg-charcoal-950">
      <PageHero
        image={interiorImages.ambiance2}
        imageAlt="Top Rise Restaurant gallery — luxury ambiance on Kimathi Street"
        eyebrow="Visual Journey"
        title="Curated Gallery"
        subtitle="Space, light, balcony sunsets, and plates that define luxury on Kimathi Street — Nairobi CBD's premier restaurant experience."
      />

      <section className="py-16 md:py-20 border-b border-gold-500/10">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="font-display text-2xl md:text-3xl text-ivory mb-6">{galleryIntro.title}</h2>
          <p className="text-champagne/70 leading-relaxed mb-10">{galleryIntro.body}</p>
          <div className="flex flex-wrap justify-center gap-3">
            {galleryIntro.highlights.map((item) => (
              <span
                key={item}
                className="px-4 py-2 border border-gold-500/25 text-gold-400 text-xs tracking-[0.15em] uppercase"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="sticky top-20 z-40 bg-charcoal-950/95 backdrop-blur-xl border-b border-accent-500/15">
        <div className="container mx-auto px-4 py-4">
          <div className="flex gap-3 overflow-x-auto scrollbar-hide justify-center">
            {galleryCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2.5 rounded-full text-xs tracking-[0.2em] uppercase whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-accent-600 to-accent-500 text-white font-semibold shadow-lg shadow-accent-500/30"
                    : "border border-gold-500/25 text-champagne/70 hover:text-accent-300 hover:border-accent-500/50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <p className="text-center text-champagne/50 text-sm mb-12 tracking-wide">
            {filtered.length} curated {activeCategory === "all" ? "moments" : `${activeCategory} pieces`}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {filtered.map((image) => (
              <button
                key={image.id}
                type="button"
                onClick={() => setSelectedId(image.id)}
                className={`relative overflow-hidden group text-left border border-gold-500/10 hover:border-accent-500/40 transition-colors ${getSpanClasses(image.span)}`}
              >
                <OptimizedImage
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  variant="galleryThumb"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-accent-400 text-xs tracking-[0.15em] uppercase mb-1">{image.category}</p>
                  <p className="text-ivory font-display text-sm md:text-base">{image.title}</p>
                  <p className="text-champagne/50 text-xs mt-1 line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
                    {image.caption}
                  </p>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-16 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
            <AppButton href="/reservations" variant="primary">
              Reserve Your Table
            </AppButton>
            <AppButton href={restaurantInfo.social.bolt} external variant="outline">
              Order on Bolt Food
            </AppButton>
          </div>
        </div>
      </section>

      {selected && (
        <div
          className="fixed inset-0 bg-charcoal-950/95 z-[70] flex items-center justify-center p-4"
          onClick={() => setSelectedId(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setSelectedId(null)}
            className="absolute top-6 right-6 text-champagne/60 hover:text-accent-400 transition-colors z-10 p-2 rounded-full hover:bg-white/5"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); navigate(-1); }}
            className="absolute left-4 md:left-8 text-champagne/60 hover:text-accent-400 transition-colors z-10 p-2 rounded-full hover:bg-white/5"
            aria-label="Previous"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); navigate(1); }}
            className="absolute right-4 md:right-8 text-champagne/60 hover:text-accent-400 transition-colors z-10 p-2 rounded-full hover:bg-white/5"
            aria-label="Next"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-[16/10] overflow-hidden border border-gold-500/25 bg-charcoal-900">
              <OptimizedImage
                src={selected.src}
                alt={selected.alt}
                fill
                className="object-contain"
                variant="galleryLightbox"
                priority
              />
            </div>
            <div className="mt-6 text-center px-4">
              <p className="text-accent-400 text-xs tracking-[0.2em] uppercase mb-2">{selected.category}</p>
              <h3 className="font-display text-2xl text-ivory mb-2">{selected.title}</h3>
              <p className="text-champagne/70 text-sm max-w-lg mx-auto">{selected.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
