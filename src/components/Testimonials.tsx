"use client";
import { motion } from "framer-motion";
import { Terminal, Quote, Star, CheckCircle2, Building2, User } from "lucide-react";

const testimonials = [
  {
    client: 'Sarah Mitchell',
    company: 'Vertex Capital',
    role: 'CEO',
    quote: 'Performance metrics exceeded expectations. 45% speed improvement over our legacy platform. Engineering quality is unmatched.',
    timestamp: '2024-01-15',
    rating: 5,
    metric: '+45% Performance'
  },
  {
    client: 'Marcus Chen',
    company: 'Precision Manufacturing',
    role: 'CTO',
    quote: 'Finally, a team that understands architecture. No templates, no shortcuts. Pure engineered solutions.',
    timestamp: '2024-02-08',
    rating: 5,
    metric: '100% Custom'
  },
  {
    client: 'Elena Rodriguez',
    company: 'Quantum Fintech',
    role: 'VP of Product',
    quote: 'Delivered on time, under budget, and exceeded performance benchmarks. This is how software should be built.',
    timestamp: '2024-03-22',
    rating: 5,
    metric: 'Under Budget'
  },
  {
    client: 'David Park',
    company: 'Sterling Legal Group',
    role: 'Managing Partner',
    quote: 'Transformed our digital presence completely. The attention to technical detail is what sets them apart.',
    timestamp: '2023-12-10',
    rating: 5,
    metric: 'Full Transform'
  },
  {
    client: 'Amanda Foster',
    company: 'Horizon Ventures',
    role: 'Director of Operations',
    quote: 'Best investment we made in our tech stack. The platform scales effortlessly and performance is exceptional.',
    timestamp: '2024-01-28',
    rating: 5,
    metric: 'Infinite Scale'
  },
  {
    client: 'James Sullivan',
    company: 'Axiom Real Estate',
    role: 'Founder',
    quote: 'No fluff, no gimmicks. Just solid engineering and exceptional results. Highly recommend.',
    timestamp: '2024-02-19',
    rating: 5,
    metric: 'Zero Fluff'
  }
];

export function Testimonials() {
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
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] opacity-20 blur-[120px] pointer-events-none"
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
          <div className="flex items-center justify-center gap-3 mb-6">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <Terminal className="w-10 h-10 text-[#00D2FF]" strokeWidth={1.5} />
                <div 
                  className="absolute inset-0 blur-xl opacity-50"
                  style={{
                    background: 'radial-gradient(circle, rgba(0, 210, 255, 0.6) 0%, transparent 70%)'
                  }}
                />
              </div>
            </motion.div>
            <h2 
              className="text-white"
              style={{
                fontFamily: "'Inter Tight', sans-serif",
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 700,
                letterSpacing: '-0.03em'
              }}
            >
              Battle-Tested Results
            </h2>
          </div>
          <p 
            className="text-[#888888] max-w-2xl mx-auto mb-4"
            style={{
              fontFamily: "'Inter Tight', sans-serif",
              fontSize: '1.125rem',
              letterSpacing: '-0.01em',
              lineHeight: '1.6'
            }}
          >
            Real feedback from companies that demand excellence. No fluff, just verified engineering outcomes.
          </p>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 120 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-[2px] mx-auto"
            style={{
              background: 'linear-gradient(90deg, transparent, #00D2FF, transparent)'
            }}
          />
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div 
            className="relative border border-[#00D2FF]/40 bg-gradient-to-br from-[#00D2FF]/5 to-transparent p-10 md:p-12 overflow-hidden group"
            style={{
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)'
            }}
          >
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-[#00D2FF]/60" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-[#00D2FF]/60" />

            {/* Quote Icon */}
            <div className="absolute top-8 right-8 opacity-10">
              <Quote className="w-32 h-32 text-[#00D2FF]" strokeWidth={1} />
            </div>

            <div className="relative z-10">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Star className="w-6 h-6 fill-[#00D2FF] text-[#00D2FF]" />
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <Quote className="w-8 h-8 text-[#00D2FF]/40 mb-4" />
              <p 
                className="text-white mb-8 max-w-4xl"
                style={{
                  fontFamily: "'Inter Tight', sans-serif",
                  fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
                  fontWeight: 500,
                  letterSpacing: '-0.02em',
                  lineHeight: '1.6'
                }}
              >
                {testimonials[0].quote}
              </p>

              {/* Author Info */}
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00D2FF]/40 to-[#00D2FF]/10 border border-[#00D2FF]/40 flex items-center justify-center">
                    <User className="w-8 h-8 text-[#00D2FF]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p 
                      className="text-white mb-1"
                      style={{
                        fontFamily: "'Inter Tight', sans-serif",
                        fontSize: '1.125rem',
                        fontWeight: 600,
                        letterSpacing: '-0.01em'
                      }}
                    >
                      {testimonials[0].client}
                    </p>
                    <p 
                      className="text-[#888888]"
                      style={{
                        fontFamily: "'Inter Tight', sans-serif",
                        fontSize: '0.875rem'
                      }}
                    >
                      {testimonials[0].role} • {testimonials[0].company}
                    </p>
                  </div>
                </div>

                {/* Metric Badge */}
                <div 
                  className="px-4 py-2 border border-[#00D2FF]/40 bg-[#00D2FF]/5"
                  style={{
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <p 
                    className="text-[#00D2FF] font-mono"
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: 600
                    }}
                  >
                    {testimonials[0].metric}
                  </p>
                </div>
              </div>
            </div>

            {/* Animated Glow */}
            <motion.div 
              className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-96 h-40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-3xl"
              style={{
                background: 'radial-gradient(ellipse, rgba(0, 210, 255, 0.4) 0%, transparent 70%)'
              }}
            />
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(1).map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative border border-[#00D2FF]/20 bg-black/80 p-6 hover:border-[#00D2FF]/60 transition-all duration-500 group overflow-hidden"
              style={{
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)'
              }}
            >
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-12 h-12 border-r border-t border-[#00D2FF]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#00D2FF]/80 text-[#00D2FF]/80" />
                ))}
              </div>

              {/* Quote */}
              <div className="mb-6 relative">
                <Quote className="w-6 h-6 text-[#00D2FF]/30 mb-3" />
                <p 
                  className="text-gray-300 relative z-10"
                  style={{
                    fontFamily: "'Inter Tight', sans-serif",
                    fontSize: '0.9375rem',
                    lineHeight: '1.7',
                    letterSpacing: '-0.01em'
                  }}
                >
                  {testimonial.quote}
                </p>
              </div>

              {/* Divider */}
              <div className="h-[1px] bg-gradient-to-r from-transparent via-[#00D2FF]/30 to-transparent mb-4" />

              {/* Client Info */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00D2FF]/30 to-[#00D2FF]/5 border border-[#00D2FF]/30 flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-[#00D2FF]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p 
                      className="text-white mb-0.5"
                      style={{
                        fontFamily: "'Inter Tight', sans-serif",
                        fontSize: '0.9375rem',
                        fontWeight: 600,
                        letterSpacing: '-0.01em'
                      }}
                    >
                      {testimonial.client}
                    </p>
                    <p 
                      className="text-[#888888] text-xs flex items-center gap-1"
                      style={{
                        fontFamily: "'Inter Tight', sans-serif"
                      }}
                    >
                      <Building2 className="w-3 h-3" />
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Verified Badge */}
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-[#00D2FF]" strokeWidth={2} />
                </div>
              </div>

              {/* Metric Badge */}
              <div className="mt-4 pt-4 border-t border-gray-800/50">
                <div 
                  className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#00D2FF]/30 bg-[#00D2FF]/5"
                  style={{
                    backdropFilter: 'blur(5px)'
                  }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00D2FF] animate-pulse" />
                  <span 
                    className="text-[#00D2FF] font-mono text-xs"
                    style={{
                      fontWeight: 600
                    }}
                  >
                    {testimonial.metric}
                  </span>
                </div>
              </div>

              {/* Hover Glow */}
              <div 
                className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-2xl"
                style={{
                  background: 'radial-gradient(circle, rgba(0, 210, 255, 0.3) 0%, transparent 70%)'
                }}
              />

              {/* Scanning Line Effect */}
              <motion.div
                className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00D2FF] to-transparent opacity-0 group-hover:opacity-100"
                initial={{ top: 0 }}
                animate={{ top: ["0%", "100%"] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 1
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-[#00D2FF]/20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Client Satisfaction', value: '100%' },
              { label: 'Projects Delivered', value: '250+' },
              { label: 'Avg. Performance Gain', value: '47%' },
              { label: 'Five Star Reviews', value: '98%' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p 
                  className="text-[#00D2FF] mb-2"
                  style={{
                    fontFamily: "'Inter Tight', sans-serif",
                    fontSize: 'clamp(2rem, 3vw, 2.5rem)',
                    fontWeight: 700,
                    letterSpacing: '-0.02em'
                  }}
                >
                  {stat.value}
                </p>
                <p 
                  className="text-[#888888]"
                  style={{
                    fontFamily: "'Inter Tight', sans-serif",
                    fontSize: '0.875rem',
                    letterSpacing: '-0.01em'
                  }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}