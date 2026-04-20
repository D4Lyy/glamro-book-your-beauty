import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = [
  { code: "it", label: "Italiano" },
  { code: "en", label: "English" },
];

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const current = languages.find((l) => l.code === i18n.language.split("-")[0]) ?? languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors">
        <Globe className="h-3.5 w-3.5" />
        <span className="font-medium">{current.code.toUpperCase()}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[140px]">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => i18n.changeLanguage(lang.code)}
            className={lang.code === current.code ? "bg-accent" : ""}
          >
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
