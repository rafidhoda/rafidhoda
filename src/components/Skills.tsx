"use client";

import { motion } from "framer-motion";

const skills = [
  {
    id: 1,
    name: "Sales",
    description: "Proven track record in converting leads and closing deals. Experience in B2B and B2C sales environments.",
    icon: "💼",
  },
  {
    id: 2,
    name: "Teaching",
    description: "Designed and delivered educational programs for thousands of students. Expert at breaking down complex topics.",
    icon: "📚",
  },
  {
    id: 3,
    name: "Engineering",
    description: "Full-stack development experience. Built multiple products using modern web technologies and mobile frameworks.",
    icon: "⚙️",
  },
  {
    id: 4,
    name: "Video Production",
    description: "Created hundreds of educational videos. Skilled in scripting, filming, editing, and post-production.",
    icon: "🎬",
  },
  {
    id: 5,
    name: "Product Development",
    description: "From ideation to launch, experienced in building products that users love. Focus on user experience and accessibility.",
    icon: "🚀",
  },
  {
    id: 6,
    name: "Community Building",
    description: "Built and nurtured online communities. Understand how to engage audiences and create meaningful connections.",
    icon: "👥",
  },
];

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      {skills.map((skill, index) => (
        <motion.div
          key={skill.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05, duration: 0.3 }}
          className="bg-gray-800/50 border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/40 hover:bg-gray-800/70 transition-all"
        >
          <div className="text-4xl mb-4">{skill.icon}</div>
          <h3 className="text-xl font-semibold text-purple-400 mb-2">{skill.name}</h3>
          <p className="text-gray-300 text-sm leading-relaxed">{skill.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}

