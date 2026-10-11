import { SectionHeading } from "@/components/section-heading";

export function PhilosophySection() {
  return (
    <section className="py-24 md:py-32 bg-charcoal-950 relative overflow-hidden section-red-accent">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <SectionHeading
          eyebrow="Our Philosophy"
          title="Kimathi Street, Elevated"
          subtitle="In the heart of Nairobi CBD, Top Rise offers what competitors cannot — the largest floor space, balcony seats with evening sun, high-speed Wi‑Fi, display screens, and a cool quiet environment where luxury feels effortless."
        />
        <div className="grid md:grid-cols-3 gap-8 mt-16 text-center">
          {[
            { label: "Setting", value: "Lyric House" },
            { label: "Standard", value: "Beyond Excellence" },
            { label: "Rating", value: "4.3 on Bolt" },
          ].map((stat) => (
            <div key={stat.label} className="border border-gold-500/20 py-8 px-4">
              <p className="text-gold-400 text-xs tracking-[0.3em] uppercase mb-2">{stat.label}</p>
              <p className="font-display text-2xl md:text-3xl text-ivory">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
