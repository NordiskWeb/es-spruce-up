import { motion } from "framer-motion";
import { Home, Hammer, ShieldCheck, Paintbrush, Bath, Building2 } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Nybyggnation",
    description: "Vi bygger ditt drömhem från grunden med högsta kvalitet och precision.",
  },
  {
    icon: Hammer,
    title: "Renovering",
    description: "Komplett renovering av villor, lägenheter och kommersiella lokaler.",
  },
  {
    icon: ShieldCheck,
    title: "Försäkringsskador",
    description: "Expert på försäkringsarbeten med snabb och professionell hantering.",
  },
  {
    icon: Bath,
    title: "Badrumsrenovering",
    description: "Moderna badrum med certifierade plattsättare och rörmokare.",
  },
  {
    icon: Paintbrush,
    title: "Måleri",
    description: "Invändig och utvändig målning med kvalitetsprodukter.",
  },
  {
    icon: Building2,
    title: "Takarbeten",
    description: "Takrenovering, takomläggning och takläggning av alla typer.",
  },
];

const Services = () => {
  return (
    <section id="tjanster" className="section-padding bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
            Våra tjänster
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Komplett byggservice för{" "}
            <span className="text-gradient-gold">alla behov</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Våra utbildade snickare erbjuder tjänster av högsta kvalitet – vare sig du 
            söker hjälp med att bygga nytt eller bygga om.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-gold"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
