import { useMemo, useState } from "react";
import { cn } from "../../lib/utils";
import { eventsForDate, CATEGORIES } from "../../data/calendarData";
import DayEventsDialog from "./DayEventsDialog";
import EventDetailDialog from "./EventDetailDialog";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MAX_VISIBLE_PER_DAY = 2;

function toKey(y, m, d) {
  return `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
}

function buildMonthGrid(year, month) {
  const firstOfMonth = new Date(year, month, 1);
  const startOffset = firstOfMonth.getDay(); // 0 = Sunday
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  const cells = [];
  for (let i = 0; i < startOffset; i++) {
    const d = daysInPrevMonth - startOffset + 1 + i;
    cells.push({ day: d, inMonth: false, key: toKey(month === 0 ? year - 1 : year, month === 0 ? 11 : month - 1, d) });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, inMonth: true, key: toKey(year, month, d) });
  }
  while (cells.length % 7 !== 0) {
    const d = cells.length - (startOffset + daysInMonth) + 1;
    cells.push({ day: d, inMonth: false, key: toKey(month === 11 ? year + 1 : year, month === 11 ? 0 : month + 1, d) });
  }
  return cells;
}

export default function SmartCalendar() {
  // Default view lands on August 2026, where the demo data lives.
  const [cursor, setCursor] = useState(new Date(2026, 7, 1));
  const [dayDialogKey, setDayDialogKey] = useState(null);
  const [activeEvent, setActiveEvent] = useState(null);

  const year = cursor.getFullYear();
  const month = cursor.getMonth();

  const cells = useMemo(() => buildMonthGrid(year, month), [year, month]);

  const todayKey = useMemo(() => {
    const t = new Date();
    return toKey(t.getFullYear(), t.getMonth(), t.getDate());
  }, []);

  const monthLabel = cursor.toLocaleDateString("en-IN", { month: "long", year: "numeric" });

  function goToMonth(delta) {
    setCursor(new Date(year, month + delta, 1));
  }

  function goToToday() {
    const t = new Date();
    setCursor(new Date(t.getFullYear(), t.getMonth(), 1));
  }

  const dayDialogEvents = dayDialogKey ? eventsForDate(dayDialogKey) : [];

  return (
    <div>
      {/* Month navigation */}
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <h3 className="font-display text-[1.5rem] sm:text-[1.75rem] font-bold text-ink-navy tracking-tight">
          {monthLabel}
        </h3>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => goToMonth(-1)}
            aria-label="Previous month"
            className="w-9 h-9 rounded-full flex items-center justify-center text-slate hover:bg-mist transition-colors"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={goToToday}
            className="font-mono text-[0.72rem] uppercase tracking-[0.08em] px-3.5 py-2 rounded-full text-slate hover:bg-mist transition-colors"
          >
            Today
          </button>
          <button
            type="button"
            onClick={() => goToMonth(1)}
            aria-label="Next month"
            className="w-9 h-9 rounded-full flex items-center justify-center text-slate hover:bg-mist transition-colors"
          >
            ›
          </button>
        </div>
      </div>

      {/* Weekday header */}
      <div className="grid grid-cols-7 border-b border-line pb-2 mb-1">
        {WEEKDAYS.map((d) => (
          <div key={d} className="text-center font-mono text-[0.66rem] uppercase tracking-[0.1em] text-slate-light">
            {d}
          </div>
        ))}
      </div>

      {/* Month grid */}
      <div className="grid grid-cols-7">
        {cells.map((cell, i) => {
          const dayEvents = cell.inMonth ? eventsForDate(cell.key) : [];
          const visible = dayEvents.slice(0, MAX_VISIBLE_PER_DAY);
          const hidden = dayEvents.length - visible.length;
          const isToday = cell.key === todayKey;

          return (
            <button
              key={`${cell.key}-${i}`}
              type="button"
              disabled={dayEvents.length === 0}
              onClick={() => setDayDialogKey(cell.key)}
              className={cn(
                "min-h-[92px] sm:min-h-[112px] text-left px-2 py-2 sm:px-2.5 sm:py-2.5 border-b border-r border-line/70 transition-colors",
                i % 7 === 0 && "border-l",
                !cell.inMonth && "bg-transparent",
                cell.inMonth && dayEvents.length > 0 && "hover:bg-mist/70 cursor-pointer",
                dayEvents.length === 0 && "cursor-default"
              )}
            >
              <span
                className={cn(
                  "inline-flex items-center justify-center w-6 h-6 rounded-full font-mono text-[0.78rem]",
                  !cell.inMonth && "text-slate-light/40",
                  cell.inMonth && !isToday && "text-slate",
                  isToday && "bg-civic-amber text-ink-navy font-bold"
                )}
              >
                {cell.day}
              </span>

              {cell.inMonth && dayEvents.length > 0 && (
                <div className="mt-1.5 grid gap-1">
                  {visible.map((ev) => {
                    const cat = CATEGORIES[ev.category];
                    return (
                      <span key={ev.id} className="flex items-center gap-1.5 text-[0.72rem] leading-tight text-slate min-w-0">
                        <span className={cn("w-1.5 h-1.5 rounded-full flex-shrink-0", cat.swatch)} />
                        <span className="truncate">{ev.title}</span>
                      </span>
                    );
                  })}
                  {hidden > 0 && (
                    <span className="text-[0.72rem] font-semibold text-civic-amber-dark">+{hidden} more</span>
                  )}
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Category legend */}
      <div className="flex flex-wrap gap-x-5 gap-y-2 mt-7">
        {Object.entries(CATEGORIES).map(([key, cat]) => (
          <span key={key} className="flex items-center gap-1.5 text-[0.76rem] text-slate-light font-mono">
            <span className={cn("w-1.5 h-1.5 rounded-full", cat.swatch)} />
            {cat.label}
          </span>
        ))}
      </div>

      <DayEventsDialog
        open={Boolean(dayDialogKey)}
        onOpenChange={(open) => !open && setDayDialogKey(null)}
        dateKey={dayDialogKey}
        events={dayDialogEvents}
        onSelectEvent={(ev) => {
          setDayDialogKey(null);
          setActiveEvent(ev);
        }}
      />

      <EventDetailDialog
        open={Boolean(activeEvent)}
        onOpenChange={(open) => !open && setActiveEvent(null)}
        event={activeEvent}
      />
    </div>
  );
}
