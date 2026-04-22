import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Instagram, Linkedin, Facebook, Youtube } from "lucide-react";
import { FaXTwitter, FaTiktok } from "react-icons/fa6";
import { Logo } from "./Logo";
import { AppStoreButtons } from "./AppStoreButtons";

export const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-32 relative">
      <div className="container mx-auto py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="space-y-6">
            <Logo />
            <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
              {t("footer.tagline")}
            </p>
            <AppStoreButtons variant="compact" />
          </div>

          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground">{t("footer.product")}</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/clienti" className="hover:text-foreground transition-colors text-muted-foreground">{t("nav.clients")}</Link></li>
              <li><Link to="/professionisti" className="hover:text-foreground transition-colors text-muted-foreground">{t("nav.pros")}</Link></li>
              <li><Link to="/faq" className="hover:text-foreground transition-colors text-muted-foreground">{t("nav.faq")}</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground">{t("footer.company")}</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/chi-siamo" className="hover:text-foreground transition-colors text-muted-foreground">{t("nav.about")}</Link></li>
              <li><Link to="/contatti" className="hover:text-foreground transition-colors text-muted-foreground">{t("nav.contact")}</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground">{t("footer.legal")}</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/privacy" className="hover:text-foreground transition-colors text-muted-foreground">{t("footer.privacy")}</Link></li>
              <li><Link to="/terms" className="hover:text-foreground transition-colors text-muted-foreground">{t("footer.terms")}</Link></li>
              <li><Link to="/cookie-policy" className="hover:text-foreground transition-colors text-muted-foreground">{t("footer.cookies")}</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {year} Glamro. {t("footer.rights")}
          </p>
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-xs text-muted-foreground mr-1">{t("footer.follow")}</span>
            <a href="#" aria-label="Instagram" className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Facebook" className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" aria-label="X" className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors">
              <FaXTwitter className="h-4 w-4" />
            </a>
            <a href="#" aria-label="TikTok" className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors">
              <FaTiktok className="h-4 w-4" />
            </a>
            <a href="#" aria-label="YouTube" className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors">
              <Youtube className="h-4 w-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
