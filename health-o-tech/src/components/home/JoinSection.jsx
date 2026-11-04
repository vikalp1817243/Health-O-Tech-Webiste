import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  Terminal,
  MessageSquare,
  ShieldCheck,
  Check,
  ChevronDown
} from 'lucide-react';

export default function JoinSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    vertical: 'ai',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const benefits = [
    'Access to embedded bio-sensors & IoT development hardware',
    'Mentorship for IEEE research papers & national hackathons',
    'Hands-on organizing experience in flagship marathons like Run Riot',
    'Cross-disciplinary teamwork across engineering & health informatics',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="join" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-3xl bg-gradient-to-br from-[#161036] via-[#100C28] to-[#0A071E] border border-[var(--border-accent)] p-8 sm:p-12 lg:p-16 shadow-[0_0_50px_rgba(0,200,255,0.12)] overflow-hidden"
      >
        {/* Ambient Neon Blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent-cyan)]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--accent-green)]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto">
          
          {/* Header */}
          <div className="text-center flex flex-col items-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[var(--accent-green)] mb-6 font-space">
              <Sparkles className="w-4 h-4 text-[var(--accent-green)] animate-pulse" />
              <span className="font-semibold uppercase tracking-wider">Join The Health Informatics Movement</span>
            </div>

            <h2 className="font-orbitron font-black text-2xl sm:text-4xl md:text-5xl text-white tracking-tight mb-6 leading-tight">
              READY TO REVOLUTIONIZE <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-cyan)] via-emerald-300 to-[var(--accent-green)]">
                HEALTHCARE WITH TECHNOLOGY?
              </span>
            </h2>

            <p className="font-space text-[var(--text-muted)] text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Whether you develop AI diagnostic models, design embedded sensor circuits, conduct clinical data research, or orchestrate high-energy campus events — Health-O-Tech has a place for you.
            </p>

            {/* Quick Action Links */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 mb-12">
              <a
                href="https://www.instagram.com/healthtech_vitb/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white font-space font-bold text-xs sm:text-sm tracking-wide shadow-[0_0_20px_rgba(253,29,29,0.3)] hover:scale-[1.02] active:scale-95 transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>Follow @healthtech_vitb</span>
              </a>

              <Link
                to="/team"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-[var(--border-accent)] text-white font-space font-semibold text-xs sm:text-sm hover:border-[var(--accent-cyan)] hover:bg-[var(--surface-alt)] transition-all"
              >
                <Users className="w-4 h-4 text-[var(--accent-cyan)]" />
                <span>Team Hierarchy</span>
              </Link>
            </div>
          </div>

          {/* 2-Column: Benefits on Left, Cyber Inquiry Form on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Benefits */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <h3 className="font-orbitron font-bold text-lg text-white mb-2">
                Why Join <span className="text-[var(--accent-cyan)]">HOT</span>?
              </h3>
              {benefits.map((b, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-[var(--accent-cyan)]/30 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent-green)] shrink-0 mt-0.5" />
                  <span className="font-space text-xs sm:text-sm text-neutral-200 leading-relaxed">{b}</span>
                </div>
              ))}
            </div>

            {/* Right: Interactive Cyber Inquiry Form */}
            <div className="lg:col-span-7 p-6 sm:p-7 rounded-2xl bg-[var(--surface-card)] border border-[var(--border-accent)] backdrop-blur-xl shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <div className="flex items-center gap-2 font-space text-xs text-[var(--accent-cyan)]">
                  <Terminal className="w-4 h-4 text-[var(--accent-green)]" />
                  <span className="font-mono uppercase tracking-wider font-semibold">Direct Inquiry Terminal</span>
                </div>
                <span className="w-2 h-2 rounded-full bg-[var(--accent-green)] animate-ping" />
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center flex flex-col items-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-[var(--accent-green)] flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(0,230,118,0.3)]">
                    <Check className="w-7 h-7" />
                  </div>
                  <h4 className="font-orbitron font-bold text-lg text-white mb-2">
                    Transmission Received!
                  </h4>
                  <p className="font-space text-xs sm:text-sm text-[var(--text-muted)] max-w-sm mb-6 leading-relaxed">
                    Thank you, {formData.name}. Our student board coordinators will review your submission and contact you via email.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', vertical: 'ai', message: '' });
                    }}
                    className="font-space text-xs text-[var(--accent-cyan)] underline hover:text-white transition-colors cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-space text-xs font-medium text-neutral-300 mb-1.5 flex items-center justify-between">
                        <span>Full Name</span>
                        <span className="text-[var(--accent-cyan)] text-[10px] uppercase font-mono tracking-wider">Required</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0d0922]/90 border border-[var(--border)] text-white text-sm focus:outline-none focus:border-[var(--accent-cyan)] focus:ring-2 focus:ring-[var(--accent-cyan)]/25 transition-all placeholder:text-neutral-500 shadow-inner"
                      />
                    </div>
                    <div>
                      <label className="font-space text-xs font-medium text-neutral-300 mb-1.5 flex items-center justify-between">
                        <span>Email Address</span>
                        <span className="text-[var(--accent-cyan)] text-[10px] uppercase font-mono tracking-wider">Required</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@vitbhopal.ac.in"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0d0922]/90 border border-[var(--border)] text-white text-sm focus:outline-none focus:border-[var(--accent-cyan)] focus:ring-2 focus:ring-[var(--accent-cyan)]/25 transition-all placeholder:text-neutral-500 shadow-inner"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-space text-xs font-medium text-neutral-300 mb-1.5 block">
                      Vertical / Area of Interest
                    </label>
                    <div className="relative">
                      <select
                        value={formData.vertical}
                        onChange={(e) => setFormData({ ...formData, vertical: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0d0922] border border-[var(--border)] text-white text-sm focus:outline-none focus:border-[var(--accent-cyan)] focus:ring-2 focus:ring-[var(--accent-cyan)]/25 transition-all appearance-none cursor-pointer pr-10 shadow-inner"
                      >
                        <option value="ai" className="bg-[#0e0a24] text-white py-2">AI Diagnostics & Pathology</option>
                        <option value="iot" className="bg-[#0e0a24] text-white py-2">IoT Bio-Sensors & Telemetry</option>
                        <option value="genomics" className="bg-[#0e0a24] text-white py-2">Computational Genomics & Bionics</option>
                        <option value="events" className="bg-[#0e0a24] text-white py-2">Run Riot & Campus Events Organizing</option>
                        <option value="research" className="bg-[#0e0a24] text-white py-2">Academic Research & IEEE Papers</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-[var(--accent-cyan)] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="font-space text-xs font-medium text-neutral-300 mb-1.5 block">
                      Message / Questions
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your interests, branch, or inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0d0922]/90 border border-[var(--border)] text-white text-sm focus:outline-none focus:border-[var(--accent-cyan)] focus:ring-2 focus:ring-[var(--accent-cyan)]/25 transition-all placeholder:text-neutral-500 resize-none shadow-inner"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 py-3.5 rounded-xl bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-green)] text-black font-space font-bold text-xs sm:text-sm tracking-wide shadow-[0_0_20px_rgba(0,200,255,0.3)] hover:shadow-[0_0_30px_rgba(0,230,118,0.5)] active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        <span>Encrypting Transmission...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Transmit Inquiry to HOT Board</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </motion.div>
    </section>
  );
}
