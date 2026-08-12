// ===== Equipamentos da linha Escavação convencional de túneis (NATM) =====
// Grupos válidos em `group`:
//   'perfuracao' | 'suporte' | 'escavacao' | 'revestimento' | 'transporte' | 'auxiliares'
// slug -> URL: /produtos/escavacao-suporte/<slug>

export const EXC_GROUPS = [
  { key: 'perfuracao', label: 'Perfuração e injeção' },
  { key: 'escavacao', label: 'Escavação e carga' },
  { key: 'suporte', label: 'Suporte e ancoragem' },
  { key: 'revestimento', label: 'Revestimento e formas' },
  { key: 'transporte', label: 'Transporte de material' },
  { key: 'auxiliares', label: 'Equipamentos auxiliares' },
];

export const EXC_MODELS = [
  // Perfuração e injeção
  { slug: 'jumbo-perfuracao', title: 'Jumbo de perfuração para túnel', group: 'perfuracao', image: '/images/products/escavacao/jumbo-perfuracao.jpg', summary: 'Jumbos hidráulicos de 2 a 4 lanças para perfuração e desmonte (drill-and-blast), com posicionamento controlado e leitura geológica.' },
  { slug: 'perfuratriz-multifuncao', title: 'Perfuratriz multifunção', group: 'perfuracao', image: '/images/products/escavacao/perfuratriz-multifuncao.jpg', summary: 'Equipamento de perfuração versátil para diferentes diâmetros e aplicações em obra subterrânea.' },
  { slug: 'jumbo-perfuracao-fragmentacao', title: 'Jumbo de perfuração e fragmentação', group: 'perfuracao', image: '/images/products/escavacao/jumbo-perfuracao-fragmentacao.jpg', summary: 'Perfuração combinada com fragmentação mecânica para rocha sem uso de explosivos.' },
  { slug: 'equipamento-injecao-inteligente', title: 'Equipamento de injeção (grouting) inteligente', group: 'perfuracao', image: '/images/products/escavacao/equipamento-injecao-inteligente.jpg', summary: 'Injeção de calda controlada para tratamento e impermeabilização do maciço.' },
  { slug: 'carregadeira-explosivos', title: 'Equipamento de carregamento de explosivos', group: 'perfuracao', image: '/images/products/escavacao/carregadeira-explosivos.jpg', summary: 'Carregamento mecanizado de explosivos para desmonte, aumentando segurança e produtividade.' },

  // Escavação e carga
  { slug: 'roadheader', title: 'Roadheader', group: 'escavacao', image: '/images/products/escavacao/roadheader.jpg', summary: 'Corte seletivo de rocha de resistência baixa a média, ideal para seções de geometria variável.' },
  { slug: 'escavadeira-inteligente', title: 'Escavadeira inteligente para túnel', group: 'escavacao', image: '/images/products/escavacao/escavadeira-inteligente.jpg', summary: 'Escavação mecanizada com controle inteligente para túneis e obras subterrâneas.' },
  { slug: 'maquina-escavacao-carga-digital', title: 'Máquina digital de escavação e carga', group: 'escavacao', image: '/images/products/escavacao/maquina-escavacao-carga-digital.jpg', summary: 'Escavação e carregamento integrados com operação digital para ciclos mais rápidos.' },
  { slug: 'maquina-multifuncional-tunel', title: 'Máquina multifuncional de túnel', group: 'escavacao', image: '/images/products/escavacao/maquina-multifuncional-tunel.jpg', summary: 'Plataforma multifunção que combina diferentes operações em frente de escavação.' },

  // Suporte e ancoragem
  { slug: 'jumbo-chumbadores', title: 'Jumbo de chumbadores (bolting)', group: 'suporte', image: '/images/products/escavacao/jumbo-chumbadores.jpg', summary: 'Instalação mecanizada de chumbadores para estabilização do maciço.' },
  { slug: 'jumbo-concreto-projetado', title: 'Jumbo de concreto projetado (shotcrete)', group: 'suporte', image: '/images/products/escavacao/jumbo-concreto-projetado.jpg', summary: 'Aplicação de concreto projetado por via úmida para suporte imediato.' },
  { slug: 'carro-cambota-metalica', title: 'Carro de montagem de cambotas metálicas', group: 'suporte', image: '/images/products/escavacao/carro-cambota-metalica.jpg', summary: 'Posicionamento e montagem de cambotas de aço no ciclo de suporte.' },

  // Revestimento e formas
  { slug: 'forma-arco-invertido', title: 'Forma para arco invertido', group: 'revestimento', image: '/images/products/escavacao/forma-arco-invertido.jpg', summary: 'Forma para concretagem do arco invertido (inverted arch) do túnel.' },
  { slug: 'carro-forma-impermeabilizacao', title: 'Carro de forma para manta impermeabilizante', group: 'revestimento', image: '/images/products/escavacao/carro-forma-impermeabilizacao.jpg', summary: 'Aplicação da manta de impermeabilização antes do revestimento definitivo.' },
  { slug: 'carro-forma-revestimento-digital', title: 'Carro de forma para revestimento (digital)', group: 'revestimento', image: '/images/products/escavacao/carro-forma-revestimento-digital.jpg', summary: 'Forma autopropelida para revestimento secundário com concretagem automatizada.' },
  { slug: 'carro-forma-cura-concreto', title: 'Carro de forma para cura do concreto', group: 'revestimento', image: '/images/products/escavacao/carro-forma-cura-concreto.jpg', summary: 'Sistema digital de cura e manutenção do concreto do revestimento.' },

  // Transporte de material
  { slug: 'correia-fixa', title: 'Correia transportadora fixa', group: 'transporte', image: '/images/products/escavacao/correia-fixa.jpg', summary: 'Transporte contínuo de material escavado em trechos fixos.' },
  { slug: 'correia-transferencia-ponte', title: 'Correia de transferência tipo ponte', group: 'transporte', image: '/images/products/escavacao/correia-transferencia-ponte.jpg', summary: 'Transferência de material entre trechos com estrutura em ponte.' },
  { slug: 'correia-continua', title: 'Correia transportadora contínua', group: 'transporte', image: '/images/products/escavacao/correia-continua.jpg', summary: 'Transporte de material que acompanha o avanço da TBM em longas extensões.' },
  { slug: 'correia-alta-inclinacao', title: 'Correia de alta inclinação com bordas', group: 'transporte', image: '/images/products/escavacao/correia-alta-inclinacao.jpg', summary: 'Transporte em rampas íngremes com bordas onduladas de contenção.' },
  { slug: 'correia-vertical', title: 'Correia transportadora vertical', group: 'transporte', image: '/images/products/escavacao/correia-vertical.jpg', summary: 'Elevação vertical de material escavado, útil em poços e saídas verticais.' },

  // Equipamentos auxiliares
  { slug: 'coletor-po', title: 'Coletor de pó para túnel', group: 'auxiliares', image: '/images/products/escavacao/coletor-po.jpg', summary: 'Controle de poeira na frente de escavação para segurança e visibilidade.' },
  { slug: 'veiculo-inspecao-revestimento', title: 'Veículo de inspeção de revestimento', group: 'auxiliares', image: '/images/products/escavacao/veiculo-inspecao-revestimento.jpg', summary: 'Veículo sobre caminhão para inspeção e aceitação de qualidade do revestimento.' },
  { slug: 'veiculo-plataforma-multiprocesso', title: 'Veículo plataforma multiprocesso', group: 'auxiliares', image: '/images/products/escavacao/veiculo-plataforma-multiprocesso.jpg', summary: 'Plataforma móvel para múltiplas operações de apoio no túnel.' },
];
