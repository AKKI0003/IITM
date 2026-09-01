import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconAlert, IconPhone } from "./Icons";

const advisories = [
  "Ward 7 to 12 scheduled Jal Board pipeline upgrade on Saturday, 6:00 AM – 10:00 AM IST.",
  "Metro Blue Line Sector 4 platform closed for maintenance this weekend — use Gate 2 shuttle.",
  "Property tax early-bird rebate window closes March 31 — file online to save 5%.",
];

// Floating, fixed-position widget — lives OUTSIDE normal document flow, so
// it can never push Hero (or any section) down or eat layout height. It
// starts collapsed to a small pulsing badge and expands into the advisory
// panel on hover/click, then auto-collapses again. This keeps the "live"
// signal always visible without the full-width bar disrupting the page.
export default function NoticeBanner() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="fixed z-40 bottom-5 left-4 sm:bottom-6 sm:left-6"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <AnimatePresence mode="wait">
        {open ? (
          <motion.div
            key="panel"
            initial={{ opacity: 0, scale: 0.94, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="w-[min(90vw,360px)] rounded-2xl bg-ink-navy text-paper border border-civic-amber/25 shadow-2xl shadow-black/40 overflow-hidden"
          >
            <div className="flex items-center gap-2 px-4 pt-3.5 pb-2.5 border-b border-paper/10">
              <span className="relative flex-shrink-0 w-5 h-5 rounded-full bg-civic-amber/15 text-civic-amber flex items-center justify-center">
                <IconAlert className="w-3 h-3" />
                <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-civic-amber animate-ping" aria-hidden="true" />
                <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-civic-amber" aria-hidden="true" />
              </span>
              <span className="font-mono text-[0.66rem] uppercase tracking-[0.12em] text-civic-amber">
                Live Advisory
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="ml-auto text-paper/40 hover:text-paper/80 transition-colors text-xs font-mono"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <ul className="max-h-[45vh] overflow-y-auto px-4 py-3 flex flex-col gap-3">
              {advisories.map((text, i) => (
                <li key={i} className="flex gap-2 text-[0.78rem] leading-relaxed text-paper/80">
                  <span className="w-1 h-1 mt-2 rounded-full bg-civic-amber/60 flex-shrink-0" aria-hidden="true" />
                  {text}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2 px-4 py-3 border-t border-paper/10 bg-paper/[.03]">
              <a
                href="tel:18004252026"
                className="flex items-center gap-1.5 font-mono text-[0.7rem] text-paper/70 hover:text-paper bg-paper/[.05] hover:bg-paper/[.09] px-2.5 py-1 rounded-full transition-colors whitespace-nowrap"
              >
                <IconPhone className="w-3 h-3" />
                1800-425-2026
              </a>
              <a
                href="tel:112"
                className="flex items-center gap-1.5 font-mono text-[0.7rem] font-bold text-ink-navy bg-civic-amber hover:bg-civic-amber-dark px-2.5 py-1 rounded-full transition-colors whitespace-nowrap"
              >
                <IconAlert className="w-3 h-3" />
                112
              </a>
            </div>
          </motion.div>
        ) : (
          <motion.button
            key="badge"
            type="button"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.18 }}
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 rounded-full bg-ink-navy text-paper border border-civic-amber/30 shadow-lg shadow-black/30 pl-2.5 pr-3.5 py-2 backdrop-blur-sm hover:border-civic-amber/60 transition-colors"
          >
            <span className="relative flex-shrink-0 w-5 h-5 rounded-full bg-civic-amber/15 text-civic-amber flex items-center justify-center">
              <IconAlert className="w-3 h-3" />
              <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-civic-amber animate-ping" aria-hidden="true" />
              <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-civic-amber" aria-hidden="true" />
            </span>
            <span className="font-mono text-[0.64rem] uppercase tracking-[0.1em] text-civic-amber whitespace-nowrap">
              {advisories.length} Live Advisories
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
