import Container from "./Container";
import SectionHeader from "./SectionHeader";
import IconBadge from "./IconBadge";
import { IconCross, IconCap, IconBus, IconLeaf, IconWrench, IconPayment } from "./Icons";

const depts = [
  { icon: IconCross, variant: "teal", title: "Health & Sanitation", text: "Primary health centres, vector control & Swachhata" },
  { icon: IconCap, variant: "amber", title: "Education & Libraries", text: "Smart municipal schools & digital learning centres" },
  { icon: IconBus, variant: "navy", title: "Urban Transport", text: "Metro connectivity, EV buses & traffic planning" },
  { icon: IconLeaf, variant: "teal", title: "Environment & Parks", text: "Urban afforestation, lake rejuvenation & air quality" },
  { icon: IconWrench, variant: "amber", title: "Public Works (PWD)", text: "Road infrastructure, flyovers & storm water drains" },
  { icon: IconPayment, variant: "navy", title: "Revenue & Tax", text: "Property tax assessment, trade licenses & town planning" },
];

export default function Departments() {
  return (
    <section id="departments" className="py-16 lg:py-section">
      <Container>
        <SectionHeader
          eyebrow="Municipal Departments"
          title="Orbit Smart City Municipal Corporation."
          description="Direct contact and nodal officers for each municipal administrative division."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {depts.map((d) => (
            <div
              key={d.title}
              className="text-center px-4 py-6 border border-line rounded-lg bg-paper shadow-xs hover:border-transit-teal/50 hover:shadow-sm transition-all flex flex-col justify-between items-center"
            >
              <div>
                <IconBadge icon={d.icon} variant={d.variant} className="mx-auto mb-3" />
                <h3 className="text-[0.92rem] font-display font-bold text-ink-navy mb-1.5">{d.title}</h3>
                <p className="text-[0.78rem] text-slate-light leading-relaxed">{d.text}</p>
              </div>
              <a href="#departments" className="mt-3 text-[0.75rem] font-mono text-transit-teal font-semibold hover:underline">
                View Nodal Officer →
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
