import { Dialog, DialogContent, DialogClose } from "../ui/dialog";
import { cn } from "../../lib/utils";
import { CATEGORIES } from "../../data/calendarData";
import Button from "../Button";

function formatDate(dateStr) {
  const [y, m, d] = dateStr.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-IN", { weekday: "short", month: "short", day: "numeric", year: "numeric" });
}

function formatTime(t) {
  const [h, m] = t.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return `${hour12}:${String(m).padStart(2, "0")} ${period}`;
}

export default function EventDetailDialog({ open, onOpenChange, event }) {
  if (!event) return null;
  const cat = CATEGORIES[event.category];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-4 sm:p-6">
        <div className="bg-paper w-full max-w-[520px] max-h-[85vh] overflow-y-auto rounded-2xl">
          <div className="px-7 pt-7 pb-2 flex items-start justify-between gap-4">
            <span className={cn("font-mono text-[0.68rem] uppercase tracking-[0.1em] font-semibold px-2.5 py-1 rounded-full", cat.tint, cat.text)}>
              {cat.label}
            </span>
            <DialogClose className="w-8 h-8 rounded-full flex items-center justify-center text-slate-light hover:bg-mist hover:text-ink-navy transition-colors flex-shrink-0" aria-label="Close">
              ✕
            </DialogClose>
          </div>

          <div className="px-7 pb-7">
            <h3 className="font-display text-[1.6rem] font-bold text-ink-navy leading-snug mt-2">
              {event.title}
            </h3>

            <div className="flex flex-wrap gap-x-6 gap-y-1.5 mt-4 font-mono text-[0.82rem] text-slate">
              <span>📅 {formatDate(event.date)}</span>
              <span>🕘 {formatTime(event.startTime)} – {formatTime(event.endTime)}</span>
              <span>📍 {event.location}</span>
            </div>

            <p className="text-[0.94rem] text-slate leading-relaxed mt-5">{event.description}</p>

            <div className="flex justify-between items-center mt-5 pt-5 border-t border-line text-[0.84rem] text-slate-light">
              <span>Organized by <span className="text-ink-navy font-medium">{event.organizer}</span></span>
              <span className="font-mono text-[0.76rem] text-civic-amber-dark">{event.status}</span>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              <Button variant="primary">Register / Get Pass</Button>
              <Button variant="outline">Get Directions</Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
