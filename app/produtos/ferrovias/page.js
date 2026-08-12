import Link from 'next/link';
import Reveal from '../../components/Reveal';
import Glyph from '../../components/Glyph';
import FerroviasFilter from '../../components/FerroviasFilter';
import { PRODUCTS } from '@/lib/content';

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const metadata = {
  title: 'Ferrovias',
  description:
    'Sistemas ferroviários da CRCHI: aparelhos de mudança de via, sistemas de fixação e materiais de fricção para carga pesada, metrô, VLT e alta velocidade.',
};

export default function Ferrovias() {
  const p = PRODUCTS.find((x) => x.slug === 'ferrovias');
  const others = PRODUCTS.filter((x) => x.slug !== 'ferrovias');

  return (
    <>
      <section className="phero has-bg">
        <img className="phero-bg" src={`${BASE}${p.hero}`} alt="" />
        <div className="wrap">
          <div className="crumb">
            <Link href="/">Início</Link> / <Link href="/produtos">Produtos</Link> / {p.title}
          </div>
          <h1>{p.title}</h1>
          <p>{p.intro}</p>
        </div>
      </section>

      <section className="dark2">
        <div className="wrap">
          <div className="split top">
            <Reveal>
              <span className="eyebrow">Ficha técnica</span>
              <h2 className="h2" style={{ color: '#fff' }}>Especificações principais.</h2>
              <p style={{ color: '#c9c6be' }}>
                Valores de referência do portfólio. A configuração final é definida em conjunto,
                a partir do projeto de via e dos requisitos operacionais.
              </p>
            </Reveal>
            <Reveal>
              <dl className="specs">
                {p.specs.map(([k, v]) => (
                  <div className="spec" key={k}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="dark2" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Linha de produtos</span>
            <h2 className="h2" style={{ color: '#fff' }}>Sistemas ferroviários.</h2>
            <p style={{ color: '#c9c6be', maxWidth: '60ch' }}>
              De aparelhos de via a fixação e materiais de fricção. Filtre pela linha de produto.
            </p>
          </Reveal>
          <div style={{ marginTop: '2.5rem' }}>
            <FerroviasFilter />
          </div>
        </div>
      </section>

      <section className="dark2" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal><span className="eyebrow">Outros produtos</span></Reveal>
          <div className="prod-grid">
            {others.map((o) => (
              <Reveal as="a" href={`${BASE}/produtos/${o.slug}/`} className="card" key={o.slug}>
                <span className="idx">{o.idx}</span>
                <Glyph name={o.glyph} />
                <h3>{o.title}</h3>
                <p>{o.short}</p>
                <span className="go">Saiba mais <span className="arw">→</span></span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="wrap">
          <span className="eyebrow center">{p.title}</span>
          <h2 style={{ marginTop: '1.2rem' }}>Vamos especificar<br />o seu sistema.</h2>
          <p>Envie os dados do projeto e retornamos com uma recomendação técnica.</p>
          <Link href="/contato" className="btn">Fale com um engenheiro <span className="arw">→</span></Link>
        </div>
      </section>
    </>
  );
}
