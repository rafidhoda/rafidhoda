"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "Founder & Creator",
    company: "HodaScript",
    period: "2022 - Present",
    description: "Built a platform teaching people to create mobile apps in minutes. Developed curriculum, created video content, and built a community of creators.",
    icon: "💻",
  },
  {
    id: 2,
    role: "Camp Director & Instructor",
    company: "Roblox Camp",
    period: "2023 - Present",
    description: "Organize and teach 5-day camps during Oslo Høstferie, helping kids turn from gamers into creators. Designed curriculum and managed camp operations.",
    icon: "🎮",
  },
  {
    id: 3,
    role: "Content Creator & Educator",
    company: "YouTube, TikTok, Instagram",
    period: "2020 - Present",
    description: "Create educational content about programming, entrepreneurship, and creativity. Built an audience of thousands across multiple platforms.",
    icon: "📹",
  },
  {
    id: 4,
    role: "Mentor & Advisor",
    company: "Various Startups",
    period: "2021 - Present",
    description: "Provide mentorship to entrepreneurs and creators, helping them build products and grow their audiences. Focus on making tech accessible to everyone.",
    icon: "🚀",
  },
];

export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="relative"
    >
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="relative pl-8 border-l-2 border-slate-500/30 pb-8 last:pb-0"
          >
            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-slate-500/50 border-2 border-slate-400 flex items-center justify-center">
              <span className="text-xs">{exp.icon}</span>
            </div>
            <div className="bg-gray-800/50 border border-slate-500/20 rounded-lg p-6 ml-4 hover:border-slate-500/40 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-slate-300 mb-1">{exp.role}</h3>
                  <p className="text-slate-400">{exp.company}</p>
                </div>
                <span className="text-sm text-slate-500 mt-2 md:mt-0">{exp.period}</span>
              </div>
              <p className="text-gray-300 leading-relaxed">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

