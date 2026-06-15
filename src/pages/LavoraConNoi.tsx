import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Seo } from "@/components/Seo";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaLink, CtaAnchor } from "@/components/Cta";
import { AppStoreButtons } from "@/components/AppStoreButtons";
import { BOOKING_URL } from "@/lib/site";

const LavoraConNoi = () => {
  const { t } = useTranslation();
  const benefits = t("lavoraConNoi.benefits", { returnObjects: true }) as Array<{ title: string; desc: string }>;
  const steps = t("lavoraConNoi.steps", { returnObjects: true }) as Array<{ title: string; desc: string }>;

  return (
    <>
      <Seo title={t("lavoraConNoi.metaTitle")} description={t("lavoraConNoi.metaDescription")} path="/lavora-con-noi" />

      <section className="container mx-auto py-20 md:py-28">
        <span className="text-xs uppercase tracking-widest text-muted-foreground">{t("lavoraConNoi.kicker")}</span>
        <h1 className="font-display text-4xl md:text-6xl font-bold mt-4 max-w-3xl text-balance">{t("lavoraConNoi.h1")}</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">{t("lavoraConNoi.subtitle")}</p>
        <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">{t("lavoraConNoi.intro")}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <CtaLink to="/candidatura-professionisti" label={t("lavoraConNoi.ctaApply")} event="cta_apply" eventParams={{ from: "lavora_con_noi" }} />
          <CtaAnchor href={BOOKING_URL} label={t("lavoraConNoi.ctaConsult")} event="cta_book_consult" eventParams={{ from: "lavora_con_noi" }} variant="outline" />
        </div>
        <div className="mt-8">
          <AppStoreButtons kind="pro" />
        </div>
      </section>

      <section className="container mx-auto pb-20 md:pb-28">
        <div className="grid gap-px bg-border rounded-2xl overflow-hidden sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-background p-8"
            >
              <h3 className="font-display text-xl font-semibold">{b.title}</h3>
              <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto pb-20 md:pb-28 border-t border-border pt-20 md:pt-28">
        <SectionHeading title={t("lavoraConNoi.stepsTitle")} align="center" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {steps.map((s, i) => (
            <div key={i} className="relative p-6 rounded-2xl border border-border bg-card">
              <span className="h-8 w-8 inline-flex items-center justify-center rounded-full bg-foreground text-background font-display text-sm font-bold">{i + 1}</span>
              <h3 className="font-display text-lg font-semibold mt-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <CtaLink to="/candidatura-professionisti" label={t("lavoraConNoi.ctaApply")} event="cta_apply" eventParams={{ from: "lavora_con_noi_steps" }} />
        </div>
      </section>
    </>
  );
};

export default LavoraConNoi;
