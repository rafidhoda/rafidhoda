"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const courses = [
  {
    id: "build-a-mobile-app-with-firebase",
    name: "Build a Mobile App with Firebase",
    image: "/courses/build-a-mobile-app-with-firebase.jpg",
    url: "https://www.youtube.com/watch?v=UFD4SP91tSM",
    platforms: ["Scrimba", "freeCodeCamp", "Coursera"],
  },
  {
    id: "learn-firebase",
    name: "Learn Firebase",
    image: "/courses/learn-firebase.jpg",
    url: "https://www.coursera.org/learn/learn-firebase",
    platforms: ["Scrimba", "Coursera"],
  },
  {
    id: "roblox-studio-for-beginners",
    name: "Roblox Studio for Beginners",
    image: "/courses/roblox-studio-for-beginners.png",
    url: "https://www.udemy.com/course/roblox-studio-for-beginners/",
    platforms: ["YouTube", "Udemy", "utdannet.no"],
  },
];

const platformColors: Record<string, string> = {
  Scrimba: "bg-green-600",
  freeCodeCamp: "bg-blue-500",
  Coursera: "bg-blue-600",
  YouTube: "bg-red-600",
  Udemy: "bg-purple-600",
  "utdannet.no": "bg-indigo-600",
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0
  }
};

export default function Courses() {
  return (
    <div>
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className="text-center mb-8 sm:mb-10"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900 tracking-tight">
          Online Courses
        </h2>
      </motion.div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: index * 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <Link
                href={course.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {/* Course Image */}
                <div className="relative w-full h-48 sm:h-56 overflow-hidden bg-gray-200">
                  <Image
                    src={course.image}
                    alt={course.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Course Content */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 leading-tight hover:text-blue-600 transition-colors">
                    {course.name}
                  </h3>

                  {/* Platform Badges */}
                  <div className="flex flex-wrap gap-2">
                    {course.platforms.map((platform) => (
                      <span
                        key={platform}
                        className={`${platformColors[platform] || "bg-gray-600"} px-3 py-1.5 rounded-lg text-white text-xs font-semibold`}
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
    </div>
  );
}

