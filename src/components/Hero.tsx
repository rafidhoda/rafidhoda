"use client";

import { motion } from "framer-motion";

interface HeroProps {
  pageTitle: string;
  subtitle: string;
  isHomePage?: boolean;
}

export default function Hero({ pageTitle, subtitle, isHomePage = false }: HeroProps) {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[65vh] flex items-center justify-center px-4 sm:px-6 pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20 overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
      {/* Enhanced background with depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-blue-900/20 via-purple-900/30 to-pink-900/20 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(120,119,198,0.2),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(251,146,60,0.15),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_70%)] pointer-events-none" />
      
      {/* Animated grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />
      
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="text-center">
          {isHomePage ? (
            <>
              {/* Name - Big on home page, no page title */}
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
                  {/* Subtle glow effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-400/30 via-purple-400/30 via-pink-400/30 to-orange-400/30 blur-2xl -z-10" />
                </span>
              </motion.h1>
            </>
          ) : (
            <>
              {/* Name - Small on other pages */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.6, -0.05, 0.01, 0.99] }}
                className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-gray-400 tracking-tight"
              >
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                  Rafid Hoda
                </span>
              </motion.h1>

              {/* Page Title - Big on other pages */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.6, -0.05, 0.01, 0.99] }}
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold mb-4 sm:mb-6 tracking-[-0.04em] leading-[0.9]"
              >
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent drop-shadow-2xl">
                    {pageTitle}
                  </span>
                  {/* Subtle glow effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-400/30 via-purple-400/30 via-pink-400/30 to-orange-400/30 blur-2xl -z-10" />
                </span>
              </motion.h2>
            </>
          )}

          {/* Custom Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl text-gray-200 font-semibold leading-[1.3] tracking-[-0.015em] mb-8 sm:mb-10 md:mb-12 max-w-5xl mx-auto"
          >
            {subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"
          >
            <a
              href="mailto:hello@rafidhoda.com"
              className="inline-block px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold text-lg sm:text-xl md:text-2xl rounded-full shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              Email me
            </a>
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
      </div>
    </section>
  );
}

