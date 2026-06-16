import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import refFonster from "@/assets/ref-fonster.jpg";
import refRenovering from "@/assets/ref-renovering.jpg";
import refBadrum from "@/assets/ref-badrum.jpg";

const categories = [
  {
    title: "Fönster",
    description: "Före- och efterbilder av fönsterbyte hos kund.",
    images: [refFonster, refFonster, refFonster],
  },
  {
    title: "Renovering",
    description: "Renovering av gillestuga – golv, väggar och tak.",
    images: [refRenovering, refRenovering, refRenovering],
  },
  {
    title: "Badrum",
    description: "Nygjorda badrum med kakel & klinkers.",
    images: [refBadrum, refBadrum, refBadrum],
  },
];

const Referenser = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageHero
        eyebrow="Våra projekt"
        title="Se våra"
        highlight="referenser"
        description="Med vår expertis och vision för prydliga och välvårdade byggen kan du uppgradera ditt hem – från tak och golvläggning till badrum och mycket mer."
      />

      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 space-y-20">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8">
                <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">
                  Kategori {ci + 1}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">{cat.title}</h2>
                <p className="text-muted-foreground max-w-2xl">{cat.description}</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.images.map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative overflow-hidden rounded-xl aspect-[4/3] group"
                  >
                    <img
                      src={img}
                      alt={`${cat.title} ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Referenser;
