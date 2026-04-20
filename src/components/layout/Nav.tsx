import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/data/site';
import { Logo } from '@/components/ui/Logo';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-premium ${
          scrolled
            ? 'bg-bg/85 backdrop-blur-xl backdrop-saturate-150 border-b border-line'
            : 'bg-transparent'
        }`}
      >
        <div
          className={`mx-auto flex items-center justify-between max-w-[1280px] px-5 sm:px-8 lg:px-12 transition-[height] duration-500 ${
            scrolled ? 'h-16' : 'h-20'
          }`}
        >
          <Link to="/" className="tap-hl-0" aria-label="Ir para a página inicial">
            <Logo />
          </Link>

          <ul className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <NavLink
                  to={l.href}
                  end={l.href === '/'}
                  className={({ isActive }) =>
                    `relative text-xs tracking-wide font-medium transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-muted hover:text-white'
                    } after:content-[""] after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-gold after:transition-[width] after:duration-300 ${
                      isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contato"
              className="text-[0.6875rem] font-semibold tracking-[0.1em] uppercase text-bg bg-gold px-6 py-2.5 hover:bg-gold-light transition-colors"
            >
              Orçamento
            </Link>
          </div>

          <button
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 text-white tap-hl-0"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-bg lg:hidden flex flex-col justify-center items-center gap-2 px-6"
          >
            {NAV_LINKS.map((l, i) => (
              <motion.div
                key={l.href}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * i + 0.1, duration: 0.5 }}
              >
                <NavLink
                  to={l.href}
                  end={l.href === '/'}
                  className={({ isActive }) =>
                    `block font-serif text-4xl py-3 text-center transition-colors ${
                      isActive ? 'text-gold' : 'text-white hover:text-gold'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06 * NAV_LINKS.length + 0.15, duration: 0.5 }}
            >
              <Link to="/contato" className="btn btn-primary mt-6">
                Solicitar Orçamento
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
