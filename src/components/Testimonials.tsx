"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const testimonials = [
  {
    client: 'Sarah Mitchell',
    company: 'Vertex Capital',
    role: 'CEO',
    quote: 'Performance metrics exceeded expectations. 45% speed improvement over our legacy platform. Engineering quality is unmatched.',
    timestamp: '2024-01-15'
  },
  {
    client: 'Marcus Chen',
    company: 'Precision Manufacturing',
    role: 'CTO',
    quote: 'Finally, a team that understands architecture. No templates, no shortcuts. Pure engineered solutions.',
    timestamp: '2024-02-08'
  },
  {
    client: 'Elena Rodriguez',
    company: 'Quantum Fintech',
    role: 'VP of Product',
    quote: 'Delivered on time, under budget, and exceeded performance benchmarks. This is how software should be built.',
    timestamp: '2024-03-22'
  },
  {
    client: 'David Park',
    company: 'Sterling Legal Group',
    role: 'Managing Partner',
    quote: 'Transformed our digital presence completely. The attention to technical detail is what sets them apart.',
    timestamp: '2023-12-10'
  },
  {
    client: 'Amanda Foster',
    company: 'Horizon Ventures',
    role: 'Director of Operations',
    quote: 'Best investment we made in our tech stack. The platform scales effortlessly and performance is exceptional.',
    timestamp: '2024-01-28'
  },
  {
    client: 'James Sullivan',
    company: 'Axiom Real Estate',
    role: 'Founder',
    quote: 'No fluff, no gimmicks. Just solid engineering and exceptional results. Highly recommend.',
    timestamp: '2024-02-19'
  }
];

export function Testimonials() {
  return (
    <section className="relative py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Terminal className="w-8 h-8 text-[#00D2FF]" strokeWidth={1.5} />
            <h2 
              className="text-white"
              style={{
                fontFamily: "'Inter Tight', sans-serif",
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 700,
                letterSpacing: '-0.02em'
              }}
            >
              Client Feedback Log
            </h2>
          </div>
          <p 
            className="text-[#888888] font-mono"
            style={{
              fontFamily: "'Courier New', 'Roboto Mono', monospace",
              fontSize: '0.875rem',
              letterSpacing: '0.05em'
            }}
          >
            $ cat testimonials.log | grep -i "verified"
          </p>
        </motion.div>

        {/* Testimonials Grid - Terminal Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative border border-[#00D2FF]/30 bg-black/60 p-6 hover:border-[#00D2FF] transition-all duration-300 group"
              style={{
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)'
              }}
            >
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-800">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <span 
                  className="text-gray-500 font-mono text-xs"
                  style={{
                    fontFamily: "'Courier New', 'Roboto Mono', monospace"
                  }}
                >
                  {testimonial.timestamp}.log
                </span>
              </div>

              {/* Quote - Terminal Output Style */}
              <div className="mb-4">
                <p 
                  className="text-[#00D2FF] font-mono mb-1 text-xs"
                  style={{
                    fontFamily: "'Courier New', 'Roboto Mono', monospace"
                  }}
                >
                  &gt; OUTPUT:
                </p>
                <p 
                  className="text-gray-300 font-mono"
                  style={{
                    fontFamily: "'Courier New', 'Roboto Mono', monospace",
                    fontSize: '0.875rem',
                    lineHeight: '1.6'
                  }}
                >
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Client Info */}
              <div className="pt-3 border-t border-gray-800">
                <p 
                  className="text-white font-mono text-sm mb-1"
                  style={{
                    fontFamily: "'Courier New', 'Roboto Mono', monospace",
                    fontWeight: 600
                  }}
                >
                  {testimonial.client}
                </p>
                <p 
                  className="text-gray-500 font-mono text-xs"
                  style={{
                    fontFamily: "'Courier New', 'Roboto Mono', monospace"
                  }}
                >
                  {testimonial.role} @ {testimonial.company}
                </p>
              </div>

              {/* Verification Badge */}
              <div className="absolute top-4 right-4">
                <div 
                  className="px-2 py-1 border border-[#00D2FF]/50 bg-[#00D2FF]/10 text-[#00D2FF] text-xs font-mono"
                  style={{
                    fontFamily: "'Courier New', 'Roboto Mono', monospace",
                    fontSize: '0.625rem'
                  }}
                >
                  VERIFIED
                </div>
              </div>

              {/* Glow effect */}
              <div 
                className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-2xl"
                style={{
                  background: 'radial-gradient(circle, rgba(0, 210, 255, 0.3) 0%, transparent 70%)'
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
