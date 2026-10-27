'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './Header';
import styles from './ViewShell.module.css';

// One scrolling page of full-screen sections. The header tracks the section in view,
// and content inside each section reveals as it scrolls in.
export default function ViewShell({ views, footer }) {
  const [active, setActive] = useState('home');
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    const sections = [...root.querySelectorAll('[data-view]')];
    const navOf = Object.fromEntries(views.map((v) => [v.id, v.navKey ?? v.id]));

    // The section crossing the middle of the viewport is the active one.
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(navOf[e.target.id]));
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );
    sections.forEach((s) => io.observe(s));

    gsap.registerPlugin(ScrollTrigger);
    const reveal = (els) =>
      gsap.to(els, { autoAlpha: 1, y: 0, duration: 0.85, ease: 'power2.out', stagger: 0.08, overwrite: true });
    // Anything already on screen or scrolled past (e.g. after a deep link) shows at once.
    // Only not-yet-shown elements are measured, at most once per frame.
    let frame = 0;
    const checkPassed = () => {
      frame = 0;
      const due = gsap.utils
        .toArray('[data-anim]', root)
        .filter((el) => el.dataset.shown !== '1')
        .filter((el) => el.getBoundingClientRect().top < window.innerHeight);
      due.forEach((el) => (el.dataset.shown = '1'));
      if (due.length) reveal(due);
      if (!root.querySelector('[data-anim]:not([data-shown="1"])')) window.removeEventListener('scroll', revealPassed);
    };
    const revealPassed = () => {
      if (!frame) frame = requestAnimationFrame(checkPassed);
    };

    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const items = gsap.utils.toArray('[data-anim]', root);
      gsap.set(items, { autoAlpha: 0, y: 26 });
      ScrollTrigger.batch(items, {
        start: 'top bottom',
        once: true,
        onEnter: (batch) => {
          batch.forEach((el) => (el.dataset.shown = '1'));
          reveal(batch);
        },
      });
      revealPassed();
      return () => items.forEach((el) => delete el.dataset.shown);
    });

    // Scroll position of a section. Pinned sections are measured by their pin spacer so
    // a jump always lands at the start of the pinned sequence, not wherever it last stopped.
    const targetY = (el) => {
      const box = el.parentElement?.classList.contains('pin-spacer') ? el.parentElement : el;
      const offset = document.querySelector('header')?.offsetHeight ?? 0;
      return box.getBoundingClientRect().top + window.scrollY - offset;
    };

    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey) return;
      const id = a.getAttribute('href').slice(1);
      const el = id === 'home' ? null : document.getElementById(id);
      if (id !== 'home' && !el) return;
      e.preventDefault();
      const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top: el ? targetY(el) : 0, behavior: smooth ? 'smooth' : 'instant' });
      history.pushState(null, '', `#${id}`);
    };
    document.addEventListener('click', onClick);

    // The browser jumps to a #section before images and fonts settle; re-align once they have.
    const alignToHash = () => {
      const target = window.location.hash && document.getElementById(window.location.hash.slice(1));
      if (target) window.scrollTo({ top: targetY(target), behavior: 'instant' });
      ScrollTrigger.refresh();
      revealPassed();
    };
    const onPop = () => alignToHash();
    window.addEventListener('popstate', onPop);
    // Align as soon as fonts are ready (the map iframe can hold back `load`), and once more on load.
    document.fonts.ready.then(() => requestAnimationFrame(alignToHash));
    const onLoad = () => requestAnimationFrame(alignToHash);
    if (document.readyState !== 'complete') window.addEventListener('load', onLoad, { once: true });
    window.addEventListener('scroll', revealPassed, { passive: true });

    // Interactive panels change height; keep trigger positions accurate.
    let timer;
    const ro = new ResizeObserver(() => {
      clearTimeout(timer);
      timer = setTimeout(() => ScrollTrigger.refresh(), 200);
    });
    ro.observe(root);

    return () => {
      io.disconnect();
      ro.disconnect();
      clearTimeout(timer);
      cancelAnimationFrame(frame);
      window.removeEventListener('load', onLoad);
      window.removeEventListener('scroll', revealPassed);
      window.removeEventListener('popstate', onPop);
      document.removeEventListener('click', onClick);
      mm.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- the section list is static
  }, []);

  return (
    <>
      <Header views={views.filter((v) => v.nav)} active={active} />
      <main id="main" ref={rootRef}>
        {views.map((v) => (
          <div key={v.id} id={v.id} data-view={v.id} className={v.id === 'home' ? undefined : styles.view}>
            {v.node}
          </div>
        ))}
      </main>
      {footer}
    </>
  );
}
