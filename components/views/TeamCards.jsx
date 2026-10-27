'use client';

import { useRef, useState } from 'react';
import Img from '../Img';
import styles from './TeamCards.module.css';

export default function TeamCards({ title, members }) {
  const ref = useRef(null);
  const [current, setCurrent] = useState(members[0]);

  const open = (m) => {
    setCurrent(m);
    ref.current?.showModal();
  };

  return (
    <div className={styles.team}>
      <h3 className={styles.heading}>{title}</h3>
      <ul className={styles.list}>
        {members.map((m) => (
          <li key={m.name}>
            <button type="button" className={styles.card} onClick={() => open(m)} aria-haspopup="dialog">
              <Img name={m.image} alt="" className={styles.avatar} />
              <span>
                <span className={styles.name}>{m.name}</span>
                <span className={styles.role}>{m.role}</span>
              </span>
              <span className={styles.plus} aria-hidden="true" />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={ref}
        className={styles.dialog}
        aria-labelledby="member-name"
        onClick={(e) => e.target === ref.current && ref.current.close()}
      >
        <div className={`frame ${styles.photo}`}>
          <Img name={current.image} alt={current.name} />
        </div>
        <div className={styles.bio}>
          <h3 id="member-name" className={styles.bioName}>
            {current.name}
          </h3>
          <p className={styles.role}>{current.role}</p>
          {current.bio.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <button type="button" className="btn" onClick={() => ref.current?.close()}>
            Close
          </button>
        </div>
      </dialog>
    </div>
  );
}
