import Container from "./Container";
import SectionHeader from "./SectionHeader";

const items = [
  {
    image: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=800&q=80",
    media: "Riverfront Promenade",
    tag: "Eco Park",
    title: "Orbit Smart City Riverfront Promenade",
    text: "12 km of scenic walking and cycling trails along the waterfront with solar-lit gazebos and cafes.",
    timing: "Open daily: 5:00 AM – 10:00 PM",
  },
  {
    image: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?auto=format&fit=crop&w=800&q=80",
    media: "City Heritage Museum",
    tag: "Heritage",
    title: "City Heritage & Arts Museum",
    text: "Exquisite galleries and historical artifacts tracing 200+ years of regional culture and urban evolution.",
    timing: "Tue–Sun: 10:00 AM – 5:30 PM",
  },
  {
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    media: "Old Quarter Food Street",
    tag: "Gastronomy",
    title: "Old Quarter Food Street (Khaogali)",
    text: "Over 50 authentic food stalls and heritage sweet shops serving traditional delicacies and modern street food.",
    timing: "Daily: 4:00 PM – 1:00 AM",
  },
  {
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    media: "Lakeview Heritage District",
    tag: "Hospitality",
    title: "Lakeview Hotel & Resort Enclave",
    text: "Comfortable heritage stays and eco-resorts overlooking the calm lake, just minutes from the city center.",
    timing: "24/7 Citizen & Tourist Assistance",
  },
  {
    image: "https://images.unsplash.com/photo-1584467541268-b040f83be3fd?auto=format&fit=crop&w=800&q=80",
    media: "Central Botanical Gardens",
    tag: "Botanical Garden",
    title: "Central Botanical Gardens & Glasshouse",
    text: "Sprawling 120-acre green lung preserving over 600 indigenous tree and flower species, with guided nature walks.",
    timing: "Daily: 6:00 AM – 7:00 PM",
  },
  {
    image: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=800&q=80",
    media: "National Cultural Center",
    tag: "Exhibition",
    title: "National Cultural & Art Pavilion",
    text: "State-of-the-art auditorium and contemporary art exhibitions celebrating Indian classical and folk arts.",
    timing: "Daily: 10:00 AM – 8:00 PM",
  },
];

export default function Tourism() {
  return (
    <section id="tourism" className="py-16 lg:py-section bg-mist">
      <Container>
        <SectionHeader
          eyebrow="Tourism & Culture"
          title="Places Worth the Visit in Orbit Smart City."
          description="Explore world-class parks, heritage museums, culinary streets, and serene eco-resorts."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((t) => (
            <div
              key={t.title}
              className="group rounded-lg overflow-hidden border border-line bg-paper shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <div className="relative h-[200px] overflow-hidden bg-ink-navy">
                <img
                  src={t.image}
                  alt={t.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 font-mono text-[0.68rem] uppercase tracking-[0.08em] bg-ink-navy/85 backdrop-blur-sm text-civic-amber px-2.5 py-1 rounded-full font-semibold border border-white/10">
                  {t.tag}
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-[1.05rem] font-display font-bold text-ink-navy mb-2 group-hover:text-transit-teal transition-colors">
                    {t.title}
                  </h3>
                  <p className="text-[0.88rem] text-slate-light leading-relaxed mb-4">
                    {t.text}
                  </p>
                </div>
                <div className="pt-3 border-t border-line/60 flex items-center justify-between text-[0.78rem] text-slate-light font-mono">
                  <span>🕒 {t.timing}</span>
                  <span className="text-transit-teal font-semibold">Explore →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
