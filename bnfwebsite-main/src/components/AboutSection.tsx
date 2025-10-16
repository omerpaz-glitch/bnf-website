import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center px-4 md:px-6 py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8,
          type: "spring",
          stiffness: 70
        }}
        viewport={{ amount: 0.3 }}
        className="max-w-5xl w-full z-10"
      >
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-center px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.5 }}
        >
          About BNF Group
        </motion.h2>

        <motion.div
          className="space-y-4 md:space-y-6 text-base md:text-lg lg:text-xl text-foreground/80 leading-relaxed text-center px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.3 }}
        >
          <p>
            BNF Group is a technology innovation company specializing in cyber intelligence, AI safety, and defense.
          </p>
          <p>
            We develop and invest in ventures that strengthen the world's digital foundations, combining advanced analytics, operational experience, and AI-driven insight to defend against weaponized technologies.
          </p>
          <p>
            Our teams work alongside governments and enterprises to safeguard transparency, security, and democratic resilience in an age of accelerated change.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
