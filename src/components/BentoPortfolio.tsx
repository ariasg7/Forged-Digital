"use client";

import { motion } from "framer-motion";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { FileCode } from "lucide-react";
import { CTAButton } from "../components/CTAButton";

const portfolioItems = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Application',
    image: 'https://images.unsplash.com/photo-1590965918603-0dce981d13b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBtYWNib29rJTIwbW9ja3VwJTIwZGFya3xlbnwxfHx8fDE3Njk2MTIxMDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    size: 'large',
    kpi: 'Performance: +45% Speed | Architecture: Next.js/SSR'
  },
  {
    title: 'Mobile Banking App',
    category: 'iOS & Android',
    image: 'https://images.unsplash.com/photo-1691256676376-357c3aa66c89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwbW9ja3VwJTIwc2NyZWVufGVufDF8fHx8MTc2OTYxMjExMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    size: 'small',
    kpi: 'Performance: +62% Conversion | Architecture: React Native'
  },
  {
    title: 'SaaS Dashboard',
    category: 'Web Application',
    image: 'https://images.unsplash.com/photo-1643610994100-9d200244b53e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwbW9ja3VwJTIwZGV2aWNlfGVufDF8fHx8MTc2OTYxMjEwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    size: 'small',
    kpi: 'Performance: +38% Speed | Architecture: React/Vite'
  },
  {
    title: 'Content Management',
    category: 'Admin Panel',
    image: 'https://images.unsplash.com/photo-1722316805351-d5a56965f926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZXQlMjBpcGFkJTIwbW9ja3VwfGVufDF8fHx8MTc2OTYxMjExMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    size: 'small',
    kpi: 'Performance: +51% Speed | Architecture: Next.js/API'
  },
  {
    title: 'Portfolio Website',
    category: 'Creative Studio',
    image: 'https://images.unsplash.com/photo-1590965918603-0dce981d13b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBtYWNib29rJTIwbW9ja3VwJTIwZGFya3xlbnwxfHx8fDE3Njk2MTIxMDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    size: 'large',
    kpi: 'Performance: +73% Speed | Architecture: Astro/SSG'
  },
  {
    title: 'Fintech Platform',
    category: 'Web Application',
    image: 'https://images.unsplash.com/photo-1643610994100-9d200244b53e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwbW9ja3VwJTIwZGV2aWNlfGVufDF8fHx8MTc2OTYxMjEwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    size: 'small',
    kpi: 'Performance: +55% Speed | Architecture: TypeScript/Node'
  }
];

export function BentoPortfolio() {
  return (
    <section id="portfolio" className="relative py-32 px-6">
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
            className="text-white mb-3"
            style={{
              fontFamily: "'Inter Tight', sans-serif",
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em'
            }}
          >
            Selected Work
          </h2>
          <p 
            className="text-[#888888]"
            style={{
              fontFamily: "'Inter Tight', sans-serif",
              fontSize: '1rem',
              fontWeight: 400
            }}
          >
            Projects built from the ground up
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden bg-black/40 border border-gray-800 hover:border-[#00D2FF]/50 transition-all duration-300 ${
                item.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p 
                  className="text-[#00D2FF] text-xs uppercase tracking-wider mb-2"
                  style={{
                    fontFamily: "'Inter Tight', sans-serif",
                    fontWeight: 600,
                    letterSpacing: '0.1em'
                  }}
                >
                  {item.category}
                </p>
                <h3 
                  className="text-white"
                  style={{
                    fontFamily: "'Inter Tight', sans-serif",
                    fontSize: item.size === 'large' ? '1.5rem' : '1.125rem',
                    fontWeight: 600
                  }}
                >
                  {item.title}
                </h3>
              </div>

              {/* Logic Proof Overlay - Appears on Hover */}
              <div className="absolute inset-0 bg-black/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6">
                {/* Blueprint Icon */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="mb-6 w-16 h-16 border border-[#00D2FF] flex items-center justify-center"
                >
                  <FileCode className="w-8 h-8 text-[#00D2FF]" strokeWidth={1.5} />
                </motion.div>

                {/* KPI Metrics */}
                <div 
                  className="text-center text-white font-mono text-sm mb-2"
                  style={{
                    fontFamily: "'Roboto Mono', 'Courier New', monospace",
                    fontSize: '0.875rem',
                    letterSpacing: '0.02em'
                  }}
                >
                  {item.kpi}
                </div>

                {/* View Case Study Button */}
                <button
                  className="mt-4 px-6 py-2 border border-[#00D2FF] text-[#00D2FF] hover:bg-[#00D2FF] hover:text-black transition-all text-xs uppercase tracking-wider"
                  style={{
                    fontFamily: "'Inter Tight', sans-serif",
                    fontWeight: 600,
                    letterSpacing: '0.1em'
                  }}
                >
                  View Technical Specs
                </button>
              </div>

              {/* Blue Glow on Hover */}
              <div 
                className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full h-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-3xl"
                style={{
                  background: 'radial-gradient(circle, rgba(0, 210, 255, 0.4) 0%, transparent 70%)'
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}