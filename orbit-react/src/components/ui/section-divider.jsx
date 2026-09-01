/**
 * SectionDivider — smooths the hard color-block seam between a dark
 * section (bg-ink-navy) and the light section that follows it. This
 * directly fixes the "bad white bottom / boxy cut" issue: previously
 * Hero (navy) ended and About (paper) began with an abrupt 1px edge.
 *
 * `to` sets the hex of the section that comes AFTER this divider, so
 * the SVG's fill matches exactly (Tailwind color tokens aren't
 * available as raw hex inside inline SVG fill attrs, so we pass them
 * explicitly from index.css tokens: paper=#FBFBF9, mist=#EEF1F0).
 */
export default function SectionDivider({ to = "#FBFBF9", flip = false }) {
  return (
    <div className={`relative h-14 sm:h-20 -mb-px ${flip ? "rotate-180" : ""}`} aria-hidden="true">
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
      >
        <path
          d="M0,40 C240,90 480,10 720,40 C960,70 1200,10 1440,40 L1440,100 L0,100 Z"
          fill={to}
        />
      </svg>
    </div>
  );
}
