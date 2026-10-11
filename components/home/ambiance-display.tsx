import Link from "next/link";
import { OptimizedImage } from "@/components/optimized-image";
import { SectionHeading } from "@/components/section-heading";
import { ambianceDisplays } from "@/lib/home-data";

export function AmbianceDisplay() {
  return (
    <section className="py-24 md:py-32 bg-charcoal-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <SectionHeading
          eyebrow="Ambiance & Display"
          title="An Evening at Top Rise"
          subtitle="Soft lighting, refined interiors, and table settings worthy of Nairobi's most exclusive addresses."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-16 auto-rows-[180px] md:auto-rows-[200px]">
          {ambianceDisplays.map((item) => (
            <div
              key={item.src}
              className={`relative overflow-hidden group ${item.span}`}
            >
              <OptimizedImage
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                variant="galleryThumb"
              />
              <div className="absolute inset-0 bg-charcoal-950/0 group-hover:bg-charcoal-950/30 transition-colors duration-500" />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/gallery"
            className="text-gold-400 hover:text-gold-300 text-sm tracking-[0.2em] uppercase border-b border-gold-500/40 pb-1 transition-colors"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
