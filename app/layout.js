import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  metadataBase: new URL('https://crchi.com.br'),
  title: {
    default: 'CRCHI Brasil — Tuneladoras, mineração e construção subterrânea',
    template: '%s · CRCHI Brasil',
  },
  description:
    'Tuneladoras (TBM), equipamentos de escavação, suporte de túneis e mineração da CRCHI, fabricante global de máquinas pesadas, com equipe local no Brasil.',
  openGraph: {
    title: 'CRCHI Brasil',
    description:
      'Máquinas pesadas para tunelamento, mineração e infraestrutura. Fabricante global, equipe local.',
    url: 'https://crchi.com.br',
    siteName: 'CRCHI Brasil',
    images: [{ url: '/images/home/og.jpg', width: 1200, height: 630, alt: 'CRCHI Brasil' }],
    locale: 'pt_BR',
    type: 'website',
  },
  themeColor: '#d8262f',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@600;700;800;900&family=IBM+Plex+Mono:wght@500;600&family=IBM+Plex+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
