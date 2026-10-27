'use client';

import { useRef } from 'react';
import { terms } from '@/content/site';
import styles from './TermsDialog.module.css';

export default function TermsDialog({ className, children = 'Terms & Conditions' }) {
  const ref = useRef(null);

  return (
    <>
      <button type="button" className={className} onClick={() => ref.current?.showModal()}>
        {children}
      </button>
      <dialog
        ref={ref}
        className={styles.dialog}
        aria-labelledby="terms-title"
        onClick={(e) => e.target === ref.current && ref.current.close()}
      >
        <div className={styles.inner}>
          <div className={styles.head}>
            <h2 id="terms-title" className={styles.title}>
              {terms.title}
            </h2>
            <button type="button" className={styles.close} onClick={() => ref.current?.close()} aria-label="Close">
              <span />
              <span />
            </button>
          </div>
          {terms.sections.map((s) => (
            <section key={s.h} className={styles.block}>
              <h3>{s.h}</h3>
              {s.p.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </section>
          ))}
          <div className={styles.block}>
            {terms.closing.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </dialog>
    </>
  );
}
