import { ChevronDown, MapPin, UtensilsCrossed } from "lucide-react";
import { OptimizedImage } from "@/components/optimized-image";
import { AppButton } from "@/components/ui/app-button";
import { heroImages } from "@/lib/images";
import { restaurantInfo } from "@/lib/data";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <OptimizedImage
          src={heroImages.home}
          alt="Top Rise Restaurant at Lyric House, Nairobi CBD"
          fill
          className="object-cover scale-105"
          variant="hero"
          priority
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/90 via-charcoal-950/50 to-charcoal-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-accent-900/20 via-transparent to-charcoal-950/40" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center max-w-5xl pt-24">
        <p className="text-accent-400 text-xs md:text-sm tracking-[0.4em] uppercase mb-6 animate-fade-in font-body">
          Lyric House · Nairobi CBD · Open 8 AM – 10 PM
        </p>

        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-semibold text-ivory mb-4 tracking-[0.06em] animate-fade-in leading-none">
          Top Rise
        </h1>

        <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in">
          <span className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-accent-500/60" />
          <p className="text-lg md:text-2xl text-gold-300 font-display italic tracking-wide">
            {restaurantInfo.tagline}
          </p>
          <span className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-accent-500/60" />
        </div>

        <p className="text-base md:text-xl text-champagne/90 mb-12 max-w-2xl mx-auto leading-relaxed font-body animate-fade-in">
          {restaurantInfo.subtext}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 animate-fade-in">
          <AppButton href="/menu" variant="primary" icon={<UtensilsCrossed className="w-4 h-4" />}>
            See Menu &amp; Order
          </AppButton>
          <AppButton href="/reservations" variant="outline">
            Book a Table
          </AppButton>
        </div>

        <AppButton
          href={restaurantInfo.social.google}
          external
          variant="outline"
          className="mt-8 !py-3 !px-7 text-xs border-accent-500/40 hover:bg-accent-500/15"
          icon={<MapPin className="w-4 h-4 text-accent-400" />}
        >
          Get Directions
        </AppButton>

        <p className="mt-8 text-champagne/70 text-sm tracking-wide animate-fade-in">
          <span className="text-gold-300 font-semibold">{restaurantInfo.rating.value} ★</span> from {restaurantInfo.rating.count} Google reviews
          <span className="mx-3 text-gold-500/50">·</span>
          {restaurantInfo.priceBand}
        </p>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce-slow text-accent-500/70">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
}
