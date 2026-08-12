// ===== Equipamentos da linha Mineração =====
// Grupos válidos em `group`:
//   'perfuracao' | 'carregamento' | 'ancoragem' | 'projetado' | 'bolter-miner' | 'carga-transporte' | 'outros'
// slug -> URL: /produtos/mineracao/<slug>

export const MIN_GROUPS = [
  { key: 'perfuracao', label: 'Perfuração' },
  { key: 'carregamento', label: 'Carregamento de explosivos' },
  { key: 'ancoragem', label: 'Ancoragem e suporte' },
  { key: 'projetado', label: 'Concreto projetado' },
  { key: 'bolter-miner', label: 'Bolter-miners' },
  { key: 'carga-transporte', label: 'Carga e transporte' },
  { key: 'outros', label: 'Outros equipamentos' },
];

export const MIN_MODELS = [
  // Perfuração
  { slug: 'jumbo-perfuracao-1-lanca', title: 'Jumbo de perfuração de mina — 1 lança (CYTJ45)', group: 'perfuracao', image: '/images/products/mineracao/jumbo-perfuracao-1-lanca.jpg', summary: 'Jumbo hidráulico de lança única para desenvolvimento de veios estreitos e galerias de seção reduzida.' },
  { slug: 'jumbo-perfuracao-2-lancas', title: 'Jumbo de perfuração de mina — 2 lanças (CYTJ45/2)', group: 'perfuracao', image: '/images/products/mineracao/jumbo-perfuracao-2-lancas.jpg', summary: 'Jumbo hidráulico de duas lanças para avanço de rampas, galerias e frentes de desenvolvimento.' },
  { slug: 'jumbo-hidraulico-cytc', title: 'Jumbo hidráulico de perfuração (série CYTC)', group: 'perfuracao', image: '/images/products/mineracao/jumbo-hidraulico-cytc.jpg', summary: 'Jumbo hidráulico de perfuração para mina, com controle preciso de furação.' },
  { slug: 'perfuratriz-ceu-aberto', title: 'Perfuratriz de céu aberto (série ZYL)', group: 'perfuracao', image: '/images/products/mineracao/perfuratriz-ceu-aberto.jpg', summary: 'Perfuratriz para operações de mineração a céu aberto.' },
  { slug: 'perfuratriz-dth-integrada', title: 'Perfuratriz DTH integrada (ZYL138Q)', group: 'perfuracao', image: '/images/products/mineracao/perfuratriz-dth-integrada.jpg', summary: 'Perfuratriz down-the-hole (DTH) integrada para furos de produção.' },

  // Carregamento de explosivos
  { slug: 'jumbo-carregamento-desenvolvimento', title: 'Jumbo de carregamento — desenvolvimento (UC-0.4B)', group: 'carregamento', image: '/images/products/mineracao/jumbo-carregamento-desenvolvimento.jpg', summary: 'Carregamento mecanizado de emulsão em furos de desenvolvimento, com operação remota.' },
  { slug: 'jumbo-carregamento-furos-longos', title: 'Jumbo de carregamento — furos longos (UDK-40)', group: 'carregamento', image: '/images/products/mineracao/jumbo-carregamento-furos-longos.jpg', summary: 'Carregamento de furos longos para desmonte de produção (sublevel stoping), com maior capacidade e alcance.' },

  // Ancoragem e suporte
  { slug: 'jumbo-chumbadores-mina', title: 'Jumbo de chumbadores de mina (CYTM41/2A)', group: 'ancoragem', image: '/images/products/mineracao/jumbo-chumbadores-mina.jpg', summary: 'Jumbo autopropelido que executa o ciclo completo de tela e chumbadores a partir da cabine.' },
  { slug: 'carro-cambotas-mina', title: 'Carro de montagem de cambotas de mina', group: 'ancoragem', image: '/images/products/mineracao/carro-cambotas-mina.jpg', summary: 'Posicionamento e montagem de cambotas metálicas de suporte em galerias.' },

  // Concreto projetado
  { slug: 'projetado-mina', title: 'Máquina de concreto projetado de mina (UPS-20J-B)', group: 'projetado', image: '/images/products/mineracao/projetado-mina.jpg', summary: 'Robô de concreto projetado por via úmida, dimensionado para galerias estreitas.' },

  // Bolter-miners
  { slug: 'bolter-miner-carvao', title: 'Bolter-miner multifunção para carvão (série EJM)', group: 'bolter-miner', image: '/images/products/mineracao/bolter-miner-carvao.jpg', summary: 'Plataforma contínua que integra escavação e ancoragem em minas de carvão.' },
  { slug: 'bolter-miner-rocha', title: 'Bolter-miner multifunção para rocha (série EBH)', group: 'bolter-miner', image: '/images/products/mineracao/bolter-miner-rocha.jpg', summary: 'Bolter-miner para túneis e galerias em rocha, combinando avanço e suporte.' },

  // Carga e transporte
  { slug: 'lhd-diesel', title: 'LHD diesel subterrânea (WJ-6)', group: 'carga-transporte', image: '/images/products/mineracao/lhd-diesel.jpg', summary: 'Carregadeira load-haul-dump para rocha dura, dimensionada para galerias de 4,5 x 4,5 m.' },
  { slug: 'caminhao-subterraneo', title: 'Caminhão de mina subterrânea (UK-40)', group: 'carga-transporte', image: '/images/products/mineracao/caminhao-subterraneo.jpg', summary: 'Caminhão articulado de transporte para o trecho longo entre a LHD e o ponto de despejo.' },
  { slug: 'correia-mina-carvao', title: 'Correia transportadora de mina de carvão', group: 'carga-transporte', image: '/images/products/mineracao/correia-mina-carvao.jpg', summary: 'Transporte contínuo de minério/carvão ao longo da operação subterrânea.' },

  // Outros
  { slug: 'perfuratriz-resgate', title: 'Perfuratriz horizontal de resgate de grande diâmetro', group: 'outros', image: '/images/products/mineracao/perfuratriz-resgate.jpg', summary: 'Perfuratriz de grande diâmetro para operações de resgate em emergências de mina.' },
];
