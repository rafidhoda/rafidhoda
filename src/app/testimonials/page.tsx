"use client";

import Image from "next/image";

const allTestimonials = [
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
  {
    name: "Harry Hindess",
    role: "Sales Manager",
    company: "SalesScreen",
    image: "/recommenders/harry-hindess.jpeg",
    text: "Rafid is an excellent communicator with a natural ability to simplify complex problems for customers. Across multiple customer projects, he was thorough, professional, and consistently delivered a fantastic experience by making technical ideas easy to understand.",
  },
  {
    name: "Divv Saxena",
    role: "Founding Engineer",
    company: "AI Collective",
    image: "/recommenders/divv-saxena.jpeg",
    text: "If there is one person who fundamentally changed the way I think, build, and operate it's Rafid. I met him during the first batch of Learning Machines, at a time when I was still figuring out my direction. Rafid didn't just teach code or game design. He taught a way of thinking how to stay curious, how to build relentlessly, how to treat learning as a lifelong habit instead of a phase. The biggest shift for me came from how he pushed us to create, reflect, and improve continuously. That mindset alone changed my trajectory. The projects I built months apart looked like they were made by two completely different people and that transformation came from Rafid's guidance. He leads with kindness, clarity, and high expectations. He believes in you before you even believe in yourself. And that kind of mentorship is rare. Anyone who gets to learn from or work with Rafid is genuinely lucky. He doesn't just teach skills he shapes how you think, and that stays with you forever.",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            Testimonials
          </h1>
          <p className="text-xl sm:text-2xl text-gray-400 max-w-2xl mx-auto">
            What people say about working with me
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 px-4 sm:px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allTestimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="p-8 border border-gray-800 rounded-lg bg-zinc-900 hover:border-gray-700 transition-colors"
              >
                <div className="flex flex-col items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-4 ring-2 ring-gray-700">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-lg mb-1">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">
                      {testimonial.role}{testimonial.company ? ` at ${testimonial.company}` : ''}
                    </p>
                  </div>
                </div>

                <blockquote className="text-gray-300 leading-relaxed text-left">
                  {testimonial.text}
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Rafid Hoda
            </p>
            <div className="flex items-center gap-6">
              <a
                href="mailto:hello@rafidhoda.com"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Email
              </a>
              <a
                href="https://linkedin.com/in/rafidhoda"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://youtube.com/@rafidhoda"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-white transition-colors"
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
