import Container from "./Container";
import SectionHeader from "./SectionHeader";

const items = [
  {
    label: "Civic Square",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80",
    description: "Central municipal plaza & citizen convention square",
  },
  {
    label: "Riverfront Promenade",
    category: "Waterfront",
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80",
    description: "12 km eco-friendly landscaped waterfront pathway",
  },
  {
    label: "Heritage Old Quarter",
    category: "Heritage",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
    description: "Century-old cultural bazaars and traditional architecture",
  },
  {
    label: "Metro Interchange Station",
    category: "Transit",
    image: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=800&q=80",
    description: "High-speed multimodal transit hub connecting all 12 wards",
  },
  {
    label: "Central Botanical Gardens",
    category: "Eco Zone",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80",
    description: "Over 600 indigenous flora species and shaded walkways",
  },
  {
    label: "Night Food & Craft Market",
    category: "Culture",
    image: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=800&q=80",
    description: "Bustling evening artisanal market and authentic food stalls",
  },
  {
    label: "Orbit Smart City Municipal Corporation Hall",
    category: "Governance",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80",
    description: "Historic administrative headquarters and civic center",
  },
  {
    label: "Cable Heritage Bridge",
    category: "Landmark",
    image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=800&q=80",
    description: "Iconic illuminated cable-stayed river link",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 lg:py-section bg-mist">
      <Container>
        <SectionHeader
          eyebrow="Gallery"
          title="Orbit Smart City in Pictures."
          description="A glimpse of our vibrant landmarks, smart transit networks, heritage avenues, and lush public spaces."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((g) => (
            <div
              key={g.label}
              className="group relative aspect-[4/3] sm:aspect-square rounded-lg overflow-hidden border border-line bg-ink-navy shadow-sm hover:shadow-md transition-all duration-300"
            >
              <img
                src={g.image}
                alt={g.label}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink-navy/90 via-ink-navy/30 to-transparent flex flex-col justify-end p-4 transition-opacity duration-300">
                <span className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-civic-amber font-semibold mb-1">
                  {g.category}
                </span>
                <h3 className="text-white font-display font-semibold text-[0.98rem] leading-snug">
                  {g.label}
                </h3>
                <p className="text-paper/75 text-[0.75rem] mt-1 line-clamp-2">
                  {g.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
