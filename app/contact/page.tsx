import Link from "next/link";
import { MapPin, Phone, Mail, Clock, MessageSquare, Navigation } from "lucide-react";
import { AppButton } from "@/components/ui/app-button";
import { restaurantInfo } from "@/lib/data";
import { interiorImages } from "@/lib/images";
import { PageHero } from "@/components/page-hero";
import { ContactFormSimple } from "@/components/contact-form-simple";
import { contactMessage } from "@/lib/pages-data";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-charcoal-950">
      <PageHero
        image={interiorImages.inside}
        imageAlt="Contact Top Rise Restaurant, Nairobi CBD"
        eyebrow="Order · Book · Ask"
        title={contactMessage.headline}
        subtitle="Lyric House · Nairobi CBD · Open 8 AM – 10 PM daily"
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
                      <p className="text-champagne/50 text-xs mt-2">Orders &amp; table bookings</p>
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
                      <p className="text-champagne/50 text-xs mt-2">Group &amp; office orders</p>
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
                      <p className="text-champagne/50 text-xs mt-2">Breakfast, lunch &amp; supper</p>
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
                  src="https://www.google.com/maps?q=Top+Rise+Restaurant+Lyric+House+Nairobi&output=embed"
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
              For the fastest reply, WhatsApp us. We answer forms within a few hours.
            </p>
          </div>
          <ContactFormSimple />
        </div>
      </section>

      {/* CTA Buttons */}
      <section className="py-12 section-red-accent border-y border-accent-500/15">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <AppButton href={restaurantInfo.social.google} external variant="primary" icon={<Navigation className="w-4 h-4" />}>
            Get Directions
          </AppButton>
          <AppButton href="/reservations" variant="outline">
            Book a Table
          </AppButton>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 border-t border-accent-500/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/reservations"
              className="group p-6 border border-gold-500/15 hover:border-gold-500/35 text-center transition-all hover:bg-gold-500/5"
            >
              <Clock className="w-5 h-5 text-gold-400 mx-auto mb-3" strokeWidth={1.5} />
              <h3 className="font-display text-ivory mb-1">Book</h3>
              <p className="text-champagne/50 text-xs">Book your table</p>
            </Link>
            <a
              href={`https://wa.me/${restaurantInfo.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 border border-gold-500/15 hover:border-gold-500/35 text-center transition-all hover:bg-gold-500/5"
            >
              <MessageSquare className="w-5 h-5 text-gold-400 mx-auto mb-3" strokeWidth={1.5} />
              <h3 className="font-display text-ivory mb-1">WhatsApp</h3>
              <p className="text-champagne/50 text-xs">Order ahead</p>
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
