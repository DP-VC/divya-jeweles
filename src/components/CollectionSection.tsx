import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ringImage from "@/assets/ring-collection.jpg";
import earringsImage from "@/assets/earrings-collection.jpg";
import braceletImage from "@/assets/bracelet-collection.jpg";
import pendantImage from "@/assets/pendant-collection.jpg";

const collections = [
  {
    id: 1,
    name: "Royal Rings",
    description: "Handcrafted with precision",
    image: ringImage,
  },
  {
    id: 2,
    name: "Heritage Earrings",
    description: "Timeless elegance",
    image: earringsImage,
  },
  {
    id: 3,
    name: "Ornate Bracelets",
    description: "Artisan craftsmanship",
    image: braceletImage,
  },
  {
    id: 4,
    name: "Divine Pendants",
    description: "Sacred beauty",
    image: pendantImage,
  },
];

const CollectionCard = ({ item, index }: { item: typeof collections[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className="group relative flex-shrink-0 w-72 md:w-80"
    >
      <div className="relative overflow-hidden rounded-lg bg-card aspect-square">
        {/* Image */}
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
        
        {/* Gold glow border on hover */}
        <div className="absolute inset-0 rounded-lg border-2 border-transparent transition-all duration-500 group-hover:border-gold group-hover:shadow-[0_0_30px_hsl(43,74%,52%,0.3)]" />
        
        {/* Shine sweep effect */}
        <div className="shine-sweep absolute inset-0" />
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-display text-xl tracking-wider text-foreground mb-1">
            {item.name}
          </h3>
          <p className="font-elegant text-muted-foreground italic">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const CollectionSection = () => {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true });

  return (
    <section id="collection" className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-gold text-sm tracking-[0.4em] uppercase"
          >
            Exquisite Craftsmanship
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl tracking-wider mt-4 text-gold-gradient"
          >
            Signature Collection
          </motion.h2>
          
          {/* Gold separator */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6"
          />
        </div>

        {/* Horizontal scroll collection */}
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:justify-center md:flex-wrap">
          {collections.map((item, index) => (
            <div key={item.id} className="snap-center">
              <CollectionCard item={item} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;
