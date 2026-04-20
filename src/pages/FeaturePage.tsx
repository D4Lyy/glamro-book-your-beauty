import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { AppStoreButtons } from "@/components/AppStoreButtons";

interface Props {
  kicker: string;
  title: string;
  subtitle: string;
  features: Array<{ title: string; desc: string }>;
  ctaTitle?: string;
  ctaSubtitle?: string;
}

const FeaturePage = ({ kicker, title, subtitle, features, ctaTitle, ctaSubtitle }: Props) => (
  <>
    <section className="container mx-auto py-20 md:py-32">
      <SectionHeading kicker={kicker} title={title} subtitle={subtitle} />
      <div className="mt-8">
        <AppStoreButtons />
      </div>
    </section>

    <section className="container mx-auto pb-24 md:pb-32">
      <div className="grid gap-px bg-border rounded-2xl overflow-hidden md:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="bg-background p-8 hover:bg-card transition-colors duration-500"
          >
            <span className="font-display text-5xl text-muted-foreground/40 font-bold">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="font-display text-xl font-semibold mt-4 mb-2">{f.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {ctaTitle && (
      <section className="container mx-auto py-24 md:py-32 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-balance">{ctaTitle}</h2>
          {ctaSubtitle && <p className="mt-5 text-lg text-muted-foreground text-balance">{ctaSubtitle}</p>}
          <div className="mt-10 flex justify-center">
            <AppStoreButtons />
          </div>
        </div>
      </section>
    )}
  </>
);

export const ClientsPage = () => {
  const { t } = useTranslation();
  return (
    <FeaturePage
      kicker={t("clients.kicker")}
      title={t("clients.title")}
      subtitle={t("clients.subtitle")}
      features={t("clients.features", { returnObjects: true }) as Array<{ title: string; desc: string }>}
    />
  );
};

export const ProsPage = () => {
  const { t } = useTranslation();
  return (
    <FeaturePage
      kicker={t("pros.kicker")}
      title={t("pros.title")}
      subtitle={t("pros.subtitle")}
      features={t("pros.features", { returnObjects: true }) as Array<{ title: string; desc: string }>}
      ctaTitle={t("pros.ctaTitle")}
      ctaSubtitle={t("pros.ctaSubtitle")}
    />
  );
};

export default FeaturePage;
