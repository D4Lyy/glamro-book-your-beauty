import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";
import { Seo } from "@/components/Seo";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BOOKING_URL } from "@/lib/site";
import { track } from "@/lib/analytics";

const PROFESSIONS = ["parrucchiere", "estetista", "makeup", "massaggiatore", "salone", "altro"] as const;

const Candidatura = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [profession, setProfession] = useState("");
  const [availability, setAvailability] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target as HTMLFormElement;
    const fd = new FormData(form);
    const payload = {
      firstName: String(fd.get("firstName") || "").trim(),
      lastName: String(fd.get("lastName") || "").trim(),
      phone: String(fd.get("phone") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      profession,
      city: String(fd.get("city") || "").trim(),
      social: String(fd.get("social") || "").trim(),
      availability,
      documents: String(fd.get("documents") || "").trim(),
    };

    try {
      const res = await fetch("/api/candidatura", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        track("application_submit", { profession, city: payload.city });
        toast.success(t("candidatura.form.success"));
        form.reset();
        setProfession("");
        setAvailability("");
      } else {
        const r = await res.json().catch(() => ({}));
        toast.error(r.message || t("candidatura.form.error"));
      }
    } catch (err) {
      toast.error(t("candidatura.form.error"));
    } finally {
      setLoading(false);
    }
  };

  const labelCls = "text-xs uppercase tracking-widest text-muted-foreground mb-2 block";

  return (
    <>
      <Seo title={t("candidatura.metaTitle")} description={t("candidatura.metaDescription")} path="/candidatura-professionisti" />

      <section className="container mx-auto py-20 md:py-28">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">{t("candidatura.kicker")}</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mt-4 text-balance">{t("candidatura.h1")}</h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{t("candidatura.subtitle")}</p>
        </div>

        <form onSubmit={onSubmit} className="mt-12 max-w-2xl space-y-5 p-8 rounded-2xl border border-border bg-card">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className={labelCls}>{t("candidatura.form.firstName")}</label>
              <Input required name="firstName" maxLength={100} className="bg-background border-border" />
            </div>
            <div>
              <label className={labelCls}>{t("candidatura.form.lastName")}</label>
              <Input required name="lastName" maxLength={100} className="bg-background border-border" />
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className={labelCls}>{t("candidatura.form.phone")}</label>
              <Input required type="tel" name="phone" maxLength={40} className="bg-background border-border" />
            </div>
            <div>
              <label className={labelCls}>{t("candidatura.form.email")}</label>
              <Input required type="email" name="email" maxLength={255} className="bg-background border-border" />
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className={labelCls}>{t("candidatura.form.profession")}</label>
              <Select required value={profession} onValueChange={setProfession}>
                <SelectTrigger className="bg-background border-border">
                  <SelectValue placeholder={t("candidatura.form.professionPlaceholder")} />
                </SelectTrigger>
                <SelectContent>
                  {PROFESSIONS.map((p) => (
                    <SelectItem key={p} value={p}>{t(`candidatura.form.professions.${p}`)}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className={labelCls}>{t("candidatura.form.city")}</label>
              <Input required name="city" maxLength={100} className="bg-background border-border" />
            </div>
          </div>
          <div>
            <label className={labelCls}>{t("candidatura.form.social")}</label>
            <Input name="social" maxLength={255} placeholder="https://instagram.com/..." className="bg-background border-border" />
          </div>
          <div>
            <label className={labelCls}>{t("candidatura.form.availability")}</label>
            <Select required value={availability} onValueChange={setAvailability}>
              <SelectTrigger className="bg-background border-border">
                <SelectValue placeholder="—" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">{t("candidatura.form.availabilityYes")}</SelectItem>
                <SelectItem value="no">{t("candidatura.form.availabilityNo")}</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className={labelCls}>{t("candidatura.form.documents")}</label>
            <Textarea name="documents" rows={4} maxLength={1000} placeholder={t("candidatura.form.documentsPlaceholder")} className="bg-background border-border resize-none" />
          </div>
          <Button type="submit" disabled={loading || !profession || !availability} className="w-full h-12 text-base">
            {loading ? "..." : t("candidatura.form.submit")}
          </Button>
        </form>

        {/* Consult banner */}
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noreferrer"
          onClick={() => track("cta_book_consult", { from: "candidatura_banner" })}
          className="mt-8 max-w-2xl flex flex-col sm:flex-row sm:items-center gap-4 p-6 rounded-2xl border border-border bg-card hover:border-foreground/40 transition-colors group"
        >
          <div className="flex-1">
            <h3 className="font-display text-lg font-semibold">{t("candidatura.consultBanner.title")}</h3>
            <p className="text-muted-foreground text-sm mt-1">{t("candidatura.consultBanner.body")}</p>
          </div>
          <span className="inline-flex items-center gap-2 text-sm shrink-0 group-hover:translate-x-1 transition-transform">
            {t("candidatura.consultBanner.cta")} <ArrowRight className="h-4 w-4" />
          </span>
        </a>
      </section>
    </>
  );
};

export default Candidatura;
