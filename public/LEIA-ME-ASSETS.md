# Assets — onde entram os arquivos originais

Todas as imagens atuais são **placeholders** gerados (marcados com "SUBSTITUIR"). Basta
sobrescrever cada arquivo mantendo o mesmo nome/caminho — o site já aponta para eles.

## Vídeo do hero (home)
- `public/videos/hero.mp4` — vídeo de fundo do hero (não incluso).
  Enquanto não existir, aparece o pôster `public/images/home/hero-poster.jpg`.
  Recomendado: MP4 (H.264) leve, ~1080p, mudo, curto e em loop. Opcionalmente adicione
  também uma versão `.webm` e um segundo `<source>` no arquivo `app/page.js`.

## Imagens (substitua mantendo o nome)
- `images/home/hero-poster.jpg` — pôster do vídeo do hero
- `images/home/about.jpg` — foto da seção "empresa" na home e página Sobre
- `images/home/reliable.jpg` · `scalable.jpg` · `innovative.jpg` — pilares (se for usar)
- `images/home/og.jpg` (1200×630) — imagem de compartilhamento (Open Graph)
- `images/products/tbm-1.jpg` · `tbm-hero.jpg` · `tbm-2.jpg`
- `images/products/excavation-1.jpg` · `excavation-hero.jpg`
- `images/products/mining-1.jpg` · `mining-hero.jpg`
- `images/cases/case-1.jpg` … `case-6.jpg` — projetos

## Favicon / logo
- Adicione `app/icon.png` (favicon, Next.js detecta automaticamente).
- Substitua a marca textual "CRCHI BRASIL" pelo logo oficial em
  `app/components/Header.js` e `app/components/Footer.js` (use `next/image`).

## Direitos
Use apenas fotos, vídeos e logotipos oficiais autorizados pela CRCHI/matriz.
Os placeholders aqui são genéricos e podem ser descartados.
