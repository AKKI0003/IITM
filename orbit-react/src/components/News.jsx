import Container from "./Container";
import SectionHeader from "./SectionHeader";

const news = [
  {
    tag: "Official Notice",
    title: "Property tax rebate window extended to 30 September 2026",
    text: "Citizens can avail an early-payment rebate of 5% on municipal property tax through UPI, NetBanking, and the BBPS portal — the largest single-year rebate window the Corporation has offered.",
    date: "Aug 18, 2026",
    featured: true,
  },
  {
    tag: "Ward Advisory",
    title: "Scheduled Smart Grid maintenance in Ward 9 & Ward 11",
    text: "Power supply will be briefly regulated from 11 PM to 3 AM on Thursday for installation of smart meters.",
    date: "Aug 15, 2026",
  },
  {
    tag: "Metro Update",
    title: "Metro Purple Line extension operational from next month",
    text: "Six new elevated stations connecting Eastern Suburbs directly to Central Railway Station and Tech Park.",
    date: "Aug 10, 2026",
  },
];

export default function News() {
  const [featured, ...rest] = news;

  return (
    <section id="news" className="py-16 lg:py-section">
      <Container>
        <SectionHeader
          eyebrow="News & Press Releases"
          title="Stay Current on City Updates."
          description="Official civic notifications, tenders, traffic advisories, and municipal initiatives from Orbit Smart City."
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16">
          {/* Featured story — asymmetric, no card container */}
          <a href="#news" className="group block border-t-2 border-ink-navy pt-6">
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-civic-amber-dark font-semibold">
              {featured.tag}
            </span>
            <h3 className="font-display text-[1.7rem] sm:text-[2.1rem] font-bold text-ink-navy leading-snug mt-3 group-hover:text-civic-amber-dark transition-colors">
              {featured.title}
            </h3>
            <p className="text-slate-light text-[1rem] leading-relaxed mt-4 max-w-[520px]">{featured.text}</p>
            <time className="block font-mono text-[0.8rem] text-slate-light mt-5">{featured.date}</time>
          </a>

          {/* Secondary stories — plain list, divider only */}
          <div className="border-t-2 border-line pt-6">
            {rest.map((n) => (
              <a key={n.title} href="#news" className="group block py-6 border-b border-line last:border-b-0">
                <span className="font-mono text-[0.66rem] uppercase tracking-[0.08em] text-slate-light">
                  {n.tag} · {n.date}
                </span>
                <h4 className="font-display text-[1.05rem] font-bold text-ink-navy leading-snug mt-1.5 group-hover:text-civic-amber-dark transition-colors">
                  {n.title}
                </h4>
                <p className="text-[0.86rem] text-slate-light leading-relaxed mt-1.5">{n.text}</p>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
