import Container from "./Container";
import SectionHeader from "./SectionHeader";
import IconBadge from "./IconBadge";
import { IconLeaf, IconRoute, IconBolt, IconTree } from "./Icons";

const cards = [
  {
    icon: IconLeaf,
    variant: "teal",
    title: "City Vision",
    text: "A digitally empowered, sustainable smart city where every civic service is accessible within 3 clicks for every resident.",
  },
  {
    icon: IconRoute,
    variant: "amber",
    title: "Citizen Mission",
    text: "Bridging the distance between 1.8M residents and municipal governance through transparent, paperless e-governance.",
  },
  {
    icon: IconBolt,
    variant: "navy",
    title: "Smart ICCC Initiatives",
    text: "Integrated Command & Control Centre (ICCC), smart SCADA water meters, adaptive traffic signals, and 24x7 sensor surveillance.",
  },
  {
    icon: IconTree,
    variant: "teal",
    title: "Sustainable 2030 Goals",
    text: "45% urban green cover, zero-landfill segregated waste processing, and 100% renewable rooftop solar adoption.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 lg:py-section">
      <Container>
        <SectionHeader
          eyebrow="About Orbit Smart City"
          title="Built for a Sustainable, Forward-Looking City."
          description="Orbit Smart City's Mission programme brings urban planning, green infrastructure, and digital citizen services onto a single resilient platform."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c) => (
            <div key={c.title} className="bg-paper border border-line rounded-lg p-6 shadow-xs hover:shadow-md transition-shadow">
              <IconBadge icon={c.icon} variant={c.variant} className="mb-4" />
              <h3 className="text-[1.08rem] font-display font-bold text-ink-navy mb-2">{c.title}</h3>
              <p className="text-[0.9rem] text-slate-light leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
