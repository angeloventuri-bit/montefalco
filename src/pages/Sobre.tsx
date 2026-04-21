import { Link } from 'react-router-dom';
import { Seo } from '@/seo/Seo';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { Stats } from '@/components/sections/Stats';
import { Differentials } from '@/components/sections/Differentials';
import { TEAM } from '@/data/team';
import { breadcrumbSchema, organizationSchema, teamSchemas } from '@/seo/schemas';

const timeline = [
  {
    year: '2004',
    title: 'Fundação',
    text: 'Montefalco nasce em São Paulo como uma pequena distribuidora de mármores nacionais.',
  },
  {
    year: '2010',
    title: 'Primeiras importações',
    text: 'Abertura de linha direta com minas italianas — Calacata, Carrara e Botticino entram no portfólio.',
  },
  {
    year: '2016',
    title: 'Galpão próprio',
    text: 'Inauguração do galpão atual em São Paulo com mais de 500 m² de chapas em exposição permanente.',
  },
  {
    year: '2021',
    title: 'Linha TECH',
    text: 'Expansão para lâminas ultracompactas, atendendo a demanda crescente por fachadas e móveis em pedra técnica.',
  },
  {
    year: '2026',
    title: 'Referência nacional',
    text: 'Mais de 2.000 clientes ativos, 500 materiais em estoque e operação logística para todo o Brasil.',
  },
];

export default function Sobre() {
  return (
    <>
      <Seo
        title="Sobre a Montefalco — 20+ anos em pedras naturais premium"
        description="Conheça a história da Montefalco, nossa equipe técnica e os valores que nos tornam referência nacional em mármores, granitos e pedras naturais para projetos de alto padrão."
        path="/sobre"
        schemas={[
          organizationSchema,
          ...teamSchemas,
          breadcrumbSchema([
            { name: 'Início', url: '/' },
            { name: 'Sobre', url: '/sobre' },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Sobre a Montefalco"
        title={
          <>
            Uma história esculpida em <span className="italic text-gold">pedra</span>
          </>
        }
        description="Há mais de duas décadas, a Montefalco conecta o Brasil às mais belas pedras naturais do mundo — com curadoria técnica, estoque próprio e o atendimento consultivo que projetos de alto padrão exigem."
        breadcrumbs={[
          { label: 'Início', href: '/' },
          { label: 'Sobre' },
        ]}
      />

      <section className="py-24 lg:py-32">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <Reveal direction="left">
              <img
                src="/media/images/quarry-carrara.webp"
                alt="Galpão Montefalco em São Paulo"
                className="w-full aspect-[4/5] object-cover"
                loading="lazy"
              />
            </Reveal>
            <Reveal direction="right">
              <div className="label-eyebrow mb-5">Nossa História</div>
              <h2 className="heading-lg mb-8">
                Movidos pela <span className="italic text-gold">beleza que dura séculos</span>
              </h2>
              <div className="h-px w-14 bg-gold mb-8" />
              <p className="text-body mb-5">
                A Montefalco nasceu do encontro entre a tradição italiana do trabalho com pedra e a riqueza
                mineral brasileira. Começamos pequenos, em 2004, atendendo marmorarias locais. Hoje somos
                referência nacional — com estoque permanente de mais de 500 materiais e operação logística
                para todo o Brasil.
              </p>
              <p className="text-body">
                O que não mudou em duas décadas: a obsessão por cada chapa que entra em nosso galpão. Cada
                peça passa por inspeção técnica antes de ser liberada. É assim que construímos confiança —
                uma pedra de cada vez.
              </p>
            </Reveal>
          </div>

          <Reveal className="grid md:grid-cols-3 gap-6 mb-24">
            {[
              {
                title: 'Missão',
                text: 'Fornecer as melhores pedras naturais do mundo aos projetos brasileiros, com curadoria técnica e atendimento consultivo.',
              },
              {
                title: 'Visão',
                text: 'Ser reconhecida como a distribuidora de pedras mais confiável do Brasil, a escolha natural de arquitetos e construtoras.',
              },
              {
                title: 'Valores',
                text: 'Qualidade sem exceções, transparência no atendimento, pontualidade logística e respeito pelo ofício do marmorista.',
              },
            ].map((v) => (
              <div key={v.title} className="border border-line bg-bg-card p-10">
                <div className="font-serif text-xl text-gold mb-4">{v.title}</div>
                <p className="text-body text-sm">{v.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <Stats />

      <section className="py-24 lg:py-32">
        <div className="container-site">
          <Reveal className="max-w-2xl mb-16">
            <div className="label-eyebrow mb-5">Nossa Jornada</div>
            <h2 className="heading-lg">
              Duas décadas de <span className="italic text-gold">crescimento</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-[180px_1fr] gap-y-10 md:gap-x-12 max-w-4xl">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.06} className="contents">
                <div className="font-serif text-4xl text-gold md:text-right">{t.year}</div>
                <div className="md:border-l md:border-line md:pl-10 -mt-2">
                  <div className="font-serif text-xl mb-2">{t.title}</div>
                  <p className="text-body text-sm max-w-xl">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-bg-card/30 border-y border-line">
        <div className="container-site">
          <Reveal className="max-w-2xl mb-16">
            <div className="label-eyebrow mb-5">Nossa Equipe</div>
            <h2 className="heading-lg">
              Pessoas que <span className="italic text-gold">entendem de pedra</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {TEAM.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.08}>
                <article className="border border-line bg-bg-card overflow-hidden group h-full flex flex-col">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={m.photo}
                      alt={m.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1200ms] ease-premium group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8 flex-1">
                    <div className="font-serif text-xl mb-1">{m.name}</div>
                    <div className="text-xs uppercase tracking-[0.2em] text-gold mb-4">{m.role}</div>
                    <p className="text-body text-sm">{m.bio}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Differentials />

      <section className="py-24 lg:py-32">
        <div className="container-sm text-center">
          <Reveal>
            <h2 className="heading-lg mb-6">
              Venha <span className="italic text-gold">conhecer</span> nosso galpão
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-body mb-10 max-w-xl mx-auto">
              Cada chapa é única. A visita presencial garante a escolha ideal para o seu projeto. Agende
              uma visita com nossa equipe consultiva.
            </p>
            <Link to="/contato" className="btn btn-primary">
              Agendar visita
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
