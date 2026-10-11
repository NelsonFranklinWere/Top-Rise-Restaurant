import { AppButton } from "@/components/ui/app-button";

export function ReservationCta() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden border-t border-accent-500/20">
      <div className="absolute inset-0 bg-gradient-to-br from-accent-900/30 via-charcoal-950 to-charcoal-950" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-accent-500/50 to-transparent" />

      <div className="relative z-10 container mx-auto px-4 max-w-3xl text-center">
        <p className="text-accent-400 text-xs tracking-[0.35em] uppercase mb-6">Hungry Already?</p>
        <h2 className="font-display text-4xl md:text-5xl text-ivory mb-6">
          Order Ahead or <span className="text-gradient-red">Book a Table</span>
        </h2>
        <p className="text-champagne/70 text-lg mb-10 leading-relaxed">
          Send your order before you leave the office and it is ready when you arrive.
          Coming with company? Book a table and it is held in your name.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <AppButton href="/menu" variant="primary">
            Order From the Menu
          </AppButton>
          <AppButton href="/reservations" variant="outline">
            Book a Table
          </AppButton>
        </div>
      </div>
    </section>
  );
}
