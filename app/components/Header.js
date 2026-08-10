'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV } from '@/lib/content';
import Image from 'next/image';

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href) => pathname === href || pathname.startsWith(href + '/');

  return (
    <header className={`site${solid ? ' solid' : ''}`}>
      <div className="wrap">
        <nav>
          <Link href="/" className="brand" aria-label="CRCHI Brasil — início">
            <Image src="/public/images/logo.png" alt="CRCHI Brasil" width={150} height={32} priority style={{ width: 'auto', height: '32px' }} />
          </Link>
          <div className={`navlinks${open ? ' open' : ''}`}>
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className={`link${isActive(n.href) ? ' active' : ''}`}>
                {n.label}
              </Link>
            ))}
            <Link href="/contato" className="btn">
              Fale conosco <span className="arw">→</span>
            </Link>
          </div>
          <button
            className="burger"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </nav>
      </div>
    </header>
  );
}
