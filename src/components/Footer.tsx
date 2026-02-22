import { Youtube, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-primary-foreground/80 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/Logo.png" alt="Vaarahi Logo" className="h-15 w-20" />

              <div>
          <span className="font-heading font-bold text-primary-foreground">VAARAHI</span>
          <span className="block text-[9px] tracking-widest text-primary-foreground/50 -mt-0.5">CLOUD TECHNOLOGIES</span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/50 leading-relaxed">
              India's No.1 GCP Data Engineering Institute. Shaping careers through expert-driven, hands-on cloud training.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-primary-foreground mb-4 text-sm">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["Home", "About", "Services", "Gallery", "Contact"].map((item) => (
          <button
            key={item}
            onClick={() => scrollTo(item.toLowerCase())}
            className="text-sm text-primary-foreground/50 hover:text-primary transition-colors text-left"
          >
            {item}
          </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-primary-foreground mb-4 text-sm">Follow Us</h4>
            <div className="flex flex-col gap-2">
              <a href="https://www.youtube.com/@VaarahiCloudTechnologies" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-primary transition-colors flex items-center gap-2">
                <Youtube className="h-5 w-5" />
                YouTube
              </a>
              <a href="https://www.instagram.com/vaarahi_gcp_data_engineer/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-primary transition-colors flex items-center gap-2">
                <Instagram className="h-5 w-5" />
                Instagram
              </a>
              <a href="https://www.linkedin.com/company/vaarahi-cloud-technologis/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-primary transition-colors flex items-center gap-2">
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 text-center">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Vaarahi Cloud Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
