import Link from 'next/link';
import { NAV, CONTACT, OFFICES } from '@/lib/content';
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Footer() {
  return (
    <footer className="site">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <Link href="/" className="brand">
              <img src={`${BASE}/images/logo.png`} alt="CRCHI Brasil" style={{ height: '32px', width: 'auto' }} />
            </Link>
            <p>Máquinas pesadas para tunelamento, mineração e infraestrutura. Fabricante global, equipe local.</p>
          </div>
          <div>
            <h4>Navegação</h4>
            {NAV.map((n) => (
              <Link key={n.href} href={n.href}>{n.label}</Link>
            ))}
          </div>
          <div>
            <h4>Escritórios</h4>
            {OFFICES.map((o) => (
              <p key={o.city}>{o.city}<br />{o.address}</p>
            ))}
          </div>
          <div>
            <h4>Contato</h4>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
            <a href="#" aria-label="LinkedIn">LinkedIn</a>
            <a href="#" aria-label="WeChat">WeChat</a>
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
