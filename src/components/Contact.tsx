import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefon",
    value: "08-XXX XX XX",
    link: "tel:+46XXXXXXXX",
  },
  {
    icon: Mail,
    title: "E-post",
    value: "info@esbyggservice.com",
    link: "mailto:info@esbyggservice.com",
  },
  {
    icon: MapPin,
    title: "Adress",
    value: "Stockholm, Sverige",
    link: "#",
  },
  {
    icon: Clock,
    title: "Öppettider",
    value: "Mån-Fre: 07:00-16:00",
    link: "#",
  },
];

const Contact = () => {
  return (
    <section id="kontakt" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
            Kontakta oss
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ring för en{" "}
            <span className="text-gradient-gold">kostnadsfri offert</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Vi hjälper dig gärna med ditt byggprojekt. Kontakta oss idag för att 
            diskutera dina idéer och få en kostnadsfri offert.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.title}
              href={info.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-gold"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <info.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-1">{info.title}</h3>
              <p className="text-muted-foreground text-sm">{info.value}</p>
            </motion.a>
          ))}
        </div>

        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-gold rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Redo att starta ditt projekt?
          </h3>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Kontakta oss idag för att få en kostnadsfri offert. Vi ser fram emot 
            att hjälpa dig förverkliga dina byggdrömmar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="xl"
              className="bg-background text-primary hover:bg-background/90"
            >
              <Phone className="w-5 h-5" />
              Ring oss nu
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Mail className="w-5 h-5" />
              Skicka e-post
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
