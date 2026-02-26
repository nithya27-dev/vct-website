import { motion } from "framer-motion";
import { Cloud, Database, Server, Briefcase } from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "GCP Training",
    description: "Comprehensive hands-on Google Cloud Platform training."
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "End-to-end BigQuery, Dataflow & ETL pipeline mastery."
  },
  {
    icon: Server,
    title: "Real-Time Projects",
    description: "Industry-level real-time implementation experience."
  },
  {
    icon: Briefcase,
    title: "Placement Support",
    description: "Mock interviews, resume building & job assistance."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-8 md:py-14 bg-background">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-2">
            What We Offer
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
            Our Services
          </h2>
        </motion.div>

        {/* 4 Services in One Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="font-semibold text-lg mb-2 text-foreground">
                  {service.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;