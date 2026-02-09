"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import logoWordmark from "../assets/Forged_Digital_Wordmark.png";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const links = ['AntiTemplate', 'About Us', 'Process', 'Tools', 'Portfolio', 'Testimonials'];
  const normalizeId = (link: string) => link.toLowerCase().replace(/\s+/g, '');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Main nav bar */}
      <div
        className={`flex justify-between items-center w-full px-6 py-4 transition-colors duration-300 ${
          scrolled ? 'bg-black/80 backdrop-blur-lg' : 'bg-black/60 backdrop-blur-lg'
        } border-b border-gray-700`}
      >
        {/* Logo */}
        <a href="#hero" className="relative h-7 w-[120px]">
          <Image src={logoWordmark} alt="Forged Digital" fill style={{ objectFit: 'contain' }} />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a
              key={link}
              href={`#${normalizeId(link)}`}
              className="text-gray-400 hover:text-white relative group transition-colors"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
            >
              {link}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#00D2FF] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a href="#form" className="hidden md:block">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 bg-[#00D2FF] text-black font-semibold hover:bg-[#00B8E6] transition-colors"
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
          >
            Get Free Mockup
          </motion.button>
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-[2px] bg-white" />
          <span className="block w-6 h-[2px] bg-white" />
          <span className="block w-6 h-[2px] bg-white" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed top-0 left-0 w-screen h-screen bg-black/95 backdrop-blur-xl z-40 flex flex-col px-6 pt-24"
          >
            {links.map(link => (
              <a
                key={link}
                href={`#${normalizeId(link)}`}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-white text-lg mb-6"
              >
                {link}
              </a>
            ))}
            <a
              href="#form"
              onClick={() => setMenuOpen(false)}
              className="mt-auto inline-block text-center px-4 py-2 bg-[#00D2FF] text-black font-semibold"
            >
              Get Free Mockup
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
