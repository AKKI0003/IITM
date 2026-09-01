import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
  const [islandOpen, setIslandOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  // Compress into a floating pill after the hero starts scrolling away.
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 80);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Section-aware active indicator.
  useEffect(() => {
    const sections = links
      .map(([, href]) => document.querySelector(href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <motion.header
        layout
        transition={{ type: "spring", stiffness: 280, damping: 30 }}
        onMouseEnter={() => setIslandOpen(true)}
        onMouseLeave={() => setIslandOpen(false)}
        className={`pointer-events-auto mt-0 sm:mt-4 w-full ${
          scrolled ? "sm:max-w-[860px]" : "sm:max-w-[1200px]"
        } bg-ink-navy/95 backdrop-blur-md sm:rounded-full transition-[max-width] duration-500`}
      >
        <Container className="flex items-center justify-between gap-4 py-3 flex-wrap sm:!px-6">
          <a href="#home" className="flex items-center gap-2.5 text-paper group">
            <span className="w-[32px] h-[32px] rounded-full bg-civic-amber flex items-center justify-center text-ink-navy font-display font-bold text-[0.95rem] transition-opacity group-hover:opacity-85">
              O
            </span>
            <span className="font-display font-bold text-[1rem] tracking-[0.01em] leading-tight text-paper hidden sm:inline">
              Orbit Smart City
            </span>
          </a>

          {/* Desktop: compact "dynamic island" nav — shows the active section,
              expands to the full link list on hover/click. */}
          <nav
            className="hidden xl:flex items-center gap-0.5 relative"
            aria-label="Primary"
            onClick={() => setIslandOpen((v) => !v)}
          >
            {!islandOpen && (
              <span className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-paper/70 px-3 py-1.5 cursor-pointer select-none">
                {links.find(([, href]) => href === active)?.[0] ?? "Menu"} · tap to browse
              </span>
            )}
            {islandOpen &&
              links.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setIslandOpen(false)}
                  className={`text-[0.8rem] font-medium px-2.5 py-1.5 rounded-full transition-colors duration-150 whitespace-nowrap ${
                    active === href ? "text-ink-navy bg-civic-amber" : "text-paper/70 hover:text-paper hover:bg-paper/[.08]"
                  }`}
                >
                  {label}
                </a>
              ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button href="#services" variant="primary" className="hidden sm:inline-flex text-xs py-2 px-3.5 flex-shrink-0">
              Citizen Services
            </Button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-full text-paper/80 hover:text-paper hover:bg-paper/[.08]"
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

          {mobileMenuOpen && (
            <div className="w-full xl:hidden border-t border-paper/[.08] pt-3 pb-2 mt-2">
              <nav className="grid grid-cols-2 sm:grid-cols-3 gap-1" aria-label="Mobile">
                {links.map(([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-[0.85rem] font-medium px-3 py-2 rounded-full transition-colors ${
                      active === href ? "text-ink-navy bg-civic-amber" : "text-paper/75 hover:bg-paper/[.08] hover:text-paper"
                    }`}
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </Container>
      </motion.header>
    </div>
  );
}
