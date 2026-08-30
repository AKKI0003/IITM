import { useState } from "react";
import Container from "./Container";
import Button from "./Button";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Services", "#services"],
  ["Emergency", "#emergency"],
  ["Transport", "#transport"],
  ["Tourism", "#tourism"],
  ["Events", "#events"],
  ["News", "#news"],
  ["Departments", "#departments"],
  ["Gallery", "#gallery"],
  ["FAQs", "#faq"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-ink-navy border-b border-white/[.08] sticky top-0 z-50 backdrop-blur-md bg-ink-navy/95">
      <Container className="flex items-center justify-between gap-4 py-3.5 flex-wrap">
        <a href="#home" className="flex items-center gap-3 text-paper group">
          <span className="w-[38px] h-[38px] rounded-xl bg-gradient-to-br from-civic-amber to-transit-teal flex items-center justify-center text-ink-navy font-display font-bold text-[1.15rem] shadow-sm group-hover:rotate-6 transition-transform">
            O
          </span>
          <span>
            <span className="block font-display font-bold text-[1.15rem] tracking-[0.01em] leading-tight">
              Orbit Smart City <span className="text-civic-amber text-xs font-mono font-normal">Gov Portal</span>
            </span>
            <span className="block font-mono text-[0.65rem] tracking-[0.1em] uppercase text-paper/70">
              Smart City Mission · India
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden xl:flex flex-wrap gap-0.5 items-center" aria-label="Primary">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-paper/[.78] text-[0.84rem] font-medium px-2.5 py-1.5 rounded-md transition-colors duration-150 hover:text-paper hover:bg-white/[.08]"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button href="#services" variant="primary" className="hidden sm:inline-flex text-xs py-2 px-3.5 flex-shrink-0">
            Citizen Services
          </Button>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-md text-paper/80 hover:text-white hover:bg-white/10"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile dropdown nav */}
        {mobileMenuOpen && (
          <div className="w-full xl:hidden border-t border-white/10 pt-3 pb-2 mt-2">
            <nav className="grid grid-cols-2 sm:grid-cols-3 gap-1" aria-label="Mobile">
              {links.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-paper/80 text-[0.85rem] font-medium px-3 py-2 rounded hover:bg-white/10 hover:text-white transition-colors"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
