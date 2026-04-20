import { DIFFERENTIALS } from '@/data/differentials';
import { Reveal } from '@/components/ui/Reveal';

export function Differentials() {
  return (
    <section id="diferenciais" className="py-24 lg:py-36">
      <div className="container-site">
        <Reveal className="max-w-2xl mb-16">
          <div className="label-eyebrow mb-5">Nossa Proposta</div>
          <h2 className="heading-lg">
            Excelência em cada <span className="italic text-gold">etapa</span>
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {DIFFERENTIALS.slice(0, 6).map((d, i) => (
            <Reveal key={d.number} delay={i * 0.06}>
              <article className="group relative border border-line bg-bg-card p-8 md:p-10 h-full transition-colors duration-500 hover:border-gold">
                <div className="flex items-center justify-between mb-10">
                  <span className="font-serif text-2xl text-gold tabular-nums">{d.number}</span>
                  <d.icon
                    className="text-muted group-hover:text-gold transition-colors"
                    size={22}
                    strokeWidth={1.25}
                  />
                </div>
                <h3 className="font-serif text-xl mb-3">{d.title}</h3>
                <p className="text-body text-sm">{d.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
