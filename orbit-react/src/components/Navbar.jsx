import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  const navRef = useRef(null);
  const activeLinkRef = useRef(null);

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

  // Lock body scroll while the full-screen mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // A vertical mouse wheel over the nav strip normally does nothing
  // (there's nothing to vertically scroll), so translate it into
  // horizontal movement — the strip is otherwise only scrollable by
  // trackpad/touch drag, which reads as "can't be scrolled" on a mouse.
  useEffect(() => {
    const el = navRef.current;
    if (!el) return;
    const onWheel = (e) => {
      if (el.scrollWidth <= el.clientWidth) return;
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  // Keep the currently-active link scrolled into view as the page
  // scrolls — otherwise once you're a few sections down, the pill
  // marking "where you are" sits off-screen to the right and the
  // nav looks like it lost track of the page.
  useEffect(() => {
    activeLinkRef.current?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [active]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <motion.header
        layout
        transition={{ type: "spring", stiffness: 280, damping: 30 }}
        className={`pointer-events-auto mt-0 sm:mt-4 w-full ${
          scrolled ? "sm:max-w-[960px]" : "sm:max-w-[1180px]"
        } bg-ink-navy/35 backdrop-blur-md sm:rounded-full ring-1 ring-paper/[.08] shadow-[0_8px_30px_-8px_rgba(16,27,45,0.4)] relative before:absolute before:inset-0 before:sm:rounded-full before:bg-gradient-to-r before:from-civic-amber/[.06] before:via-transparent before:to-civic-amber/[.06] before:pointer-events-none transition-[max-width] duration-500`}
      >
        <Container className="flex items-center justify-between gap-3 py-2.5 sm:!px-4">
          <a href="#home" className="flex items-center gap-2.5 text-paper group flex-shrink-0">
            <span className="w-[32px] h-[32px] rounded-full bg-civic-amber flex items-center justify-center text-ink-navy font-display font-bold text-[0.95rem] transition-opacity group-hover:opacity-85">
              O
            </span>
            <span className="font-serif font-semibold text-[1rem] tracking-tight leading-tight text-paper hidden sm:inline whitespace-nowrap">
              Orbit Smart City
            </span>
          </a>

          {/* Desktop: every link, always visible, in a horizontally
              scrollable strip with a sliding active-pill indicator.
              Mouse-wheel is remapped to horizontal scroll above, and
              the active link auto-scrolls into view as sections change. */}
          <nav
            ref={navRef}
            aria-label="Primary"
            className="hidden lg:flex flex-1 min-w-0 items-center gap-0.5 overflow-x-auto scrollbar-none px-1 py-1 rounded-full bg-paper/[.04] ring-1 ring-inset ring-paper/[.06] [mask-image:linear-gradient(to_right,transparent,black_16px,black_calc(100%-16px),transparent)]"
          >
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                ref={active === href ? activeLinkRef : null}
                className={`relative flex-shrink-0 font-mono text-[0.72rem] uppercase tracking-[0.06em] px-3.5 py-2 rounded-full whitespace-nowrap transition-colors duration-200 ${
                  active === href ? "text-ink-navy font-semibold" : "text-paper/60 hover:text-paper"
                }`}
              >
                {active === href && (
                  <motion.span
                    layoutId="nav-active-pill"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    className="absolute inset-0 bg-civic-amber rounded-full -z-10 shadow-[0_2px_10px_-2px_rgba(217,146,47,0.6)]"
                  />
                )}
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 flex-shrink-0">
            <Button href="#services" variant="primary" className="hidden sm:inline-flex text-xs py-2 px-3.5 flex-shrink-0 whitespace-nowrap">
              Citizen Services
            </Button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full text-paper/80 hover:text-paper hover:bg-paper/[.08]"
              aria-label="Toggle Menu"
              aria-expanded={mobileMenuOpen}
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
        </Container>
      </motion.header>

      {/* Mobile: full-screen immersive overlay instead of a cramped
          inline reflow — stagger-animates the link list in. */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-0 z-40 bg-ink-navy/98 backdrop-blur-xl pointer-events-auto flex flex-col pt-24 px-6 pb-8 overflow-y-auto"
          >
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {links.map(([label, href], i) => (
                <motion.a
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.035, ease: [0.22, 1, 0.36, 1] }}
                  className={`font-serif text-[1.7rem] py-2.5 border-b border-paper/[.08] transition-colors ${
                    active === href ? "text-civic-amber" : "text-paper/85 hover:text-paper"
                  }`}
                >
                  {label}
                </motion.a>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-auto pt-8"
            >
              <Button href="#services" variant="primary" className="w-full justify-center" onClick={() => setMobileMenuOpen(false)}>
                Citizen Services
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}