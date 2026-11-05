import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, Cpu, Award } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

function CounterItem({ icon: Icon, target, suffix = '', label, colorClass, borderGlow, isInView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1800; // ms
    const stepTime = 30;
    const totalSteps = duration / stepTime;
    const increment = target / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <motion.div
      variants={itemVariants}
      className={`relative group p-5 sm:p-6 rounded-2xl bg-[var(--surface-card)] border border-[var(--border-accent)] backdrop-blur-xl ${borderGlow} hover:border-[var(--accent-cyan)] transition-[border-color,box-shadow] duration-200 flex flex-col items-center text-center`}
    >
      {/* Icon Chip */}
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 mb-3 group-hover:scale-110 transition-transform ${colorClass}`}>
        <Icon className="w-6 h-6" />
      </div>

      {/* Number */}
      <div className="font-orbitron font-extrabold text-3xl sm:text-4xl text-white mb-1 tracking-tight">
        <span className={colorClass}>{count}</span>
        <span className="text-[var(--accent-cyan)]">{suffix}</span>
      </div>

      {/* Label */}
      <div className="font-space text-xs sm:text-sm text-[var(--text-muted)] font-medium uppercase tracking-wider">
        {label}
      </div>

      {/* Corner Cyber Accent */}
      <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[var(--accent-cyan)] group-hover:animate-ping transition-colors" />
    </motion.div>
  );
}

export default function StatsBar() {
  const [isInView, setIsInView] = useState(false);

  const stats = [
    {
      icon: Users,
      target: 200,
      suffix: '+',
      label: 'Active Innovators',
      colorClass: 'text-[var(--accent-cyan)]',
      borderGlow: 'hover:shadow-[0_0_20px_rgba(0,200,255,0.3)]',
    },
    {
      icon: Calendar,
      target: 12,
      suffix: '+',
      label: 'Flagship Events',
      colorClass: 'text-[var(--accent-green)]',
      borderGlow: 'hover:shadow-[0_0_20px_rgba(0,230,118,0.3)]',
    },
    {
      icon: Cpu,
      target: 18,
      suffix: '+',
      label: 'Health-Tech Projects',
      colorClass: 'text-[var(--accent-purple)]',
      borderGlow: 'hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]',
    },
    {
      icon: Award,
      target: 5,
      suffix: '+',
      label: 'Research Papers & Grants',
      colorClass: 'text-amber-400',
      borderGlow: 'hover:shadow-[0_0_20px_rgba(251,191,36,0.3)]',
    },
  ];

  return (
    <section className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-10 mb-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        onViewportEnter={() => setIsInView(true)}
        className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6"
      >
        {stats.map((item) => (
          <CounterItem key={item.label} isInView={isInView} {...item} />
        ))}
      </motion.div>
    </section>
  );
}
