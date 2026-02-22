import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  { name: "Sweetie Yamu", role: "GCP Data Engineering Student", text: "If you are serious and want to step into the IT industry, this is the best place to improve your tech skills." },
  { name: "Christopher Balla", role: "GCP Data Engineering Student", text: "A good education can change anyone. A good teacher can change everything! Vaarahi Cloud Technologies offers structured learning and hands-on practice. Satish Sir's discipline and guidance ensure every student finds a job successfully." },
  { name: "Krishna", role: "GCP Data Engineering Student", text: "I had an excellent learning experience over the past two months. The course is well-structured and practical, with valuable case studies and real-world use cases. I highly recommend Vaarahi Cloud Technologies." },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 dark:bg-zinc-900/80 rounded-2xl shadow-xl border border-border p-6 sm:p-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">Testimonials</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
                What Our <span className="gradient-text">Students</span> Say
              </h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="glass-card p-8 sm:p-12 relative">
                <Quote className="w-12 h-12 text-primary/20 absolute top-6 left-6" />
                <div className="text-center" key={current}>
                  <p className="text-lg sm:text-xl text-foreground leading-relaxed mb-8 italic animate-fade-in">
                    "{testimonials[current].text}"
                  </p>
                  <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                    <div className="w-12 h-12 rounded-full bg-primary/20 mx-auto mb-3 flex items-center justify-center">
                      <span className="text-primary font-bold text-lg">
                        {testimonials[current].name[0]}
                      </span>
                    </div>
                    <p className="font-bold text-foreground">{testimonials[current].name}</p>
                    <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
                  </div>
                </div>
                <div className="flex justify-center gap-4 mt-8">
                  <button
                    onClick={prev}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5 text-muted-foreground" />
                  </button>
                  <div className="flex items-center gap-2">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-primary w-6" : "bg-muted-foreground/30"}`}
                        aria-label={`Go to testimonial ${i + 1}`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={next}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                    aria-label="Next testimonial"
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
