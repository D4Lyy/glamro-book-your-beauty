import { useTranslation } from "react-i18next";
import { Apple } from "lucide-react";

interface AppStoreButtonsProps {
  className?: string;
  variant?: "default" | "compact";
}

export const AppStoreButtons = ({ className = "", variant = "default" }: AppStoreButtonsProps) => {
  const { t } = useTranslation();
  const isCompact = variant === "compact";

  const baseClass =
    "group inline-flex items-center gap-3 rounded-xl border border-foreground/20 bg-foreground text-background hover:bg-foreground/90 transition-colors duration-300 " +
    (isCompact ? "px-4 py-2.5" : "px-5 py-3.5");

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a href="#" aria-label={t("cta.appStore")} className={baseClass}>
        <Apple className={isCompact ? "h-5 w-5" : "h-6 w-6"} strokeWidth={1.5} />
        <span className="text-left">
          <span className="block text-[10px] uppercase tracking-wider opacity-70">{t("cta.comingSoon")}</span>
          <span className={`block font-medium ${isCompact ? "text-sm" : "text-base"}`}>App Store</span>
        </span>
      </a>
      <a href="#" aria-label={t("cta.playStore")} className={baseClass}>
        <svg className={isCompact ? "h-5 w-5" : "h-6 w-6"} viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.6 2.3c-.3.3-.5.8-.5 1.4v16.6c0 .6.2 1.1.5 1.4l.1.1L13 12.1v-.2L3.6 2.3zM16.8 15.3l-3.1-3.1v-.2l3.1-3.1.1.1 3.7 2.1c1 .6 1 1.6 0 2.2l-3.7 2zM13.7 12.1l3.2 3.2-9.7 5.5c-.7.4-1.3.4-1.7 0l8.2-8.7zM5.5 3.5c.4-.4 1-.4 1.7 0l9.7 5.5-3.2 3.1L5.5 3.5z"/>
        </svg>
        <span className="text-left">
          <span className="block text-[10px] uppercase tracking-wider opacity-70">{t("cta.comingSoon")}</span>
          <span className={`block font-medium ${isCompact ? "text-sm" : "text-base"}`}>Google Play</span>
        </span>
      </a>
    </div>
  );
};
