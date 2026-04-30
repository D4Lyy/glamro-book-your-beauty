import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Mail, Megaphone, Headset, Calendar, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SectionHeading } from "@/components/SectionHeading";
import { toast } from "sonner";

const iconMap = { mail: Mail, megaphone: Megaphone, headset: Headset } as const;

const Contact = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState<string>("");

  const channels = t("contact.channels", { returnObjects: true }) as Array<{
    icon: keyof typeof iconMap;
    label: string;
    value: string;
  }>;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      role,
      subject: String(data.get("subject") || ""),
      message: String(data.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error(`Request failed: ${res.status}`);

      toast.success(t("contact.form.success"));
      form.reset();
      setRole("");
    } catch (err) {
      console.error(err);
      toast.error(t("contact.form.error", { defaultValue: "Something went wrong. Please try again." }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container mx-auto py-20 md:py-32">
      <SectionHeading kicker={t("contact.kicker")} title={t("contact.title")} subtitle={t("contact.subtitle")} />

      {/* Webinar / discovery call */}
      <a
        href="https://calendly.com/contact-glamro/webinar-glamro-scopri-la-piattaforma-e-la-sua-vison"
        target="_blank"
        rel="noreferrer"
        className="mt-12 block p-8 md:p-10 rounded-2xl border border-border bg-card hover:border-foreground/40 transition-colors group"
      >
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <Calendar className="h-8 w-8 shrink-0 text-foreground" strokeWidth={1.5} />
          <div className="flex-1">
            <h3 className="font-display text-2xl md:text-3xl font-semibold leading-tight">
              {t("contact.webinar.title")}
            </h3>
            <p className="text-muted-foreground mt-2 leading-relaxed">
              {t("contact.webinar.body")}
            </p>
          </div>
          <span className="inline-flex items-center gap-2 font-display text-base shrink-0 group-hover:translate-x-1 transition-transform">
            {t("contact.webinar.cta")}
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </a>

      <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        {/* Channels */}
        <div className="space-y-6">
          {channels.map((c, i) => {
            const Icon = iconMap[c.icon] ?? Mail;
            return (
              <a
                key={i}
                href={`mailto:${c.value}`}
                className="block p-6 rounded-2xl border border-border hover:border-foreground/40 transition-colors group"
              >
                <Icon className="h-6 w-6 mb-4 text-muted-foreground group-hover:text-foreground transition-colors" strokeWidth={1.5} />
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{c.label}</p>
                <p className="font-display text-lg">{c.value}</p>
              </a>
            );
          })}
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
            <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">{t("contact.form.role")}</label>
            <Select required value={role} onValueChange={setRole} name="role">
              <SelectTrigger className="bg-background border-border">
                <SelectValue placeholder="—" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="client">{t("contact.form.roles.client")}</SelectItem>
                <SelectItem value="pro">{t("contact.form.roles.pro")}</SelectItem>
                <SelectItem value="partnership">{t("contact.form.roles.partnership")}</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">{t("contact.form.subject")}</label>
            <Input required name="subject" className="bg-background border-border" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">{t("contact.form.message")}</label>
            <Textarea required name="message" rows={6} className="bg-background border-border resize-none" />
          </div>
          <Button type="submit" disabled={loading || !role} className="w-full h-12 text-base">
            {loading ? "..." : t("contact.form.send")}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
