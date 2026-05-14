import { motion } from "framer-motion";
import { Users, Award, Clock, ThumbsUp } from "lucide-react";

const stats = [
  { icon: Users, value: "39+", label: "Anställda" },
  { icon: Award, value: "15+", label: "År i branschen" },
  { icon: Clock, value: "500+", label: "Avslutade projekt" },
  { icon: ThumbsUp, value: "100%", label: "Nöjda kunder" },
];

const About = () => {
  return (
    <section id="om-oss" className="section-padding bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
              Om företaget
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Kvalitet och nöjd kund{" "}
              <span className="text-gradient-gold">i fokus</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                ES Byggservice AB är verksam inom alla typer av byggprojekt, såsom 
                försäkringsskador, nybyggnation och renovering. Vi har många års 
                erfarenhet i byggbranschen och hjälper dig gärna genom hela ditt projekt.
              </p>
              <p>
                Vi samarbetar med ett urval av mattläggare, rörmokare, elektriker och 
                plattsättare för att uppnå ett gediget slutresultat. Kvalitet och nöjd 
                kund står i fokus för oss.
              </p>
              <p>
                Ring eller maila för kostnadsfri offert. Vi ger även våra kunder service 
                i form av råd om försäkringsarbeten och rotavdrag.
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gradient-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
