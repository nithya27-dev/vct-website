import { motion } from "framer-motion";
import { Target, Rocket, Star, Trophy } from "lucide-react";
import founderImg from "@/assets/founder.jpg";

const highlights = [
  { icon: Target, title: "Our Purpose", text: "Empower learners with expert-driven training in GCP & Cloud Data Engineering, combining deep academic concepts with real-time practical implementation." },
  { icon: Rocket, title: "Our Aim", text: "Build a job-ready workforce through our \"One Institute · One Course\" training model, transforming beginners into successful GCP Data Engineers." },
  { icon: Star, title: "Our Goals", text: "Build mastery in GCP tools, strengthen confidence through mock interviews, deliver real-time project experience, and stay updated with evolving cloud technologies." },
  { icon: Trophy, title: "Achievements", text: "830+ students placed in top MNCs, 83% career success rate, 2000+ professionals trained across 47 batches, rated as India's Best GCP Data Engineering Institute." },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-2">About Us</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
            About Vaarahi Cloud Technologies
          </h2>
        </motion.div>

        {/* Founder highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col lg:flex-row items-center gap-10 mb-20"
        >
          <div className="relative flex-shrink-0">
            <div className="w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/10">
              <img
                src={founderImg}
                alt="Satish Pantula - Founder & Lead Trainer"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-xl font-heading font-bold text-sm shadow-lg">
              21+ Years IT Experience
            </div>
          </div>

          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">
              Satish Pantula
            </h3>
            <p className="text-primary font-semibold mb-4">Founder & Lead Trainer</p>
            <blockquote className="text-muted-foreground text-base md:text-lg leading-relaxed italic border-l-4 border-primary pl-6">
              "At Vaarahi, we don't just teach tools — we shape careers. Our one-course-one-focus model ensures every student receives deep, practical knowledge to become a job-ready GCP Data Engineer. With a blend of real-time projects, mentorship, and placement support, we've helped over 800+ students step confidently into the IT world."
            </blockquote>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              With 830+ successful placements and 2000+ trained professionals across 47+ batches, Vaarahi Cloud Technologies has proudly earned the title of Hyderabad's and India's most trusted institute for Google Cloud Data Engineering training.
            </p>
          </div>
        </motion.div>

        {/* Highlights grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-heading font-bold text-foreground text-lg mb-2">{item.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
