import { motion } from "framer-motion";
import { Building2, Layers, Bath, SquareStack, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Takarbeten",
    description: "Att ha ett bra tak över huvudet är avgörande. Med omsorg och noggrant utvalt material hanterar vi din takläggning och takservice, så att ditt tak blir det bästa det kan vara. Kontakta oss för planering av just ditt tak.",
  },
  {
    icon: Layers,
    title: "Golvläggning & Specialprojekt",
    description: "Ett nytt golv är den mest grundliga uppgraderingen man kan unna sig. Vi har skickliga hantverkare som kostnadseffektivt anpassar golv efter olika planlösningar och husmodeller.",
  },
  {
    icon: Bath,
    title: "Badrum",
    description: "Ett rent och välorganiserat badrum är A och O. Från kakel och inredning till våtrumssystem – VVS-arbeten kräver precision och finess. Kontakta oss för badrumsrenoveringar och nybyggen.",
  },
  {
    icon: SquareStack,
    title: "Fönster",
    description: "Söker du fönsterbyten? Lämna jobbet i säkra händer hos oss. Välj från vårt utbud och se till att din vy blir exakt som du vill ha den.",
  },
  {
    icon: ShieldCheck,
    title: "Försäkringsarbeten & ROT-avdrag",
    description: "Som privatperson får du göra avdrag på 30% av arbetskostnaden upp till 50 000 kr per person och år. Läs mer på Skatteverkets hemsida eller kontakta oss med frågor.",
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

        {/* Top 3 services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {services.slice(0, 3).map((service, index) => (
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

        {/* Bottom 2 services - 50% each */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.slice(3).map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
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
