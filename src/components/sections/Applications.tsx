import { Link } from 'react-router-dom';
import { APPLICATIONS } from '@/data/differentials';
import { Reveal } from '@/components/ui/Reveal';

export function Applications() {
  return (
    <section id="aplicacoes" className="py-24 lg:py-36 bg-bg-card/30 border-y border-line">
      <div className="container-site">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="label-eyebrow mb-5">Onde Usar</div>
            <h2 className="heading-lg">
              Beleza que transforma <span className="italic text-gold">espaços</span>
            </h2>
          </div>
          <Link to="/contato" className="btn btn-outline self-start md:self-end">
            Falar com consultor
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[280px] lg:auto-rows-[320px]">
          {APPLICATIONS.map((a, i) => (
            <Reveal key={a.name} delay={i * 0.07} className={i === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}>
              <article className="group relative overflow-hidden border border-line bg-bg-card h-full">
                <img
                  src={a.image}
                  alt={a.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-premium group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <div className="text-[0.625rem] tracking-[0.3em] uppercase text-gold mb-3">{a.num}</div>
                  <div className="font-serif text-2xl mb-1">{a.name}</div>
                  <div className="text-sm text-muted">{a.desc}</div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
