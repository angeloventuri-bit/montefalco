import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { Seo } from '@/seo/Seo';
import { PageHero } from '@/components/ui/PageHero';
import { PRODUCTS, FILTER_TABS, type MaterialCategory } from '@/data/products';
import { CtaBlock } from '@/components/sections/CtaBlock';
import { breadcrumbSchema, serviceSchemas } from '@/seo/schemas';

type Filter = MaterialCategory | 'all';

export default function Produtos() {
  const [params, setParams] = useSearchParams();
  const urlCat = (params.get('cat') ?? 'all') as Filter;
  const [filter, setFilter] = useState<Filter>(urlCat);
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => filter === 'all' || p.category === filter).filter((p) =>
      query.trim()
        ? `${p.name} ${p.categoryLabel} ${p.origin}`.toLowerCase().includes(query.toLowerCase())
        : true,
    );
  }, [filter, query]);

  const changeFilter = (f: Filter) => {
    setFilter(f);
    const next = new URLSearchParams(params);
    if (f === 'all') next.delete('cat');
    else next.set('cat', f);
    setParams(next, { replace: true });
  };

  return (
    <>
      <Seo
        title="Produtos — Mármores, Granitos, Quartzitos e Pedras Naturais"
        description="Catálogo completo de chapas Montefalco: mármores, granitos, quartzos, quartzitos, travertinos e lâminas ultracompactas. Nacionais e importados, pronta entrega."
        path="/produtos"
        schemas={[
          breadcrumbSchema([
            { name: 'Início', url: '/' },
            { name: 'Produtos', url: '/produtos' },
          ]),
          ...serviceSchemas,
        ]}
      />
      <PageHero
        eyebrow="Catálogo"
        title={
          <>
            Nosso <span className="italic text-gold">portfólio</span> de materiais
          </>
        }
        description="Mais de 500 materiais em estoque permanente. Selecione por categoria ou pesquise pelo nome da pedra."
        breadcrumbs={[
          { label: 'Início', href: '/' },
          { label: 'Produtos' },
        ]}
      />

      <section className="py-16 lg:py-24">
        <div className="container-site">
          <div className="flex flex-col lg:flex-row gap-6 lg:items-center justify-between mb-12">
            <div className="flex flex-wrap gap-2">
              {FILTER_TABS.map((t) => (
                <button
                  key={t.value}
                  onClick={() => changeFilter(t.value as Filter)}
                  className={`text-[0.6875rem] uppercase font-semibold tracking-[0.15em] px-5 py-3 border transition-all ${
                    filter === t.value
                      ? 'border-gold bg-gold text-bg'
                      : 'border-line-hover text-muted hover:border-gold hover:text-gold'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <div className="relative w-full lg:w-80">
              <Search
                size={15}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted pointer-events-none"
              />
              <input
                type="search"
                placeholder="Buscar material…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="field pl-10"
                aria-label="Buscar material"
              />
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-24 text-muted">
              Nenhum material encontrado. Tente outro filtro ou termo.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((p, i) => (
                <motion.article
                  key={p.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.6,
                    delay: Math.min(i * 0.03, 0.25),
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group border border-line bg-bg-card overflow-hidden"
                >
                  <Link to={`/produtos/${p.slug}`} className="block">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-[1200ms] ease-premium group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-[0.625rem] uppercase tracking-[0.2em] text-gold">
                          {p.tag}
                        </span>
                      </div>
                      <div className="font-serif text-xl mb-1 group-hover:text-gold transition-colors">
                        {p.name}
                      </div>
                      <div className="text-xs uppercase tracking-[0.15em] text-muted">
                        {p.categoryLabel} · {p.origin}
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      <CtaBlock />
    </>
  );
}
