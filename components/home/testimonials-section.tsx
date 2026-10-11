import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { guestTestimonials } from "@/lib/home-data";

export function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 bg-charcoal-950">
      <div className="container mx-auto px-4 max-w-7xl">
        <SectionHeading
          eyebrow="Guest Voices"
          title="Trusted by Nairobi's Finest"
          subtitle="The voices of those who expect nothing less than excellence."
        />

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {guestTestimonials.map((t) => (
            <blockquote
              key={t.name}
              className="p-8 border border-gold-500/15 relative"
            >
              <Quote className="w-8 h-8 text-gold-500/30 mb-4" strokeWidth={1} />
              <p className="text-champagne/80 text-sm md:text-base leading-relaxed italic mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer>
                <p className="font-display text-ivory">{t.name}</p>
                <p className="text-gold-400/70 text-xs tracking-wider uppercase mt-1">{t.title}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
