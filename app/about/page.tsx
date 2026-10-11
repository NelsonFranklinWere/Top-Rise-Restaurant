"use client";

import { Quote, ChefHat, Sparkles, Heart, Users } from "lucide-react";
import { AppButton } from "@/components/ui/app-button";
import { restaurantInfo } from "@/lib/data";
import { interiorImages } from "@/lib/images";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { OptimizedImage } from "@/components/optimized-image";
import {
  aboutStory,
  aboutMilestones,
  aboutValues,
  aboutTestimonials,
  venueHighlights,
} from "@/lib/pages-data";
import { luxuryAmenities } from "@/lib/home-data";
import { useState, useEffect } from "react";

export default function AboutPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % aboutTestimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const t = aboutTestimonials[currentTestimonial];

  return (
    <div className="min-h-screen bg-charcoal-950">
      <PageHero
        image={interiorImages.inside}
        imageAlt="Top Rise Restaurant interior, Lyric House Nairobi CBD"
        eyebrow="Our Story"
        title="Luxury on Kimathi Street"
        subtitle={restaurantInfo.description}
      />

      {/* Origin Story */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                eyebrow="The Top Rise Story"
                title="Built to Dominate the CBD"
                align="left"
              />
              <div className="space-y-6 text-champagne/75 leading-relaxed">
                <p>{aboutStory.origin}</p>
                <p>{aboutStory.philosophy}</p>
                <p className="text-ivory/90 italic font-display text-lg border-l-2 border-gold-500/40 pl-6">
                  {aboutStory.promise}
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden border border-gold-500/20">
              <OptimizedImage
                src={interiorImages.ambiance1}
                alt="Top Rise Restaurant evening ambiance"
                fill
                className="object-cover"
                variant="galleryThumb"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-charcoal-900 border-y border-gold-500/10">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8">
            {aboutMilestones.map((m) => (
              <div key={m.title} className="text-center p-8 border border-gold-500/15">
                <p className="text-gold-400 text-xs tracking-[0.3em] uppercase mb-3">{m.year}</p>
                <h3 className="font-display text-2xl text-ivory mb-3">{m.title}</h3>
                <p className="text-champagne/60 text-sm leading-relaxed">{m.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef & Kitchen */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-video overflow-hidden border border-gold-500/20 order-2 lg:order-1">
              <OptimizedImage
                src={interiorImages.carousel}
                alt="Top Rise Restaurant kitchen and culinary team"
                fill
                className="object-cover"
                variant="galleryThumb"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <ChefHat className="w-6 h-6 text-gold-400" strokeWidth={1.5} />
                <p className="text-gold-400 text-xs tracking-[0.3em] uppercase">The Kitchen</p>
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-ivory mb-6">
                Where Excellence Is the Minimum
              </h2>
              <p className="text-champagne/75 leading-relaxed mb-6">
                Behind every sizzling grill and every mandi rice dish is a kitchen that believes
                Nairobi CBD deserves more than ordinary. Halal food rated 4.3 on Bolt Food —
                mixed grills, butter chicken, garden salads, and sharing platters that define
                Kimathi Street luxury.
              </p>
              <p className="text-champagne/75 leading-relaxed">
                Swift service from a team that moves fast without cutting corners. Vegan options,
                happy-hour specials, and a menu wide enough to host any table — from balcony
                dinners to conference lunches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Venue Highlights */}
      <section className="py-24 md:py-32 bg-charcoal-900 border-y border-gold-500/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionHeading
            eyebrow="The Top Rise Advantage"
            title="What Competitors Cannot Match"
            subtitle="Space, speed, connectivity, and ambience — the layers of luxury that make Top Rise the standout on Kimathi Street."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-14">
            {venueHighlights.map((item) => (
              <div key={item.label} className="text-center p-6 border border-gold-500/15 hover:border-gold-500/35 transition-colors">
                <p className="text-gold-400 text-[10px] tracking-[0.25em] uppercase mb-2">{item.label}</p>
                <p className="font-display text-lg text-ivory">{item.value}</p>
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {luxuryAmenities.slice(0, 4).map((amenity) => (
              <div key={amenity.title} className="p-6 border border-gold-500/10 bg-charcoal-950/50">
                <h3 className="font-display text-lg text-ivory mb-2">{amenity.title}</h3>
                <p className="text-champagne/60 text-sm leading-relaxed">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-charcoal-900">
        <div className="container mx-auto px-4 max-w-7xl">
          <SectionHeading
            eyebrow="What We Stand For"
            title="Our Values"
            subtitle="The principles that guide every plate, every pour, and every evening at Top Rise Restaurant."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {aboutValues.map((v, i) => {
              const icons = [Sparkles, Heart, Users, ChefHat];
              const Icon = icons[i];
              return (
                <div
                  key={v.title}
                  className="p-8 border border-gold-500/15 hover:border-gold-500/35 transition-colors group"
                >
                  <Icon className="w-6 h-6 text-gold-400 mb-5" strokeWidth={1.5} />
                  <h3 className="font-display text-xl text-ivory mb-3">{v.title}</h3>
                  <p className="text-champagne/60 text-sm leading-relaxed">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 border-t border-gold-500/10">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionHeading eyebrow="Voices" title="What Our Guests Say" />
          <div className="mt-12 p-10 md:p-14 border border-gold-500/20 text-center relative">
            <Quote className="w-10 h-10 text-gold-500/30 mx-auto mb-6" strokeWidth={1} />
            <blockquote
              key={t.name}
              className="font-display text-xl md:text-2xl text-ivory italic leading-relaxed mb-6 animate-fade-in"
            >
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <p className="text-gold-300 font-medium">{t.name}</p>
            <p className="text-champagne/50 text-xs tracking-wider uppercase mt-1">{t.role}</p>
            <div className="flex justify-center gap-2 mt-8">
              {aboutTestimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === currentTestimonial ? "w-8 bg-gold-500" : "w-2 bg-gold-500/30"
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location CTA */}
      <section className="relative py-24 overflow-hidden border-t border-accent-500/20">
        <div className="absolute inset-0 section-red-accent" />
        <div className="relative container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl text-ivory mb-4">
            Visit Us at <span className="text-gradient-red">Lyric House</span>
          </h2>
          <p className="text-champagne/70 mb-8">
            {restaurantInfo.address.street}, {restaurantInfo.address.city}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <AppButton href={restaurantInfo.social.google} external variant="primary">
              Get Directions
            </AppButton>
            <AppButton href={restaurantInfo.social.bolt} external variant="outline">
              Order on Bolt Food
            </AppButton>
            <AppButton href="/reservations" variant="outline">
              Reserve a Table
            </AppButton>
          </div>
        </div>
      </section>
    </div>
  );
}
