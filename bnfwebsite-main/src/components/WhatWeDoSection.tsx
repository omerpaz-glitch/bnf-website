import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Shield, Brain, Sword } from "lucide-react";

const WhatWeDoSection = () => {
  const capabilities = [
    {
      icon: Shield,
      title: "Cyber Intelligence",
      description: "Real-time monitoring of threats, influence operations, and dark-web ecosystems.",
    },
    {
      icon: Brain,
      title: "AI Safety",
      description: "Introspective tools that detect bias, backdoors, and manipulation in large language models.",
    },
    {
      icon: Sword,
      title: "Defense Innovation",
      description: "Nation-level simulations, automated penetration testing, and secure OT/ICS resilience programs.",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-6 py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8,
          type: "spring",
          stiffness: 70
        }}
        viewport={{ amount: 0.2 }}
        className="max-w-7xl w-full z-10"
      >
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-center px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.5 }}
        >
          What We Do
        </motion.h2>

        <motion.div
          className="text-base md:text-lg lg:text-xl text-foreground/80 leading-relaxed mb-8 md:mb-12 max-w-5xl mx-auto text-center px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.5 }}
        >
          <p className="mb-6">
            BNF builds and empowers organizations that confront emerging AI and cyber challenges at national scale.
          </p>
          <p>
            Through deep-tech R&D and field-tested expertise, we deliver:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 80
              }}
              viewport={{ amount: 0.3 }}
            >
              <Card className="p-6 h-full bg-neutral-900/40 backdrop-blur-md border-neutral-700/50 hover:border-neutral-600/60 transition-all shadow-lg hover:shadow-xl hover:bg-neutral-800/50">
                <capability.icon className="w-12 h-12 mb-4 text-primary" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold mb-3">{capability.title}</h3>
                <p className="text-foreground/70">{capability.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-lg text-foreground/80 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.5 }}
        >
          Together, these capabilities create the visibility, precision, and foresight governments need to stay ahead of weaponized AI.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default WhatWeDoSection;
