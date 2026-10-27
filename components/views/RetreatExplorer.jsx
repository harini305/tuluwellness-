'use client';

import { useRef, useState } from 'react';
import { firstSentence } from '@/content/excerpt';
import styles from './RetreatExplorer.module.css';

export default function RetreatExplorer({ retreats, faq, children }) {
  const [active, setActive] = useState(0);
  const [day, setDay] = useState(0);
  const faqRef = useRef(null);
  const r = retreats[active];
  const d = r.days[day];

  const pick = (i) => {
    setActive(i);
    setDay(0);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.side}>
        {children}
        <ul className={styles.list} data-anim="">
        {retreats.map((item, i) => (
          <li key={item.id}>
            <button type="button" className={styles.option} aria-pressed={i === active} onClick={() => pick(i)}>
              <span className={styles.optionName}>{item.title}</span>
              <span className={styles.optionMeta}>{item.length}</span>
            </button>
          </li>
        ))}
        </ul>
      </div>

      <div className={styles.card} data-anim="" key={r.id}>
        <p className={styles.intro}>{firstSentence(r.intro[0])}</p>

        <ol className={styles.steps} aria-label="Itinerary days">
          {r.days.map(([label], i) => (
            <li key={label}>
              <button
                type="button"
                className={styles.step}
                aria-current={i === day ? 'step' : undefined}
                aria-label={label}
                onClick={() => setDay(i)}
              >
                {i + 1}
              </button>
            </li>
          ))}
        </ol>

        <div className={styles.day} aria-live="polite" key={day}>
          <p className={styles.dayLabel}>{d[0]}</p>
          <h3 className={styles.dayTitle}>{d[1]}</h3>
          <p className={styles.dayText}>{d[2]}</p>
        </div>

        <div className={styles.foot}>
          <a className="btn btn-solid" href={r.bookUrl} target="_blank" rel="noopener">
            Reserve Your Experience
          </a>
          {r.hasFaq && (
            <button type="button" className={styles.faqBtn} onClick={() => faqRef.current?.showModal()}>
              Frequently Asked Questions
            </button>
          )}
        </div>
      </div>

      <dialog
        ref={faqRef}
        className={styles.dialog}
        aria-labelledby="faq-title"
        onClick={(e) => e.target === faqRef.current && faqRef.current.close()}
      >
        <div className={styles.dialogHead}>
          <h3 id="faq-title">Frequently Asked Questions</h3>
          <button type="button" className={styles.close} onClick={() => faqRef.current?.close()} aria-label="Close">
            <span />
            <span />
          </button>
        </div>
        <div className={styles.dialogBody}>
          {faq.map((item) => (
            <details key={item.q} className="acc">
              <summary>{item.q}</summary>
              <div className="acc-body">
                {item.blocks.map((b, i) =>
                  b.t === 'h' ? (
                    <h4 key={i} className={styles.faqSub}>
                      {b.text}
                    </h4>
                  ) : (
                    <p key={i} className={b.t === 'li' ? styles.faqLi : undefined}>
                      {b.text}
                    </p>
                  )
                )}
              </div>
            </details>
          ))}
        </div>
      </dialog>
    </div>
  );
}
