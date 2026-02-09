"use client";

import { motion } from "framer-motion";
import { Code2, Wrench, Zap } from "lucide-react";

export function AboutUs() {
  const principles = [
    {
      icon: Code2,
      title: 'Engineering First',
      description: 'Every line of code is purposeful. We build systems that scale, not just pages that display.'
    },
    {
      icon: Wrench,
      title: 'Custom Architecture',
      description: 'No drag-and-drop shortcuts. Pure code, optimized performance, full control.'
    },
    {
      icon: Zap,
      title: 'Performance Driven',
      description: 'Speed is non-negotiable. We engineer for milliseconds, not just aesthetics.'
    }
  ];

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
          <h2 
            className="text-white mb-4"
            style={{
              fontFamily: "'Inter Tight', sans-serif",
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em'
            }}
          >
            Engineering vs. Decoration
          </h2>
          <p 
            className="text-[#888888] max-w-3xl mx-auto"
            style={{
              fontFamily: "'Inter Tight', sans-serif",
              fontSize: '1.125rem',
              fontWeight: 400,
              lineHeight: '1.8'
            }}
          >
            We don't decorate websites. We engineer digital products. Every project starts with architecture, 
            not templates. Every line of code serves a purpose. Every interaction is intentional.
          </p>
        </motion.div>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative p-8 border border-gray-800 bg-black/40 hover:border-[#00D2FF]/50 transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="mb-6 w-12 h-12 border border-[#00D2FF]/30 flex items-center justify-center group-hover:border-[#00D2FF] transition-colors">
                  <Icon className="w-6 h-6 text-[#00D2FF]" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 
                  className="text-white mb-3"
                  style={{
                    fontFamily: "'Inter Tight', sans-serif",
                    fontSize: '1.25rem',
                    fontWeight: 600
                  }}
                >
                  {principle.title}
                </h3>

                {/* Description */}
                <p 
                  className="text-gray-400"
                  style={{
                    fontFamily: "'Inter Tight', sans-serif",
                    fontSize: '0.875rem',
                    fontWeight: 400,
                    lineHeight: '1.6'
                  }}
                >
                  {principle.description}
                </p>

                {/* Subtle glow on hover */}
                <div 
                  className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-2xl"
                  style={{
                    background: 'radial-gradient(circle, rgba(0, 210, 255, 0.3) 0%, transparent 70%)'
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Philosophy Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto p-8 border-l-2 border-[#00D2FF]/50 bg-gradient-to-r from-[#00D2FF]/5 to-transparent"
        >
          <p 
            className="text-gray-300 italic"
            style={{
              fontFamily: "'Inter Tight', sans-serif",
              fontSize: '1.125rem',
              fontWeight: 400,
              lineHeight: '1.8'
            }}
          >
            "The difference between engineering and decoration is simple: one builds systems that last, 
            the other applies cosmetic changes that fade. We build for longevity, performance, and scale."
          </p>
          <p 
            className="text-[#00D2FF] mt-3"
            style={{
              fontFamily: "'Inter Tight', sans-serif",
              fontSize: '0.875rem',
              fontWeight: 600,
              letterSpacing: '0.05em'
            }}
          >
            — FORGED DIGITAL ENGINEERING PHILOSOPHY
          </p>
        </motion.div>
      </div>
    </section>
  );
}
