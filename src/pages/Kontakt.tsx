import { motion } from "framer-motion";
import { Phone, Mail, MapPin, User } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";

const offices = [
  {
    city: "Filipstadskontoret",
    address: "Albanogatan 2",
    postal: "682 30 Filipstad",
    contacts: [
      { role: "VD", name: "Erik Schönnberg", phone: "070-444 47 42" },
      { role: "Platschef", name: "Anton Magnusson", phone: "070-444 55 37" },
    ],
  },
  {
    city: "Örebrokontoret",
    address: "Skomaskinsgatan 6",
    postal: "702 27 Örebro",
    contacts: [
      { role: "Platschef", name: "Niklas Nydén", phone: "070-440 41 54" },
    ],
  },
];

const Kontakt = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageHero
        eyebrow="Kontakta oss"
        title="Hör av dig för en"
        highlight="kostnadsfri offert"
        description="Vi hjälper dig gärna med ditt byggprojekt. Kontakta oss idag för att diskutera dina idéer."
      />

      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {offices.map((office, i) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-gold"
              >
                <h3 className="text-xl font-semibold mb-6 text-gradient-gold">{office.city}</h3>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Adress</p>
                    <p className="text-muted-foreground text-sm">{office.address}</p>
                    <p className="text-muted-foreground text-sm">{office.postal}</p>
                  </div>
                </div>
                <div className="space-y-5">
                  {office.contacts.map((c) => (
                    <div key={c.name} className="border-t border-border pt-4">
                      <div className="flex items-center gap-2 mb-1">
                        <User className="w-4 h-4 text-primary" />
                        <p className="font-medium">{c.name}</p>
                      </div>
                      <p className="text-muted-foreground text-sm mb-2">{c.role}</p>
                      <a
                        href={`tel:${c.phone.replace(/[\s-]/g, "")}`}
                        className="inline-flex items-center gap-2 text-primary hover:underline text-sm"
                      >
                        <Phone className="w-4 h-4" />
                        {c.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12"
          >
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <p className="font-medium mb-1">E-post</p>
              <a href="mailto:info@esbyggservice.com" className="text-muted-foreground hover:text-primary transition-colors">
                info@esbyggservice.com
              </a>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <p className="font-medium mb-1">Faktureringsadress</p>
              <a href="mailto:faktura@esbyggservice.com" className="text-muted-foreground hover:text-primary transition-colors">
                faktura@esbyggservice.com
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-gold rounded-2xl p-8 md:p-12 text-center max-w-5xl mx-auto"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Redo att starta ditt projekt?
            </h3>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Kontakta oss idag för en kostnadsfri offert.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="xl" className="bg-background text-primary hover:bg-background/90" asChild>
                <a href="tel:0704444742"><Phone className="w-5 h-5" />Ring oss nu</a>
              </Button>
              <Button variant="default" size="xl" className="bg-background text-primary hover:bg-background/90" asChild>
                <a href="mailto:info@esbyggservice.com"><Mail className="w-5 h-5" />Skicka e-post</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Kontakt;
