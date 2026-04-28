import { useTranslation } from "react-i18next";
import { BsApple, BsGooglePlay } from "react-icons/bs";

interface AppStoreButtonsProps {
  className?: string;
  variant?: "default" | "compact";
  kind?: "client" | "pro";
}

export const AppStoreButtons = ({ className = "", variant = "default", kind = "client" }: AppStoreButtonsProps) => {
  const { t } = useTranslation();
  const isCompact = variant === "compact";
  const label = kind === "pro" ? t("cta.proApp") : t("cta.clientApp");
  const appleClientLink = "#"; // Placeholder, replace with actual link when available 
  const googleClientLink = "#"; // Placeholder, replace with actual link when available 
  const appleProLink = "#"; // Placeholder, replace with actual link when available 
  const googleProLink = "#"; // Placeholder, replace with actual link when available

  const baseClass =
    "group inline-flex items-center gap-3 rounded-xl border border-foreground/20 bg-foreground text-background hover:bg-foreground/90 transition-colors duration-300 " +
    (isCompact ? "px-4 py-2.5" : "px-5 py-3.5");

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a href={kind === "pro" ? appleProLink : appleClientLink} aria-label={t("cta.appStore")} className={baseClass}>
        <BsApple className={isCompact ? "h-5 w-5" : "h-6 w-6"} />
        <span className="text-left">
          <span className="block text-[10px] uppercase tracking-wider opacity-70">{label}</span>
          <span className={`block font-medium ${isCompact ? "text-sm" : "text-base"}`}>App Store</span>
        </span>
      </a>
      <a href={kind === "pro" ? googleProLink : googleClientLink} aria-label={t("cta.playStore")} className={baseClass}>
        <BsGooglePlay className={isCompact ? "h-5 w-5" : "h-6 w-6"} />
        <span className="text-left">
          <span className="block text-[10px] uppercase tracking-wider opacity-70">{label}</span>
          <span className={`block font-medium ${isCompact ? "text-sm" : "text-base"}`}>Google Play</span>
        </span>
      </a>
    </div>
  );
};
