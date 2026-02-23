"use client";

import { motion } from "framer-motion";

const industries = [
  'FINTECH',
  'HIGH-END MANUFACTURING',
  'VENTURE CAPITAL',
  'REAL ESTATE',
  'AUTOMOTIVE',
  'HEALTHCARE',
  'LEGAL SERVICES',
  'TECHNOLOGY'
];

export function IndustryRibbon() {
  return (
    <section className="relative py-16 bg-black border-y border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Label */}
        <div className="text-center mb-8">
          <p 
            className="text-gray-500 uppercase tracking-wider"
            style={{
              fontFamily: "'Inter Tight', sans-serif",
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.2em'
            }}
          >
            Engineered for Industry Leaders
          </p>
        </div>

        {/* Industry Logos/Text Ribbon */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

          <div className="flex">
            {/* First set */}
            <motion.div
              animate={{
                x: [0, -1600]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
              className="flex gap-12 items-center pr-12"
            >
              {[...industries, ...industries].map((industry, index) => (
                <div
                  key={`${industry}-${index}`}
                  className="flex-shrink-0 px-8 py-4 border border-gray-800/50 bg-black/40"
                  style={{
                    opacity: 0.4,
                    filter: 'grayscale(100%)'
                  }}
                >
                  <span 
                    className="text-gray-400 whitespace-nowrap"
                    style={{
                      fontFamily: "'Inter Tight', sans-serif",
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      letterSpacing: '0.15em'
                    }}
                  >
                    {industry}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Second set for seamless loop */}
            <motion.div
              animate={{
                x: [0, -1600]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
              className="flex gap-12 items-center pr-12"
            >
              {[...industries, ...industries].map((industry, index) => (
                <div
                  key={`${industry}-dup-${index}`}
                  className="flex-shrink-0 px-8 py-4 border border-gray-800/50 bg-black/40"
                  style={{
                    opacity: 0.4,
                    filter: 'grayscale(100%)'
                  }}
                >
                  <span 
                    className="text-gray-400 whitespace-nowrap"
                    style={{
                      fontFamily: "'Inter Tight', sans-serif",
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      letterSpacing: '0.15em'
                    }}
                  >
                    {industry}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
