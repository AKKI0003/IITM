import { motion } from "framer-motion";

/**
 * RevealText — word-by-word stagger reveal. Used for hero/section
 * headlines instead of animating every heading identically; keep this
 * for the 2-3 headlines per page that should feel intentional.
 */
export default function RevealText({ text, className = "", delay = 0, as: Tag = "span" }) {
  const words = text.split(" ");
  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.28em]">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: delay + i * 0.045 }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
