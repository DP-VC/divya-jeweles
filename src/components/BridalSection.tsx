import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "./ui/button";
import bridalImage from "@/assets/bridal-banner.jpg";

const BridalSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5]);

  return (
    <section ref={sectionRef} className="relative h-[80vh] md:h-screen overflow-hidden">
      {/* Background image with zoom animation */}
      <motion.div
        style={{ scale }}
        className="absolute inset-0"
      >
        <img
          src={bridalImage}
          alt="Bridal Collection"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
      
      {/* Golden sparkle overlay */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 particles-bg opacity-30"
      />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-xl">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block text-gold text-sm tracking-[0.4em] uppercase mb-4"
            >
              Exclusive Collection
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl tracking-wider mb-6"
            >
              <span className="text-gold-gradient">Bridal</span>
              <br />
              <span className="text-foreground">Splendor</span>
            </motion.h2>

            {/* Gold separator */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-16 h-px bg-gradient-to-r from-gold to-transparent mb-8 origin-left"
            />

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-elegant text-lg md:text-xl text-foreground/80 leading-relaxed mb-8 italic"
            >
              Celebrate your special day with our exquisite bridal collection. 
              Each piece is designed to make you feel like royalty on your 
              most cherished moments.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button variant="gold" size="xl">
                View Bridal Collection
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-8 right-8 hidden md:block"
      >
        <div className="w-32 h-32 border border-gold/30 rounded-full" />
        <div className="absolute top-4 left-4 w-24 h-24 border border-gold/20 rounded-full" />
      </motion.div>
    </section>
  );
};

export default BridalSection;
