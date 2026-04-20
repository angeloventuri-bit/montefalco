import { Hero } from '@/components/sections/Hero';
import { Marquee } from '@/components/sections/Marquee';
import { About } from '@/components/sections/About';
import { Stats } from '@/components/sections/Stats';
import { Products } from '@/components/sections/Products';
import { SplitWhy } from '@/components/sections/SplitWhy';
import { Differentials } from '@/components/sections/Differentials';
import { Applications } from '@/components/sections/Applications';
import { FeaturedCarousel } from '@/components/sections/FeaturedCarousel';
import { Testimonials } from '@/components/sections/Testimonials';
import { CtaBlock } from '@/components/sections/CtaBlock';
import { ContactForm } from '@/components/sections/ContactForm';
import { Seo } from '@/seo/Seo';
import {
  organizationSchema,
  localBusinessSchema,
  websiteSchema,
} from '@/seo/schemas';

export default function Home() {
  return (
    <>
      <Seo
        title="Distribuidora Premium de Mármores, Granitos e Pedras Naturais"
        description="Chapas de mármore, granito, quartzito, quartzo e pedras naturais nacionais e importadas. Atendimento consultivo B2B para arquitetos, construtoras e marmorarias em todo o Brasil."
        path="/"
        keywords={[
          'mármore',
          'granito',
          'quartzito',
          'quartzo',
          'travertino',
          'distribuidora de mármore',
          'chapas de pedra',
          'pedras naturais',
          'Montefalco',
        ]}
        schemas={[organizationSchema, localBusinessSchema, websiteSchema]}
      />
      <Hero />
      <Marquee />
      <About />
      <Stats />
      <Products />
      <SplitWhy />
      <Differentials />
      <Applications />
      <FeaturedCarousel />
      <Testimonials />
      <CtaBlock />
      <ContactForm />
    </>
  );
}
