"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

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

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 border-gray-200/80 shadow-sm' 
        : 'bg-transparent border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16 sm:h-20">
          <div className="flex items-center gap-5 sm:gap-7 md:gap-9">
            {[
              { label: "Home", href: "/" },
              { label: "Videos", href: "/videos" },
              { label: "CV", href: "#" },
              { label: "Courses", href: "#" },
              { label: "Contact", href: "#" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-base sm:text-lg md:text-xl font-medium transition-colors duration-200 relative group ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-gray-900' 
                    : 'text-gray-100 hover:text-white'
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 ${
                  isScrolled ? 'bg-gray-900' : 'bg-white'
                } group-hover:w-full`} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-4 sm:px-6 pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-20 overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
        {/* Enhanced background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-blue-900/20 via-purple-900/30 to-pink-900/20 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(120,119,198,0.2),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(251,146,60,0.15),transparent_60%)] pointer-events-none" />
        
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
        
        <div className="relative z-10 max-w-7xl mx-auto w-full text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold mb-4 sm:mb-6 tracking-[-0.04em] leading-[0.9]"
          >
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent drop-shadow-2xl">
                Rafid Hoda
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400/30 via-purple-400/30 via-pink-400/30 to-orange-400/30 blur-2xl -z-10" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 font-semibold leading-[1.3] tracking-[-0.015em] mb-8 sm:mb-10 md:mb-12 max-w-4xl mx-auto"
          >
            The Seller. The Builder. The Teacher. The Storyteller.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"
          >
            <button
              onClick={() => {
                if (typeof window !== 'undefined' && window.$crisp) {
                  window.$crisp.push(['do', 'chat:open']);
                }
              }}
              className="inline-block px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold text-lg sm:text-xl md:text-2xl rounded-full shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              Chat with me now
            </button>
            <a
              href="https://cal.com/rafidhoda/20-minute-intro-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold text-lg sm:text-xl md:text-2xl rounded-full shadow-2xl hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              Book a 20-min call
            </a>
          </motion.div>
        </div>
      </section>

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
