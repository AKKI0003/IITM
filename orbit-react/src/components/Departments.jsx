import { useMemo, useState } from "react";
import Container from "./Container";
import SectionHeader from "./SectionHeader";

const depts = [
  { title: "Health & Sanitation", text: "Primary health centres, vector control & Swachhata" },
  { title: "Education & Libraries", text: "Smart municipal schools & digital learning centres" },
  { title: "Urban Transport", text: "Metro connectivity, EV buses & traffic planning" },
  { title: "Environment & Parks", text: "Urban afforestation, lake rejuvenation & air quality" },
  { title: "Public Works (PWD)", text: "Road infrastructure, flyovers & storm water drains" },
  { title: "Revenue & Tax", text: "Property tax assessment, trade licenses & town planning" },
];

export default function Departments() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () => depts.filter((d) => d.title.toLowerCase().includes(query.toLowerCase())),
    [query]
  );

  return (
    <section id="departments" className="py-16 lg:py-section">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <SectionHeader
            eyebrow="Municipal Departments"
            title="Orbit Smart City Municipal Corporation."
            description="Direct contact and nodal officers for each municipal administrative division."
            className="mb-0"
          />
          <div className="relative w-full sm:w-[240px] flex-shrink-0">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search departments…"
              aria-label="Search departments"
              className="w-full bg-paper border-b border-ink-navy/30 focus:border-civic-amber-dark outline-none py-2 text-[0.92rem] text-ink-navy placeholder:text-slate-light transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((d, i) => (
            <a
              key={d.title}
              href="#departments"
              className="group py-6 pr-6 border-b border-line lg:[&:nth-child(3n)]:border-r-0 lg:border-r"
            >
              <span className="font-mono text-[0.75rem] text-slate-light">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display text-[1.05rem] font-bold text-ink-navy mt-1 group-hover:text-civic-amber-dark transition-colors">
                {d.title}
              </h3>
              <p className="text-[0.85rem] text-slate-light leading-relaxed mt-1.5">{d.text}</p>
              <span className="inline-block mt-2 text-[0.76rem] font-mono text-ink-navy/70 group-hover:translate-x-1 transition-transform">
                View nodal officer →
              </span>
            </a>
          ))}
          {filtered.length === 0 && (
            <p className="col-span-full text-slate-light text-[0.92rem] py-8">No departments match "{query}".</p>
          )}
        </div>
      </Container>
    </section>
  );
}
