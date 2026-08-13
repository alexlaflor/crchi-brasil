import Link from 'next/link';

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Footer() {
  return (
    <footer className="site">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <Link href="/" className="brand">
              <img src={`${BASE}/images/logo.png`} alt="CRCHI Brasil" className="foot-logo" />
            </Link>
            <p>Máquinas pesadas para tunelamento, mineração e infraestrutura. Fabricante global, equipe local.</p>
          </div>
          <div>
            <h4>Redes sociais</h4>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} CRCHI Brasil. Todos os direitos reservados.</span>
          <span className="mono">Política de Privacidade · LGPD · Cookies</span>
        </div>
      </div>
    </footer>
  );
}
