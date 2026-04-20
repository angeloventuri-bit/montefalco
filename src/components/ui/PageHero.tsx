import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  breadcrumbs: { label: string; href?: string }[];
}

export function PageHero({ eyebrow, title, description, breadcrumbs }: PageHeroProps) {
  return (
    <section className="pt-40 pb-20 border-b border-line">
      <div className="container-site">
        <nav aria-label="breadcrumb" className="flex items-center gap-2 text-xs text-muted mb-10 flex-wrap">
          {breadcrumbs.map((c, i) => (
            <span key={i} className="inline-flex items-center gap-2">
              {c.href ? (
                <Link to={c.href} className="hover:text-gold transition-colors">
                  {c.label}
                </Link>
              ) : (
                <span className="text-white/80">{c.label}</span>
              )}
              {i < breadcrumbs.length - 1 && <ChevronRight size={12} className="text-muted-faint" />}
            </span>
          ))}
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="label-eyebrow mb-6">{eyebrow}</div>
          <h1 className="heading-xl mb-6">{title}</h1>
          {description && <p className="text-body max-w-2xl">{description}</p>}
        </motion.div>
      </div>
    </section>
  );
}
