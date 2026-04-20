import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { whatsappUrl } from '@/data/site';

export function CtaBlock() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(200,169,126,0.08),transparent_60%)]" />
      <div className="container-sm relative text-center">
        <Reveal>
          <div className="label-eyebrow justify-center flex mb-6 text-white/70 before:bg-white/70">
            Pronto para começar?
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="heading-lg max-w-3xl mx-auto mb-6">
            Eleve seu próximo projeto com as <span className="italic text-gold">pedras certas</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="text-body max-w-xl mx-auto mb-10">
            Consultoria gratuita e orçamento sem compromisso — fale agora com nossa equipe técnica.
          </p>
        </Reveal>
        <Reveal delay={0.22}>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={whatsappUrl()} target="_blank" rel="noopener" className="btn bg-[#25D366] text-white hover:bg-[#1eb955]">
              <MessageCircle size={14} /> Falar no WhatsApp
            </a>
            <Link to="/contato" className="btn btn-outline">
              Enviar mensagem
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
