import Container from "./Container";
import SectionHeader from "./SectionHeader";
import IconBadge from "./IconBadge";
import { IconMetro, IconBus, IconCab, IconParking } from "./Icons";

const items = [
  {
    icon: IconMetro,
    variant: "teal",
    title: "Metro Rail (NCMC)",
    text: "4 operational lines, 62 elevated/underground stations with National Common Mobility Card & UPI ticketing.",
    badge: "Every 4 mins",
  },
  {
    icon: IconBus,
    variant: "amber",
    title: "Smart EV City Buses",
    text: "250+ zero-emission electric bus routes connecting all 12 wards and suburban transit hubs with live GPS tracking.",
    badge: "GPS Live",
  },
  {
    icon: IconCab,
    variant: "navy",
    title: "Prepaid Auto & EV Cabs",
    text: "Metered prepaid smart auto booths and on-demand electric cab stands at all major railway & metro stations.",
    badge: "Regulated Fares",
  },
  {
    icon: IconParking,
    variant: "teal",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((t) => (
            <div
              key={t.title}
              className="bg-paper border border-line rounded-lg p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <IconBadge icon={t.icon} variant={t.variant} />
                  <span className="font-mono text-[0.66rem] uppercase tracking-wider text-transit-teal bg-transit-teal/10 px-2 py-0.5 rounded font-semibold">
                    {t.badge}
                  </span>
                </div>
                <h3 className="text-base font-display font-bold text-ink-navy mb-2">{t.title}</h3>
                <p className="text-[0.88rem] text-slate-light leading-relaxed">{t.text}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-line/60">
                <a href="#transport" className="text-[0.82rem] font-semibold text-transit-teal hover:text-transit-teal-dark">
                  View Timetable & Map →
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
