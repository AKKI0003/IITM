import Container from "./Container";
import SectionHeader from "./SectionHeader";
import SmartCalendar from "./calendar/SmartCalendar";

export default function Events() {
  return (
    <section id="events" className="py-16 lg:py-section">
      <Container>
        <SectionHeader
          eyebrow="Smart Event Calendar"
          title="What's Happening in Orbit Smart City."
          description="Festivals, cleanliness drives, citizen hackathons, and cultural programmes across the city. Tap any date to see everything happening that day."
        />

        <SmartCalendar />
      </Container>
    </section>
  );
}
