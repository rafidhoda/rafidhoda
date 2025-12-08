"use client";

import { motion } from "framer-motion";

const roles = [
  {
    id: 1,
    title: "Account Executive",
    bgColor: "bg-blue-100",
    textColor: "text-blue-700",
    borderColor: "border-blue-300",
    hoverBg: "hover:bg-blue-200",
  },
  {
    id: 2,
    title: "Sales Engineer",
    bgColor: "bg-purple-100",
    textColor: "text-purple-700",
    borderColor: "border-purple-300",
    hoverBg: "hover:bg-purple-200",
  },
  {
    id: 3,
    title: "Full-Stack Engineer",
    bgColor: "bg-indigo-100",
    textColor: "text-indigo-700",
    borderColor: "border-indigo-300",
    hoverBg: "hover:bg-indigo-200",
  },
  {
    id: 4,
    title: "Video Producer",
    bgColor: "bg-pink-100",
    textColor: "text-pink-700",
    borderColor: "border-pink-300",
    hoverBg: "hover:bg-pink-200",
  },
];

const technologies = [
  // Frontend
  "React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS",
  // Backend
  "Node.js", "Python", "Express", "REST APIs", "GraphQL",
  // Tools & Platforms
  "Git", "GitHub", "Vercel", "Netlify", "Figma", "VS Code",
  // Mobile
  "React Native", "Expo",
  // Databases
  "PostgreSQL", "MongoDB", "Firebase",
  // Video & Design
  "Premiere Pro", "After Effects", "Final Cut Pro", "Canva",
  // Sales & Business
  "Salesforce", "HubSpot", "CRM", "Sales Engineering",
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Skills() {
  return (
    <div className="w-full grid grid-cols-2 md:flex md:flex-row md:justify-center items-center gap-3 sm:gap-4 max-w-3xl mx-auto">
      {roles.map((role, index) => (
        <motion.div
          key={role.id}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
          className={`
            ${role.bgColor} ${role.textColor} ${role.borderColor} ${role.hoverBg}
            px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3
            rounded-full
            border-2
            font-bold text-sm sm:text-base
            hover:shadow-lg hover:scale-105
            transition-all duration-300
            text-center
            whitespace-nowrap
          `}
        >
          {role.title}
        </motion.div>
      ))}
    </div>
  );
}
