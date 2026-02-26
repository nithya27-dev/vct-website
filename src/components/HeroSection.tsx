import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import image from "@/assets/image.png";

const stats = [
  { value: "840+", label: "Students Placed" },
  { value: "47+", label: "Batches Completed" },
  { value: "79%", label: "Success Rate" },
  { value: "21+", label: "IT Experience" },
  { value: "12+", label: "Teaching Experience" },

];

const FORM_LINK =
  "https://docs.google.com/forms/d/e/1FAIpQLSeasmTZ3wOn0aMDz-A6fFGVKu-U2rac4qPAdkAaPrclJj7z3w/viewform";

const DEMO_LINK =
  "https://us06web.zoom.us/meeting/register/eZQMjATjT7aDPLL_4imTHA";

const HeroSection = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ backgroundColor: "#0b1525" }}
    >
      {/* ── Background tech-network image ── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})`, opacity: 0.75 }}
      />

      {/* ── Center dark overlay ── */}
      <div
        className="absolute inset-0"
        style={{
          background: "rgba(11,21,37,0.72)",
        }}
      />

      {/* ── Subtle orange glow centred behind headline ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "40%",
          left: "50%",
          width: 700,
          height: 320,
          background:
            "radial-gradient(ellipse, rgba(249,115,22,0.14) 0%, transparent 68%)",
          filter: "blur(56px)",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* ══════════════ MAIN CONTENT ══════════════ */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 md:px-12 pt-28 pb-10 text-center">



        {/* ── Headline ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-col items-center text-center mb-6 gap-2"
        >
          {/* Vaarahi Cloud Technologies */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-bold text-base md:text-xl tracking-widest uppercase"
            style={{
              background: "linear-gradient(135deg, #ea580c 0%, #fb923c 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Vaarahi Cloud Technologies
          </motion.p>

          {/* ONE INSTITUTE · ONE COURSE */}
          <div
            className="font-heading font-bold leading-tight"
            style={{ color: "#ffffff", fontSize: "clamp(2.4rem, 4.8vw, 4rem)", letterSpacing: "0.10em" }}
          >
            {/* Desktop: one line */}
            <span className="hidden md:block whitespace-nowrap">ONE INSTITUTE · ONE COURSE</span>
            {/* Mobile: two stacked lines */}
            <span className="flex flex-col items-center md:hidden">
              <span>ONE INSTITUTE</span>
              <span>ONE COURSE</span>
            </span>
          </div>

          {/* GCP Data Engineer */}
          <p
            className="font-medium tracking-widest"
            style={{ color: "rgba(255,255,255,0.70)", fontSize: "clamp(1rem, 2vw, 1.4rem)", letterSpacing: "0.08em" }}
          >
            GCP Data Engineer
          </p>
        </motion.div>


        {/* ── Subheading ── */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base md:text-lg leading-relaxed mb-9 mx-auto"
          style={{ color: "rgba(255,255,255,0.72)", maxWidth: 560 }}
        >
          Hyderabad's Best Data Engineering Institute. Transform your career with India's most trusted, results-driven training ecosystem.
        </motion.p>

        {/* ── CTA Buttons ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          {/* Enroll Now — filled orange */}
          <a
            href={FORM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-base text-white rounded-lg px-8 py-3.5 transition-all duration-200 hover:brightness-110 hover:scale-[1.02]"
            style={{
              background: "linear-gradient(135deg, #ea580c 0%, #fb923c 100%)",
              boxShadow: "0 4px 24px rgba(249,115,22,0.45)",
            }}
          >
            Enroll Now
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Book a Free Demo — blue outlined */}
          <a
            href={DEMO_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-base rounded-lg px-8 py-3.5 transition-all duration-200 hover:brightness-110 hover:scale-[1.02]"
            style={{
              background: "linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)",
              boxShadow: "0 4px 24px rgba(59,130,246,0.40)",
              color: "#ffffff",
            }}
          >
            {/* Play icon */}
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
            Book Demo for 28th
          </a>

          {/* WhatsApp Us — dark outlined */}
          <a
            href="https://wa.me/917893337796"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-base rounded-lg px-8 py-3.5 transition-all duration-200 hover:bg-white/10"
            style={{
              border: "1.5px solid rgba(255,255,255,0.28)",
              color: "rgba(255,255,255,0.88)",
              background: "rgba(255,255,255,0.04)",
            }}
          >
            {/* WhatsApp logo */}
            <svg
              viewBox="0 0 32 32"
              className="w-5 h-5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 2C8.268 2 2 8.268 2 16c0 2.494.65 4.835 1.788 6.865L2 30l7.347-1.766A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2Z"
                fill="#25D366"
              />
              <path
                d="M23.07 19.44c-.32-.16-1.9-.937-2.194-1.044-.294-.107-.508-.16-.722.16-.213.32-.828 1.044-.015 1.258.294.107 1.01.267 1.928 1.176.72.71 1.206 1.59 1.347 1.856.14.267-.015.427-.16.587-.32.32-.64.427-.96.587-.32.16-.534.107-.748-.054-.213-.16-.8-.96-1.014-1.12-.213-.16-.427-.213-.64-.054-.214.16-1.814 1.014-2.028 1.12-.213.107-.427.107-.694-.054-.32-.213-1.28-.96-2.455-2.135a9.63 9.63 0 0 1-1.92-2.988c-.213-.587-.054-.907.16-1.12.213-.213.427-.32.694-.48.267-.16.32-.267.48-.48.16-.213.054-.427-.054-.587-.107-.16-1.014-2.455-1.387-3.362-.374-.907-.748-.748-.96-.748h-.694c-.213 0-.587.054-.907.427-.32.374-1.227 1.2-1.227 2.935 0 1.74 1.28 3.415 1.44 3.628.16.214 2.508 3.842 6.082 5.39.85.374 1.52.587 2.028.747.854.267 1.628.24 2.24.16.694-.107 2.135-.855 2.455-1.696.32-.854.32-1.6.213-1.76-.107-.16-.32-.267-.64-.427Z"
                fill="#fff"
              />
            </svg>
            WhatsApp Us
          </a>
        </motion.div>

        {/* ── Stats row ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.45 }}
          className="flex flex-wrap justify-center gap-x-6 sm:gap-x-14 gap-y-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.08 }}
              className="flex flex-col"
            >
              <span
                className="font-heading font-bold leading-none"
                style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", color: "#fb923c" }}
              >
                {stat.value}
              </span>
              <span
                className="text-sm mt-1 font-medium"
                style={{ color: "rgba(255,255,255,0.50)" }}
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Scroll Down Chevron ── */}
      <motion.button
        onClick={() => scrollTo("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.2, duration: 0.5 },
          y: { delay: 1.2, repeat: Infinity, duration: 1.6, ease: "easeInOut" },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        style={{ color: "rgba(255,255,255,0.38)" }}
        aria-label="Scroll down"
      >
        <ChevronDown size={34} />
      </motion.button>
    </section>
  );
};

export default HeroSection;