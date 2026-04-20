import { motion } from "framer-motion";

interface Props {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export const SectionHeading = ({ kicker, title, subtitle, align = "left" }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
  >
    {kicker && (
      <span className="inline-block text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">
        — {kicker}
      </span>
    )}
    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-balance">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-6 text-lg text-muted-foreground text-balance leading-relaxed">
        {subtitle}
      </p>
    )}
  </motion.div>
);
