'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { CASES, CASE_CATEGORIES, CASE_REGIONS } from '@/lib/cases';

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function CaseFilter() {
  const [cat, setCat] = useState('all');
  const [reg, setReg] = useState('all');

  const filtered = useMemo(
    () =>
      CASES.filter(
        (c) => (cat === 'all' || c.category === cat) && (reg === 'all' || c.region === reg)
      ),
    [cat, reg]
  );

  return (
    <>
      <div className="filters">
        <div className="filter-row">
          <span className="filter-label">Categoria</span>
          <div className="chips">
            <button className={`chip${cat === 'all' ? ' on' : ''}`} onClick={() => setCat('all')}>
              Todas
            </button>
            {CASE_CATEGORIES.map((c) => (
              <button
                key={c.key}
                className={`chip${cat === c.key ? ' on' : ''}`}
                onClick={() => setCat(c.key)}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
        <div className="filter-row">
          <span className="filter-label">Região</span>
          <div className="chips">
            <button className={`chip${reg === 'all' ? ' on' : ''}`} onClick={() => setReg('all')}>
              Todas
            </button>
            {CASE_REGIONS.map((r) => (
              <button
                key={r.key}
                className={`chip${reg === r.key ? ' on' : ''}`}
                onClick={() => setReg(r.key)}
              >
                {r.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className="filter-count mono">{filtered.length} projeto(s)</p>

      {filtered.length === 0 ? (
        <p className="empty">Nenhum projeto para esse filtro.</p>
      ) : (
        <div className="case-grid">
          {filtered.map((c) => {
            const catLabel = CASE_CATEGORIES.find((x) => x.key === c.category)?.label || c.category;
            return (
              <Link href={`/projetos/${c.slug}`} className="case" key={c.slug}>
                <div className="ph">
                  <img src={`${BASE}${c.image}`} alt={c.title} loading="lazy" />
                </div>
                <div className="body">
                  <span className="k">{catLabel}</span>
                  <h3>{c.title}</h3>
                  <p className="loc">{c.location}</p>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}
