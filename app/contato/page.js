import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { CONTACT, OFFICES } from '@/lib/content';

export const metadata = {
  title: 'Contato',
  description: 'Fale com a equipe da CRCHI Brasil sobre tuneladoras, escavação e mineração.',
};

export default function Contato() {
  return (
    <>
      <section className="phero">
        <div className="wrap">
          <div className="crumb"><Link href="/">Início</Link> / Contato</div>
          <h1>Vamos construir<br />juntos.</h1>
          <p>
            Conte sobre o seu projeto — geologia, traçado e prazo. Nossa equipe ajuda a especificar a
            máquina certa e acompanha da entrega à operação.
          </p>
        </div>
      </section>

      <section className="dark2">
        <div className="wrap">
          <div className="form-grid">
            <div>
              <span className="eyebrow">Formulário</span>
              <h2 className="h2" style={{ color: '#fff', marginBottom: '2rem' }}>Envie uma mensagem.</h2>
              <ContactForm />
            </div>
            <div className="contact-info">
              <span className="eyebrow">Contato direto</span>
              <h4>E-mail</h4>
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              <h4>Telefone</h4>
              <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
              {OFFICES.map((o) => (
                <div key={o.city}>
                  <h4>{o.note}</h4>
                  <p>{o.city}<br />{o.address}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
