import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import ScrollToTop from './components/ScrollToTop';

const TeamPage = lazy(() => import('./pages/Team'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Automatic reset to top on SPA route changes (or smooth scroll to hash target after route animation)
function ScrollToTopOnRoute() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '');
      let attempts = 0;
      const interval = setInterval(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          clearInterval(interval);
        } else if (++attempts >= 25) {
          clearInterval(interval);
        }
      }, 50);

      return () => clearInterval(interval);
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
}

// Animated Page Routes Wrapper with Framer Motion AnimatePresence
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
            >
              <HomePage />
            </motion.div>
          }
        />
        <Route
          path="/team"
          element={
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
            >
              <Suspense
                fallback={
                  <div className="min-h-screen flex items-center justify-center font-orbitron text-xs text-[var(--accent-cyan)] animate-pulse">
                    LOADING HEALTH-O-TECH ROSTER...
                  </div>
                }
              >
                <TeamPage />
              </Suspense>
            </motion.div>
          }
        />
        <Route
          path="/teams"
          element={<Navigate to="/team" replace />}
        />
        <Route
          path="*"
          element={
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
            >
              <Suspense
                fallback={
                  <div className="min-h-screen flex items-center justify-center font-orbitron text-xs text-[var(--accent-cyan)] animate-pulse">
                    INITIALIZING BIO-TELEMETRY...
                  </div>
                }
              >
                <NotFound />
              </Suspense>
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTopOnRoute />
      <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] flex flex-col transition-colors duration-300 circuit-bg relative selection:bg-[var(--accent-cyan)] selection:text-black">
        <Navbar />
        <div className="flex-1">
          <AnimatedRoutes />
        </div>
        <Footer />
        <ScrollToTop />
      </div>
    </BrowserRouter>
  );
}
