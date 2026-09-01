// alertQueue — pure queue-management logic for the Smart Priority Alert
// System, kept separate from the AlertStack component so the ordering
// and merge rules can be reasoned about (and tested) on their own.

export const PRIORITY_WEIGHT = { critical: 3, warning: 2, info: 1 };

// Two alerts are treated as "close together" if they land within this
// window of each other.
export const MERGE_WINDOW_MS = 8000;

/**
 * Decide whether `incoming` should merge into `existing` instead of
 * appearing as a second, separate alert.
 * Same category + same priority + arrived within the merge window.
 */
export function isDuplicate(existing, incoming) {
  return (
    existing.category === incoming.category &&
    existing.priority === incoming.priority &&
    incoming.createdAt - existing.lastSeenAt <= MERGE_WINDOW_MS
  );
}

/**
 * Insert a fresh alert into a queue, merging with a recent near-duplicate
 * or inserting in priority order (critical jumps ahead of warning/info;
 * same-priority alerts stay in arrival order).
 * Returns a NEW array (does not mutate `queue`).
 */
export function enqueueAlert(queue, incoming) {
  const dupIndex = queue.findIndex((a) => isDuplicate(a, incoming));

  if (dupIndex !== -1) {
    const merged = {
      ...queue[dupIndex],
      count: (queue[dupIndex].count || 1) + 1,
      lastSeenAt: incoming.createdAt,
      message: incoming.message || queue[dupIndex].message,
    };
    const next = queue.filter((_, i) => i !== dupIndex);
    return insertByPriority(next, merged);
  }

  return insertByPriority(queue, { ...incoming, count: 1, lastSeenAt: incoming.createdAt });
}

function insertByPriority(queue, alert) {
  const weight = PRIORITY_WEIGHT[alert.priority] ?? PRIORITY_WEIGHT.info;
  const insertAt = queue.findIndex((a) => (PRIORITY_WEIGHT[a.priority] ?? 1) < weight);
  const next = [...queue];
  if (insertAt === -1) {
    next.push(alert);
  } else {
    next.splice(insertAt, 0, alert);
  }
  return next;
}

export function dismissAlert(queue, id) {
  return queue.filter((a) => a.id !== id);
}
