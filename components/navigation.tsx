"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { preloadImages } from "@/lib/images";
import { menuItems, restaurantInfo } from "@/lib/data";

const menuImageUrls = Array.from(
  new Set(menuItems.map((item) => item.image).filter((img): img is string => Boolean(img)))
);

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const isHome = pathname === "/";

  useEffect(() => {
    const routes = ["/", "/about", "/menu", "/gallery", "/events", "/contact", "/reservations"];
    routes.forEach((route) => router.prefetch(route));
  }, [router]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <nav
        ref={navRef}
        className={cn(
          "fixed top-0 left-0 right-0 z-[60] transition-all duration-500",
          scrolled || !isHome
            ? "bg-charcoal-950/95 backdrop-blur-xl border-b border-gold-500/15 shadow-2xl"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between h-20">
            <Link
              href="/"
              className="font-display text-2xl md:text-3xl font-semibold text-gradient-gold tracking-[0.2em] hover:opacity-90 transition-opacity"
            >
              {restaurantInfo.shortName}
            </Link>

            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch
                  onMouseEnter={() => link.href === "/menu" && preloadImages(menuImageUrls)}
                  className={cn(
                    "text-xs tracking-[0.2em] uppercase font-body transition-colors duration-300",
                    pathname === link.href
                      ? "text-gold-400"
                      : "text-champagne/70 hover:text-gold-300"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/reservations"
                prefetch
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-accent-600 to-accent-500 hover:from-accent-500 hover:to-accent-400 text-white text-xs tracking-[0.15em] uppercase font-semibold transition-all duration-300 shadow-lg shadow-accent-500/30 hover:shadow-accent-500/50 hover:scale-105"
              >
                Reserve
              </Link>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-ivory hover:text-gold-400 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-charcoal-950/98 backdrop-blur-xl border-t border-gold-500/15">
            <div className="container mx-auto px-4 py-8 max-w-7xl">
              <div className="flex flex-col gap-5">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    prefetch
                    onClick={() => setIsOpen(false)}
                    onTouchStart={() => link.href === "/menu" && preloadImages(menuImageUrls)}
                    className={cn(
                      "text-sm tracking-[0.2em] uppercase py-2 transition-colors",
                      pathname === link.href ? "text-gold-400" : "text-champagne/80 hover:text-gold-300"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/reservations"
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-accent-600 to-accent-500 text-white text-sm tracking-[0.15em] uppercase font-semibold text-center mt-2 shadow-lg shadow-accent-500/30"
                >
                  Reserve Table
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
