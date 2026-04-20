export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: string;
  knowsAbout: string[];
}

export const TEAM: TeamMember[] = [
  {
    name: 'Ricardo Montefalco',
    role: 'Fundador e Diretor Técnico',
    bio: 'Há mais de 25 anos no mercado de pedras naturais, Ricardo conduz pessoalmente a curadoria de importados e o relacionamento com as principais minas do Brasil e da Itália.',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80&fit=crop',
    knowsAbout: ['Importação de pedras', 'Mármores italianos', 'Quartzitos brasileiros', 'Curadoria técnica'],
  },
  {
    name: 'Juliana Barros',
    role: 'Diretora Comercial',
    bio: 'Arquiteta de formação, Juliana lidera o time de consultoria técnica, apoiando escritórios de arquitetura e construtoras em especificações de alto padrão.',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80&fit=crop',
    knowsAbout: ['Consultoria técnica', 'Especificação arquitetônica', 'Projetos residenciais', 'Corporativo'],
  },
  {
    name: 'Marcos Prado',
    role: 'Gerente de Operações',
    bio: 'Responsável pela logística, armazenagem e qualidade das chapas. Garante que cada pedido seja expedido com a precisão que arquitetos e marmorarias esperam.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80&fit=crop',
    knowsAbout: ['Logística especializada', 'Controle de qualidade', 'Armazenagem', 'Expedição'],
  },
];
