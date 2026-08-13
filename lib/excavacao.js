// ===== Equipamentos da linha Escavação convencional de túneis (NATM) =====
// Grupos válidos em `group`:
//   'perfuracao' | 'escavacao' | 'suporte' | 'revestimento' | 'auxiliares'
// slug -> URL: /produtos/escavacao-suporte/<slug>
//
// Formato expandido: uma propriedade por linha, para facilitar a edição.
// Campos opcionais por equipamento (adicione quando quiser detalhar a página):
//   description: ['parágrafo 1', 'parágrafo 2'],
//   specs: [ ['Rótulo', 'Valor'], ['Rótulo', 'Valor'] ],

export const EXC_GROUPS = [
  { key: 'perfuracao', label: 'Perfuração e injeção' },
  { key: 'escavacao', label: 'Escavação' },
  { key: 'suporte', label: 'Suporte e ancoragem' },
  { key: 'revestimento', label: 'Revestimento e formas' },
  { key: 'auxiliares', label: 'Equipamentos auxiliares' },
];

export const EXC_MODELS = [
  {
    slug: 'perfuratriz-multifuncao',
    title: 'Sonda de perfuração multifuncional',
    group: 'perfuracao',
    image: '/images/products/escavacao/perfuratriz-multifuncao.jpg',
    summary: 'Sonda de perfuração versátil para diferentes diâmetros e aplicações em obra subterrânea.',
  },
  {
    slug: 'equipamento-injecao-inteligente',
    title: 'Equipamento inteligente de injeção (grouting)',
    group: 'perfuracao',
    image: '/images/products/escavacao/equipamento-injecao-inteligente.jpg',
    summary: 'Injeção de calda controlada para tratamento e impermeabilização do maciço.',
  },
  {
    slug: 'jumbo-perfuracao',
    title: 'Jumbo de perfuração',
    group: 'perfuracao',
    image: '/images/products/escavacao/jumbo-perfuracao.jpg',
    summary: 'Jumbos hidráulicos para perfuração e desmonte (drill-and-blast), com posicionamento controlado.',
  },
  {
    slug: 'veiculo-elevacao-instalacao',
    title: 'Veículo para elevação e instalação em túneis',
    group: 'escavacao',
    image: '/images/products/escavacao/veiculo-elevacao-instalacao.jpg',
    summary: 'Veículo de apoio para elevação e instalação de componentes na frente de obra.',
  },
  {
    slug: 'jumbo-chumbadores',
    title: 'Jumbo de ancoragem',
    group: 'suporte',
    image: '/images/products/escavacao/jumbo-chumbadores.jpg',
    summary: 'Instalação mecanizada de chumbadores e tela para estabilização do maciço.',
  },
  {
    slug: 'roadheader',
    title: 'Roadheader',
    group: 'escavacao',
    image: '/images/products/escavacao/roadheader.jpg',
    summary: 'Corte seletivo de rocha de resistência baixa a média, ideal para seções de geometria variável.',
  },
  {
    slug: 'coletor-po',
    title: 'Coletor de poeira para túneis',
    group: 'auxiliares',
    image: '/images/products/escavacao/coletor-po.jpg',
    summary: 'Controle de poeira na frente de escavação para segurança e visibilidade.',
  },
  {
    slug: 'jumbo-concreto-projetado',
    title: 'Robô de concreto projetado',
    group: 'suporte',
    image: '/images/products/escavacao/jumbo-concreto-projetado.jpg',
    summary: 'Aplicação de concreto projetado por via úmida para suporte imediato.',
  },
  {
    slug: 'carro-forma-revestimento-digital',
    title: 'Forma para revestimento de túneis computadorizada',
    group: 'revestimento',
    image: '/images/products/escavacao/carro-forma-revestimento-digital.jpg',
    summary: 'Carro de forma autopropelido para revestimento com concretagem automatizada.',
  },
];
