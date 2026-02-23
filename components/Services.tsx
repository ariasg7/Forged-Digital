"use client";

import { motion } from "framer-motion";
import { Code2, TrendingUp, Award, ArrowRight, Zap, Shield, Target } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: 'Custom Coded Websites',
    tagline: 'Zero Templates. Pure Engineering.',
    description: 'Hand-forged, pixel-perfect code built for performance. No drag-and-drop shortcuts. Every line is intentional, optimized, and built to scale.',
    features: [
      'Bespoke React/Next.js Architecture',
      'Sub-100ms Load Times',
      'Mobile-First Responsive Design',
      'Advanced Animation & Interactions'
    ],
    metric: '45% Faster',
    color: '#00D2FF',
    badge: 'FLAGSHIP'
  },
  {
    icon: TrendingUp,
    title: 'SEO Optimization',
    tagline: 'Engineered for Discovery.',
    description: 'Strategic SEO architecture that ranks. From technical foundation to content strategy, we build sites that search engines love and users convert on.',
    features: [
      'Technical SEO Audit & Implementation',
      'Core Web Vitals Optimization',
      'Schema Markup & Structured Data',
      'Performance & Speed Optimization'
    ],
    metric: '3x Traffic',
    color: '#00FF88',
    badge: 'GROWTH'
  },
  {
    icon: Award,
    title: 'Brand Design',
    tagline: 'Authority by Design.',
    description: 'Visual identity systems that command attention and establish market authority. We craft brands that communicate expertise at every touchpoint.',
    features: [
      'Visual Identity Systems',
      'Brand Strategy & Positioning',
      'Design Language & Guidelines',
      'Market Differentiation'
    ],
    metric: '100% Custom',
    color: '#FF00FF',
    badge: 'AUTHORITY'
  }
];

export function Services() {
  return (
    <section className="relative py-32 px-6 bg-black overflow-hidden">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(#00D2FF 1px, transparent 1px), linear-gradient(90deg, #00D2FF 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Gradient Glow */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[800px] opacity-15 blur-[120px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(0, 210, 255, 0.4) 0%, transparent 70%)'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#00D2FF]/30 bg-[#00D2FF]/5 mb-6">
            <Zap className="w-4 h-4 text-[#00D2FF]" />
            <span 
              className="text-[#00D2FF] font-mono text-xs tracking-wider"
              style={{
                fontWeight: 600
              }}
            >
              CORE SERVICES
            </span>
          </div>

          <h2 
            className="text-white mb-6"
            style={{
              fontFamily: "'Inter Tight', sans-serif",
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              letterSpacing: '-0.03em'
            }}
          >
            Built to Dominate
          </h2>
          <p 
            className="text-[#888888] max-w-3xl mx-auto"
            style={{
              fontFamily: "'Inter Tight', sans-serif",
              fontSize: '1.125rem',
              letterSpacing: '-0.01em',
              lineHeight: '1.7'
            }}
          >
            Three pillars of digital excellence. Custom code, strategic visibility, and authoritative design—forged into one unstoppable platform.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Service Card */}
                <div 
                  className="relative h-full border border-[#00D2FF]/20 bg-gradient-to-b from-black/80 to-black/40 p-8 hover:border-[#00D2FF]/60 transition-all duration-500 overflow-hidden"
                  style={{
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)'
                  }}
                >
                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-[#00D2FF]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-[#00D2FF]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Badge */}
                  <div className="absolute top-6 right-6">
                    <div 
                      className="px-3 py-1 border border-[#00D2FF]/40 bg-[#00D2FF]/5 backdrop-blur-sm"
                      style={{
                        fontFamily: "'Inter Tight', sans-serif",
                        fontSize: '0.625rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        color: service.color
                      }}
                    >
                      {service.badge}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mb-6 relative">
                    <div 
                      className="w-16 h-16 border border-[#00D2FF]/40 bg-gradient-to-br from-[#00D2FF]/10 to-transparent flex items-center justify-center group-hover:border-[#00D2FF] transition-colors duration-500"
                      style={{
                        backdropFilter: 'blur(5px)'
                      }}
                    >
                      <Icon 
                        className="w-8 h-8 text-[#00D2FF]" 
                        strokeWidth={1.5} 
                      />
                    </div>
                    
                    {/* Icon Glow */}
                    <div 
                      className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle, ${service.color}40 0%, transparent 70%)`
                      }}
                    />
                  </div>

                  {/* Title */}
                  <h3 
                    className="text-white mb-2"
                    style={{
                      fontFamily: "'Inter Tight', sans-serif",
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      letterSpacing: '-0.02em'
                    }}
                  >
                    {service.title}
                  </h3>

                  {/* Tagline */}
                  <p 
                    className="text-[#00D2FF] mb-4"
                    style={{
                      fontFamily: "'Inter Tight', sans-serif",
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      letterSpacing: '0.02em'
                    }}
                  >
                    {service.tagline}
                  </p>

                  {/* Description */}
                  <p 
                    className="text-gray-400 mb-6"
                    style={{
                      fontFamily: "'Inter Tight', sans-serif",
                      fontSize: '0.9375rem',
                      lineHeight: '1.7',
                      letterSpacing: '-0.01em'
                    }}
                  >
                    {service.description}
                  </p>

                  {/* Divider */}
                  <div className="h-[1px] bg-gradient-to-r from-transparent via-[#00D2FF]/30 to-transparent mb-6" />

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <li 
                        key={i}
                        className="flex items-start gap-2 text-gray-300"
                        style={{
                          fontFamily: "'Inter Tight', sans-serif",
                          fontSize: '0.875rem',
                          lineHeight: '1.6'
                        }}
                      >
                        <Shield className="w-4 h-4 text-[#00D2FF] flex-shrink-0 mt-0.5" strokeWidth={2} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Metric Badge */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-800/50">
                    <div 
                      className="inline-flex items-center gap-2 px-3 py-2 border border-[#00D2FF]/30 bg-[#00D2FF]/5"
                      style={{
                        backdropFilter: 'blur(5px)'
                      }}
                    >
                      <Target className="w-4 h-4 text-[#00D2FF]" />
                      <span 
                        className="text-[#00D2FF] font-mono text-sm"
                        style={{
                          fontWeight: 600
                        }}
                      >
                        {service.metric}
                      </span>
                    </div>

                    {/* Learn More Arrow */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <ArrowRight className="w-5 h-5 text-[#00D2FF]" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Hover Glow */}
                  <div 
                    className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full h-40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-3xl"
                    style={{
                      background: `radial-gradient(ellipse, ${service.color}40 0%, transparent 70%)`
                    }}
                  />

                  {/* Scanning Line Effect */}
                  <motion.div
                    className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00D2FF] to-transparent opacity-0 group-hover:opacity-100"
                    initial={{ top: 0 }}
                    animate={{ top: ["0%", "100%"] }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "linear",
                      repeatDelay: 1
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div 
            className="inline-block px-8 py-4 border-l-2 border-[#00D2FF]/60 bg-gradient-to-r from-[#00D2FF]/10 to-transparent"
          >
            <p 
              className="text-white mb-1"
              style={{
                fontFamily: "'Inter Tight', sans-serif",
                fontSize: '1.125rem',
                fontWeight: 600,
                letterSpacing: '-0.01em'
              }}
            >
              All services engineered in-house. No outsourcing. No exceptions.
            </p>
            <p 
              className="text-[#888888] text-sm"
              style={{
                fontFamily: "'Inter Tight', sans-serif"
              }}
            >
              Full-stack expertise under one roof
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
