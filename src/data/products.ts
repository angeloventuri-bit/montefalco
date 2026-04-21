export type MaterialCategory =
  | 'marmore'
  | 'granito'
  | 'quartzo'
  | 'quartzito'
  | 'travertino'
  | 'tech';

export type ProductSize = 'tall' | 'wide' | 'regular';

export interface Product {
  slug: string;
  name: string;
  category: MaterialCategory;
  categoryLabel: string;
  tag: string;
  origin: 'Nacional' | 'Importado' | 'Exclusivo' | 'Linha TECH' | 'Linha Prime' | 'Premium';
  image: string;
  description: string;
  size?: ProductSize;
  applications: string[];
  finish: string;
  countryOfOrigin?: string;
}

export const CATEGORY_LABELS: Record<MaterialCategory, string> = {
  marmore: 'Mármore',
  granito: 'Granito',
  quartzo: 'Quartzo',
  quartzito: 'Quartzito',
  travertino: 'Travertino',
  tech: 'Linha TECH',
};

export const PRODUCTS: Product[] = [
  {
    slug: 'taj-mahal',
    name: 'Taj Mahal',
    category: 'quartzito',
    categoryLabel: 'Quartzito',
    tag: 'Premium',
    origin: 'Premium',
    image: '/media/bg/marble-gold-teal.webp',
    description:
      'Quartzito de fundo claro com movimentos dourados — referência absoluta em projetos de alto padrão, da cozinha à fachada.',
    size: 'tall',
    applications: ['Bancadas', 'Revestimentos', 'Ilhas gourmet', 'Mesas'],
    finish: 'Polido · Leather · Acetinado',
    countryOfOrigin: 'Brasil',
  },
  {
    slug: 'calacata-prime',
    name: 'Calacata Prime',
    category: 'marmore',
    categoryLabel: 'Mármore',
    tag: 'Importado',
    origin: 'Importado',
    image: '/media/bg/marble-luxury.webp',
    description:
      'Mármore italiano com veios cinza contrastantes em fundo branco puro — um clássico atemporal da arquitetura de luxo.',
    applications: ['Banheiros', 'Spas', 'Revestimentos', 'Mesas de centro'],
    finish: 'Polido · Escovado',
    countryOfOrigin: 'Itália',
  },
  {
    slug: 'preto-sao-gabriel',
    name: 'Preto São Gabriel',
    category: 'granito',
    categoryLabel: 'Granito',
    tag: 'Nacional',
    origin: 'Nacional',
    image: '/media/bg/marble-black.webp',
    description:
      'Granito negro com veios brancos sutis — alta resistência e elegância sóbria para projetos residenciais e corporativos.',
    applications: ['Bancadas', 'Pisos', 'Fachadas', 'Áreas externas'],
    finish: 'Polido · Flameado · Jateado',
    countryOfOrigin: 'Brasil',
  },
  {
    slug: 'ocean-blue',
    name: 'Ocean Blue',
    category: 'quartzo',
    categoryLabel: 'Quartzo',
    tag: 'Importado',
    origin: 'Importado',
    image: '/media/bg/marble-multicolor.webp',
    description:
      'Quartzo importado em tons de azul profundo — superfície não porosa, ideal para bancadas de alta durabilidade.',
    applications: ['Bancadas', 'Ilhas', 'Lavabos'],
    finish: 'Polido · Suede',
    countryOfOrigin: 'Brasil',
  },
  {
    slug: 'travertino-romano',
    name: 'Travertino Romano',
    category: 'travertino',
    categoryLabel: 'Travertino',
    tag: 'Importado',
    origin: 'Importado',
    image: '/media/bg/marble-golden-lines.webp',
    description:
      'Travertino importado da Itália — textura natural e tonalidade amarronzada que remete ao classicismo romano.',
    applications: ['Pisos', 'Revestimentos', 'Fachadas', 'Spas'],
    finish: 'Bruto · Tamponado · Polido',
    countryOfOrigin: 'Itália',
  },
  {
    slug: 'branco-prime',
    name: 'Branco Prime',
    category: 'quartzo',
    categoryLabel: 'Quartzo',
    tag: 'Linha Prime',
    origin: 'Linha Prime',
    image: '/media/images/app-white-marble.webp',
    description:
      'Quartzo da Linha Prime em fundo branco puro — uniformidade cirúrgica para projetos minimalistas.',
    size: 'wide',
    applications: ['Bancadas', 'Revestimentos', 'Lojas'],
    finish: 'Polido',
    countryOfOrigin: 'Brasil',
  },
  {
    slug: 'quartzo-carrara',
    name: 'Quartzo Carrara',
    category: 'quartzo',
    categoryLabel: 'Quartzo',
    tag: 'Importado',
    origin: 'Importado',
    image: '/media/images/carrara-mine.webp',
    description:
      'A elegância do Carrara em uma superfície de engenharia — veios suaves, manutenção mínima.',
    applications: ['Bancadas', 'Mesas', 'Banheiros'],
    finish: 'Polido · Acetinado',
    countryOfOrigin: 'Importado',
  },
  {
    slug: 'marmore-rajado',
    name: 'Mármore Rajado',
    category: 'marmore',
    categoryLabel: 'Mármore',
    tag: 'Nacional',
    origin: 'Nacional',
    image: '/media/bg/marble-multicolor.webp',
    description:
      'Mármore nacional com rajados marcantes — expressão visual única para grandes panos e revestimentos.',
    applications: ['Revestimentos', 'Pisos', 'Fachadas internas'],
    finish: 'Polido · Escovado',
    countryOfOrigin: 'Brasil',
  },
  {
    slug: 'esmerald-green',
    name: 'Esmerald Green',
    category: 'quartzito',
    categoryLabel: 'Quartzito',
    tag: 'Exclusivo',
    origin: 'Exclusivo',
    image: '/media/bg/marble-green.webp',
    description:
      'Quartzito verde esmeralda — peça rara, ideal para projetos de assinatura e espaços corporativos icônicos.',
    applications: ['Lobbies', 'Bancadas de destaque', 'Paredes decorativas'],
    finish: 'Polido · Leather',
    countryOfOrigin: 'Brasil',
  },
  {
    slug: 'travertino-nacional',
    name: 'Travertino Nacional',
    category: 'travertino',
    categoryLabel: 'Travertino',
    tag: 'Nacional',
    origin: 'Nacional',
    image: '/media/bg/marble-golden-lines.webp',
    description:
      'Travertino extraído no Brasil — beleza clássica com logística otimizada e excelente custo-benefício.',
    applications: ['Pisos', 'Paredes', 'Áreas externas'],
    finish: 'Tamponado · Bruto · Polido',
    countryOfOrigin: 'Brasil',
  },
  {
    slug: 'nero-venato',
    name: 'Nero Venato',
    category: 'tech',
    categoryLabel: 'Linha TECH',
    tag: 'Linha TECH',
    origin: 'Linha TECH',
    image: '/media/bg/marble-black-gold.webp',
    description:
      'Lâmina ultracompacta preta com veios dourados — leveza, resistência e versatilidade para fachadas e interiores.',
    applications: ['Fachadas', 'Móveis', 'Bancadas', 'Revestimentos curvos'],
    finish: 'Polido · Mate',
    countryOfOrigin: 'Espanha',
  },
  {
    slug: 'imperiale-calacata',
    name: 'Imperiale Calacata',
    category: 'tech',
    categoryLabel: 'Linha TECH',
    tag: 'Linha TECH',
    origin: 'Linha TECH',
    image: '/media/bg/marble-luxury.webp',
    description:
      'Lâmina ultracompacta reproduzindo o famoso Calacata — fidelidade visual com desempenho técnico superior.',
    applications: ['Bancadas', 'Fachadas', 'Pisos elevados'],
    finish: 'Polido · Mate',
    countryOfOrigin: 'Espanha',
  },
];

export const FEATURED_SLUGS = [
  'taj-mahal',
  'nero-venato',
  'imperiale-calacata',
  'esmerald-green',
  'preto-sao-gabriel',
  'branco-prime',
];

export const FILTER_TABS: { value: MaterialCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'Todos' },
  { value: 'marmore', label: 'Mármore' },
  { value: 'granito', label: 'Granito' },
  { value: 'quartzo', label: 'Quartzo' },
  { value: 'quartzito', label: 'Quartzito' },
  { value: 'travertino', label: 'Travertino' },
  { value: 'tech', label: 'Linha TECH' },
];
