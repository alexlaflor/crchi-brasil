# CRCHI Brasil — site institucional (Next.js)

Site institucional em português (App Router, Next.js 14), inspirado na estrutura do site
CRCHI Austrália, com identidade própria. Textos e imagens são rascunhos/placeholders para
substituição pela equipe.

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:3000
```

Produção:

```bash
npm run build
npm start
```

## Deploy
Feito para **Vercel** (recomendado) ou Netlify. Basta conectar o repositório — sem configuração
extra. Depois é só apontar o domínio `crchi.com.br`.

## Estrutura

```
app/
  layout.js            # layout raiz, fontes, metadata (SEO/Open Graph), header e footer
  globals.css          # design tokens + estilos de todas as seções
  page.js              # Home (hero em vídeo + cabeça de corte, pilares, produtos, stats, CTA)
  sobre/               # Empresa
  produtos/            # Índice de produtos
    tuneladoras/       # Subpágina TBM
    escavacao-suporte/ # Subpágina escavação/suporte
    mineracao/         # Subpágina mineração
  solucoes/            # Soluções por setor + processo
  projetos/            # Cases/projetos
  contato/             # Formulário + contatos
  components/          # Header, Footer, Cutterhead, Marquee, Reveal, Glyph,
                       # ProductDetail, ContactForm
lib/content.js         # TODO O CONTEÚDO fica aqui (nav, produtos, stats, cases, escritórios)
public/                # imagens e vídeos (ver LEIA-ME-ASSETS.md)
```

## Onde editar

- **Textos, produtos, estatísticas, cases, contatos:** `lib/content.js` (fonte única).
- **Cores e tipografia:** variáveis no topo de `app/globals.css` (`--red`, `--ink`, etc.).
  O vermelho da marca é `#d8262f` — ajuste para o valor oficial da CRCHI se necessário.
- **Imagens e vídeo:** `public/` (ver `public/LEIA-ME-ASSETS.md`).
- **Logo:** substituir a marca textual em `Header.js`/`Footer.js`.

## Assinatura visual
O elemento característico é uma **cabeça de corte de tuneladora (TBM)** desenhada em SVG que
gira lentamente no hero (`app/components/Cutterhead.js`). É original e respeita
`prefers-reduced-motion`.

## Pendências para produção (próximos passos do dev)
1. Substituir placeholders por fotos/vídeos oficiais autorizados.
2. Conectar o formulário de contato a um backend real (rota `app/api/contato/route.js`
   + serviço de e-mail como Resend/SendGrid, ou Formspree). Hoje ele apenas simula o envio.
3. Adequação **LGPD**: banner de cookies e página de política de privacidade.
4. Adicionar `sitemap.xml` e `robots.txt` (Next.js: `app/sitemap.js` e `app/robots.js`).
5. (Opcional) migrar para TypeScript e adicionar i18n se quiser manter EN + PT.

## Acessibilidade e performance
Responsivo (mobile a desktop), foco de teclado visível, `prefers-reduced-motion` respeitado,
`next/image` para otimização automática das imagens locais.
