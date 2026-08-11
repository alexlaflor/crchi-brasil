import Link from 'next/link';
import CaseFilter from '../components/CaseFilter';

export const metadata = {
  title: 'Projetos',
  description:
    'Projetos de referência com equipamentos CRCHI: tuneladoras, mineração, pipe jacking e ferrovias no mundo todo.',
};

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Projetos() {
  return (
    <>
      <section className="phero has-bg">
        <img className="phero-bg" src={`${BASE}/images/hero-projetos.jpg`} alt="" />
        <div className="wrap">
          <div className="crumb"><Link href="/">Início</Link> / Projetos</div>
          <h1>Projetos de<br />referência.</h1>
          <p>
            Implantações da mesma engenharia, da mesma fábrica e da mesma arquitetura de máquina que
            chega às obras brasileiras — comprovadas no mundo todo. Conteúdo ilustrativo; substitua
            por projetos da operação brasileira conforme forem concluídos.
          </p>
        </div>
      </section>

      <section className="dark2">
        <div className="wrap">
          <CaseFilter />
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
