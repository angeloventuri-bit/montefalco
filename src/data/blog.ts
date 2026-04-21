export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  category: 'Guias' | 'Tendências' | 'Projetos' | 'Manutenção';
  cover: string;
  author: {
    name: string;
    role: string;
    bio: string;
  };
  publishedAt: string; // ISO
  updatedAt?: string;
  readingMinutes: number;
  body: { heading?: string; paragraphs: string[]; list?: string[] }[];
  tldr: string;
  tags: string[];
}

const defaultAuthor = {
  name: 'Ricardo Montefalco',
  role: 'Diretor Técnico · Montefalco',
  bio: 'Especialista em pedras naturais com mais de duas décadas de experiência em importação, seleção e aplicação de materiais para projetos de arquitetura de alto padrão.',
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'marmore-granito-ou-quartzito-guia-definitivo',
    title: 'Mármore, granito ou quartzito: qual escolher em 2026?',
    summary:
      'Um guia objetivo para arquitetos e clientes finais entenderem as diferenças entre os três materiais mais usados em projetos residenciais.',
    category: 'Guias',
    cover: '/media/images/slabs-display.webp',
    author: defaultAuthor,
    publishedAt: '2026-03-18',
    updatedAt: '2026-04-10',
    readingMinutes: 8,
    tldr:
      'Mármore é o mais elegante e macio — use em áreas decorativas. Granito é robusto e resistente ao calor — ideal para cozinhas. Quartzito une beleza do mármore com dureza do granito — a escolha premium para quem pode investir.',
    tags: ['Mármore', 'Granito', 'Quartzito', 'Guia'],
    body: [
      {
        paragraphs: [
          'A escolha entre mármore, granito e quartzito é uma das decisões mais importantes em qualquer projeto de arquitetura residencial ou comercial. Apesar de parecerem semelhantes, cada material tem propriedades físicas e estéticas que os tornam mais ou menos adequados para determinadas aplicações.',
        ],
      },
      {
        heading: 'O que é cada material?',
        paragraphs: [
          'Mármore é uma rocha metamórfica formada a partir do calcário submetido a alta pressão e temperatura. Seu principal composto é a calcita, o que o torna relativamente macio (3 na escala Mohs) e sensível a ácidos — sucos cítricos, vinagre e produtos de limpeza podem deixar manchas.',
          'Granito é uma rocha ígnea, formada pelo resfriamento lento do magma. É composto por quartzo, feldspato e mica, resultando em uma superfície extremamente dura (6-7 na escala Mohs) e resistente ao calor direto.',
          'Quartzito é também uma rocha metamórfica, mas formada a partir do arenito rico em quartzo. Tem a beleza dos veios do mármore, mas a dureza do granito — a combinação ideal para quem não quer abrir mão de nada.',
        ],
      },
      {
        heading: 'Quando usar mármore?',
        paragraphs: [
          'Mármore brilha em áreas onde beleza importa mais que resistência ao uso intenso: lavabos, banheiros de suítes, mesas de centro, paredes decorativas e pisos de áreas íntimas.',
          'Evite o mármore em cozinhas gourmet onde haverá contato frequente com ácidos. Se insistir nele, considere uma aplicação em leather finish (acabamento texturizado), que disfarça melhor eventuais marcas.',
        ],
      },
      {
        heading: 'Quando usar granito?',
        paragraphs: [
          'Granito é a escolha mais prática para bancadas de cozinha, churrasqueiras, áreas externas e fachadas. Suporta calor direto, resiste a riscos e manchas, e tem manutenção simples — basta um pano úmido.',
          'O preconceito estético que o granito sofreu nos anos 2000 está ficando para trás: novas variedades como Preto São Gabriel, Branco Dallas e Azul Sucuru mostram que é possível ter sofisticação sem abrir mão da durabilidade.',
        ],
      },
      {
        heading: 'Quando usar quartzito?',
        paragraphs: [
          'Quartzito é o material premium do momento. Variedades como Taj Mahal, Esmerald Green e Calacata Gold entregam a estética de um mármore italiano com a resistência de um granito nacional.',
          'O investimento é maior — geralmente 40% a 80% acima do granito —, mas a longevidade e o impacto visual justificam em projetos de alto padrão.',
        ],
      },
    ],
  },
  {
    slug: 'como-cuidar-de-bancada-de-marmore',
    title: 'Como cuidar de uma bancada de mármore no dia a dia',
    summary:
      'Cinco hábitos simples para preservar a beleza do mármore por décadas — e um mito que você pode esquecer.',
    category: 'Manutenção',
    cover: '/media/images/app-bathroom.webp',
    author: defaultAuthor,
    publishedAt: '2026-02-24',
    readingMinutes: 5,
    tldr:
      'Impermeabilize a cada 12 meses, use pano úmido no dia a dia, evite ácidos (limão, vinagre, café deixado sobre a pedra) e nunca use esponja de aço ou produto abrasivo. Pequenas marcas fazem parte do encanto.',
    tags: ['Mármore', 'Manutenção', 'Cuidados'],
    body: [
      {
        paragraphs: [
          'Mármore é um material vivo. Ele respira, absorve líquidos e ganha uma pátina com o uso — algo que os italianos chamam de beleza envelhecida. Mas isso não significa que você deva conviver com manchas. Com os cuidados certos, sua bancada pode parecer nova por décadas.',
        ],
      },
      {
        heading: '1. Impermeabilize anualmente',
        paragraphs: [
          'Mármore é poroso. Um selante de boa qualidade, aplicado a cada 12 meses, cria uma barreira invisível contra líquidos. O serviço leva 30 minutos por uma marmoraria parceira e custa menos que um jantar em restaurante.',
        ],
      },
      {
        heading: '2. Limpe com pano úmido e sabão neutro',
        paragraphs: [
          'Esqueça produtos multiuso, desinfetantes com limão ou cloro. Um pano levemente umedecido com água e sabão neutro resolve 95% dos casos. Seque com pano macio para evitar marcas de água em bancadas polidas.',
        ],
      },
      {
        heading: '3. Trate manchas imediatamente',
        paragraphs: [
          'Derrubou vinho, café ou suco? Passe o pano úmido na mesma hora. Se a mancha persistir, aplique uma pasta de bicarbonato de sódio com água por algumas horas e enxágue. Manchas de gordura pedem um desengordurante neutro específico para mármore.',
        ],
      },
      {
        heading: '4. Use descanso para panelas quentes',
        paragraphs: [
          'Mármore não racha com temperatura, mas o choque térmico pode destacar a selagem. Descanso de cortiça, madeira ou silicone resolve.',
        ],
      },
      {
        heading: '5. Mito: cortar direto na bancada',
        paragraphs: [
          'Nunca. Mesmo o mármore duro (6 Mohs em peças como Carrara C-Prime) pode arranhar com facas de metal. Use uma tábua de corte — seu mármore e suas facas vão agradecer.',
        ],
      },
    ],
  },
  {
    slug: 'tendencias-pedras-naturais-2026',
    title: 'Tendências de pedras naturais para 2026',
    summary:
      'Do verde-esmeralda à madeira petrificada: as peças que vão dominar os projetos de alto padrão no próximo ano.',
    category: 'Tendências',
    cover: '/media/bg/marble-green.webp',
    author: defaultAuthor,
    publishedAt: '2026-04-05',
    readingMinutes: 6,
    tldr:
      'Verde está de volta (Esmerald Green, Amazonita). Tons quentes ganham espaço (Travertino, Onix Mel). Lâminas ultracompactas dominam fachadas. Minimalismo cede lugar a pedras com movimento forte.',
    tags: ['Tendências', 'Design', '2026'],
    body: [
      {
        paragraphs: [
          'Depois de uma década de predominância do branco puro, os projetos de 2026 apostam em pedras com personalidade. As feiras de Milão, Verona e São Paulo convergiram em cinco movimentos estéticos que devem orientar especificações daqui para frente.',
        ],
      },
      {
        heading: '1. O retorno do verde',
        paragraphs: [
          'Quartzitos verde-esmeralda e amazonitas estão sendo especificados em bancadas principais, lobbies e paredes de destaque. O tom comunica sofisticação e conecta com a tendência biofílica — a busca por elementos que remetem à natureza dentro de ambientes construídos.',
        ],
      },
      {
        heading: '2. Tons quentes e terrosos',
        paragraphs: [
          'Travertino, ônix mel, quartzito Calacata Gold e granitos amarelos conquistam projetos que fogem da assepsia total. Combinam bem com madeira natural, couro e metais em bronze envelhecido.',
        ],
      },
      {
        heading: '3. Lâminas ultracompactas em fachadas',
        paragraphs: [
          'A leveza das lâminas (6mm a 12mm) permite aplicações que eram impensáveis com chapas tradicionais: fachadas ventiladas, painéis curvos e revestimentos externos com estética de mármore a um custo estrutural muito menor.',
        ],
      },
      {
        heading: '4. Book-matching em grandes painéis',
        paragraphs: [
          'A técnica de espelhar duas chapas consecutivas para criar padrões simétricos está sendo usada em paredes inteiras, ilhas de cozinha gigantes e revestimentos de elevadores. Pede pedras com movimento forte — quartzitos importados e mármores rajados.',
        ],
      },
      {
        heading: '5. Acabamentos texturizados',
        paragraphs: [
          'Polido perdeu espaço para leather, brushed e honed. O toque suave da superfície texturizada traduz luxo discreto e disfarça marcas do uso cotidiano — muito bem-vindo em bancadas de cozinha real.',
        ],
      },
    ],
  },
];

export const BLOG_CATEGORIES: BlogPost['category'][] = [
  'Guias',
  'Tendências',
  'Projetos',
  'Manutenção',
];
