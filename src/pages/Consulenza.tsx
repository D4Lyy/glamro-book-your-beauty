import { useTranslation } from "react-i18next";
import { Check } from "lucide-react";
import { Seo } from "@/components/Seo";
import { CtaAnchor } from "@/components/Cta";
import { BOOKING_URL } from "@/lib/site";

const Consulenza = () => {
  const { t } = useTranslation();
  const points = t("consulenza.points", { returnObjects: true }) as string[];

  return (
    <>
      <Seo title={t("consulenza.metaTitle")} description={t("consulenza.metaDescription")} path="/prenota-consulenza" />

      <section className="container mx-auto py-20 md:py-28">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">{t("consulenza.kicker")}</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mt-4 text-balance">{t("consulenza.h1")}</h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{t("consulenza.body")}</p>
          <div className="mt-8">
            <CtaAnchor href={BOOKING_URL} label={t("consulenza.cta")} event="cta_book_consult" eventParams={{ from: "consulenza_page" }} />
          </div>
        </div>
      </section>

      <section className="container mx-auto pb-20 md:pb-28">
        <h2 className="font-display text-2xl md:text-3xl font-semibold">{t("consulenza.pointsTitle")}</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 max-w-3xl">
          {points.map((p, i) => (
            <div key={i} className="flex items-start gap-3 p-5 rounded-2xl border border-border bg-card">
              <Check className="h-5 w-5 shrink-0 mt-0.5 text-foreground" />
              <span className="text-sm leading-relaxed">{p}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Consulenza;
