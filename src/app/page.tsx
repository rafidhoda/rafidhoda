"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionContent from "@/components/SectionContent";

type Section = "home" | "recommendations" | "experience" | "skills" | "achievements";

const sectionColors: Record<Section, string> = {
  home: "bg-white",
  recommendations: "bg-amber-50",
  experience: "bg-blue-50",
  skills: "bg-purple-50",
  achievements: "bg-green-50",
};

const buttonColors: Record<Section, string> = {
  home: "bg-gray-200 hover:bg-gray-300",
  recommendations: "bg-amber-200 hover:bg-amber-300",
  experience: "bg-blue-200 hover:bg-blue-300",
  skills: "bg-purple-200 hover:bg-purple-300",
  achievements: "bg-green-200 hover:bg-green-300",
};

const activeButtonColors: Record<Section, string> = {
  home: "bg-gray-300",
  recommendations: "bg-amber-300",
  experience: "bg-blue-300",
  skills: "bg-purple-300",
  achievements: "bg-green-300",
};

const sectionHeadlines: Record<Section, { headline: string; subtitle: string }> = {
  home: {
    headline: "Rafid Hoda",
    subtitle: "The Seller. The Builder. The Teacher. The Storyteller.",
  },
  recommendations: {
    headline: "What others say",
    subtitle: "Words from teammates, managers, and clients",
  },
  experience: {
    headline: "Rafid Hoda",
    subtitle: "The Seller. The Builder. The Teacher. The Storyteller.",
  },
  skills: {
    headline: "Rafid Hoda",
    subtitle: "The Seller. The Builder. The Teacher. The Storyteller.",
  },
  achievements: {
    headline: "Rafid Hoda",
    subtitle: "The Seller. The Builder. The Teacher. The Storyteller.",
  },
};

const defaultHeadline = "Rafid Hoda";
const defaultSubtitle = "The Seller. The Builder. The Teacher. The Storyteller.";

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section | null>(null);

  const sections: { id: Section; label: string }[] = [
    { id: "home", label: "Home" },
    { id: "recommendations", label: "Recommendations" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "achievements", label: "Achievements" },
  ];

  const handleSectionClick = (sectionId: Section) => {
    if (sectionId === "home") {
      setActiveSection(null);
    } else {
      setActiveSection(activeSection === sectionId ? null : sectionId);
    }
  };

  const backgroundColor = activeSection ? sectionColors[activeSection] : "bg-white";
  const currentHeadline = activeSection && activeSection !== "home" ? sectionHeadlines[activeSection].headline : defaultHeadline;
  const currentSubtitle = activeSection && activeSection !== "home" ? sectionHeadlines[activeSection].subtitle : defaultSubtitle;

  return (
    <div className={`min-h-screen ${backgroundColor} text-gray-900 transition-colors duration-500`}>
      {/* Fixed Header Section */}
      <header className="w-full px-6 pt-12 md:pt-16 pb-8 md:pb-10">
        <div className="max-w-4xl mx-auto">
          {/* Headline */}
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-center mb-4 md:mb-6 leading-tight tracking-tight">
            {currentHeadline}
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-xl lg:text-2xl text-center text-gray-600 mb-8 md:mb-10 font-light whitespace-nowrap">
            {currentSubtitle}
          </p>

          {/* Navigation Buttons */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {sections.map((section) => {
              const isActive = section.id === "home" ? activeSection === null : activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => handleSectionClick(section.id)}
                  className={`
                    px-4 py-2 md:px-8 md:py-4 rounded-full font-medium text-xs md:text-base lg:text-lg
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
        <div className="w-full max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {activeSection && activeSection !== "home" ? (
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={activeSection === "recommendations" ? "w-full" : "max-w-3xl mx-auto text-center"}
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
