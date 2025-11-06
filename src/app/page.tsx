"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionContent from "@/components/SectionContent";

type Section = "recommendations" | "experience" | "skills" | "achievements";

const sectionColors: Record<Section, string> = {
  recommendations: "bg-amber-200",
  experience: "bg-blue-200",
  skills: "bg-purple-200",
  achievements: "bg-green-200",
};

const buttonColors: Record<Section, string> = {
  recommendations: "bg-amber-400 hover:bg-amber-500",
  experience: "bg-blue-400 hover:bg-blue-500",
  skills: "bg-purple-400 hover:bg-purple-500",
  achievements: "bg-green-400 hover:bg-green-500",
};

const activeButtonColors: Record<Section, string> = {
  recommendations: "bg-amber-500",
  experience: "bg-blue-500",
  skills: "bg-purple-500",
  achievements: "bg-green-500",
};

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section | null>(null);

  const sections: { id: Section; label: string }[] = [
    { id: "recommendations", label: "Recommendations" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "achievements", label: "Achievements" },
  ];

  const backgroundColor = activeSection ? sectionColors[activeSection] : "bg-white";

  return (
    <div className={`min-h-screen ${backgroundColor} text-gray-900 transition-colors duration-500`}>
      {/* Fixed Header Section */}
      <header className="w-full px-6 pt-12 md:pt-16 pb-8 md:pb-10">
        <div className="max-w-4xl mx-auto">
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-4 md:mb-6 leading-tight tracking-tight">
            Rafid Hoda
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-center text-gray-600 mb-8 md:mb-10 font-light">
            The Seller. The Builder. The Teacher. The Storyteller.
          </p>

          {/* Navigation Buttons */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {sections.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(isActive ? null : section.id)}
                  className={`
                    px-6 md:px-8 py-3 md:py-4 rounded-full font-medium text-sm md:text-base lg:text-lg
                    transition-all duration-300 ease-out cursor-pointer
                    shadow-md hover:shadow-lg
                    ${
                      isActive
                        ? `${activeButtonColors[section.id]} text-gray-900 shadow-lg scale-105`
                        : `${buttonColors[section.id]} text-gray-700 hover:scale-105 active:scale-95`
                    }
                  `}
                >
                  {section.label}
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* Content Section - Changes below */}
      <section className="w-full px-6 pb-12 md:pb-16">
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {activeSection ? (
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="max-w-3xl mx-auto text-center"
              >
                <SectionContent section={activeSection} />
              </motion.div>
            ) : (
              <motion.div
                key="video"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="max-w-[720px] mx-auto"
              >
                <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl bg-gray-100">
                  <iframe
                    src="https://www.youtube.com/embed/rsk2Md1yOx4"
                    title="Rafid Hoda Introduction"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
