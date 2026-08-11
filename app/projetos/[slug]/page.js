import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CASES, CASE_CATEGORIES, CASE_REGIONS } from '@/lib/cases';

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';

// Gera uma página estática para cada projeto (necessário para output: 'export')
export function generateStaticParams() {
  return CASES.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }) {
  const c = CASES.find((x) => x.slug === params.slug);
  if (!c) return { title: 'Projeto' };
  return { title: c.title, description: c.summary };
}

export default function CaseDetail({ params }) {
  const c = CASES.find((x) => x.slug === params.slug);
  if (!c) notFound();

  const catLabel = CASE_CATEGORIES.find((x) => x.key === c.category)?.label || c.category;
  const regLabel = CASE_REGIONS.find((x) => x.key === c.region)?.label || c.region;
  const others = CASES.filter((x) => x.slug !== c.slug).slice(0, 3);

  return (
    <>
      <section className="phero">
        <div className="wrap">
          <div className="crumb">
            <Link href="/">Início</Link> / <Link href="/projetos">Projetos</Link> / {c.title}
          </div>
          <h1>{c.title}</h1>
          <p>{c.summary}</p>
        </div>
      </section>

      <section className="dark2 section-tight">
        <div className="wrap">
          <div className="media" style={{ aspectRatio: '21/9' }}>
            <img src={`${BASE}${c.image}`} alt={c.title} />
            <span className="tag">SUBSTITUIR · FOTO ORIGINAL</span>
          </div>
        </div>
      </section>

      <section className="dark2" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="split top">
            <div>
              <span className="eyebrow">Sobre o projeto</span>
              <h2 className="h2" style={{ color: '#fff' }}>Detalhes do projeto.</h2>
              <p style={{ color: '#c9c6be' }}>
                Espaço reservado para a descrição completa do projeto: escopo, desafio geológico,
                equipamento empregado, resultados e prazos. Preencha com as informações oficiais
                quando disponíveis.
              </p>
            </div>
            <dl className="specs">
              <div className="spec"><dt>Categoria</dt><dd>{catLabel}</dd></div>
              <div className="spec"><dt>Região</dt><dd>{regLabel}</dd></div>
              <div className="spec"><dt>Local</dt><dd>{c.location}</dd></div>
              <div className="spec"><dt>Situação</dt><dd>[a confirmar]</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="dark2">
        <div className="wrap">
          <span className="eyebrow">Outros projetos</span>
          <div className="case-grid" style={{ marginTop: '2rem' }}>
            {others.map((o) => {
              const oCat = CASE_CATEGORIES.find((x) => x.key === o.category)?.label || o.category;
              return (
                <Link href={`/projetos/${o.slug}`} className="case" key={o.slug}>
                  <div className="ph"><img src={`${BASE}${o.image}`} alt={o.title} loading="lazy" /></div>
                  <div className="body">
                    <span className="k">{oCat}</span>
                    <h3>{o.title}</h3>
                    <p className="loc">{o.location}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="wrap">
          <span className="eyebrow center">Tem um projeto parecido?</span>
          <h2 style={{ marginTop: '1.2rem' }}>Fale com a<br />nossa equipe.</h2>
          <p>Ajudamos a especificar a máquina certa para o seu desafio.</p>
          <Link href="/contato" className="btn">Fale conosco <span className="arw">→</span></Link>
        </div>
      </section>
    </>
  );
}
