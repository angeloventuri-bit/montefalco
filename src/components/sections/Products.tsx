import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { PRODUCTS, FILTER_TABS, type MaterialCategory } from '@/data/products';
import { Reveal } from '@/components/ui/Reveal';

type Filter = MaterialCategory | 'all';

export function Products() {
  const [filter, setFilter] = useState<Filter>('all');

  const filtered = PRODUCTS.filter((p) => filter === 'all' || p.category === filter);

  return (
    <section id="produtos" className="py-24 lg:py-36">
      <div className="container-site">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="label-eyebrow mb-5">Nosso Portfólio</div>
            <h2 className="heading-lg">
              Materiais para cada <span className="italic text-gold">visão</span>
            </h2>
          </div>
          <Link to="/produtos" className="btn btn-outline self-start md:self-end">
            Catálogo completo
          </Link>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-wrap gap-2 mb-12">
          {FILTER_TABS.map((t) => (
            <button
              key={t.value}
              onClick={() => setFilter(t.value)}
              className={`text-[0.6875rem] uppercase font-semibold tracking-[0.15em] px-5 py-3 border transition-all ${
                filter === t.value
                  ? 'border-gold bg-gold text-bg'
                  : 'border-line-hover text-muted hover:border-gold hover:text-gold'
              }`}
            >
              {t.label}
            </button>
          ))}
        </Reveal>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.article
                layout
                key={p.slug}
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{
                  duration: 0.6,
                  delay: Math.min(i * 0.04, 0.3),
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group relative overflow-hidden bg-bg-card border border-line
                  ${p.size === 'tall' ? 'sm:row-span-2' : ''}
                  ${p.size === 'wide' ? 'sm:col-span-2' : ''}`}
              >
                <Link to={`/produtos/${p.slug}`} className="block relative">
                  <div className={`overflow-hidden ${p.size === 'tall' ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}>
                    <img
                      src={p.image}
                      alt={`${p.name} — ${p.categoryLabel}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1200ms] ease-premium group-hover:scale-105"
                    />
                  </div>
                  <span className="absolute top-4 left-4 text-[0.6875rem] uppercase tracking-[0.15em] bg-bg/70 backdrop-blur border border-line-hover px-3 py-1.5 text-white">
                    {p.tag}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-bg via-bg/80 to-transparent">
                    <div className="font-serif text-2xl mb-1">{p.name}</div>
                    <div className="text-xs text-muted uppercase tracking-[0.15em] mb-4">
                      {p.categoryLabel} · {p.origin}
                    </div>
                    <span className="btn-ghost">Solicitar orçamento</span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
