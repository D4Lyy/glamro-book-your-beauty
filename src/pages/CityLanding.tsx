import { useParams, Navigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Seo } from "@/components/Seo";
import { SectionHeading } from "@/components/SectionHeading";
import { AppStoreButtons } from "@/components/AppStoreButtons";
import { CtaLink } from "@/components/Cta";
import { CITIES, CITIES_WITH_PAGES, SERVICES, BASE_URL } from "@/lib/site";

const CityLanding = () => {
  const { slug } = useParams();
  const { t } = useTranslation();
  const city = CITIES.find((c) => c.slug === slug && c.hasPage);
  if (!city) return <Navigate to="/" replace />;

  const vars = { city: city.name, region: city.region };
  const path = `/citta/${city.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Beauty delivery",
    areaServed: { "@type": "City", name: city.name },
    provider: { "@type": "Organization", name: "Glamro", url: `${BASE_URL}/` },
    description: t("cityPage.intro", vars),
  };

  return (
    <>
      <Seo title={t("cityPage.metaTitle", vars)} description={t("cityPage.metaDescription", vars)} path={path} jsonLd={jsonLd} />

      <section className="container mx-auto py-20 md:py-28">
        <span className="text-xs uppercase tracking-widest text-muted-foreground">{t("cityPage.kicker")}</span>
        <h1 className="font-display text-4xl md:text-6xl font-bold mt-4 max-w-3xl text-balance">{t("cityPage.h1", vars)}</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">{t("cityPage.intro", vars)}</p>
        <div className="mt-8">
          <AppStoreButtons kind="client" />
        </div>
      </section>

      <section className="container mx-auto pb-20 md:pb-28">
        <SectionHeading title={t("cityPage.servicesTitle", vars)} />
        <div className="mt-10 grid gap-px bg-border rounded-2xl overflow-hidden sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-background p-7"
            >
              <Link to={`/servizi/${s.slug}`} className="group block">
                <h3 className="font-display text-lg font-semibold group-hover:underline underline-offset-4">{t(`services.${s.key}.name`)}</h3>
                <span className="mt-3 inline-flex items-center gap-1 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {t("cta.discoverMore")} <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
        <p className="mt-10 max-w-2xl text-muted-foreground leading-relaxed">{t("cityPage.body", vars)}</p>
      </section>

      {/* Pro CTA */}
      <section className="container mx-auto py-20 md:py-28 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-balance">{t("cityPage.proTitle", vars)}</h2>
          <p className="mt-4 text-lg text-muted-foreground text-balance">{t("cityPage.proBody", vars)}</p>
          <div className="mt-8 flex justify-center">
            <CtaLink to="/candidatura-professionisti" label={t("cityPage.proCta")} event="cta_apply" eventParams={{ from: `city_${city.slug}` }} />
          </div>
        </div>
      </section>

      {/* Other cities */}
      <section className="container mx-auto pb-24 md:pb-32">
        <div className="flex flex-wrap gap-2 justify-center">
          {CITIES_WITH_PAGES.filter((c) => c.slug !== city.slug).map((c) => (
            <Link key={c.slug} to={`/citta/${c.slug}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors">
              {c.name}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default CityLanding;
