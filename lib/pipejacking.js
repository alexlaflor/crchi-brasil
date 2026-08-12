// ===== Equipamentos da linha Pipe jacking =====
// Tipos válidos em `type`:
//   'lama' | 'retangular' | 'direto' | 'mineracao' | 'cortina'
// slug -> URL: /produtos/pipe-jacking/<slug>

export const PJ_TYPES = [
  { key: 'lama', label: 'Balanço por lama' },
  { key: 'retangular', label: 'Seção retangular' },
  { key: 'direto', label: 'Cravação direta' },
  { key: 'mineracao', label: 'Mineração' },
  { key: 'cortina', label: 'Cortina de tubos' },
];

export const PJ_MODELS = [
  {
    slug: 'slurry-balance-pipe-jacking',
    title: 'Máquina de pipe jacking com balanço por lama',
    type: 'lama',
    image: '/images/products/pipe-jacking/slurry-balance-pipe-jacking.jpg',
    summary: 'Cravação de tubos com frente pressurizada por lama para solos instáveis e com presença de água.',
  },
  {
    slug: 'rectangular-pipe-jacking',
    title: 'Máquina de pipe jacking retangular',
    type: 'retangular',
    image: '/images/products/pipe-jacking/rectangular-pipe-jacking.jpg',
    summary: 'Escavação de seção retangular para passagens de pedestres, galerias e travessias urbanas.',
  },
  {
    slug: 'direct-pipe-laying-machine',
    title: 'Máquina de assentamento direto de tubos',
    type: 'direto',
    image: '/images/products/pipe-jacking/direct-pipe-laying-machine.jpg',
    summary: 'Instalação de tubulação em uma única etapa, combinando escavação e cravação contínua.',
  },
  {
    slug: 'mining-pipe-jacking',
    title: 'Máquina de pipe jacking para mineração',
    type: 'mineracao',
    image: '/images/products/pipe-jacking/mining-pipe-jacking.jpg',
    summary: 'Cravação de tubos adaptada a aplicações de mineração e ambientes subterrâneos severos.',
  },
  {
    slug: 'pipe-roofing-machine',
    title: 'Máquina de cortina de tubos (pipe roof)',
    type: 'cortina',
    image: '/images/products/pipe-jacking/pipe-roofing-machine.jpg',
    summary: 'Execução de cortina de tubos como suporte prévio em travessias de baixa cobertura.',
  },
];
