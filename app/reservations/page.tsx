"use client";

import { Clock, MapPin, Star, Phone, MessageSquare, Mail } from "lucide-react";
import { restaurantInfo } from "@/lib/data";
import { heroImages } from "@/lib/images";
import { PageHero } from "@/components/page-hero";
import { AppButton } from "@/components/ui/app-button";
import { ReservationFormSimple } from "@/components/reservation-form-simple";

export default function ReservationsPage() {
  const whatsappUrl = `https://wa.me/${restaurantInfo.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello Top Rise Restaurant! I would like to reserve a table.")}`;

  return (
    <div className="min-h-screen bg-charcoal-950">
      <PageHero
        image={heroImages.reservations}
        imageAlt="Top Rise Restaurant Reservations"
        eyebrow="Book Your Evening"
        title="Reserve Your Table"
        subtitle="Halal dining at Lyric House, Kimathi Street — private rooms available for meetings and celebrations."
      />

      {/* Quick booking */}
      <section className="py-10 border-b border-accent-500/15 section-red-accent">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <AppButton href={whatsappUrl} external variant="primary" icon={<MessageSquare className="w-4 h-4" />}>
            WhatsApp to Book
          </AppButton>
          <AppButton href={`tel:${restaurantInfo.phone}`} external variant="outline" icon={<Phone className="w-4 h-4" />}>
            Call Us to Book
          </AppButton>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <p className="text-accent-400 text-xs tracking-[0.3em] uppercase mb-3">Online Request</p>
            <h2 className="font-display text-3xl text-ivory">Reservation Form</h2>
            <p className="text-champagne/60 text-sm mt-3">We&apos;ll confirm your table shortly.</p>
          </div>
          <ReservationFormSimple />
        </div>
      </section>

      {/* Info cards */}
      <section className="py-16 bg-charcoal-900 border-y border-gold-500/10">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: Clock,
                title: "Opening Hours",
                lines: [restaurantInfo.hours.mon_thu, restaurantInfo.hours.fri_sun],
              },
              {
                icon: MapPin,
                title: "Location",
                lines: [restaurantInfo.address.street, restaurantInfo.address.city],
              },
              {
                icon: Star,
                title: "Special Requests",
                lines: ["Dietary needs, celebrations,", "and bespoke occasions welcome."],
              },
            ].map((card) => (
              <div
                key={card.title}
                className="text-center p-8 border border-gold-500/15 hover:border-accent-500/30 transition-colors"
              >
                <card.icon className="w-8 h-8 text-accent-400 mx-auto mb-4" strokeWidth={1.5} />
                <h3 className="font-display text-xl text-ivory mb-3">{card.title}</h3>
                {card.lines.map((line) => (
                  <p key={line} className="text-champagne/65 text-sm">{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assistance CTA */}
      <section className="py-20 section-red-accent border-t border-accent-500/15">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-display text-3xl text-ivory mb-4">Need Immediate Assistance?</h2>
          <p className="text-champagne/65 mb-8">Our team is ready to help with your reservation.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <AppButton href={`tel:${restaurantInfo.phone}`} external variant="primary" icon={<Phone className="w-4 h-4" />}>
              Call Us
            </AppButton>
            <AppButton href={whatsappUrl} external variant="outline" icon={<MessageSquare className="w-4 h-4" />}>
              WhatsApp
            </AppButton>
            <AppButton href={`mailto:${restaurantInfo.email}`} external variant="outline" icon={<Mail className="w-4 h-4" />}>
              Email Us
            </AppButton>
          </div>
        </div>
      </section>
    </div>
  );
}
