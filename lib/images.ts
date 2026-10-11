/** Centralized WebP image paths — run `npm run optimize-images` after adding new assets */
/** NOTE: photos are stand-ins until a shoot is done at Top Rise, Lyric House. */

export const heroImages = {
  home: "/hero/homepage.webp",
  menu: "/hero/heroimagemenupage.webp",
  reservations: "/hero/reservations-hero.webp",
} as const;

export const interiorImages = {
  inside: "/interior/inside-dining-room.webp",
  interior: "/interior/interior.webp",
  ambiance1: "/interior/setupambiance1.webp",
  ambiance2: "/interior/setupambiance2.webp",
  carousel: "/interior/aboutuscarousel.webp",
} as const;

export const foodImages = {
  elegantlyfriedfood1: "/food/elegantlyfriedfood1.webp",
  elegantlyfriedfood2: "/food/elegantlyfriedfood2.webp",
  friedmeatcuisine: "/food/friedmeatcuisine.webp",
  seafood: "/food/seafood.webp",
  driedmeatcuisine: "/food/driedmeatcuisine.webp",
  friedchicken: "/food/friedchicken.webp",
  superservedlunch: "/food/superservedlunch.webp",
  lunch1: "/food/conclunch1.webp",
  lunch2: "/food/conclunch2.webp",
  lunch3: "/food/conclunch3.webp",
  breakfast1: "/food/heavybreakfast1.webp",
  breakfast2: "/food/heavybreakfast2.webp",
  breakfast3: "/food/heavybreakfast3.webp",
  hotHeavyBreakfast: "/food/hotandheavybrekfast.webp",
  hotBreakfast: "/food/hotbreakfast.webp",
} as const;

export const drinkImages = {
  twoglassescombineddrink: "/drinks/twoglassescombineddrink.webp",
  chillingdrink: "/drinks/chillingdrink.webp",
  premiumcoffee: "/drinks/premiumcoffee.webp",
  superjuicewithorange: "/drinks/superjuicewithorange.webp",
  elegantcoffe: "/drinks/elegantcoffe.webp",
  juicydrink: "/drinks/juicydrink.webp",
} as const;

/** All unique images used across the site — for parallel preloading */
export const allSiteImages: string[] = [
  ...Object.values(heroImages),
  ...Object.values(interiorImages),
  ...Object.values(foodImages),
  ...Object.values(drinkImages),
];

export const imageSizes = {
  hero: "100vw",
  menuCard: "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw",
  galleryThumb: "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw",
  galleryLightbox: "(max-width: 1280px) 100vw, 1280px",
} as const;

/** Preload images in parallel via the browser cache */
export function preloadImages(urls: string[]): Promise<void[]> {
  if (typeof window === "undefined") return Promise.resolve([]);

  return Promise.all(
    urls.map(
      (src) =>
        new Promise<void>((resolve) => {
          const img = new window.Image();
          img.onload = () => resolve();
          img.onerror = () => resolve();
          img.src = src;
        })
    )
  );
}
