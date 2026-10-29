import type { IconName } from './icons';

export interface Servico {
  slug: string;
  nome: string;
  resumo: string;
  icon: IconName;
  mensagem: string;
}

export const servicos: Servico[] = [
  {
    slug: 'moveis-planejados',
    nome: 'Móveis planejados',
    resumo: 'Cozinhas, quartos, closets, salas, banheiros e escritórios feitos sob medida para o seu espaço.',
    icon: 'cabinet',
    mensagem: 'Olá! Vim pelo site da Marcenaria Custom Furniture e quero um orçamento de móveis planejados.',
  },
  {
    slug: 'conserto-de-moveis-planejados',
    nome: 'Conserto de móveis planejados danificados',
    resumo: 'Portas desalinhadas, gavetas travando, dobradiças soltas, peças quebradas ou estufadas: recuperamos o seu móvel.',
    icon: 'wrench',
    mensagem: 'Olá! Vim pelo site da Marcenaria Custom Furniture e preciso consertar um móvel planejado.',
  },
  {
    slug: 'fabricacao-de-moveis',
    nome: 'Fabricação de móveis em geral',
    resumo: 'Mesas, estantes, painéis, balcões, camas e outros móveis fabricados do jeito que você precisa.',
    icon: 'saw',
    mensagem: 'Olá! Vim pelo site da Marcenaria Custom Furniture e quero fabricar um móvel.',
  },
  {
    slug: 'manutencao-imobiliaria',
    nome: 'Manutenção em móveis de entrega de imobiliária',
    resumo: 'Reparos nos móveis do imóvel para entrega das chaves e vistoria, para imobiliárias, proprietários e inquilinos.',
    icon: 'key',
    mensagem: 'Olá! Vim pelo site da Marcenaria Custom Furniture e preciso de manutenção nos móveis para entrega de imóvel.',
  },
  {
    slug: 'projeto-planejamento-execucao',
    nome: 'Projeto, planejamento e execução',
    resumo: 'Cuidamos de tudo: medimos, projetamos o ambiente, planejamos cada detalhe e executamos a montagem.',
    icon: 'ruler',
    mensagem: 'Olá! Vim pelo site da Marcenaria Custom Furniture e quero um projeto de móveis planejados.',
  },
];
