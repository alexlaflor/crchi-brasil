import Link from 'next/link';
import Image from 'next/image';
import Reveal from '../components/Reveal';
import { CASES, STATS } from '@/lib/content';
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const metadata = {
  title: 'Projetos',
  description:
    'Projetos de tunelamento, ferrovia, adução, energia e mineração executados com equipamentos CRCHI.',
};

export default function Projetos() {
  return (
    <>
<section className="phero has-bg">
        <img className="phero-bg" src={`${BASE}/images/hero-projetos.jpg`} alt="" />
        <div className="wrap">
          <div className="crumb"><Link href="/">Início</Link> / Projetos</div>
          <h1>Obras que não<br />param de avançar.</h1>
          <p>
            Uma seleção de frentes onde equipamentos CRCHI entregam desempenho em campo. Conteúdo
            ilustrativo — substitua por projetos reais da operação brasileira.
          </p>
        </div>
      </section>

      <section className="dark2">
        <div className="wrap">
          <div className="case-grid">
            {CASES.map((c) => (
              <Reveal className="case" key={c.title}>
                <div className="ph">
                  <Image src={c.img} alt={c.title} width={1200} height={850} />
                </div>
                <div className="body">
                  <span className="k">{c.k}</span>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="wrap">
          <Reveal className="grid-1px cols-4">
            {STATS.map((s) => (
              <div className="stat" key={s.lbl}>
                <div className="big">{s.big}</div>
                <span className="lbl">{s.lbl}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="cta">
        <div className="wrap">
          <span className="eyebrow center">Seu projeto pode ser o próximo</span>
          <h2 style={{ marginTop: '1.2rem' }}>Vamos construir<br />juntos.</h2>
          <p>Conte sobre a obra e como a CRCHI Brasil pode apoiar da especificação à operação.</p>
          <Link href="/contato" className="btn">Fale conosco <span className="arw">→</span></Link>
        </div>
      </section>
    </>
  );
}
