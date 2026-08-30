import Container from "./Container";
import SectionHeader from "./SectionHeader";

const faqs = [
  {
    q: "How can I pay my municipal Property Tax and Water Bill using UPI / NetBanking?",
    a: "Navigate to Citizen Services → Property Tax & Trade License. Enter your Property Assessment Number (PID / SAS Number) or Water Connection ID to view dues, then pay securely using any UPI app (GPay, PhonePe, Paytm, BHIM), NetBanking, or Credit/Debit card with zero transaction fees.",
  },
  {
    q: "What is the typical resolution turnaround time for citizen complaints?",
    a: "Standard civic issues (e.g. streetlights, garbage clearance, pothole repair) are attended within 24–48 hours. Major engineering works are resolved within 5–7 working days with live SMS and portal status updates.",
  },
  {
    q: "Can I download digitally signed Birth or Death certificates via DigiLocker?",
    a: "Yes. All approved birth, death, and marriage certificates issued by Orbit Smart City Municipal Corporation are linked to your Aadhaar/DigiLocker and carry a verifiable QR code with legal validity across India.",
  },
  {
    q: "Whom should I contact during an emergency or power/water breakdown?",
    a: "For general police, fire, or ambulance emergencies dial 112 or 100/101/108. For power grid failures, call 1912, and for emergency water tanker dispatch, call the Jal Helpline at 1800-425-2026.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-16 lg:py-section">
      <Container>
        <SectionHeader
          eyebrow="Citizen FAQs"
          title="Frequently Asked Questions."
          description="Quick answers regarding online services, DigiLocker certificates, tax payments, and grievance tracking."
        />

        <div className="grid gap-4 max-w-[820px]">
          {faqs.map((f) => (
            <div key={f.q} className="border border-line rounded-lg px-6 py-5 bg-paper shadow-xs hover:border-transit-teal/40 transition-colors">
              <h3 className="text-[1.02rem] font-display font-semibold text-ink-navy mb-2.5 flex gap-2.5 items-start">
                <span className="font-mono text-civic-amber-dark font-bold text-lg leading-none mt-0.5">Q.</span>
                <span>{f.q}</span>
              </h3>
              <p className="text-[0.92rem] text-slate-light leading-relaxed pl-6">{f.a}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
