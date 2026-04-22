import logoImg from "@/assets/logo.png";

interface LogoProps {
  className?: string;
  showWordmark?: boolean;
}

export const Logo = ({ className = "", showWordmark = true }: LogoProps) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <img src={logoImg} alt="Glamro" className="h-8 w-8 object-contain shrink-0" />
    {showWordmark && (
      <span className="font-display text-xl font-bold tracking-tight">glamro</span>
    )}
  </div>
);
