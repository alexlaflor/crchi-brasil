'use client';
import { useState } from 'react';
import { PRODUCTS } from '@/lib/content';

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [data, setData] = useState({ nome: '', empresa: '', email: '', telefone: '', interesse: '', mensagem: '' });

  const update = (k) => (e) => setData((d) => ({ ...d, [k]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: integrar com backend/serviço de e-mail (ex.: rota /api/contato, Resend, Formspree).
    // Por enquanto, apenas simula o envio no cliente.
    console.log('Formulário de contato:', data);
    setSent(true);
  };

  if (sent) {
    return (
      <div className="pill" style={{ background: 'var(--steel-900)', border: '1px solid var(--line-d)' }}>
        <span className="num" style={{ color: 'var(--red)' }}>MENSAGEM RECEBIDA</span>
        <h3 style={{ color: '#fff', marginTop: '.8rem' }}>Obrigado pelo contato.</h3>
        <p style={{ color: '#b3b0a8' }}>
          Recebemos os dados e retornaremos em breve. (Este é um envio de demonstração — conecte um
          backend para receber as mensagens de verdade.)
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="nome">Nome *</label>
        <input id="nome" required value={data.nome} onChange={update('nome')} autoComplete="name" />
      </div>
      <div className="field">
        <label htmlFor="empresa">Empresa</label>
        <input id="empresa" value={data.empresa} onChange={update('empresa')} autoComplete="organization" />
      </div>
      <div className="field">
        <label htmlFor="email">E-mail *</label>
        <input id="email" type="email" required value={data.email} onChange={update('email')} autoComplete="email" />
      </div>
      <div className="field">
        <label htmlFor="telefone">Telefone</label>
        <input id="telefone" value={data.telefone} onChange={update('telefone')} autoComplete="tel" />
      </div>
      <div className="field">
        <label htmlFor="interesse">Interesse</label>
        <select id="interesse" value={data.interesse} onChange={update('interesse')}>
          <option value="">Selecione…</option>
          {PRODUCTS.map((p) => (
            <option key={p.slug} value={p.title}>{p.title}</option>
          ))}
          <option value="Outro">Outro</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="mensagem">Mensagem *</label>
        <textarea id="mensagem" rows={5} required value={data.mensagem} onChange={update('mensagem')} />
      </div>
      <button type="submit" className="btn">Enviar mensagem <span className="arw">→</span></button>
    </form>
  );
}
