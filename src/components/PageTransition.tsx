'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const variants = {
  initial: { opacity: 0, y: 16, scale: 0.98, filter: 'blur(4px)' },
  in:      { opacity: 1, y: 0,  scale: 1,    filter: 'blur(0px)' },
  out:     { opacity: 0, x: 20, scale: 0.98, filter: 'blur(4px)' },
};

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={path}
        variants={variants}
        initial="initial"
        animate="in"
        exit="out"
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}