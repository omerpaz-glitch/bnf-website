import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import planetNineLogo from "@/assets/planet-nine-logo.svg";
import eposLogo from "@/assets/epos-logo.svg";
import springAiLogo from "@/assets/spring-logo.svg";

const companies = [
  {
    name: "Planet Nine",
    description: "Detects malicious domains before activation, monitors influence operations across global and regional networks, and exposes disinformation at scale.",
    url: "https://www.planet-nine.io",
    gradient: "from-primary to-accent",
    logo: planetNineLogo,
  },
  {
    name: "Epos",
    description: "Uncovers bias, detects hidden backdoors, and validates model behavior to ensure that AI systems remain transparent, explainable, and trustworthy.",
    url: "https://eposlabs.ai/home",
    gradient: "from-accent to-secondary",
    logo: eposLogo,
  },
  {
    name: "Spring",
    description: "Analyzes exposure bias, censorship, and algorithmic influence across major social networks. Mission: turn complexity into capability and uncertainty into resilience — ensuring technology serves stability, not disruption.",
    url: "https://www.thespring.ai",
    gradient: "from-secondary to-primary",
    logo: springAiLogo,
  },
];

const CompanyCards = () => {
  return (
    <section id="companies" className="relative min-h-screen flex items-center justify-center px-4 md:px-6 py-12 md:py-20">
      <div className="max-w-7xl w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 80
          }}
          viewport={{ amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 px-4">
            Our Companies
          </h2>
          <p className="text-base md:text-xl text-muted-foreground px-4">
            Building the future of cyber intelligence, AI safety, and defense innovation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 80
              }}
              viewport={{ amount: 0.2 }}
            >
              <motion.a
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="relative overflow-hidden bg-neutral-900/40 backdrop-blur-md border-neutral-700/50 hover:border-neutral-600/60 transition-all duration-500 h-full shadow-lg hover:shadow-xl flex flex-col hover:bg-neutral-800/50">
                  <div className="relative p-8 flex-1 flex flex-col">
                    <motion.div
                      className="h-32 mb-8 flex items-center justify-start"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img 
                        src={company.logo} 
                        alt={`${company.name} logo`}
                        className="h-32 w-auto object-contain"
                      />
                    </motion.div>
                    
                    <p className="text-muted-foreground leading-relaxed flex-1">
                      {company.description}
                    </p>

                    <motion.div
                      className="mt-6 flex items-center text-primary hover:text-primary/80 transition-colors"
                      whileHover={{ x: 10 }}
                    >
                      <span className="text-sm font-medium">Visit Website →</span>
                    </motion.div>
                  </div>
                </Card>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyCards;
