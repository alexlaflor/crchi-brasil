// ===== Equipamentos da linha Máquinas agrícolas =====
// Conteúdo GENÉRICO e provisório — atualize com os produtos e dados oficiais depois.
// Grupos válidos em `group`:
//   'preparo-plantio' | 'colheita'
// slug -> URL: /produtos/maquinas-agricolas/<slug>

export const AGRO_GROUPS = [
  { key: 'preparo-plantio', label: 'Preparo e plantio' },
  { key: 'colheita', label: 'Colheita' },
];

export const AGRO_MODELS = [
  {
    slug: 'trator-agricola',
    title: 'Trator agrícola (modelo genérico)',
    group: 'preparo-plantio',
    image: '/images/products/agricolas/trator-agricola.jpg',
    summary: 'Produto genérico de exemplo. Substitua pelo trator real, com potência, tração e implementos.',
  },
  {
    slug: 'plantadeira',
    title: 'Plantadeira (modelo genérico)',
    group: 'preparo-plantio',
    image: '/images/products/agricolas/plantadeira.jpg',
    summary: 'Produto genérico de exemplo. Substitua pela plantadeira real, com número de linhas e culturas.',
  },
  {
    slug: 'colheitadeira',
    title: 'Colheitadeira (modelo genérico)',
    group: 'colheita',
    image: '/images/products/agricolas/colheitadeira.jpg',
    summary: 'Produto genérico de exemplo. Substitua pela colheitadeira real, com plataforma e capacidade.',
  },
];
