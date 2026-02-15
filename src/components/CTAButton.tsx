"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  text?: string;
  variant?: 'primary' | 'secondary';
}

export function CTAButton({ text = 'Initiate Blueprint', variant = 'primary' }: CTAButtonProps) {
  const handleClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (

    
    <div className="flex justify-center py-16">
      
      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`group relative px-8 py-4 border transition-all duration-300 flex items-center gap-3 ${
          variant === 'primary'
            ? 'border-[#00D2FF] bg-[#00D2FF] text-black hover:bg-transparent hover:text-[#00D2FF]'
            : 'border-[#00D2FF] bg-transparent text-[#00D2FF] hover:bg-[#00D2FF] hover:text-black'
        }`}
        style={{
          fontFamily: "'Inter Tight', sans-serif",
          fontSize: '1rem',
          fontWeight: 700,
          letterSpacing: '0.05em'
        }}
      >
        {text}
        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        
        {/* Glow effect */}
        <div 
          className="absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl"
          style={{
            background: 'radial-gradient(circle, rgba(0, 210, 255, 0.4) 0%, transparent 70%)'
          }}
        />
      </motion.button>
    </div>
  );
}
