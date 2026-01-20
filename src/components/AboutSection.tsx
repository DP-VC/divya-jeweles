import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import craftsmanImage from "@/assets/craftsman.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-gradient-to-b from-background via-charcoal to-background">
      <div ref={ref} className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image with mask reveal */}
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
            animate={isInView ? { opacity: 1, clipPath: "inset(0 0% 0 0)" } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={craftsmanImage}
                alt="Master Craftsman"
                className="w-full h-auto rounded-lg"
              />
              {/* Gold frame accent */}
              <div className="absolute inset-4 border border-gold/30 rounded-lg pointer-events-none" />
            </div>
            
            {/* Decorative gold corner */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-gold/50" />
            <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-gold/50" />
          </motion.div>

          {/* Text content */}
          <div className="lg:pl-8">
            <motion.span
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gold text-sm tracking-[0.4em] uppercase"
            >
              Our Legacy
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-display text-3xl md:text-4xl lg:text-5xl tracking-wider mt-4 mb-8"
            >
              <span className="text-gold-gradient">The Art</span>
              <br />
              <span className="text-foreground">of Fine Jewelry</span>
            </motion.h2>

            {/* Gold separator */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-16 h-px bg-gradient-to-r from-gold to-transparent mb-8 origin-left"
            />

            <motion.p
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-elegant text-lg md:text-xl text-muted-foreground leading-relaxed mb-6"
            >
              For over three generations, our master craftsmen have preserved the sacred traditions 
              of Indian jewelry making. Each piece tells a story of heritage, passion, and 
              uncompromising excellence.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="font-elegant text-lg md:text-xl text-muted-foreground leading-relaxed mb-8"
            >
              From sourcing the finest gold to the final polish, every step is guided by a 
              commitment to perfection that has made us the trusted jeweler of discerning 
              families across generations.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-3 gap-8"
            >
              {[
                { value: "75+", label: "Years of Legacy" },
                { value: "50K+", label: "Creations" },
                { value: "100%", label: "Pure Gold" },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="font-display text-2xl md:text-3xl text-gold">{stat.value}</div>
                  <div className="text-xs md:text-sm text-muted-foreground tracking-wider mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
