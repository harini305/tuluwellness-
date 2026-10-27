'use client';

import { useState } from 'react';
import Img from '../Img';
import { BOOKING_URL } from '@/content/site';
import styles from './ProgramPanels.module.css';

// Horizontal photo panels; the chosen programme widens to show its summary.
export default function ProgramPanels({ programs }) {
  const [active, setActive] = useState(0);

  return (
    <ul className={styles.panels} data-anim="">
      {programs.map((p, i) => {
        const on = i === active;
        return (
          <li
            key={p.id}
            className={styles.panel}
            data-on={on ? '' : undefined}
            onMouseEnter={() => window.matchMedia('(hover: hover) and (min-width: 900px)').matches && setActive(i)}
          >
            <Img name={p.image} alt="" sizes="(min-width: 900px) 50vw, 100vw" className={styles.bg} />
            <button
              type="button"
              className={styles.toggle}
              aria-expanded={on}
              aria-controls={`program-${p.id}`}
              onClick={() => setActive(i)}
            >
              <span className={styles.name}>{p.tab}</span>
            </button>
            <div id={`program-${p.id}`} className={styles.content} hidden={!on}>
              <p className={styles.summary}>{p.summary}</p>
              <ul className={styles.includes} aria-label={p.listTitle}>
                {p.includes.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              <div className="actions">
                <a className="btn btn-light btn-solid" href={BOOKING_URL} target="_blank" rel="noopener">
                  Reserve Your Experience
                </a>
                <a
                  className="btn btn-light"
                  href={p.brochure.url}
                  target="_blank"
                  rel="noopener"
                  aria-label={`Discover More: ${p.brochure.title} brochure (PDF on Google Drive, opens in a new tab)`}
                >
                  Discover More
                </a>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
