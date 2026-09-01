import { useState } from "react";
import Container from "./Container";
import SectionHeader from "./SectionHeader";
import Button from "./Button";

const inputClass =
  "w-full font-body text-[0.94rem] px-[14px] py-[11px] border border-line rounded-md bg-paper text-ink-navy focus-visible:outline focus-visible:outline-[2px] focus-visible:outline-transit-teal focus-visible:outline-offset-1 transition-all";
const labelClass = "block text-[0.85rem] font-semibold text-ink-navy mb-2";

export default function Feedback() {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(5);

  return (
    <section id="feedback" className="py-16 lg:py-section">
      <Container>
        <SectionHeader
          eyebrow="Citizen Grievance & Feedback"
          title="Tell Us How We're Doing."
          description="Your feedback directly reaches the Municipal Commissioner's office to improve city infrastructure and civic utilities."
          center
        />

        <form
          className="max-w-[680px] mx-auto bg-paper border border-line rounded-xl p-[26px] sm:p-10 shadow-sm"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          {submitted ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                ✓
              </div>
              <h3 className="text-[1.3rem] font-display font-bold text-ink-navy mb-2">Thank you for your feedback!</h3>
              <p className="text-slate-light text-[0.95rem] mb-6">
                Your grievance/feedback ticket has been logged with reference ID <strong className="text-transit-teal font-mono">AMC-2026-8942</strong>. You will receive an SMS and email update.
              </p>
              <Button as="button" type="button" variant="outline" onClick={() => setSubmitted(false)}>
                Submit Another Response
              </Button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="fb-name" className={labelClass}>
                    Full Name <span className="text-signal-red">*</span>
                  </label>
                  <input
                    type="text"
                    id="fb-name"
                    name="name"
                    required
                    placeholder="e.g. Aarav Sharma"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="fb-phone" className={labelClass}>
                    Mobile Number <span className="text-signal-red">*</span>
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 text-[0.88rem] font-mono text-slate-light bg-mist border border-r-0 border-line rounded-l-md">
                      +91
                    </span>
                    <input
                      type="tel"
                      id="fb-phone"
                      name="phone"
                      required
                      placeholder="98765 43210"
                      pattern="[0-9]{10}"
                      className={`${inputClass} rounded-l-none`}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="fb-email" className={labelClass}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="fb-email"
                    name="email"
                    placeholder="aarav.sharma@example.in"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="fb-category" className={labelClass}>
                    Department / Category <span className="text-signal-red">*</span>
                  </label>
                  <select id="fb-category" name="category" className={inputClass} defaultValue="General Civic Services">
                    <option>General Civic Services</option>
                    <option>Water Supply & Drainage</option>
                    <option>Electricity & Streetlights</option>
                    <option>Roads, Potholes & Footpaths</option>
                    <option>Solid Waste Management</option>
                    <option>Metro & Bus Transport</option>
                    <option>Emergency Services & Police</option>
                    <option>Smart City Portal / App Support</option>
                  </select>
                </div>
              </div>

              <div className="mb-5">
                <label className={labelClass}>Overall Portal / City Service Rating</label>
                <div className="flex gap-2 items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className={`text-2xl transition-transform hover:scale-110 ${
                        star <= rating ? "text-amber-400" : "text-gray-300"
                      }`}
                    >
                      ★
                    </button>
                  ))}
                  <span className="text-[0.85rem] font-mono text-slate-light ml-2">
                    {rating === 5 ? "Excellent (5/5)" : `${rating}/5 Stars`}
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="fb-message" className={labelClass}>
                  Grievance or Suggestion Details <span className="text-signal-red">*</span>
                </label>
                <textarea
                  id="fb-message"
                  name="message"
                  required
                  placeholder="Please describe your experience, ward location, or suggestion in detail..."
                  className={`${inputClass} resize-y min-h-[110px]`}
                ></textarea>
                <span className="block text-[0.78rem] text-slate-light mt-1.5 font-mono">
                  You can track resolution status using your 10-digit mobile number.
                </span>
              </div>

              <Button as="button" type="submit" variant="primary" block>
                Submit Citizen Grievance / Feedback
              </Button>
            </>
          )}
        </form>
      </Container>
    </section>
  );
}
