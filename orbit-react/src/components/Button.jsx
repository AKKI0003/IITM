const variants = {
  primary:
    "bg-civic-amber text-ink-navy shadow-[0_1px_0_rgba(0,0,0,0.05),0_4px_14px_-4px_rgba(242,169,59,0.55)] hover:bg-civic-amber-dark hover:shadow-[0_6px_20px_-4px_rgba(242,169,59,0.65)] hover:-translate-y-0.5 active:translate-y-0",
  ghost:
    "bg-white/5 text-paper border-[1.5px] border-paper/25 backdrop-blur-sm hover:border-paper/60 hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0",
  outline:
    "bg-transparent text-ink-navy border-[1.5px] border-ink-navy/80 hover:bg-ink-navy hover:text-paper hover:-translate-y-0.5 active:translate-y-0",
};

export default function Button({ as = "a", href = "#", variant = "primary", block = false, className = "", children, ...props }) {
  const Comp = as;
  const linkProps = as === "a" ? { href } : {};
  return (
    <Comp
      {...linkProps}
      className={`inline-flex items-center gap-2 font-semibold text-[0.95rem] px-[26px] py-[13px] rounded-xl transition-all duration-200 ease-out focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-civic-amber focus-visible:outline-offset-2 ${variants[variant]} ${block ? "w-full justify-center" : ""} ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
}
