"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Technologies from "@/components/Technologies";
import TeachingImpact from "@/components/TeachingImpact";

const recommendations = [
  {
    name: "Per Borgen",
    role: "CEO and co-founder",
    company: "Scrimba",
    image: "/recommenders/per-borgen.jpeg",
    text: "Rafid has a rare mix of technical, design, and communication skills that let him tackle projects most teams need several people for. His courses were polished, fun, and full of storytelling and humor — always delivered with a smile.",
  },
  {
    name: "Maria Mitsos",
    role: "Customer Success Manager",
    company: "SalesScreen",
    image: "/recommenders/maria-mitsos.jpeg",
    text: "Rafid always finds a solution and takes time to communicate clearly. He simplifies complex needs so everyone leaves confident the job's done — a solid teammate and a pleasure to work with. His calm, thoughtful approach makes collaboration effortless.",
  },
  {
    name: "Harry Hindess",
    role: "Account Executive",
    company: "SalesScreen",
    image: "/recommenders/harry-hindess.jpeg",
    text: "Rafid makes complex ideas simple for customers and helps move deals forward with clarity and confidence. From pre-sales calls to full integrations, he's thorough, professional, and a true partner in closing business.",
  },
  {
    name: "Øystein Heimark",
    role: "CTO & Co-founder",
    company: "SalesScreen",
    image: "/recommenders/oystein-heimark.jpeg",
    text: "Rafid bridges the gap between customers and engineering with rare technical depth and clear communication. He uncovers challenges, finds creative solutions, and explains complex problems in simple, human terms. His teaching background shines through in every interaction, making him invaluable to both clients and colleagues.",
  },
  {
    name: "Sindre Haaland",
    role: "CEO & Co-founder",
    company: "SalesScreen",
    image: "/recommenders/sindre-haaland.jpeg",
    text: "Rafid is passionate about understanding customer needs and solving complex problems. His unique ability to simplify and explain through video made him a go-to problem solver, earning praise from colleagues and customers alike for turning tough integrations into clear, workable solutions.",
  },
  {
    name: "Arwa Ahmed Mawlod",
    role: "Petroleum Engineer",
    company: "ADNOC",
    image: "/recommenders/arwa-ahmed-mawlod.jpeg",
    text: "Rafid was amazing with my daughter, Layan — patient, creative, and made coding in Roblox Studio fun and easy to understand. She stayed engaged and inspired the entire session. His kindness, encouragement, and personal touch truly make him a rare teacher who turns learning into an adventure.",
  },
  {
    name: "Divv Saxena",
    role: "Founding Engineer",
    company: "AI Collective",
    image: "/recommenders/divv-saxena.jpeg",
    text: "If there is one person who fundamentally changed the way I think, build, and operate it's Rafid. He didn't just teach code or game design. He taught a way of thinking — how to stay curious, how to build relentlessly, how to treat learning as a lifelong habit instead of a phase. The biggest shift for me came from how he pushed us to create, reflect, and improve continuously. He leads with kindness, clarity, and high expectations. He believes in you before you even believe in yourself. Anyone who gets to learn from or work with Rafid is genuinely lucky. He doesn't just teach skills — he shapes how you think, and that stays with you forever.",
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
  const cardWidth = 400;
  const gap = 24;
  const totalWidth = heroQuotes.length * (cardWidth + gap);

  return (
    <div className="relative w-full overflow-hidden" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
      {/* Auto-scrolling testimonials */}
      <motion.div
        className="flex gap-6"
        animate={{
          x: [0, -totalWidth],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 60, // Very slow - 60 seconds for full cycle
            ease: "linear",
          },
        }}
      >
        {/* Duplicate testimonials for seamless loop */}
        {[...heroQuotes, ...heroQuotes].map((quote, index) => (
          <div
            key={`${quote.name}-${index}`}
            className="flex-shrink-0 w-[85vw] sm:w-[380px] md:w-[400px]"
          >
            <div className="bg-white rounded-2xl p-6 sm:p-7 md:p-8 shadow-xl border border-gray-200 h-full flex flex-col">
              {/* Author Info - Above Quote */}
              <div className="flex flex-col items-center mb-5 sm:mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 rounded-full bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 overflow-hidden flex-shrink-0 ring-2 ring-gray-200 shadow-lg flex items-center justify-center mb-3">
                  <Image
                    src={quote.image}
                    alt={quote.name}
                    width={72}
                    height={72}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <p className="font-bold text-gray-900 text-sm sm:text-base md:text-lg mb-1">{quote.name}</p>
                  <p className="text-xs sm:text-sm text-gray-600 font-medium">
                    {quote.role} at {quote.company}
                  </p>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 leading-[1.4] tracking-[-0.01em] text-center flex-grow flex items-center">
                &quot;{quote.preview}
                {quote.preview !== quote.fullText && <span className="opacity-60">...</span>}
                &quot;
              </blockquote>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// Video Carousel Component
function VideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const videos = [
    {
      id: "a3Jb5CO1iNs",
      title: "Lesson from Roblox Studio for Beginners Course",
    },
    {
      id: "cJYVUnE8gIM",
      title: "#1 Create a new Firebase Project",
    },
    {
      id: "0VPpdnocoHk",
      title: "Daily Routine app in 5 mins",
    },
    {
      id: "SdqrX5TEUQ4",
      title: "Narration for Peerlist",
    },
  ];

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="relative"
    >
      {/* Video Container */}
      <div className="relative max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <div className="relative w-full aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src={`https://www.youtube.com/embed/${videos[currentIndex].id}`}
                title={videos[currentIndex].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                {videos[currentIndex].title}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {currentIndex + 1} of {videos.length}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-0 sm:-left-12 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all duration-200 hover:scale-110 z-10 cursor-pointer"
          aria-label="Previous video"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-0 sm:-right-12 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all duration-200 hover:scale-110 z-10 cursor-pointer"
          aria-label="Next video"
        >
          <svg
            className="w-6 h-6 text-gray-700"
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
        </button>
      </div>
    </motion.div>
  );
}

export default function Home() {
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
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo/Image - Left aligned */}
            <button
              onClick={scrollToTop}
              className="flex items-center hover:opacity-80 transition-opacity duration-200 cursor-pointer p-2 sm:p-3"
              aria-label="Scroll to top"
            >
              <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                <Image
                  src="/rafid-hoda.png"
                  alt="Rafid Hoda"
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </div>
            </button>

            {/* Navigation Items - Right aligned */}
            <div className="flex items-center gap-5 sm:gap-7 md:gap-9">
              {[
                { label: "About", href: "#intro" },
                { label: "Technologies", href: "#technologies" },
                { label: "Teaching", href: "#teaching" },
                { label: "Content", href: "#content" },
              ].map((item) => (
                <a
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
                </a>
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
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 font-semibold leading-[1.3] tracking-[-0.015em] max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12"
            >
              The Seller. The Builder. The Teacher. The Storyteller.
            </motion.p>
          </div>


        </div>
      </section>

      {/* What People Are Saying Section */}
      <section className="py-16 sm:py-20 md:py-24 px-0 bg-white">
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

        <TestimonialsCarousel />
      </section>

      {/* Intro Section */}
      <section id="intro" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="text-center"
          >
            {/* Profile Picture */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="mb-4 sm:mb-6 flex justify-center"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32">
                <Image
                  src="/rafid-hoda.png"
                  alt="Rafid Hoda"
                  width={128}
                  height={128}
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 text-gray-900 leading-[1.15] tracking-[-0.02em]"
            >
              Hey 👋 I&apos;m Rafid
            </motion.p>

            {/* Roles Badges */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="mb-4 sm:mb-6"
            >
              <div className="w-full grid grid-cols-2 md:flex md:flex-row md:justify-center items-center gap-3 sm:gap-4 max-w-3xl mx-auto">
                {[
                  { title: "Account Executive", bgColor: "bg-blue-100", textColor: "text-blue-700", borderColor: "border-blue-300", hoverBg: "hover:bg-blue-200" },
                  { title: "Sales Engineer", bgColor: "bg-purple-100", textColor: "text-purple-700", borderColor: "border-purple-300", hoverBg: "hover:bg-purple-200" },
                  { title: "Full-Stack Engineer", bgColor: "bg-indigo-100", textColor: "text-indigo-700", borderColor: "border-indigo-300", hoverBg: "hover:bg-indigo-200" },
                  { title: "Video Producer", bgColor: "bg-pink-100", textColor: "text-pink-700", borderColor: "border-pink-300", hoverBg: "hover:bg-pink-200" },
                  { title: "Teacher", bgColor: "bg-amber-100", textColor: "text-amber-700", borderColor: "border-amber-300", hoverBg: "hover:bg-amber-200" },
                  { title: "Content Creator", bgColor: "bg-teal-100", textColor: "text-teal-700", borderColor: "border-teal-300", hoverBg: "hover:bg-teal-200" },
                ].map((role, index) => (
                  <div
                    key={index}
                    className={`
                      ${role.bgColor} ${role.textColor} ${role.borderColor} ${role.hoverBg}
                      px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3
                      rounded-full
                      border-2
                      font-bold text-sm sm:text-base
                      hover:shadow-lg hover:scale-105
                      transition-all duration-300
                      text-center
                      whitespace-nowrap
                    `}
                  >
                    {role.title}
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="space-y-3 sm:space-y-4 text-base sm:text-lg md:text-xl text-gray-700 leading-[1.6] tracking-[-0.01em] font-medium"
            >
              <p>
                I write, code, design, make videos, teach, and build tools and apps.
              </p>
              <p>
                I like to spend a lot of time testing and trying to understand what to build.
              </p>
              <p className="pt-2 sm:pt-3 text-gray-900 font-semibold">
                I&apos;m currently looking for companies interested in doing projects with me or hiring me full time.
              </p>
            </motion.div>
          </motion.div>
          
          {/* Technologies Section */}
          <div id="technologies">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="mt-6 sm:mt-8 md:mt-10"
            >
              <div className="max-w-7xl mx-auto">
                <Technologies />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Teaching Impact Section */}
      <div id="teaching">
        <TeachingImpact />
      </div>

      {/* Content Creation Section */}
      <section id="content" className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-gray-900 tracking-tight">
              Content Creation
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-800 leading-relaxed max-w-4xl mx-auto font-medium">
              Do you need someone who can take your product updates and turn them into clear, professional videos that your customers can understand and act on?
            </p>
          </motion.div>

          {/* Video Carousel */}
          <VideoCarousel />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-t border-gray-700/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="text-center"
          >
            {/* Name and Tagline */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white">
              Rafid Hoda
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 font-medium">
              The Seller. The Builder. The Teacher. The Storyteller.
            </p>

            {/* Social Links / Contact */}
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mb-8 sm:mb-10">
              <a
                href="mailto:hello@rafidhoda.com"
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base font-medium"
              >
                Email
              </a>
              <span className="text-gray-600">•</span>
              <a
                href="https://linkedin.com/in/rafidhoda"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base font-medium"
              >
                LinkedIn
              </a>
              <span className="text-gray-600">•</span>
              <a
                href="https://github.com/rafidhoda"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base font-medium"
              >
                GitHub
              </a>
              <span className="text-gray-600">•</span>
              <a
                href="https://youtube.com/@rafidhoda"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base font-medium"
              >
                YouTube
              </a>
            </div>

            {/* CTA */}
            <p className="text-lg sm:text-xl md:text-2xl text-white font-semibold mb-6 sm:mb-8">
              Let&apos;s connect and build something great together
            </p>

            {/* Copyright */}
            <div className="pt-6 sm:pt-8 border-t border-gray-700/50">
              <p className="text-sm sm:text-base text-gray-400">
                © {new Date().getFullYear()} Rafid Hoda. All rights reserved.
              </p>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
