import {
  Wifi,
  Zap,
  VolumeX,
  Sun,
  Monitor,
  UtensilsCrossed,
  Maximize2,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { luxuryAmenities, type AmenityIcon } from "@/lib/home-data";

const iconMap: Record<AmenityIcon, typeof Wifi> = {
  space: Maximize2,
  wifi: Wifi,
  service: Zap,
  quiet: VolumeX,
  lighting: Sun,
  balcony: Sun,
  screens: Monitor,
  cuisine: UtensilsCrossed,
};

export function LuxuryAmenities() {
  return (
    <section className="py-24 md:py-32 bg-charcoal-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/50 via-transparent to-charcoal-950/50 pointer-events-none" />
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <SectionHeading
          eyebrow="Why Top Rise Dominates"
          title="More Than Excellence"
          subtitle="On Kimathi Street, competitors offer meals. Top Rise offers an experience — spacious, connected, quiet, beautifully lit, and unmistakably luxury."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
          {luxuryAmenities.map((amenity) => {
            const Icon = iconMap[amenity.icon];
            return (
              <article
                key={amenity.title}
                className="group p-7 border border-gold-500/15 hover:border-gold-500/40 bg-charcoal-950/40 hover:bg-gold-500/5 transition-all duration-500"
              >
                <div className="w-12 h-12 border border-gold-500/30 flex items-center justify-center mb-5 group-hover:border-accent-500/50 transition-colors">
                  <Icon className="w-5 h-5 text-gold-400 group-hover:text-accent-400 transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-lg text-ivory mb-3">{amenity.title}</h3>
                <p className="text-champagne/65 text-sm leading-relaxed">{amenity.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
