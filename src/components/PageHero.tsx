import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.webp";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
}

const PageHero = ({ eyebrow, title, highlight, description }: PageHeroProps) => {
  return (
    <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-4"
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          {title}{" "}
          {highlight && <span className="text-gradient-gold">{highlight}</span>}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
