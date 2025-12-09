"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = window.innerHeight * 0.85;
      setIsScrolled(scrollPosition > heroHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside or on a link
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Videos", href: "/videos" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "CV", href: "#" },
    { label: "Courses", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 border-gray-200/80 shadow-sm' 
        : 'bg-transparent border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center gap-5 sm:gap-7 md:gap-9">
              {navItems.map((item) => (
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1.5 focus:outline-none ${
              isScrolled ? 'text-gray-700' : 'text-gray-100'
            }`}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${
                isMobileMenuOpen
                  ? 'rotate-45 translate-y-2 bg-gray-700'
                  : isScrolled
                  ? 'bg-gray-700'
                  : 'bg-gray-100'
              }`}
            />
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${
                isMobileMenuOpen
                  ? 'opacity-0'
                  : isScrolled
                  ? 'bg-gray-700'
                  : 'bg-gray-100'
              }`}
            />
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${
                isMobileMenuOpen
                  ? '-rotate-45 -translate-y-2 bg-gray-700'
                  : isScrolled
                  ? 'bg-gray-700'
                  : 'bg-gray-100'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 top-16 sm:top-20 bg-white backdrop-blur-md z-40 overflow-y-auto"
        >
          <div className="flex flex-col items-center justify-start pt-8 pb-6 px-4 min-h-full">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-medium text-gray-900 hover:text-gray-700 transition-colors duration-200 py-4 w-full text-center border-b border-gray-200 last:border-b-0"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

