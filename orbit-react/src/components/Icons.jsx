// Line icons ported 1:1 from the original inline <symbol> sprite sheet.
const base = { viewBox: "0 0 24 24" };

export const IconWater = (p) => (
  <svg {...base} {...p}>
    <path d="M12 2C8 8 5 11.5 5 15a7 7 0 0 0 14 0c0-3.5-3-7-7-13z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>
);
export const IconBolt = (p) => (
  <svg {...base} {...p}>
    <path d="M13 2 4 14h6l-1 8 9-12h-6z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>
);
export const IconWaste = (p) => (
  <svg {...base} {...p}>
    <path d="M5 7h14M9 7V4h6v3M7 7l1 13h8l1-13" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
export const IconPayment = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="6" width="18" height="13" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
    <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);
export const IconComplaint = (p) => (
  <svg {...base} {...p}>
    <path d="M4 5h16v11H9l-5 4V5z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <line x1="12" y1="8" x2="12" y2="12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="12" cy="15" r="0.6" fill="currentColor" />
  </svg>
);
export const IconCert = (p) => (
  <svg {...base} {...p}>
    <rect x="4" y="3" width="16" height="14" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
    <line x1="7" y1="7" x2="17" y2="7" stroke="currentColor" strokeWidth="1.4" />
    <line x1="7" y1="10" x2="17" y2="10" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="9" cy="19" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="15" cy="19" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);
export const IconShield = (p) => (
  <svg {...base} {...p}>
    <path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5l-8-3z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>
);
export const IconFlame = (p) => (
  <svg {...base} {...p}>
    <path d="M12 2c1 4-4 5-4 9a4 4 0 0 0 8 0c0-1.5-1-2-1-3.5 1.5 1 3 3 3 5.5a6 6 0 0 1-12 0C6 8 9 6 12 2z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>
);
export const IconCross = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6" />
    <line x1="12" y1="8" x2="12" y2="16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <line x1="8" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);
export const IconAlert = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3 2 20h20L12 3z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <line x1="12" y1="10" x2="12" y2="14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="12" cy="17" r="0.6" fill="currentColor" />
  </svg>
);
export const IconMetro = (p) => (
  <svg {...base} {...p}>
    <rect x="5" y="3" width="14" height="13" rx="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
    <line x1="5" y1="10" x2="19" y2="10" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="8.5" cy="19" r="1.2" fill="currentColor" />
    <circle cx="15.5" cy="19" r="1.2" fill="currentColor" />
  </svg>
);
export const IconBus = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="11" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
    <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="7.5" cy="19" r="1.2" fill="currentColor" />
    <circle cx="16.5" cy="19" r="1.2" fill="currentColor" />
  </svg>
);
export const IconCab = (p) => (
  <svg {...base} {...p}>
    <path d="M5 16 6.5 9h11L19 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <rect x="3" y="16" width="18" height="4" rx="1.4" fill="none" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="7.5" cy="20" r="1" fill="currentColor" />
    <circle cx="16.5" cy="20" r="1" fill="currentColor" />
  </svg>
);
export const IconParking = (p) => (
  <svg {...base} {...p}>
    <rect x="4" y="3" width="16" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
    <text x="12" y="16.5" fontFamily="IBM Plex Mono, monospace" fontSize="10" textAnchor="middle" fill="currentColor">P</text>
  </svg>
);
export const IconRoute = (p) => (
  <svg {...base} {...p}>
    <path d="M12 21s7-7.5 7-12.5A7 7 0 0 0 5 8.5C5 13.5 12 21 12 21z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <circle cx="12" cy="8.5" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);
export const IconTree = (p) => (
  <svg {...base} {...p}>
    <path d="M12 2 6 12h3l-4 7h5v3h4v-3h5l-4-7h3z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>
);
export const IconMuseum = (p) => (
  <svg {...base} {...p}>
    <path d="M3 9 12 3l9 6M4 9h16v2H4zM6 11v8M10 11v8M14 11v8M18 11v8M3 19h18v2H3z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);
export const IconFork = (p) => (
  <svg {...base} {...p}>
    <path d="M6 2v8M4 2v5a2 2 0 0 0 4 0V2M6 10v12M18 2c-2 0-3 2-3 5s1 4 3 4v11" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
export const IconBed = (p) => (
  <svg {...base} {...p}>
    <path d="M3 18v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6M3 18v3M21 18v3M3 12V7h7v5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <circle cx="7" cy="9.5" r="1.4" fill="none" stroke="currentColor" strokeWidth="1.3" />
  </svg>
);
export const IconCap = (p) => (
  <svg {...base} {...p}>
    <path d="M12 4 2 9l10 5 10-5-10-5z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);
export const IconLeaf = (p) => (
  <svg {...base} {...p}>
    <path d="M20 4C10 4 4 10 4 18c8 0 14-6 14-14z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M5 19c3-5 8-9 13-13" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);
export const IconWrench = (p) => (
  <svg {...base} {...p}>
    <path d="M14.7 6.3a4 4 0 0 0-5.6 5.1L4 16.5 7.5 20l5.1-5.1a4 4 0 0 0 5.1-5.6l-2.6 2.6-2-2z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);
export const IconCalendar = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
    <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="1.6" />
    <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);
export const IconMail = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
    <path d="m4 6 8 7 8-7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>
);
export const IconPhone = (p) => (
  <svg {...base} {...p}>
    <path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2C10 21 3 14 3 6a2 2 0 0 1 2-2z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);
export const IconPin = (p) => (
  <svg {...base} {...p}>
    <path d="M12 21s7-7.5 7-12.5A7 7 0 0 0 5 8.5C5 13.5 12 21 12 21z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <circle cx="12" cy="8.5" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);
export const IconTwitter = (p) => (
  <svg {...base} {...p}>
    <path d="M20 6.5c-.6.3-1.3.5-2 .6a3.4 3.4 0 0 0 1.5-1.9c-.7.4-1.4.7-2.2.9a3.4 3.4 0 0 0-5.8 3.1A9.6 9.6 0 0 1 4.5 5.8a3.4 3.4 0 0 0 1.1 4.6c-.6 0-1.1-.2-1.6-.4v.1a3.4 3.4 0 0 0 2.7 3.4 3.5 3.5 0 0 1-1.5.1 3.4 3.4 0 0 0 3.2 2.4A6.9 6.9 0 0 1 3 17.5a9.7 9.7 0 0 0 5.3 1.6c6.3 0 9.8-5.3 9.8-9.8v-.4c.7-.5 1.3-1.1 1.9-1.9z" fill="currentColor" />
  </svg>
);
export const IconFb = (p) => (
  <svg {...base} {...p}>
    <path d="M14 8.5h2.5V5H14c-2 0-3.5 1.6-3.5 3.6V11H8v3h2.5v6h3v-6h2.3l.4-3h-2.7V9c0-.5.3-.5.5-.5z" fill="currentColor" />
  </svg>
);
export const IconInsta = (p) => (
  <svg {...base} {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="17" cy="7" r="1" fill="currentColor" />
  </svg>
);
