# Glamro — SEO & Conversion Overhaul

## Context & constraints (important)

- **Hosting**: You deploy `www.glamro.it` on **Vercel**, not Lovable. So all form backends stay as Vercel serverless functions in `/api`, and the changes go live only after you redeploy on Vercel. I cannot test those functions inside Lovable — I'll build them to match your existing `/api/contact.ts` Brevo pattern.
- **GA4 ID**: not provided. I'll wire full GA4 + event tracking using an env var (`VITE_GA4_ID`); you add the real `G-XXXXXXXXXX` in Vercel env (and locally) and it goes live. Nothing else to change.
- **Application form → Brevo list**: I'll add a `/api/candidatura.ts` function that adds the contact to a Brevo list. I need the **Brevo list ID** to target (you can paste it now or I'll use an env var `BREVO_CANDIDATURA_LIST_ID`).
- **Consultation link**: reuse the Calendly link already on the Contact page.
- New SEO landing pages use clean Italian URLs as you specified; existing English app routes (`/clients`, `/professionals`) stay.

## What already exists vs. what's missing

**Exists**: Home (hero, come funziona, servizi, perché, roadmap, final CTA), Clients & Professionals pages, partner section, About, FAQ, Contact (with Calendly + Brevo contact form), legal pages, robots.txt, IT/EN i18n, global meta in index.html.

**Missing** (this plan builds it): new hero copy + 3 CTAs, "Cos'è Glamro", "Prenota consulenza" home section, città section, the 13 new pages, per-page meta/H1 control, sitemap.xml, GA4 + event tracking, alt-text/WebP audit.

## Phase 1 — Foundations (SEO + tracking plumbing)

1. **Per-page meta**: install `react-helmet-async`, wrap app in `HelmetProvider`, add a reusable `<Seo title description path>` component (sets title, meta description, canonical, og:*). Remove the static canonical from `index.html` (keep og fallback).
2. **GA4**: add gtag loader gated on `VITE_GA4_ID`, a `track(event, params)` helper, and automatic page_view on route change.
3. **Event tracking** on: download app (App Store / Google Play split), Lavora con noi, Candidati, Prenota consulenza, WhatsApp, contact form submit, application form submit. Wire into `AppStoreButtons` and CTA buttons.
4. **Sitemap**: add `scripts/generate-sitemap.ts` + `predev`/`prebuild` hooks, `BASE_URL = "https://www.glamro.it"`, listing all routes incl. new ones. Add `Sitemap:` line to robots.txt.

## Phase 2 — Home restructure (`Index.tsx` + i18n)

Reorder/extend to: Hero (new title "Glamro, il primo beauty delivery in Italia", subtitle, 3 CTAs) → Cos'è Glamro → Per i clienti (CTA download) → Per professionisti/saloni/centri (CTA candidati) → **Prenota consulenza** → Servizi (4 blocks linking to service pages) → Città/zone (links to city pages) → FAQ teaser → Final CTA. All copy added to `it.json`/`en.json`.

## Phase 3 — New pages (routes + components)

Reusable templates: `ServiceLandingPage` and `CityLandingPage` (H1, SEO intro copy, internal links, CTA, FAQ, Seo meta, JSON-LD).

- `/lavora-con-noi` — pitch for professionals/salons + CTA to application + consultation.
- `/candidatura-professionisti` — form (nome, cognome, telefono, email, professione, città, Instagram/TikTok, disponibilità consulenza, note documenti) → posts to `/api/candidatura` (Brevo list) + tracked event.
- `/prenota-consulenza` — copy + Calendly embed/link.
- `/servizi/parrucchiere-a-domicilio`, `/estetista-a-domicilio`, `/make-up-artist-a-domicilio`, `/massaggiatore-a-domicilio` — SEO pages.
- `/citta/{senigallia,ancona,brindisi,rimini,riccione,bologna,gallipoli}` — SEO city pages (+ pesaro, fano, bari, lecce included in the città section list).
- Add all to `App.tsx`; add nav/footer links where appropriate.

## Phase 4 — Backend (Vercel functions)

- Keep `/api/contact.ts`.
- Add `/api/candidatura.ts`: validates input, calls Brevo Contacts API to upsert the lead into the configured list (and optional notification email to contact@glamro.it).

## Phase 5 — Media & mobile

- Audit images: ensure alt text everywhere; convert partner/any raster images to WebP where it helps; lazy-load below-the-fold images.
- Verify mobile layout/spacing on new sections and pages.

## Technical notes

- Keyword targeting baked into H1/title/description/body of each service & city page (e.g. "parrucchiere a domicilio", "beauty delivery Italia").
- JSON-LD: `LocalBusiness`/`Service` on service pages, `FAQPage` on FAQ, `Organization` sitewide.
- Search Console: I can generate a `META` verification tag and add it to `index.html` once you want it (needs the site reachable at the verified URL). GA4 verification also works once GA4 ID is live.

## Open inputs I need from you (can proceed with placeholders otherwise)
1. Brevo list ID for applications.
2. GA4 Measurement ID.
3. Confirm Search Console verification method (I'll use a meta tag).

## Suggested publishing order (your stated priorities)
Phase 1 → home (Phase 2) → application + consultation (Phase 3 partial) → service pages → city pages → backend wiring → mobile polish. First optimized version (home + application + consultation + CTAs + tracking + sitemap) is the milestone to publish; service/city pages follow.
