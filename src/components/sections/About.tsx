import { Link } from 'react-router-dom';
import { Reveal } from '@/components/ui/Reveal';

const pills = [
  'Estoque Próprio',
  'Pronta Entrega',
  'Importados Exclusivos',
  'Atendimento B2B',
  'Qualidade Certificada',
];

export function About() {
  return (
    <section id="sobre" className="py-24 lg:py-36">
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <Reveal direction="left" className="relative">
            <img
              src="https://images.unsplash.com/photo-1603369425250-b276f2006ec0?w=1200&q=80&fit=crop"
              alt="Calacata Prime — Montefalco"
              loading="lazy"
              className="w-full aspect-[4/5] object-cover"
            />
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Granito%20Preto%20S%C3%A3o%20Gabriel-9wtdDfxxramMYqFpQ0HYxJMsVzt5Ci.png"
              alt="Granito Preto São Gabriel"
              loading="lazy"
              className="hidden sm:block absolute -bottom-10 -right-6 lg:-right-12 w-56 md:w-72 aspect-square object-cover border border-line shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
            />
            <div className="hidden sm:flex absolute -top-6 -left-6 lg:-left-10 items-end gap-3 bg-gold text-bg px-6 py-5">
              <strong className="font-serif text-4xl leading-none">20+</strong>
              <span className="text-xs leading-tight uppercase tracking-widest">
                anos no
                <br />
                mercado
              </span>
            </div>
          </Reveal>

          <Reveal>
            <div className="label-eyebrow mb-6">Quem Somos</div>
            <h2 className="heading-lg mb-8">
              Referência nacional em <span className="italic text-gold">pedras naturais</span>
            </h2>
            <div className="h-px w-14 bg-gold mb-8" />
            <p className="text-body mb-5">
              A Montefalco é uma distribuidora especializada em chapas de mármore, granito, quartzo,
              quartzito e pedras naturais de origem nacional e internacional.
            </p>
            <p className="text-body mb-10">
              Com mais de duas décadas de experiência, fornecemos materiais para arquitetos, construtoras e
              marmorarias em todo o Brasil — com atendimento consultivo e qualidade certificada.
            </p>
            <div className="flex flex-wrap gap-2.5 mb-10">
              {pills.map((p) => (
                <span key={p} className="pill">
                  {p}
                </span>
              ))}
            </div>
            <Link to="/contato" className="btn btn-primary">
              Falar com a equipe
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
