import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import logo from "@/assets/logo.png";

const defaultNavItems = [
  { label: "Hem", href: "/" },
  { label: "Tjänster", href: "/tjanster" },
  { label: "Referenser", href: "/referenser" },
  { label: "Om Oss", href: "/om-oss" },
  { label: "Kontakt", href: "/kontakt" },
];

// Map any legacy hash hrefs from the CMS to subpage routes
const hashToRoute: Record<string, string> = {
  "#hem": "/",
  "#tjanster": "/tjanster",
  "#referenser": "/referenser",
  "#om-oss": "/om-oss",
  "#kontakt": "/kontakt",
};

const normalizeHref = (href: string) => hashToRoute[href] ?? href;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navItems, setNavItems] = useState(defaultNavItems);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const fetchMenuItems = async () => {
      const { data, error } = await supabase
        .from("menu_items")
        .select("*")
        .eq("is_visible", true)
        .order("sort_order");

      if (!error && data && data.length > 0) {
        setNavItems(
          data.map((item) => ({
            label: item.label,
            href: normalizeHref(item.href),
          }))
        );
      }
    };
    fetchMenuItems();
  }, []);

  const renderLink = (item: { label: string; href: string }, className: string, onClick?: () => void) => {
    if (item.href.startsWith("/")) {
      return (
        <Link key={item.href} to={item.href} className={className} onClick={onClick}>
          {item.label}
        </Link>
      );
    }
    return (
      <a key={item.href} href={item.href} className={className} onClick={onClick}>
        {item.label}
      </a>
    );
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="ES Byggservice AB" className="h-10 md:h-12 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) =>
              renderLink(
                item,
                "text-foreground/80 hover:text-primary transition-colors duration-300 text-sm font-medium tracking-wide"
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:0704444742" className="flex items-center gap-2 text-primary">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">070-444 47 42</span>
            </a>
            <Button variant="gold" size="lg" asChild>
              <a href="mailto:info@esbyggservice.com">Kostnadsfri offert</a>
            </Button>
            <a href="/auth" className="text-muted-foreground hover:text-primary transition-colors p-2" title="Admin">
              <Settings className="w-5 h-5" />
            </a>
          </div>

          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navItems.map((item) =>
                renderLink(
                  item,
                  "text-foreground/80 hover:text-primary transition-colors py-2 text-lg",
                  () => setIsMobileMenuOpen(false)
                )
              )}
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
