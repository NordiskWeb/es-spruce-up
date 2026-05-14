import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import logo from "@/assets/logo.png";

interface MenuItem {
  id: string;
  label: string;
  href: string;
  sort_order: number;
  is_visible: boolean;
}

const defaultNavItems = [
  { label: "Hem", href: "#hem" },
  { label: "Tjänster", href: "#tjanster" },
  { label: "Referenser", href: "#referenser" },
  { label: "Om Oss", href: "#om-oss" },
  { label: "Kontakt", href: "#kontakt" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navItems, setNavItems] = useState(defaultNavItems);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const fetchMenuItems = async () => {
      const { data, error } = await supabase
        .from('menu_items')
        .select('*')
        .eq('is_visible', true)
        .order('sort_order');
      
      if (!error && data && data.length > 0) {
        setNavItems(data.map(item => ({
          label: item.label,
          href: item.href,
        })));
      }
    };

    fetchMenuItems();
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#hem" className="flex items-center">
            <img src={logo} alt="ES Byggservice AB" className="h-10 md:h-12 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 text-sm font-medium tracking-wide"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:0704444742" className="flex items-center gap-2 text-primary">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">070-444 47 42</span>
            </a>
            <Button variant="gold" size="lg" asChild>
              <a href="mailto:info@esbyggservice.com">Kostnadsfri offert</a>
            </Button>
            <a 
              href="/auth" 
              className="text-muted-foreground hover:text-primary transition-colors p-2"
              title="Admin"
            >
              <Settings className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground/80 hover:text-primary transition-colors py-2 text-lg"
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="/auth" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-muted-foreground hover:text-primary transition-colors py-2 text-lg flex items-center gap-2"
              >
                <Settings className="w-5 h-5" />
                Admin
              </a>
              <Button variant="gold" size="lg" className="mt-4" asChild>
                <a href="mailto:info@esbyggservice.com">Kostnadsfri offert</a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
