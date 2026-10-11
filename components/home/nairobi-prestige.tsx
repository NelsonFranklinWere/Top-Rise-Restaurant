import { MapPin, Clock, Phone } from "lucide-react";
import { AppButton } from "@/components/ui/app-button";
import { OptimizedImage } from "@/components/optimized-image";
import { interiorImages } from "@/lib/images";
import { restaurantInfo } from "@/lib/data";

export function NairobiPrestige() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <OptimizedImage
          src={interiorImages.interior}
          alt="Top Rise Restaurant at Lyric House, Nairobi CBD"
          fill
          className="object-cover"
          variant="hero"
        />
        <div className="absolute inset-0 bg-charcoal-950/85" />
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gold-400 text-xs tracking-[0.35em] uppercase mb-4">Find Us in Town</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory mb-6 leading-tight">
              Lyric House,<br />
              <span className="text-gold-300 italic">Nairobi CBD</span>
            </h2>
            <p className="text-champagne/80 text-lg leading-relaxed mb-8">
              Right in the middle of town, a short walk from the offices, stages and shops
              of central Nairobi. Easy to find, easy to agree on, and open from breakfast
              to supper every day.
            </p>
            <AppButton
              href={restaurantInfo.social.google}
              external
              variant="primary"
              icon={<MapPin className="w-4 h-4" />}
            >
              Get Directions
            </AppButton>
          </div>

          <div className="space-y-6 border border-gold-500/20 p-8 md:p-10 bg-charcoal-950/60 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-gold-400 mt-1 flex-shrink-0" />
              <div>
                <p className="text-ivory font-medium">{restaurantInfo.address.street}</p>
                <p className="text-champagne/60 text-sm">{restaurantInfo.address.city}, {restaurantInfo.address.country}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Clock className="w-5 h-5 text-gold-400 flex-shrink-0" />
              <div className="text-champagne/70 text-sm">
                <p>{restaurantInfo.hours.mon_thu}</p>
                <p>{restaurantInfo.hours.fri_sun}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-gold-400 flex-shrink-0" />
              <a href={`tel:${restaurantInfo.phone}`} className="text-gold-300 hover:text-gold-200 transition-colors">
                {restaurantInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
