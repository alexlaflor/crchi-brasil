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
    slug: 'algodao-mzd3',
    title: 'Colhedor de Algodão MZD-3',
    group: 'colheita',
    image: '/images/products/agricolas/algodao-mzd3.jpg',
    summary: 'Produto genérico de exemplo. Substitua pelo trator real, com potência, tração e implementos.',
  },
  {
    slug: 'algodao-4mz6',
    title: 'Colhedor de Algodão 4MZ-6',
    group: 'colheita',
    image: '/images/products/agricolas/algodao-4mz6.jpg',
    summary: 'Produto genérico de exemplo. Substitua pela plantadeira real, com número de linhas e culturas.',
  },
  {
    slug: 'colhedor-de-forragem',
    title: 'Colhedor de Forragem de Precisão',
    group: 'colheita',
    image: '/images/products/agricolas/forragem.jpg',
    summary: 'Produto genérico de exemplo. Substitua pela colheitadeira real, com plataforma e capacidade.',
  },
];
