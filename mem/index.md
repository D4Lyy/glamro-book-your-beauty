# Project Memory

## Core
Site: Glamro — beauty delivery in Italia. Bilingual IT/EN (react-i18next), IT is primary copy. Italian "il primo beauty delivery in Italia".
Hosted/deployed on **Vercel** (NOT Lovable). Form backends are Vercel functions in `/api`; changes go live only after user redeploys on Vercel.
Forms use **Brevo** (env BREVO_API_KEY). Per-page SEO via react-helmet-async `<Seo>` component. GA4 via `VITE_GA4_ID` env + `track()` in src/lib/analytics.ts.
Shared config (booking link, cities, services) in src/lib/site.ts. Domain: https://www.glamro.it.

## Memories
- [SEO & conversion structure](mem://features/seo-conversion) — pages, routes, tracking events, env vars needed
