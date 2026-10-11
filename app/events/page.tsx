import { AppButton } from "@/components/ui/app-button";
import {
  Calendar,
  Users,
  MapPin,
  Phone,
  Mail,
  Clock,
  Star,
  Award,
} from "lucide-react";
import { restaurantInfo } from "@/lib/data";
import { interiorImages } from "@/lib/images";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { OptimizedImage } from "@/components/optimized-image";
import { eventOfferings, eventProcess } from "@/lib/pages-data";

const iconMap = {
  users: Users,
  award: Award,
  star: Star,
  calendar: Calendar,
  map: MapPin,
  clock: Clock,
};

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-charcoal-950">
      <PageHero
        image={interiorImages.ambiance1}
        imageAlt="Meetings and group bookings at Top Rise Restaurant"
        eyebrow="Meetings & Groups"
        title="A Table for Every Kind of Meeting"
        subtitle="Client meetings, team lunches, office orders and family get-togethers, right in the Nairobi CBD."
      />

      {/* Intro */}
      <section className="py-20 md:py-28 border-b border-gold-500/10">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-champagne/80 text-lg md:text-xl leading-relaxed">
            Most business in Nairobi still gets done over a meal. Top Rise gives you a central,
            affordable place to do it. Tell us how many are coming and when, send your order ahead
            if you like, and walk in to a table that is ready for you.
          </p>
        </div>
      </section>

      {/* Event Offerings */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 max-w-7xl">
          <SectionHeading
            eyebrow="What We Offer"
            title="How We Can Host You"
            subtitle="Six ways to bring people together at Top Rise, all at everyday prices."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {eventOfferings.map((event) => {
              const Icon = iconMap[event.icon];
              return (
                <article
                  key={event.title}
                  className="group p-8 border border-gold-500/15 hover:border-gold-500/35 transition-all duration-500 hover:bg-gold-500/5"
                >
                  <div className="w-12 h-12 border border-gold-500/30 flex items-center justify-center mb-6 group-hover:border-gold-500/60 transition-colors">
                    <Icon className="w-5 h-5 text-gold-400" strokeWidth={1.5} />
                  </div>
                  <p className="text-gold-400 text-xs tracking-[0.2em] uppercase mb-2">{event.subtitle}</p>
                  <h3 className="font-display text-xl text-ivory mb-4">{event.title}</h3>
                  <p className="text-champagne/65 text-sm leading-relaxed mb-6">{event.description}</p>
                  <ul className="space-y-2">
                    {event.highlights.map((h) => (
                      <li key={h} className="text-champagne/50 text-xs flex items-start gap-2">
                        <span className="text-gold-500 mt-0.5">—</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section className="py-20 bg-charcoal-900 border-y border-gold-500/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] overflow-hidden border border-gold-500/20">
              <OptimizedImage
                src={interiorImages.ambiance2}
                alt="Group table at Top Rise Restaurant"
                fill
                className="object-cover"
                variant="galleryThumb"
              />
            </div>
            <div>
              <p className="text-gold-400 text-xs tracking-[0.3em] uppercase mb-4">Why Meet at Top Rise</p>
              <h2 className="font-display text-3xl md:text-4xl text-ivory mb-6">
                Central, Affordable and Ready for You
              </h2>
              <div className="space-y-4 text-champagne/75 text-sm leading-relaxed">
                <p>
                  Lyric House is a short walk from most offices and stages in the CBD, so
                  nobody has to cross town. Everyone can find it, and everyone can afford it.
                </p>
                <p>
                  Send your order ahead and the food arrives together. Pay one bill or split
                  it, by M-Pesa or cash. Stay as long as the meeting needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionHeading
            eyebrow="How It Works"
            title="Booking Takes Two Minutes"
            subtitle="Four simple steps from your message to your meal."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {eventProcess.map((step) => (
              <div key={step.step} className="text-center">
                <p className="font-display text-4xl text-gold-500/30 mb-4">{step.step}</p>
                <h3 className="font-display text-xl text-ivory mb-3">{step.title}</h3>
                <p className="text-champagne/60 text-sm leading-relaxed">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden border-t border-accent-500/20">
        <div className="absolute inset-0 bg-gradient-to-t from-accent-900/25 to-charcoal-900" />
        <div className="relative container mx-auto px-4 max-w-3xl text-center">
          <p className="text-accent-400 text-xs tracking-[0.35em] uppercase mb-6">Book Now</p>
          <h2 className="font-display text-3xl md:text-4xl text-ivory mb-6">
            Bring Your People to Top Rise
          </h2>
          <p className="text-champagne/70 mb-10 leading-relaxed">
            We confirm bookings within minutes during opening hours. For groups of
            twenty or more, please give us a day&apos;s notice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
            <AppButton href={`tel:${restaurantInfo.phone}`} external variant="primary" icon={<Phone className="w-4 h-4" />}>
              Call Us
            </AppButton>
            <AppButton href={`mailto:${restaurantInfo.email}?subject=Top Rise Group Booking`} external variant="outline" icon={<Mail className="w-4 h-4" />}>
              Email Us
            </AppButton>
            <AppButton href="/contact" variant="outline">
              Send a Message
            </AppButton>
          </div>
        </div>
      </section>
    </div>
  );
}
