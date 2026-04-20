import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Seo } from '@/seo/Seo';
import { PageHero } from '@/components/ui/PageHero';
import { FAQ } from '@/data/faq';
import { breadcrumbSchema, faqSchema } from '@/seo/schemas';
import { Reveal } from '@/components/ui/Reveal';

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <Seo
        title="Perguntas Frequentes — Mármores e Pedras Naturais"
        description="Respostas às principais dúvidas sobre mármores, granitos, quartzitos, pedras naturais, prazos de entrega e visitação ao nosso galpão."
        path="/faq"
        schemas={[
          faqSchema,
          breadcrumbSchema([
            { name: 'Início', url: '/' },
            { name: 'FAQ', url: '/faq' },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Perguntas Frequentes"
        title={
          <>
            Dúvidas sobre <span className="italic text-gold">pedras naturais</span>?
          </>
        }
        description="Reunimos as perguntas que mais recebemos de arquitetos, construtoras e clientes finais. Se a sua não estiver aqui, fale com nossa equipe."
        breadcrumbs={[
          { label: 'Início', href: '/' },
          { label: 'FAQ' },
        ]}
      />

      <section className="py-16 lg:py-24">
        <div className="container-sm">
          <ul className="divide-y divide-line border-y border-line">
            {FAQ.map((item, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={item.question} delay={i * 0.04} as="li">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-start gap-6 py-7 text-left group"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-gold tabular-nums text-sm pt-1 w-8 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-serif text-lg md:text-xl flex-1 group-hover:text-gold transition-colors">
                      {item.question}
                    </span>
                    <span className="mt-1 text-gold shrink-0">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="faq-answer pl-14 pr-10 pb-7 text-body">{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Reveal>
              );
            })}
          </ul>

          <div className="text-center mt-20">
            <h2 className="heading-md mb-4">
              Sua dúvida não está <span className="italic text-gold">aqui</span>?
            </h2>
            <p className="text-body mb-8">
              Fale diretamente com um consultor técnico. Respondemos em até 4 horas úteis.
            </p>
            <Link to="/contato" className="btn btn-primary">
              Falar com especialista
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
