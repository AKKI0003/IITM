import Container from "./Container";
import Button from "./Button";
import Grainient from "./Grainient";
import { IconTwitter, IconFb, IconInsta } from "./Icons";

function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-ink-navy text-paper py-20 sm:py-28">
      <div className="absolute inset-0" aria-hidden="true">
        <Grainient
          color1="#2A1B5E"
          color2="#0A0E1F"
          color3="#FF7A45"
          timeSpeed={0.24}
          warpStrength={1.35}
          warpAmplitude={58}
          warpFrequency={3.8}
          warpSpeed={2.2}
          grainAmount={0.09}
          contrast={1.5}
          saturation={1.4}
          zoom={1.5}
          centerY={0.15}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink-navy via-ink-navy/60 to-ink-navy/30 pointer-events-none" aria-hidden="true" />
      <Container className="relative text-center">
        <span className="font-mono text-[0.72rem] tracking-[0.16em] uppercase text-civic-amber-soft/80 border border-civic-amber-soft/20 rounded-full px-3 py-1 backdrop-blur-sm">
          Get Started
        </span>
        <h2 className="font-serif font-medium text-[2.2rem] sm:text-[3.4rem] leading-[1.02] tracking-[-0.02em] mt-5 max-w-[720px] mx-auto">
          Every civic service, <span className="italic text-civic-amber">one login away.</span>
        </h2>
        <p className="text-paper/65 text-[1.02rem] max-w-[480px] mx-auto mt-5">
          Create your citizen account to pay bills, track grievances, and receive priority alerts for your ward.
        </p>
        <div className="flex gap-4 flex-wrap justify-center mt-9">
          <Button href="#services" variant="primary">Create Citizen Account</Button>
          <Button href="#contact" variant="ghost">Talk to the Helpdesk</Button>
        </div>
      </Container>
    </section>
  );
}

export default function Footer() {
  return (
    <>
      <CtaBand />
      <footer className="bg-ink-navy text-paper/70 pt-16 pb-7 border-t border-paper/[.06]">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-9 pb-10 border-b border-paper/[.08]">
          <div>
            <div className="flex items-center gap-[10px]">
              <span className="w-[32px] h-[32px] rounded-full bg-civic-amber flex items-center justify-center text-ink-navy font-display font-bold text-[1rem]">
                O
              </span>
              <span className="font-display font-bold text-[1.1rem] text-paper">Orbit Smart City</span>
            </div>
            <p className="text-[0.88rem] mt-[14px] max-w-[280px] text-paper/55 leading-relaxed">
              A centralized digital governance and citizen service platform for the Municipal Corporation of Orbit Smart City, under the Smart Cities Mission.
            </p>
            <p className="text-[0.8rem] font-mono text-civic-amber-soft mt-3">
              PIN: 560001 · Govt. of India
            </p>
          </div>

          <div>
            <h4 className="text-paper text-[0.82rem] uppercase tracking-[0.08em] mb-4 font-mono font-semibold">Quick Links</h4>
            <ul className="grid gap-[10px]">
              <li><a href="#services" className="text-[0.9rem] text-paper/60 hover:text-civic-amber-soft transition-colors">Citizen Services</a></li>
              <li><a href="#transport" className="text-[0.9rem] text-paper/60 hover:text-civic-amber-soft transition-colors">Metro & Bus Transit</a></li>
              <li><a href="#tourism" className="text-[0.9rem] text-paper/60 hover:text-civic-amber-soft transition-colors">Tourism & Culture</a></li>
              <li><a href="#events" className="text-[0.9rem] text-paper/60 hover:text-civic-amber-soft transition-colors">City Events</a></li>
              <li><a href="#gallery" className="text-[0.9rem] text-paper/60 hover:text-civic-amber-soft transition-colors">Photo Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-paper text-[0.82rem] uppercase tracking-[0.08em] mb-4 font-mono font-semibold">Civic Portals</h4>
            <ul className="grid gap-[10px]">
              <li><a href="#departments" className="text-[0.9rem] text-paper/60 hover:text-civic-amber-soft transition-colors">Departments</a></li>
              <li><a href="#news" className="text-[0.9rem] text-paper/60 hover:text-civic-amber-soft transition-colors">Announcements & Tenders</a></li>
              <li><a href="#faq" className="text-[0.9rem] text-paper/60 hover:text-civic-amber-soft transition-colors">Citizen FAQs</a></li>
              <li><a href="#feedback" className="text-[0.9rem] text-paper/60 hover:text-civic-amber-soft transition-colors">Grievance / Feedback</a></li>
              <li><a href="#contact" className="text-[0.9rem] text-paper/60 hover:text-civic-amber-soft transition-colors">Contact Directory</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-paper text-[0.82rem] uppercase tracking-[0.08em] mb-4 font-mono font-semibold">Emergency Contacts (India)</h4>
            <ul className="grid gap-[10px]">
              <li className="text-[0.9rem] text-paper/65 flex justify-between">
                <span>National Emergency / Police</span>
                <span className="text-civic-amber-soft font-mono font-bold">112 / 100</span>
              </li>
              <li className="text-[0.9rem] text-paper/65 flex justify-between">
                <span>Fire & Rescue Brigade</span>
                <span className="text-civic-amber-soft font-mono font-bold">101</span>
              </li>
              <li className="text-[0.9rem] text-paper/65 flex justify-between">
                <span>Ambulance & Trauma Care</span>
                <span className="text-civic-amber-soft font-mono font-bold">108 / 102</span>
              </li>
              <li className="text-[0.9rem] text-paper/65 flex justify-between">
                <span>Women Safety Helpline</span>
                <span className="text-civic-amber-soft font-mono font-bold">1091</span>
              </li>
              <li className="text-[0.9rem] text-paper/65 flex justify-between">
                <span>Disaster Management Cell</span>
                <span className="text-civic-amber-soft font-mono font-bold">1077</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between items-center pt-6 text-[0.82rem] flex-wrap gap-3">
          <span>© 2026 Orbit Smart City Municipal Corporation. Designed under Smart Cities Mission, Ministry of Housing & Urban Affairs.</span>
          <div className="flex gap-3">
            <a href="#" aria-label="Twitter" className="w-[34px] h-[34px] rounded-full border border-paper/[.15] flex items-center justify-center hover:bg-paper/10 hover:border-paper/30 transition-colors">
              <IconTwitter className="w-[15px] h-[15px]" />
            </a>
            <a href="#" aria-label="Facebook" className="w-[34px] h-[34px] rounded-full border border-paper/[.15] flex items-center justify-center hover:bg-paper/10 hover:border-paper/30 transition-colors">
              <IconFb className="w-[15px] h-[15px]" />
            </a>
            <a href="#" aria-label="Instagram" className="w-[34px] h-[34px] rounded-full border border-paper/[.15] flex items-center justify-center hover:bg-paper/10 hover:border-paper/30 transition-colors">
              <IconInsta className="w-[15px] h-[15px]" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
    </>
  );
}
