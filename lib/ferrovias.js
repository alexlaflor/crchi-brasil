// ===== Equipamentos da linha Ferrovias =====
// Grupos válidos em `group`:
//   'aparelhos-mudanca-via' | 'fixacao' | 'friccao'
// slug -> URL: /produtos/ferrovias/<slug>

export const FER_GROUPS = [
  { key: 'aparelhos-mudanca-via', label: 'Aparelhos de mudança de via' },
  { key: 'fixacao', label: 'Sistemas de fixação' },
  { key: 'friccao', label: 'Materiais de fricção' },
];

export const FER_MODELS = [
  // Aparelhos de mudança de via (turnouts, frogs)
  { slug: 'aparelho-mudanca-via', title: 'Aparelho de mudança de via (AMV)', group: 'aparelhos-mudanca-via', image: '/images/products/ferrovias/aparelho-mudanca-via.jpg', summary: 'Aparelhos de mudança de via para linhas principais em diferentes bitolas e configurações.' },
  { slug: 'amv-metro', title: 'AMV para metrô', group: 'aparelhos-mudanca-via', image: '/images/products/ferrovias/amv-metro.jpg', summary: 'Aparelhos de via para redes de metrô e VLT, com geometria e raios adequados ao transporte urbano.' },
  { slug: 'amv-vlt', title: 'AMV para VLT (bonde)', group: 'aparelhos-mudanca-via', image: '/images/products/ferrovias/amv-vlt.jpg', summary: 'Aparelhos de via para veículos leves sobre trilhos em ambiente urbano.' },
  { slug: 'coracao-aco-liga', title: 'Coração de jacaré em aço-liga (montado)', group: 'aparelhos-mudanca-via', image: '/images/products/ferrovias/coracao-aco-liga.jpg', summary: 'Coração de jacaré (frog) em aço-liga montado, para cruzamentos de via.' },
  { slug: 'amv-heavy-haul', title: 'AMV heavy-haul (carga pesada)', group: 'aparelhos-mudanca-via', image: '/images/products/ferrovias/amv-heavy-haul.jpg', summary: 'Aparelhos de via de 60 e 75 kg/m para corredores de carga pesada, com altas cargas por eixo.' },
  { slug: 'coracao-aco-manganes', title: 'Coração de jacaré em aço-manganês', group: 'aparelhos-mudanca-via', image: '/images/products/ferrovias/coracao-aco-manganes.jpg', summary: 'Coração de jacaré em aço de alto manganês, para alta resistência ao desgaste.' },
  { slug: 'amv-alta-velocidade', title: 'AMV de alta velocidade', group: 'aparelhos-mudanca-via', image: '/images/products/ferrovias/amv-alta-velocidade.jpg', summary: 'Aparelhos de via para linhas de alta velocidade, com projeto para até 350 km/h.' },
  { slug: 'amv-maglev-baixa-media', title: 'AMV para maglev de baixa/média velocidade', group: 'aparelhos-mudanca-via', image: '/images/products/ferrovias/amv-maglev-baixa-media.jpg', summary: 'Aparelhos de via para sistemas maglev de baixa e média velocidade.' },
  { slug: 'amv-monotrilho-apoiado', title: 'AMV para monotrilho apoiado', group: 'aparelhos-mudanca-via', image: '/images/products/ferrovias/amv-monotrilho-apoiado.jpg', summary: 'Aparelhos de via para monotrilho do tipo apoiado (straddle).' },
  { slug: 'amv-monotrilho-suspenso', title: 'AMV para monotrilho suspenso', group: 'aparelhos-mudanca-via', image: '/images/products/ferrovias/amv-monotrilho-suspenso.jpg', summary: 'Aparelhos de via para monotrilho do tipo suspenso.' },
  { slug: 'amv-cremalheira', title: 'AMV para via de cremalheira', group: 'aparelhos-mudanca-via', image: '/images/products/ferrovias/amv-cremalheira.jpg', summary: 'Aparelhos de via para sistemas de cremalheira (rack rail) em rampas acentuadas.' },

  // Sistemas de fixação
  { slug: 'fixacao-tipo-3', title: 'Sistema de fixação Tipo III', group: 'fixacao', image: '/images/products/ferrovias/fixacao-tipo-3.jpg', summary: 'Sistema de fixação elástica de trilho para via lastrada.' },
  { slug: 'fixacao-dz3', title: 'Sistema de fixação Tipo DZ III (DT VI 2)', group: 'fixacao', image: '/images/products/ferrovias/fixacao-dz3.jpg', summary: 'Sistema de fixação para aplicações específicas de via.' },
  { slug: 'fixacao-maglev', title: 'Sistema de fixação para maglev', group: 'fixacao', image: '/images/products/ferrovias/fixacao-maglev.jpg', summary: 'Fixação dedicada a sistemas de levitação magnética.' },
  { slug: 'fixacao-wj12', title: 'Sistema de fixação Tipo WJ-12', group: 'fixacao', image: '/images/products/ferrovias/fixacao-wj12.jpg', summary: 'Fixação elástica da família WJ para via lastrada.' },
  { slug: 'fixacao-tipo-1', title: 'Sistema de fixação Tipo I', group: 'fixacao', image: '/images/products/ferrovias/fixacao-tipo-1.jpg', summary: 'Sistema de fixação elástica de trilho, família Tipo I a VII.' },
  { slug: 'fixacao-tipo-2', title: 'Sistema de fixação Tipo II', group: 'fixacao', image: '/images/products/ferrovias/fixacao-tipo-2.jpg', summary: 'Sistema de fixação elástica de trilho, família Tipo I a VII.' },
  { slug: 'fixacao-tipo-4', title: 'Sistema de fixação Tipo IV', group: 'fixacao', image: '/images/products/ferrovias/fixacao-tipo-4.jpg', summary: 'Sistema de fixação elástica de trilho, família Tipo I a VII.' },
  { slug: 'fixacao-wt1', title: 'Sistema de fixação Tipo WT-1', group: 'fixacao', image: '/images/products/ferrovias/fixacao-wt1.jpg', summary: 'Sistema de fixação da família WT para via.' },
  { slug: 'fixacao-tipo-6', title: 'Sistema de fixação Tipo VI', group: 'fixacao', image: '/images/products/ferrovias/fixacao-tipo-6.jpg', summary: 'Sistema de fixação elástica de trilho, família Tipo I a VII.' },
  { slug: 'fixacao-tipo-7', title: 'Sistema de fixação Tipo VII', group: 'fixacao', image: '/images/products/ferrovias/fixacao-tipo-7.jpg', summary: 'Sistema de fixação elástica de trilho, família Tipo I a VII.' },
  { slug: 'fixacao-wj8', title: 'Sistema de fixação Tipo WJ-8', group: 'fixacao', image: '/images/products/ferrovias/fixacao-wj8.jpg', summary: 'Fixação elástica da família WJ para via lastrada.' },
  { slug: 'fixacao-tipo-5', title: 'Sistema de fixação Tipo V', group: 'fixacao', image: '/images/products/ferrovias/fixacao-tipo-5.jpg', summary: 'Sistema de fixação elástica de trilho, família Tipo I a VII.' },
  { slug: 'fixacao-wj7', title: 'Sistema de fixação Tipo WJ-7', group: 'fixacao', image: '/images/products/ferrovias/fixacao-wj7.jpg', summary: 'Fixação elástica com retenção por ombro para trilho de 60 kg/m em via lastrada.' },

  // Materiais de fricção
  { slug: 'friccao-g1-g3', title: 'Materiais de fricção G1, G3', group: 'friccao', image: '/images/products/ferrovias/friccao-g1-g3.jpg', summary: 'Materiais de fricção para sistemas de freio ferroviário.' },
  { slug: 'friccao-k1-k2', title: 'Materiais de fricção K1, K2', group: 'friccao', image: '/images/products/ferrovias/friccao-k1-k2.jpg', summary: 'Materiais de fricção para sistemas de freio ferroviário.' },
  { slug: 'sapata-freio-urbano', title: 'Sapata de freio sintética para veículo urbano', group: 'friccao', image: '/images/products/ferrovias/sapata-freio-urbano.jpg', summary: 'Sapata de freio sintética para veículos de transporte urbano sobre trilhos.' },
  { slug: 'pastilha-tx01', title: 'Pastilha de freio metalúrgica TX01 (rabo de andorinha)', group: 'friccao', image: '/images/products/ferrovias/pastilha-tx01.jpg', summary: 'Pastilha de freio em metalurgia do pó, tipo rabo de andorinha (dovetail).' },
  { slug: 'pastilha-fy01', title: 'Pastilha de freio metalúrgica FY01 (sem rabo de andorinha)', group: 'friccao', image: '/images/products/ferrovias/pastilha-fy01.jpg', summary: 'Pastilha de freio em metalurgia do pó, tipo sem rabo de andorinha.' },
  { slug: 'sapata-hgm-b', title: 'Sapata de freio sintética HGM-B (alto atrito)', group: 'friccao', image: '/images/products/ferrovias/sapata-hgm-b.jpg', summary: 'Sapata de freio sintética com alto coeficiente de atrito.' },
  { slug: 'sapata-hgm-d', title: 'Sapata de freio sintética HGM-D (alto atrito)', group: 'friccao', image: '/images/products/ferrovias/sapata-hgm-d.jpg', summary: 'Sapata de freio sintética com alto coeficiente de atrito.' },
];
