import React from "react";
import { NavigationBar } from "../components/Navbar";
import { HeroSection } from "../components/heroSection/HeroSection";
import { AboutSection } from "../components/aboutSection/AboutSection";
import { WorkExperiences } from "../components/workExperiences/WorkExperiences";
import { motion, useScroll } from "framer-motion";

export function Home() {
  const { scrollYProgress } = useScroll();
  const [showScrollIndicator, setShowScrollIndicator] = React.useState(true);
  const [activeSection, setActiveSection] = React.useState("hero");

  const sections = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
  ];

  React.useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      setShowScrollIndicator(latest < 0.1);
    });
  }, [scrollYProgress]);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Update active section
      if (scrollPosition < windowHeight * 0.5) {
        setActiveSection("hero");
      } else if (scrollPosition < windowHeight * 1.5) {
        setActiveSection("about");
      } else {
        setActiveSection("experience");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = id === "hero" ? 0 : element.offsetTop;
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-[#0F0F0F]">
      <NavigationBar />

      {/* Section Navigator */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-8">
        {sections.map(({ id, label }) => (
          <button
            key={id}
            className="group relative flex items-center"
            onClick={() => scrollToSection(id)}
          >
            {/* Shape Container */}
            <div className="w-4 h-4 relative">
              {activeSection === id ? (
                // Diamond for active section
                <div className="absolute inset-0 bg-forth transform rotate-45" />
              ) : (
                // Circle for inactive section
                <div className="absolute inset-0 border-2 border-white/50 rounded-full group-hover:border-third transition-colors" />
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative">
        <div className="min-h-screen flex flex-col justify-center items-center">
          {/* Hero Section */}
          <section
            id="hero"
            className="w-full h-screen flex items-center justify-center bg-[#0F0F0F] relative"
          >
            <HeroSection />
            {/* Scroll Indicator - Mobile */}
            <div className="absolute bottom-8 w-full px-4 block md:hidden">
              <motion.div
                className="flex flex-col items-center justify-center"
                animate={{
                  opacity: showScrollIndicator ? 1 : 0,
                  y: showScrollIndicator ? 0 : 20,
                }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-white/70 text-sm mb-2">
                  Scroll to explore
                </span>
                <motion.div
                  className="w-5 h-8 border-2 border-white/50 rounded-full p-1"
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <motion.div
                    className="w-full h-2 bg-white/70 rounded-full"
                    animate={{ y: [0, 12, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              </motion.div>
            </div>

            {/* Scroll Indicator - Desktop */}
            <div className="absolute bottom-8 w-full px-4 hidden md:block">
              <motion.div
                className="flex flex-col items-center justify-center"
                animate={{
                  opacity: showScrollIndicator ? 1 : 0,
                  y: showScrollIndicator ? 0 : 20,
                }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-white/70 text-sm mb-2">
                  Scroll to explore
                </span>
                <motion.div
                  className="w-6 h-10 border-2 border-white/50 rounded-full p-1"
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <motion.div
                    className="w-full h-3 bg-white/70 rounded-full"
                    animate={{ y: [0, 15, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="w-full h-screen bg-[#0F0F0F]">
            <AboutSection />
          </section>

          {/* Work Experience Section */}
          <section
            id="experience"
            className="w-full min-h-screen flex items-center bg-gradient-to-b from-[#0F0F0F] via-[#0F0F0F] to-[#1A1A1A]"
          >
            <WorkExperiences />
          </section>
        </div>

        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 h-1 bg-gradient-to-r from-forth to-second z-50"
          style={{ scaleX: scrollYProgress }}
        />
      </div>
    </div>
  );
}

export default Home;
