import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  "Home",
  "About",
  "Services",
  "Testimonials",
  "Gallery",
  "Contact",
];

const FORM_LINK =
  "https://docs.google.com/forms/d/e/1FAIpQLSeasmTZ3wOn0aMDz-A6fFGVKu-U2rac4qPAdkAaPrclJj7z3w/viewform";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.toLowerCase());
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    el?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      

      {/* Main Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background">
        <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">

          {/* Logo */}
          <button
            onClick={() => scrollTo("home")}
            className="flex items-center gap-2"
          >
            <img src="/bgmlesslogo.png" alt="Vaarahi Logo" className="h-15 w-20" />
            <div className="hidden sm:block">
              <span className="font-heading font-bold text-lg text-foreground">
                VAARAHI
              </span>
              <span className="block text-[10px] tracking-widest text-muted-foreground -mt-1">
                CLOUD TECHNOLOGIES
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`text-sm font-medium transition-colors relative ${
                  activeSection === item.toLowerCase()
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {item}
                {activeSection === item.toLowerCase() && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                  />
                )}
              </button>
            ))}

            <a
              href="tel:+917893337796"
              className="flex items-center gap-1.5 text-sm font-medium text-primary"
            >
              <Phone className="w-3.5 h-3.5" />
              +91 7893337796
            </a>

            <a
              href={FORM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Enroll Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background border-t border-border"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollTo(item)}
                    className={`text-sm font-medium text-left py-2 ${
                      activeSection === item.toLowerCase()
                        ? "text-primary font-bold"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    {item}
                  </button>
                ))}

                <a
                  href="tel:+917893337796"
                  className="flex items-center gap-2 text-sm font-medium text-primary py-2"
                >
                  <Phone className="w-4 h-4" />
                  +91 7893337796
                </a>

                <a
                  href={FORM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold w-full text-center"
                >
                  Enroll Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;