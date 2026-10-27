const base = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, 'aria-hidden': true, focusable: false };

export function Facebook() {
  return (
    <svg {...base}>
      <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H7v4h3v7h4v-7h3l1-4h-4V8.5a.5.5 0 0 1 .5-.5Z" strokeLinejoin="round" />
    </svg>
  );
}

export function Instagram() {
  return (
    <svg {...base}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function WhatsApp() {
  return (
    <svg {...base}>
      <path d="M4 20l1.2-3.9A8.5 8.5 0 1 1 8.1 19L4 20Z" strokeLinejoin="round" />
      <path d="M9.2 8.6c.2-.4.5-.5.8-.5h.5l.9 2-.6.8c.4.9 1.2 1.7 2.1 2.1l.8-.6 2 .9v.5c0 .3-.1.6-.5.8-.6.4-1.5.5-2.6 0a7 7 0 0 1-3.3-3.3c-.5-1.1-.4-2-.1-2.7Z" strokeLinejoin="round" />
    </svg>
  );
}

export function TripAdvisor() {
  return (
    <svg {...base}>
      <circle cx="7" cy="13.5" r="3.5" />
      <circle cx="17" cy="13.5" r="3.5" />
      <circle cx="7" cy="13.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="17" cy="13.5" r="1" fill="currentColor" stroke="none" />
      <path d="M3 9.5c2.5-2 5.6-3 9-3s6.5 1 9 3M12 17l-1.6-1.8M12 17l1.6-1.8" strokeLinecap="round" />
    </svg>
  );
}

export function External() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true" focusable="false">
      <path d="M4.5 2H10v5.5M10 2 2.5 9.5" />
    </svg>
  );
}
