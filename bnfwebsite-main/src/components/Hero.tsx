import { motion } from "framer-motion";
import logo from "@/assets/BNF_logo_-_white.svg";

const Hero = () => {
  const sloganWords = "Where challenges drive innovation".split(" ");
  const descriptionWords = "When adversaries exploit artificial intelligence to destabilize trust, BNF delivers the expertise and innovation to restore it. We unite cyber intelligence, AI safety, and defense innovation to protect nations, critical infrastructure, and global enterprises from emerging AI-driven and cyber-enabled threats.".split(" ");

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 md:px-6 py-12 md:py-20">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center z-10"
      >
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            ease: "easeOut"
          }}
          viewport={{ amount: 0.3 }}
        >
          <img 
            src={logo} 
            alt="BNF Logo" 
            className="w-48 md:w-72 lg:w-[450px] xl:w-[550px] mx-auto mb-4 mt-16 md:mt-24 drop-shadow-[0_0_80px_rgba(0,255,255,0.5)]"
          />
        </motion.div>

        {/* Word-by-word animated slogan */}
        <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium tracking-wide text-foreground mb-4 md:mb-6 min-h-[80px] md:min-h-[100px] flex flex-wrap justify-center items-center gap-2 md:gap-3 px-4">
          {sloganWords.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.05,
                duration: 0.5,
                ease: "easeOut"
              }}
              viewport={{ amount: 0.3 }}
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* Word-by-word animated description */}
        <div className="max-w-5xl mx-auto text-base md:text-lg lg:text-xl xl:text-2xl font-light leading-relaxed text-foreground/80 mb-12 md:mb-16 flex flex-wrap justify-center gap-2 px-4">
          {descriptionWords.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: index * 0.02,
                duration: 0.3
              }}
              viewport={{ amount: 0.3 }}
              className="inline-block"
            >
              {word}
            </motion.span>
          ))}
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 80
          }}
          viewport={{ amount: 0.5 }}
          className="mt-4"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 md:px-10 py-2.5 md:py-3 bg-primary/20 backdrop-blur-sm border border-primary/40 rounded-sm text-primary font-medium text-sm md:text-base transition-all hover:border-primary/60 hover:bg-primary/30 shadow-md hover:shadow-lg"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.5 }}
        className="absolute bottom-4"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-primary/50"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
