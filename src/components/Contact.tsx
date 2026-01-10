import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const locations = [
  {
    city: "Filipstad",
    address: "Albanogatan 2",
    postalCode: "682 30 Filipstad",
    phone: "070-444 47 42",
  },
  {
    city: "Örebro",
    address: "Skomaskinsgatan 6",
    postalCode: "702 27 Örebro",
    phone: "070-440 41 54",
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

        {/* Location Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
          {locations.map((location, index) => (
            <motion.div
              key={location.city}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-gold"
            >
              <h3 className="text-xl font-semibold mb-6 text-gradient-gold">{location.city}</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Adress</p>
                    <p className="text-muted-foreground text-sm">{location.address}</p>
                    <p className="text-muted-foreground text-sm">{location.postalCode}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Telefon</p>
                    <a 
                      href={`tel:${location.phone.replace(/-/g, "")}`}
                      className="text-muted-foreground text-sm hover:text-primary transition-colors"
                    >
                      {location.phone}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Email Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-card border border-border rounded-xl p-6 max-w-md mx-auto mb-12 text-center hover:border-primary/50 transition-all duration-300"
        >
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Mail className="w-6 h-6 text-primary" />
          </div>
          <p className="font-medium mb-1">E-post</p>
          <a 
            href="mailto:info@esbyggservice.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            info@esbyggservice.com
          </a>
        </motion.div>

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
              variant="default"
              size="xl"
              className="bg-background text-primary hover:bg-background/90"
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
