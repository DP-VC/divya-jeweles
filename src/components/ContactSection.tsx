import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Showroom",
      details: ["123 Jewelers Lane, Zaveri Bazaar", "Mumbai, Maharashtra 400003"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 22 2342 5678", "+91 98765 43210"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@divyajewels.com", "support@divyajewels.com"],
    },
    {
      icon: Clock,
      title: "Opening Hours",
      details: ["Mon - Sat: 10:00 AM - 8:00 PM", "Sunday: 11:00 AM - 6:00 PM"],
    },
  ];

  return (
    <section id="contact" className="py-24">
      <div ref={ref} className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-gold text-sm tracking-[0.4em] uppercase"
          >
            Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl tracking-wider mt-4 text-gold-gradient"
          >
            Contact & Visit
          </motion.h2>
          
          {/* Gold separator */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div className="relative group">
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border-b border-border py-4 px-0 text-foreground placeholder-transparent focus:outline-none focus:border-gold transition-colors peer"
                  placeholder="Your Name"
                  required
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 top-4 text-muted-foreground transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-gold peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-sm"
                >
                  Your Name
                </label>
              </div>

              {/* Email Input */}
              <div className="relative group">
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border-b border-border py-4 px-0 text-foreground placeholder-transparent focus:outline-none focus:border-gold transition-colors peer"
                  placeholder="Your Email"
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 top-4 text-muted-foreground transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-gold peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-sm"
                >
                  Your Email
                </label>
              </div>

              {/* Phone Input */}
              <div className="relative group">
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-transparent border-b border-border py-4 px-0 text-foreground placeholder-transparent focus:outline-none focus:border-gold transition-colors peer"
                  placeholder="Your Phone"
                />
                <label
                  htmlFor="phone"
                  className="absolute left-0 top-4 text-muted-foreground transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-gold peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-sm"
                >
                  Your Phone
                </label>
              </div>

              {/* Message Input */}
              <div className="relative group">
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full bg-transparent border-b border-border py-4 px-0 text-foreground placeholder-transparent focus:outline-none focus:border-gold transition-colors peer resize-none"
                  placeholder="Your Message"
                  required
                />
                <label
                  htmlFor="message"
                  className="absolute left-0 top-4 text-muted-foreground transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-gold peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-sm"
                >
                  Your Message
                </label>
              </div>

              <Button variant="gold" size="xl" className="w-full mt-8">
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-lg tracking-wider text-foreground mb-2">
                    {item.title}
                  </h3>
                  {item.details.map((detail, i) => (
                    <p key={i} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Map placeholder with grayscale effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="relative mt-8 rounded-lg overflow-hidden group h-48"
            >
              <div className="absolute inset-0 bg-charcoal flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-gold mx-auto mb-2" />
                  <p className="text-muted-foreground text-sm">View on Map</p>
                </div>
              </div>
              <div className="absolute inset-0 border border-gold/20 rounded-lg group-hover:border-gold/40 transition-colors duration-300" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
