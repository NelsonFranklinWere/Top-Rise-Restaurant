import { AppButton } from "@/components/ui/app-button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-charcoal-950 flex items-center justify-center px-4 pt-24">
      <div className="text-center max-w-xl">
        <p className="text-accent-400 text-xs tracking-[0.35em] uppercase mb-6">Page Not Found</p>
        <h1 className="font-display text-5xl md:text-6xl text-ivory mb-6">
          This plate is not on the menu
        </h1>
        <p className="text-champagne/70 text-lg mb-10 leading-relaxed">
          The page you were looking for has moved or never existed. The food, however, is exactly where you left it.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <AppButton href="/menu" variant="primary">
            See the Menu
          </AppButton>
          <AppButton href="/" variant="outline">
            Back to Home
          </AppButton>
        </div>
      </div>
    </div>
  );
}
