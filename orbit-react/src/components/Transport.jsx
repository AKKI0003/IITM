import { motion } from "framer-motion";
import Container from "./Container";
import SectionHeader from "./SectionHeader";

const items = [
  {
    title: "Metro Rail (NCMC)",
    text: "4 operational lines, 62 elevated/underground stations with National Common Mobility Card & UPI ticketing.",
    badge: "Every 4 mins",
  },
  {
    title: "Smart EV City Buses",
    text: "250+ zero-emission electric bus routes connecting all 12 wards and suburban transit hubs with live GPS tracking.",
    badge: "GPS Live",
  },
  {
    title: "Prepaid Auto & EV Cabs",
    text: "Metered prepaid smart auto booths and on-demand electric cab stands at all major railway & metro stations.",
    badge: "Regulated Fares",
  },
  {
    title: "FASTag Smart Parking",
    text: "42 contactless FASTag-enabled public multi-level parking lots with live smartphone slot availability.",
    badge: "FASTag Enabled",
  },
];

export default function Transport() {
  return (
    <section id="transport" className="py-16 lg:py-section">
      <Container>
        <SectionHeader
          eyebrow="Public Mobility"
          title="Smart Transit & Commuter Services."
          description="Integrated multimodal transport network connecting every corner of Orbit Smart City seamlessly."
        />

        {/* Sticky-index editorial list — a moving transit "route line"
            on the left replaces four identical boxed cards. */}
        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line hidden sm:block" aria-hidden="true" />
          {items.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative grid grid-cols-1 sm:grid-cols-[16px_1fr_auto] gap-3 sm:gap-8 items-start sm:items-center py-7 border-b border-line"
            >
              <span className="hidden sm:block w-[15px] h-[15px] rounded-full bg-civic-amber ring-4 ring-paper" />
              <div>
                <h3 className="text-[1.15rem] font-display font-bold text-ink-navy">{t.title}</h3>
                <p className="text-[0.9rem] text-slate-light leading-relaxed mt-1.5 max-w-[520px]">{t.text}</p>
              </div>
              <span className="font-mono text-[0.68rem] uppercase tracking-wider text-civic-amber-dark font-semibold whitespace-nowrap">
                {t.badge}
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
