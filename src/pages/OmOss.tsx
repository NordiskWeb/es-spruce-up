import { motion } from "framer-motion";
import { Users, Award, Clock, ThumbsUp, MapPin, Phone, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Users, value: "39+", label: "Anställda" },
  { icon: Award, value: "15+", label: "År i branschen" },
  { icon: Clock, value: "500+", label: "Avslutade projekt" },
  { icon: ThumbsUp, value: "100%", label: "Nöjda kunder" },
];

const OmOss = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageHero
        eyebrow="Om företaget"
        title="Det lilla byggföretaget med det"
        highlight="stora drivet"
        description="Vi är 39 anställda med säte i Filipstad och Örebro – och utför arbeten i hela mellansverige."
      />

      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
                ES Byggservice
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Kvalitet och nöjd kund <span className="text-gradient-gold">i fokus</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  ES Byggservice AB är verksam inom alla typer av byggprojekt – såsom
                  försäkringsskador, nybyggnation och renovering. Vi har många års erfarenhet
                  i byggbranschen och hjälper dig gärna genom hela ditt projekt.
                </p>
                <p>
                  Vi samarbetar med ett urval av mattläggare, rörmokare, elektriker och
                  plattsättare för att uppnå ett gediget slutresultat. Våra tjänster omfattar
                  allt från små till stora projekt och det viktigaste för oss är nöjd kund.
                </p>
                <p>
                  Vi erbjuder alltid kostnadsfria offerter, tveka inte att kontakta oss.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button variant="gold" size="lg" asChild>
                  <a href="tel:0704444742"><Phone className="w-4 h-4" />Ring oss nu</a>
                </Button>
                <Button variant="goldOutline" size="lg" asChild>
                  <a href="mailto:info@esbyggservice.com"><Mail className="w-4 h-4" />Begär offert</a>
                </Button>
              </div>
            </motion.div>

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

      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
              Våra kontor
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Vi finns i <span className="text-gradient-gold">Filipstad & Örebro</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { city: "Filipstad", address: "Albanogatan 2", postal: "682 30 Filipstad" },
              { city: "Örebro", address: "Skomaskinsgatan 6", postal: "702 27 Örebro" },
            ].map((c, i) => (
              <motion.div
                key={c.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-8 text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gradient-gold">{c.city}</h3>
                <p className="text-muted-foreground">{c.address}</p>
                <p className="text-muted-foreground">{c.postal}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OmOss;
