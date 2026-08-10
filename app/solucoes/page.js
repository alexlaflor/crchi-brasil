import Link from 'next/link';
import Reveal from '../components/Reveal';
import Marquee from '../components/Marquee';

export const metadata = {
  title: 'Soluções',
  description:
    'Soluções CRCHI por setor: metrô e transporte urbano, ferrovia, adução de água, energia e mineração.',
};

const SECTORS = [
  ['Metrô e transporte urbano', 'TBMs EPB para escavação sob áreas densas, com controle de recalque e mínima interferência na superfície.'],
  ['Ferrovia', 'Travessias de longa extensão em maciço rochoso com TBMs de rocha dura e alta taxa de avanço.'],
  ['Adução e transposição de água', 'Túneis de longa distância para abastecimento e transposição, com foco em prazo e continuidade.'],
  ['Energia e hidrelétrica', 'Túneis de desvio, adução e casa de força em geologia mista e condições severas.'],
  ['Mineração subterrânea', 'Desenvolvimento e produção com frota robusta para operação contínua 24/7.'],
  ['Utilidades e saneamento', 'Micro-tunelamento e pipe-jacking para redes urbanas com escavação de pequeno diâmetro.'],
];

const STEPS = [
  ['Estudo geológico', 'Analisamos sondagens, traçado e condições de contorno do projeto.'],
  ['Especificação', 'Definimos o tipo de máquina, diâmetro e configuração da cabeça de corte.'],
  ['Fabricação e entrega', 'Produção com controle de qualidade e logística até o canteiro.'],
  ['Operação e suporte', 'Comissionamento, treinamento e suporte de peças e assistência local.'],
];

export default function Solucoes() {
  return (
    <>
      <section className="phero">
        <div className="wrap">
          <div className="crumb"><Link href="/">Início</Link> / Soluções</div>
          <h1>Uma solução para<br />cada frente de obra.</h1>
          <p>
            Do metrô urbano à mineração profunda, combinamos a máquina certa com a engenharia e o
            suporte que o seu projeto exige.
          </p>
        </div>
      </section>

      <section className="dark2">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Setores</span>
            <h2 className="h2">Onde a CRCHI atua.</h2>
          </Reveal>
          <Reveal className="grid-1px cols-3" style={{ marginTop: '2.5rem' }}>
            {SECTORS.map(([t, d]) => (
              <div className="stat" key={t} style={{ padding: '2rem 1.8rem' }}>
                <h3 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '.7rem' }}>{t}</h3>
                <p style={{ color: '#b3b0a8', fontSize: '.95rem' }}>{d}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="concrete">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Como trabalhamos</span>
            <h2 className="h2">Do estudo à operação.</h2>
          </Reveal>
          <Reveal className="grid-1px cols-4" style={{ marginTop: '2.5rem' }}>
            {STEPS.map(([t, d], i) => (
              <div className="pill" key={t}>
                <span className="num">{String(i + 1).padStart(2, '0')}</span>
                <h3 style={{ fontSize: '1.25rem' }}>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <Marquee text="LET'S BUILD TOGETHER · VAMOS CONSTRUIR JUNTOS" repeat={4} />

      <section className="cta">
        <div className="wrap">
          <span className="eyebrow center">Tem um projeto em vista?</span>
          <h2 style={{ marginTop: '1.2rem' }}>Vamos desenhar<br />a solução juntos.</h2>
          <p>Nossa equipe combina portfólio global com execução e suporte no Brasil.</p>
          <Link href="/contato" className="btn">Fale conosco <span className="arw">→</span></Link>
        </div>
      </section>
    </>
  );
}
