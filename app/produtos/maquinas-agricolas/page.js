import Link from 'next/link';
import Reveal from '../../components/Reveal';
import Glyph from '../../components/Glyph';
import AgricolasFilter from '../../components/AgricolasFilter';
import { PRODUCTS } from '@/lib/content';

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const metadata = {
  title: 'Máquinas agrícolas',
  description:
    'Linha de máquinas agrícolas da CRCHI Brasil: preparo de solo, plantio e colheita. Conteúdo em desenvolvimento.',
};

export default function Agricolas() {
  const p = PRODUCTS.find((x) => x.slug === 'maquinas-agricolas');
  const others = PRODUCTS.filter((x) => x.slug !== 'maquinas-agricolas');

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
                a partir da cultura e das condições da sua operação.
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
            <h2 className="h2" style={{ color: '#fff' }}>Equipamentos agrícolas.</h2>
            <p style={{ color: '#c9c6be', maxWidth: '60ch' }}>
              Do preparo do solo à colheita. Filtre pelo grupo de equipamento.
            </p>
          </Reveal>
          <div style={{ marginTop: '2.5rem' }}>
            <AgricolasFilter />
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
          <h2 style={{ marginTop: '1.2rem' }}>Vamos especificar<br />a sua máquina.</h2>
          <p>Envie os dados da sua operação e retornamos com uma recomendação técnica.</p>
          <Link href="/contato" className="btn">Fale com um engenheiro <span className="arw">→</span></Link>
        </div>
      </section>
    </>
  );
}
