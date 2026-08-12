'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FER_MODELS, FER_GROUPS } from '@/lib/ferrovias';

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function FerroviasFilter() {
  const [group, setGroup] = useState('all');
  const filtered = group === 'all' ? FER_MODELS : FER_MODELS.filter((m) => m.group === group);

  return (
    <>
      <div className="filters">
        <div className="filter-row">
          <span className="filter-label">Linha</span>
          <div className="chips">
            <button className={`chip${group === 'all' ? ' on' : ''}`} onClick={() => setGroup('all')}>
              Todas
            </button>
            {FER_GROUPS.map((g) => (
              <button
                key={g.key}
                className={`chip${group === g.key ? ' on' : ''}`}
                onClick={() => setGroup(g.key)}
              >
                {g.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className="filter-count mono">{filtered.length} produto(s)</p>

      <div className="case-grid">
        {filtered.map((m) => {
          const groupLabel = FER_GROUPS.find((x) => x.key === m.group)?.label || m.group;
          return (
            <Link href={`/produtos/ferrovias/${m.slug}/`} className="case" key={m.slug}>
              <div className="ph">
                <img src={`${BASE}${m.image}`} alt={m.title} loading="lazy" />
              </div>
              <div className="body">
                <span className="k">{groupLabel}</span>
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
