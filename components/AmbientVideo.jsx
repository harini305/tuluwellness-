'use client';

import { useEffect, useRef } from 'react';

// Muted background loop: loads only near the viewport, pauses off-screen,
// and stays on its poster frame when the visitor prefers reduced motion.
export default function AmbientVideo({ src, poster, eager = false, className }) {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduce.matches) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!video.src) {
            video.src = src;
            video.load();
          }
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: '200px 0px' }
    );
    io.observe(video);
    return () => io.disconnect();
  }, [src]);

  return (
    <video
      ref={ref}
      className={className}
      poster={poster}
      muted
      loop
      playsInline
      preload={eager ? 'auto' : 'none'}
      aria-hidden="true"
      tabIndex={-1}
    />
  );
}
