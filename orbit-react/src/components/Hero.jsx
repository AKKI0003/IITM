import { motion } from "framer-motion";
import Container from "./Container";
import Button from "./Button";
import Grainient from "./Grainient";

const stats = [
  ["1.8M", "Citizens Served"],
  ["98.4%", "Grievances Resolved"],
  ["42%", "Clean Solar Energy"],
  ["12", "Municipal Wards"],
];

export default function Hero() {
  return (
    <section id="home" className="relative bg-ink-navy text-paper pt-16 sm:pt-24 pb-20 overflow-hidden min-h-[92vh] flex items-center">
      {/* Immersive animated gradient field, tuned to the site's ink-navy /
          civic-amber palette instead of the library default violet. */}
      <div className="absolute inset-0" aria-hidden="true">
        <Grainient
          color1="#2A1B5E"
          color2="#0A0E1F"
          color3="#FF7A45"
          timeSpeed={0.32}
          warpStrength={1.7}
          warpAmplitude={78}
          warpFrequency={3.6}
          warpSpeed={2.6}
          grainAmount={0.1}
          contrast={1.65}
          saturation={1.5}
          rotationAmount={420}
          zoom={1.3}
        />
      </div>
      {/* Legibility scrim so body copy and buttons stay readable over the
          moving gradient. */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-navy/30 via-ink-navy/50 to-ink-navy pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-navy/40 via-transparent to-ink-navy/15 pointer-events-none" aria-hidden="true" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 mb-7 flex-wrap"
        >
          <span className="font-mono text-[0.7rem] tracking-[0.16em] uppercase text-civic-amber-soft/80 border border-civic-amber-soft/20 rounded-full px-3 py-1 backdrop-blur-sm">
            Smart City · India
          </span>
        </motion.div>

        <h1 className="font-serif font-medium leading-[0.96] tracking-[-0.02em] text-[2.9rem] sm:text-[4.6rem] lg:text-[6.2rem] max-w-[960px] text-paper">
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
            className="block italic text-civic-amber font-normal"
          >
            in motion.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-paper/70 text-[1.1rem] max-w-[480px] mt-8 leading-relaxed"
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
