"use client";

import { motion } from "framer-motion";
import { CTAButton } from "../components/CTAButton";
import Image from "next/image";
import logoFlame from "../public/img/Forged_Digital_Logo.png";

const steps = [
  {
    number: '01',
    title: 'Blueprint',
    description: 'Consultation & Strategy',
    stage: 'COMPLETED'
  },
  {
    number: '02',
    title: 'The Cast',
    description: 'Design & Architecture',
    highlight: true,
    stage: 'DRAFTING',
    pulse: true
  },
  {
    number: '03',
    title: 'Tempering',
    description: 'Project Securement',
    stage: 'STAGED'
  },
  {
    number: '04',
    title: 'Refinement',
    description: 'Iterative Polish',
    stage: 'STAGED'
  },
  {
    number: '05',
    title: 'The Final Polish',
    description: 'Global Launch',
    stage: 'STAGED'
  }
];

export function CompactProcess() {
  return (
    <section id="process" className="relative py-32 px-6">
     
      <div className="max-w-6xl mx-auto">
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
            The Forging Process
          </h2>
          <p 
            className="text-[#888888]"
            style={{
              fontFamily: "'Inter Tight', sans-serif",
              fontSize: '1rem',
              fontWeight: 400
            }}
          >
            Five stages from concept to launch
          </p>
        </motion.div>

        {/* Horizontal Layout */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: The Flame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              {/* Glow effect */}
              <div 
                className="absolute inset-0 blur-3xl opacity-50"
                style={{
                  background: 'radial-gradient(circle, rgba(0, 210, 255, 0.3) 0%, transparent 70%)'
                }}
              />
              <Image 
                src={logoFlame} 
                alt="Process" 
                className="relative w-[350px] h-auto"
                width={350}   // required
                height={350}  // approximate, keeps aspect ratio
                />

            </div>
          </motion.div>

          {/* Right: The Steps */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group p-6 border transition-all hover:border-[#00D2FF] ${
                  step.highlight 
                    ? 'bg-[#00D2FF]/5 border-[#00D2FF]/50' 
                    : 'bg-black/40 border-gray-800'
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Number */}
                  <div 
                    className={`font-mono ${step.highlight ? 'text-[#00D2FF]' : 'text-gray-600'}`}
                    style={{
                      fontFamily: "'Courier New', monospace",
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      lineHeight: 1
                    }}
                  >
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 
                      className={`mb-1 ${step.highlight ? 'text-[#00D2FF]' : 'text-white'}`}
                      style={{
                        fontFamily: "'Inter Tight', sans-serif",
                        fontSize: '1.25rem',
                        fontWeight: 600
                      }}
                    >
                      {step.title}
                    </h3>
                    <p 
                      className="text-gray-400"
                      style={{
                        fontFamily: "'Inter Tight', sans-serif",
                        fontSize: '0.875rem',
                        fontWeight: 400
                      }}
                    >
                      {step.description}
                    </p>
                  </div>

                  {/* Stage Badge */}
                  {step.stage === 'STAGED' && (
                    <div
                      className="px-3 py-1 border border-[#00FFFF] text-[#00FFFF] bg-transparent text-xs uppercase tracking-wider"
                      style={{
                        fontFamily: "'Inter Tight', sans-serif",
                        fontSize: '0.625rem',
                        fontWeight: 600,
                        letterSpacing: '0.1em'
                      }}
                    >
                      STAGED
                    </div>
                  )}

                  {/* Drafting Badge with Pulse */}
                  {step.stage === 'DRAFTING' && step.pulse && (
                    <motion.div
                      animate={{ 
                        opacity: [1, 0.5, 1],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="px-3 py-1 border border-[#00FFFF] text-[#00FFFF] bg-[#00FFFF]/10 text-xs uppercase tracking-wider relative"
                      style={{
                        fontFamily: "'Inter Tight', sans-serif",
                        fontSize: '0.625rem',
                        fontWeight: 600,
                        letterSpacing: '0.1em'
                      }}
                    >
                      <span className="relative z-10">DRAFTING</span>
                      <motion.div
                        className="absolute inset-0 bg-[#00FFFF]"
                        animate={{ opacity: [0, 0.2, 0] }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                  )}

                  {/* Completed Badge */}
                  {step.stage === 'COMPLETED' && (
                    <div
                      className="px-3 py-1 border border-gray-600 text-gray-500 bg-transparent text-xs uppercase tracking-wider"
                      style={{
                        fontFamily: "'Inter Tight', sans-serif",
                        fontSize: '0.625rem',
                        fontWeight: 600,
                        letterSpacing: '0.1em'
                      }}
                    >
                      COMPLETED
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}