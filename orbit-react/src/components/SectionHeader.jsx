import { motion } from "framer-motion";

export default function SectionHeader({ eyebrow, title, description, className = "", eyebrowClassName = "", center = false }) {
  return (
    <div className={`max-w-[640px] mb-12 ${center ? "mx-auto text-center" : ""} ${className}`}>
      <motion.span
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.45 }}
        className={`relative inline-flex items-center gap-1.5 font-mono text-[0.72rem] tracking-[0.14em] uppercase text-transit-teal bg-transit-teal/[.09] ring-1 ring-inset ring-transit-teal/20 px-[10px] py-1 rounded-full mb-[14px] overflow-hidden ${eyebrowClassName}`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-transit-teal animate-pulse" />
        {eyebrow}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="relative text-[1.7rem] md:text-[2.4rem] mb-3 tracking-tight inline-block"
      >
        {title}
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className={`block h-[3px] bg-civic-amber rounded-full mt-2 origin-left ${center ? "mx-auto w-16" : "w-16"}`}
        />
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-slate-light text-[1.02rem]"
      >
        {description}
      </motion.p>
    </div>
  );
}
