import { motion } from "framer-motion";
import Container from "./Container";
import { pushAlert } from "../lib/alertBus";

const items = [
  { title: "Police / Emergency", num: "112 / 100", desc: "Immediate police assistance & national emergency" },
  { title: "Fire & Rescue", num: "101", desc: "Fire accidents, hazard control & rescue operations" },
  { title: "Ambulance / Health", num: "108 / 102", desc: "24x7 emergency medical response & trauma care" },
  { title: "Disaster Helpline", num: "1077", desc: "Flood, cyclone & natural calamity control room" },
];

const secondary = [
  ["Women Helpline", "1091 / 181"],
  ["Childline", "1098"],
  ["Power Outage", "1912"],
  ["Water Leakage", "1916"],
];

const demoAlerts = {
  critical: { priority: "critical", title: "Flash flood warning — Ward 9", message: "ICCC sensors report rapid water-level rise near Riverside Colony. Avoid underpasses." },
  warning: { priority: "warning", title: "Traffic diversion — MG Road", message: "Metro construction has narrowed MG Road to one lane near Sector 4." },
  info: { priority: "info", title: "Jal Board maintenance", message: "Scheduled water supply maintenance in Ward 7–12, Saturday 6–10 AM." },
};

export default function Emergency() {
  // Fires two similar alerts a beat apart so the merge behaviour (count
  // badge instead of a second card) is visible without waiting.
  const fireDuplicateBurst = () => {
    pushAlert(demoAlerts.warning);
    setTimeout(() => pushAlert(demoAlerts.warning), 700);
  };

  return (
    <section id="emergency" className="py-16 lg:py-section bg-ink-navy text-paper">
      <Container>
        <div className="flex items-center justify-between flex-wrap gap-4 mb-14">
          <div className="max-w-[560px]">
            <span className="inline-flex items-center gap-1.5 font-mono text-[0.72rem] tracking-[0.14em] uppercase text-[#ff8a80] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff8a80] animate-pulse" />
              24x7 Emergency Services
            </span>
            <h2 className="text-[1.9rem] md:text-[2.6rem] font-display font-bold leading-tight">
              Help, when it matters most.
            </h2>
          </div>
          <p className="text-paper/60 text-[0.98rem] max-w-[320px]">
            Direct lines to Orbit Smart City's emergency response and disaster management teams, available around the clock.
          </p>
        </div>

        {/* Open, undivided rows instead of four identical boxes — the
            phone number carries the hierarchy, not a card border. */}
        <div>
          {items.map((e, i) => (
            <motion.a
              key={e.title}
              href={`tel:${e.num.split("/")[0].trim()}`}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-2 sm:gap-8 items-center py-6 border-t border-paper/10 last:border-b hover:pl-2 transition-[padding] duration-300"
            >
              <div>
                <h3 className="text-paper text-[1.15rem] sm:text-[1.3rem] font-display font-semibold group-hover:text-[#ff8a80] transition-colors">
                  {e.title}
                </h3>
                <p className="text-[0.86rem] text-paper/55 mt-1">{e.desc}</p>
              </div>
              <span className="font-mono text-[1.7rem] sm:text-[2.1rem] font-bold text-civic-amber tracking-tight whitespace-nowrap">
                {e.num}
              </span>
            </motion.a>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-paper/10 flex flex-wrap gap-x-10 gap-y-3 font-mono text-[0.85rem] text-paper/70">
          {secondary.map(([label, num]) => (
            <span key={label}>
              {label}: <strong className="text-civic-amber">{num}</strong>
            </span>
          ))}
        </div>

        {/* Smart Priority Alert System — live demo trigger.
            Critical alerts jump the queue ahead of warning/info, and two
            similar alerts fired close together merge into one card with
            a count badge instead of stacking twice. */}
        <div className="mt-10 pt-8 border-t border-paper/10">
          <span className="font-mono text-[0.72rem] tracking-[0.14em] uppercase text-paper/50 block mb-3">
            Smart Priority Alert System — try it
          </span>
          <div className="flex flex-wrap gap-2.5">
            <button
              type="button"
              onClick={() => pushAlert(demoAlerts.critical)}
              className="font-mono text-[0.78rem] font-semibold px-3.5 py-2 rounded bg-[#ff8a80]/15 text-[#ff8a80] hover:bg-[#ff8a80]/25 transition-colors"
            >
              Send Critical Alert
            </button>
            <button
              type="button"
              onClick={() => pushAlert(demoAlerts.warning)}
              className="font-mono text-[0.78rem] font-semibold px-3.5 py-2 rounded bg-civic-amber/15 text-civic-amber hover:bg-civic-amber/25 transition-colors"
            >
              Send Warning Alert
            </button>
            <button
              type="button"
              onClick={() => pushAlert(demoAlerts.info)}
              className="font-mono text-[0.78rem] font-semibold px-3.5 py-2 rounded bg-white/10 text-paper/80 hover:bg-white/15 transition-colors"
            >
              Send Info Alert
            </button>
            <button
              type="button"
              onClick={fireDuplicateBurst}
              className="font-mono text-[0.78rem] font-semibold px-3.5 py-2 rounded bg-white/10 text-paper/80 hover:bg-white/15 transition-colors"
            >
              Simulate Duplicate Burst
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
