import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "The craftsmanship is absolutely exquisite. My bridal set from Divya Jewels became the centerpiece of my wedding. Every piece tells a story of tradition and excellence.",
    author: "Priya Sharma",
    role: "Bride, Mumbai",
  },
  {
    id: 2,
    text: "Three generations of my family have trusted Divya Jewels. The quality and attention to detail remain unmatched. True artisans of their craft.",
    author: "Rajesh Mehta",
    role: "Loyal Customer, Delhi",
  },
  {
    id: 3,
    text: "I was searching for the perfect anniversary gift, and Divya Jewels exceeded all my expectations. The personalized service and stunning designs are world-class.",
    author: "Ananya Kapoor",
    role: "Anniversary Collection",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-charcoal via-background to-charcoal">
      <div ref={ref} className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-gold text-sm tracking-[0.4em] uppercase"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl tracking-wider mt-4 text-gold-gradient"
          >
            Words of Trust
          </motion.h2>
          
          {/* Gold separator */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6"
          />
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative glass-gold rounded-2xl p-8 md:p-12"
          >
            {/* Quote icon */}
            <div className="absolute -top-6 left-8">
              <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center pulse-gold">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>
            </div>

            {/* Testimonial content */}
            <div className="relative h-64 md:h-48 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <p className="font-elegant text-xl md:text-2xl text-foreground/90 italic leading-relaxed mb-8">
                    "{testimonials[currentIndex].text}"
                  </p>
                  
                  <div>
                    <p className="font-display text-lg text-gold tracking-wider">
                      {testimonials[currentIndex].author}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-gold w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
