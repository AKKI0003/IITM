import Container from "./Container";
import Button from "./Button";

const stats = [
  ["1.8M", "Citizens Served"],
  ["98.4%", "Grievances Resolved"],
  ["42%", "Clean Solar Energy"],
  ["12", "Municipal Wards"],
];

function Skyline() {
  return (
    <div className="relative w-full max-w-[480px]">
      <svg viewBox="0 0 480 360" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-xl">
        <defs>
          <linearGradient id="skyFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1E7A6C" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#1E7A6C" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="buildingGrad1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2A4365" />
            <stop offset="100%" stopColor="#111B27" />
          </linearGradient>
          <linearGradient id="buildingGrad2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1E7A6C" />
            <stop offset="100%" stopColor="#0E1B2B" />
          </linearGradient>
        </defs>
        
        {/* Sky glow aura */}
        <circle cx="240" cy="150" r="140" fill="url(#skyFade)" />
        
        {/* Base line */}
        <g stroke="#F2A93B" strokeWidth="1.5" opacity="0.6">
          <line x1="0" y1="300" x2="480" y2="300" />
        </g>
        
        {/* Modern City Buildings */}
        <g stroke="#3B597B" strokeWidth="1">
          <rect x="36" y="180" width="48" height="120" rx="3" fill="url(#buildingGrad1)" />
          <rect x="92" y="140" width="44" height="160" rx="3" fill="url(#buildingGrad2)" />
          <rect x="144" y="200" width="38" height="100" rx="2" fill="url(#buildingGrad1)" />
          <rect x="190" y="110" width="56" height="190" rx="4" fill="url(#buildingGrad2)" />
          <rect x="254" y="160" width="42" height="140" rx="3" fill="url(#buildingGrad1)" />
          <rect x="304" y="90" width="50" height="210" rx="4" fill="url(#buildingGrad2)" />
          <rect x="362" y="190" width="38" height="110" rx="2" fill="url(#buildingGrad1)" />
          <rect x="408" y="150" width="44" height="150" rx="3" fill="url(#buildingGrad1)" />
        </g>
        
        {/* Glowing Windows & Antenna Towers */}
        <g fill="#F2A93B" opacity="0.9">
          {/* Radio antenna spire */}
          <line x1="218" y1="70" x2="218" y2="110" stroke="#F2A93B" strokeWidth="2" />
          <circle cx="218" cy="70" r="3" fill="#F2A93B" />
          <line x1="329" y1="50" x2="329" y2="90" stroke="#F2A93B" strokeWidth="2" />
          <circle cx="329" cy="50" r="3" fill="#F2A93B" />
          
          <rect x="44" y="195" width="7" height="9" rx="1" />
          <rect x="58" y="195" width="7" height="9" rx="1" />
          <rect x="44" y="215" width="7" height="9" rx="1" />
          <rect x="58" y="215" width="7" height="9" rx="1" />
          
          <rect x="100" y="155" width="7" height="9" rx="1" />
          <rect x="114" y="155" width="7" height="9" rx="1" />
          <rect x="100" y="175" width="7" height="9" rx="1" />
          
          <rect x="202" y="130" width="8" height="10" rx="1" />
          <rect x="220" y="130" width="8" height="10" rx="1" />
          <rect x="202" y="155" width="8" height="10" rx="1" />
          <rect x="220" y="155" width="8" height="10" rx="1" />
          <rect x="202" y="180" width="8" height="10" rx="1" />
          <rect x="220" y="180" width="8" height="10" rx="1" />
          
          <rect x="314" y="110" width="8" height="10" rx="1" />
          <rect x="330" y="110" width="8" height="10" rx="1" />
          <rect x="314" y="135" width="8" height="10" rx="1" />
          <rect x="330" y="135" width="8" height="10" rx="1" />
          
          <rect x="416" y="170" width="7" height="9" rx="1" />
          <rect x="432" y="170" width="7" height="9" rx="1" />
        </g>
        
        {/* Smart Green Corridor Trees & Sensor Beacons */}
        <g fill="#1E7A6C">
          <circle cx="20" cy="292" r="10" />
          <circle cx="180" cy="294" r="8" />
          <circle cx="298" cy="294" r="8" />
          <circle cx="460" cy="292" r="10" />
        </g>
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="bg-ink-navy text-paper pt-12 sm:pt-16 pb-14 overflow-hidden border-b border-white/10">
      <Container className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div>
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span className="inline-block font-mono text-[0.72rem] tracking-[0.14em] uppercase text-civic-amber bg-civic-amber/[.14] px-3 py-1 rounded-full border border-civic-amber/20 font-semibold">
              🇮🇳 Municipal Corporation of Orbit Smart City
            </span>
            <span className="font-mono text-[0.72rem] uppercase tracking-wider text-transit-teal bg-transit-teal/15 px-2.5 py-1 rounded-full">
              Smart Cities Mission
            </span>
          </div>
          
          <h1 className="text-paper text-[2.2rem] sm:text-[2.8rem] lg:text-[3.3rem] font-display font-bold leading-tight mb-5">
            One Unified Portal for Every <span className="text-civic-amber">City Service</span> in Orbit Smart City.
          </h1>
          <p className="text-paper/75 text-[1.05rem] max-w-[520px] mb-8 leading-relaxed">
            Pay property taxes, download verified DigiLocker certificates, track real-time bus/metro routes, and file civic grievances — built for citizens of Orbit Smart City.
          </p>
          <div className="flex gap-4 flex-wrap mb-10">
            <Button href="#services" variant="primary">
              Explore 40+ Online Services
            </Button>
            <Button href="#emergency" variant="ghost">
              24x7 Emergency Helplines
            </Button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/[.12] pt-6">
            {stats.map(([value, label]) => (
              <div key={label} className="bg-white/5 p-3 rounded-lg border border-white/5">
                <span className="font-mono text-[1.4rem] font-bold text-civic-amber block tracking-tight">
                  {value}
                </span>
                <span className="block mt-1 text-[0.72rem] text-paper/60 uppercase tracking-[0.06em] font-mono">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center h-full max-w-[420px] lg:max-w-none mx-auto" aria-hidden="true">
          <Skyline />
        </div>
      </Container>
    </section>
  );
}
