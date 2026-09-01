import { motion } from "framer-motion";

/**
 * Reveal — a small react-bits-style scroll animation primitive.
 * Wraps any section/content so it fades + slides up into place the
 * first time it scrolls into view, instead of the whole page just
 * "existing" as flat static blocks. This is the #1 fix for a site
 * feeling "boxy and choppy": staggered motion gives sections a sense
 * of depth and sequence instead of everything popping in at once on
 * initial paint.
 *
 * Usage: <Reveal><Services /></Reveal>
 * or per-item inside a .map() with a numeric `delay`.
 */
export default function Reveal({ children, delay = 0, y = 28, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
