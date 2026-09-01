import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

/**
 * Canonical shadcn/ui "Button" pattern, adapted to the Orbit civic
 * color tokens (civic-amber / ink-navy / transit-teal) instead of the
 * default shadcn slate palette. CVA (class-variance-authority) is the
 * same variant engine shadcn/ui ships with.
 */
export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-[0.95rem] font-semibold transition-all duration-200 ease-out disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-civic-amber focus-visible:outline-offset-2 active:translate-y-0",
  {
    variants: {
      variant: {
        primary:
          "bg-civic-amber text-ink-navy shadow-[0_1px_0_rgba(0,0,0,0.05),0_4px_14px_-4px_rgba(242,169,59,0.55)] hover:bg-civic-amber-dark hover:shadow-[0_6px_20px_-4px_rgba(242,169,59,0.65)] hover:-translate-y-0.5",
        ghost:
          "bg-white/5 text-paper border-[1.5px] border-paper/25 backdrop-blur-sm hover:border-paper/60 hover:bg-white/10 hover:-translate-y-0.5",
        outline:
          "bg-transparent text-ink-navy border-[1.5px] border-ink-navy/80 hover:bg-ink-navy hover:text-paper hover:-translate-y-0.5",
        teal: "bg-transit-teal text-paper shadow-[0_4px_14px_-4px_rgba(30,122,108,0.55)] hover:bg-transit-teal-dark hover:-translate-y-0.5",
        link: "text-transit-teal underline-offset-4 hover:underline",
      },
      size: {
        default: "px-[26px] py-[13px]",
        sm: "px-4 py-2 text-xs",
        lg: "px-8 py-4 text-base",
        icon: "h-10 w-10 p-0",
      },
      block: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: { variant: "primary", size: "default", block: false },
  }
);

export default function Button({
  as = "a",
  href = "#",
  variant,
  size,
  block,
  className = "",
  children,
  ...props
}) {
  const Comp = as;
  const linkProps = as === "a" ? { href } : {};
  return (
    <Comp
      {...linkProps}
      className={cn(buttonVariants({ variant, size, block }), className)}
      {...props}
    >
      {children}
    </Comp>
  );
}
