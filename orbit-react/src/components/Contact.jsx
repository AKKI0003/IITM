import Container from "./Container";
import IconBadge from "./IconBadge";
import { IconPin, IconPhone, IconMail } from "./Icons";

const rows = [
  {
    icon: IconPin,
    variant: "teal",
    title: "Official Address",
    text: "Smart City Bhavan, Civic Square, MG Road, Sector 4, Orbit Smart City — 560001, India",
    subtext: "Landmark: Opposite Central Metro Interchange",
  },
  {
    icon: IconPhone,
    variant: "amber",
    title: "Citizen Helplines",
    text: "Toll-Free: 1800-425-2026 | Desk: +91 (080) 2297-5000",
    subtext: "WhatsApp Civic Support: +91 98765 43210",
  },
  {
    icon: IconMail,
    variant: "navy",
    title: "Official Emails",
    text: "helpdesk@orbit.smartcity.gov.in",
    subtext: "Grievances: commissioner@orbit.smartcity.gov.in",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-16 lg:py-section bg-mist">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
        <div className="flex flex-col justify-between">
          <div>
            <span className="inline-block font-mono text-[0.72rem] tracking-[0.14em] uppercase text-transit-teal bg-transit-teal/[.09] px-[10px] py-1 rounded-full mb-[14px]">
              Contact & Support
            </span>
            <h2 className="text-[1.7rem] md:text-[2.4rem] font-display font-bold text-ink-navy mb-3">
              Reach Orbit Smart City Municipal Corporation.
            </h2>
            <p className="text-slate-light text-[1.02rem] leading-relaxed">
              Our citizen helpdesk & Integrated Command and Control Centre (ICCC) is operational Monday to Saturday, 9:00 AM – 6:00 PM IST.
            </p>

            <div className="grid gap-5 mt-7">
              {rows.map((r) => (
                <div key={r.title} className="flex gap-4 items-start bg-paper p-4 rounded-lg border border-line/70 shadow-xs">
                  <IconBadge icon={r.icon} variant={r.variant} className="flex-shrink-0" />
                  <div>
                    <h4 className="text-[0.94rem] font-semibold text-ink-navy mb-[2px]">{r.title}</h4>
                    <p className="text-[0.9rem] text-slate-light font-medium">{r.text}</p>
                    {r.subtext && <p className="text-[0.8rem] text-transit-teal font-mono mt-1">{r.subtext}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 p-4 rounded-lg bg-ink-navy text-paper flex items-center justify-between flex-wrap gap-3">
            <div>
              <span className="text-[0.75rem] font-mono uppercase text-civic-amber block">Integrated Civic Helpdesk</span>
              <span className="text-[0.9rem] font-semibold">Toll-Free 24x7 Emergency: 112 / 100</span>
            </div>
            <a
              href="tel:18004252026"
              className="bg-civic-amber text-ink-navy text-[0.85rem] font-bold px-4 py-2 rounded font-mono hover:bg-civic-amber-dark transition-colors"
            >
              Call 1800-425-2026
            </a>
          </div>
        </div>

        {/* Real Rich Map Component */}
        <div className="rounded-xl border border-line bg-paper overflow-hidden shadow-sm flex flex-col min-h-[380px]">
          <div className="bg-ink-navy px-5 py-3 flex items-center justify-between border-b border-white/10 text-paper">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-mono text-[0.78rem] uppercase tracking-wider text-civic-amber">
                ICCC Headquarters · Sector 4
              </span>
            </div>
            <span className="font-mono text-[0.72rem] text-paper/60">12.9716° N, 77.5946° E</span>
          </div>

          {/* Map Preview Graphic */}
          <div className="relative flex-1 bg-[#e5e3df] overflow-hidden min-h-[260px] flex items-center justify-center">
            {/* Stylized vector map background representation */}
            <svg
              className="absolute inset-0 w-full h-full object-cover"
              viewBox="0 0 600 400"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background terrain */}
              <rect width="600" height="400" fill="#f4f3f0" />
              {/* River water body */}
              <path
                d="M-20,90 Q150,140 280,100 T620,130 L620,200 Q400,160 250,220 T-20,180 Z"
                fill="#b8e2f2"
                opacity="0.9"
              />
              {/* Green parks */}
              <rect x="60" y="40" width="130" height="70" rx="12" fill="#c8e6c9" opacity="0.8" />
              <rect x="380" y="240" width="180" height="120" rx="16" fill="#c8e6c9" opacity="0.8" />
              
              {/* Major Roads Grid */}
              <line x1="0" y1="200" x2="600" y2="200" stroke="#ffffff" strokeWidth="16" />
              <line x1="0" y1="200" x2="600" y2="200" stroke="#ffd54f" strokeWidth="4" strokeDasharray="10 8" />
              <line x1="300" y1="0" x2="300" y2="400" stroke="#ffffff" strokeWidth="16" />
              <line x1="300" y1="0" x2="300" y2="400" stroke="#e0e0e0" strokeWidth="2" />
              
              {/* Secondary avenues */}
              <line x1="80" y1="0" x2="80" y2="400" stroke="#ffffff" strokeWidth="8" />
              <line x1="480" y1="0" x2="480" y2="400" stroke="#ffffff" strokeWidth="8" />
              <line x1="0" y1="310" x2="600" y2="310" stroke="#ffffff" strokeWidth="10" />
              <line x1="0" y1="90" x2="600" y2="90" stroke="#ffffff" strokeWidth="8" />
              
              {/* Metro Rail Line (Dotted Cyan) */}
              <path
                d="M 50,380 L 250,250 L 300,200 L 450,110 L 550,50"
                fill="none"
                stroke="#1E7A6C"
                strokeWidth="4"
                strokeDasharray="6 4"
              />
              
              {/* Metro Station Nodes */}
              <circle cx="250" cy="250" r="5" fill="#1E7A6C" stroke="#fff" strokeWidth="2" />
              <circle cx="450" cy="110" r="5" fill="#1E7A6C" stroke="#fff" strokeWidth="2" />
              
              {/* Center Landmark Pin */}
              <g transform="translate(300, 200)">
                <circle cx="0" cy="0" r="28" fill="#1E7A6C" opacity="0.2" className="animate-ping" />
                <circle cx="0" cy="0" r="14" fill="#0E1B2B" stroke="#ffffff" strokeWidth="3" />
                <circle cx="0" cy="0" r="6" fill="#F2A93B" />
              </g>
            </svg>

            {/* Floating Location Overlay Badge */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-lg border border-line shadow-md flex items-center justify-between gap-3">
              <div>
                <p className="text-[0.88rem] font-bold text-ink-navy flex items-center gap-1.5">
                  <span className="text-signal-red">📍</span> Orbit Smart City Headquarters
                </p>
                <p className="text-[0.76rem] text-slate-light font-mono mt-0.5">
                  Civic Square, Sector 4 · Metro Gate 2 (100m)
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=Smart+City+Corporation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[0.78rem] font-bold font-mono text-transit-teal bg-transit-teal/10 hover:bg-transit-teal/20 px-3 py-1.5 rounded transition-colors whitespace-nowrap"
              >
                Directions ↗
              </a>
            </div>
          </div>

          <div className="p-4 bg-paper flex items-center justify-between text-[0.8rem] text-slate-light border-t border-line">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Live Traffic: Smooth
            </span>
            <span className="font-mono">Public Parking Available (300+ Slots)</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
