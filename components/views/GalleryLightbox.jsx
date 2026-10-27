'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Img from '../Img';
import styles from './GalleryLightbox.module.css';

export default function GalleryLightbox({ items }) {
  const dialog = useRef(null);
  const track = useRef(null);
  const [index, setIndex] = useState(0);
  const count = items.length;

  const open = (i) => {
    setIndex(i);
    dialog.current?.showModal();
  };
  const step = useCallback((dir) => setIndex((i) => (i + dir + count) % count), [count]);

  useEffect(() => {
    const el = dialog.current;
    const onKey = (e) => {
      if (!el?.open) return;
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [step]);

  // Desktop: pin the section and move the filmstrip sideways as the page scrolls.
  useEffect(() => {
    const el = track.current;
    const section = el?.closest('[data-view]');
    if (!section) return;
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add('(min-width: 900px) and (prefers-reduced-motion: no-preference)', () => {
      const header = document.querySelector('header');
      const distance = () => Math.max(0, el.scrollWidth - document.documentElement.clientWidth);
      gsap.to(el, {
        x: () => -distance(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: () => `top top+=${header?.offsetHeight ?? 0}`,
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    });
    return () => mm.revert();
  }, []);

  const g = items[index];

  return (
    <>
      <ul ref={track} className={styles.grid} aria-label="Photos">
        {items.map((it, i) => (
          <li key={it.name}>
            <button type="button" className={styles.tile} onClick={() => open(i)} aria-label={`Open photo: ${it.alt}`}>
              <span className="frame">
                <Img name={it.name} alt="" sizes="(min-width: 900px) 45vw, 82vw" />
              </span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialog}
        className={styles.dialog}
        aria-label="Photo viewer"
        onClick={(e) => e.target === dialog.current && dialog.current.close()}
      >
        <figure className={styles.figure} key={g.name}>
          <Img name={g.name} alt={g.alt} sizes="90vw" className={styles.full} />
          <figcaption className={styles.caption}>
            <span>{g.alt}</span>
            <span>
              {index + 1} / {count}
            </span>
          </figcaption>
        </figure>
        <button type="button" className={`${styles.nav} ${styles.prev}`} onClick={() => step(-1)} aria-label="Previous photo">
          <svg width="26" height="12" viewBox="0 0 22 10" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
            <path d="M21 5H1m4-4L1 5l4 4" />
          </svg>
        </button>
        <button type="button" className={`${styles.nav} ${styles.next}`} onClick={() => step(1)} aria-label="Next photo">
          <svg width="26" height="12" viewBox="0 0 22 10" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
            <path d="M1 5h20m-4-4 4 4-4 4" />
          </svg>
        </button>
        <button type="button" className={styles.close} onClick={() => dialog.current?.close()} aria-label="Close photo viewer">
          <span />
          <span />
        </button>
      </dialog>
    </>
  );
}
