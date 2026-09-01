import { motion } from "framer-motion";
import Container from "./Container";
import SectionHeader from "./SectionHeader";

const services = [
  {
    title: "Water Supply & Jal Seva",
    text: "Check ward supply timings, book emergency water tankers, report pipeline leakages, and pay water tax.",
    actionText: "Pay Water Bill",
  },
  {
    title: "Electricity & Solar Net-Metering",
    text: "Track power outages, submit rooftop solar net-meter readings, and apply for new electricity connections.",
    actionText: "Manage Power",
  },
  {
    title: "Swachh Waste Management",
    text: "Ward-wise door-to-door waste collection schedule, e-waste pickup, and bulk debris disposal requests.",
    actionText: "Request Pickup",
  },
  {
    title: "Property Tax & Trade License (BBPS)",
    text: "Pay municipal property tax, trade license renewal, and municipal challans via UPI, NetBanking, and RuPay.",
    actionText: "Pay Online (₹)",
  },
  {
    title: "Citizen Grievance Redressal (Nivaran)",
    text: "Log issues regarding potholes, streetlights, sanitation, or stray animals with geo-tagged photos and SMS tracking.",
    actionText: "File Grievance",
  },
  {
    title: "DigiLocker Civic Certificates",
    text: "Instant application and digital download of verified Birth, Death, Marriage, and Caste/Domicile certificates.",
    actionText: "Apply / Download",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 lg:py-section">
      <Container>
        <SectionHeader
          eyebrow="Citizen Services"
          title="Everyday Civic Services, Handled Online."
          description="From UPI bill payments to verified DigiLocker certificates, access all municipal services seamlessly 24x7."
        />

        <div>
          {services.map((s, i) => (
            <motion.a
              key={s.title}
              href="#feedback"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group grid grid-cols-[56px_1fr] sm:grid-cols-[80px_1fr_auto] gap-4 sm:gap-8 items-start sm:items-center py-7 border-b border-line hover:pl-2 transition-[padding] duration-300"
            >
              <span className="font-mono text-[0.95rem] text-slate-light/70 pt-1 sm:pt-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-[1.2rem] sm:text-[1.4rem] font-bold text-ink-navy group-hover:text-civic-amber-dark transition-colors">
                  {s.title}
                </h3>
                <p className="text-[0.92rem] text-slate-light leading-relaxed mt-1.5 max-w-[560px]">{s.text}</p>
              </div>
              <span className="hidden sm:inline-flex items-center text-[0.88rem] font-semibold text-ink-navy whitespace-nowrap group-hover:translate-x-1 transition-transform">
                {s.actionText} →
              </span>
            </motion.a>
          ))}
        </div>
      </Container>
    </section>
  );
}
