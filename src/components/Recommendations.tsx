"use client";

import { motion } from "framer-motion";

const recommendations = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Product Manager",
    company: "Tech Corp",
    text: "Rafid is an exceptional team member who brings creativity and technical expertise to every project. His ability to explain complex concepts in simple terms makes him invaluable.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Engineering Lead",
    company: "StartupXYZ",
    text: "Working with Rafid was a game-changer. He combines deep technical knowledge with excellent communication skills, making him a perfect bridge between technical and non-technical stakeholders.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Johnson",
    role: "CEO",
    company: "EduTech Inc",
    text: "Rafid's passion for teaching and building is infectious. He has a unique ability to turn ideas into reality while bringing the team along for the journey.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Kim",
    role: "Design Director",
    company: "Creative Studio",
    text: "Rafid understands the intersection of design and technology better than anyone I've worked with. His collaborative approach and attention to detail make him an ideal team member.",
    rating: 5,
  },
];

export default function Recommendations() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {recommendations.map((rec, index) => (
          <motion.div
            key={rec.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="bg-gray-800/50 border border-amber-500/20 rounded-lg p-6 hover:border-amber-500/40 transition-colors"
          >
            <div className="flex items-center gap-2 mb-4">
              {[...Array(rec.rating)].map((_, i) => (
                <span key={i} className="text-amber-400 text-lg">★</span>
              ))}
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">&quot;{rec.text}&quot;</p>
            <div className="border-t border-amber-500/20 pt-4">
              <p className="font-semibold text-amber-400">{rec.name}</p>
              <p className="text-sm text-gray-400">{rec.role} at {rec.company}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

