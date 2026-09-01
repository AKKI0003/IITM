import Container from "./Container";
import SectionHeader from "./SectionHeader";

const news = [
  {
    tag: "Official Notice",
    title: "Property tax rebate window extended to 30 September 2026",
    text: "Citizens can avail an early-payment rebate of 5% on municipal property tax through UPI, NetBanking, and BBPS portal.",
    date: "Aug 18, 2026",
    badgeColor: "bg-emerald-100 text-emerald-800",
  },
  {
    tag: "Ward Advisory",
    title: "Scheduled Smart Grid maintenance in Ward 9 & Ward 11",
    text: "Power supply will be briefly regulated from 11 PM to 3 AM on Thursday for installation of smart meters.",
    date: "Aug 15, 2026",
    badgeColor: "bg-amber-100 text-amber-800",
  },
  {
    tag: "Metro Update",
    title: "Metro Purple Line extension operational from next month",
    text: "Six new elevated stations connecting Eastern Suburbs directly to Central Railway Station and Tech Park.",
    date: "Aug 10, 2026",
    badgeColor: "bg-teal-100 text-teal-800",
  },
];

export default function News() {
  return (
    <section id="news" className="py-16 lg:py-section bg-mist">
      <Container>
        <SectionHeader
          eyebrow="News & Press Releases"
          title="Stay Current on City Updates."
          description="Official civic notifications, tenders, traffic advisories, and municipal initiatives from Orbit Smart City."
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr_1fr] gap-6">
          {news.map((n) => (
            <div key={n.title} className="bg-paper border border-line rounded-xl p-6 flex flex-col justify-between shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div>
                <span className={`inline-block font-mono text-[0.68rem] uppercase font-semibold tracking-[0.06em] px-2.5 py-0.5 rounded-full ${n.badgeColor}`}>
                  {n.tag}
                </span>
                <h3 className="text-[1.08rem] font-display font-bold text-ink-navy mt-3 mb-2 leading-snug">
                  {n.title}
                </h3>
                <p className="text-[0.9rem] text-slate-light leading-relaxed mb-4">{n.text}</p>
              </div>
              <div className="pt-3 border-t border-line/60 flex items-center justify-between">
                <time className="font-mono text-[0.76rem] text-slate-light font-medium">{n.date}</time>
                <a href="#news" className="text-[0.82rem] font-semibold text-transit-teal hover:text-transit-teal-dark">
                  Read Circular →
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
