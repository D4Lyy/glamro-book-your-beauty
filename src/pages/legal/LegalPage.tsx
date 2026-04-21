import { motion } from "framer-motion";
import { ReactNode } from "react";
import { SectionHeading } from "@/components/SectionHeading";

interface LegalPageProps {
  kicker: string;
  title: string;
  children: ReactNode;
}

export const LegalPage = ({ kicker, title, children }: LegalPageProps) => (
  <div className="container mx-auto pt-32 pb-24">
    <SectionHeading kicker={kicker} title={title} />
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
