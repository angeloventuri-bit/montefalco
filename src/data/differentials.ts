import { Gem, Truck, Compass, Globe, ShieldCheck, Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Differential {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const DIFFERENTIALS: Differential[] = [
  {
    number: '01',
    title: 'Variedade incomparável',
    description:
      'Mais de 500 materiais entre mármores, granitos, quartzos, quartzitos e lâminas ultracompactas em estoque permanente.',
    icon: Gem,
  },
  {
    number: '02',
    title: 'Pronta entrega real',
    description:
      'Estoque físico próprio com chapas disponíveis imediatamente. Sem atrasos, sem surpresas — seu cronograma respeitado.',
    icon: Truck,
  },
  {
    number: '03',
    title: 'Consultoria especializada',
    description:
      'Nossa equipe técnica orienta na escolha do material ideal para cada aplicação, acabamento e orçamento de projeto.',
    icon: Compass,
  },
  {
    number: '04',
    title: 'Importados exclusivos',
    description:
      'Acesso direto a pedras raras da Itália, Turquia, Brasil e outros países, com curadoria para projetos de alto padrão.',
    icon: Globe,
  },
  {
    number: '05',
    title: 'Qualidade certificada',
    description:
      'Todos os materiais passam por inspeção técnica. Garantimos autenticidade, estrutura e acabamento de cada chapa.',
    icon: ShieldCheck,
  },
  {
    number: '06',
    title: 'Atendimento consultivo',
    description:
      'Mais que vender chapas, orientamos sobre aplicação, acabamento e combinações estéticas para cada projeto.',
    icon: Sparkles,
  },
];

export interface Application {
  num: string;
  name: string;
  desc: string;
  image: string;
}

export const APPLICATIONS: Application[] = [
  {
    num: '01 / 05',
    name: 'Bancadas & Cozinhas',
    desc: 'Durabilidade e elegância para o coração da casa',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Quartzo%20Carrara-OdMXGOZ4SsL6HD25VyLHTdCe9d9tGW.png',
  },
  {
    num: '02 / 05',
    name: 'Banheiros & Spas',
    desc: 'Mármore e travertino de alto luxo',
    image: 'https://images.unsplash.com/photo-1603369425250-b276f2006ec0?w=1200&q=80&fit=crop',
  },
  {
    num: '03 / 05',
    name: 'Pisos & Revestimentos',
    desc: 'Beleza que só cresce com o tempo',
    image: 'https://images.unsplash.com/photo-1754498084260-b87c05b8f0dd?w=1200&q=80&fit=crop',
  },
  {
    num: '04 / 05',
    name: 'Fachadas & Externos',
    desc: 'Lâminas ultracompactas e granitos',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/L%C3%A2mina%20Branca-PI790NDaF5Z3tejgJYkNTyvbu6z3Dg.png',
  },
  {
    num: '05 / 05',
    name: 'Espaços Corporativos',
    desc: 'Lobbies e recepções de alto padrão',
    image: 'https://images.unsplash.com/photo-1641584087157-cd712948ce6b?w=1200&q=80&fit=crop',
  },
];

export const STATS = [
  { number: '+500', label: 'Materiais em estoque' },
  { number: '20+', label: 'Anos de experiência' },
  { number: '+2.000', label: 'Clientes ativos' },
  { number: '15+', label: 'Países de origem' },
];

export const MARQUEE_ITEMS = [
  'Mármore',
  'Granito',
  'Quartzito',
  'Quartzo',
  'Travertino',
  'Linha TECH',
  'Importados',
  'Nacionais',
  'Ultracompacta',
  'Dolomítico',
];
