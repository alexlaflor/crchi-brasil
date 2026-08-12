import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MIN_MODELS, MIN_GROUPS } from '@/lib/mineracao';

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';

// Gera uma página estática para cada equipamento (necessário para output: 'export')
export function generateStaticParams() {
  return MIN_MODELS.map((m) => ({ modelo: m.slug }));
}

export function generateMetadata({ params }) {
  const m = MIN_MODELS.find((x) => x.slug === params.modelo);
  if (!m) return { title: 'Equipamento' };
  return { title: m.title, description: m.summary };
}

export default function MinModel({ params }) {
  const m = MIN_MODELS.find((x) => x.slug === params.modelo);
  if (!m) notFound();

  const groupLabel = MIN_GROUPS.find((x) => x.key === m.group)?.label || m.group;
  const others = MIN_MODELS.filter((x) => x.slug !== m.slug && x.group === m.group).slice(0, 3);

  const specs =
    m.specs && m.specs.length
      ? m.specs
      : [
          ['Grupo', groupLabel],
          ['Categoria', 'Mineração'],
          ['Situação', '[a confirmar]'],
        ];

  return (
    <>
      <section className="phero">
        <div className="wrap">
          <div className="crumb">
            <Link href="/">Início</Link> / <Link href="/produtos">Produtos</Link> /{' '}
            <Link href="/produtos/mineracao">Mineração</Link> / {m.title}
          </div>
          <h1>{m.title}</h1>
          <p>{m.summary}</p>
        </div>
      </section>

      <section className="dark2 section-tight">
        <div className="wrap">
          <div className="media" style={{ aspectRatio: '21/9' }}>
            <img src={`${BASE}${m.image}`} alt={m.title} />
            <span className="tag">SUBSTITUIR · FOTO ORIGINAL</span>
          </div>
        </div>
      </section>

      <section className="dark2" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="split top">
            <div>
              <span className="eyebrow">Sobre o equipamento</span>
              <h2 className="h2" style={{ color: '#fff' }}>Detalhes.</h2>
              {m.description && m.description.length ? (
                m.description.map((par, i) => (
                  <p key={i} style={{ color: '#c9c6be', marginBottom: '1rem' }}>{par}</p>
                ))
              ) : (
                <p style={{ color: '#c9c6be' }}>
                  Espaço reservado para a descrição completa do equipamento: aplicação, capacidade,
                  diferenciais técnicos e projetos de referência. Preencha com as informações
                  oficiais quando disponíveis.
                </p>
              )}
            </div>
            <dl className="specs">
              {specs.map(([k, v], i) => (
                <div className="spec" key={i}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {others.length ? (
        <section className="dark2">
          <div className="wrap">
            <span className="eyebrow">Mais em {groupLabel}</span>
            <div className="case-grid" style={{ marginTop: '2rem' }}>
              {others.map((o) => (
                <Link href={`/produtos/mineracao/${o.slug}/`} className="case" key={o.slug}>
                  <div className="ph"><img src={`${BASE}${o.image}`} alt={o.title} loading="lazy" /></div>
                  <div className="body">
                    <span className="k">{groupLabel}</span>
                    <h3>{o.title}</h3>
                    <p className="loc">{o.summary}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="dark2" style={{ paddingTop: others.length ? 0 : undefined }}>
        <div className="wrap">
          <Link href="/produtos/mineracao" className="btn ghost">← Voltar para Mineração</Link>
        </div>
      </section>

      <section className="cta">
        <div className="wrap">
          <span className="eyebrow center">{m.title}</span>
          <h2 style={{ marginTop: '1.2rem' }}>Peça uma<br />especificação.</h2>
          <p>Envie os dados do projeto e retornamos com a configuração recomendada.</p>
          <Link href="/contato" className="btn">Fale com um engenheiro <span className="arw">→</span></Link>
        </div>
      </section>
    </>
  );
}
