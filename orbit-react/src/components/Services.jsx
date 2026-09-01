import Container from "./Container";
import SectionHeader from "./SectionHeader";
import IconBadge from "./IconBadge";
import { IconWater, IconBolt, IconWaste, IconPayment, IconComplaint, IconCert } from "./Icons";

const services = [
  {
    icon: IconWater,
    variant: "teal",
    title: "Water Supply & Jal Seva",
    text: "Check ward supply timings, book emergency water tankers, report pipeline leakages, and pay water tax.",
    actionText: "Pay Water Bill",
  },
  {
    icon: IconBolt,
    variant: "amber",
    title: "Electricity & Solar Net-Metering",
    text: "Track power outages, submit rooftop solar net-meter readings, and apply for new electricity connections.",
    actionText: "Manage Power",
  },
  {
    icon: IconWaste,
    variant: "navy",
    title: "Swachh Waste Management",
    text: "Ward-wise door-to-door waste collection schedule, e-waste pickup, and bulk debris disposal requests.",
    actionText: "Request Pickup",
  },
  {
    icon: IconPayment,
    variant: "teal",
    title: "Property Tax & Trade License (BBPS)",
    text: "Pay municipal property tax, trade license renewal, and municipal challans via UPI, NetBanking, and RuPay.",
    actionText: "Pay Online (₹)",
  },
  {
    icon: IconComplaint,
    variant: "amber",
    title: "Citizen Grievance Redressal (Nivaran)",
    text: "Log issues regarding potholes, streetlights, sanitation, or stray animals with geo-tagged photos and SMS tracking.",
    actionText: "File Grievance",
  },
  {
    icon: IconCert,
    variant: "navy",
    title: "DigiLocker Civic Certificates",
    text: "Instant application and digital download of verified Birth, Death, Marriage, and Caste/Domicile certificates.",
    actionText: "Apply / Download",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 lg:py-section bg-mist">
      <Container>
        <SectionHeader
          eyebrow="Citizen Services"
          title="Everyday Civic Services, Handled Online."
          description="From UPI bill payments to verified DigiLocker certificates, access all municipal services seamlessly 24x7."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-paper border border-line border-l-[4px] border-l-transit-teal rounded-xl p-7 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <IconBadge icon={s.icon} variant={s.variant} />
                <h3 className="text-[1.1rem] font-display font-bold text-ink-navy mt-4 mb-2">{s.title}</h3>
                <p className="text-[0.9rem] text-slate-light leading-relaxed mb-5">{s.text}</p>
              </div>
              <a
                href="#feedback"
                className="inline-flex items-center text-[0.88rem] font-semibold text-transit-teal-dark hover:text-transit-teal transition-colors"
              >
                {s.actionText} →
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
