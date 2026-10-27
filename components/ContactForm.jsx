'use client';

import { contact } from '@/content/site';
import styles from './Views.module.css';

// The original Contact Form 7 endpoint is not connected to this demo, so the form
// composes the message in the visitor's own email app instead of faking a send.
export default function ContactForm() {
  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = `${data.get('first')} ${data.get('last')}`.trim();
    const body = [data.get('message'), '', name, data.get('email')].filter((v) => v !== null).join('\n');
    const subject = `Enquiry from ${name}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.field}>
        <label htmlFor="cf-first">First name</label>
        <input id="cf-first" name="first" autoComplete="given-name" required />
      </div>
      <div className={styles.field}>
        <label htmlFor="cf-last">Last name</label>
        <input id="cf-last" name="last" autoComplete="family-name" required />
      </div>
      <div className={`${styles.field} ${styles.fieldFull}`}>
        <label htmlFor="cf-email">Email*</label>
        <input id="cf-email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className={`${styles.field} ${styles.fieldFull}`}>
        <label htmlFor="cf-message">Your message (optional)</label>
        <textarea id="cf-message" name="message" rows={5} />
      </div>
      <div className={`${styles.fieldFull} ${styles.formFoot}`}>
        <button type="submit" className="btn btn-solid">
          Submit
        </button>
        <p>Opens your email app with this message addressed to {contact.email}.</p>
      </div>
    </form>
  );
}
