'use client';
import { useState } from 'react';
import Link from 'next/link';
import { TBM_MODELS, TBM_FAMILIES } from '@/lib/tbm';

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function TbmFilter() {
  const [fam, setFam] = useState('all');
  const filtered = fam === 'all' ? TBM_MODELS : TBM_MODELS.filter((m) => m.family === fam);

  return (
    <>
      <div className="filters">
        <div className="filter-row">
          <span className="filter-label">Linha</span>
          <div className="chips">
            <button className={`chip${fam === 'all' ? ' on' : ''}`} onClick={() => setFam('all')}>
              Todas
            </button>
            {TBM_FAMILIES.map((f) => (
              <button
                key={f.key}
                className={`chip${fam === f.key ? ' on' : ''}`}
                onClick={() => setFam(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className="filter-count mono">{filtered.length} equipamento(s)</p>

      <div className="case-grid">
        {filtered.map((m) => {
          const famLabel = TBM_FAMILIES.find((x) => x.key === m.family)?.label || m.family;
          return (
            <Link href={`/produtos/tuneladoras/${m.slug}/`} className="case" key={m.slug}>
              <div className="ph">
                <img src={`${BASE}${m.image}`} alt={m.title} loading="lazy" />
              </div>
              <div className="body">
                <span className="k">{famLabel}</span>
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
