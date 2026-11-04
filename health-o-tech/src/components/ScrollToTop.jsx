import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          transition={{ duration: 0.2 }}
          aria-label="Scroll back to top"
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-2xl bg-[var(--surface-card)]/90 border border-[var(--border-accent)] text-[var(--accent-cyan)] shadow-[0_0_20px_rgba(0,200,255,0.35)] backdrop-blur-xl flex items-center justify-center hover:border-[var(--accent-cyan)] hover:bg-[var(--surface-alt)] hover:scale-110 active:scale-95 transition-all cursor-pointer group"
          title="Back to Top"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[var(--accent-green)] animate-ping" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
