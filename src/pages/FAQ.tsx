import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/SectionHeading";
import { Seo } from "@/components/Seo";

const FAQ = () => {
  const { t } = useTranslation();
  const items = t("faq.items", { returnObjects: true }) as Array<{ q: string; a: string }>;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section className="container mx-auto py-20 md:py-32">
      <Seo
        title="FAQ Glamro — Domande frequenti su beauty delivery e candidature"
        description="Come funziona Glamro, come scaricare l'app, come candidarti come professionista, quali documenti servono e altro."
        path="/faq"
        jsonLd={jsonLd}
      />
      <SectionHeading kicker={t("faq.kicker")} title={t("faq.title")} align="center" />
      <Accordion type="single" collapsible className="mt-16 max-w-3xl mx-auto">
        {items.map((item, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border-border">
            <AccordionTrigger className="text-left font-display text-lg md:text-xl py-6 hover:no-underline">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQ;
