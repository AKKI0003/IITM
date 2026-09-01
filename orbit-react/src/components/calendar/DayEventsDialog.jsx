import { Dialog, DialogContent, DialogClose } from "../ui/dialog";
import { cn } from "../../lib/utils";
import { CATEGORIES } from "../../data/calendarData";

function formatDateKey(dateKey) {
  if (!dateKey) return "";
  const [y, m, d] = dateKey.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-IN", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

function formatTime(t) {
  const [h, m] = t.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return `${hour12}:${String(m).padStart(2, "0")} ${period}`;
}

export default function DayEventsDialog({ open, onOpenChange, dateKey, events, onSelectEvent }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-4 sm:p-6">
        <div className="bg-paper w-full max-w-[480px] max-h-[80vh] overflow-y-auto rounded-2xl">
          <div className="sticky top-0 bg-paper px-6 pt-6 pb-4 flex items-start justify-between border-b border-line">
            <div>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-slate-light">
                {events.length} event{events.length !== 1 ? "s" : ""}
              </p>
              <h3 className="font-display text-[1.35rem] font-bold text-ink-navy mt-0.5">
                {formatDateKey(dateKey)}
              </h3>
            </div>
            <DialogClose className="w-8 h-8 rounded-full flex items-center justify-center text-slate-light hover:bg-mist hover:text-ink-navy transition-colors flex-shrink-0" aria-label="Close">
              ✕
            </DialogClose>
          </div>

          <div className="px-6 py-2">
            {events.map((ev, idx) => {
              const cat = CATEGORIES[ev.category];
              return (
                <button
                  key={ev.id}
                  type="button"
                  onClick={() => onSelectEvent(ev)}
                  className={cn(
                    "w-full text-left py-4 flex flex-col gap-1 group",
                    idx !== events.length - 1 && "border-b border-line"
                  )}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[0.76rem] text-slate-light">{formatTime(ev.startTime)}</span>
                    <span className={cn("font-mono text-[0.66rem] uppercase tracking-[0.08em] font-semibold px-2 py-0.5 rounded-full", cat.tint, cat.text)}>
                      {cat.label}
                    </span>
                  </div>
                  <span className="font-display font-semibold text-ink-navy group-hover:text-civic-amber-dark transition-colors">
                    {ev.title}
                  </span>
                  <span className="text-[0.82rem] text-slate-light">{ev.location}</span>
                </button>
              );
            })}
          </div>

          <div className="px-6 pb-6" />
        </div>
      </DialogContent>
    </Dialog>
  );
}
