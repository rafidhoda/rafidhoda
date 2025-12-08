"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Courses from "@/components/Courses";

const teachingImages = [
  "/teaching-pictures/1.jpg",
  "/teaching-pictures/2.jpg",
  "/teaching-pictures/3.jpg",
  "/teaching-pictures/4.jpg",
  "/teaching-pictures/5.jpg",
  "/teaching-pictures/6.jpg",
  "/teaching-pictures/7.JPG",
  "/teaching-pictures/8.JPG",
  "/teaching-pictures/9.JPG",
  "/teaching-pictures/10.JPG",
  "/teaching-pictures/11.JPG",
];

// Counter animation hook
function useCountUp(end: number, duration: number = 2000, start: number = 0) {
  const [count, setCount] = useState(start);
  const frameRef = useRef<number>();
  const startTimeRef = useRef<number>();

  useEffect(() => {
    startTimeRef.current = Date.now();
    const animate = () => {
      const now = Date.now();
      const elapsed = now - (startTimeRef.current || 0);
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(start + (end - start) * easeOutQuart);
      
      setCount(currentCount);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [end, duration, start]);

  return count;
}

function AnimatedNumber({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(value, 2000, 0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const displayCount = isVisible ? count : 0;

  return (
    <div ref={ref}>
      {prefix}
      {displayCount.toLocaleString()}
      {suffix}
    </div>
  );
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function TeachingImpact() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 tracking-tight">
            Teaching
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            I have been teaching in different ways for the last 20 years. I started making video tutorials at age 14, before YouTube existed. Since then I have run courses, camps, workshops, and online programs, and I have mentored students from all over the world.
          </p>
        </motion.div>

        {/* Horizontal Scrolling Photo Gallery */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-12 sm:mb-16"
        >
          {/* Mobile scroll indicator */}
          <div className="md:hidden text-center mb-3">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full text-xs font-medium text-gray-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Scroll to browse pictures
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>

          {/* Mobile: Scrollable container */}
          <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            <div className="flex gap-4 min-w-max">
              {teachingImages.map((image, index) => (
                <motion.div
                  key={image}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className="relative w-64 h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex-shrink-0"
                >
                  <Image
                    src={image}
                    alt={`Teaching moment ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="256px"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop: Auto-scrolling carousel edge-to-edge */}
          <div className="hidden md:block overflow-hidden relative" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
            <motion.div
              className="flex gap-4"
              animate={{
                x: [0, -50 * (teachingImages.length * 384 + teachingImages.length * 16)],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 3000,
                  ease: "linear",
                },
              }}
            >
              {/* Duplicate images for seamless loop */}
              {[...teachingImages, ...teachingImages, ...teachingImages].map((image, index) => (
                <div
                  key={`${image}-${index}`}
                  className="relative w-96 h-96 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex-shrink-0"
                >
                  <Image
                    src={image}
                    alt={`Teaching moment ${(index % teachingImages.length) + 1}`}
                    fill
                    className="object-cover"
                    sizes="384px"
                    quality={95}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Courses Section */}
        <div className="mb-8 sm:mb-10">
          <Courses />
        </div>

        {/* Compact Stats */}
        <div className="flex justify-center items-center gap-8 sm:gap-12 md:gap-16 mb-8">
          {/* 30,000+ Students */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center"
          >
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 text-gray-900">
              <AnimatedNumber value={30000} suffix="+" />
            </div>
            <p className="text-xs sm:text-sm text-gray-600">Students reached since 2005</p>
          </motion.div>

          {/* 1,000+ Kids */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center"
          >
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 text-gray-900">
              <AnimatedNumber value={1000} suffix="+" />
            </div>
            <p className="text-xs sm:text-sm text-gray-600">Kids taught since 2017</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
