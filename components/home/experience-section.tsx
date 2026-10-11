import { Timer, Handshake, Users } from "lucide-react";
import { AppButton } from "@/components/ui/app-button";
import { SectionHeading } from "@/components/section-heading";
import { experiences } from "@/lib/home-data";

const icons = {
  crown: Timer,
  wine: Handshake,
  chef: Users,
};

export function ExperienceSection() {
  return (
    <section className="py-24 md:py-32 bg-charcoal-950 border-y border-gold-500/10">
      <div className="container mx-auto px-4 max-w-7xl">
        <SectionHeading
          eyebrow="How We Serve You"
          title="Made for Life in Town"
          subtitle="Three ways Top Rise fits into a working day in the CBD."
        />

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {experiences.map((exp) => {
            const Icon = icons[exp.icon];
            return (
              <div
                key={exp.title}
                className="group p-8 md:p-10 border border-gold-500/15 hover:border-gold-500/35 transition-all duration-500 hover:bg-gold-500/5"
              >
                <div className="w-14 h-14 border border-gold-500/30 flex items-center justify-center mb-6 group-hover:border-gold-500/60 transition-colors">
                  <Icon className="w-6 h-6 text-gold-400" strokeWidth={1.5} />
                </div>
                <p className="text-gold-400 text-xs tracking-[0.25em] uppercase mb-2">{exp.subtitle}</p>
                <h3 className="font-display text-2xl text-ivory mb-4">{exp.title}</h3>
                <p className="text-champagne/70 text-sm leading-relaxed">{exp.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-14">
          <AppButton href="/events" variant="outline">
            Meetings &amp; Group Bookings
          </AppButton>
        </div>
      </div>
    </section>
  );
}
