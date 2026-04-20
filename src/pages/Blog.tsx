import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, ArrowRight } from 'lucide-react';
import { Seo } from '@/seo/Seo';
import { PageHero } from '@/components/ui/PageHero';
import { BLOG_POSTS, BLOG_CATEGORIES, type BlogPost } from '@/data/blog';
import { breadcrumbSchema } from '@/seo/schemas';
import { SITE } from '@/data/site';

const PAGE_SIZE = 6;

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
}

export default function Blog() {
  const [params, setParams] = useSearchParams();
  const urlQ = params.get('q') ?? '';
  const urlCat = params.get('cat') ?? 'all';
  const urlPage = Math.max(1, parseInt(params.get('page') ?? '1', 10) || 1);
  const [query, setQuery] = useState(urlQ);

  const filtered = useMemo<BlogPost[]>(() => {
    return BLOG_POSTS.filter((p) => urlCat === 'all' || p.category === urlCat).filter((p) =>
      query.trim()
        ? `${p.title} ${p.summary} ${p.tags.join(' ')}`.toLowerCase().includes(query.toLowerCase())
        : true,
    );
  }, [query, urlCat]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const page = Math.min(urlPage, totalPages);
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const update = (k: string, v: string | null) => {
    const next = new URLSearchParams(params);
    if (v) next.set(k, v);
    else next.delete(k);
    if (k !== 'page') next.delete('page');
    setParams(next, { replace: true });
  };

  const blogListSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: `${SITE.name} | Blog`,
    url: `${SITE.url}/blog`,
    blogPost: BLOG_POSTS.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      url: `${SITE.url}/blog/${p.slug}`,
      datePublished: p.publishedAt,
    })),
  };

  return (
    <>
      <Seo
        title="Blog — Conteúdo sobre pedras naturais e projetos de arquitetura"
        description="Guias, tendências e dicas de manutenção sobre mármores, granitos, quartzitos e pedras naturais para arquitetos, construtoras e clientes exigentes."
        path="/blog"
        schemas={[
          blogListSchema,
          breadcrumbSchema([
            { name: 'Início', url: '/' },
            { name: 'Blog', url: '/blog' },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Blog Montefalco"
        title={
          <>
            Conhecimento em <span className="italic text-gold">pedra natural</span>
          </>
        }
        description="Guias, tendências e dicas técnicas para quem projeta, especifica e convive com pedras naturais."
        breadcrumbs={[
          { label: 'Início', href: '/' },
          { label: 'Blog' },
        ]}
      />

      <section className="py-16 lg:py-24">
        <div className="container-site">
          <div className="flex flex-col lg:flex-row gap-6 lg:items-center justify-between mb-12">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => update('cat', null)}
                className={`text-[0.6875rem] uppercase font-semibold tracking-[0.15em] px-5 py-3 border transition-all ${
                  urlCat === 'all'
                    ? 'border-gold bg-gold text-bg'
                    : 'border-line-hover text-muted hover:border-gold hover:text-gold'
                }`}
              >
                Todos
              </button>
              {BLOG_CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => update('cat', c)}
                  className={`text-[0.6875rem] uppercase font-semibold tracking-[0.15em] px-5 py-3 border transition-all ${
                    urlCat === c
                      ? 'border-gold bg-gold text-bg'
                      : 'border-line-hover text-muted hover:border-gold hover:text-gold'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <form
              className="relative w-full lg:w-80"
              onSubmit={(e) => {
                e.preventDefault();
                update('q', query.trim() || null);
              }}
            >
              <Search
                size={15}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted pointer-events-none"
              />
              <input
                type="search"
                placeholder="Buscar no blog…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onBlur={() => update('q', query.trim() || null)}
                className="field pl-10"
                aria-label="Buscar no blog"
              />
            </form>
          </div>

          {visible.length === 0 ? (
            <div className="text-center py-24 text-muted">Nenhum post encontrado.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visible.map((p, i) => (
                <motion.article
                  key={p.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.6,
                    delay: Math.min(i * 0.04, 0.25),
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group border border-line bg-bg-card flex flex-col overflow-hidden"
                >
                  <Link to={`/blog/${p.slug}`} className="block">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={p.cover}
                        alt={p.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-[1200ms] ease-premium group-hover:scale-105"
                      />
                    </div>
                    <div className="p-7 flex flex-col gap-3">
                      <div className="flex items-center gap-3 text-[0.6875rem] uppercase tracking-[0.2em] text-gold">
                        <span>{p.category}</span>
                        <span className="text-muted-faint">·</span>
                        <span className="text-muted">{formatDate(p.publishedAt)}</span>
                      </div>
                      <h3 className="font-serif text-xl leading-snug group-hover:text-gold transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-body text-sm line-clamp-3">{p.summary}</p>
                      <span className="btn-ghost mt-3">Ler artigo</span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-16">
              {Array.from({ length: totalPages }).map((_, i) => {
                const n = i + 1;
                return (
                  <button
                    key={n}
                    onClick={() => update('page', String(n))}
                    className={`h-10 w-10 inline-flex items-center justify-center border text-sm transition ${
                      page === n
                        ? 'border-gold bg-gold text-bg'
                        : 'border-line-hover text-muted hover:border-gold hover:text-gold'
                    }`}
                    aria-current={page === n ? 'page' : undefined}
                  >
                    {n}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section className="py-24 bg-bg-card/30 border-t border-line">
        <div className="container-sm text-center">
          <h2 className="heading-md mb-6">
            Quer acompanhar nossos <span className="italic text-gold">conteúdos</span>?
          </h2>
          <p className="text-body mb-8 max-w-lg mx-auto">
            Fale com nossa equipe e receba materiais exclusivos sobre tendências e técnicas em pedras
            naturais.
          </p>
          <Link to="/contato" className="btn btn-primary">
            Falar com consultor <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
