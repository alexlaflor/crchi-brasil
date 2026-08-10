import Link from 'next/link';
import Image from 'next/image';
import Cutterhead from './components/Cutterhead';
import Marquee from './components/Marquee';
import Reveal from './components/Reveal';
import Glyph from './components/Glyph';
import { PRODUCTS, PILLARS, STATS } from '@/lib/content';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        {/* Substitua por /videos/hero.mp4 quando tiver o vídeo original */}
        <video autoPlay muted loop playsInline poster="/images/home/hero-poster.jpg">
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-grid" />
        <Cutterhead />
        <div className="wrap hero-inner">
          <span className="eyebrow">Confiança global · Entrega local</span>
          <h1 className="head">
            Feito para construir.<br />Feito para <span className="r">perfurar</span>.
          </h1>
          <p className="lede">
            Tuneladoras, equipamentos de escavação e máquinas de mineração da CRCHI, entregues a
            construtoras e concessionárias brasileiras por uma equipe local, com engenharia em cada
            máquina.
          </p>
          <div className="hero-cta">
            <Link href="/produtos" className="btn">Ver equipamentos <span className="arw">→</span></Link>
            <Link href="/contato" className="btn ghost">Falar com um engenheiro</Link>
          </div>
        </div>
        <div className="hero-foot">
          <div className="wrap">
            <div><b>1.500+</b>máquinas entregues no mundo</div>
            <div><b>Ø 0,5–15 m</b>faixa de diâmetro de escavação</div>
            <div><b>24/7</b>suporte técnico e peças no Brasil</div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="light">
        <div className="wrap">
          <div className="split top">
            <Reveal>
              <span className="eyebrow">Quem somos</span>
              <h2 className="h2">Construído para o subsolo brasileiro.</h2>
            </>
            <>
              <p>
                A CRCHI Brasil fornece máquinas pesadas para o trabalho que não pode parar: escavação
                de túneis, mineração, ferrovias e grandes obras de infraestrutura. Cada equipamento
                chega com profundidade de engenharia, operação apoiada localmente e uma equipe
                disponível quando você precisa. Somos a filial brasileira de um dos maiores
                fabricantes de tuneladoras do mundo.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="concrete">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Por que a CRCHI</span>
            <h2 className="h2" style={{ maxWidth: '20ch' }}>Desbloqueando escala no subsolo.</h2>
          </Reveal>
          <Reveal className="grid-1px cols-3" style={{ marginTop: '2.5rem' }}>
            {PILLARS.map((p) => (
              <div className="pill" key={p.num}>
                <span className="num">{p.num}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="dark2">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">A tecnologia por trás da CRCHI</span>
            <h2 className="h2">Equipamentos para cada frente de obra.</h2>
          </Reveal>
          <div className="prod-grid">
            {PRODUCTS.map((p) => (
              <Reveal as="a" href={`/produtos/${p.slug}`} className="card" key={p.slug}>
                <span className="idx">{p.idx}</span>
                <Glyph name={p.glyph} />
                <h3>{p.title}</h3>
                <p>{p.short}</p>
                <span className="go">Saiba mais <span className="arw">→</span></span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Histórico comprovado</span>
            <h2 className="h2">Engenharia CRCHI em escala global.</h2>
          </Reveal>
          <Reveal className="grid-1px cols-4">
            {STATS.map((s) => (
              <div className="stat" key={s.lbl}>
                <div className="big">
                  {s.big.split(s.accent).map((part, i, arr) => (
                    <span key={i}>{part}{i < arr.length - 1 && <i>{s.accent}</i>}</span>
                  ))}
                </div>
                <span className="lbl">{s.lbl}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <Marquee />

      {/* CTA */}
      <section className="cta">
        <div className="wrap">
          <span className="eyebrow center">Pronto para começar?</span>
          <h2 style={{ marginTop: '1.2rem' }}>Construa o futuro<br />com a gente.</h2>
          <p>
            Tuneladoras, máquinas de pipe-jacking e equipamentos de construção subterrânea da CRCHI,
            levados a construtoras e donos de projeto no Brasil pela equipe local.
          </p>
          <Link href="/contato" className="btn">Fale conosco <span className="arw">→</span></Link>
        </div>
      </section>
    </>
  );
}
