"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const roles = [
  {
    id: "all",
    title: "All",
    bgColor: "bg-gray-100",
    textColor: "text-gray-700",
    borderColor: "border-gray-300",
    hoverBg: "hover:bg-gray-200",
    activeBg: "bg-gray-900",
    activeText: "text-white",
    activeBorder: "border-gray-900",
  },
  {
    id: "account-executive",
    title: "Account Executive",
    bgColor: "bg-blue-100",
    textColor: "text-blue-700",
    borderColor: "border-blue-300",
    hoverBg: "hover:bg-blue-200",
    activeBg: "bg-blue-600",
    activeText: "text-white",
    activeBorder: "border-blue-600",
    keywords: ["Salesforce", "Hubspot", "Pipedrive", "SalesScreen", "Facebook Ads", "Google Ads", "Zoom"],
  },
  {
    id: "sales-engineer",
    title: "Sales Engineer",
    bgColor: "bg-purple-100",
    textColor: "text-purple-700",
    borderColor: "border-purple-300",
    hoverBg: "hover:bg-purple-200",
    activeBg: "bg-purple-600",
    activeText: "text-white",
    activeBorder: "border-purple-600",
    keywords: ["APIs", "Postman", "Salesforce", "Hubspot", "SalesScreen", "JavaScript", "TypeScript", "React", "Python", "Node.js"],
  },
  {
    id: "fullstack-engineer",
    title: "Full-Stack Engineer",
    bgColor: "bg-indigo-100",
    textColor: "text-indigo-700",
    borderColor: "border-indigo-300",
    hoverBg: "hover:bg-indigo-200",
    activeBg: "bg-indigo-600",
    activeText: "text-white",
    activeBorder: "border-indigo-600",
    keywords: ["JavaScript", "TypeScript", "Python", "Ruby", "Ruby on Rails", "Elixir", "React", "React Native", "Node.js", "Postgres", "MySQL", "Firebase", "Supabase", "Git", "Github", "Vercel", "Netlify", "Heroku", "HTML", "CSS", "APIs", "Postman", "Figma", "Cursor", "ChatGPT", "Claude", "Zapier"],
  },
  {
    id: "video-producer",
    title: "Video Producer",
    bgColor: "bg-pink-100",
    textColor: "text-pink-700",
    borderColor: "border-pink-300",
    hoverBg: "hover:bg-pink-200",
    activeBg: "bg-pink-600",
    activeText: "text-white",
    activeBorder: "border-pink-600",
    keywords: ["Final Cut Pro", "CapCut", "OBS", "ScreenStudio", "Photoshop", "Figma", "Zoom"],
  },
];

const technologiesByCategory = [
  {
    category: "Languages",
    items: ["English", "Hindi", "Norwegian", "Urdu"],
  },
  {
    category: "Programming Languages",
    items: ["JavaScript", "TypeScript", "Python", "Ruby", "Ruby on Rails", "Elixir", "Scheme", "HTML", "CSS"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "React Native", "p5JS", "Phaser"],
  },
  {
    category: "Databases",
    items: ["MySQL", "Postgres", "Firebase", "Supabase"],
  },
  {
    category: "Development Tools",
    items: ["Git", "Github", "Wordpress", "Vercel", "Netlify", "Heroku", "APIs", "Postman", "Zapier", "Cursor", "ChatGPT", "Claude"],
  },
  {
    category: "Design & Media",
    items: ["Figma", "Photoshop", "Final Cut Pro", "CapCut", "OBS", "ScreenStudio"],
  },
  {
    category: "Sales & CRM",
    items: ["Salesforce", "Hubspot", "Pipedrive", "SalesScreen", "Facebook Ads", "Google Ads"],
  },
  {
    category: "Communication & Gaming",
    items: ["Zoom", "Roblox Studio"],
  },
];

export default function IntroWithTechnologies() {
  const [activeRole, setActiveRole] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter technologies based on role and search
  const getFilteredCategories = () => {
    const activeRoleData = roles.find((r) => r.id === activeRole);
    const roleKeywords = activeRoleData?.keywords || [];

    return technologiesByCategory
      .map((category) => {
        const filteredItems = category.items.filter((item) => {
          const matchesSearch = item.toLowerCase().includes(searchQuery.toLowerCase());
          const matchesRole = activeRole === "all" || roleKeywords.includes(item);
          return matchesSearch && matchesRole;
        });

        return { ...category, items: filteredItems };
      })
      .filter((category) => category.items.length > 0);
  };

  const filteredCategories = getFilteredCategories();

  return (
    <div className="text-center">
      {/* Profile Picture */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-6 sm:mb-8 flex justify-center"
      >
        <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32">
          <Image
            src="/rafid-hoda.png"
            alt="Rafid Hoda"
            width={128}
            height={128}
            className="w-full h-full object-contain"
          />
        </div>
      </motion.div>

      {/* Name */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 text-gray-900 leading-[1.15] tracking-[-0.02em]"
      >
        Hey 👋 I&apos;m Rafid
      </motion.p>

      {/* Role Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="mb-6 sm:mb-8"
      >
        <div className="w-full grid grid-cols-2 md:flex md:flex-row md:justify-center items-center gap-3 sm:gap-4 max-w-3xl mx-auto">
          {roles.map((role) => {
            const isActive = activeRole === role.id;
            return (
              <button
                key={role.id}
                onClick={() => setActiveRole(role.id)}
                className={`
                  ${isActive ? `${role.activeBg} ${role.activeText} ${role.activeBorder}` : `${role.bgColor} ${role.textColor} ${role.borderColor} ${role.hoverBg}`}
                  px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3
                  rounded-full
                  border-2
                  font-bold text-sm sm:text-base
                  hover:shadow-lg hover:scale-105
                  transition-all duration-200 ease-out
                  text-center
                  whitespace-nowrap
                `}
              >
                {role.title}
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Search Field */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="mb-8 sm:mb-10"
      >
        <div className="relative max-w-2xl mx-auto">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search through the tools, languages, and technologies I've worked with..."
            className="
              w-full
              px-5 sm:px-6 py-4 sm:py-5
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

      {/* Technologies by Category */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        className="mb-8 sm:mb-10"
      >
        <AnimatePresence mode="wait">
          {filteredCategories.length > 0 ? (
            <motion.div
              key="categories"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="space-y-6 sm:space-y-8"
            >
              {filteredCategories.map((category, catIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: catIndex * 0.05, duration: 0.3, ease: "easeOut" }}
                >
                  <h3 className="text-sm sm:text-base font-bold text-gray-500 uppercase tracking-wider mb-3 sm:mb-4">
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                    {category.items.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: (catIndex * 0.05) + (techIndex * 0.01),
                          duration: 0.2,
                          ease: "easeOut",
                        }}
                        className="
                          px-4 sm:px-5 py-2 sm:py-2.5
                          bg-white/90 backdrop-blur-lg
                          border-2 border-gray-200
                          rounded-full
                          text-sm sm:text-base font-semibold text-gray-800
                          hover:bg-gradient-to-r hover:from-blue-50 hover:via-purple-50 hover:to-pink-50
                          hover:border-purple-400 hover:text-purple-700
                          transition-all duration-200 ease-out cursor-default
                          shadow-sm hover:shadow-md hover:scale-105
                        "
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
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
              No technologies found matching your search
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Intro Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        className="space-y-4 sm:space-y-5 text-lg sm:text-xl md:text-2xl text-gray-700 leading-[1.6] tracking-[-0.01em] font-medium mt-12 sm:mt-16"
      >
        <p>
          I write, code, design, make videos, teach, and build tools and apps.
        </p>
        <p>
          I like to spend a lot of time testing and trying to understand what to build.
        </p>
        <p className="pt-4 text-gray-900 font-semibold">
          I&apos;m currently looking for companies interested in doing projects with me or hiring me full time.
        </p>
      </motion.div>
    </div>
  );
}

