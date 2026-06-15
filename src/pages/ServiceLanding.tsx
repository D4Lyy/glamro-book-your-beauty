import { useParams, Navigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Seo } from "@/components/Seo";
import { SectionHeading } from "@/components/SectionHeading";
import { AppStoreButtons } from "@/components/AppStoreButtons";
import { CtaLink } from "@/components/Cta";
import { SERVICES, CITIES_WITH_PAGES, BASE_URL } from "@/lib/site";

const ServiceLanding = () => {
  const { slug } = useParams();
  const { t } = useTranslation();
  const def = SERVICES.find((s) => s.slug === slug);
  if (!def) return <Navigate to="/" replace />;

  const base = `services.${def.key}`;
  const name = t(`${base}.name`);
  const path = `/servizi/${def.slug}`;
  const bullets = t(`${base}.bullets`, { returnObjects: true }) as string[];
  const faq = t(`${base}.faq`, { returnObjects: true }) as Array<{ q: string; a: string }>;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: name,
      provider: { "@type": "Organization", name: "Glamro", url: `${BASE_URL}/` },
      areaServed: "IT",
      description: t(`${base}.intro`),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <>
      <Seo title={t(`${base}.metaTitle`)} description={t(`${base}.metaDescription`)} path={path} jsonLd={jsonLd} />

      <section className="container mx-auto py-20 md:py-28">
        <span className="text-xs uppercase tracking-widest text-muted-foreground">{t(`${base}.kicker`)}</span>
        <h1 className="font-display text-4xl md:text-6xl font-bold mt-4 max-w-3xl text-balance">{t(`${base}.h1`)}</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">{t(`${base}.intro`)}</p>
        <div className="mt-8">
          <AppStoreButtons kind="client" />
        </div>
      </section>

      <section className="container mx-auto pb-20 md:pb-28">
        <SectionHeading title={t("services.common.advantagesTitle")} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 max-w-3xl">
          {bullets.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-start gap-3 p-5 rounded-2xl border border-border bg-card"
            >
              <Check className="h-5 w-5 shrink-0 mt-0.5 text-foreground" />
              <span className="text-sm leading-relaxed">{b}</span>
            </motion.div>
          ))}
        </div>
        <p className="mt-10 max-w-2xl text-muted-foreground leading-relaxed">{t(`${base}.seoBody`)}</p>
      </section>

      {/* FAQ */}
      <section className="container mx-auto pb-20 md:pb-28 border-t border-border pt-20 md:pt-28">
        <SectionHeading title={t("services.common.faqTitle")} />
        <div className="mt-10 max-w-3xl space-y-6">
          {faq.map((f, i) => (
            <div key={i} className="p-6 rounded-2xl border border-border bg-card">
              <h3 className="font-display text-lg font-semibold">{f.q}</h3>
              <p className="text-muted-foreground mt-2 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Other services */}
      <section className="container mx-auto pb-20 md:pb-28">
        <div className="flex flex-wrap gap-3">
          {SERVICES.filter((s) => s.slug !== def.slug).map((s) => (
            <Link
              key={s.slug}
              to={`/servizi/${s.slug}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors"
            >
              {t(`services.${s.key}.name`)}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          ))}
        </div>
      </section>

      {/* Pro CTA */}
      <section className="container mx-auto py-20 md:py-28 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-balance">{t("services.common.proTitle")}</h2>
          <p className="mt-4 text-lg text-muted-foreground text-balance">{t("services.common.proBody")}</p>
          <div className="mt-8 flex justify-center">
            <CtaLink to="/candidatura-professionisti" label={t("services.common.proCta")} event="cta_apply" eventParams={{ from: `service_${def.key}` }} />
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="container mx-auto pb-24 md:pb-32">
        <div className="flex flex-wrap gap-2 justify-center">
          {CITIES_WITH_PAGES.map((c) => (
            <Link key={c.slug} to={`/citta/${c.slug}`} className="text-sm text-muted-foreground hover:text-foreground underline-offset-4 hover:underline">
              {name} a {c.name}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default ServiceLanding;
