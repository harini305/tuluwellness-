'use client';

import { useEffect, useRef, useState } from 'react';
import Img from '../Img';
import { promo } from '@/content/site';
import styles from './OfferDialog.module.css';

// The original site showed this promotion as an automatic popup; here it opens on request
// and disappears once the published end date has passed.
export default function OfferDialog() {
  const ref = useRef(null);
  const [live, setLive] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- date check must run on the client
    setLive(Date.now() <= new Date(promo.ends).getTime());
  }, []);

  if (!live) return null;

  return (
    <>
      <button type="button" className={styles.chip} onClick={() => ref.current?.showModal()}>
        <span className={styles.pulse} aria-hidden="true" />
        {promo.offers[0].lead} {promo.offers[0].text}
      </button>
      <dialog
        ref={ref}
        className={styles.dialog}
        aria-labelledby="offer-title"
        onClick={(e) => e.target === ref.current && ref.current.close()}
      >
        <div className="frame">
          <Img name="promo" alt="" sizes="(min-width: 900px) 760px, 100vw" />
        </div>
        <div className={styles.body}>
          <h2 id="offer-title" className="visually-hidden">
            Current offers
          </h2>
          <ul className={styles.offers}>
            {promo.offers.map((o) => (
              <li key={o.lead}>
                <strong>{o.lead}</strong> {o.text}
              </li>
            ))}
          </ul>
          <p className={styles.meta}>
            {promo.dates} · {promo.note}
          </p>
          <div className="actions">
            <a className="btn btn-solid" href="#contact" onClick={() => ref.current?.close()}>
              Book Now
            </a>
            <button type="button" className="btn" onClick={() => ref.current?.close()}>
              Close
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
