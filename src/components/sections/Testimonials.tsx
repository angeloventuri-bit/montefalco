import { Star } from 'lucide-react';
import { TESTIMONIALS } from '@/data/testimonials';
import { Reveal } from '@/components/ui/Reveal';

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 lg:py-36 bg-bg-card/30 border-y border-line">
      <div className="container-site">
        <Reveal className="max-w-3xl mb-16">
          <div className="label-eyebrow mb-5">Depoimentos</div>
          <h2 className="heading-lg">
            O que nossos clientes <span className="italic text-gold">dizem sobre nós</span>
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <article className="relative border border-line bg-bg-card p-8 md:p-10 h-full">
                <div className="flex gap-0.5 text-gold mb-6">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} size={14} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <div className="absolute top-6 right-8 font-serif text-7xl text-gold/20 leading-none select-none">
                  “
                </div>
                <p className="text-white/85 leading-relaxed mb-8 relative">{t.text}</p>
                <div className="h-px w-12 bg-gold mb-5" />
                <div className="font-serif text-base">{t.name}</div>
                <div className="text-xs uppercase tracking-widest text-muted mt-1">
                  {t.role} — {t.company}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
