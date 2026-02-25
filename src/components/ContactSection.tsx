import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-section-alt">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-2">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
            Contact Us
          </h2>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch max-w-6xl mx-auto">

          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-10 border border-border shadow-sm flex flex-col justify-between"
          >
            <div>
              <h3 className="font-heading font-bold text-2xl text-foreground mb-6">
                Let's Start Your Journey
              </h3>

              <p className="text-muted-foreground mb-10 leading-relaxed">
                Ready to become a job-ready GCP Data Engineer? Reach out to us and take the first step toward transforming your career.
              </p>

              <div className="space-y-6">

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Phone / WhatsApp</p>
                    <p className="font-semibold text-foreground">
                      +91 7893337796
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="font-semibold text-foreground break-all">
                      training@vaarahicloudtechnologies.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="font-semibold text-foreground">
                      Kukatpally, Near JNTU, Hyderabad
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Right Side - Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-6 border border-border shadow-sm flex flex-col"
          >
            <h3 className="font-heading font-bold text-xl text-foreground mb-6 text-center">
              Find Us on the Map
            </h3>

            <div className="rounded-xl overflow-hidden border border-border flex-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1620755783306!2d78.39233487522291!3d17.497765999615808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91e9d98777e9%3A0x8d4463780d9ae47b!2sVaarahi%20Cloud%20Technologies!5e1!3m2!1sen!2sin!4v1771606851223!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vaarahi Location"
                className="min-h-[350px]"
              />
            </div>

            <div className="text-center mt-6">
              <a
                href="https://www.google.com/maps/place/Vaarahi+Cloud+Technologies"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
              >
                <MapPin className="w-4 h-4" />
                Open in Google Maps
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;