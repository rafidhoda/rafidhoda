"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Experience from "@/components/Experience";
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
    role: "Specialist Fluid Characterization & PVT",
    company: "ADNOC Onshore",
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

// Animation variants for scroll reveals
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
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

function QuoteCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [selectedQuote, setSelectedQuote] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % heroQuotes.length);
    }, 5000); // Change quote every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + heroQuotes.length) % heroQuotes.length);
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % heroQuotes.length);
  };

  const quote = heroQuotes[currentIndex];

  return (
    <>
      <div className="relative w-full max-w-5xl mx-auto">
        <div className="min-h-[280px] sm:min-h-[300px] md:min-h-[320px] flex flex-col justify-center">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 sm:-left-4 md:-left-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/90 backdrop-blur-lg border-2 border-gray-200 hover:border-purple-400 shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-110 group"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 group-hover:text-purple-600 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 sm:-right-4 md:-right-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/90 backdrop-blur-lg border-2 border-gray-200 hover:border-purple-400 shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-110 group"
            aria-label="Next testimonial"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 group-hover:text-purple-600 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
              }}
              className="text-center px-8 sm:px-12 md:px-16"
            >
              {/* Quote */}
              <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 leading-[1.3] tracking-[-0.01em] mb-4 sm:mb-5 max-w-4xl mx-auto min-h-[100px] sm:min-h-[110px] md:min-h-[120px] flex items-center justify-center">
                &quot;{quote.preview}
                {quote.preview !== quote.fullText && <span className="opacity-60">...</span>}
                &quot;
              </blockquote>

              {/* Read Full Testimonial Button */}
              {quote.preview !== quote.fullText && (
                <button
                  onClick={() => setSelectedQuote(currentIndex)}
                  className="mx-auto mb-6 sm:mb-8 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gray-100 hover:bg-purple-100 text-gray-700 hover:text-purple-700 text-xs sm:text-sm font-medium transition-all duration-200 hover:scale-105 hover:shadow-md cursor-pointer"
                >
                  Read full testimonial
                </button>
              )}

              {/* Author Info */}
              <div className="flex items-center justify-center gap-4 sm:gap-5">
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 overflow-hidden flex-shrink-0 ring-3 ring-white shadow-xl flex items-center justify-center">
                  <Image
                    src={quote.image}
                    alt={quote.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">{quote.name}</p>
                  <p className="text-xs sm:text-sm text-gray-700 font-medium">
                    {quote.role} at {quote.company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-4 sm:mt-6">
            {heroQuotes.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 w-10 shadow-lg"
                    : "bg-gray-300 hover:bg-gray-400 w-2"
                }`}
                aria-label={`Go to quote ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Full Text Modal */}
      <AnimatePresence>
        {selectedQuote !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedQuote(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-8 sm:p-10 md:p-12 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">What Others Say</h3>
                <button
                  onClick={() => setSelectedQuote(null)}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                  aria-label="Close"
                >
                  <svg
                    className="w-5 h-5 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="mb-6">
                <blockquote className="text-lg sm:text-xl md:text-2xl text-gray-800 leading-relaxed mb-6">
                  &quot;{heroQuotes[selectedQuote].fullText}&quot;
                </blockquote>

                <div className="flex items-center gap-4 pt-6 border-t-2 border-gray-200">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 overflow-hidden flex-shrink-0 ring-4 ring-white shadow-xl">
                    <Image
                      src={heroQuotes[selectedQuote].image}
                      alt={heroQuotes[selectedQuote].name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg sm:text-xl">
                      {heroQuotes[selectedQuote].name}
                    </p>
                    <p className="text-sm sm:text-base text-gray-700 font-medium">
                      {heroQuotes[selectedQuote].role} at {heroQuotes[selectedQuote].company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[500px] max-h-[750px] flex items-center justify-center px-4 sm:px-6 pt-12 sm:pt-16 pb-12 sm:pb-16 overflow-hidden">
        {/* Vibrant background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 via-pink-50 to-amber-50 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(251,146,60,0.1),transparent_50%)] pointer-events-none" />
        
        <div className="relative z-10 max-w-6xl mx-auto w-full h-full flex flex-col justify-center">
          <div className="text-center mb-6 sm:mb-8">
            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-3 sm:mb-4 tracking-[-0.03em] leading-[0.95]"
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent drop-shadow-lg">
                Rafid Hoda
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.6, -0.05, 0.01, 0.99] }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 font-semibold leading-[1.2] tracking-[-0.01em] max-w-3xl mx-auto mb-6 sm:mb-8"
            >
              The Seller. The Builder. The Teacher. The Storyteller.
            </motion.p>
          </div>

          {/* Animated Quotes Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="relative"
          >
            {/* Decorative quote marks */}
            <div className="absolute -top-8 sm:-top-10 md:-top-12 left-1/2 transform -translate-x-1/2 text-6xl sm:text-7xl md:text-8xl lg:text-9xl bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent font-serif leading-none pointer-events-none select-none opacity-30">
              &ldquo;
            </div>
            
            <QuoteCarousel />
          </motion.div>

          {/* Scroll Down Arrow - Positioned at section divider */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20"
          >
            <motion.a
              href="#intro"
              className="flex items-center justify-center bg-white/90 backdrop-blur-lg rounded-full p-2 sm:p-2.5 shadow-lg border-2 border-gray-200 hover:border-purple-400 text-gray-600 hover:text-gray-900 transition-colors cursor-pointer group"
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.a>
          </motion.div>
        </div>
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
      </section>

      {/* Teaching Impact Section */}
      <TeachingImpact />

      {/* Experience Section */}
      <section className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-[-0.02em] leading-[1.1]">
              <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-semibold tracking-[-0.01em]">
              Across sales, engineering, and education
            </p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{ visible: { opacity: 1 } }}
          >
            <Experience />
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-[-0.02em] leading-[1.1]">
              <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Key Milestones
              </span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-semibold tracking-[-0.01em]">
              Projects and achievements I&apos;m proud of
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="space-y-4 sm:space-y-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                className="flex items-start gap-4 sm:gap-5 p-5 sm:p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:bg-white hover:shadow-lg hover:border-gray-300/50 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span className="text-3xl sm:text-4xl flex-shrink-0">{achievement.icon}</span>
                <p className="text-base sm:text-lg text-gray-800 leading-relaxed pt-1">
                  {achievement.text.split("*").map((part, i) =>
                    i % 2 === 1 ? (
                      <strong key={i} className="font-semibold text-gray-900">
                        {part}
                      </strong>
                    ) : (
                      part
                    )
                  )}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-200 text-lg sm:text-xl font-medium">
            Let&apos;s connect and build something great together
          </p>
        </div>
      </footer>
    </div>
  );
}
