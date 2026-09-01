import { motion } from "framer-motion";
import Container from "./Container";
import Button from "./Button";

const stats = [
  ["1.8M", "Citizens Served"],
  ["98.4%", "Grievances Resolved"],
  ["42%", "Clean Solar Energy"],
  ["12", "Municipal Wards"],
];

export default function Hero() {
  return (
    <section id="home" className="relative bg-ink-navy text-paper pt-16 sm:pt-24 pb-20 overflow-hidden">
      {/* Subtle topographic backdrop instead of a gradient blob. */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none"
        viewBox="0 0 800 500"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <path
            key={i}
            d={`M-50 ${80 + i * 70} C 200 ${20 + i * 70}, 500 ${140 + i * 70}, 850 ${60 + i * 70}`}
            stroke="#F2D9AE"
            strokeWidth="1"
            fill="none"
          />
        ))}
      </svg>

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 mb-6 flex-wrap"
        >
          <span className="font-mono text-[0.7rem] tracking-[0.16em] uppercase text-civic-amber-soft/80">
            Smart City · India
          </span>
        </motion.div>

        <h1 className="font-display font-bold leading-[0.98] tracking-tight text-[2.6rem] sm:text-[4.2rem] lg:text-[5.6rem] max-w-[900px] text-paper">
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            The city,
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="block text-civic-amber"
          >
            in motion.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-paper/70 text-[1.05rem] max-w-[480px] mt-8 leading-relaxed"
        >
          One unified portal for every city service — pay property taxes, track buses in real time,
          download verified DigiLocker certificates, and file grievances from Orbit Smart City.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="flex gap-4 flex-wrap mt-9"
        >
          <Button href="#services" variant="primary">
            Explore 40+ Online Services
          </Button>
          <Button href="#emergency" variant="ghost">
            24x7 Emergency Helplines
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-wrap gap-x-12 gap-y-5 mt-16 pt-8 border-t border-paper/10"
        >
          {stats.map(([value, label]) => (
            <div key={label}>
              <span className="font-mono text-[1.6rem] font-bold text-paper block tracking-tight">
                {value}
              </span>
              <span className="block mt-1 text-[0.72rem] text-paper/50 uppercase tracking-[0.06em] font-mono">
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
