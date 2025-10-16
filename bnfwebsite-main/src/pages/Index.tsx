import AnimatedBackground from "@/components/AnimatedBackground";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import CompanyCards from "@/components/CompanyCards";
import PenetrationTestingSection from "@/components/PenetrationTestingSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import TopNav from "@/components/TopNav";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <AnimatedBackground />
      <TopNav />
      
      <main className="relative z-10">
        <Hero />
        <AboutSection />
        <div id="what-we-do">
          <WhatWeDoSection />
        </div>
        <CompanyCards />
        <div id="penetration-testing">
          <PenetrationTestingSection />
        </div>
        <ContactForm />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
