import Container from "./Container";
import { IconShield, IconFlame, IconCross, IconAlert } from "./Icons";

const items = [
  { icon: IconShield, title: "Police / Emergency", num: "112 / 100", desc: "Immediate police assistance & national emergency" },
  { icon: IconFlame, title: "Fire & Rescue", num: "101", desc: "Fire accidents, hazard control & rescue operations" },
  { icon: IconCross, title: "Ambulance / Health", num: "108 / 102", desc: "24x7 emergency medical response & trauma care" },
  { icon: IconAlert, title: "Disaster Helpline", num: "1077", desc: "Flood, cyclone & natural calamity control room" },
];

export default function Emergency() {
  return (
    <section id="emergency" className="py-16 lg:py-section bg-ink-navy text-paper">
      <Container>
        <div className="max-w-[640px] mb-12">
          <span className="inline-block font-mono text-[0.72rem] tracking-[0.14em] uppercase text-[#ff8a80] bg-signal-red/[.18] px-[10px] py-1 rounded-full mb-[14px]">
            24x7 Emergency Services
          </span>
          <h2 className="text-[1.7rem] md:text-[2.4rem] font-display font-bold mb-3">Help, when it matters most.</h2>
          <p className="text-paper/[.65] text-[1.02rem]">
            Direct lines to Orbit Smart City's emergency response and disaster management teams across India, available around the clock.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((e) => (
            <div
              key={e.title}
              className="bg-ink-navy-soft border border-white/[.08] rounded-xl p-6 text-center hover:border-signal-red/50 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="w-[48px] h-[48px] rounded-[10px] flex items-center justify-center bg-signal-red/[.16] text-[#ff8a80] mx-auto mb-4">
                  <e.icon className="w-[24px] h-[24px]" />
                </div>
                <h3 className="text-paper text-[1.05rem] font-display font-semibold mb-1">{e.title}</h3>
                <p className="text-[0.78rem] text-paper/60 mb-3">{e.desc}</p>
              </div>
              <div>
                <a
                  href={`tel:${e.num.split('/')[0].trim()}`}
                  className="font-mono text-[1.35rem] font-bold text-civic-amber block mt-2 py-1 px-3 bg-white/5 rounded hover:bg-civic-amber hover:text-ink-navy transition-colors"
                >
                  {e.num}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 rounded-xl bg-ink-navy-soft/60 border border-white/[.06] flex flex-wrap items-center justify-between gap-4 text-[0.85rem] text-paper/70 font-mono">
          <span>👩 Women Helpline: <strong className="text-civic-amber">1091 / 181</strong></span>
          <span>👶 Childline: <strong className="text-civic-amber">1098</strong></span>
          <span>⚡ Power Outage: <strong className="text-civic-amber">1912</strong></span>
          <span>💧 Water Leakage: <strong className="text-civic-amber">1916</strong></span>
        </div>
      </Container>
    </section>
  );
}
