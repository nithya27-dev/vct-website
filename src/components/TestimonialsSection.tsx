import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Janga Rohitha",
    role: "GCP Data Engineering Student",
    text: "The training was very practical and industry-oriented. The trainer explains concepts from basics to advanced level in a clear and structured way. The real-time projects helped me understand how companies work with data pipelines. They also provide interview preparation support, resume building guidance, and mock interviews which helped me gain confidence."
  },
  {
    name: "Sathwik Yarraganti",
    role: "GCP Data Engineering Student",
    text: "I want to share my experience with vaarahi cloud technologies.I tried so many institutes before joining in Vaarahi. Here I learned many new technologies like bigdata,Hadoop, pyspark,airflow,gcs, bigquery,dataproc,dataflow,cloud composer and also basic of AWS,AZURE along with GitHub,jira. Here I liked to learn this technologies along with experienced persons, this helps me to how we behave in corporate offices. Lastly I loved the tag line of this institute, that is 'ONE INSTITUTE ONE COURSE', this words are pulled me to join in VAARAHI CLOUD TECHNOLOGIES.Thank you SATISH sir, for giving this wonderful platform."
  },
  {
    name: "venkata padmasai Arava",
    role: "GCP Data Engineering Student",
    text: "I joined vaarahi cloud technologys with very little knowledge about gcp data engineer.under the guidence of satish sir,I was able to build a strong foundation in google cloud data engineering concepts.the training was very structured,pratical and focused on real-time scenarios.The hands on sessions and interview -oriented guidance helped me gain confidence and improve my technical skills significantly.Based on my personal experience,i highly recommend vaarahi cloud technologys to anyone looking to build a career in gcp data engineer.it is on of the best institute for gaining both practical knowledge and career guidance in this field"
  },
  {
    name: "Vamshi Krishna",
    role: "GCP Data Engineering Student",
    text: "I had an amazing experience with Vaarahi Cloud Technologies.This is the one and only Institute provides that GCP Data Engineer course. I have researched many institutions regarding this course but I have found the great place to learn and upskill myself.The trainer Sathish Panthula sir with 20+ years of experience in the IT industry with a great teaching skills. Sir explained the end to end pipeline very clearly.The explanation is simply superb.The concepts that explained in a simple and easy to understandable manner.The staff is very friendly especially Ravi anna helped me a lot.The course helped me to improve my skills, and build confidence.The great place for who are looking for upskill and looking for future growth."
  },
  {
    name: "Siva Sai",
    role: "GCP Data Engineering Student",
    text: "I recently finished my course at Vaarahi Cloud Technology, and honestly, it was a great experience. I come from a non-IT background, so in the beginning I was really scared and unsure if I could survive in the IT field.But after joining Vaarahi, Satish sir gave me so much confidence and proper guidance that all my fear slowly went away in just three months. The staff at the institute were also very supportive whenever I needed help.One thing I really liked in Satish sir’s way of teaching and he gives suggestions and motivates you in such a way that even if you feel you can’t do something, he makes you believe that you actually can. That really helped me a lot.Overall, I feel Vaarahi is one of the best institutes, especially for non-IT people who want to build a career as GCP Data Engineers."
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
    }, 6000);
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