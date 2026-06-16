import { Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img src={logo} alt="ES Byggservice AB" className="h-10 w-auto mb-4" />
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Vi är specialister på alla typer av byggprojekt – från nybyggnation och 
              renovering till försäkringsskador. Kvalitet och nöjd kund är vår prioritet.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6">Snabblänkar</h4>
            <ul className="space-y-3">
              {[
                { label: "Hem", href: "/" },
                { label: "Tjänster", href: "/tjanster" },
                { label: "Referenser", href: "/referenser" },
                { label: "Om Oss", href: "/om-oss" },
                { label: "Kontakt", href: "/kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
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
                  href="tel:0704444742"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  070-444 47 42
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
