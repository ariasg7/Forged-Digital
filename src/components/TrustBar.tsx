"use client";

import { motion } from "framer-motion";

export function TrustBar() {
  const metrics = [
    { value: '120+', label: 'Websites Built' },
    { value: '300+', label: 'Deployments' },
    { value: '50+', label: 'Consultations' }
  ];

  return (
    <section className="relative py-12 border-t border-b border-gray-800/50 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center divide-x divide-gray-700">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex-1 text-center px-8"
            >
              <div 
                className="text-[#00D2FF] font-mono mb-1"
                style={{
                  fontFamily: "'Courier New', 'Roboto Mono', monospace",
                  fontSize: 'clamp(2rem, 3vw, 2.5rem)',
                  fontWeight: 700,
                  letterSpacing: '0.02em'
                }}
              >
                {metric.value}
              </div>
              <div 
                className="text-gray-500 uppercase tracking-wider"
                style={{
                  fontFamily: "'Inter Tight', sans-serif",
                  fontSize: '0.75rem',
                  letterSpacing: '0.15em',
                  fontWeight: 500
                }}
              >
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
