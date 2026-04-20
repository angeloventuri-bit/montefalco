import { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, MessageCircle, X } from 'lucide-react';
import { Seo } from '@/seo/Seo';
import { PageHero } from '@/components/ui/PageHero';
import { PRODUCTS } from '@/data/products';
import { breadcrumbSchema, organizationSchema } from '@/seo/schemas';
import { SITE, whatsappUrl } from '@/data/site';
import { Reveal } from '@/components/ui/Reveal';

export default function ProdutoDetalhe() {
  const { slug } = useParams();
  const product = PRODUCTS.find((p) => p.slug === slug);
  const [lightbox, setLightbox] = useState(false);

  if (!product) return <Navigate to="/produtos" replace />;

  const related = PRODUCTS.filter(
    (p) => p.slug !== product.slug && p.category === product.category,
  ).slice(0, 3);

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    category: product.categoryLabel,
    brand: { '@type': 'Organization', name: SITE.name },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'BRL',
      seller: { '@type': 'Organization', name: SITE.name },
      url: `${SITE.url}/produtos/${product.slug}`,
    },
  };

  return (
    <>
      <Seo
        title={`${product.name} — ${product.categoryLabel} ${product.origin}`}
        description={`${product.name}: ${product.description}`}
        path={`/produtos/${product.slug}`}
        image={product.image}
        schemas={[
          productSchema,
          organizationSchema,
          breadcrumbSchema([
            { name: 'Início', url: '/' },
            { name: 'Produtos', url: '/produtos' },
            { name: product.name, url: `/produtos/${product.slug}` },
          ]),
        ]}
      />
      <PageHero
        eyebrow={product.categoryLabel}
        title={
          <>
            {product.name.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="italic text-gold">{product.name.split(' ').slice(-1).join(' ')}</span>
          </>
        }
        description={product.description}
        breadcrumbs={[
          { label: 'Início', href: '/' },
          { label: 'Produtos', href: '/produtos' },
          { label: product.name },
        ]}
      />

      <section className="py-16 lg:py-24">
        <div className="container-site">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 items-start">
            <Reveal direction="left">
              <button
                onClick={() => setLightbox(true)}
                className="block w-full overflow-hidden border border-line tap-hl-0"
                aria-label="Ampliar imagem"
              >
                <img
                  src={product.image}
                  alt={`${product.name} — ${product.categoryLabel} ${product.origin}`}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-[1500ms] ease-premium hover:scale-105"
                />
              </button>
              <div className="mt-4 text-xs text-muted">Clique na imagem para ampliar</div>
            </Reveal>

            <Reveal direction="right">
              <div className="flex gap-2 mb-6">
                <span className="pill">{product.origin}</span>
                <span className="pill">{product.categoryLabel}</span>
              </div>

              <dl className="grid grid-cols-2 gap-y-6 mb-10 border-y border-line py-8">
                <div>
                  <dt className="text-[0.6875rem] uppercase tracking-[0.2em] text-muted mb-1">
                    Categoria
                  </dt>
                  <dd className="font-serif text-lg">{product.categoryLabel}</dd>
                </div>
                <div>
                  <dt className="text-[0.6875rem] uppercase tracking-[0.2em] text-muted mb-1">Origem</dt>
                  <dd className="font-serif text-lg">{product.countryOfOrigin ?? product.origin}</dd>
                </div>
                <div>
                  <dt className="text-[0.6875rem] uppercase tracking-[0.2em] text-muted mb-1">
                    Acabamentos
                  </dt>
                  <dd className="text-sm text-white/80">{product.finish}</dd>
                </div>
                <div>
                  <dt className="text-[0.6875rem] uppercase tracking-[0.2em] text-muted mb-1">
                    Disponibilidade
                  </dt>
                  <dd className="text-sm text-white/80">Em estoque · Pronta entrega</dd>
                </div>
              </dl>

              <h2 className="font-serif text-xl mb-4">Aplicações recomendadas</h2>
              <ul className="flex flex-wrap gap-2 mb-10">
                {product.applications.map((a) => (
                  <li key={a} className="pill">
                    {a}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                <Link
                  to={`/contato?material=${encodeURIComponent(product.name)}`}
                  className="btn btn-primary"
                >
                  Solicitar orçamento
                </Link>
                <a href={whatsappUrl()} target="_blank" rel="noopener" className="btn btn-outline">
                  <MessageCircle size={14} /> Falar no WhatsApp
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-24 bg-bg-card/30 border-t border-line">
          <div className="container-site">
            <div className="flex items-end justify-between mb-10 gap-6">
              <div>
                <div className="label-eyebrow mb-4">Relacionados</div>
                <h2 className="heading-md">
                  Outros <span className="italic text-gold">{product.categoryLabel.toLowerCase()}</span>
                </h2>
              </div>
              <Link to="/produtos" className="btn-ghost">
                Ver todos
              </Link>
            </div>
            <div className="grid sm:grid-cols-3 gap-5">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/produtos/${r.slug}`}
                  className="group border border-line bg-bg-card overflow-hidden"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={r.image}
                      alt={r.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1200ms] ease-premium group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="font-serif text-lg group-hover:text-gold transition-colors mb-1">
                      {r.name}
                    </div>
                    <div className="text-xs uppercase tracking-[0.15em] text-muted inline-flex items-center gap-2">
                      {r.origin} <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] bg-black/95 flex items-center justify-center p-6"
            onClick={() => setLightbox(false)}
          >
            <button
              aria-label="Fechar"
              onClick={() => setLightbox(false)}
              className="absolute top-6 right-6 h-11 w-11 flex items-center justify-center border border-line-hover text-white hover:border-gold hover:text-gold"
            >
              <X size={18} />
            </button>
            <motion.img
              initial={{ scale: 0.96 }}
              animate={{ scale: 1 }}
              src={product.image}
              alt={product.name}
              className="max-w-[92vw] max-h-[88vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
