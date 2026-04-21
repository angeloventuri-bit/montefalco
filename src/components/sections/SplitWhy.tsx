import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';

const bullets = [
  'Maior variedade do mercado',
  'Pronta entrega real',
  'Consultoria técnica especializada',
  'Condições especiais para volume',
  'Importados raros e exclusivos',
];

export function SplitWhy() {
  return (
    <section className="grid lg:grid-cols-2 bg-bg-card/40 border-y border-line">
      <Reveal direction="left" className="relative overflow-hidden min-h-[320px] lg:min-h-[560px]">
        <img
          src="/media/images/stone-samples.webp"
          alt="Amostras de pedras naturais — Montefalco"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/40 via-transparent to-transparent" />
      </Reveal>
      <Reveal direction="right" className="flex items-center">
        <div className="p-10 md:p-16 lg:p-20 max-w-xl">
          <div className="label-eyebrow mb-5">Por que a Montefalco</div>
          <h2 className="heading-lg mb-6">
            O padrão que seus projetos <span className="italic text-gold">merecem</span>
          </h2>
          <p className="text-body mb-10">
            Construímos relações de longo prazo com arquitetos, construtoras e marmorarias — entregando
            mais que chapas, entregando confiança.
          </p>
          <ul className="space-y-0 mb-10 border-t border-line">
            {bullets.map((b) => (
              <li
                key={b}
                className="flex items-center justify-between py-4 border-b border-line text-white group cursor-default"
              >
                <span className="text-sm">{b}</span>
                <ArrowRight
                  size={16}
                  className="text-gold transition-transform duration-300 group-hover:translate-x-1"
                />
              </li>
            ))}
          </ul>
          <Link to="/sobre" className="btn btn-outline">
            Conheça a Montefalco
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
