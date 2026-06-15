// Central site configuration & shared constants for SEO / conversion.

export const BASE_URL = "https://www.glamro.it";

// Booking / consultation link (Calendly) — used across consultation CTAs.
export const BOOKING_URL =
  "https://calendly.com/contact-glamro/supporto-glamro-completa-la-tua-registrazione";

export const WHATSAPP_URL = "https://wa.me/393000000000"; // TODO: replace with real WhatsApp number

export const CONTACT_EMAIL = "contact@glamro.it";

// Service landing pages (SEO).
export interface ServiceDef {
  slug: string; // path under /servizi/
  key: string; // i18n key under services.*
}

export const SERVICES: ServiceDef[] = [
  { slug: "parrucchiere-a-domicilio", key: "parrucchiere" },
  { slug: "estetista-a-domicilio", key: "estetista" },
  { slug: "make-up-artist-a-domicilio", key: "makeup" },
  { slug: "massaggiatore-a-domicilio", key: "massaggiatore" },
];

// City landing pages (SEO). The first 7 get dedicated pages; the full list
// is shown in the home "città" section.
export interface CityDef {
  slug: string;
  name: string;
  region: string;
  hasPage: boolean;
}

export const CITIES: CityDef[] = [
  { slug: "senigallia", name: "Senigallia", region: "Marche", hasPage: true },
  { slug: "ancona", name: "Ancona", region: "Marche", hasPage: true },
  { slug: "brindisi", name: "Brindisi", region: "Puglia", hasPage: true },
  { slug: "rimini", name: "Rimini", region: "Emilia-Romagna", hasPage: true },
  { slug: "riccione", name: "Riccione", region: "Emilia-Romagna", hasPage: true },
  { slug: "bologna", name: "Bologna", region: "Emilia-Romagna", hasPage: true },
  { slug: "gallipoli", name: "Gallipoli", region: "Puglia", hasPage: true },
  { slug: "pesaro", name: "Pesaro", region: "Marche", hasPage: false },
  { slug: "fano", name: "Fano", region: "Marche", hasPage: false },
  { slug: "bari", name: "Bari", region: "Puglia", hasPage: false },
  { slug: "lecce", name: "Lecce", region: "Puglia", hasPage: false },
];

export const CITIES_WITH_PAGES = CITIES.filter((c) => c.hasPage);
