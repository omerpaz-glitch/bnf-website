import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative py-6 md:py-8 px-4 md:px-6 border-t border-border/30">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 0.2,
          duration: 0.6,
        }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-start gap-4">
            <p className="text-xs text-foreground/60">
              © BNF Group — All rights reserved
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-center">
            <a 
              href="/Legal_BNF.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground/70 hover:text-primary transition-colors"
            >
              Terms of Use
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
