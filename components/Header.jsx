'use client';

import { useEffect, useRef, useState } from 'react';
import { contact } from '@/content/site';
import styles from './Header.module.css';

export default function Header({ views, active }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.75);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    if (!open) return;
    menuRef.current?.querySelector('a')?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onResize = () => window.innerWidth >= 960 && setOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  const overHero = active === 'home' && !scrolled && !open;
  const close = () => setOpen(false);

  return (
    <header className={styles.header} data-solid={overHero ? undefined : ''}>
      <div className={`container ${styles.bar}`}>
        <a href="#home" className={styles.logo} aria-label="TULA Wellness home" onClick={close} />

        <nav className={styles.nav} aria-label="Sections">
          <ul>
            {views.map((v) => (
              <li key={v.id}>
                <a href={`#${v.id}`} aria-current={active === v.id ? 'page' : undefined}>
                  {v.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.end}>
          <a className={`btn ${styles.book}`} href="#contact">
            Book Now
          </a>
          <button
            ref={toggleRef}
            type="button"
            className={styles.toggle}
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div id="site-menu" ref={menuRef} className={styles.menu} hidden={!open}>
        <nav className="container" aria-label="Sections">
          <ul className={styles.menuList}>
            {views.map((v) => (
              <li key={v.id}>
                <a href={`#${v.id}`} onClick={close} aria-current={active === v.id ? 'page' : undefined}>
                  {v.label}
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.menuFoot}>
            <a className="btn btn-solid" href="#contact" onClick={close}>
              Book Now
            </a>
            <p>
              <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
              <br />
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
}
