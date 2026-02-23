"use client";

import Image from "next/image";
import logoFlame from "../public/img/Forged_Digital_Logo.png";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

export function MinimalistFooter() {
  const footerLinks = {
    Company: ['About', 'Process', 'Portfolio', 'Blog'],
    Services: ['Web Development', 'Mobile Apps', 'UI/UX Design', 'Consulting'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Disclaimer']
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="relative py-20 px-6 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto">
        {/* Logo Center */}
        <div className="flex justify-center mb-12">
          <Image
                src={logoFlame}
                alt="Forged Digital"
                width={200}
                height={200}
                className="mx-auto"
            />
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="text-center">
              <h3 
                className="text-white mb-4"
                style={{
                  fontFamily: "'Inter Tight', sans-serif",
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em'
                }}
              >
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-[#00D2FF] transition-colors"
                      style={{
                        fontFamily: "'Inter Tight', sans-serif",
                        fontSize: '0.875rem',
                        fontWeight: 400
                      }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-8">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="w-10 h-10 flex items-center justify-center border border-gray-800 hover:border-[#00D2FF] hover:bg-[#00D2FF]/10 transition-all"
            >
              <Icon className="w-4 h-4 text-gray-500 hover:text-[#00D2FF] transition-colors" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p 
            className="text-gray-600"
            style={{
              fontFamily: "'Inter Tight', sans-serif",
              fontSize: '0.875rem',
              fontWeight: 400
            }}
          >
            © 2026 Forged Digital. Built to last, forged to perform.
          </p>
        </div>
      </div>
    </footer>
  );
}
