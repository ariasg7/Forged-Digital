"use client";

import { motion } from "framer-motion";
import { CTAButton } from "../components/CTAButton";

const tools = [
  'React',
  'Next.js',
  'Tailwind CSS',
  'Figma',
  'AWS',
  'Vercel',
  'TypeScript',
  'Node.js',
  'MongoDB',
  'PostgreSQL'
];

export function ToolCarousel() {
  return (
    <section id="tools" className="relative py-20 overflow-hidden border-y border-gray-800/50">
      {/* Section Label */}
      <div className="text-center mb-8">
        <p 
          className="text-gray-500 uppercase tracking-wider"
          style={{
            fontFamily: "'Inter Tight', sans-serif",
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.15em'
          }}
        >
          Powered By
        </p>
      </div>

      {/* Infinite Marquee */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

        <div className="flex">
          {/* First set */}
          <motion.div
            animate={{
              x: [0, -1920]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            className="flex gap-16 items-center pr-16"
          >
            {[...tools, ...tools].map((tool, index) => (
              <div
                key={`${tool}-${index}`}
                className="flex-shrink-0"
              >
                <span 
                  className="text-gray-600 hover:text-[#00D2FF] transition-colors whitespace-nowrap"
                  style={{
                    fontFamily: "'Inter Tight', sans-serif",
                    fontSize: '1.25rem',
                    fontWeight: 500,
                    letterSpacing: '-0.01em'
                  }}
                >
                  {tool}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Second set for seamless loop */}
          <motion.div
            animate={{
              x: [0, -1920]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            className="flex gap-16 items-center pr-16"
          >
            {[...tools, ...tools].map((tool, index) => (
              <div
                key={`${tool}-dup-${index}`}
                className="flex-shrink-0"
              >
                <span 
                  className="text-gray-600 hover:text-[#00D2FF] transition-colors whitespace-nowrap"
                  style={{
                    fontFamily: "'Inter Tight', sans-serif",
                    fontSize: '1.25rem',
                    fontWeight: 500,
                    letterSpacing: '-0.01em'
                  }}
                >
                  {tool}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}