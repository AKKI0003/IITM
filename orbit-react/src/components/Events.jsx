import Container from "./Container";
import SectionHeader from "./SectionHeader";
import Button from "./Button";

const events = [
  {
    day: "15",
    month: "Aug",
    tag: "National Celebration",
    title: "Independence Day Civic Parade & Cultural Mela",
    text: "Civic Square Central Grounds · Flag hoisting, patriotic songs, flower shows, and public felicitation.",
    location: "Civic Square Ground",
  },
  {
    day: "28",
    month: "Aug",
    tag: "Sports & Fitness",
    title: "Orbit Smart City Annual Night Marathon (10K & 21K)",
    text: "Starts at Riverfront Promenade · Eco-friendly illuminated marathon promoting green urban living.",
    location: "Riverfront Promenade Gate 1",
  },
  {
    day: "10",
    month: "Sep",
    tag: "Innovation Expo",
    title: "National Smart City & Clean Mobility Expo 2026",
    text: "Orbit Smart City International Convention Centre · Showcasing EV infrastructure, IoT water sensors, and civic tech.",
    location: "Convention Centre, Sector 7",
  },
  {
    day: "24",
    month: "Sep",
    tag: "Cultural Festival",
    title: "Heritage Handloom & Food Festival",
    text: "Old Town Heritage Courtyard · Artisanal stalls, classical music concerts, and regional cuisines.",
    location: "Old Quarter Heritage Street",
  },
];

export default function Events() {
  return (
    <section id="events" className="py-16 lg:py-section">
      <Container>
        <SectionHeader
          eyebrow="Upcoming City Events"
          title="What's Happening in Orbit Smart City."
          description="Festivals, cleanliness drives, citizen hackathons, and cultural programmes across the city."
        />

        <div className="grid gap-4">
          {events.map((e) => (
            <div
              key={e.title}
              className="grid grid-cols-[72px_1fr] sm:grid-cols-[92px_1fr_auto] gap-[22px] items-center bg-paper border border-line rounded-lg px-6 py-5 hover:border-transit-teal/50 shadow-xs hover:shadow-sm transition-all"
            >
              <div className="bg-gradient-to-b from-mist to-paper rounded-md border border-line text-center py-[10px] font-mono shadow-xs">
                <span className="block text-[1.4rem] font-bold text-ink-navy">{e.day}</span>
                <span className="block text-[0.7rem] tracking-[0.1em] text-transit-teal uppercase font-bold">{e.month}</span>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="font-mono text-[0.66rem] uppercase text-transit-teal font-semibold tracking-[0.06em] bg-transit-teal/10 px-2 py-0.5 rounded">
                    {e.tag}
                  </span>
                  <span className="text-[0.76rem] text-slate-light font-mono">📍 {e.location}</span>
                </div>
                <h3 className="text-[1.05rem] font-display font-bold text-ink-navy mb-1">{e.title}</h3>
                <p className="text-[0.88rem] text-slate-light leading-relaxed">{e.text}</p>
              </div>
              <Button href="#events" variant="outline" className="col-span-2 sm:col-span-1 whitespace-nowrap">
                Event Pass & Details
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
