import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Mail, Newspaper, Handshake } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { toast } from "sonner";

const Contact = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success(t("contact.form.success"));
      (e.target as HTMLFormElement).reset();
    }, 600);
  };

  return (
    <>
      <section className="container mx-auto py-20 md:py-32">
        <SectionHeading kicker={t("contact.kicker")} title={t("contact.title")} subtitle={t("contact.subtitle")} />

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          {/* Channels */}
          <div className="space-y-6">
            {[
              { icon: Mail, label: t("contact.email"), value: "hello@glamro.it" },
              { icon: Newspaper, label: t("contact.press"), value: "press@glamro.it" },
              { icon: Handshake, label: t("contact.partnerships"), value: "partners@glamro.it" },
            ].map((c, i) => (
              <a
                key={i}
                href={`mailto:${c.value}`}
                className="block p-6 rounded-2xl border border-border hover:border-foreground/40 transition-colors group"
              >
                <c.icon className="h-6 w-6 mb-4 text-muted-foreground group-hover:text-foreground transition-colors" strokeWidth={1.5} />
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{c.label}</p>
                <p className="font-display text-lg">{c.value}</p>
              </a>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="space-y-5 p-8 rounded-2xl border border-border bg-card">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">{t("contact.form.name")}</label>
                <Input required name="name" className="bg-background border-border" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">{t("contact.form.email")}</label>
                <Input required type="email" name="email" className="bg-background border-border" />
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">{t("contact.form.subject")}</label>
              <Input required name="subject" className="bg-background border-border" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">{t("contact.form.message")}</label>
              <Textarea required name="message" rows={6} className="bg-background border-border resize-none" />
            </div>
            <Button type="submit" disabled={loading} className="w-full h-12 text-base">
              {loading ? "..." : t("contact.form.send")}
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
