import { motion } from "framer-motion";
import { ReactNode, useEffect } from "react";

interface LegalPageProps {
  kicker: string;
  title: string;
  children: ReactNode;
}

export const LegalPage = ({ kicker, title, children }: LegalPageProps) => {
  useEffect(() => {
    const previous = document.title;
    document.title = `${title} — Glamro`;
    return () => {
      document.title = previous;
    };
  }, [title]);

  return (
  <div className="container mx-auto pt-32 pb-24">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-3xl"
    >
      {kicker && (
        <span className="inline-block text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">
          — {kicker}
        </span>
      )}
      <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-balance">
        {title}
      </h1>
    </motion.div>
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="prose prose-invert max-w-3xl mt-16
        prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight
        prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
        prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
        prose-p:text-muted-foreground prose-p:leading-relaxed
        prose-li:text-muted-foreground prose-li:leading-relaxed
        prose-strong:text-foreground
        prose-a:text-foreground prose-a:underline prose-a:underline-offset-4 hover:prose-a:opacity-70
        prose-ul:my-4"
    >
      {children}
    </motion.article>
  </div>
  );
};
