interface LogoProps {
  className?: string;
  showWordmark?: boolean;
}

export const Logo = ({ className = "", showWordmark = true }: LogoProps) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <svg viewBox="0 0 64 64" className="h-8 w-8" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Glamro">
      {/* House outline with scissors inside */}
      <path
        d="M10 28 L32 8 L54 28 V54 H10 Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* Scissors blades crossing */}
      <path
        d="M24 22 L40 46 M40 22 L24 46"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Scissor handles (rings) */}
      <circle cx="22" cy="49" r="4" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="42" cy="49" r="4" stroke="currentColor" strokeWidth="2.5" />
    </svg>
    {showWordmark && (
      <span className="font-display text-xl font-bold tracking-tight">glamro</span>
    )}
  </div>
);
