import Link from 'next/link';
import Image from 'next/image';
import Reveal from '../components/Reveal';
import Glyph from '../components/Glyph';
import Marquee from '../components/Marquee';
import { PRODUCTS } from '@/lib/content';
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const metadata = {
  title: 'Produtos',
  description:
    'Tuneladoras (TBM), equipamentos de escavação e suporte de túneis e máquinas de mineração da CRCHI.',
};

export default function Produtos() {
  return (
    <>
<section className="phero has-bg">
        <img className="phero-bg" src={`${BASE}/images/hero-produtos.jpg`} alt="" />
        <div className="wrap">
          <div className="crumb"><Link href="/">Início</Link> / Produtos</div>
          <h1>A tecnologia por trás<br />de cada obra.</h1>
          <p>
            Do micro-tunelamento ao mega-bore, da escavação convencional à mineração subterrânea — um
            portfólio que escala com o seu projeto.
          </p>
        </div>
      </section>

      <section className="dark2">
        <div className="wrap">
          {PRODUCTS.map((p, i) => (
            <Reveal
              key={p.slug}
              className="split"
              style={{ marginBottom: i < PRODUCTS.length - 1 ? 'clamp(3rem,7vw,6rem)' : 0 }}
            >
              <Link href={`/produtos/${p.slug}`} className="media" style={{ order: i % 2 ? 2 : 1 }}>
                <img src={`${BASE}${p.image}`} alt={p.title} />
                <span className="tag">SUBSTITUIR · FOTO ORIGINALo</span>
              </Link>
              <div style={{ order: i % 2 ? 1 : 2 }}>
                <span className="eyebrow">{p.idx} · Produto</span>
                <h2 className="h2" style={{ color: '#fff' }}>{p.title}</h2>
                <p style={{ color: '#c9c6be' }}>{p.intro}</p>
                <Link href={`/produtos/${p.slug}`} className="btn" style={{ marginTop: '1.6rem' }}>
                  Ver detalhes <span className="arw">→</span>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Marquee text="ENGENHARIA CRCHI" />

      <section className="cta">
        <div className="wrap">
          <span className="eyebrow center">Não sabe por onde começar?</span>
          <h2 style={{ marginTop: '1.2rem' }}>A gente ajuda a<br />especificar a máquina.</h2>
          <p>Descreva o traçado, a geologia e o prazo. Retornamos com uma recomendação técnica.</p>
          <Link href="/contato" className="btn">Fale com um engenheiro <span className="arw">→</span></Link>
        </div>
      </section>
    </>
  );
}
