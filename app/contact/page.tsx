import Link from "next/link";
import { MapPin, Phone, Mail, Clock, MessageSquare, Navigation } from "lucide-react";
import { AppButton } from "@/components/ui/app-button";
import { restaurantInfo } from "@/lib/data";
import { interiorImages } from "@/lib/images";
import { PageHero } from "@/components/page-hero";
import { ContactFormSimple } from "@/components/contact-form-simple";
import { contactMessage, venueHighlights } from "@/lib/pages-data";
import { luxuryAmenities } from "@/lib/home-data";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-charcoal-950">
      <PageHero
        image={interiorImages.inside}
        imageAlt="Contact Top Rise Restaurant Nairobi"
        eyebrow="Reach Out"
        title={contactMessage.headline}
        subtitle="Luxury on Kimathi Street · Lyric House · Nairobi CBD"
      />

      {/* Extended Welcome Message */}
      <section className="py-20 md:py-28 border-b border-gold-500/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="border border-gold-500/20 p-10 md:p-16 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-charcoal-950 px-6">
              <MessageSquare className="w-6 h-6 text-gold-400" strokeWidth={1.5} />
            </div>

            <p className="text-champagne/80 text-lg md:text-xl leading-relaxed mb-8 text-center font-display italic">
              {contactMessage.opening}
            </p>

            <div className="h-px w-24 bg-gold-500/30 mx-auto mb-8" />

            <p className="text-champagne/70 leading-relaxed mb-8 text-center">
              {contactMessage.body}
            </p>

            <p className="text-ivory text-center font-display text-xl md:text-2xl italic mb-8">
              {contactMessage.closing}
            </p>

            <p className="text-gold-400 text-center text-sm tracking-[0.2em] uppercase">
              — {contactMessage.signature}
            </p>
          </div>
        </div>
      </section>

      {/* Venue Stats */}
      <section className="py-16 md:py-20 bg-charcoal-900 border-b border-gold-500/10">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {venueHighlights.map((item) => (
              <div key={item.label} className="text-center p-5 border border-gold-500/15">
                <p className="text-gold-400 text-[10px] tracking-[0.2em] uppercase mb-2">{item.label}</p>
                <p className="font-display text-base text-ivory">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Amenities */}
      <section className="py-16 md:py-24 border-b border-gold-500/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-gold-400 text-xs tracking-[0.3em] uppercase mb-4">Top-Notch Services</p>
            <h2 className="font-display text-3xl text-ivory mb-4">Everything You Need, Elevated</h2>
            <p className="text-champagne/60 text-sm max-w-2xl mx-auto">
              From high-speed Wi‑Fi and display screens to balcony seats and swift service —
              Top Rise offers more than excellence on Kimathi Street.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {luxuryAmenities.map((amenity) => (
              <div key={amenity.title} className="p-6 border border-gold-500/15 hover:border-gold-500/30 transition-colors">
                <h3 className="font-display text-lg text-ivory mb-2">{amenity.title}</h3>
                <p className="text-champagne/60 text-sm leading-relaxed">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Cards + Map */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: MapPin,
                  title: "Visit Us",
                  content: (
                    <>
                      <p className="text-champagne/70 text-sm leading-relaxed">
                        {restaurantInfo.address.street}
                        <br />
                        {restaurantInfo.address.city}, {restaurantInfo.address.country}
                      </p>
                      <AppButton
                        href={restaurantInfo.social.google}
                        external
                        variant="outline"
                        className="!mt-4 !py-2 !px-5 !text-[10px]"
                        icon={<Navigation className="w-3 h-3" />}
                      >
                        Directions
                      </AppButton>
                    </>
                  ),
                },
                {
                  icon: Phone,
                  title: "Call",
                  content: (
                    <>
                      <a
                        href={`tel:${restaurantInfo.phone}`}
                        className="text-ivory hover:text-gold-300 transition-colors"
                      >
                        {restaurantInfo.phone}
                      </a>
                      <p className="text-champagne/50 text-xs mt-2">Reservations & enquiries</p>
                    </>
                  ),
                },
                {
                  icon: Mail,
                  title: "Email",
                  content: (
                    <>
                      <a
                        href={`mailto:${restaurantInfo.email}`}
                        className="text-ivory hover:text-gold-300 transition-colors text-sm break-all"
                      >
                        {restaurantInfo.email}
                      </a>
                      <p className="text-champagne/50 text-xs mt-2">Events & special requests</p>
                    </>
                  ),
                },
                {
                  icon: Clock,
                  title: "Hours",
                  content: (
                    <>
                      <p className="text-champagne/70 text-sm">{restaurantInfo.hours.mon_thu}</p>
                      <p className="text-champagne/70 text-sm">{restaurantInfo.hours.fri_sun}</p>
                      <p className="text-champagne/50 text-xs mt-2">Book ahead for weekends</p>
                    </>
                  ),
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="p-6 border border-gold-500/15 hover:border-gold-500/30 transition-colors"
                >
                  <card.icon className="w-5 h-5 text-gold-400 mb-4" strokeWidth={1.5} />
                  <h3 className="font-display text-lg text-ivory mb-3">{card.title}</h3>
                  {card.content}
                </div>
              ))}
            </div>

            <div className="border border-gold-500/15 overflow-hidden">
              <div className="aspect-square md:aspect-auto md:h-full min-h-[300px]">
                <iframe
                  src="https://maps.google.com/maps?q=Top+Rise+Restaurant+Lyric+House+Kimathi+Street+Nairobi&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "100%" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Top Rise Restaurant location map"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-24 bg-charcoal-900 border-t border-gold-500/10">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-10">
            <p className="text-gold-400 text-xs tracking-[0.3em] uppercase mb-4">Write to Us</p>
            <h2 className="font-display text-3xl text-ivory mb-4">Send a Message</h2>
            <p className="text-champagne/60 text-sm">
              We typically respond within a few hours during service times.
            </p>
          </div>
          <ContactFormSimple />
        </div>
      </section>

      {/* CTA Buttons */}
      <section className="py-12 section-red-accent border-y border-accent-500/15">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <AppButton href={restaurantInfo.social.bolt} external variant="primary">
            Order on Bolt Food
          </AppButton>
          <AppButton href={restaurantInfo.social.google} external variant="outline" icon={<Navigation className="w-4 h-4" />}>
            Get Directions
          </AppButton>
          <AppButton href="/reservations" variant="outline">
            Reserve a Table
          </AppButton>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 border-t border-accent-500/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/reservations"
              className="group p-6 border border-gold-500/15 hover:border-gold-500/35 text-center transition-all hover:bg-gold-500/5"
            >
              <Clock className="w-5 h-5 text-gold-400 mx-auto mb-3" strokeWidth={1.5} />
              <h3 className="font-display text-ivory mb-1">Reserve</h3>
              <p className="text-champagne/50 text-xs">Balcony & private rooms</p>
            </Link>
            <a
              href={restaurantInfo.social.bolt}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 border border-gold-500/15 hover:border-gold-500/35 text-center transition-all hover:bg-gold-500/5"
            >
              <MessageSquare className="w-5 h-5 text-gold-400 mx-auto mb-3" strokeWidth={1.5} />
              <h3 className="font-display text-ivory mb-1">Bolt Food</h3>
              <p className="text-champagne/50 text-xs">Order delivery</p>
            </a>
            <a
              href={`https://wa.me/${restaurantInfo.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 border border-gold-500/15 hover:border-gold-500/35 text-center transition-all hover:bg-gold-500/5"
            >
              <MessageSquare className="w-5 h-5 text-gold-400 mx-auto mb-3" strokeWidth={1.5} />
              <h3 className="font-display text-ivory mb-1">WhatsApp</h3>
              <p className="text-champagne/50 text-xs">Instant chat</p>
            </a>
            <a
              href={`tel:${restaurantInfo.phone}`}
              className="group p-6 border border-gold-500/15 hover:border-gold-500/35 text-center transition-all hover:bg-gold-500/5"
            >
              <Phone className="w-5 h-5 text-gold-400 mx-auto mb-3" strokeWidth={1.5} />
              <h3 className="font-display text-ivory mb-1">Call</h3>
              <p className="text-champagne/50 text-xs">Speak with us</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
