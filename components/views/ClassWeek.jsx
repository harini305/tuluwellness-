'use client';

import { useRef, useState } from 'react';
import styles from './ClassWeek.module.css';

// Week strip for the published group class schedule.
export default function ClassWeek({ schedule }) {
  const [active, setActive] = useState(0);
  const tabs = useRef([]);
  const c = schedule[active];

  const onKeyDown = (e) => {
    const step = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
    if (!step) return;
    e.preventDefault();
    const n = (active + step + schedule.length) % schedule.length;
    setActive(n);
    tabs.current[n]?.focus();
  };

  return (
    <div className={styles.week}>
      <div role="tablist" aria-label="Group class schedule" className={styles.strip} onKeyDown={onKeyDown}>
        {schedule.map((d, i) => (
          <button
            key={d.day}
            ref={(el) => (tabs.current[i] = el)}
            role="tab"
            type="button"
            id={`class-tab-${i}`}
            aria-selected={i === active}
            aria-controls="class-panel"
            tabIndex={i === active ? 0 : -1}
            className={styles.day}
            onClick={() => setActive(i)}
          >
            <span className={styles.dayShort}>{d.day.slice(0, 3)}</span>
            <span className={styles.dayClass}>{d.name}</span>
          </button>
        ))}
      </div>
      <div id="class-panel" role="tabpanel" aria-labelledby={`class-tab-${active}`} className={styles.panel} key={c.day}>
        <p className={styles.when}>{c.day} · 9 to 10 AM</p>
        <h3 className={styles.name}>{c.name}</h3>
        <p>{c.text}</p>
      </div>
    </div>
  );
}
