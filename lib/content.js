// Central content source. Edit copy here — it feeds every page.

export const NAV = [
  { href: '/sobre', label: 'Empresa' },
  { href: '/produtos', label: 'Produtos' },
  { href: '/solucoes', label: 'Soluções' },
  { href: '/projetos', label: 'Projetos' },
  { href: '/contato', label: 'Contato' },
];

export const PRODUCTS = [
  {
    slug: 'tuneladoras',
    idx: '01',
    title: 'Tuneladoras (TBM)',
    short:
      'EPB, mixshield e TBMs de rocha dura para metrô, ferrovia, água e utilidades urbanas.',
    intro:
      'Tuneladoras de frente pressurizada e rocha dura projetadas para as condições geológicas mais exigentes, do solo mole à rocha maciça, em diâmetros de sub-metro a mega-bore.',
    hero: '/images/products/tbm-hero.jpg',
    image: '/images/products/tbm-1.jpg',
    glyph: 'tbm',
    specs: [
      ['Diâmetro de escavação', 'Ø 0,5 m – 15 m+'],
      ['Tipos', 'EPB · Mixshield · Rocha dura'],
      ['Aplicações', 'Metrô · Ferrovia · Adução · Hidrelétrica'],
      ['Controle', 'Sistema inteligente de TBM + gêmeo digital'],
    ],
    features: [
      ['Frente pressurizada (EPB)', 'Balanço de pressão preciso para solos moles e frentes mistas urbanas, minimizando recalques em superfície.'],
      ['Rocha dura (TBM)', 'Cabeças de corte de alto torque com cortadores de disco para maciços rochosos e longas travessias.'],
      ['Monitoramento em tempo real', 'Telemetria geológica e de desempenho integrada ao gêmeo digital ao longo da vida útil.'],
    ],
  },
  {
    slug: 'pipe-jacking',
    idx: '02',
    title: 'Pipe jacking',
    short:
      'Cravação de tubos por microtúnel para instalação de redes sem abertura de vala.',
    intro:
      'Sistemas de pipe jacking e microtúnel para instalar tubulações sob vias, rios e áreas urbanas sem vala a céu aberto, com controle preciso de traçado e mínima interferência na superfície.',
    hero: '/images/products/pipe-hero.jpg',
    image: '/images/products/pipe-1.jpg',
    glyph: 'pipe',
    specs: [
      ['Diâmetro', 'Ø 0,5 m – 4 m (referência)'],
      ['Método', 'Cravação de tubos · microtúnel'],
      ['Aplicações', 'Saneamento · Drenagem · Utilidades · Travessias'],
      ['Vantagem', 'Instalação sem vala (trenchless)'],
    ],
    features: [
      ['Sem vala', 'Instalação trenchless que evita escavação a céu aberto, reduzindo impacto no trânsito e na superfície.'],
      ['Travessias precisas', 'Cravação guiada sob rios, rodovias e ferrovias com controle de linha e de cota.'],
      ['Menor impacto urbano', 'Ideal para áreas densas: menos ruído, menos interdição e recomposição mais simples.'],
    ],
  },
  {
    slug: 'escavacao-suporte',
    idx: '03',
    title: 'Escavação e suporte de túneis',
    short:
      'Roadheaders, jumbos de perfuração e sistemas de suporte para escavação convencional e mista.',
    intro:
      'Equipamentos para escavação convencional e método sequencial: roadheaders, jumbos de perfuração e soluções de suporte para frentes que não comportam uma TBM.',
    hero: '/images/products/excavation-hero.jpg',
    image: '/images/products/excavation-1.jpg',
    glyph: 'exc',
    specs: [
      ['Equipamentos', 'Roadheaders · Jumbos · Suporte'],
      ['Método', 'Convencional · NATM / sequencial'],
      ['Aplicações', 'Rodovia · Ferrovia · Cavernas · Mina'],
      ['Automação', 'Perfuração assistida e perfis programáveis'],
    ],
    features: [
      ['Roadheaders', 'Corte seletivo em rocha de resistência baixa a média, ideal para seções de geometria variável.'],
      ['Jumbos de perfuração', 'Perfuração de alta produtividade para desmonte controlado e instalação de suporte.'],
      ['Sistemas de suporte', 'Aplicação de concreto projetado, cambotas e chumbadores integrada ao ciclo de escavação.'],
    ],
  },
  {
    slug: 'mineracao',
    idx: '04',
    title: 'Mineração',
    short:
      'Máquinas de perfuração e desenvolvimento de mina para operações subterrâneas de alto rendimento.',
    intro:
      'Frota para desenvolvimento e produção em mina subterrânea, focada em segurança, disponibilidade e custo por tonelada em operação contínua.',
    hero: '/images/products/mining-hero.jpg',
    image: '/images/products/mining-1.jpg',
    glyph: 'min',
    specs: [
      ['Equipamentos', 'Perfuratrizes · Desenvolvimento de mina'],
      ['Operação', 'Subterrânea contínua 24/7'],
      ['Foco', 'Segurança · Disponibilidade · Custo/tonelada'],
      ['Suporte', 'Peças e assistência local no Brasil'],
    ],
    features: [
      ['Desenvolvimento', 'Abertura de galerias e rampas com ciclos otimizados e alta taxa de avanço.'],
      ['Produção', 'Equipamentos robustos para operação contínua em ambientes severos.'],
      ['Ciclo de vida', 'Programa de peças, reforma e suporte técnico com equipe local.'],
    ],
  },
  {
    slug: 'ferrovias',
    idx: '05',
    title: 'Ferrovias',
    short:
      'Equipamentos para construção e manutenção de via férrea e sistemas ferroviários.',
    intro:
      'Soluções para construção e manutenção ferroviária, do assentamento de via a equipamentos de apoio, conectando a expertise em tunelamento ao transporte sobre trilhos.',
    hero: '/images/products/rail-hero.jpg',
    image: '/images/products/rail-1.jpg',
    glyph: 'rail',
    specs: [
      ['Segmentos', 'Via permanente · Manutenção · Apoio'],
      ['Aplicações', 'Ferrovia de carga · Metrô · Trem urbano'],
      ['Integração', 'Complementa túneis ferroviários com TBM'],
      ['Suporte', 'Peças e assistência local no Brasil'],
    ],
    features: [
      ['Via permanente', 'Equipamentos para assentamento e regularização de via com produtividade e precisão geométrica.'],
      ['Manutenção', 'Máquinas de apoio para conservação da malha e redução de paradas.'],
      ['Integração com túneis', 'Sinergia com o portfólio de tuneladoras para projetos ferroviários completos.'],
    ],
  },
];


export const PILLARS = [
  {
    num: '01 / CONFIÁVEL',
    title: 'Desempenho comprovado',
    body:
      'Mais de 1.500 máquinas entregues mundialmente, com performance testada nas condições geológicas mais exigentes: rocha dura, solo mole e frentes mistas.',
    image: '/images/home/reliable.jpg',
  },
  {
    num: '02 / ESCALÁVEL',
    title: 'Do micro ao mega-bore',
    body:
      'De micro-tunelamento e pipe-jacking abaixo de um metro até TBMs de mais de 15 metros, para metrô, rodovias, ferrovias, adução, hidrelétricas e utilidades.',
    image: '/images/home/scalable.jpg',
  },
  {
    num: '03 / INOVADOR',
    title: 'Engenharia inteligente',
    body:
      'Investimento contínuo em P&D: controle inteligente de TBM, monitoramento geológico em tempo real e suporte por gêmeo digital ao longo de toda a vida útil.',
    image: '/images/home/innovative.jpg',
  },
];

export const STATS = [
  { big: 'Top 3', accent: '3', lbl: 'Fabricante global (KHL Yellow Table)' },
  { big: '30+', accent: '30', lbl: 'Países atendidos' },
  { big: '1.000+', accent: '1.000', lbl: 'Patentes técnicas' },
  { big: '1.500+', accent: '1.500', lbl: 'TBMs entregues' },
];

export const CASES = [
  { img: '/images/cases/case-1.jpg', k: 'Metrô · São Paulo', title: 'Linha de metrô urbano', body: 'Escavação com TBM EPB sob área densamente ocupada, com controle de recalques.' },
  { img: '/images/cases/case-2.jpg', k: 'Ferrovia · Minas Gerais', title: 'Túnel ferroviário de carga', body: 'Travessia em maciço rochoso com TBM de rocha dura em longa extensão.' },
  { img: '/images/cases/case-3.jpg', k: 'Adução · Ceará', title: 'Túnel de adução de água', body: 'Transposição para abastecimento com foco em prazo e continuidade operacional.' },
  { img: '/images/cases/case-4.jpg', k: 'Hidrelétrica · Pará', title: 'Túnel de desvio', body: 'Escavação em condições geológicas mistas para obra hidrelétrica.' },
  { img: '/images/cases/case-5.jpg', k: 'Rodovia · Paraná', title: 'Túnel rodoviário em serra', body: 'Método sequencial com roadheaders e suporte integrado.' },
  { img: '/images/cases/case-6.jpg', k: 'Mina · Goiás', title: 'Desenvolvimento de mina', body: 'Frota de desenvolvimento subterrâneo para operação contínua.' },
];

export const OFFICES = [
  { city: 'São Paulo — SP', address: '[Endereço a definir]', note: 'Sede comercial' },
  { city: 'Belo Horizonte — MG', address: '[Endereço a definir]', note: 'Suporte e peças' },
];

export const CONTACT = {
  email: 'contato@crchi.com.br',
  phone: '+55 (11) 0000-0000',
  phoneHref: 'tel:+551100000000',
};
