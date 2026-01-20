import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const footerLinks = [
    {
      title: "Collections",
      links: ["Bridal", "Heritage", "Contemporary", "Custom Design"],
    },
    {
      title: "Services",
      links: ["Custom Orders", "Restoration", "Valuation", "Consultation"],
    },
    {
      title: "About",
      links: ["Our Story", "Craftsmanship", "Sustainability", "Careers"],
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: "#" },
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Youtube, href: "#" },
  ];

  return (
    <footer className="bg-charcoal border-t border-border/30">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-2xl tracking-[0.2em] text-gold-gradient mb-4">
              DIVYA JEWELS
            </h3>
            <p className="font-elegant text-muted-foreground italic leading-relaxed max-w-sm">
              Crafting timeless elegance since 1948. Where tradition meets 
              artistry in every piece of gold.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-gold hover:text-gold hover:shadow-[0_0_15px_hsl(43,74%,52%,0.3)] transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="font-display text-sm tracking-[0.2em] text-foreground mb-6 uppercase">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-gold transition-colors duration-300 underline-gold text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2024 Divya Jewels. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-xs text-muted-foreground hover:text-gold transition-colors underline-gold"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
