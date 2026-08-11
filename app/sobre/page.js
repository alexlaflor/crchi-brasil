import Link from 'next/link';
import Image from 'next/image';
import Reveal from '../components/Reveal';
import Marquee from '../components/Marquee';

export const metadata = {
  title: 'Empresa',
  description:
    'A CRCHI Brasil é a filial brasileira de um dos maiores fabricantes de tuneladoras do mundo, com engenharia global e suporte local.',
};

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';

const HIGHLIGHTS = [
  'Um dos maiores fabricantes de tuneladoras do mundo, com mais de 1.000 máquinas entregues.',
  'Equipe de engenharia e serviço no Brasil, apoiada pela base de engenharia global da CRCHI.',
  'Suporte de ciclo completo: projeto e fabricação CRCHI, com comissionamento, treinamento e peças pela CRCHI Brasil.',
  'Equipamentos atendendo mais de 30 países em seis continentes.',
];

const TIMELINE = [
  ['1990', 'Fundação do grupo', 'Criação da China Railway Construction Corporation (CRCC), grupo estatal que mais tarde daria origem à CRCHI como sua subsidiária de tunelamento e equipamentos pesados.'],
  ['2001', 'Divisão de indústria pesada', 'O grupo passa a investir no desenvolvimento de tuneladoras, iniciando a trajetória rumo à autossuficiência em TBMs.'],
  ['2007', 'Constituição da CRCHI', 'A China Railway Construction Heavy Industry é constituída como empresa dedicada à fabricação de TBMs, sistemas ferroviários e equipamentos de construção pesada.'],
  ['2010', 'Primeira TBM de grande diâmetro', 'Entrega da primeira tuneladora de grande diâmetro projetada e fabricada internamente pela empresa.'],
  ['2012', 'Liderança no mercado doméstico', 'A CRCHI assume a liderança no setor de TBMs na China, fornecendo máquinas para projetos de metrô em dezenas de cidades.'],
  ['2015', 'Início da expansão internacional', 'Após as primeiras exportações, a empresa conquista contratos internacionais e acelera a presença na Ásia, no Oriente Médio e além.'],
  ['2018', '1.000ª TBM entregue', 'Marco que consolida a CRCHI entre os maiores fabricantes de tuneladoras do mundo em volume de máquinas.'],
  ['2023', 'Maior perfuratriz de poços do mundo', 'Lançamento de uma perfuratriz vertical de poços de 23,02 m de diâmetro, recorde mundial de escala na época.'],
  ['2024', 'Uma das maiores TBMs do mundo', 'Tuneladora de 16,64 m de diâmetro entra em operação; equipamentos CRCHI passam a atender projetos em mais de 30 países.'],
  ['[ano]', 'CRCHI Brasil estabelecida', 'Constituição da filial brasileira para levar o portfólio de tunelamento, mineração e ferrovias da CRCHI ao mercado nacional.'],
];

const TECH_STATS = [
  ['20%', 'Proporção de equipe em P&D'],
  ['1.300+', 'Patentes registradas'],
  ['8', 'Centros de pesquisa'],
  ['16 m+', 'Diâmetro máximo de TBM'],
];

const CERTS = [
  ['Qualidade', 'ISO 9001', 'Sistemas de gestão da qualidade em projeto, engenharia e serviço.', '[nº do certificado]'],
  ['Meio ambiente', 'ISO 14001', 'Gestão ambiental, uso responsável de recursos e redução de impacto.', '[nº do certificado]'],
  ['Saúde e segurança', 'ISO 45001', 'Gestão de saúde e segurança ocupacional e controle de riscos no trabalho.', '[nº do certificado]'],
];

export default function Sobre() {
  return (
    <>
      <section className="phero has-bg">
        <img className="phero-bg" src={`${BASE}/images/hero-empresa.jpg`} alt="" />
        <div className="wrap">
          <div className="crumb"><Link href="/">Início</Link> / Empresa</div>
          <h1>Engenharia para<br />o futuro do subsolo.</h1>
          <p>
            A CRCHI Brasil é a presença brasileira da China Railway Construction Heavy Industry
            (CRCHI), uma das maiores fabricantes de tuneladoras e equipamentos de construção
            subterrânea do mundo.
          </p>
        </div>
      </section>

      {/* OVERVIEW + HIGHLIGHTS */}
      <section className="light">
        <div className="wrap">
          <div className="split">
            <Reveal className="media">
              <Image src="/images/home/about.jpg" alt="Fábrica e tuneladora CRCHI" width={1400} height={1000} />
              <span className="tag">SUBSTITUIR · FOTO ORIGINAL</span>
            </Reveal>
            <Reveal>
              <span className="eyebrow">Quem somos</span>
              <h2 className="h2">Escala global, execução local.</h2>
              <p>
                O grupo controlador carrega mais de três décadas de herança em tunelamento e
                equipamentos pesados, com mais de 1.000 TBMs entregues no mundo. A CRCHI Brasil traz
                essa escala, profundidade de engenharia e capacidade de fabricação para o mercado
                nacional — da definição do projeto e especificação da máquina ao comissionamento,
                treinamento de operadores e suporte de ciclo de vida.
              </p>
            </Reveal>
          </div>
          <Reveal className="highlights">
            {HIGHLIGHTS.map((h, i) => (
              <div className="highlight" key={i}>
                <span className="hi-mark" />
                <p>{h}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="dark2">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Herança CRCHI</span>
            <h2 className="h2">Três décadas construindo o subsolo.</h2>
            <p style={{ color: '#c9c6be', maxWidth: '60ch' }}>
              A CRCHI Brasil é recém-estabelecida, mas nasce apoiada na trajetória do grupo
              controlador. Os marcos abaixo contam essa história.
            </p>
          </Reveal>
          <div className="timeline">
            {TIMELINE.map(([year, title, desc], i) => (
              <Reveal className="tl-item" key={i}>
                <div className="tl-year">{year}</div>
                <div className="tl-body">
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="concrete">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Tecnologia e inovação</span>
            <h2 className="h2">P&amp;D que empurra os limites do possível.</h2>
          </Reveal>
          <Reveal className="grid-1px cols-4" style={{ marginTop: '2.5rem' }}>
            {TECH_STATS.map(([big, lbl]) => (
              <div className="stat" key={lbl}>
                <div className="big">{big}</div>
                <span className="lbl">{lbl}</span>
              </div>
            ))}
          </Reveal>
          <Reveal>
            <p style={{ maxWidth: '70ch', marginTop: '2.5rem', color: '#4a4c50' }}>
              A CRCHI mantém centros de pesquisa dedicados e um amplo portfólio de patentes em
              tunelamento, sistemas ferroviários e equipamentos de construção. O investimento em
              P&amp;D sustenta avanços contínuos em projeto de cabeça de corte, sensoriamento
              geológico em tempo real, sistemas de guiagem automatizada e inteligência de máquina —
              entregando equipamentos mais inteligentes, eficientes e confiáveis a cada geração.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="dark2">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Certificações e normas</span>
            <h2 className="h2" style={{ color: '#fff' }}>Qualidade, meio ambiente e segurança.</h2>
            <p style={{ color: '#c9c6be', maxWidth: '62ch' }}>
              Modelo de seção para as certificações da CRCHI Brasil. Confirme quais normas a entidade
              brasileira efetivamente detém e preencha os números antes de publicar.
            </p>
          </Reveal>
          <Reveal className="grid-1px cols-3" style={{ marginTop: '2.5rem' }}>
            {CERTS.map(([badge, title, desc, num]) => (
              <div className="cert" key={title}>
                <span className="badge">{badge}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
                <span className="cnum">Certificado {num}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <Marquee text="VAMOS CONSTRUIR JUNTOS" />

      {/* CTA */}
      <section className="cta">
        <div className="wrap">
          <span className="eyebrow center">Vamos conversar</span>
          <h2 style={{ marginTop: '1.2rem' }}>Traga seu projeto<br />para a nossa mesa.</h2>
          <p>Conte o desafio geológico e o prazo. Nossa equipe ajuda a especificar a máquina certa.</p>
          <Link href="/contato" className="btn">Fale conosco <span className="arw">→</span></Link>
        </div>
      </section>
    </>
  );
}
