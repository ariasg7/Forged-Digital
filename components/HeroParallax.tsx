"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import logoFlame from "../public/img/Forged_Digital_Logo.png";

export function HeroParallax() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Background moves at 20% speed (slower parallax)
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 -z-10"
      >
        <div
          className="absolute inset-0 w-full h-[120vh]"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1709617101980-20e8a609550f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicnVzaGVkJTIwdGl0YW5pdW0lMjB0ZXh0dXJlJTIwZGFya3xlbnwxfHx8fDE3Njk2MTIxMDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.4) contrast(1.2)',
          }}
        />
        {/* Colorful Tech Image Layer */}
        <div
          className="absolute inset-0 w-full h-[120vh]"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1652212976547-16d7e2841b8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwYWJzdHJhY3QlMjBibHVlJTIwY3lhbnxlbnwxfHx8fDE3Njk2MTI5ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.15,
            mixBlendMode: 'screen'
          }}
        />
        {/* Grain overlay */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            opacity: 0.15,
            mixBlendMode: 'overlay'
          }}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      </motion.div>

      {/* Content - Fixed position (no parallax) */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto mt-16">
        {/* Logo Flame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-10"
        >
          <Image
                src={logoFlame}
                alt="Forged Digital"
                width={280}
                height={280}
                className="mx-auto"
                priority
            />
        </motion.div>

        {/* Headline with Gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6"
          style={{
            fontFamily: "'Inter Tight', sans-serif",
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 700,
            lineHeight: '1.1',
            letterSpacing: '-0.03em',
            background: 'linear-gradient(135deg, #FFFFFF 0%, #00D2FF 50%, #0066FF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          Digital architecture.<br />
          Built from scratch.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-[#888888] mb-12 max-w-2xl mx-auto"
          style={{
            fontFamily: "'Inter Tight', sans-serif",
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            lineHeight: '1.6',
            fontWeight: 400
          }}
        >
          Custom web experiences engineered for performance,<br />
          designed for impact.
        </motion.p>
      </div>
    </div>
  );
}