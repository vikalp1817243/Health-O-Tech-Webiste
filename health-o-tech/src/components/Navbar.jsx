import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Sun, Moon, Menu, X, Sparkles, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme, isDark } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);

    if (href.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate(`/${href}`);
      } else {
        const targetId = href.substring(1);
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    } else {
      navigate(href);
    }
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Domains", href: "#domains" },
    { name: "Events", href: "#events" },
    { name: "Milestones", href: "#milestones" },
    { name: "Team", href: "/team", isRoute: true },
    { name: "Contact", href: "#contact" },
  ];

  const isLinkActive = (link) => {
    if (link.isRoute) {
      return location.pathname === link.href;
    }
    return location.pathname === "/" && link.name === "Home";
  };

  return (
    <header className="sticky top-0 z-50 w-full px-3 sm:px-6 lg:px-10 py-3 transition-all duration-300">
      <nav
        className={`max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-2xl transition-all duration-300 ${
          scrolled
            ? "bg-[var(--surface-card)] backdrop-blur-xl border border-[var(--border-accent)] shadow-xl"
            : "bg-[var(--surface-card)]/80 backdrop-blur-md border border-[var(--border)] shadow-md"
        }`}
      >
        {/* Brand Logo & Title */}
        <Link
          to="/"
          className="flex items-center gap-3 group transition-transform duration-200 active:scale-95"
        >
          <div className="relative">
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-[var(--accent-cyan)]/50 p-0.5 bg-black/40 group-hover:border-[var(--accent-cyan)] transition-colors shadow-sm">
              <img
                src="/logo.png"
                alt="Health-O-Tech Logo"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Glowing dot indicator */}
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[var(--accent-green)] border-2 border-[var(--bg)] animate-pulse" />
          </div>

          <div className="flex flex-col">
            <span className="font-orbitron font-extrabold text-base sm:text-lg tracking-wider text-[var(--text)] group-hover:text-[var(--accent-cyan)] transition-colors">
              HEALTH<span className="text-[var(--accent-cyan)]">-O-</span>TECH
            </span>
            <span className="font-space text-[9px] uppercase tracking-[0.22em] text-[var(--accent-green)] font-semibold -mt-0.5">
              Health Informatics Club
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 bg-[var(--surface-alt)]/60 border border-[var(--border)] px-2 py-1 rounded-xl backdrop-blur-md">
          {navLinks.map((link) => {
            const active = isLinkActive(link);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-xs uppercase tracking-wider font-space font-medium px-3.5 py-1.5 rounded-lg transition-all duration-200 cursor-pointer ${
                  active
                    ? "bg-[var(--accent-cyan)]/15 text-[var(--accent-cyan)] border border-[var(--accent-cyan)]/30 font-semibold"
                    : "text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--surface-card)]"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Action Controls: Instagram & Team Button & Mobile Menu */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Instagram Link */}
          <a
            href="https://www.instagram.com/healthtech_vitb/"
            target="_blank"
            rel="noreferrer"
            aria-label="Health-O-Tech Instagram"
            className="flex items-center justify-center w-9 h-9 rounded-xl bg-[var(--surface-alt)] border border-[var(--border-accent)] text-[var(--text-muted)] hover:text-[#E1306C] hover:border-[#E1306C]/50 hover:shadow-[0_0_15px_rgba(225,48,108,0.3)] active:scale-95 transition-all cursor-pointer"
            title="Follow us on Instagram"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          {/* Quick CTA to Team */}
          <Link
            to="/team"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-space font-semibold px-3 py-1.5 rounded-xl bg-gradient-to-r from-[var(--accent-cyan)]/15 to-[var(--accent-green)]/15 border border-[var(--accent-cyan)]/40 text-[var(--text)] hover:border-[var(--accent-cyan)] hover:shadow-sm transition-all"
          >
            <Users className="w-3.5 h-3.5 text-[var(--accent-cyan)]" />
            <span>Team Chart</span>
          </Link>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="flex lg:hidden items-center justify-center w-9 h-9 rounded-xl bg-[var(--surface-alt)] border border-[var(--border)] text-[var(--text)] hover:text-[var(--accent-cyan)] active:scale-95 transition-all focus:outline-none cursor-pointer"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden max-w-7xl mx-auto mt-2 overflow-hidden"
          >
            <div className="p-3 rounded-2xl bg-[var(--surface-card)] backdrop-blur-2xl border border-[var(--border-accent)] shadow-2xl flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const active = isLinkActive(link);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-xs sm:text-sm font-space font-medium transition-all cursor-pointer ${
                      active
                        ? "bg-[var(--accent-cyan)]/20 text-[var(--accent-cyan)] border border-[var(--accent-cyan)]/40"
                        : "text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--surface-alt)]"
                    }`}
                  >
                    <span>{link.name}</span>
                    <Sparkles className="w-3.5 h-3.5 text-[var(--accent-green)] opacity-60" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
