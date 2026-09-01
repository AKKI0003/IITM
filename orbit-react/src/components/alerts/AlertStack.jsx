import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { subscribeToAlerts } from "../../lib/alertBus";
import { enqueueAlert, dismissAlert } from "../../lib/alertQueue";
import { IconAlert } from "../Icons";

// Auto-dismiss timing per priority — critical stays until the citizen
// closes it themselves, warning/info clear on their own.
const AUTO_DISMISS_MS = { critical: null, warning: 9000, info: 6000 };

const STYLES = {
  critical: {
    ring: "ring-signal-red/30",
    bar: "bg-signal-red",
    badge: "bg-signal-red/[.12] text-signal-red",
    label: "Critical",
  },
  warning: {
    ring: "ring-civic-amber/40",
    bar: "bg-civic-amber",
    badge: "bg-civic-amber/[.18] text-civic-amber-dark",
    label: "Warning",
  },
  info: {
    ring: "ring-transit-teal/30",
    bar: "bg-transit-teal",
    badge: "bg-transit-teal/10 text-transit-teal",
    label: "Info",
  },
};

export default function AlertStack() {
  const [queue, setQueue] = useState([]);

  useEffect(() => {
    return subscribeToAlerts((alert) => {
      setQueue((current) => enqueueAlert(current, alert));
    });
  }, []);

  const dismiss = useCallback((id) => {
    setQueue((current) => dismissAlert(current, id));
  }, []);

  // Per-alert auto-dismiss timers, re-armed whenever an alert merges
  // (its lastSeenAt / count changes) so a burst of duplicates keeps it
  // on screen instead of expiring mid-update.
  useEffect(() => {
    const timers = queue
      .filter((a) => AUTO_DISMISS_MS[a.priority])
      .map((a) =>
        setTimeout(() => dismiss(a.id), AUTO_DISMISS_MS[a.priority])
      );
    return () => timers.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queue.map((a) => `${a.id}:${a.count}:${a.lastSeenAt}`).join(","), dismiss]);

  if (queue.length === 0) return null;

  return (
    <div
      className="fixed top-[76px] right-4 z-[70] flex flex-col gap-2.5 w-[min(360px,calc(100vw-2rem))]"
      aria-live="polite"
      aria-label="Priority alerts"
    >
      <AnimatePresence initial={false}>
        {queue.map((alert) => {
          const s = STYLES[alert.priority] || STYLES.info;
          return (
            <motion.div
              key={alert.id}
              layout
              initial={{ opacity: 0, x: 40, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 40, scale: 0.96, transition: { duration: 0.18 } }}
              transition={{ type: "spring", stiffness: 420, damping: 32 }}
              className={`relative overflow-hidden rounded-lg bg-paper shadow-lg ring-1 ${s.ring} pl-3.5 pr-2.5 py-3`}
            >
              <span className={`absolute inset-y-0 left-0 w-1 ${s.bar}`} aria-hidden="true" />
              <div className="flex items-start gap-2.5">
                <span className={`mt-0.5 w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 ${s.badge}`}>
                  <IconAlert className="w-3.5 h-3.5" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className={`font-mono text-[0.65rem] uppercase tracking-[0.08em] ${s.badge} px-1.5 py-[1px] rounded`}>
                      {s.label}
                    </span>
                    {alert.count > 1 && (
                      <motion.span
                        key={alert.count}
                        initial={{ scale: 1.3 }}
                        animate={{ scale: 1 }}
                        className="font-mono text-[0.65rem] font-bold text-ink-navy bg-ink-navy/[.08] px-1.5 py-[1px] rounded-full"
                        title={`Merged ${alert.count} similar alerts`}
                      >
                        ×{alert.count}
                      </motion.span>
                    )}
                  </div>
                  <h4 className="text-[0.86rem] font-semibold text-ink-navy mt-1 leading-snug">
                    {alert.title}
                  </h4>
                  {alert.message && (
                    <p className="text-[0.78rem] text-slate-light mt-0.5 leading-snug">
                      {alert.message}
                    </p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => dismiss(alert.id)}
                  aria-label="Dismiss alert"
                  className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-slate-light/70 hover:text-ink-navy hover:bg-ink-navy/[.06] transition-colors text-[0.9rem] leading-none"
                >
                  ×
                </button>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
