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

const recommendations = [
  {
    name: "Øystein Heimark",
    role: "CTO",
    company: "SalesScreen",
    image: "/recommenders/oystein-heimark.jpeg",
    text: "Rafid combines deep technical understanding with exceptional communication. He was the bridge between customers and engineering, always explaining even the most complex problems in simple terms. His video walkthroughs and documentation made it easy for both internal teams and customers to understand and adopt the platform.",
  },
  {
    name: "Per Borgen",
    role: "CEO",
    company: "Scrimba",
    image: "/recommenders/per-borgen.jpeg",
    text: "Rafid has a rare mix of technical skill, design sense, and communication ability. He produces videos and explanations that most companies would need an entire team for. Everything he creates is polished, clear, and pedagogically strong, turning complex concepts into something fun and easy to understand.",
  },
  {
    name: "Sindre Haaland",
    role: "CEO",
    company: "SalesScreen",
    image: "/recommenders/sindre-haaland.jpeg",
    text: "Rafid has a unique ability to simplify and explain complex problems through video. His work helped our customers and internal teams understand difficult concepts faster, and he consistently received internal praise for the clarity of his explanations.",
  },
];

// Animation variants for scroll reveals
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0
  }
};


// Create hero quotes with short previews and full text from recommendations
const heroQuotes = recommendations.map((rec) => {
  // Extract first sentence or first ~120 characters as preview
  const firstSentence = rec.text.match(/^[^.!?]+[.!?]/)?.[0] || rec.text.substring(0, 120);
  const preview = firstSentence.length < rec.text.length ? firstSentence : rec.text.substring(0, 120) + "...";
  
  return {
    preview: preview.trim(),
    fullText: rec.text,
    name: rec.name,
    role: rec.role,
    company: rec.company,
    image: rec.image,
  };
});

function TestimonialsCarousel() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
        {heroQuotes.map((quote, index) => (
          <motion.div
            key={quote.name}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="bg-white rounded-2xl p-6 sm:p-7 md:p-8 shadow-xl border border-gray-200 h-full flex flex-col hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-purple-50/0 to-pink-50/0 group-hover:from-blue-50/30 group-hover:via-purple-50/20 group-hover:to-pink-50/30 transition-all duration-300 pointer-events-none" />
              <div className="relative z-10 flex flex-col h-full">
                {/* Author Info - Above Quote */}
                <div className="flex flex-col items-center mb-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 rounded-full bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 overflow-hidden flex-shrink-0 ring-2 ring-gray-200 shadow-lg flex items-center justify-center mb-2">
                    <Image
                      src={quote.image}
                      alt={quote.name}
                      width={72}
                      height={72}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-gray-900 text-sm sm:text-base md:text-lg mb-0.5">{quote.name}</p>
                    <p className="text-xs sm:text-sm text-gray-600 font-medium">
                      {quote.role}{quote.company ? ` at ${quote.company}` : ''}
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-base sm:text-lg md:text-xl font-normal text-gray-700 leading-relaxed tracking-[-0.01em] text-left flex-grow flex items-center">
                  {quote.fullText}
                </blockquote>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function VideosPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Hero section is approximately 85-90vh, so transition around 70vh
      const heroHeight = window.innerHeight * 0.85;
      setIsScrolled(scrollPosition > heroHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

              return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 overflow-x-hidden">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 border-gray-200/80 shadow-sm' 
          : 'bg-transparent border-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-16 sm:h-20">
            {/* Navigation Items - Centered */}
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

      {/* Hero Section */}
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
            {/* Name with enhanced styling */}
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

            {/* Subtitle with better typography */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.6, -0.05, 0.01, 0.99] }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl text-gray-200 font-semibold leading-[1.3] tracking-[-0.015em] mb-8 sm:mb-10 md:mb-12 whitespace-nowrap overflow-x-auto"
            >
              I create product videos that save your team thousands of explanations
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


        </div>
      </section>

      {/* 20 Years of Technical Videos Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-gray-900 tracking-tight whitespace-nowrap">
              I&apos;ve been making technical videos for 20 years.
            </h2>
            
            <div className="space-y-4 sm:space-y-5 text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-700 leading-relaxed text-left">
              <p>
                When I was 14, I created a{' '}
                <a
                  href="https://www.youtube.com/watch?v=8R360sP1zHs"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
                >
                  coding tutorial
                </a>
                {' '}called Slice and Code a Website. It went viral before YouTube even existed. It became so popular that 15,000 people tried to watch it in one month and it crashed my server.
              </p>
              
              <p>
                Since then, I&apos;ve taught thousands of people through{' '}
                <a
                  href="https://www.coursera.org/instructor/~140543294"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
                >
                  Coursera
                </a>
                {', '}
                <a
                  href="https://www.udemy.com/course/roblox-studio-for-beginners"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
                >
                  Udemy
                </a>
                {', '}
                <a
                  href="https://www.youtube.com/watch?v=UFD4SP91tSM"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
                >
                  freeCodeCamp
                </a>
                {', and '}
                <a
                  href="https://scrimba.com/build-a-mobile-app-with-firebase-c0g"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
                >
                  Scrimba
                </a>
                . I&apos;ve used video to make life easier for Sales, Support, Engineering, and Product teams. I even built a video-based job-hunting framework that gets a 70% reply rate (industry average is 2 percent).
              </p>

              {/* Company Logos */}
              <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-10 mt-6 sm:mt-8 opacity-70">
                <Image
                  src="/companies/coursera.png"
                  alt="Coursera"
                  width={120}
                  height={40}
                  className="h-8 sm:h-10 md:h-12 w-auto transition-opacity duration-300 hover:opacity-100"
                />
                <Image
                  src="/companies/udemy.png"
                  alt="Udemy"
                  width={120}
                  height={40}
                  className="h-8 sm:h-10 md:h-12 w-auto transition-opacity duration-300 hover:opacity-100"
                />
                <Image
                  src="/companies/freeCodeCamp.png"
                  alt="freeCodeCamp"
                  width={120}
                  height={40}
                  className="h-8 sm:h-10 md:h-12 w-auto transition-opacity duration-300 hover:opacity-100"
                />
                <Image
                  src="/companies/scrimba.png"
                  alt="Scrimba"
                  width={120}
                  height={40}
                  className="h-8 sm:h-10 md:h-12 w-auto transition-opacity duration-300 hover:opacity-100"
                />
              </div>
              
              <p>
                If something is complicated, there is a good chance I&apos;ve already made a video that makes everyone&apos;s life easier.
              </p>

              <p>
                Today, I help companies explain their product once, in a way that scales to customers, teams, and partners forever.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What People Are Saying Section */}
      <section className="py-16 sm:py-20 md:py-24 px-0 bg-gradient-to-br from-gray-50 to-slate-50 relative overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(0 0 0) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        <div className="mb-10 sm:mb-12 md:mb-16 px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="text-center max-w-7xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              What people are saying
            </h2>
          </motion.div>
        </div>

        <div className="relative z-10">
          <TestimonialsCarousel />
          
          {/* Read All Testimonials Link */}
          <div className="text-center mt-8 sm:mt-10 px-4 sm:px-6">
            <a
              href="/testimonials"
              className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium text-base sm:text-lg transition-colors duration-200 group"
            >
              Read all testimonials
              <svg
                className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* What I Can Do Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-amber-50/20 to-orange-50/20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-orange-200/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-amber-200/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Title */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              What I can do for your company
            </h2>
          </motion.div>

          {/* Video Preview */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="mb-12 sm:mb-16"
          >
            <div className="max-w-3xl mx-auto">
              <div className="relative w-full aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
                  <iframe
                  src="https://www.youtube.com/embed/pizTc0soNZo"
                  title="Video Preview"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
            </div>
          </motion.div>

          {/* Deliverables Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mb-12 sm:mb-16">
            {/* Deliverable #1 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="bg-white rounded-2xl p-6 sm:p-7 md:p-8 shadow-xl border border-blue-100 h-full hover:shadow-2xl hover:border-blue-200 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/30 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-200/40 transition-colors duration-300" />
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                    Product Explanation Videos
                  </h3>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    Clear, concise videos that explain your product&apos;s core concepts, features, and workflows. These videos reduce support load, speed up onboarding, and help every team speak the same language.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Deliverable #2 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="bg-white rounded-2xl p-6 sm:p-7 md:p-8 shadow-xl border border-purple-100 h-full hover:shadow-2xl hover:border-purple-200 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100/30 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-purple-200/40 transition-colors duration-300" />
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                    Technical Walkthroughs and Demos
                  </h3>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    Step-by-step demos that simplify complex workflows. Perfect for engineering handoffs, pre-sales, onboarding, and internal training.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Deliverable #3 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="bg-white rounded-2xl p-6 sm:p-7 md:p-8 shadow-xl border border-indigo-100 h-full hover:shadow-2xl hover:border-indigo-200 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100/30 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-200/40 transition-colors duration-300" />
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                    Customer Training Content
                  </h3>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    Reusable training content that teaches customers how to use your product without needing one-on-one guidance.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Deliverable #4 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="bg-white rounded-2xl p-6 sm:p-7 md:p-8 shadow-xl border border-pink-100 h-full hover:shadow-2xl hover:border-pink-200 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-pink-100/30 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-pink-200/40 transition-colors duration-300" />
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                    Internal Enablement Videos
                  </h3>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    Short videos that help Sales, Support, and Success teams understand the product deeply, so they can deliver value without relying on engineers.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Paragraph */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="text-center max-w-4xl mx-auto mb-8 sm:mb-12"
          >
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 sm:mb-10">
              Most teams waste hours repeating the same explanation across Sales, Support, Engineering, and Success. I help you explain your product once, clearly, in a format that scales across the entire organization.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
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
                className="inline-block px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 bg-white border-2 border-gray-300 text-gray-900 font-bold text-lg sm:text-xl md:text-2xl rounded-full shadow-xl hover:shadow-2xl hover:border-gray-400 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                Book a 20-min call
              </a>
            </div>
          </motion.div>
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
