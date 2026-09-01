import Container from "./Container";
import SectionHeader from "./SectionHeader";

const items = [
  {
    image: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=800&q=80",
    tag: "Eco Park",
    title: "Riverfront Promenade",
    text: "12 km of scenic walking and cycling trails along the waterfront with solar-lit gazebos and cafes.",
    timing: "Daily 5:00 AM – 10:00 PM",
  },
  {
    image: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?auto=format&fit=crop&w=800&q=80",
    tag: "Heritage",
    title: "City Heritage & Arts Museum",
    text: "Exquisite galleries and historical artifacts tracing 200+ years of regional culture and urban evolution.",
    timing: "Tue–Sun 10:00 AM – 5:30 PM",
  },
  {
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    tag: "Gastronomy",
    title: "Old Quarter Food Street",
    text: "Over 50 authentic food stalls and heritage sweet shops serving traditional delicacies and modern street food.",
    timing: "Daily 4:00 PM – 1:00 AM",
  },
  {
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    tag: "Hospitality",
    title: "Lakeview Hotel & Resort Enclave",
    text: "Comfortable heritage stays and eco-resorts overlooking the calm lake, minutes from the city centre.",
    timing: "24/7 Citizen & Tourist Assistance",
  },
  {
    image: "https://images.unsplash.com/photo-1584467541268-b040f83be3fd?auto=format&fit=crop&w=800&q=80",
    tag: "Botanical Garden",
    title: "Central Botanical Gardens",
    text: "Sprawling 120-acre green lung preserving over 600 indigenous species, with guided nature walks.",
    timing: "Daily 6:00 AM – 7:00 PM",
  },
  {
    image: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=800&q=80",
    tag: "Exhibition",
    title: "National Cultural & Art Pavilion",
    text: "State-of-the-art auditorium and contemporary art exhibitions celebrating Indian classical and folk arts.",
    timing: "Daily 10:00 AM – 8:00 PM",
  },
];

export default function Tourism() {
  return (
    <section id="tourism" className="py-16 lg:py-section bg-mist overflow-hidden">
      <Container>
        <SectionHeader
          eyebrow="Tourism & Culture"
          title="Places Worth the Visit in Orbit Smart City."
          description="Explore world-class parks, heritage museums, culinary streets, and serene eco-resorts. Scroll to browse."
        />
      </Container>

      {/* Horizontal editorial scroll instead of a uniform 3-col card
          grid — image does the talking, no borders or shadows. */}
      <div className="flex gap-6 overflow-x-auto pb-4 pl-5 sm:pl-8 pr-5 sm:pr-8 snap-x snap-mandatory scrollbar-none">
        {items.map((t) => (
          <a
            key={t.title}
            href="#tourism"
            className="group relative flex-shrink-0 w-[280px] sm:w-[340px] h-[420px] rounded-2xl overflow-hidden snap-start"
          >
            <img
              src={t.image}
              alt={t.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-navy/95 via-ink-navy/20 to-transparent" />
            <div className="relative h-full flex flex-col justify-end p-6">
              <span className="font-mono text-[0.68rem] tracking-[0.1em] uppercase text-civic-amber font-semibold mb-2">
                {t.tag}
              </span>
              <h3 className="text-paper font-display font-bold text-[1.25rem] leading-snug">{t.title}</h3>
              <p className="text-paper/75 text-[0.85rem] mt-2 leading-relaxed">{t.text}</p>
              <p className="text-paper/55 font-mono text-[0.72rem] mt-3">{t.timing}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
