import NoticeBanner from "./components/NoticeBanner";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Emergency from "./components/Emergency";
import Transport from "./components/Transport";
import Tourism from "./components/Tourism";
import Events from "./components/Events";
import News from "./components/News";
import Departments from "./components/Departments";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import AlertStack from "./components/alerts/AlertStack";
import Reveal from "./components/ui/reveal";
import SectionDivider from "./components/ui/section-divider";

// Paper/ink hex values must match the Tailwind tokens in
// tailwind.config.js (colors.paper / colors.ink-navy) since inline SVG
// `fill` can't read Tailwind's CSS variables directly.
const PAPER = "#FAF8F3";
const INK_NAVY = "#101B2D";

export default function App() {
  return (
    <>
      {/* Navbar now floats as a fixed overlay (dynamic-island style), so
          everything else is pushed down to clear it instead of sitting
          in normal document flow above it. */}
      <Navbar />
      {/* Floating, fixed-position — lives outside the section flow so it
          can appear over any part of the page. */}
      <AlertStack />
      <div className="pt-[60px] sm:pt-[76px]">
        <NoticeBanner />

        {/* Hero is full-bleed ink-navy; divider bridges it into the
            paper-toned About section instead of a hard 1px cut. */}
        <Hero />
        <SectionDivider to={PAPER} />

      <About />

      <Reveal>
        <Services />
      </Reveal>

      {/* Emergency is also full-bleed ink-navy — bridge in both
          directions so it doesn't feel like a dropped-in black box. */}
      <SectionDivider to="#101B2D" flip />
      <Emergency />
      <SectionDivider to={PAPER} />

      <Reveal>
        <Transport />
      </Reveal>
      <Reveal>
        <Tourism />
      </Reveal>
      <Reveal>
        <Events />
      </Reveal>
      <Reveal>
        <News />
      </Reveal>
      <Reveal>
        <Departments />
      </Reveal>
      <Reveal>
        <Gallery />
      </Reveal>
      <Reveal>
        <FAQ />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
      <Reveal>
        <Feedback />
      </Reveal>
      <Footer />
      </div>
    </>
  );
}
