"use client";

import Image from "next/image";

interface SectionContentProps {
  section: "recommendations" | "experience" | "skills" | "achievements";
}

const achievements = [
  {
    icon: "💻",
    text: "Sold my first website at age 14 — a rock band's homepage for $200.",
  },
  {
    icon: "🎬",
    text: "Won *Honorable Mention* at the Kosmorama Film Festival (Trondheim, 2006).",
  },
  {
    icon: "🌐",
    text: "Created a video tutorial that went viral *before YouTube* — 15,000 unique visitors/month.",
  },
  {
    icon: "💼",
    text: "Named *Top Salesperson* out of 25 in my first sales job (2015).",
  },
  {
    icon: "🧮",
    text: "Won national science competition for a math essay (2011).",
  },
  {
    icon: "👦🏽",
    text: "Taught 1,000+ kids to code through live camps and workshops.",
  },
  {
    icon: "🌍",
    text: "Taught 15,000+ students worldwide through courses on Coursera, freeCodeCamp, and Scrimba.",
  },
];

const recommendations = [
  {
    name: "Per Borgen",
    role: "CEO and co-founder",
    company: "Scrimba",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQECtGCe7yQ3bQ/profile-displayphoto-shrink_800_800/B4DZX1xShaHIAs-/0/1743585094270?e=1764201600&v=beta&t=ipu375UNfWN3f5pnG2wUvjkBIe_bkCUpzh2uWQomJS8",
    text: "Rafid has a rare mix of technical, design, and communication skills that let him tackle projects most teams need several people for. His courses were polished, fun, and full of storytelling and humor — always delivered with a smile.",
  },
  {
    name: "Maria Mitsos",
    role: "Customer Success Manager",
    company: "SalesScreen",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQEnqrELzh23RA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1680791432292?e=1764201600&v=beta&t=N2e_vrQvor3y8pvBGEsLqfDw0q0KnaEygK_C--R7xBY",
    text: "Rafid always finds a solution and takes time to communicate clearly. He simplifies complex needs so everyone leaves confident the job's done — a solid teammate and a pleasure to work with. His calm, thoughtful approach makes collaboration effortless.",
  },
  {
    name: "Harry Hindess",
    role: "Account Executive",
    company: "SalesScreen",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQH7AZBQOYP1Xg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1706873647582?e=1764201600&v=beta&t=CSfEOQxwEWm-VmXmB93MtW_db4PI0JqwwL_bVXXBptk",
    text: "Rafid makes complex ideas simple for customers and helps move deals forward with clarity and confidence. From pre-sales calls to full integrations, he's thorough, professional, and a true partner in closing business.",
  },
  {
    name: "Øystein Heimark",
    role: "CTO & Co-founder",
    company: "SalesScreen",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQFNdkP7miTvQw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719426984359?e=1764201600&v=beta&t=AbNYLxEkkYmiCpPfJ-RZ0gg63sLXlwZANL2fCAXg2MQ",
    text: "Rafid bridges the gap between customers and engineering with rare technical depth and clear communication. He uncovers challenges, finds creative solutions, and explains complex problems in simple, human terms. His teaching background shines through in every interaction, making him invaluable to both clients and colleagues.",
  },
  {
    name: "Sindre Haaland",
    role: "CEO & Co-founder",
    company: "SalesScreen",
    image: "https://media.licdn.com/dms/image/v2/C4D03AQHgZNFwBU93Hg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1582229297102?e=1764201600&v=beta&t=LhKAQxaxodq6mD0FlCbiustIhxP1eWvZb8Gy07YOEoc",
    text: "Rafid is passionate about understanding customer needs and solving complex problems. His unique ability to simplify and explain through video made him a go-to problem solver, earning praise from colleagues and customers alike for turning tough integrations into clear, workable solutions.",
  },
  {
    name: "Arwa Ahmed Mawlod",
    role: "Specialist Fluid Characterization & PVT",
    company: "ADNOC Onshore",
    image: "https://media.licdn.com/dms/image/v2/C5603AQGR1yeunSeMPA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1647100434882?e=1764201600&v=beta&t=VcLayEO_n2iceMt7czcuuWYEAtG0BfhsEkAvvmw2FlA",
    text: "Rafid was amazing with my daughter, Layan — patient, creative, and made coding in Roblox Studio fun and easy to understand. She stayed engaged and inspired the entire session. His kindness, encouragement, and personal touch truly make him a rare teacher who turns learning into an adventure.",
  },
];

export default function SectionContent({ section }: SectionContentProps) {
  const content = {
    recommendations: {
      title: "What others say about working with Rafid.",
    },
    experience: {
      title: "Experience across sales, engineering, and education.",
    },
    skills: {
      title: "From storytelling to sales engineering, here's what I bring.",
    },
    achievements: {
      title: "Key milestones and projects I'm proud of.",
    },
  };

  const current = content[section];

  if (section === "recommendations") {
    return (
      <div className="w-full px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recommendations.map((rec, index) => (
            <div
              key={index}
              className="w-full bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow"
            >
              {/* Review Text */}
              <p className="text-gray-800 leading-relaxed mb-6 text-left">
                &quot;{rec.text}&quot;
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden flex-shrink-0 flex items-center justify-center">
                  {rec.image !== "/placeholder-avatar.jpg" ? (
                    <Image
                      src={rec.image}
                      alt={rec.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-gray-500 text-lg font-semibold">
                      {rec.name.charAt(0)}
                    </span>
                  )}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-left">{rec.name}</p>
                  <p className="text-sm text-gray-600 text-left">
                    {rec.role} at {rec.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (section === "achievements") {
    return (
      <div className="px-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
          {current.title}
        </h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-white/50 rounded-lg hover:bg-white/70 transition-colors"
            >
              <span className="text-3xl flex-shrink-0">{achievement.icon}</span>
              <p className="text-lg text-gray-800 leading-relaxed pt-1">
                {achievement.text.split("*").map((part, i) =>
                  i % 2 === 1 ? (
                    <strong key={i} className="font-semibold">
                      {part}
                    </strong>
                  ) : (
                    part
                  )
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="px-6">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center">
        {current.title}
      </h2>
    </div>
  );
}

