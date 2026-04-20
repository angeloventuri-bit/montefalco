import { Seo } from '@/seo/Seo';
import { PageHero } from '@/components/ui/PageHero';
import { ContactForm } from '@/components/sections/ContactForm';
import { breadcrumbSchema, organizationSchema, localBusinessSchema } from '@/seo/schemas';
import { SITE } from '@/data/site';

export default function Contato() {
  return (
    <>
      <Seo
        title="Contato — Fale com a equipe técnica da Montefalco"
        description="Entre em contato com a Montefalco. Atendimento consultivo por WhatsApp, telefone, e-mail ou visita ao galpão em São Paulo."
        path="/contato"
        schemas={[
          organizationSchema,
          localBusinessSchema,
          breadcrumbSchema([
            { name: 'Início', url: '/' },
            { name: 'Contato', url: '/contato' },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Contato"
        title={
          <>
            Fale com nossa <span className="italic text-gold">equipe</span>
          </>
        }
        description="Um consultor técnico responde em até 4 horas úteis com disponibilidade de chapas, valores e condições personalizadas para seu projeto."
        breadcrumbs={[
          { label: 'Início', href: '/' },
          { label: 'Contato' },
        ]}
      />

      <ContactForm />

      <section className="pb-24 lg:pb-36">
        <div className="container-site">
          <div className="border border-line overflow-hidden">
            <iframe
              title={`Mapa de ${SITE.name}`}
              src={`https://maps.google.com/maps?q=${SITE.address.geo.lat},${SITE.address.geo.lng}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full grayscale-[0.4] contrast-125"
              style={{ filter: 'invert(0.92) hue-rotate(180deg)' }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
