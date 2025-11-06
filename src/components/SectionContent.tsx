"use client";

import { motion } from "framer-motion";

interface SectionContentProps {
  section: "recommendations" | "experience" | "skills" | "achievements";
}

export default function SectionContent({ section }: SectionContentProps) {
  const content = {
    recommendations: {
      title: "What others say about working with Rafid.",
      description: "Testimonials and recommendations from colleagues, clients, and collaborators.",
    },
    experience: {
      title: "Experience across sales, engineering, and education.",
      description: "A diverse background spanning multiple industries and roles.",
    },
    skills: {
      title: "From storytelling to sales engineering, here's what I bring.",
      description: "A unique combination of technical and creative abilities.",
    },
    achievements: {
      title: "Key milestones and projects I'm proud of.",
      description: "Notable accomplishments and impactful work.",
    },
  };

  const current = content[section];

  return (
    <div className="px-6">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center">
        {current.title}
      </h2>
    </div>
  );
}

