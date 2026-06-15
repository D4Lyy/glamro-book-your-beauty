import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type Variant = "default" | "outline" | "secondary";

interface BaseProps {
  label: string;
  event: string;
  eventParams?: Record<string, unknown>;
  variant?: Variant;
  size?: "default" | "lg";
  className?: string;
}

/** Internal navigation CTA with GA4 tracking. */
export const CtaLink = ({ to, label, event, eventParams, variant = "default", size = "lg", className }: BaseProps & { to: string }) => (
  <Button asChild variant={variant} size={size} className={cn(className)}>
    <Link to={to} onClick={() => track(event, eventParams)}>
      {label}
    </Link>
  </Button>
);

/** External link CTA with GA4 tracking. */
export const CtaAnchor = ({ href, label, event, eventParams, variant = "default", size = "lg", className }: BaseProps & { href: string }) => (
  <Button asChild variant={variant} size={size} className={cn(className)}>
    <a href={href} target="_blank" rel="noopener noreferrer" onClick={() => track(event, eventParams)}>
      {label}
    </a>
  </Button>
);
