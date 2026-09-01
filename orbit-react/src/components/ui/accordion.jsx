import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";

/**
 * shadcn/ui "Accordion" pattern on Radix's Accordion primitive.
 * Used to replace the FAQ section's static <details>-less card list
 * with a real single-open accordion, animated height + rotating
 * chevron, full keyboard support built in by Radix.
 */
export const Accordion = AccordionPrimitive.Root;

export function AccordionItem({ className, ...props }) {
  return (
    <AccordionPrimitive.Item
      className={cn("border-b border-line last:border-b-0", className)}
      {...props}
    />
  );
}

export function AccordionTrigger({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          "flex flex-1 items-center justify-between gap-4 py-5 text-left font-display font-semibold text-ink-navy transition-colors hover:text-civic-amber-dark [&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDown className="h-4 w-4 shrink-0 text-slate-light transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

export function AccordionContent({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Content
      className={cn(
        "overflow-hidden text-[0.92rem] text-slate-light data-[state=closed]:animate-[accordionUp_0.2s_ease-out] data-[state=open]:animate-[accordionDown_0.25s_ease-out]",
        className
      )}
      {...props}
    >
      <div className="pb-6 pt-0">{children}</div>
    </AccordionPrimitive.Content>
  );
}
