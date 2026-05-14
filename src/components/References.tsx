import { motion } from "framer-motion";
import refFonster from "@/assets/ref-fonster.jpg";
import refRenovering from "@/assets/ref-renovering.jpg";
import refBadrum from "@/assets/ref-badrum.jpg";

const projects = [
  {
    image: refFonster,
    title: "Fönster",
    category: "Fönsterarbete",
  },
  {
    image: refRenovering,
    title: "Renovering",
    category: "Renovering",
  },
  {
    image: refBadrum,
    title: "Badrum",
    category: "Badrumsrenovering",
  },
];

const References = () => {
  return (
    <section id="referenser" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
              Våra projekt
            </span>
            <h2 className="text-3xl md:text-5xl font-bold">
              Se våra{" "}
              <span className="text-gradient-gold">referenser</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md mt-4 md:mt-0">
            Med vår expertis och vision för prydliga och välvårdade byggen kan du 
            uppgradera ditt hem.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-primary font-medium flex items-center gap-2">
                    Se projekt <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
              <span className="text-primary text-sm font-medium uppercase tracking-wide">
                {project.category}
              </span>
              <h3 className="text-xl font-semibold mt-1">{project.title}</h3>
              <p className="text-muted-foreground text-sm">{project.location}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button variant="goldOutline" size="lg">
            Se alla projekt
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default References;
