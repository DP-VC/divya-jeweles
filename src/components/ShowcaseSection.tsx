import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import chokerImage from "@/assets/choker-showcase.jpg";
import banglesImage from "@/assets/bangles-showcase.jpg";
import maangtikkaImage from "@/assets/maangtikka-showcase.jpg";
import earringsImage from "@/assets/earrings-collection.jpg";
import ringImage from "@/assets/ring-collection.jpg";
import pendantImage from "@/assets/pendant-collection.jpg";

const showcaseItems = [
  { id: 1, image: chokerImage, name: "Royal Choker", category: "Necklaces" },
  { id: 2, image: banglesImage, name: "Diamond Bangles", category: "Bangles" },
  { id: 3, image: maangtikkaImage, name: "Bridal Maang Tikka", category: "Headpieces" },
  { id: 4, image: earringsImage, name: "Chandelier Earrings", category: "Earrings" },
  { id: 5, image: ringImage, name: "Heirloom Ring", category: "Rings" },
  { id: 6, image: pendantImage, name: "Temple Pendant", category: "Pendants" },
];

const ShowcaseCard = ({ item, index }: { item: typeof showcaseItems[0]; index: number }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  // Determine card size for masonry effect
  const isLarge = index === 0 || index === 3;
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`group relative overflow-hidden rounded-lg tilt-3d transition-transform duration-500 ${
        isLarge ? "md:col-span-2 md:row-span-2" : ""
      }`}
      style={{ aspectRatio: isLarge ? "4/3" : "1/1" }}
    >
      {/* Image with parallax effect */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

      {/* Shine sweep effect */}
      <div className="absolute inset-0 shine-sweep" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <span className="text-gold text-xs tracking-[0.3em] uppercase">{item.category}</span>
        <h3 className="font-display text-xl md:text-2xl tracking-wider text-foreground mt-2">
          {item.name}
        </h3>
      </div>

      {/* Gold border on hover */}
      <div className="absolute inset-0 border-2 border-transparent rounded-lg transition-all duration-500 group-hover:border-gold/50 group-hover:shadow-[inset_0_0_30px_hsl(43,74%,52%,0.1)]" />
    </motion.div>
  );
};

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={sectionRef} className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-gold text-sm tracking-[0.4em] uppercase"
          >
            Masterpieces
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl tracking-wider mt-4 text-gold-gradient"
          >
            Featured Showcase
          </motion.h2>
          
          {/* Gold separator */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6"
          />
        </div>

        {/* Masonry Grid */}
        <motion.div style={{ y }} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {showcaseItems.map((item, index) => (
            <ShowcaseCard key={item.id} item={item} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
