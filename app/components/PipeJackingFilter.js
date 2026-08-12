'use client';
import { useState } from 'react';
import Link from 'next/link';
import { PJ_MODELS, PJ_TYPES } from '@/lib/pipejacking';

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function PipeJackingFilter() {
  const [type, setType] = useState('all');
  const filtered = type === 'all' ? PJ_MODELS : PJ_MODELS.filter((m) => m.type === type);

  return (
    <>
      <div className="filters">
        <div className="filter-row">
          <span className="filter-label">Tipo</span>
          <div className="chips">
            <button className={`chip${type === 'all' ? ' on' : ''}`} onClick={() => setType('all')}>
              Todos
            </button>
            {PJ_TYPES.map((t) => (
              <button
                key={t.key}
                className={`chip${type === t.key ? ' on' : ''}`}
                onClick={() => setType(t.key)}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className="filter-count mono">{filtered.length} equipamento(s)</p>

      <div className="case-grid">
        {filtered.map((m) => {
          const typeLabel = PJ_TYPES.find((x) => x.key === m.type)?.label || m.type;
          return (
            <Link href={`/produtos/pipe-jacking/${m.slug}/`} className="case" key={m.slug}>
              <div className="ph">
                <img src={`${BASE}${m.image}`} alt={m.title} loading="lazy" />
              </div>
              <div className="body">
                <span className="k">{typeLabel}</span>
                <h3>{m.title}</h3>
                <p className="loc">{m.summary}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
