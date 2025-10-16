import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const PenetrationTestingSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isGovTechExpanded, setIsGovTechExpanded] = useState(false);

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
        className="max-w-5xl w-full z-10"
      >
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-center px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.5 }}
        >
          Penetration Testing for Critical Information Infrastructure
        </motion.h2>

        <motion.h3
          className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 md:mb-8 text-center px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.5 }}
        >
          BNF Singapore is GovTech-certified for Security Testing
        </motion.h3>

        <motion.div
          className="space-y-4 md:space-y-6 text-base md:text-lg lg:text-xl text-foreground/80 leading-relaxed bg-neutral-900/40 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-neutral-700/50 shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.3 }}
        >
          <p>
            BNF Singapore delivers advanced penetration testing designed for operational technology environments — from industrial control systems (ICS) to SCADA networks and energy grids.
          </p>

          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium text-sm border-b border-primary pb-1"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Learn More
            <ChevronDown 
              className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            />
          </motion.button>

          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4 pt-4 border-t border-primary/20"
            >
              <p>
                Unlike traditional IT testing, our approach mirrors nation-level attack paths, exposing vulnerabilities that could disrupt essential services and physical processes.
              </p>
              <p>
                Through deep protocol knowledge and red-team methodology, we provide operators with a clear resilience roadmap, ensuring CII systems withstand modern cyberattacks.
              </p>
            </motion.div>
          )}

          <div className="pt-6 border-t border-border/50">
            <h4 className="text-2xl font-semibold mb-4">GovTech-certified</h4>
            
            <motion.button
              onClick={() => setIsGovTechExpanded(!isGovTechExpanded)}
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium text-sm border-b border-primary pb-1"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn More
              <ChevronDown 
                className={`w-4 h-4 transition-transform ${isGovTechExpanded ? 'rotate-180' : ''}`}
              />
            </motion.button>

            {isGovTechExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4 pt-4"
              >
                <p>
                  BNF Singapore has been awarded GVT(T)25001 Category 2 - Security Testing, authorizing work on Tier 1 CIIs and Sensitive Systems across Singapore.
                </p>
                <p>
                  Our certified scope includes Vulnerability Assessment, Penetration Testing, Secure Configuration Review, Source Code Audit, Hardening, and full Red / Purple Teaming — executed to the highest operational and regulatory standards.
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PenetrationTestingSection;
