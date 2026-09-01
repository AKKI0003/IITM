import { motion } from "framer-motion";
import Container from "./Container";
import { IconAlert, IconPhone } from "./Icons";

const advisories = [
  "Ward 7 to 12 scheduled Jal Board pipeline upgrade on Saturday, 6:00 AM – 10:00 AM IST.",
  "Metro Blue Line Sector 4 platform closed for maintenance this weekend — use Gate 2 shuttle.",
  "Property tax early-bird rebate window closes March 31 — file online to save 5%.",
];

export default function NoticeBanner() {
  // Duplicate the strip once so the marquee loop is seamless (the second
  // copy picks up exactly where the first leaves off, no visible jump).
  const strip = [...advisories, ...advisories];

  return (
    <div className="relative bg-ink-navy text-paper border-b border-civic-amber/20 overflow-hidden">
      {/* Thin animated gradient hairline instead of a flat 1px border —
          a small signal that the whole page is "alive", not static. */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-civic-amber to-transparent"
        style={{ backgroundSize: "200% 100%" }}
        animate={{ backgroundPositionX: ["0%", "200%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />

      <Container className="flex items-stretch gap-4 py-0">
        {/* Fixed "live advisory" badge, never scrolls — anchors the strip. */}
        <div className="hidden sm:flex items-center gap-2 pr-4 border-r border-paper/10 flex-shrink-0 py-2.5">
          <span className="relative flex-shrink-0 w-6 h-6 rounded-full bg-civic-amber/15 text-civic-amber flex items-center justify-center">
            <IconAlert className="w-3.5 h-3.5" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-civic-amber animate-ping" aria-hidden="true" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-civic-amber" aria-hidden="true" />
          </span>
          <span className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-civic-amber whitespace-nowrap">
            Live Advisory
          </span>
        </div>

        {/* Continuously scrolling marquee — edge-faded so it dissolves
            into the bar rather than hard-cutting mid-sentence. */}
        <div className="flex-1 min-w-0 py-2.5 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_24px,black_calc(100%-24px),transparent)]">
          <motion.div
            className="flex items-center gap-10 whitespace-nowrap font-mono text-[0.78rem] text-paper/80"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          >
            {strip.map((text, i) => (
              <span key={i} className="flex items-center gap-2 flex-shrink-0">
                <span className="w-1 h-1 rounded-full bg-civic-amber/60 flex-shrink-0" aria-hidden="true" />
                {text}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Fixed contact pills, never scroll — the numbers you actually
            need in an emergency shouldn't be mid-animation. */}
        <div className="hidden md:flex items-center gap-2 pl-4 border-l border-paper/10 flex-shrink-0 py-2">
          <a
            href="tel:18004252026"
            className="flex items-center gap-1.5 font-mono text-[0.72rem] text-paper/70 hover:text-paper bg-paper/[.05] hover:bg-paper/[.09] px-2.5 py-1 rounded-full transition-colors whitespace-nowrap"
          >
            <IconPhone className="w-3 h-3" />
            1800-425-2026
          </a>
          <a
            href="tel:112"
            className="flex items-center gap-1.5 font-mono text-[0.72rem] font-bold text-ink-navy bg-civic-amber hover:bg-civic-amber-dark px-2.5 py-1 rounded-full transition-colors whitespace-nowrap"
          >
            <IconAlert className="w-3 h-3" />
            112
          </a>
        </div>
      </Container>
    </div>
  );
}
