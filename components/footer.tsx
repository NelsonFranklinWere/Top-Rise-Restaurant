import Link from "next/link";
import { MapPin, Phone, Mail, Instagram, Clock } from "lucide-react";
import { restaurantInfo } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-charcoal-950 text-ivory relative z-50">
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-accent-500 to-transparent opacity-60" />
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5">
            <h3 className="font-display text-3xl text-gradient-gold tracking-[0.15em] mb-6">{restaurantInfo.shortName}</h3>
            <p className="text-champagne/70 mb-6 max-w-md leading-relaxed text-sm">
              {restaurantInfo.subtext}
            </p>
            <div className="flex gap-4">
              <a
                href={restaurantInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 border border-gold-500/25 hover:border-gold-500/50 hover:bg-gold-500/10 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-gold-400" />
              </a>
              <a
                href={restaurantInfo.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 border border-gold-500/25 hover:border-gold-500/50 hover:bg-gold-500/10 transition-all text-gold-400 text-xs font-semibold tracking-wider"
                aria-label="TikTok"
              >
                TT
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs tracking-[0.25em] uppercase text-gold-400 mb-6">Explore</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/menu", label: "Menu" },
                { href: "/gallery", label: "Gallery" },
                { href: "/events", label: "Events" },
                { href: "/reservations", label: "Reservations" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-champagne/60 hover:text-gold-300 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs tracking-[0.25em] uppercase text-gold-400 mb-6">Visit Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-gold-500" />
                <span className="text-sm text-champagne/70">
                  {restaurantInfo.address.street}
                  <br />
                  {restaurantInfo.address.city}, {restaurantInfo.address.country}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0 text-gold-500" />
                <a href={`tel:${restaurantInfo.phone}`} className="text-sm text-champagne/70 hover:text-gold-300 transition-colors">
                  {restaurantInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0 text-gold-500" />
                <a href={`mailto:${restaurantInfo.email}`} className="text-sm text-champagne/70 hover:text-gold-300 transition-colors">
                  {restaurantInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-1 flex-shrink-0 text-gold-500" />
                <div className="text-sm text-champagne/70">
                  <p>{restaurantInfo.hours.mon_thu}</p>
                  <p>{restaurantInfo.hours.fri_sun}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold-500/15 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-champagne/40 tracking-wide">
            © {new Date().getFullYear()} {restaurantInfo.name} · Lyric House, Nairobi CBD
          </p>
          <div className="flex gap-8 text-xs">
            <Link href="/privacy" className="text-champagne/40 hover:text-gold-400 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-champagne/40 hover:text-gold-400 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
