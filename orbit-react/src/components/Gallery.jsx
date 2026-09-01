import { useCallback, useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import Container from "./Container";
import SectionHeader from "./SectionHeader";
import { Dialog, DialogContent, DialogClose } from "./ui/dialog";

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

/**
 * Full-screen gallery lightbox, built on Radix's Dialog primitive.
 * Radix handles: focus trap, Esc-to-close, aria-modal wiring, and
 * body scroll lock. We add: Next/Prev navigation, an image counter,
 * and ArrowLeft/ArrowRight keyboard support on top of Radix's own
 * Esc handling.
 */
function Lightbox({ index, onOpenChange, onNext, onPrev }) {
  const item = items[index];

  const handleKey = useCallback(
    (e) => {
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    },
    [onNext, onPrev]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  return (
    <Dialog open={index !== null} onOpenChange={onOpenChange}>
      <DialogContent aria-label={item?.label ?? "Gallery image"}>
        {item && (
          <>
            <DialogClose
              aria-label="Close"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/10 text-paper hover:bg-white/20 hover:rotate-90 transition-all duration-200 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-civic-amber"
            >
              <X className="w-6 h-6" />
            </DialogClose>

            <span className="absolute top-5 left-4 sm:top-6 sm:left-6 font-mono text-[0.72rem] tracking-[0.14em] uppercase text-paper/70">
              {index + 1} / {items.length}
            </span>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              aria-label="Previous image"
              className="absolute left-2 sm:left-6 z-10 inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 text-paper hover:bg-civic-amber hover:text-ink-navy transition-colors duration-200 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-civic-amber"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              aria-label="Next image"
              className="absolute right-2 sm:right-6 z-10 inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 text-paper hover:bg-civic-amber hover:text-ink-navy transition-colors duration-200 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-civic-amber"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="relative max-w-[92vw] sm:max-w-[86vw] lg:max-w-[70vw] max-h-[86vh] flex flex-col items-center px-4">
              <img
                key={item.image}
                src={item.image}
                alt={item.label}
                className="max-h-[68vh] w-auto object-contain rounded-md shadow-2xl"
              />
              <div className="mt-4 text-center">
                <span className="inline-block font-mono text-[0.68rem] tracking-[0.14em] uppercase text-civic-amber font-semibold mb-1">
                  {item.category}
                </span>
                <h3 className="text-paper font-display font-semibold text-[1.15rem] leading-snug">
                  {item.label}
                </h3>
                <p className="text-paper/70 text-[0.88rem] mt-1 max-w-[520px] mx-auto">{item.description}</p>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);

  const next = useCallback(() => setActiveIndex((i) => (i === null ? i : (i + 1) % items.length)), []);
  const prev = useCallback(() => setActiveIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length)), []);

  return (
    <section id="gallery" className="py-16 lg:py-section bg-mist">
      <Container>
        <SectionHeader
          eyebrow="Gallery"
          title="Orbit Smart City in Pictures."
          description="A glimpse of our vibrant landmarks, smart transit networks, heritage avenues, and lush public spaces. Tap any photo for a closer look."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((g, i) => (
            <button
              key={g.label}
              type="button"
              onClick={() => setActiveIndex(i)}
              aria-label={`Open ${g.label} in full screen`}
              className="group relative aspect-[4/3] sm:aspect-square rounded-lg overflow-hidden border border-line bg-ink-navy shadow-sm hover:shadow-lg transition-all duration-300 text-left focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-civic-amber focus-visible:outline-offset-2"
            >
              <img
                src={g.image}
                alt={g.label}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-navy/90 via-ink-navy/30 to-transparent flex flex-col justify-end p-4 transition-opacity duration-300">
                <span className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-civic-amber font-semibold mb-1">
                  {g.category}
                </span>
                <h3 className="text-white font-display font-semibold text-[0.98rem] leading-snug">{g.label}</h3>
                <p className="text-paper/75 text-[0.75rem] mt-1 line-clamp-2">{g.description}</p>
              </div>

              <span className="absolute top-3 right-3 inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/15 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <Maximize2 className="w-4 h-4" />
              </span>
            </button>
          ))}
        </div>
      </Container>

      <Lightbox
        index={activeIndex}
        onOpenChange={(open) => !open && setActiveIndex(null)}
        onNext={next}
        onPrev={prev}
      />
    </section>
  );
}
