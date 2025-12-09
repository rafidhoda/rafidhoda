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
  {
    name: "Vidar Haaland",
    role: "Sales Team Lead",
    company: "SalesScreen",
    image: "/recommenders/vidar-haaland.jpeg",
    text: "I've often joked that Rafid 'is the only person who could teach me algebra'. What I mean by that is that Rafid is good at communicating technical concepts and ideas to another person so that it becomes easy to understand. I've been in many customer meetings with Rafid during a 2-year period. Some that have lasted for several hours. Rafid has an uncanny ability to structure the meetings in such a way that customer problems get solved fast and efficiently. He puts a lot of work into planning and preparation. It's been great having Rafid's positive energy at the office. He is a very likable person that both the customers and his colleagues enjoy talking with. Rafid is a person you can trust both with work and outside of work. He is a person that always wants his colleagues to succeed, meaning that he works very well in a team. I have nothing but positive things to say about Rafid, and I'm talking from 2 years' experience working closely with him.",
  },
  {
    name: "Maria Mitsos",
    role: "Customer Success Manager",
    company: "SalesScreen",
    image: "/recommenders/maria-mitsos.jpeg",
    text: "Working with Rafid is a true pleasure. As a CSM, you lean on your SE to get answers and advocate for your customer. Rafid always has some type of solution or answer. He will not respond until there is one. He is patient and takes the time to communicate what the plan is. He knows how to simplify the need and share it in a way that makes sense, where I can walk away knowing the job is done or on its way to being done. You are solid, and I am truly happy I got to work alongside you, Rafid! Thank you for teaching me some of those bits and pieces you move around.",
  },
  {
    name: "Anandhakumar Palanisamy",
    role: "Software Developer",
    company: "Secure-NOK",
    image: "/recommenders/anandhakumar-palanisamy.jpeg",
    text: "I had the pleasure to work with Rafid Hoda, as an assistant teacher in a 'JavaScript Game Development course' held in Stavanger, Norway for kids aged 9 - 16. Rafid is an excellent developer with very good vision and amazing explanatory skills. He had pre-planned the course structure very well and organised it in such a way that it will be easy for the kids to follow and understand. He had the wonderful vision of introducing the basics of 'programming in game development' to the kids and inspire them to develop something on their own. The course involved live coding of games and designing the characters & objects required for the game. Rafid always made sure that all the kids in the class were able to understand the logic behind the game they are developing. He also made sure to inspire the kids to build their own characters for the games. In the end of the course, it was great to see some kids were able to modify their game code to implement their own design process in the game. It was a great learning experience for me to assist in his beautiful vision.",
  },
  {
    name: "Arwa Ahmed Mawlod",
    role: "Parent",
    company: "",
    image: "/recommenders/arwa-ahmed-mawlod.jpeg",
    text: "Rafid was absolutely wonderful with Layan during her 90-minute Roblox programming session. He was patient, creative, and made learning fun and easy to understand. Layan felt so encouraged and excited the whole time she didn't even notice how quickly the session went by! Rafid not only taught her real coding concepts through Roblox Studio but also motivated her with kindness and positivity. He truly goes above and beyond even surprising her with 500 Robux for doing such a great job! That thoughtful gesture really showed how much he cares about his students' progress. If you're a parent thinking about booking a session with him, I'd 100% recommend it. Your child will learn, laugh, and feel inspired the whole time. Rafid is one of those rare teachers who makes coding feel like a fun adventure.",
  },
  {
    name: "Andrew",
    role: "Parent",
    company: "",
    image: "",
    text: "CurlyBrackets offers young students the opportunity to participate in a format that reflects the professional environment. Learning coding skills and languages that can form the basis of a career, along with the experience of working in a collaborative team, where each student's individual efforts come together to build a viable game. Once the game has been built, it is then updated and developed using more ambitious concepts and new software. And I'm sure that is a mirror of what happens in the industry itself. My son enjoys showing new acquaintances his game. And it is clearly a source of pride that has contributed to his self-esteem, particularly important for a second-born son. While we started in Oslo, and then moved to New York, the flexibility of the CurlyBrackets team has meant that Jacob has been able to maintain his participation with this innovative group of applied trainers. Recently they've added video feedback to parents of students. This is particularly well received for those parents who struggle to find time to read, and watching it together with Jacob makes this feedback particularly valuable.",
  },
  {
    name: "Rachel Brask-Tyrrell",
    role: "Parent",
    company: "",
    image: "",
    text: "My son absolutely loves his weekly classes at Curly Brackets. He has attended several other coding classes at different companies in the past, but Curly Brackets is by far his favourite. He has learned how to use HTML, CSS and Figma to create a very impressive, interactive, professional website. The class strikes an excellent balance between group learning and individual project work. Rafid, the co-head of CB, is an excellent educator. He cares about the children's learning journey and he is able to spark their passion for coding. I like how Rafid creates the possibility of long term partnerships with parents and their children to enable the child to develop their technical skills, think about how they can use them in real world scenarios, and build a community of friends with a similar passion. I am really thrilled we found this company and I highly recommend it!",
  },
  {
    name: "Helge Opstad",
    role: "Parent",
    company: "",
    image: "",
    text: "This course is absolutely great! Rafid Hoda explains in a simple, clear, and engaging way, so that both children and adults can follow along. He makes it fun to learn, and you notice that he is truly passionate about what he teaches. The assignments are well-structured, and you quickly get a sense of accomplishment when you see the results in the Roblox world. Highly recommended!",
  },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0
  }
};

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 overflow-x-hidden">
      <Navbar />

      <Hero 
        pageTitle="Testimonials"
        subtitle="What people say about working with me"
      />

      {/* Testimonials Grid */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(0 0 0) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {allTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.05, ease: [0.4, 0, 0.2, 1] }}
              >
                <div className="bg-white rounded-2xl p-6 sm:p-7 md:p-8 shadow-xl border border-gray-200 h-full flex flex-col hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-purple-50/0 to-pink-50/0 group-hover:from-blue-50/30 group-hover:via-purple-50/20 group-hover:to-pink-50/30 transition-all duration-300 pointer-events-none" />
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Author Info */}
                    <div className="flex flex-col items-center mb-4">
                      {testimonial.image && (
                        <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 rounded-full bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 overflow-hidden flex-shrink-0 ring-2 ring-gray-200 shadow-lg flex items-center justify-center mb-2">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={72}
                            height={72}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="text-center">
                        <p className="font-semibold text-gray-900 text-sm sm:text-base md:text-lg mb-0.5">
                          {testimonial.name}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 font-medium">
                          {testimonial.role}{testimonial.company ? ` at ${testimonial.company}` : ''}
                        </p>
                      </div>
                    </div>

                    {/* Quote */}
                    <blockquote className="text-base sm:text-lg md:text-xl font-normal text-gray-700 leading-relaxed tracking-[-0.01em] text-left flex-grow flex items-start">
                      {testimonial.text}
                    </blockquote>
                  </div>
                </div>
              </motion.div>
            ))}
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

