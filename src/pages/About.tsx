import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";

const About = () => {
  const { t } = useTranslation();
  const values = t("about.values.items", { returnObjects: true }) as Array<{ title: string; desc: string }>;
  const highlights = t("about.opportunity.highlights", { returnObjects: true }) as Array<{ title: string; desc: string }>;

  return (
    <>
      <section className="container mx-auto py-20 md:py-32">
        <SectionHeading kicker={t("about.kicker")} title={t("about.title")} />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 max-w-3xl text-xl md:text-2xl text-muted-foreground leading-relaxed text-balance"
        >
          {t("about.lead")}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-6 max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed text-balance"
        >
          {t("about.leadExtra")}
        </motion.p>
      </section>

      <section className="container mx-auto py-24 border-t border-border">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-24">
          <h3 className="font-display text-3xl md:text-4xl font-bold">{t("about.mission.title")}</h3>
          <div className="space-y-5">
            <p className="text-lg text-muted-foreground leading-relaxed">{t("about.mission.body")}</p>
            {t("about.mission.extra") && (
              <p className="text-lg text-muted-foreground leading-relaxed">{t("about.mission.extra")}</p>
            )}
          </div>
        </div>
      </section>

      <section className="container mx-auto py-24 border-t border-border">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-24">
          <h3 className="font-display text-3xl md:text-4xl font-bold">{t("about.opportunity.title")}</h3>
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">{t("about.opportunity.body")}</p>
            <div className="grid gap-px bg-border rounded-2xl overflow-hidden md:grid-cols-3">
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-background p-8"
                >
                  <h4 className="font-display text-xl font-semibold mb-2">{h.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{h.desc}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">{t("about.opportunity.body2")}</p>
            {t("about.opportunity.closing") && (
              <p className="font-display text-xl md:text-2xl font-semibold leading-snug text-balance">
                {t("about.opportunity.closing")}
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="container mx-auto py-24 border-t border-border">
        <h3 className="font-display text-3xl md:text-4xl font-bold mb-12">{t("about.values.title")}</h3>
        <div className="grid gap-px bg-border rounded-2xl overflow-hidden md:grid-cols-2 lg:grid-cols-5">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-background p-8"
            >
              <h4 className="font-display text-xl font-semibold mb-3">{v.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto py-24 border-t border-border">
        <div className="max-w-3xl">
          <h3 className="font-display text-3xl md:text-5xl font-bold leading-tight text-balance">
            {t("about.outro.title")}
          </h3>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            {t("about.outro.body")}
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
