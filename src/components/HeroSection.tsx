import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: "830+", label: "Students Placed" },
  { value: "47+", label: "Batches Completed" },
  { value: "79%", label: "Success Rate" },
  { value: "21+", label: "Years IT Experience" },
  { value: "13+", label: "Years Training Experience" },
];

const FORM_LINK =
  "https://docs.google.com/forms/d/e/1FAIpQLSeasmTZ3wOn0aMDz-A6fFGVKu-U2rac4qPAdkAaPrclJj7z3w/viewform";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-hero-overlay/85" />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-28">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-accent font-semibold text-sm md:text-base tracking-widest uppercase mb-4">
            One Institute · One Course
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground mb-6 leading-tight">
            VAARAHI CLOUD
            <br />
            <span className="text-gradient">TECHNOLOGIES</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-4">
            GCP Data Engineering — 100% Job Ready Program
          </p>

          <p className="text-sm md:text-base text-primary-foreground/60 max-w-xl mx-auto mb-8">
            Hyderabad's No.1 GCP Data Engineering Institute. Empower your career
            with India's most trusted, results-driven training ecosystem.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href={FORM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold text-base hover:opacity-90 transition-opacity shadow-lg shadow-primary/30"
            >
              Enroll Now
            </a>

            <a
              href="https://wa.me/917893337796"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-3.5 rounded-lg font-semibold text-base flex items-center gap-2 hover:bg-green-700 transition-colors shadow-lg shadow-green-600/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5" fill="currentColor">
                <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.418L4 29l7.824-2.05A12.93 12.93 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.97 0-3.885-.51-5.56-1.477l-.396-.23-4.646 1.217 1.24-4.522-.258-.414A9.94 9.94 0 0 1 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.273-7.273c-.29-.145-1.715-.848-1.98-.945-.266-.097-.46-.145-.655.146-.195.29-.75.945-.92 1.14-.17.195-.34.22-.63.073-.29-.145-1.225-.452-2.334-1.44-.863-.77-1.445-1.72-1.615-2.01-.17-.29-.018-.447.127-.592.13-.13.29-.34.435-.51.145-.17.193-.29.29-.485.097-.195.048-.365-.024-.51-.073-.145-.655-1.584-.897-2.17-.237-.57-.48-.492-.655-.5l-.56-.01c-.194 0-.51.073-.777.365-.266.29-1.02.997-1.02 2.43 0 1.432 1.04 2.81 1.185 3.005.145.195 2.05 3.13 5.07 4.27.709.306 1.262.488 1.694.624.712.227 1.36.195 1.872.118.571-.085 1.715-.7 1.957-1.376.242-.677.242-1.257.17-1.376-.073-.12-.266-.193-.555-.338z"/>
              </svg>
              Chat with us on WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Stats Section - Single Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center items-center gap-6 flex-nowrap overflow-x-auto max-w-6xl mx-auto mb-12 px-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-xl px-6 py-5 backdrop-blur-md min-w-[190px] text-center"
            >
              <div className="text-2xl md:text-3xl font-heading font-bold text-blue-600">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-blue-400 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll Down Icon */}
        <motion.button
          onClick={() => scrollTo("about")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ delay: 1, y: { repeat: Infinity, duration: 1.5 } }}
          className="text-primary-foreground/50"
        >
          <ChevronDown size={32} />
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;