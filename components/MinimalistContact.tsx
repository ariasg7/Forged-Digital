"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function MinimalistContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    timeline: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h2 
              className="text-white mb-4"
              style={{
                fontFamily: "'Inter Tight', sans-serif",
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 700,
                letterSpacing: '-0.02em'
              }}
            >
              Initiate the Build
            </h2>
            <p 
              className="text-[#888888]"
              style={{
                fontFamily: "'Inter Tight', sans-serif",
                fontSize: '1rem',
                fontWeight: 400
              }}
            >
              Start with a free consultation and mockup
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1: Name & Email */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-gray-500 mb-2 text-xs uppercase tracking-wider"
                  style={{
                    fontFamily: "'Inter Tight', sans-serif",
                    fontWeight: 600,
                    letterSpacing: '0.1em'
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b text-white pb-3 focus:outline-none focus:border-[#00D2FF] transition-colors"
                  style={{
                    fontFamily: "'Inter Tight', sans-serif",
                    fontSize: '1rem',
                    borderBottomColor: '#222222',
                    borderBottomWidth: '1px'
                  }}
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block text-gray-500 mb-2 text-xs uppercase tracking-wider"
                  style={{
                    fontFamily: "'Inter Tight', sans-serif",
                    fontWeight: 600,
                    letterSpacing: '0.1em'
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b text-white pb-3 focus:outline-none focus:border-[#00D2FF] transition-colors"
                  style={{
                    fontFamily: "'Inter Tight', sans-serif",
                    fontSize: '1rem',
                    borderBottomColor: '#222222',
                    borderBottomWidth: '1px'
                  }}
                  placeholder="john@company.com"
                />
              </div>
            </div>

            {/* Row 2: Company & Budget */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label 
                  htmlFor="company" 
                  className="block text-gray-500 mb-2 text-xs uppercase tracking-wider"
                  style={{
                    fontFamily: "'Inter Tight', sans-serif",
                    fontWeight: 600,
                    letterSpacing: '0.1em'
                  }}
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b text-white pb-3 focus:outline-none focus:border-[#00D2FF] transition-colors"
                  style={{
                    fontFamily: "'Inter Tight', sans-serif",
                    fontSize: '1rem',
                    borderBottomColor: '#222222',
                    borderBottomWidth: '1px'
                  }}
                  placeholder="Acme Inc."
                />
              </div>

              <div>
                <label 
                  htmlFor="budget" 
                  className="block text-gray-500 mb-2 text-xs uppercase tracking-wider"
                  style={{
                    fontFamily: "'Inter Tight', sans-serif",
                    fontWeight: 600,
                    letterSpacing: '0.1em'
                  }}
                >
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b text-white pb-3 focus:outline-none focus:border-[#00D2FF] transition-colors"
                  style={{
                    fontFamily: "'Inter Tight', sans-serif",
                    fontSize: '1rem',
                    borderBottomColor: '#222222',
                    borderBottomWidth: '1px'
                  }}
                >
                  <option value="" className="bg-black">Select range...</option>
                  <option value="5k-10k" className="bg-black">$5k - $10k</option>
                  <option value="10k-25k" className="bg-black">$10k - $25k</option>
                  <option value="25k-50k" className="bg-black">$25k - $50k</option>
                  <option value="50k+" className="bg-black">$50k+</option>
                </select>
              </div>
            </div>

            {/* Timeline */}
            <div>
              <label 
                htmlFor="timeline" 
                className="block text-gray-500 mb-2 text-xs uppercase tracking-wider"
                style={{
                  fontFamily: "'Inter Tight', sans-serif",
                  fontWeight: 600,
                  letterSpacing: '0.1em'
                }}
              >
                Desired Timeline
              </label>
              <input
                type="text"
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full bg-transparent border-b text-white pb-3 focus:outline-none focus:border-[#00D2FF] transition-colors"
                style={{
                  fontFamily: "'Inter Tight', sans-serif",
                  fontSize: '1rem',
                  borderBottomColor: '#222222',
                  borderBottomWidth: '1px'
                }}
                placeholder="e.g., 2-3 months"
              />
            </div>

            {/* Message */}
            <div>
              <label 
                htmlFor="message" 
                className="block text-gray-500 mb-2 text-xs uppercase tracking-wider"
                style={{
                  fontFamily: "'Inter Tight', sans-serif",
                  fontWeight: 600,
                  letterSpacing: '0.1em'
                }}
              >
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-transparent border text-white p-4 focus:outline-none focus:border-[#00D2FF] transition-colors resize-none"
                style={{
                  fontFamily: "'Inter Tight', sans-serif",
                  fontSize: '1rem',
                  borderColor: '#222222'
                }}
                placeholder="Tell us about your project..."
              />
            </div>

            {/* Submit Button */}
            <div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-[#00FFFF] text-black hover:bg-[#00CCCC] transition-colors"
                style={{
                  fontFamily: "'Inter Tight', sans-serif",
                  fontSize: '1rem',
                  fontWeight: 700,
                  letterSpacing: '0.05em'
                }}
              >
                INITIATE BLUEPRINT
              </motion.button>
              
              {/* Micro-copy */}
              <p 
                className="text-gray-600 text-center mt-3"
                style={{
                  fontFamily: "'Inter Tight', sans-serif",
                  fontSize: '0.75rem',
                  fontWeight: 400
                }}
              >
                Subject to Forged Digital MSA/SOW terms.
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}