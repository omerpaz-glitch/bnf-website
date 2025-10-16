import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/BNF_logo_-_white.svg";
import { useIsMobile } from "@/hooks/use-mobile";

const TopNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "What We Do", id: "what-we-do" },
    { label: "Companies", id: "companies" },
    { label: "PT", id: "penetration-testing" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <AnimatePresence>
      {isVisible && !isMobile && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50 bg-neutral-900/60 backdrop-blur-lg border-b border-neutral-700/40 shadow-lg"
        >
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-2 sm:py-3 flex items-center justify-between gap-2">
            <div className="flex items-center flex-shrink-0">
              <img 
                src={logo} 
                alt="BNF Logo" 
                className="h-7 sm:h-9 md:h-12 cursor-pointer"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              />
            </div>

            <nav className="flex items-center gap-1 sm:gap-1.5 md:gap-2 overflow-x-auto scrollbar-hide">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-2 sm:px-3 md:px-5 py-1.5 sm:py-2 md:py-2.5 text-[10px] sm:text-xs md:text-base font-medium text-foreground/90 hover:text-primary hover:bg-primary/20 active:bg-primary/40 active:text-primary rounded-md transition-all duration-200 whitespace-nowrap flex-shrink-0"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default TopNav;
