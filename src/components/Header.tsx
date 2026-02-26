import { useState, useEffect } from "react";
import { Menu, X, Phone, Youtube, Instagram, Linkedin } from "lucide-react";
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
    setIsOpen(false);
    setTimeout(() => {
      document
        .getElementById(id.toLowerCase())
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
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
            <img src="/logo3.png" alt="Vaarahi Logo" className="h-12 w-22" />
            {/* <div className="hidden sm:block">
              <span className="font-heading font-bold text-lg text-foreground">
                VAARAHI
              </span>
              <span className="block text-[10px] tracking-widest text-muted-foreground -mt-1">
                CLOUD TECHNOLOGIES
              </span>
            </div> */}
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`text-sm font-medium transition-colors relative ${activeSection === item.toLowerCase()
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

            {/* ── Social Icons (brand SVGs) ── */}
            <div className="flex items-center gap-2 border-l border-border pl-4">

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@VaarahiCloudTechnologies"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ background: "rgba(255,0,0,0.12)", color: "#FF0000" }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,0,0,0.22)")}
                onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,0,0,0.12)")}
              >
                {/* Official YouTube play-button shape */}
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/vaarahi_gcp_data_engineer/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ background: "rgba(225,48,108,0.12)" }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(225,48,108,0.22)")}
                onMouseLeave={e => (e.currentTarget.style.background = "rgba(225,48,108,0.12)")}
              >
                {/* Instagram camera icon with gradient */}
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                  <defs>
                    <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f09433" />
                      <stop offset="25%" stopColor="#e6683c" />
                      <stop offset="50%" stopColor="#dc2743" />
                      <stop offset="75%" stopColor="#cc2366" />
                      <stop offset="100%" stopColor="#bc1888" />
                    </linearGradient>
                  </defs>
                  <path fill="url(#ig-grad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/vaarahi-cloud-technologis/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ background: "rgba(0,119,181,0.12)", color: "#0077B5" }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(0,119,181,0.22)")}
                onMouseLeave={e => (e.currentTarget.style.background = "rgba(0,119,181,0.12)")}
              >
                {/* Official LinkedIn 'in' logo */}
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/917893337796"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ background: "rgba(37,211,102,0.12)", color: "#25D366" }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(37,211,102,0.22)")}
                onMouseLeave={e => (e.currentTarget.style.background = "rgba(37,211,102,0.12)")}
              >
                <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 2C8.268 2 2 8.268 2 16c0 2.494.65 4.835 1.788 6.865L2 30l7.347-1.766A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2Z" fill="#25D366" />
                  <path d="M23.07 19.44c-.32-.16-1.9-.937-2.194-1.044-.294-.107-.508-.16-.722.16-.213.32-.828 1.044-.015 1.258.294.107 1.01.267 1.928 1.176.72.71 1.206 1.59 1.347 1.856.14.267-.015.427-.16.587-.32.32-.64.427-.96.587-.32.16-.534.107-.748-.054-.213-.16-.8-.96-1.014-1.12-.213-.16-.427-.213-.64-.054-.214.16-1.814 1.014-2.028 1.12-.213.107-.427.107-.694-.054-.32-.213-1.28-.96-2.455-2.135a9.63 9.63 0 0 1-1.92-2.988c-.213-.587-.054-.907.16-1.12.213-.213.427-.32.694-.48.267-.16.32-.267.48-.48.16-.213.054-.427-.054-.587-.107-.16-1.014-2.455-1.387-3.362-.374-.907-.748-.748-.96-.748h-.694c-.213 0-.587.054-.907.427-.32.374-1.227 1.2-1.227 2.935 0 1.74 1.28 3.415 1.44 3.628.16.214 2.508 3.842 6.082 5.39.85.374 1.52.587 2.028.747.854.267 1.628.24 2.24.16.694-.107 2.135-.855 2.455-1.696.32-.854.32-1.6.213-1.76-.107-.16-.32-.267-.64-.427Z" fill="#fff" />
                </svg>
              </a>

            </div>
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
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm font-medium text-left py-2 ${activeSection === item.toLowerCase()
                      ? "text-primary font-bold"
                      : "text-muted-foreground hover:text-primary"
                      }`}
                  >
                    {item}
                  </a>
                ))}

                <a
                  href="tel:+917893337796"
                  className="flex items-center gap-2 text-sm font-medium text-primary py-2"
                >
                  <Phone className="w-4 h-4" />
                  +91 7893337796
                </a>

                {/* Social Icons */}
                <div className="flex items-center gap-3 py-2">
                  {/* YouTube */}
                  <a
                    href="https://www.youtube.com/@VaarahiCloudTechnologies"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                    style={{ background: "rgba(255,0,0,0.12)", color: "#FF0000" }}
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/vaarahi_gcp_data_engineer/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                    style={{ background: "rgba(225,48,108,0.12)" }}
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                      <defs>
                        <linearGradient id="ig-grad-mob" x1="0%" y1="100%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#f09433" />
                          <stop offset="25%" stopColor="#e6683c" />
                          <stop offset="50%" stopColor="#dc2743" />
                          <stop offset="75%" stopColor="#cc2366" />
                          <stop offset="100%" stopColor="#bc1888" />
                        </linearGradient>
                      </defs>
                      <path fill="url(#ig-grad-mob)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/company/vaarahi-cloud-technologis/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                    style={{ background: "rgba(0,119,181,0.12)", color: "#0077B5" }}
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/917893337796"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                    style={{ background: "rgba(37,211,102,0.12)", color: "#25D366" }}
                  >
                    <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 2C8.268 2 2 8.268 2 16c0 2.494.65 4.835 1.788 6.865L2 30l7.347-1.766A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2Z" fill="#25D366" />
                      <path d="M23.07 19.44c-.32-.16-1.9-.937-2.194-1.044-.294-.107-.508-.16-.722.16-.213.32-.828 1.044-.015 1.258.294.107 1.01.267 1.928 1.176.72.71 1.206 1.59 1.347 1.856.14.267-.015.427-.16.587-.32.32-.64.427-.96.587-.32.16-.534.107-.748-.054-.213-.16-.8-.96-1.014-1.12-.213-.16-.427-.213-.64-.054-.214.16-1.814 1.014-2.028 1.12-.213.107-.427.107-.694-.054-.32-.213-1.28-.96-2.455-2.135a9.63 9.63 0 0 1-1.92-2.988c-.213-.587-.054-.907.16-1.12.213-.213.427-.32.694-.48.267-.16.32-.267.48-.48.16-.213.054-.427-.054-.587-.107-.16-1.014-2.455-1.387-3.362-.374-.907-.748-.748-.96-.748h-.694c-.213 0-.587.054-.907.427-.32.374-1.227 1.2-1.227 2.935 0 1.74 1.28 3.415 1.44 3.628.16.214 2.508 3.842 6.082 5.39.85.374 1.52.587 2.028.747.854.267 1.628.24 2.24.16.694-.107 2.135-.855 2.455-1.696.32-.854.32-1.6.213-1.76-.107-.16-.32-.267-.64-.427Z" fill="#fff" />
                    </svg>
                  </a>
                </div>

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