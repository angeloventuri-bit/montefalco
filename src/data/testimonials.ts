export interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  rating: 5;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Carlos Eduardo Pinheiro',
    role: 'Arquiteto',
    company: 'Studio CE Arquitetura',
    text: 'A Montefalco é nosso principal fornecedor há mais de 8 anos. A qualidade dos materiais é consistente, o atendimento é excepcional e a variedade é incomparável no mercado.',
    rating: 5,
  },
  {
    name: 'Ana Paula Mendes',
    role: 'Gerente de Compras',
    company: 'Construtora Mendes & Torres',
    text: 'Trabalhamos com dezenas de fornecedores de pedras e a Montefalco se destaca pela confiabilidade. Pronta entrega real e chapas sempre acima das expectativas.',
    rating: 5,
  },
  {
    name: 'Roberto Damasceno',
    role: 'Proprietário',
    company: 'Marmoraria Damasceno Premium',
    text: 'Encontrei o Taj Mahal que procurava há meses apenas na Montefalco. Material impecável, atendimento personalizado e logística eficiente para todo o Brasil.',
    rating: 5,
  },
];
