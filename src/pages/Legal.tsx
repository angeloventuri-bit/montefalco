import { Seo } from '@/seo/Seo';
import { PageHero } from '@/components/ui/PageHero';
import { SITE } from '@/data/site';

export function Privacidade() {
  return (
    <>
      <Seo
        title="Política de Privacidade"
        description="Como a Montefalco trata seus dados pessoais em conformidade com a LGPD."
        path="/privacidade"
      />
      <PageHero
        eyebrow="Legal"
        title="Política de Privacidade"
        breadcrumbs={[
          { label: 'Início', href: '/' },
          { label: 'Privacidade' },
        ]}
      />
      <article className="py-20">
        <div className="container-sm text-white/85 space-y-6 leading-relaxed">
          <p>
            A {SITE.name} respeita sua privacidade e atua em conformidade com a Lei Geral de Proteção de
            Dados (LGPD — Lei 13.709/2018). Esta política descreve como coletamos, usamos e protegemos
            seus dados pessoais.
          </p>
          <h2 className="font-serif text-2xl mt-8">1. Dados que coletamos</h2>
          <p>
            Coletamos apenas os dados que você voluntariamente nos fornece por meio de formulários de
            contato, solicitação de orçamento e canais de atendimento: nome, empresa, e-mail, telefone e
            informações sobre seu projeto.
          </p>
          <h2 className="font-serif text-2xl mt-8">2. Como usamos seus dados</h2>
          <p>
            Utilizamos seus dados exclusivamente para responder sua solicitação, enviar orçamentos e
            manter o relacionamento comercial. Não comercializamos e não compartilhamos seus dados com
            terceiros para fins de marketing.
          </p>
          <h2 className="font-serif text-2xl mt-8">3. Seus direitos</h2>
          <p>
            Você pode solicitar acesso, correção, portabilidade ou exclusão dos seus dados a qualquer
            momento pelo e-mail{' '}
            <a href={`mailto:${SITE.email}`} className="text-gold">
              {SITE.email}
            </a>
            .
          </p>
          <h2 className="font-serif text-2xl mt-8">4. Segurança</h2>
          <p>
            Utilizamos medidas técnicas e organizacionais para proteger seus dados contra acesso não
            autorizado, alteração, divulgação ou destruição.
          </p>
          <h2 className="font-serif text-2xl mt-8">5. Contato</h2>
          <p>
            Para dúvidas sobre privacidade, entre em contato pelo e-mail{' '}
            <a href={`mailto:${SITE.email}`} className="text-gold">
              {SITE.email}
            </a>
            .
          </p>
        </div>
      </article>
    </>
  );
}

export function Termos() {
  return (
    <>
      <Seo
        title="Termos de Uso"
        description="Termos que regem a utilização do site da Montefalco."
        path="/termos"
      />
      <PageHero
        eyebrow="Legal"
        title="Termos de Uso"
        breadcrumbs={[
          { label: 'Início', href: '/' },
          { label: 'Termos' },
        ]}
      />
      <article className="py-20">
        <div className="container-sm text-white/85 space-y-6 leading-relaxed">
          <p>
            Ao acessar e utilizar o site da {SITE.name}, você concorda com os termos abaixo. Caso não
            concorde, solicitamos que não utilize este site.
          </p>
          <h2 className="font-serif text-2xl mt-8">1. Propriedade intelectual</h2>
          <p>
            Todo o conteúdo deste site — textos, imagens, marcas, logotipos — é propriedade da{' '}
            {SITE.name} ou de terceiros licenciadores, protegido por leis de direitos autorais.
          </p>
          <h2 className="font-serif text-2xl mt-8">2. Uso permitido</h2>
          <p>
            Você pode navegar e consultar nosso catálogo para fins pessoais e de negócio. É proibida a
            reprodução, distribuição ou modificação do conteúdo sem autorização por escrito.
          </p>
          <h2 className="font-serif text-2xl mt-8">3. Imagens dos materiais</h2>
          <p>
            As imagens são ilustrativas. Por tratar-se de pedra natural, cada chapa é única — variações
            de cor, veios e textura fazem parte da beleza do material e devem ser conferidas antes da
            compra.
          </p>
          <h2 className="font-serif text-2xl mt-8">4. Disponibilidade</h2>
          <p>
            Materiais listados podem estar temporariamente indisponíveis. Confirme sempre a
            disponibilidade com nossa equipe antes de fechar o projeto.
          </p>
          <h2 className="font-serif text-2xl mt-8">5. Contato</h2>
          <p>
            Dúvidas sobre estes termos:{' '}
            <a href={`mailto:${SITE.email}`} className="text-gold">
              {SITE.email}
            </a>
            .
          </p>
        </div>
      </article>
    </>
  );
}
