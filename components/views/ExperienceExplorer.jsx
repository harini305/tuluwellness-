'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Img from '../Img';
import { BOOKING_URL } from '@/content/site';
import styles from './ExperienceExplorer.module.css';

const STEP = 220; // scroll distance (px) per treatment while the section is pinned

// Category switch → item list → photo → description.
// On desktop the section pins and scrolling steps through every treatment.
export default function ExperienceExplorer({ categories }) {
  const [cat, setCat] = useState(0);
  const [active, setActive] = useState(0);
  const rootRef = useRef(null);
  const stRef = useRef(null);

  // Flat list of [category, item] so scroll progress maps to one treatment.
  const flat = categories.flatMap((c, ci) => c.items.map((_, i) => [ci, i]));
  const items = categories[cat].items;
  const current = flat.findIndex(([c, x]) => c === cat && x === active);

  useEffect(() => {
    const section = rootRef.current?.closest('[data-view]');
    if (!section) return;
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add('(min-width: 900px) and (prefers-reduced-motion: no-preference)', () => {
      const header = document.querySelector('header');
      const st = ScrollTrigger.create({
        trigger: section,
        start: () => `top top+=${header?.offsetHeight ?? 0}`,
        end: () => `+=${flat.length * STEP}`,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const g = Math.min(flat.length - 1, Math.floor(self.progress * flat.length));
          const [ci, i] = flat[g];
          setCat(ci);
          setActive(i);
        },
      });
      stRef.current = st;
      return () => {
        stRef.current = null;
      };
    });
    return () => mm.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- categories are static
  }, []);

  // When pinned, a click scrolls to that treatment's point so scroll and selection stay in sync.
  const go = (ci, i) => {
    const st = stRef.current;
    if (!st) {
      setCat(ci);
      setActive(i);
      return;
    }
    const g = flat.findIndex(([c, x]) => c === ci && x === i);
    const y = st.start + ((g + 0.5) / flat.length) * (st.end - st.start);
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <div className={styles.explorer} ref={rootRef}>
      <div className={styles.bar}>
        <div className={styles.cats} role="group" aria-label="Categories" data-anim="">
          {categories.map((c, i) => (
            <button key={c.id} type="button" aria-pressed={i === cat} className={styles.cat} onClick={() => go(i, 0)}>
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.body}>
        <ul className={styles.list} data-anim="">
          {items.map((it, i) => (
            <li key={`${cat}-${it.title}`}>
              <button
                type="button"
                className={styles.item}
                aria-pressed={i === active}
                aria-controls="experience-detail"
                onClick={() => go(cat, i)}
              >
                {it.title}
              </button>
            </li>
          ))}
        </ul>

        <div className={`frame ${styles.stage}`} data-anim="">
          {/* Only the current photo and its neighbours are mounted, so photos load as they are reached. */}
          {flat.map(([ci, i], g) => {
            if (Math.abs(g - current) > 1) return null;
            const it = categories[ci].items[i];
            return (
              <Img
                key={`${categories[ci].id}-${it.title}`}
                name={it.image}
                alt={g === current ? it.alt : ''}
                sizes="(min-width: 900px) 32vw, 100vw"
                className={styles.photo}
                data-on={g === current ? '' : undefined}
              />
            );
          })}
        </div>

        {/* Every description sits in the same cell so the panel keeps the height of the longest
            one and the layout never shifts while scrolling through treatments. */}
        <div id="experience-detail" className={styles.copy} aria-live="polite">
          {categories.flatMap((c, ci) =>
            c.items.map((it, i) => {
              const on = ci === cat && i === active;
              return (
                <div key={`${c.id}-${it.title}`} className={styles.entry} data-on={on ? '' : undefined} aria-hidden={!on}>
                  <h3 className={styles.title}>{it.title}</h3>
                  <p>{it.text}</p>
                  <a className="btn btn-solid" href={BOOKING_URL} target="_blank" rel="noopener" tabIndex={on ? undefined : -1}>
                    Reserve Your Experience
                  </a>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
