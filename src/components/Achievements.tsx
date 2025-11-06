"use client";

import { motion } from "framer-motion";

const achievements = [
  {
    id: 1,
    title: "Students Taught",
    value: "15,000+",
    description: "Taught programming and creativity to thousands of students through courses, camps, and online content.",
    icon: "🎓",
  },
  {
    id: 2,
    title: "Top Salesperson",
    value: "Batch of 25",
    description: "Achieved top sales performance in a competitive batch, demonstrating strong communication and persuasion skills.",
    icon: "🏆",
  },
  {
    id: 3,
    title: "Products Built",
    value: "10+",
    description: "Created and launched multiple products from scratch, including educational platforms and mobile applications.",
    icon: "📱",
  },
  {
    id: 4,
    title: "Content Views",
    value: "500K+",
    description: "Generated hundreds of thousands of views across YouTube, TikTok, and Instagram with educational content.",
    icon: "👀",
  },
];

export default function Achievements() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="grid gap-6 md:grid-cols-2"
    >
      {achievements.map((achievement, index) => (
        <motion.div
          key={achievement.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
          className="bg-gray-800/50 border border-yellow-500/20 rounded-lg p-8 hover:border-yellow-500/40 transition-all text-center"
        >
          <div className="text-5xl mb-4">{achievement.icon}</div>
          <div className="text-4xl font-bold text-yellow-400 mb-2">{achievement.value}</div>
          <h3 className="text-xl font-semibold text-yellow-300 mb-3">{achievement.title}</h3>
          <p className="text-gray-300 text-sm leading-relaxed">{achievement.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}

