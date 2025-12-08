"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const technologiesByCategory = [
  {
    category: "Languages",
    items: ["English", "Hindi", "Norwegian", "Urdu"],
    bgColor: "bg-blue-100",
    textColor: "text-blue-700",
    borderColor: "border-blue-300",
    hoverBg: "hover:bg-blue-200",
  },
  {
    category: "Programming Languages",
    items: ["JavaScript", "TypeScript", "Python", "Ruby", "Ruby on Rails", "Elixir", "Scheme", "HTML", "CSS", "Programming"],
    bgColor: "bg-purple-100",
    textColor: "text-purple-700",
    borderColor: "border-purple-300",
    hoverBg: "hover:bg-purple-200",
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "React Native", "p5JS", "Phaser"],
    bgColor: "bg-pink-100",
    textColor: "text-pink-700",
    borderColor: "border-pink-300",
    hoverBg: "hover:bg-pink-200",
  },
  {
    category: "Development & Deployment",
    items: ["Development", "Backend Development", "Frontend Development", "Deployment"],
    bgColor: "bg-violet-100",
    textColor: "text-violet-700",
    borderColor: "border-violet-300",
    hoverBg: "hover:bg-violet-200",
  },
  {
    category: "Databases",
    items: ["MySQL", "Postgres", "Firebase", "Supabase", "Databases"],
    bgColor: "bg-indigo-100",
    textColor: "text-indigo-700",
    borderColor: "border-indigo-300",
    hoverBg: "hover:bg-indigo-200",
  },
  {
    category: "Development Tools",
    items: ["Git", "Github", "Wordpress", "Vercel", "Netlify", "Heroku", "APIs", "Postman", "Zapier", "Cursor", "ChatGPT", "Claude", "Documentation", "VS Code"],
    bgColor: "bg-cyan-100",
    textColor: "text-cyan-700",
    borderColor: "border-cyan-300",
    hoverBg: "hover:bg-cyan-200",
  },
  {
    category: "Design & Media",
    items: ["Figma", "Photoshop", "Final Cut Pro", "CapCut", "OBS", "ScreenStudio", "Descript", "Design", "Video Editing", "YouTube", "Streaming"],
    bgColor: "bg-orange-100",
    textColor: "text-orange-700",
    borderColor: "border-orange-300",
    hoverBg: "hover:bg-orange-200",
  },
  {
    category: "Sales & Marketing",
    items: ["Salesforce", "Hubspot", "Pipedrive", "SalesScreen", "Facebook Ads", "Google Ads", "Sales", "Marketing"],
    bgColor: "bg-green-100",
    textColor: "text-green-700",
    borderColor: "border-green-300",
    hoverBg: "hover:bg-green-200",
  },
  {
    category: "Communication & Content",
    items: ["Zoom", "Roblox Studio", "Teaching", "Writing", "Storytelling", "Narration"],
    bgColor: "bg-teal-100",
    textColor: "text-teal-700",
    borderColor: "border-teal-300",
    hoverBg: "hover:bg-teal-200",
  },
  {
    category: "Gaming",
    items: ["Game Development", "Game Design"],
    bgColor: "bg-amber-100",
    textColor: "text-amber-700",
    borderColor: "border-amber-300",
    hoverBg: "hover:bg-amber-200",
  },
];

// Flatten all technologies with their category info
const allTechnologies = technologiesByCategory.flatMap((category) =>
  category.items.map((item) => ({
    name: item,
    category: category.category,
    bgColor: category.bgColor,
    textColor: category.textColor,
    borderColor: category.borderColor,
    hoverBg: category.hoverBg,
  }))
);

export default function Technologies() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter technologies based on search
  const filteredTechnologies = allTechnologies.filter((tech) =>
    tech.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Search Input */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-4 sm:mb-5"
      >
        <div className="relative max-w-2xl mx-auto">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search technologies..."
            className="
              w-full
              px-4 sm:px-5 py-3 sm:py-4
              text-base sm:text-lg
              bg-white/90 backdrop-blur-lg
              border-2 border-gray-200
              rounded-2xl
              focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-100
              transition-all duration-200 ease-out
              placeholder-gray-400
              font-medium
              shadow-lg
            "
          />
          <svg
            className="absolute right-5 sm:right-6 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </motion.div>

      {/* Technologies Clump */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="min-h-[100px]"
      >
        <AnimatePresence mode="wait">
          {filteredTechnologies.length > 0 ? (
            <motion.div
              key="technologies"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="flex flex-wrap justify-center gap-2 sm:gap-3"
            >
              {filteredTechnologies.map((tech, index) => (
                <motion.span
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: Math.min(index * 0.01, 0.3),
                    duration: 0.2,
                    ease: "easeOut",
                  }}
                  className={`
                    ${tech.bgColor} ${tech.textColor} ${tech.borderColor} ${tech.hoverBg}
                    px-3 sm:px-4 py-1.5 sm:py-2
                    rounded-full
                    border-2
                    text-xs sm:text-sm font-semibold
                    transition-all duration-200 ease-out cursor-default
                    shadow-sm hover:shadow-md hover:scale-105
                    whitespace-nowrap
                  `}
                >
                  {tech.name}
                </motion.span>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="no-results"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="text-center py-12 text-gray-500 font-medium"
            >
              No technologies found matching &quot;{searchQuery}&quot;
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
