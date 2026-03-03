import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Janga Rohitha",
    role: "GCP Data Engineering Student",
    text: "The training was practical and industry-focused, with clear explanations from basics to advanced levels. Real-time projects gave me hands-on experience with data pipelines, and the interview support and mock sessions boosted my confidence."
  },
  {
    name: "Sathwik Yarraganti",
    role: "GCP Data Engineering Student",
    text: "I had a great experience at Vaarahi Cloud Technologies. I learned Big Data, Hadoop, PySpark, Airflow, GCS, BigQuery, Dataproc, Dataflow, Cloud Composer, along with basics of AWS, Azure, GitHub, and Jira. The industry-focused training and experienced mentors helped me understand corporate work culture. I truly liked their tagline, “One Institute One Course.” Special thanks to Satish Sir for this amazing platform."
  },
  {
    name: "venkata padmasai Arava",
    role: "GCP Data Engineering Student",
    text: "I recently completed my course at Vaarahi Cloud Technology, and it was a great experience. Coming from a non-IT background, I was initially scared, but Satish sir’s guidance and motivation helped me gain confidence within three months. The supportive staff and encouraging teaching style made a big difference. I highly recommend Vaarahi, especially for non-IT students aiming to become GCP Data Engineers."
  },
  {
    name: "Vamshi Krishna",
    role: "GCP Data Engineering Student",
    text: "I had an amazing experience at Vaarahi Cloud Technologies. The GCP Data Engineer course was well-structured, and Satish Panthula sir explained end-to-end pipelines in a simple and clear way. The friendly staff, especially Ravi anna, were very supportive. This course helped me improve my skills and gain confidence—highly recommended for anyone looking to upskill and grow in their career."
  },
  {
    name: "Siva Sai",
    role: "GCP Data Engineering Student",
    text: "I recently completed my course at Vaarahi Cloud Technology and had a great experience. Coming from a non-IT background, I was initially unsure, but Satish sir’s guidance and motivation helped me gain confidence quickly. The supportive staff and encouraging teaching style made learning easier. I highly recommend Vaarahi for non-IT students aiming to build a career as GCP Data Engineers."
  }
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0
  })
};

const TestimonialsSection = () => {
  const [[current, direction], setCurrent] = useState<[number, number]>([0, 0]);
  const [isPaused, setIsPaused] = useState(false);

  const paginate = (newDirection: number) => {
    setCurrent(([prev]) => [
      (prev + newDirection + testimonials.length) % testimonials.length,
      newDirection
    ]);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      paginate(1);
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused, current]);

  return (
    <section id="testimonials" className="py-8 sm:py-14 bg-background">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 dark:bg-zinc-900/80 rounded-2xl shadow-xl border border-border p-4 sm:p-10">

            <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">
                Testimonials
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
                What Our <span className="gradient-text">Students</span> Say
              </h2>
            </div>

            <div
              className="relative max-w-3xl mx-auto overflow-hidden"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
              onTouchCancel={() => setIsPaused(false)}
            >
              <div className="glass-card p-5 sm:p-10 relative">

                <Quote className="w-8 h-8 sm:w-12 sm:h-12 text-primary/20 absolute top-6 left-6" />

                <AnimatePresence custom={direction} mode="wait">
                  <motion.div
                    key={current}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 120, damping: 20 },
                      opacity: { duration: 0.3 }
                    }}
                    className="text-center"
                  >
                    <p className="text-lg sm:text-xl text-foreground leading-relaxed mb-4 sm:mb-8 italic">
                      "{testimonials[current].text}"
                    </p>

                    <div>
                      <div className="w-12 h-12 rounded-full bg-primary/20 mx-auto mb-3 flex items-center justify-center">
                        <span className="text-primary font-bold text-lg">
                          {testimonials[current].name[0]}
                        </span>
                      </div>

                      <p className="font-bold text-foreground">
                        {testimonials[current].name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonials[current].role}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Controls */}
                <div className="flex justify-center gap-4 mt-8">
                  <button
                    onClick={() => paginate(-1)}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-muted-foreground" />
                  </button>

                  <div className="flex items-center gap-2">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() =>
                          setCurrent([i, i > current ? 1 : -1])
                        }
                        className={`w-2.5 h-2.5 rounded-full transition-all ${i === current
                          ? "bg-primary w-6"
                          : "bg-muted-foreground/30"
                          }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => paginate(1)}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;