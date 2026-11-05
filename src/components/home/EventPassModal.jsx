import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, CheckCircle2, Ticket, User, Mail, QrCode } from 'lucide-react';

export default function EventPassModal({ isOpen, onClose, defaultEventName = "MedTech Hackathon & Run Riot '27" }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    regNo: '',
    domain: 'AI Diagnostics',
  });
  const [ticketId, setTicketId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    if (!trimmedName || !trimmedEmail) return;
    
    // Generate verified cyber ticket token
    const randomHex = Math.random().toString(16).substring(2, 8).toUpperCase();
    setTicketId(`HOT-2026-${randomHex}`);
    setFormData((prev) => ({ ...prev, name: trimmedName, email: trimmedEmail }));
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', regNo: '', domain: 'AI Diagnostics' });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-lg rounded-3xl bg-[#0F0D24] border border-[var(--border-accent)] shadow-[0_0_50px_rgba(0,200,255,0.25)] overflow-hidden p-6 sm:p-8"
          >
          {/* Top Close Button */}
          <button
            type="button"
            onClick={handleReset}
            className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:border-white/20 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              {/* Header */}
              <div className="flex items-center gap-2 text-xs font-space text-[var(--accent-cyan)] uppercase tracking-wider mb-2">
                <Ticket className="w-4 h-4 text-[var(--accent-green)]" />
                <span>Event Registration Terminal</span>
              </div>
              <h3 className="font-orbitron font-bold text-xl sm:text-2xl text-white mb-2 leading-snug">
                Claim Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-green)]">Access Pass</span>
              </h3>
              <p className="font-space text-xs sm:text-sm text-[var(--text-muted)] mb-6">
                Register for upcoming workshops, hackathons, and wellness marathons hosted by Health-O-Tech.
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-space text-xs text-neutral-300 mb-1.5 font-medium">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aarav Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#181335] border border-[var(--border)] rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[var(--accent-cyan)] transition-colors font-space"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-space text-xs text-neutral-300 mb-1.5 font-medium">
                      Student / VIT Email *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3.5" />
                      <input
                        type="email"
                        required
                        placeholder="user@vitbhopal.ac.in"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#181335] border border-[var(--border)] rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[var(--accent-cyan)] transition-colors font-space"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-space text-xs text-neutral-300 mb-1.5 font-medium">
                      Registration / Roll No.
                    </label>
                    <input
                      type="text"
                      placeholder="23BCExxxxx"
                      value={formData.regNo}
                      onChange={(e) => setFormData({ ...formData, regNo: e.target.value })}
                      className="w-full bg-[#181335] border border-[var(--border)] rounded-xl px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[var(--accent-cyan)] transition-colors font-space"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-space text-xs text-neutral-300 mb-1.5 font-medium">
                    Primary Track / Interest
                  </label>
                  <select
                    value={formData.domain}
                    onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                    className="w-full bg-[#181335] border border-[var(--border)] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[var(--accent-cyan)] transition-colors font-space"
                  >
                    <option value="AI Diagnostics">AI Diagnostics & Medical Imaging</option>
                    <option value="IoT Health">IoT Health Monitoring & ECG Circuits</option>
                    <option value="Computational Genomics">Computational Genomics & CRISPR</option>
                    <option value="Run Riot '27">Run Riot '27 Marathon & Wellness</option>
                    <option value="Health Informatics">Health Informatics & FHIR EHR</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-green)] text-black font-space font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(0,200,255,0.4)] hover:shadow-[0_0_35px_rgba(0,230,118,0.6)] active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-black" />
                  <span>Generate Cyber Pass</span>
                </button>
              </form>
            </div>
          ) : (
            /* Cyber Digital Ticket Pass Display */
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-400/40 flex items-center justify-center mb-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="font-orbitron font-bold text-lg sm:text-xl text-white mb-1">
                Access Pass Issued!
              </h3>
              <p className="font-space text-xs text-neutral-400 mb-5">
                Your pass has been securely encoded. Take a screenshot for gate verification.
              </p>

              {/* Holographic Badge Card */}
              <div className="w-full p-5 rounded-2xl bg-gradient-to-br from-[#1B1538] to-[#120E2B] border border-[var(--accent-cyan)]/50 shadow-[0_0_30px_rgba(0,200,255,0.2)] text-left relative overflow-hidden mb-6">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--accent-cyan)]/10 rounded-full blur-xl pointer-events-none" />
                
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                  <div>
                    <span className="font-orbitron font-black text-xs text-[var(--accent-cyan)] tracking-wider block">
                      HEALTH-O-TECH
                    </span>
                    <span className="font-space text-[10px] text-neutral-400">
                      {defaultEventName} • VIT Bhopal
                    </span>
                  </div>
                  <span className="font-mono text-xs text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">
                    VERIFIED
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  <div>
                    <span className="text-[10px] font-space text-neutral-400 uppercase tracking-wider block">Attendee</span>
                    <span className="font-space text-sm font-bold text-white">{formData.name}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs font-space">
                    <div>
                      <span className="text-[10px] text-neutral-400 uppercase tracking-wider block">Track</span>
                      <span className="text-neutral-200 truncate block">{formData.domain}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-neutral-400 uppercase tracking-wider block">Ticket Token</span>
                      <span className="font-mono text-cyan-300 font-bold">{ticketId}</span>
                    </div>
                  </div>
                </div>

                {/* QR Code Barcode Representation */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                  <div className="flex items-center gap-2">
                    <QrCode className="w-5 h-5 text-[var(--accent-cyan)]" />
                    <span>SCAN AT VENUE</span>
                  </div>
                  <span className="text-[10px] text-neutral-500">HOT-SYS-v2.6</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-space text-sm font-semibold transition-all cursor-pointer"
              >
                Done / Close
              </button>
            </div>
          )}
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);
}
