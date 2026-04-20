import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Logo } from '@/components/ui/Logo';

export function LoadingScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const done = () => setTimeout(() => setShow(false), 400);
    if (document.readyState === 'complete') done();
    else window.addEventListener('load', done, { once: true });
    const fallback = setTimeout(() => setShow(false), 1800);
    return () => clearTimeout(fallback);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg"
          aria-hidden="true"
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Logo className="text-3xl" />
            </motion.div>
            <div className="h-px w-24 overflow-hidden bg-line-hover">
              <motion.div
                className="h-full bg-gold"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
