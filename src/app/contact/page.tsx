"use client";

import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Contact Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            Contact
          </h1>
          <p className="text-xl sm:text-2xl text-gray-400 mb-12 max-w-2xl">
            Let's connect and discuss how we can work together
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="mailto:hello@rafidhoda.com"
              className="p-8 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors group"
            >
              <div className="mb-4">
                <svg className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Email</h3>
              <p className="text-gray-400 mb-4">Send me an email</p>
              <p className="text-white">hello@rafidhoda.com</p>
            </a>

            <a
              href="https://linkedin.com/in/rafidhoda"
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors group"
            >
              <div className="mb-4">
                <svg className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">LinkedIn</h3>
              <p className="text-gray-400 mb-4">Connect with me</p>
              <p className="text-white">linkedin.com/in/rafidhoda</p>
            </a>

            <a
              href="https://youtube.com/@rafidhoda"
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors group"
            >
              <div className="mb-4">
                <svg className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">YouTube</h3>
              <p className="text-gray-400 mb-4">Watch my videos</p>
              <p className="text-white">youtube.com/@rafidhoda</p>
            </a>

            <a
              href="https://rafidhoda.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors group"
            >
              <div className="mb-4">
                <svg className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Website</h3>
              <p className="text-gray-400 mb-4">Visit my website</p>
              <p className="text-white">rafidhoda.com</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
