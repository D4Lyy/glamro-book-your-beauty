import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, MapPin, Scissors, Sparkles, Brush, Heart } from "lucide-react";
import { AppStoreButtons } from "@/components/AppStoreButtons";
import { SectionHeading } from "@/components/SectionHeading";
import { Logo } from "@/components/Logo";
import { Seo } from "@/components/Seo";
import { CtaLink, CtaAnchor } from "@/components/Cta";
import { BOOKING_URL, SERVICES, CITIES, BASE_URL } from "@/lib/site";

const whyIcons = [Sparkles, Zap, ShieldCheck, MapPin];
const serviceIconMap: Record<string, typeof Scissors> = {
  parrucchiere: Scissors,
  estetista: Sparkles,
  makeup: Brush,
  massaggiatore: Heart,
};

const Index = () => {
  const { t } = useTranslation();
  const why = t("home.whySection.items", { returnObjects: true }) as Array<{ title: string; desc: string }>;
  const steps = t("home.how.steps", { returnObjects: true }) as Array<{ title: string; desc: string }>;
  const roadmap = t("home.roadmap.items", { returnObjects: true }) as Array<{ date: string; title: string; desc: string }>;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Glamro",
    url: `${BASE_URL}/`,
    description: t("home.subtitle"),
  };

  return (
    <>
      <Seo
        title="Glamro — Il primo beauty delivery in Italia"
        description={t("home.subtitle")}
        path="/"
        jsonLd={jsonLd}
      />

      {/* HERO */}
      <section className="relative overflow-hidden gradient-hero">
        <div className="absolute inset-0 bg-grain opacity-60 pointer-events-none" />
        <div className="container mx-auto relative z-10 py-20 md:py-28 lg:py-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center mb-10 mt-4"
          >
            <div className="text-foreground">
              <Logo showWordmark={false} className="[&>img]:!h-32 [&>img]:!w-32 md:[&>img]:!h-44 md:[&>img]:!w-44 lg:[&>img]:!h-56 lg:[&>img]:!w-56" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-center text-balance leading-[1.02]"
          >
            {t("home.tagline")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-8 max-w-2xl mx-auto text-center text-lg md:text-xl text-muted-foreground text-balance leading-relaxed"
          >
            {t("home.subtitle")}
          </motion.p>

          {/* Primary CTAs: download + work + consult */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 flex flex-col items-center gap-6"
          >
            <AppStoreButtons kind="client" />
            <div className="flex flex-wrap items-center justify-center gap-3">
              <CtaLink to="/lavora-con-noi" label={t("cta.workWithUs")} event="cta_work_with_us" eventParams={{ from: "home_hero" }} variant="outline" size="default" />
              <CtaAnchor href={BOOKING_URL} label={t("cta.bookConsult")} event="cta_book_consult" eventParams={{ from: "home_hero" }} variant="outline" size="default" />
            </div>
          </motion.div>
        </div>

        {/* Marquee */}
        <div className="relative border-y border-border py-6 overflow-hidden">
          <div className="flex w-max animate-marquee whitespace-nowrap">
            {[0, 1].map((copy) => (
              <div key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center font-display text-2xl md:text-3xl text-muted-foreground/70">
                {t("home.marquee").split(" · ").map((w, idx) => (
                  <span key={idx} className="flex items-center">
                    <span className="px-6">{w}</span>
                    <span className="text-foreground/30 px-6">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IS GLAMRO */}
      <section className="container mx-auto py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">{t("home.whatIs.kicker")}</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 text-balance">{t("home.whatIs.title")}</h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-balance">{t("home.whatIs.body")}</p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="container mx-auto py-12 md:py-20 border-t border-border">
        <SectionHeading kicker={t("home.how.kicker")} title={t("home.how.title")} align="center" />
        <div className="mt-16 grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative p-8 rounded-2xl border border-border bg-card"
            >
              <span className="font-display text-6xl text-muted-foreground/30 font-bold">0{i + 1}</span>
              <h3 className="font-display text-2xl font-semibold mt-3">{s.title}</h3>
              <p className="text-muted-foreground mt-2 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES (linked SEO pages) */}
      <section className="container mx-auto py-24 md:py-32 border-t border-border">
        <SectionHeading kicker={t("home.services.kicker")} title={t("home.services.title")} />
        <div className="mt-16 grid gap-px bg-border rounded-2xl overflow-hidden grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => {
            const Icon = serviceIconMap[s.key] ?? Sparkles;
            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="bg-background p-8 hover:bg-card transition-colors duration-500"
              >
                <Link to={`/servizi/${s.slug}`} className="group block h-full">
                  <Icon className="h-7 w-7 mb-5 text-foreground" strokeWidth={1.5} />
                  <h3 className="font-display text-xl font-semibold">{t(`services.${s.key}.name`)}</h3>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{t(`services.${s.key}.intro`)}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {t("home.servicesCta")} <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* FOR CLIENTS */}
      <section className="container mx-auto py-24 md:py-32 border-t border-border">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <span className="text-xs uppercase tracking-widest text-muted-foreground">{t("home.forClients.kicker")}</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 text-balance">{t("home.forClients.title")}</h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{t("home.forClients.body")}</p>
            <div className="mt-8">
              <AppStoreButtons kind="client" />
            </div>
          </div>
          <div className="grid gap-px bg-border rounded-2xl overflow-hidden sm:grid-cols-2">
            {why.slice(0, 4).map((item, i) => {
              const Icon = whyIcons[i % whyIcons.length];
              return (
                <div key={i} className="bg-background p-7">
                  <Icon className="h-7 w-7 mb-4 text-foreground" strokeWidth={1.5} />
                  <h3 className="font-display text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOR PROS */}
      <section className="container mx-auto py-24 md:py-32 border-t border-border">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">{t("home.forPros.kicker")}</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 text-balance">{t("home.forPros.title")}</h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{t("home.forPros.body")}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaLink to="/candidatura-professionisti" label={t("home.forPros.ctaApply")} event="cta_apply" eventParams={{ from: "home_pros" }} />
            <CtaLink to="/lavora-con-noi" label={t("home.forPros.ctaWork")} event="cta_work_with_us" eventParams={{ from: "home_pros" }} variant="outline" />
          </div>
        </div>
      </section>

      {/* BOOK A CONSULTATION */}
      <section className="container mx-auto py-24 md:py-32 border-t border-border">
        <div className="rounded-3xl border border-border bg-card p-10 md:p-16 text-center max-w-4xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">{t("home.consult.kicker")}</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 text-balance">{t("home.consult.title")}</h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-balance">{t("home.consult.body")}</p>
          <div className="mt-8 flex justify-center">
            <CtaAnchor href={BOOKING_URL} label={t("home.consult.cta")} event="cta_book_consult" eventParams={{ from: "home_section" }} />
          </div>
        </div>
      </section>

      {/* CITIES */}
      <section className="container mx-auto py-24 md:py-32 border-t border-border">
        <SectionHeading kicker={t("home.citiesSection.kicker")} title={t("home.citiesSection.title")} subtitle={t("home.citiesSection.body")} />
        <div className="mt-12 flex flex-wrap gap-3">
          {CITIES.map((c) =>
            c.hasPage ? (
              <Link
                key={c.slug}
                to={`/citta/${c.slug}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border bg-card text-sm hover:border-foreground/40 hover:text-foreground transition-colors text-muted-foreground"
              >
                <MapPin className="h-4 w-4" /> {c.name}
              </Link>
            ) : (
              <span key={c.slug} className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border text-sm text-muted-foreground/70">
                <MapPin className="h-4 w-4" /> {c.name}
              </span>
            ),
          )}
        </div>
      </section>

      {/* ROADMAP */}
      <section className="container mx-auto py-24 md:py-32 border-t border-border">
        <SectionHeading kicker={t("home.roadmap.kicker")} title={t("home.roadmap.title")} align="center" />
        <div className="mt-20 max-w-3xl mx-auto relative">
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-px bg-border md:-translate-x-1/2" />
          <div className="space-y-12">
            {roadmap.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 mt-2 h-3 w-3 rounded-full bg-foreground ring-8 ring-background" />
                <div className={`pl-12 md:pl-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">{item.date}</span>
                  <h3 className="font-display text-2xl font-semibold mt-2">{item.title}</h3>
                  <p className="text-muted-foreground mt-2 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ TEASER */}
      <section className="container mx-auto py-24 md:py-32 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">{t("home.faqTeaser.kicker")}</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 text-balance">{t("home.faqTeaser.title")}</h2>
          <p className="mt-6 text-lg text-muted-foreground text-balance">{t("home.faqTeaser.body")}</p>
          <div className="mt-8 flex justify-center">
            <CtaLink to="/faq" label={t("home.faqTeaser.cta")} event="cta_faq" variant="outline" />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container mx-auto py-24 md:py-32 border-t border-border">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-balance">{t("home.finalCta.title")}</h2>
          <p className="mt-6 text-lg text-muted-foreground text-balance">{t("home.finalCta.subtitle")}</p>
          <div className="mt-10 flex justify-center">
            <AppStoreButtons />
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Index;
