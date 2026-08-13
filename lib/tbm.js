// ===== Equipamentos da linha Tuneladoras (TBM) =====
// Linhas de produto (families) válidas em `family`:
//   'shield' | 'hard-rock' | 'multi-mode' | 'special-shaped' | 'shaft'
// slug -> URL: /produtos/tuneladoras/<slug>

export const TBM_FAMILIES = [
  { key: 'shield', label: 'Escudo (Shield)' },
  { key: 'hard-rock', label: 'Rocha dura' },
  { key: 'multi-mode', label: 'Multimodo' },
  { key: 'special-shaped', label: 'Seção especial' },
  { key: 'shaft', label: 'Poços (Shaft)' },
];

export const TBM_MODELS = [
  {
    slug: 'slurry-tbm',
    title: 'TBM Slurry (frente com lama)',
    family: 'shield',
    image: '/images/products/tbm/slurry-tbm.jpg',
    summary: 'Escudo de balanço por pressão de lama para solos instáveis e frentes com água.',
  },
  {
    slug: 'epb-tbm',
    title: 'TBM EPB (frente pressurizada por terra)',
    family: 'shield',
    image: '/images/products/tbm/epb-tbm.jpg',
    summary: 'Escudo de balanço de pressão de terra para argila, areia e frentes mistas — a configuração mais usada do portfólio.',
  },
  {
    slug: 'double-shield-tbm',
    title: 'TBM de duplo escudo',
    family: 'hard-rock',
    image: '/images/products/tbm/double-shield-tbm.jpg',
    summary: 'TBM de rocha dura com escudos telescópicos para avanço contínuo e revestimento em rocha fraturada.',
  },
  {
    slug: 'open-type-gripper-tbm',
    title: 'TBM aberta com grippers',
    family: 'hard-rock',
    image: '/images/products/tbm/open-type-gripper-tbm.jpg',
    summary: 'TBM aberta com sistema de grippers para escavação de alto desempenho em rocha estável.',
  },
  {
    slug: 'single-shield-tbm',
    title: 'TBM de escudo simples',
    family: 'hard-rock',
    image: '/images/products/tbm/single-shield-tbm.jpg',
    summary: 'TBM de rocha dura com escudo único e revestimento por anéis para maciços de qualidade variável.',
  },
  {
    slug: 'multi-mode-tbm',
    title: 'TBM multimodo',
    family: 'multi-mode',
    image: '/images/products/tbm/multi-mode-tbm.jpg',
    summary: 'Escudo capaz de alternar entre modos de escavação conforme a frente muda ao longo do traçado.',
  },
  {
    slug: 'dual-mode-tbm',
    title: 'TBM de modo duplo',
    family: 'multi-mode',
    image: '/images/products/tbm/dual-mode-tbm.jpg',
    summary: 'Máquina que combina modos EPB e lama na mesma escavação, para frentes mistas urbanas.',
  },
  {
    slug: 'cross-passage-tbm',
    title: 'TBM para travessas (cross-passage)',
    family: 'special-shaped',
    image: '/images/products/tbm/cross-passage-tbm.jpg',
    summary: 'Equipamento dedicado à escavação mecanizada de travessas entre túneis.',
  },
  {
    slug: 'open-caisson-shaft-tbm',
    title: 'TBM para poços em modo aberto',
    family: 'shaft',
    image: '/images/products/tbm/open-caisson-shaft-tbm.jpg',
    summary: 'Máquina para afundamento de poços pela técnica de caixão aberto.',
  },
  {
    slug: 'full-face-shaft-tbm',
    title: 'TBM para poços de face plena',
    family: 'shaft',
    image: '/images/products/tbm/full-face-shaft-tbm.jpg',
    summary: 'Perfuratriz de poços verticais de face plena para grandes profundidades.',
  },
];
