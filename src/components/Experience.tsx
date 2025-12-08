"use client";

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
    <div className="relative">
      <div className="space-y-6 sm:space-y-8">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="relative pl-8 sm:pl-10 border-l-2 border-gray-300/50 pb-8 last:pb-0 group"
          >
            {/* Timeline dot */}
            <div className="absolute -left-3 sm:-left-3.5 top-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white border-2 border-gray-400 flex items-center justify-center shadow-sm group-hover:border-gray-600 transition-colors">
              <span className="text-sm sm:text-base">{exp.icon}</span>
            </div>
            
            {/* Content card */}
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl sm:rounded-2xl p-5 sm:p-6 ml-2 sm:ml-4 hover:bg-white hover:shadow-lg hover:border-gray-300/50 transition-all duration-300 hover:-translate-y-0.5">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">{exp.role}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{exp.company}</p>
                </div>
                <span className="text-xs sm:text-sm text-gray-500 font-medium whitespace-nowrap">{exp.period}</span>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

