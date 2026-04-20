import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS, FEATURED_SLUGS } from '@/data/products';
import { Reveal } from '@/components/ui/Reveal';

export function FeaturedCarousel() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const scroll = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: dir * amount, behavior: 'smooth' });
  };

  const featured = FEATURED_SLUGS.map((s) => PRODUCTS.find((p) => p.slug === s)!).filter(Boolean);

  return (
    <section id="destaques" className="py-24 lg:py-36 overflow-hidden">
      <div className="container-sm">
        <Reveal className="flex items-end justify-between mb-12 gap-6">
          <div>
            <div className="label-eyebrow mb-5">Curadoria</div>
            <h2 className="heading-lg">
              Materiais em <span className="italic text-gold">destaque</span>
            </h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              aria-label="Anterior"
              onClick={() => scroll(-1)}
              className="h-11 w-11 inline-flex items-center justify-center border border-line-hover text-white hover:border-gold hover:text-gold transition"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              aria-label="Próximo"
              onClick={() => scroll(1)}
              className="h-11 w-11 inline-flex items-center justify-center border border-line-hover text-white hover:border-gold hover:text-gold transition"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </Reveal>
      </div>
      <div
        ref={trackRef}
        className="flex gap-5 overflow-x-auto pb-8 px-5 sm:px-8 lg:px-12 snap-x snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: 'none' }}
      >
        {featured.map((p) => (
          <Link
            key={p.slug}
            to={`/produtos/${p.slug}`}
            className="snap-start shrink-0 w-[85vw] sm:w-[420px] group"
          >
            <div className="overflow-hidden aspect-[4/5] mb-4 border border-line">
              <img
                src={p.image}
                alt={p.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1200ms] ease-premium group-hover:scale-105"
              />
            </div>
            <div className="font-serif text-xl mb-1 group-hover:text-gold transition-colors">
              {p.name}
            </div>
            <div className="text-xs uppercase tracking-[0.15em] text-muted">
              {p.categoryLabel} · {p.origin}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
