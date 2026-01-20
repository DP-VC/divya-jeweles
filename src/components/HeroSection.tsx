import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import heroJewelry from "@/assets/hero-jewelry.jpg";

const HeroSection = () => {
  const brandName = "DIVYA JEWELS";
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with particles */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-charcoal to-background particles-bg" />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_hsl(40,6%,4%)_70%)]" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Floating jewelry image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative mx-auto mb-12 max-w-2xl"
        >
          <div className="float">
            <img
              src={heroJewelry}
              alt="Luxury Gold Necklace"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            {/* Gold glow effect */}
            <div className="absolute inset-0 rounded-lg glow-gold opacity-50" />
          </div>
        </motion.div>

        {/* Brand name with letter animation */}
        <div className="overflow-hidden mb-6">
          <motion.h1 
            className="font-display text-5xl md:text-7xl lg:text-8xl tracking-[0.3em] text-gold-gradient"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {brandName.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.5 + index * 0.08,
                  ease: "easeOut"
                }}
                className="inline-block"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="font-elegant text-xl md:text-2xl lg:text-3xl text-foreground/80 italic mb-12 tracking-wide"
        >
          Timeless Elegance Crafted in Gold
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
        >
          <Button 
            variant="luxury" 
            size="xl"
            onClick={() => document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span>Explore Collection</span>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">Scroll</span>
        <div className="scroll-indicator">
          <ChevronDown className="w-6 h-6 text-gold" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
