import Image from 'next/image';
import Link from 'next/link';
import Reveal from '../components/Reveal';
import { STATS } from '@/lib/content';

export const metadata = {
  title: 'Empresa',
  description:
    'A CRCHI Brasil é a filial brasileira de um dos maiores fabricantes de tuneladoras do mundo, com engenharia global e suporte local.',
};

const VALUES = [
  ['Segurança primeiro', 'Cada máquina é projetada para reduzir risco em frente de obra e em operação subterrânea.'],
  ['Engenharia própria', 'P&D contínuo em cabeças de corte, controle de TBM e monitoramento geológico.'],
  ['Suporte local', 'Peças, assistência técnica e equipe de campo baseadas no Brasil.'],
  ['Escala comprovada', 'Mais de 1.500 máquinas entregues em mais de 30 países.'],
];

export default function Sobre() {
  return (
    <>
      <section className="phero">
        <div className="wrap">
          <div className="crumb"><Link href="/">Início</Link> / Empresa</div>
          <h1>Fabricante global.<br />Equipe brasileira.</h1>
          <p>
            A CRCHI é uma fabricante global de máquinas pesadas para tunelamento, mineração e
            ferrovias. A CRCHI Brasil traz esse portfólio, com engenharia e suporte, para
            construtoras e donos de projeto em todo o país.
          </p>
        </div>
      </section>

      <section className="light">
        <div className="wrap">
          <div className="split">
            <Reveal className="media">
              <Image src="/images/home/about.jpg" alt="Fábrica e tuneladora CRCHI" width={1400} height={1000} />
              <span className="tag">SUBSTITUIR · FOTO ORIGINAL</span>
            </Reveal>
            <Reveal>
              <span className="eyebrow">Nossa missão</span>
              <h2 className="h2">Desbloquear o potencial da construção subterrânea.</h2>
              <p>
                Entregamos equipamentos mais seguros, mais escaláveis e mais eficientes para que
                obras de metrô, ferrovia, água, energia e mineração avancem com previsibilidade. Da
                especificação à operação, a mesma equipe acompanha o projeto — e continua ao lado
                depois que a máquina entra em produção.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="concrete">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">O que nos guia</span>
            <h2 className="h2">Valores em cada máquina.</h2>
          </Reveal>
          <Reveal className="grid-1px cols-4" style={{ marginTop: '2.5rem' }}>
            {VALUES.map(([t, d]) => (
              <div className="pill" key={t}>
                <h3 style={{ fontSize: '1.25rem' }}>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="stats">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Histórico comprovado</span>
            <h2 className="h2">Números que sustentam a operação.</h2>
          </Reveal>
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
          <span className="eyebrow center">Vamos conversar</span>
          <h2 style={{ marginTop: '1.2rem' }}>Traga seu projeto<br />para a nossa mesa.</h2>
          <p>Conte o desafio geológico e o prazo. Nossa equipe ajuda a especificar a máquina certa.</p>
          <Link href="/contato" className="btn">Fale conosco <span className="arw">→</span></Link>
        </div>
      </section>
    </>
  );
}
