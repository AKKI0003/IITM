import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * cn() — the standard shadcn/ui class-merge helper.
 * Lets components accept a `className` override prop and safely
 * merge it with the component's own Tailwind classes without
 * conflicting utilities stacking up (e.g. two different `px-*`).
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
