"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

// Type declaration for Crisp chat
declare global {
  interface Window {
    $crisp?: Array<any>;
  }
}

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 overflow-x-hidden">
      <Navbar />

      <Hero 
        pageTitle="Home"
        subtitle="The Seller. The Builder. The Teacher. The Storyteller."
        isHomePage={true}
      />

      {/* Overview Sections */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              What I do
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              One person connecting customers, code, and clarity across multiple disciplines
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Product Videos */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            >
              <Link href="/videos" className="block">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-xl border border-blue-200 h-full hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-300/40 transition-colors duration-300" />
                  <div className="relative z-10">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                      Product Videos
                    </h3>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                      I create product videos that save your team thousands of explanations. Clear, professional videos that scale across your entire organization.
                    </p>
                    <span className="text-blue-600 font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                      Learn more
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Teaching */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 shadow-xl border border-purple-200 h-full hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200/30 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-purple-300/40 transition-colors duration-300" />
                <div className="relative z-10">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                    Teaching
                  </h3>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                    20 years of teaching experience. From video tutorials at age 14 to courses on Coursera, freeCodeCamp, Scrimba, and Udemy. 30,000+ students reached.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Full-Stack Development */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-8 shadow-xl border border-indigo-200 h-full hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-200/30 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-300/40 transition-colors duration-300" />
                <div className="relative z-10">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                    Full-Stack Development
                  </h3>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                    Building web applications, APIs, and tools with modern technologies. From concept to deployment, I can handle the entire development lifecycle.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Sales Engineering */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 shadow-xl border border-pink-200 h-full hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-pink-200/30 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-pink-300/40 transition-colors duration-300" />
                <div className="relative z-10">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                    Sales Engineering
                  </h3>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                    Bridging the gap between customers and engineering. I translate complex technical concepts into clear solutions that drive sales and customer success.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Content Creation */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 shadow-xl border border-amber-200 h-full hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/30 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-amber-300/40 transition-colors duration-300" />
                <div className="relative z-10">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                    Content Creation
                  </h3>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                    Technical walkthroughs, tutorials, product demos, and educational content. I create videos that make complex topics accessible and engaging.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Storytelling */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8 shadow-xl border border-teal-200 h-full hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-200/30 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-teal-300/40 transition-colors duration-300" />
                <div className="relative z-10">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                    Storytelling
                  </h3>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                    Turning technical information into compelling narratives. Whether it's documentation, videos, or presentations, I make your message stick.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-10 px-4 sm:px-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Rafid Hoda
            </p>
            <div className="flex items-center gap-4">
              <a
                href="mailto:hello@rafidhoda.com"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Email
              </a>
              <a
                href="https://linkedin.com/in/rafidhoda"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a
                href="https://youtube.com/@rafidhoda"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
