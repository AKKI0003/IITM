const variants = {
  primary: "bg-civic-amber text-ink-navy hover:bg-civic-amber-dark",
  ghost: "bg-transparent text-paper border-[1.5px] border-paper/35 hover:border-paper",
  outline: "bg-transparent text-ink-navy border-[1.5px] border-ink-navy hover:bg-ink-navy hover:text-paper",
};

export default function Button({ as = "a", href = "#", variant = "primary", block = false, className = "", children, ...props }) {
  const Comp = as;
  const linkProps = as === "a" ? { href } : {};
  return (
    <Comp
      {...linkProps}
      className={`inline-flex items-center gap-2 font-semibold text-[0.95rem] px-[26px] py-[13px] rounded-sm transition-transform duration-150 ease-in-out focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-civic-amber focus-visible:outline-offset-2 ${variants[variant]} ${block ? "w-full justify-center" : ""} ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
}
