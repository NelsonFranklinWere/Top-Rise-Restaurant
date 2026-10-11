/** Centralized image paths — suggestive names mapped to files in /public */

export const heroImages = {
  home: "/hero/top-rise-hero.webp",
  menu: "/hero/heroimagemenupage.webp",
  reservations: "/interior/evening-outside-view.webp",
} as const;

export const brandImages = {
  logo: "/interior/logo.webp",
  logoDark: "/interior/black-logo.webp",
} as const;

export const interiorImages = {
  mainDiningRoom: "/interior/interior.webp",
  interiorDaytime: "/interior/interior-day-time.webp",
  balconyView: "/interior/balcony-view.webp",
  eveningOutside: "/interior/evening-outside-view.webp",
  lateNightView: "/interior/late-night-view.webp",
  meetingSetup: "/interior/meeting-setup.webp",
  /** Page aliases */
  inside: "/interior/interior-day-time.webp",
  interior: "/interior/interior.webp",
  ambiance1: "/interior/evening-outside-view.webp",
  ambiance2: "/interior/balcony-view.webp",
  carousel: "/interior/meeting-setup.webp",
} as const;

export const foodImages = {
  sizzlingGrill: "/food/elegantlyfriedfood1.webp",
  grilledPlatter: "/food/elegantlyfriedfood2.webp",
  friedMeatCuisine: "/food/friedmeatcuisine.webp",
  seafood: "/food/seafood.webp",
  driedMeatCuisine: "/food/driedmeatcuisine.webp",
  butterChicken: "/food/friedchicken.webp",
  pilauChipsChicken: "/food/pilau-chips-chicken.webp",
  riceBeefMasala: "/food/rice-beef,rise-masala.webp",
  beefUgali: "/food/beef-ugali.webp",
  heavyBreakfast: "/food/heavybreakfast1.webp",
  heavyBreakfast2: "/food/heavybreakfast2.webp",
  heavyBreakfast3: "/food/heavybreakfast3.webp",
  hotBreakfast: "/food/hotbreakfast.webp",
  hotAndHeavyBreakfast: "/food/hotandheavybrekfast.webp",
  conferenceLunch: "/food/conclunch1.webp",
  conferenceLunch2: "/food/conclunch2.webp",
  conferenceLunch3: "/food/conclunch3.webp",
  superServedLunch: "/food/superservedlunch.webp",
  happyClient: "/food/happy-client.webp",
} as const;

export const drinkImages = {
  milkshake: "/drinks/milkshake.webp",
  coffee: "/drinks/coffee.webp",
  premiumCoffee: "/drinks/premiumcoffee.webp",
  elegantCoffee: "/drinks/elegantcoffe.webp",
  fruitCup: "/drinks/fruit-cup.webp",
  mocktail: "/drinks/mocktail.webp",
  smoothies: "/drinks/smoothies.webp",
  freshDrink: "/drinks/fresh-drink.webp",
  africanTea: "/drinks/african-tea.webp",
} as const;

/** Every image used on the site — for preloading */
export const allSiteImages: string[] = [
  ...Object.values(heroImages),
  ...Object.values(brandImages),
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
