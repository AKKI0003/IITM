import Container from "./Container";
import { IconTwitter, IconFb, IconInsta } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-ink-navy text-paper/70 pt-16 pb-7 border-t border-white/[.06]">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-9 pb-10 border-b border-white/10">
          <div>
            <div className="flex items-center gap-[10px]">
              <span className="w-[34px] h-[34px] rounded-lg bg-gradient-to-br from-civic-amber to-transit-teal flex items-center justify-center text-ink-navy font-display font-bold text-[1.05rem]">
                O
              </span>
              <span className="font-display font-bold text-[1.15rem] text-paper">Orbit Smart City</span>
            </div>
            <p className="text-[0.88rem] mt-[14px] max-w-[280px] text-paper/55 leading-relaxed">
              A centralized digital governance and citizen service platform for the Municipal Corporation of Orbit Smart City, under the Smart Cities Mission.
            </p>
            <p className="text-[0.8rem] font-mono text-civic-amber mt-3">
              PIN: 560001 · Govt. of India
            </p>
          </div>

          <div>
            <h4 className="text-paper text-[0.82rem] uppercase tracking-[0.08em] mb-4 font-mono font-semibold">Quick Links</h4>
            <ul className="grid gap-[10px]">
              <li><a href="#services" className="text-[0.9rem] text-paper/65 hover:text-civic-amber transition-colors">Citizen Services</a></li>
              <li><a href="#transport" className="text-[0.9rem] text-paper/65 hover:text-civic-amber transition-colors">Metro & Bus Transit</a></li>
              <li><a href="#tourism" className="text-[0.9rem] text-paper/65 hover:text-civic-amber transition-colors">Tourism & Culture</a></li>
              <li><a href="#events" className="text-[0.9rem] text-paper/65 hover:text-civic-amber transition-colors">City Events</a></li>
              <li><a href="#gallery" className="text-[0.9rem] text-paper/65 hover:text-civic-amber transition-colors">Photo Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-paper text-[0.82rem] uppercase tracking-[0.08em] mb-4 font-mono font-semibold">Civic Portals</h4>
            <ul className="grid gap-[10px]">
              <li><a href="#departments" className="text-[0.9rem] text-paper/65 hover:text-civic-amber transition-colors">Departments</a></li>
              <li><a href="#news" className="text-[0.9rem] text-paper/65 hover:text-civic-amber transition-colors">Announcements & Tenders</a></li>
              <li><a href="#faq" className="text-[0.9rem] text-paper/65 hover:text-civic-amber transition-colors">Citizen FAQs</a></li>
              <li><a href="#feedback" className="text-[0.9rem] text-paper/65 hover:text-civic-amber transition-colors">Grievance / Feedback</a></li>
              <li><a href="#contact" className="text-[0.9rem] text-paper/65 hover:text-civic-amber transition-colors">Contact Directory</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-paper text-[0.82rem] uppercase tracking-[0.08em] mb-4 font-mono font-semibold">Emergency Contacts (India)</h4>
            <ul className="grid gap-[10px]">
              <li className="text-[0.9rem] text-paper/65 flex justify-between">
                <span>National Emergency / Police</span>
                <span className="text-civic-amber font-mono font-bold">112 / 100</span>
              </li>
              <li className="text-[0.9rem] text-paper/65 flex justify-between">
                <span>Fire & Rescue Brigade</span>
                <span className="text-civic-amber font-mono font-bold">101</span>
              </li>
              <li className="text-[0.9rem] text-paper/65 flex justify-between">
                <span>Ambulance & Trauma Care</span>
                <span className="text-civic-amber font-mono font-bold">108 / 102</span>
              </li>
              <li className="text-[0.9rem] text-paper/65 flex justify-between">
                <span>Women Safety Helpline</span>
                <span className="text-civic-amber font-mono font-bold">1091</span>
              </li>
              <li className="text-[0.9rem] text-paper/65 flex justify-between">
                <span>Disaster Management Cell</span>
                <span className="text-civic-amber font-mono font-bold">1077</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between items-center pt-6 text-[0.82rem] flex-wrap gap-3">
          <span>© 2026 Orbit Smart City Municipal Corporation. Designed under Smart Cities Mission, Ministry of Housing & Urban Affairs.</span>
          <div className="flex gap-3">
            <a href="#" aria-label="Twitter" className="w-[34px] h-[34px] rounded-full border border-white/[.18] flex items-center justify-center hover:bg-white/10 transition-colors">
              <IconTwitter className="w-[15px] h-[15px]" />
            </a>
            <a href="#" aria-label="Facebook" className="w-[34px] h-[34px] rounded-full border border-white/[.18] flex items-center justify-center hover:bg-white/10 transition-colors">
              <IconFb className="w-[15px] h-[15px]" />
            </a>
            <a href="#" aria-label="Instagram" className="w-[34px] h-[34px] rounded-full border border-white/[.18] flex items-center justify-center hover:bg-white/10 transition-colors">
              <IconInsta className="w-[15px] h-[15px]" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
