---
name: SEO & conversion structure
description: Home sections, SEO landing pages, routes, GA4 events, and required env vars for Glamro
type: feature
---
Routes: /lavora-con-noi, /candidatura-professionisti (form→/api/candidatura→Brevo list), /prenota-consulenza, /servizi/:slug (4 services in src/lib/site.ts SERVICES), /citta/:slug (7 city pages, CITIES with hasPage). English app routes /clients /professionals kept.

Home order: hero (3 CTAs) → Cos'è Glamro → come funziona → servizi (linked) → per clienti → per professionisti → prenota consulenza → città → roadmap → FAQ teaser → final CTA.

Consultation booking link = BOOKING_URL in src/lib/site.ts (Calendly).

GA4 events tracked: download_app{store,app}, cta_work_with_us, cta_apply, cta_book_consult, cta_faq, contact_form_submit, application_submit. Helper: track() in src/lib/analytics.ts.

Required env vars (set in Vercel): VITE_GA4_ID (G-XXXX), BREVO_API_KEY, BREVO_CANDIDATURA_LIST_ID.

Sitemap: scripts/generate-sitemap.ts via predev/prebuild → public/sitemap.xml. robots.txt advertises sitemap.
