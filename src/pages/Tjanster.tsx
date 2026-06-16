import { motion } from "framer-motion";
import { Building2, Layers, Bath, SquareStack, ShieldCheck, Hammer, Phone, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Building2,
    title: "Takarbeten",
    description:
      "Att ha ett bra tak över huvudet är ett måste. Med omsorg och noggrant utvalt material hanterar vi din takläggning och takservice, så att ditt tak blir det bästa det kan vara.",
  },
  {
    icon: Layers,
    title: "Golvläggning & Specialprojekt",
    description:
      "Ett nytt golv är den mest grundliga uppgraderingen man kan unna sig. Vi har skickliga hantverkare som kostnadseffektivt anpassar golv efter olika planlösningar.",
  },
  {
    icon: Bath,
    title: "Badrum",
    description:
      "Från kakel och inredning till våtrumssystem. VVS-arbeten kräver precision och finess – kontakta oss för badrumsrenoveringar och nybyggen.",
  },
  {
    icon: SquareStack,
    title: "Fönster",
    description:
      "Söker du fönsterbyten? Lämna jobbet i säkra händer hos oss. Välj från vårt utbud och se till att din vy blir exakt som du vill ha den.",
  },
  {
    icon: Hammer,
    title: "Nybyggnation & Renovering",
    description:
      "Vare sig du söker hjälp med att bygga nytt eller bygga om så står vi till tjänst. Vi hjälper dig genom hela projektet, från idé till färdig lösning.",
  },
  {
    icon: ShieldCheck,
    title: "Försäkringsarbeten & ROT-avdrag",
    description:
      "Som privatperson får du göra avdrag på 30% av arbetskostnaden upp till 50 000 kr per person och år. Vi hjälper dig även med försäkringsärenden.",
  },
];

const Tjanster = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageHero
        eyebrow="Våra tjänster"
        title="Komplett byggservice för"
        highlight="alla behov"
        description="Våra utbildade snickare erbjuder tjänster av högsta kvalitet – från små reparationer till stora nybyggnationer."
      />

      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-gold"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-gold rounded-2xl p-8 md:p-12 text-center mt-16"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Behöver du hjälp med ditt projekt?
            </h3>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Vi erbjuder alltid kostnadsfria offerter. Tveka inte att höra av dig.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="xl" className="bg-background text-primary hover:bg-background/90" asChild>
                <a href="tel:0704444742"><Phone className="w-5 h-5" />Ring oss nu</a>
              </Button>
              <Button variant="default" size="xl" className="bg-background text-primary hover:bg-background/90" asChild>
                <a href="mailto:info@esbyggservice.com"><Mail className="w-5 h-5" />Begär offert</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tjanster;
