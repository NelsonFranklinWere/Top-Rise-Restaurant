import { ExternalLink } from "lucide-react";
import { AppButton } from "@/components/ui/app-button";
import { restaurantInfo } from "@/lib/data";

export function OrderCta() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden border-y border-gold-500/15">
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-accent-900/20 to-charcoal-950" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      <div className="relative z-10 container mx-auto px-4 max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-accent-400 text-xs tracking-[0.35em] uppercase mb-4">Bolt Food · 4.3 Rating</p>
            <h2 className="font-display text-3xl md:text-4xl text-ivory mb-5 leading-tight">
              Luxury Delivered to Your Door
            </h2>
            <p className="text-champagne/75 leading-relaxed mb-4">
              Order Top Rise on Bolt Food — mixed grill sizzling, Arabian mandi, butter chicken,
              garden salads, and the full menu from Nairobi CBD&apos;s highest-rated destination
              on Kimathi Street.
            </p>
            <p className="text-champagne/55 text-sm">
              Rated 4.3 · Halal · From Ksh 500 · Fast delivery across Nairobi
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 lg:items-stretch">
            <AppButton
              href={restaurantInfo.social.bolt}
              external
              variant="primary"
              className="!py-4 text-center"
              icon={<ExternalLink className="w-4 h-4" />}
            >
              Order on Bolt Food
            </AppButton>
            <AppButton href="/menu" variant="outline" className="!py-4 text-center">
              View Full Menu
            </AppButton>
          </div>
        </div>
      </div>
    </section>
  );
}
