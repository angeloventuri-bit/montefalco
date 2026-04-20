export const SITE = {
  name: 'Montefalco',
  legalName: 'Montefalco Pedras Naturais',
  tagline: 'Distribuidora Premium de Pedras Naturais',
  description:
    'Distribuidora premium de chapas de mármore, granito, quartzito, quartzo e pedras naturais nacionais e importadas para projetos de alto padrão.',
  url: 'https://montefalco.com.br',
  defaultOgImage: '/og-montefalco.jpg',
  phoneDisplay: '(11) 99999-9999',
  phoneRaw: '+5511999999999',
  whatsappMessage: 'Olá, vim pelo site da Montefalco e gostaria de um orçamento.',
  email: 'contato@montefalco.com.br',
  address: {
    street: 'Rua das Pedras, 1200 — Galpão A',
    city: 'São Paulo',
    region: 'SP',
    zip: '00000-000',
    country: 'BR',
    geo: { lat: -23.5505, lng: -46.6333 },
  },
  openingHours: [
    { days: 'Seg a Sex', hours: '08h às 18h' },
    { days: 'Sábado', hours: '08h às 12h' },
  ],
  openingHoursSchema: ['Mo-Fr 08:00-18:00', 'Sa 08:00-12:00'],
  social: {
    instagram: 'https://www.instagram.com/montefalco',
    linkedin: 'https://www.linkedin.com/company/montefalco',
    pinterest: 'https://www.pinterest.com/montefalco',
  },
  founded: '2004',
  yearsInMarket: '20+',
  cnpj: '00.000.000/0001-00',
};

export const NAV_LINKS = [
  { label: 'Início', href: '/' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Produtos', href: '/produtos' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contato', href: '/contato' },
];

export const whatsappUrl = () =>
  `https://api.whatsapp.com/send?phone=${SITE.phoneRaw.replace('+', '')}&text=${encodeURIComponent(
    SITE.whatsappMessage,
  )}`;
