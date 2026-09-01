// alertBus — a tiny pub/sub so any component can push a priority alert
// without prop-drilling a dispatcher down through the tree.
//
// Usage:
//   import { pushAlert } from "../lib/alertBus";
//   pushAlert({ priority: "critical", title: "...", message: "..." });
//
// AlertStack (components/alerts/AlertStack.jsx) is the sole subscriber —
// it owns the priority queue + merge logic and renders the floating UI.

const listeners = new Set();

/** Subscribe to new alerts. Returns an unsubscribe function. */
export function subscribeToAlerts(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

/**
 * Push a new alert onto the bus.
 * @param {Object} alert
 * @param {"critical"|"warning"|"info"} alert.priority
 * @param {string} alert.title
 * @param {string} [alert.message]
 * @param {string} [alert.category] - used for duplicate/merge matching;
 *   defaults to `title` if omitted.
 */
export function pushAlert(alert) {
  const payload = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    priority: "info",
    message: "",
    ...alert,
    category: alert.category || alert.title,
    createdAt: Date.now(),
  };
  listeners.forEach((listener) => listener(payload));
  return payload.id;
}
