import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { AppStoreButtons } from "@/components/AppStoreButtons";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface OnboardingStep {
  title: string;
  desc: string;
}

interface Props {
  kicker: string;
  title: string;
  subtitle: string;
  features: Array<{ title: string; desc: string }>;
  onboarding?: { kicker: string; title: string; steps: OnboardingStep[] };
  ecosystem?: string;
  ctaTitle?: string;
  ctaSubtitle?: string;
  appKind?: "client" | "pro";
}

const FeaturePage = ({ kicker, title, subtitle, features, onboarding, ecosystem, ctaTitle, ctaSubtitle, appKind = "client" }: Props) => (
  <>
    <section className="container mx-auto py-20 md:py-32">
      <SectionHeading kicker={kicker} title={title} subtitle={subtitle} />
      <div className="mt-8">
        <AppStoreButtons kind={appKind} />
      </div>
    </section>

    <section className="container mx-auto pb-24 md:pb-32">
      <div className="grid gap-px bg-border rounded-2xl overflow-hidden md:grid-cols-2 lg:grid-cols-4">
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

    {onboarding && (
      <section className="container mx-auto pb-24 md:pb-32 border-t border-border pt-24 md:pt-32">
        <SectionHeading kicker={onboarding.kicker} title={onboarding.title} align="center" />
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {onboarding.steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative p-6 rounded-2xl border border-border bg-card"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="h-8 w-8 inline-flex items-center justify-center rounded-full bg-foreground text-background font-display text-sm font-bold">
                  {i + 1}
                </span>
                <h3 className="font-display text-lg font-semibold">{s.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    )}

    {ecosystem && (
      <section className="container mx-auto pb-12 md:pb-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-balance leading-tight"
        >
          {ecosystem}
        </motion.p>
      </section>
    )}

    {ctaTitle && (
      <section className="container mx-auto py-24 md:py-32 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-balance">{ctaTitle}</h2>
          {ctaSubtitle && <p className="mt-5 text-lg text-muted-foreground text-balance">{ctaSubtitle}</p>}
          <div className="mt-10 flex justify-center">
            <AppStoreButtons kind={appKind} />
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
      ctaTitle={t("clients.ctaTitle")}
      ctaSubtitle={t("clients.ctaSubtitle")}
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
      appKind="pro"
      onboarding={{
        kicker: t("pros.onboarding.kicker"),
        title: t("pros.onboarding.title"),
        steps: t("pros.onboarding.steps", { returnObjects: true }) as OnboardingStep[],
      }}
      ecosystem={t("pros.ecosystem")}
      ctaTitle={t("pros.ctaTitle")}
      ctaSubtitle={t("pros.ctaSubtitle")}
    />
  );
};

export default FeaturePage;
