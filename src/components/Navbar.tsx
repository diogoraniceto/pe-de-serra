import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo-pe-de-serra.png";
const navLinks = [
  { label: "Início", href: "/" },
  { label: "Nossos cafés", href: "/cafes" },
  { label: "O Ritual", href: "/ritual" },
  { label: "Sobre", href: "/sobre" },
  { label: "Dúvidas", href: "/fac" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleClick = (href: string) => {
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 pointer-events-none ${
        scrolled 
          ? "bg-serra-black/80 backdrop-blur-lg border-b border-white/5 py-1" 
          : "bg-transparent py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between pointer-events-auto">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Pé de Serra - Torra de Café"
            className="h-20 md:h-24 w-auto -mt-2 -mb-2"
          />
        </Link>

        {/* Menu toggle - todas as telas */}
        <button
          className="text-primary-foreground"
          onClick={() => setIsOpen(true)}
          aria-label="Menu"
        >
          <Menu size={32} />
        </button>
      </div>

      {/* Mobile menu (Drawer) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-serra-black/60 backdrop-blur-sm z-[60] pointer-events-auto"
              onClick={() => setIsOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4, ease: "easeOut" }}
              className="fixed top-0 right-0 bottom-0 w-[300px] h-[100dvh] bg-serra-black/60 backdrop-blur-xl border-l border-white/10 z-[70] shadow-2xl flex flex-col pointer-events-auto"
            >
              <div className="flex justify-end p-6">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-primary-foreground/70 hover:text-serra-gold transition-colors p-2"
                >
                  <X size={32} />
                </button>
              </div>

              <div className="flex flex-col gap-8 px-10 pt-12">
                {navLinks.map((link) =>
                  link.href.startsWith("#") ? (
                    <button
                      key={link.label}
                      onClick={() => handleClick(link.href)}
                      className="text-primary-foreground/90 hover:text-serra-gold transition-colors text-[22px] font-body font-light text-left"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      key={link.label}
                      to={link.href}
                      className="text-primary-foreground/90 hover:text-serra-gold transition-colors text-[22px] font-body font-light"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
