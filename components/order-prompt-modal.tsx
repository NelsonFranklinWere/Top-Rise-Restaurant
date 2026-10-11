"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, MessageCircle, ExternalLink } from "lucide-react";
import { MenuItem } from "@/lib/types";
import { buildBoltOrderUrl, buildWhatsAppOrderUrl, formatMenuPrice } from "@/lib/order-links";

type OrderPromptModalProps = {
  item: MenuItem | null;
  onClose: () => void;
};

export function OrderPromptModal({ item, onClose }: OrderPromptModalProps) {
  useEffect(() => {
    if (!item) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [item, onClose]);

  if (!item) return null;

  const whatsappUrl = buildWhatsAppOrderUrl(item);
  const boltUrl = buildBoltOrderUrl(item);

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-prompt-title"
    >
      <div
        className="absolute inset-0 bg-charcoal-950/85 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-md bg-charcoal-900 border border-gold-500/25 shadow-2xl shadow-accent-500/10 animate-fade-in overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-champagne/50 hover:text-ivory transition-colors rounded-full hover:bg-white/5"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {item.image && (
          <div className="relative h-40 w-full">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 to-transparent" />
          </div>
        )}

        <div className="p-6 sm:p-8">
          <p className="text-accent-400 text-xs tracking-[0.25em] uppercase mb-2">Order This Dish</p>
          <h2 id="order-prompt-title" className="font-display text-2xl text-ivory mb-1 pr-8">
            {item.name}
          </h2>
          <p className="text-gold-300 font-display text-lg mb-4">{formatMenuPrice(item.price)}</p>
          <p className="text-champagne/65 text-sm leading-relaxed mb-8 line-clamp-3">
            {item.description}
          </p>

          <p className="text-center text-champagne/50 text-xs tracking-wide uppercase mb-4">
            How would you like to order?
          </p>

          <div className="flex flex-col gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full px-6 py-4 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-sm tracking-wide uppercase transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-green-500/25"
            >
              <MessageCircle className="w-5 h-5" />
              Order via WhatsApp
            </a>

            <a
              href={boltUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full px-6 py-4 rounded-full bg-[#34D186] hover:bg-[#2EC079] text-charcoal-950 font-semibold text-sm tracking-wide uppercase transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-[#34D186]/25"
            >
              <ExternalLink className="w-5 h-5" />
              Order via Bolt
            </a>
          </div>

          <p className="text-center text-champagne/40 text-xs mt-5">
            Your selection will be included when you open {item.name} on Bolt or WhatsApp.
          </p>
        </div>
      </div>
    </div>
  );
}
