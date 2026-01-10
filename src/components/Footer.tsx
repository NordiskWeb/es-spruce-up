import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <span className="text-gradient-gold text-2xl font-bold tracking-wide font-serif">
              ES BYGGSERVICE AB
            </span>
            <p className="text-muted-foreground mt-4 max-w-md leading-relaxed">
              Vi är specialister på alla typer av byggprojekt – från nybyggnation och 
              renovering till försäkringsskador. Kvalitet och nöjd kund är vår prioritet.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6">Snabblänkar</h4>
            <ul className="space-y-3">
              {["Hem", "Tjänster", "Referenser", "Om Oss", "Kontakt"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6">Kontakt</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+46XXXXXXXX"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  08-XXX XX XX
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@esbyggservice.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  info@esbyggservice.com
                </a>
              </li>
              <li>
                <span className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  Stockholm, Sverige
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} ES Byggservice AB. Alla rättigheter förbehållna.
          </p>
          <p className="text-muted-foreground text-sm">
            Del av Circura
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
