"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import { CTAButton } from "../components/CTAButton";

export function AntiTemplateSection() {
  const competitors = ['Wix', 'GoDaddy', 'Squarespace'];

  return (
    <section className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Headline & Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 
              className="text-white mb-6"
              style={{
                fontFamily: "'Inter Tight', sans-serif",
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 700,
                lineHeight: '1.1',
                letterSpacing: '-0.02em'
              }}
            >
              NO WIX.<br />
              NO GODADDY.<br />
              NO SHORTCUTS.
            </h2>

            <p 
              className="text-[#888888] mb-8"
              style={{
                fontFamily: "'Inter Tight', sans-serif",
                fontSize: '1.125rem',
                lineHeight: '1.7',
                fontWeight: 400
              }}
            >
              We don't drag-and-drop. We forge from the ground up. 
              Bespoke code for high-performance brands that refuse to blend in.
            </p>

            {/* Code Preview */}
            <div className="bg-black/60 border border-gray-800 p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <code 
                className="text-[#00D2FF] block"
                style={{
                  fontFamily: "'Courier New', monospace",
                  fontSize: '0.875rem',
                  lineHeight: '1.6'
                }}
              >
                <span className="text-purple-400">const</span> site = <span className="text-green-400">ForgedDigital</span>()<br />
                <span className="text-purple-400">  .build</span>(<span className="text-orange-400">'from-scratch'</span>)<br />
                <span className="text-purple-400">  .deploy</span>(<span className="text-orange-400">'production'</span>)
              </code>
            </div>
          </motion.div>

          {/* Right: Competitor Icons with X */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {competitors.map((competitor, index) => (
              <motion.div
                key={competitor}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="flex items-center gap-4 p-6 bg-black/40 border border-gray-800 hover:border-red-500/50 transition-colors">
                  {/* Icon Placeholder */}
                  <div className="w-14 h-14 bg-gray-800/50 rounded flex items-center justify-center">
                    <span 
                      className="text-gray-500 font-bold"
                      style={{
                        fontFamily: "'Inter Tight', sans-serif",
                        fontSize: '0.875rem'
                      }}
                    >
                      {competitor.substring(0, 2).toUpperCase()}
                    </span>
                  </div>

                  {/* Name */}
                  <span 
                    className="flex-1 text-gray-400 line-through"
                    style={{
                      fontFamily: "'Inter Tight', sans-serif",
                      fontSize: '1.125rem',
                      fontWeight: 500
                    }}
                  >
                    {competitor}
                  </span>

                  {/* Red X */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center border-2 border-red-500"
                  >
                    <X className="w-5 h-5 text-red-500" strokeWidth={3} />
                  </motion.div>
                </div>
              </motion.div>
            ))}

            {/* Custom Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 p-6 bg-[#00D2FF]/10 border border-[#00D2FF]/50"
            >
              <div className="w-14 h-14 bg-[#00D2FF]/20 rounded flex items-center justify-center">
                <div className="w-2 h-2 bg-[#00D2FF] rounded-full animate-pulse" />
              </div>

              <span 
                className="flex-1 text-white font-semibold"
                style={{
                  fontFamily: "'Inter Tight', sans-serif",
                  fontSize: '1.125rem'
                }}
              >
                Custom-Built Solution
              </span>

              <div className="w-10 h-10 bg-[#00D2FF]/20 rounded-full flex items-center justify-center">
                <div className="w-2 h-6 bg-[#00D2FF] rounded" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}